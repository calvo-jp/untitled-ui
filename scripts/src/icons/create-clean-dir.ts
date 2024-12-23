import fs from 'node:fs/promises';

export async function createCleanDir(location: string) {
  await fs.rm(location, {force: true, recursive: true});
  await fs.mkdir(location, {recursive: true});
}
