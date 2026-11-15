import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';

const ANDROID_APP_ID = 'ca-app-pub-1622329571366129~8541634640';
const IOS_APP_ID = 'ca-app-pub-1622329571366129~6382375164';

async function readIfPresent(path) {
  try {
    return await readFile(path, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}

async function writeUpdated(path, content) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, content, 'utf8');
}

const manifestPath = 'android/app/src/main/AndroidManifest.xml';
const manifest = await readIfPresent(manifestPath);
if (manifest !== null) {
  let next = manifest;
  if (!next.includes('com.google.android.gms.ads.APPLICATION_ID')) {
    next = next.replace(
      /(<application\\b[^>]*>)/,
      `$1\\n        <meta-data android:name="com.google.android.gms.ads.APPLICATION_ID" android:value="@string/admob_app_id" />`
    );
  }
  await writeUpdated(manifestPath, next);

  const stringsPath = 'android/app/src/main/res/values/strings.xml';
  let strings = await readIfPresent(stringsPath);
  if (strings === null) strings = '<?xml version="1.0" encoding="utf-8"?>\\n<resources>\\n</resources>\\n';
  if (strings.includes('<string name="admob_app_id">')) {
    strings = strings.replace(/<string name="admob_app_id">[^<]*<\\/string>/, `<string name="admob_app_id">${ANDROID_APP_ID}</string>`);
  } else {
    strings = strings.replace('</resources>', `    <string name="admob_app_id">${ANDROID_APP_ID}</string>\\n</resources>`);
  }
  await writeUpdated(stringsPath, strings);
}

const plistPath = 'ios/App/App/Info.plist';
let plist = await readIfPresent(plistPath);
if (plist !== null) {
  if (plist.includes('<key>GADApplicationIdentifier</key>')) {
    plist = plist.replace(
      /<key>GADApplicationIdentifier<\\/key>\\s*<string>[^<]*<\\/string>/,
      `<key>GADApplicationIdentifier</key>\\n\\t<string>${IOS_APP_ID}</string>`
    );
  } else {
    plist = plist.replace(
      '</dict>',
      `\\t<key>GADApplicationIdentifier</key>\\n\\t<string>${IOS_APP_ID}</string>\\n\\t<key>SKAdNetworkItems</key>\\n\\t<array>\\n\\t\\t<dict>\\n\\t\\t\\t<key>SKAdNetworkIdentifier</key>\\n\\t\\t\\t<string>cstr6suwn9.skadnetwork</string>\\n\\t\\t</dict>\\n\\t</array>\\n</dict>`
    );
  }
  await writeUpdated(plistPath, plist);
}

if (manifest === null && plist === null) {
  console.error('No Android or iOS project found. Run npx cap add android and/or npx cap add ios first.');
  process.exitCode = 1;
} else {
  console.log('Native AdMob application IDs configured.');
}
