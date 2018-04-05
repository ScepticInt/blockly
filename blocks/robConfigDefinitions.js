/**
 * @fileoverview Sensor blocks for all systems.
 * @requires Blockly.Blocks
 * @author Beate
 */

'use strict';

goog.provide('Blockly.Blocks.robConfigDefinitions');

goog.require('Blockly.Blocks');

// define sensors here as a property of sensors  ********************************************************************************

/*- minimal example:
 *
 * confBlocks.lcdi2c.arduino = {
 * title : 'LCDI2C',
 *  sensor: false
 };
 *
 */

/*- all supported properties:
 *
 * title,
 * ports,
 * pins,
 * sensor
 * standardPins
 */

var confBlocks = {};
var pinsD_UNO = [ [ '0', '0' ], [ '1', '1' ], ['2', '2' ],  [ '3', '3' ], [ '4', '4' ], [ '5', '5' ], [ '6', '6' ], [ '7', '7' ], [ '8', '8' ], [ '9', '9' ], [ '10', '10' ], [ '11', '11' ], [ '12', '12' ], [ '13', '13' ] ];
var pinsA_UNO = [ [ 'A0', 'A0' ], [ 'A1', 'A1' ], ['A2', 'A2' ], [ 'A3', 'A3' ], [ 'A4', 'A4' ], [ 'A5', 'A5' ] ];

confBlocks.ultrasonic = {};
confBlocks.ultrasonic.arduino = {
    title : 'ULTRASONIC',
    ports : [['trig', 'TRIG'], ['echo', 'ECHO']],
    pins: pinsD_UNO,
    sensor: true,
    standardPins: ['7', '6']
};

confBlocks.light = {};
confBlocks.light.arduino = {
    title : 'LIGHT',
    ports : [['output', 'OUTPUT']],
    pins: pinsA_UNO,
    sensor: true,
    standardPins: ['A0']
};

confBlocks.moisture = {};
confBlocks.moisture.arduino = {
    title : 'MOISTURE',
    ports : [['S', 'S']],
    pins: pinsA_UNO,
    sensor: true,
    standardPins: ['6']
};

confBlocks.potentiometer = {};
confBlocks.potentiometer.arduino = {
    title : 'POTENTIOMETER',
    ports : [['input', 'INPUT']],
    pins: pinsA_UNO,
    sensor: true,
    standardPins: ['A0']
};

confBlocks.infrared = {};
confBlocks.infrared.arduino = {
    title : 'INFRARED',
    ports : [['output', 'OUTPUT']],
    pins: pinsD_UNO,
    sensor: true,
    standardPins: ['13']
};

confBlocks.temperature = {};
confBlocks.temperature.arduino = {
    title : 'TEMPERATURE',
    ports : [['TMP36', 'TMP36']],
    pins: pinsA_UNO,
    sensor: true,
    standardPins: ['A0']
};

confBlocks.humidity = {};
confBlocks.humidity.arduino = {
    title : 'HUMIDITY',
    ports : [['+', '+']],
    pins: pinsD_UNO,
    sensor: true,
    standardPins: ['2']
};

confBlocks.encoder = {};
confBlocks.encoder.arduino = {
    title : 'ENCODER',
    ports : [['output', 'OUTPUT']],
    pins: pinsA_UNO,
    sensor: true,
    standardPins: ['1', '2']
};

confBlocks.motion = {};
confBlocks.motion.arduino = {
    title : 'MOTION',
    ports : [['output', 'OUTPUT']],
    pins: pinsD_UNO,
    sensor: true,
    standardPins: ['7']
};

confBlocks.button = {};
confBlocks.button.arduino = {
    title : 'KEY',
    ports : [['output', 'OUTPUT']],
    pins: pinsD_UNO,
    sensor: true,
    standardPins: ['1', '2']
};

confBlocks.drop = {};
confBlocks.drop.arduino = {
    title : 'DROP',
    ports : [['S', 'S']],
    pins: pinsA_UNO,
    sensor: true,
    standardPins: ['A0']
};

confBlocks.pulse = {};
confBlocks.pulse.arduino = {
    title : 'PULSE',
    ports : [['S', 'S']],
    pins: pinsA_UNO,
    sensor: true,
    standardPins: ['A0']
};

confBlocks.rfid = {};
confBlocks.rfid.arduino = {
    title : 'RFID',
    ports : [['RST', 'RST'], ['SDA', 'SDA'],  ['SCK', 'SCK'], ['MOSI', 'MOSI'], ['MISO', 'MISO']],
    pins: pinsD_UNO,
    sensor: true,
    standardPins: ['9', '10', '13', '11', '12']
};

confBlocks.lcd = {};
confBlocks.lcd.arduino = {
    title : 'LCD',
    ports : [['RS', 'RS'], ['E', 'E'], ['D4', 'D4'], ['D5', 'D5'], ['D6', 'D6'], ['D7', 'D7'] ],
    pins: pinsD_UNO,
    sensor: false,
    standardPins: ['12', '11', '5', '4', '3', '2' ]
};

confBlocks.lcdi2c = {};
confBlocks.lcdi2c.arduino = {
    title : 'LCDI2C',
    sensor: false
};

confBlocks.led = {};
confBlocks.led.arduino = {
    title : 'LED',
    ports : [['output', 'OUTPUT']],
    pins: pinsD_UNO,
    sensor: false,
    standardPins: ['13']
};

confBlocks.play = {};
confBlocks.play.arduino = {
    title : 'PLAY',
    ports : [['+', '+']],
    pins: pinsD_UNO,
    sensor: false,
    standardPins: ['5']
};

confBlocks.relay = {};
confBlocks.relay.arduino = {
    title : 'RELAY',
    ports : [['IN', 'IN']],
    pins: pinsD_UNO,
    sensor: false,
    standardPins: ['6']
};

confBlocks.rgbled = {};
confBlocks.rgbled.arduino = {
    title : 'RGBLED',
    ports : [['red', 'RED'], ['green', 'GREEN'], ['blue', 'BLUE']],
    pins: pinsD_UNO,
    sensor: false,
    standardPins: ['5', '6', '3']
};

confBlocks.stepmotor = {};
confBlocks.stepmotor.arduino = {
    title : 'STEPMOTOR',
    ports : [['IN1', 'IN1'], ['IN2', 'IN2'], ['IN3', 'IN3'], ['IN4', 'IN4']],
    pins: pinsD_UNO,
    sensor: false,
    standardPins: ['6', '5', '4', '3']
};

confBlocks.servo = {};
confBlocks.servo.arduino = {
    title : 'SERVO',
    ports : [['pulse', 'PULSE']],
    pins: pinsD_UNO,
    sensor: false,
    standardPins: ['8']
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
