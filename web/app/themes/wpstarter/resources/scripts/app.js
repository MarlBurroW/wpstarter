import { domReady } from "@roots/sage/client";

/**
 * app.main
 */
const main = async (err) => {
  if (err) {
    // handle hmr errors
    console.error(err);
  }

  ["cta"].forEach((blockId) => {
    const blocks = document.querySelectorAll(`.block.${blockId}`);

    if (blocks.length > 0) {
      import(`./blocks/${blockId}`).then((module) => {
        const blockScript = module.default;

        for (let i = 0; i < blocks.length; i++) {
          const block = blocks[i];
          blockScript.run(block);
        }
      });
    }
  });
};

/**
 * Initialize
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */
domReady(main);
import.meta.webpackHot?.accept(main);
