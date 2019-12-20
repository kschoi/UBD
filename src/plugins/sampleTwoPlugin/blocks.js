/**
 * Block appearing in the block section of grapesjs. Can be dragged onto the canvas to generate a Timer.
 */

import {
  sampleTwoRef
} from "../../constants";

export default function (editor, opt = {}) {
  const c = opt;
  const bm = editor.BlockManager;

  // These are the styles that can be used both in the components and in the live view. See component.js onRender().
  // These styles will also appear in the template's css.
  // NOTE: only styles that have '.timer' in them will be put into the template's css.
  const style = c.defaultStyle ? `<style>
    .sampleTwo {
      color: red;
    }
  </style>` : '';

  bm.remove(sampleTwoRef);
  bm.add(sampleTwoRef, {
    label: c.blockLabel,
    category: c.blockCategory,
    attributes: { class: 'fa fa-smile-o' },
    content: `
        <div class="sampleTwo" data-gjs-type="${sampleTwoRef}"></div>
        ${style}
      `
  });
}
