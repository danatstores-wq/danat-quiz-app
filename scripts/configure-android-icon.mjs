import { copyFile, mkdir, readdir, rm, writeFile, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const source = 'public/images/IMG-20261123-WA0002.jpg';
const resDir = 'android/app/src/main/res';
const manifestPath = 'android/app/src/main/AndroidManifest.xml';

await mkdir(join(resDir, 'drawable-nodpi'), { recursive: true });
await copyFile(source, join(resDir, 'drawable-nodpi/danat_quiz_icon.jpg'));

// Remove the generated default launcher artwork so it cannot override the uploaded icon.
for (const entry of await readdir(resDir, { withFileTypes: true })) {
  if (!entry.isDirectory() || !entry.name.startsWith('mipmap-')) continue;
  const folder = join(resDir, entry.name);
  for (const file of await readdir(folder)) {
    if (/^ic_launcher(?:_round)?\.(?:png|jpe?g|webp|xml)$/i.test(file)) {
      await rm(join(folder, file), { force: true });
    }
  }
}

await mkdir(join(resDir, 'mipmap-nodpi'), { recursive: true });
await mkdir(join(resDir, 'mipmap-anydpi-v26'), { recursive: true });
await copyFile(source, join(resDir, 'mipmap-nodpi/ic_launcher.jpg'));
await copyFile(source, join(resDir, 'mipmap-nodpi/ic_launcher_round.jpg'));

const adaptiveIcon = `<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/danat_quiz_icon_background" />
    <foreground android:drawable="@drawable/danat_quiz_icon" />
</adaptive-icon>
`;
await writeFile(join(resDir, 'mipmap-anydpi-v26/ic_launcher.xml'), adaptiveIcon);
await writeFile(join(resDir, 'mipmap-anydpi-v26/ic_launcher_round.xml'), adaptiveIcon);

const valuesDir = join(resDir, 'values');
await mkdir(valuesDir, { recursive: true });
await writeFile(join(valuesDir, 'danat_icon_colors.xml'), `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="danat_quiz_icon_background">#5B21B6</color>
</resources>
`);

let manifest = await readFile(manifestPath, 'utf8');
const appTag = manifest.match(/<application\b[^>]*>/s);
if (!appTag) throw new Error('AndroidManifest.xml has no application element.');
let updatedTag = appTag[0];
for (const [name, value] of [
  ['android:icon', '@mipmap/ic_launcher'],
  ['android:roundIcon', '@mipmap/ic_launcher_round']
]) {
  const attr = new RegExp(name.replace(':', '\\:') + '="[^"]*"');
  updatedTag = attr.test(updatedTag)
    ? updatedTag.replace(attr, name + '="' + value + '"')
    : updatedTag.replace(/>$/, ' ' + name + '="' + value + '">');
}
manifest = manifest.replace(appTag[0], updatedTag);
await writeFile(manifestPath, manifest, 'utf8');

console.log('Danat Quiz Android launcher icon configured from ' + source);
