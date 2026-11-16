import { Capacitor } from '@capacitor/core';
import {
  AdMob,
  AdmobConsentStatus,
  BannerAdPluginEvents,
  BannerAdPosition,
  BannerAdSize
} from '@capacitor-community/admob';

const ADMOB_UNITS = {
  android: {
    banner: 'ca-app-pub-1622329571366129/7228552979',
    rewardedLife: 'ca-app-pub-1622329571366129/5894243820',
    rewardedPoints: 'ca-app-pub-1622329571366129/4581162153'
  },
  ios: {
    banner: 'ca-app-pub-1622329571366129/7352676051',
    rewardedLife: 'ca-app-pub-1622329571366129/9787267701',
    rewardedPoints: 'ca-app-pub-1622329571366129/8282614340'
  }
};

let initializationPromise;

function getPlatformUnits() {
  const platform = Capacitor.getPlatform();
  return platform === 'android' || platform === 'ios' ? ADMOB_UNITS[platform] : null;
}

async function ensureAdMobReady() {
  if (!Capacitor.isNativePlatform()) {
    const error = new Error('MOBILE_ONLY');
    error.code = 'MOBILE_ONLY';
    throw error;
  }

  if (!initializationPromise) {
    initializationPromise = (async () => {
      let consent = await AdMob.requestConsentInfo();

      if (
        consent.isConsentFormAvailable &&
        consent.status === AdmobConsentStatus.REQUIRED
      ) {
        consent = await AdMob.showConsentForm();
      }

      if (!consent.canRequestAds) {
        const error = new Error('CONSENT_NOT_GRANTED');
        error.code = 'CONSENT_NOT_GRANTED';
        throw error;
      }

      await AdMob.initialize();
      return true;
    })().catch((error) => {
      initializationPromise = null;
      throw error;
    });
  }

  return initializationPromise;
}

export function startNativeBanner() {
  if (!Capacitor.isNativePlatform()) return () => {};

  let disposed = false;
  let sizeListener;

  (async () => {
    await ensureAdMobReady();
    if (disposed) return;

    sizeListener = await AdMob.addListener(
      BannerAdPluginEvents.SizeChanged,
      ({ height }) => {
        if (disposed) return;
        document.documentElement.style.setProperty(
          '--native-ad-banner-height',
          height > 0 ? `${height}px` : '0px'
        );
      }
    );

    const units = getPlatformUnits();
    if (!units) return;

    // Reserve the native banner area immediately so it never covers the bottom navigation.
    document.documentElement.style.setProperty('--native-ad-banner-height', '56px');

    await AdMob.showBanner({
      adId: units.banner,
      adSize: BannerAdSize.ADAPTIVE_BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
      isTesting: import.meta.env.VITE_ADMOB_TEST_MODE === 'true'
    });
  })().catch((error) => {
    console.warn('Native AdMob banner could not be started:', error);
  });

  return () => {
    disposed = true;
    sizeListener?.remove();
    document.documentElement.style.removeProperty('--native-ad-banner-height');
    AdMob.removeBanner().catch((error) => {
      console.warn('Native AdMob banner cleanup failed:', error);
    });
  };
}

export async function showRewardedAd(placement, userId) {
  await ensureAdMobReady();

  const units = getPlatformUnits();
  const adId = placement === 'life' ? units?.rewardedLife : units?.rewardedPoints;
  if (!adId) throw new Error('UNSUPPORTED_AD_PLACEMENT');

  const preparedAd = await AdMob.prepareRewardVideoAd({
    adId,
    isTesting: import.meta.env.VITE_ADMOB_TEST_MODE === 'true',
    ...(userId ? {
      ssv: {
        userId,
        customData: JSON.stringify({ placement })
      }
    } : {})
  });

  const reward = await AdMob.showRewardVideoAd({
    adId: preparedAd?.adUnitId || adId
  });

  if (!reward || !Number.isFinite(Number(reward.amount)) || Number(reward.amount) <= 0) {
    return null;
  }

  return reward;
}
