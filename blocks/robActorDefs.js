/**
 * @fileoverview Actor blocks for all systems.
 * @requires Blockly.Blocks
 * @author Beate
 */

'use strict';

goog.provide('Blockly.Blocks.robActorDefs');

goog.require('Blockly.Blocks');

// define sensors here as a property of sensors  ********************************************************************************

/*- minimal example:
 *
 * actor.ultrasonic.ardu = {
 *     title : 'LED',
 *     ports : [ Trig, Echo ],
 * };
 *
 */

/*- all supported properties:
 *
 * title,
 * ports,
 */

var actionBlocks = {};

actors.lcd = {};
actors.lcd.arduino = {
    title : 'LCD',
    ports : [ [ 'Test1', 'Test1' ], [ 'Test2', 'Test2' ] ]
};


function initConfBlocks() {
    for ( var confBlock in confBlocks) {
        if (confBlocks.hasOwnProperty(confBlock)) {
            Blockly.Blocks['robConf_' + confBlock] = {
                confBlock : confBlock,
                init : function() {
                    Blockly.Blocks['robConf_generic'].init.call(this, confBlocks[this.confBlock][this.workspace.device]);
                }
            };
        }
    }
};

initConfBlocks();
