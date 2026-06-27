import { readdir } from 'fs/promises';
import path from 'path';
import { certificateGroups, type CertificateGroup } from './data';

const CERT_EXTENSIONS = ['.pdf', '.png', '.jpg', '.jpeg', '.webp'];

export type CertificateGroupWithFiles = CertificateGroup & { files: string[] };
export type CertificateGroupWithCount = CertificateGroup & { count: number };

async function listGroupFiles(slug: string): Promise<string[]> {
  const dir = path.join(process.cwd(), 'public', 'certificates', slug);
  try {
    const entries = await readdir(dir);
    return entries
      .filter(
        (f) =>
          !f.startsWith('.') &&
          CERT_EXTENSIONS.some((ext) => f.toLowerCase().endsWith(ext)),
      )
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
  } catch {
    return [];
  }
}

/** Full file listing per group. Use on the /certificates page. */
export async function getCertGroupsWithFiles(): Promise<CertificateGroupWithFiles[]> {
  return Promise.all(
    certificateGroups.map(async (g) => ({
      ...g,
      files: await listGroupFiles(g.slug),
    })),
  );
}

/** Just the counts. Use on the home About section sidebar. */
export async function getCertGroupCounts(): Promise<CertificateGroupWithCount[]> {
  return Promise.all(
    certificateGroups.map(async (g) => ({
      ...g,
      count: (await listGroupFiles(g.slug)).length,
    })),
  );
}
