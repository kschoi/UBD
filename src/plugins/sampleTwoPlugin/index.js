/**
 * Timer plugin.
 *
 * Defined various plugin defautl values and loads the timer block and timer component provided by the plugin
 */

import grapesjs from 'grapesjs';
import loadComponents from './components';
import loadBlocks from './blocks';

import {
    sampleTwoRef,
    sampleTwoPluginRef
} from '../../constants';

export default function addTimerPlugin() {
    grapesjs.plugins.add(sampleTwoPluginRef, (editor, opts = {}) => {
        let c = opts;

        let defaults = {
            blocks: [sampleTwoRef],

            // Label in block
            blockLabel: 'sample2',

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

