import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const viteBin = fileURLToPath(new URL('../node_modules/vite/bin/vite.js', import.meta.url));
const result = spawnSync(process.execPath, [viteBin, 'build'], {
  stdio: 'inherit',
  env: { ...process.env, VITE_BUILD_TARGET: 'mobile' }
});

process.exit(result.status ?? 1);
