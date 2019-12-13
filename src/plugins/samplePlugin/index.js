/**
 * Timer plugin.
 *
 * Defined various plugin defautl values and loads the timer block and timer component provided by the plugin
 */

import grapesjs from 'grapesjs';
import loadComponents from './components';
import loadBlocks from './blocks';

import {
    sampleRef,
    samplePluginRef
} from '../../constants';

export default function addTimerPlugin() {
    grapesjs.plugins.add(samplePluginRef, (editor, opts = {}) => {
        let c = opts;

        let defaults = {
            blocks: [sampleRef],

            // Label in block
            blockLabel: 'sample1',

            // Category in block
            blockCategory: '모바일 상품유닛',

            // Default style
            defaultStyle: true,

        };

        // Load defaults
        for (let name in defaults) {
            if (!(name in c))
                c[name] = defaults[name];
        }

        // Add components
        loadComponents(editor, c);

        // Add components
        loadBlocks(editor, c);


    });
}

