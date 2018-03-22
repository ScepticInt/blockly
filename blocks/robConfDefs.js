/**
 * @fileoverview Sensor blocks for all systems.
 * @requires Blockly.Blocks
 * @author Beate
 */

'use strict';

goog.provide('Blockly.Blocks.robConfDefs');

goog.require('Blockly.Blocks');

// define sensors here as a property of sensors  ********************************************************************************

/*- minimal example:
 *
 * sensors.ultrasonic.ardu = {
 *     title : 'ULTRASONIC',
 *     ports : [ Trig, Echo ],
 * };
 *
 */

/*- all supported properties:
 *
 * title,
 * ports,
 */

var confBlocks = {};
var pinsD_UNO = [ [ '0', '0' ], [ '1', '1' ], ['2', '2' ],  [ '3', '3' ], [ '4', '4' ], [ '5', '5' ], [ '6', '6' ], [ '7', '7' ], [ '8', '8' ], [ '9', '9' ], [ '10', '10' ], [ '11', '11' ], [ '12', '12' ], [ '13', '13' ] ];
var pinsA_UNO = [ [ 'A0', 'A0' ], [ 'A1', 'A1' ], ['A2', 'A2' ], [ 'A3', 'A3' ], [ 'A4', 'A4' ], [ 'A5', 'A5' ] ];

confBlocks.ultrasonic = {};
confBlocks.ultrasonic.arduino = {
    title : 'ULTRASONIC',
    ports : [['Trig', 'TRIG'], ['Echo', 'ECHO']],
    pins: pinsD_UNO
};

confBlocks.light = {};
confBlocks.light.arduino = {
    title : 'LIGHT',
    ports : [['Output', 'Output']],
    pins: pinsA_UNO
};

confBlocks.moisture = {};
confBlocks.moisture.arduino = {
    title : 'MOISTURE',
    ports : [['S', 'S']],
    pins: pinsA_UNO
};

confBlocks.potentiometer = {};
confBlocks.potentiometer.arduino = {
    title : 'POTENTIOMETER',
    pins: pinsA_UNO
};

confBlocks.infrared = {};
confBlocks.infrared.arduino = {
    title : 'INFRARED',
    ports : [['Output', 'Output']],
    pins: pinsD_UNO
};

confBlocks.temperature = {};
confBlocks.temperature.arduino = {
    title : 'TEMPERATURE',
    ports : [['TMP36', 'TMP36']],
    pins: pinsA_UNO
};

confBlocks.humidity = {};
confBlocks.humidity.arduino = {
    title : 'HUMIDITY',
    ports : [['+', '+']],
    pins: pinsD_UNO
};

confBlocks.rotation = {};
confBlocks.rotation.arduino = {
    title : 'ROTATION',
    ports : [['Input', 'Input']],
    pins: pinsA_UNO
};

confBlocks.motion = {};
confBlocks.motion.arduino = {
    title : 'MOTION',
    ports : [['Output', 'Output']],
    pins: pinsD_UNO
};

confBlocks.button = {};
confBlocks.button.arduino = {
    title : 'KEY',
    ports : [['Output', 'Output']],
    pins: pinsD_UNO
};

confBlocks.drop = {};
confBlocks.drop.arduino = {
    title : 'DROP',
    ports : [['S', 'S']],
    pins: pinsA_UNO
};

confBlocks.pulse = {};
confBlocks.pulse.arduino = {
    title : 'PULSE',
    ports : [['S', 'S']],
    pins: pinsA_UNO
};

confBlocks.rfid = {};
confBlocks.rfid.arduino = {
    title : 'RFID',
    ports : [['SDA', 'SDA'], ['RST', 'RST'] ], //, ['SCK', 'SCK'], ['MOSI', 'MOSI'], ['MISO', 'MISO'] -- connected, but not used in the program
    pins: pinsD_UNO
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
