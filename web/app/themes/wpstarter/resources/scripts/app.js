import { domReady } from "@roots/sage/client";

/**
 * app.main
 */
const main = async (err) => {
  if (err) {
    // handle hmr errors
    console.error(err);
  }

  ["cta", "header"].forEach((blockId) => {
    const blocks = document.querySelectorAll(`.block.${blockId}`);

    if (blocks.length > 0) {
      for (let i = 0; i < blocks.length; i++) {
        const element = blocks[i];
      }
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
