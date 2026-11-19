// @ts-check
import { defineConfig } from 'astro/config';
import { prebuildGallery } from './src/lib/img.mjs';

/**
 * Resizes gallery photos before the build copies public/ into dist/.
 * In dev the same copies are made lazily, the first time a page asks for them.
 * @returns {import('astro').AstroIntegration}
 */
function galleryImages() {
  return {
    name: 'gallery-images',
    hooks: {
      'astro:config:setup': async ({ command, logger }) => {
        if (command !== 'build') return;
        const n = await prebuildGallery(['sq240', 'sq480', 'sq720', 'w640', 'full']);
        logger.info(`resized ${n} gallery photos`);
      },
    },
  };
}

// Static portfolio. Update `site` to the real deploy URL when known.
export default defineConfig({
  site: 'https://ashwin-kv.example.com',
  trailingSlash: 'ignore',
  integrations: [galleryImages()],
});
