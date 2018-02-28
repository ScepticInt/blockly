/**
 * @fileoverview Sensor blocks for all systems.
 * @requires Blockly.Blocks
 * @author Beate
 */

'use strict';

goog.provide('Blockly.Blocks.robSensorDefinitions');

goog.require('Blockly.Blocks');

// define sensors here as a property of sensors  ********************************************************************************

/*- minimal example:
 *
 * sensors.ultrasonic.ev3 = {
 *     title : 'ULTRASONIC',
 *     modes : [ {
 *         name : 'PRESENCE',
 *         type : 'Boolean',
 *     } ],
 * };
 *
 */

/*- all supported properties:
 *
 * title,
 * ports,
 * modes,
 *     name,
 *     type,
 *     value,
 *     unit,
 *     op,
 * standardPort
 */

var sensors = {};

sensors.accelerometer = {};
sensors.accelerometer.calliope = {
    title : 'ACCELEROMETER',
    modes : [ {
        name : 'VALUE',
        type : 'Number',
        unit : 'MILLIG',
        op : 'NUM_REV',
        value : 512
    } ],
    ports : [ [ 'x', 'X' ], [ 'y', 'Y' ], [ 'z', 'Z' ], [ 'STRENGTH', 'STRENGTH' ] ],
};
sensors.accelerometer.microbit = sensors.accelerometer.calliope;

sensors.battery = {};
sensors.battery.ardu = {
    title : 'BATTERY',
    modes : [ {
        name : 'VALUE',
        type : 'Number',
        unit : 'VOLT',
    } ]
};
sensors.battery.arduino = sensors.battery.ardu;

sensors.code = {};
sensors.code.bob3 = {
    title : 'CODE',
    modes : [ {
        name : 'VALUE',
        type : 'Number',
        value : '11'
    } ]
};

sensors.colour = {};
sensors.colour.ardu = {
    title : 'COLOUR',
    ports : [ [ 'LEFT', '1' ], [ 'RIGHT', '2' ] ],
    modes : [ {
        name : 'COLOUR',
        type : 'Colour',
        value : '#b30006'
    }, {
        name : 'LIGHT',
        type : 'Number',
        unit : 'PERCENT',
    }, {
        name : 'RGB',
        type : 'Array_Number',
    } ]
};
sensors.colour.ev3 = {
    title : 'COLOUR',
    ports : [ [ 'Port 1', '1' ], [ 'Port 2', '2' ], [ 'Port 3', '3' ], [ 'Port 4', '4' ] ],
    modes : [ {
        name : 'COLOUR',
        type : 'Colour',
        value : '#b30006'
    }, {
        name : 'LIGHT',
        type : 'Number',
        unit : 'PERCENT',
        value : 50
    }, {
        name : 'AMBIENTLIGHT',
        type : 'Number',
        unit : 'PERCENT',
        value : 50
    }, {
        name : 'RGB',
        type : 'Array_Number',
    } ],
    standardPort : '3',
};
sensors.colour.nxt = sensors.colour.ev3;

sensors.compass = {};
sensors.compass.ardu = {
    title : 'COMPASS',
    modes : [ {
        name : 'ANGLE',
        type : 'Number',
        unit : 'DEGREE',
    } ]
};
sensors.compass.calliope = sensors.compass.ardu;
sensors.compass.microbit = sensors.compass.ardu;
sensors.compass.ev3 = {
    title : 'COMPASS',
    modes : [ {
        name : 'ANGLE',
        type : 'Number',
        unit : 'DEGREE',
    }, {
        name : 'COMPASS',
        type : 'Number',
        unit : 'DEGREE',
    } ],
    ports : [ [ 'Port 1', '1' ], [ 'Port 2', '2' ], [ 'Port 3', '3' ], [ 'Port 4', '4' ] ],
    standardPort : '1',
};

sensors.encoder = {};
sensors.encoder.ardu = {
    title : 'ENCODER',
    modes : [ {
        name : 'DEGREE',
        type : 'Number',
        unit : 'DEGREE',
    }, {
        name : 'ROTATION',
        type : 'Number',
        unit : '',
    }, {
        name : 'DISTANCE',
        type : 'Number',
        unit : 'CM',
    } ],
    ports : [ [ 'A', 'A' ], [ 'B', 'B' ], [ 'C', 'C' ], [ 'D', 'D' ] ]
};
sensors.encoder.ev3 = {
    title : 'ENCODER',
    modes : [ {
        name : 'DEGREE',
        type : 'Number',
        unit : 'DEGREE',
        op : 'NUM_REV',
        value : 180
    }, {
        name : 'ROTATION',
        type : 'Number',
        unit : '',
        op : 'NUM_REV',
        value : 2
    }, {
        name : 'DISTANCE',
        type : 'Number',
        unit : 'CM',
    } ],
    ports : [ [ 'A', 'A' ], [ 'B', 'B' ], [ 'C', 'C' ], [ 'D', 'D' ] ]
};
sensors.encoder.nxt = {
    title : 'ENCODER',
    modes : [ {
        name : 'DEGREE',
        type : 'Number',
        unit : 'DEGREE',
        op : 'NUM_REV',
        value : 180
    }, {
        name : 'ROTATION',
        type : 'Number',
        unit : '',
        op : 'NUM_REV',
        value : 2
    }, {
        name : 'DISTANCE',
        type : 'Number',
        unit : 'CM',
    } ],
    ports : [ [ 'A', 'A' ], [ 'B', 'B' ], [ 'C', 'C' ] ]
};

sensors.gesture = {};
sensors.gesture.calliope = {
//    title : 'GESTURE',
//    modes : [ {
//        name : 'PRESSED',
//        type : 'Boolean',
//        question : true,
//    } ],
//    ports : [ [ 'SENSOR_GESTURE_UP', 'UP' ], [ 'SENSOR_GESTURE_DOWN', 'DOWN' ], [ 'SENSOR_GESTURE_FACE_UP', 'FACE_UP' ],
//            [ 'SENSOR_GESTURE_FACE_DOWN', 'FACE_DOWN' ], [ 'SENSOR_GESTURE_SHAKE', 'SHAKE' ], [ 'SENSOR_GESTURE_FREEFALL', 'FREEFALL' ] ],
//    standardPort : 'UP',
    title : 'GESTURE',
    modes : [ {
        name : 'UP',
        type : 'Boolean',
    }, {
        name : 'DOWN',
        type : 'Boolean',
    }, {
        name : 'FACE_DOWN',
        type : 'Boolean',
    }, {
        name : 'FACE_UP',
        type : 'Boolean',
    }, {
        name : 'SHAKE',
        type : 'Boolean',
    }, {
        name : 'FREEFALL',
        type : 'Boolean',
    } ]
};
sensors.gesture.microbit = sensors.gesture.calliope;

sensors.gyro = {};
sensors.gyro.calliope = {
    title : 'GYRO',
    modes : [ {
        name : 'ANGLE',
        type : 'Number',
        unit : 'DEGREE',
        op : 'NUM_REV',
        value : 90
    } ],
    ports : [ [ 'x', 'X' ], [ 'y', 'Y' ] ],
};
sensors.gyro.ev3 = {
    title : 'GYRO',
    modes : [ {
        name : 'ANGLE',
        type : 'Number',
        unit : 'DEGREE',
        op : 'NUM_REV',
        value : 90
    }, {
        name : 'RATE',
        type : 'Number',
        unit : 'OMEGA',
        op : 'NUM_REV',
        value : 90
    } ],
    ports : [ [ 'Port 1', '1' ], [ 'Port 2', '2' ], [ 'Port 3', '3' ], [ 'Port 4', '4' ] ],
    standardPort : '2',
};

sensors.infrared = {};
sensors.infrared.ardu = {
    title : 'INFRARED',
    ports : [ [ 'LEFT', '1' ], [ 'RIGHT', '2' ], [ 'BOTH', 'BOTH' ] ],
    modes : [ {
        name : 'OBSTACLE',
        type : 'Boolean',
    }, {
        name : 'PRESENCE',
        type : 'Boolean',
    } ]
};

sensors.infrared.bob3 = {
    title : 'INFRARED',
    modes : [ {
        name : 'AMBIENTLIGHT',
        type : 'Number',
        unit : 'PERCENT'
    } ]
};

sensors.infrared.ev3 = {
    title : 'INFRARED',
    ports : [ [ 'Port 1', '1' ], [ 'Port 2', '2' ], [ 'Port 3', '3' ], [ 'Port 4', '4' ] ],
    modes : [ {
        name : 'DISTANCE',
        type : 'Number',
        unit : 'CM'
    }, {
        name : 'PRESENCE',
        type : 'Array_Number',
    } ]
};

sensors.irseeker = {};
sensors.irseeker.ev3 = {
    title : 'IRSEEKER',
    ports : [ [ 'Port 1', '1' ], [ 'Port 2', '2' ], [ 'Port 3', '3' ], [ 'Port 4', '4' ] ],
    modes : [ {
        name : 'MODULATED',
        type : 'Number',
        unit : 'DEGREE'
    }, {
        name : 'UNMODULATED',
        type : 'Number',
        unit : 'DEGREE'
    } ]
}

sensors.key = {};
sensors.key.ardu = {
    title : 'KEY',
    modes : [ {
        name : 'PRESSED',
        type : 'Boolean',
        question : true
    } ],
    ports : [ [ '1', 'LEFT' ], [ '2', 'ENTER' ], [ '3', 'RIGHT' ], [ 'SENSOR_KEY_ANY', 'ANY' ] ]
};
sensors.key.arduino = {
    title : 'KEY',
    modes : [ {
        name : 'PRESSED',
        type : 'Boolean',
        question : true
    } ],
    ports : [ [ '1', '1' ], [ '2', '2' ], [ '3', '3' ], [ '4', '4' ], [ '5', '5' ], [ '6', '6' ], [ '7', '7' ], [ '8', '8' ], [ '9', '9' ], [ '10', '10' ], [ '11', '11' ], [ '12', '12' ], [ '13', '13' ],  [ 'SENSOR_KEY_ANY', 'ANY' ] ]
};
sensors.key.calliope = {
    title : 'KEY',
    modes : [ {
        name : 'PRESSED',
        type : 'Boolean',
        question : true
    } ],
    ports : [ [ 'A', 'button_a' ], [ 'B', 'button_b' ] ]
};
sensors.key.ev3 = {
    title : 'KEY',
    modes : [ {
        name : 'PRESSED',
        type : 'Boolean',
        question : true
    } ],
    ports : [ [ 'SENSOR_KEY_ENTER', 'ENTER' ], [ 'SENSOR_KEY_UP', 'UP' ], [ 'SENSOR_KEY_DOWN', 'DOWN' ], [ 'SENSOR_KEY_LEFT', 'LEFT' ],
            [ 'SENSOR_KEY_RIGHT', 'RIGHT' ], [ 'SENSOR_KEY_ESCAPE', 'ESCAPE' ], [ 'SENSOR_KEY_ANY', 'ANY' ] ]
};
sensors.key.nxt = {
    title : 'KEY',
    modes : [ {
        name : 'PRESSED',
        type : 'Boolean',
        question : true
    } ],
    ports : [ [ 'SENSOR_KEY_ENTER', 'ENTER' ], [ 'SENSOR_KEY_LEFT', 'LEFT' ], [ 'SENSOR_KEY_RIGHT', 'RIGHT' ] ]
};
sensors.key.microbit = sensors.key.calliope;

sensors.light = {};
sensors.light.ardu = {
    title : 'LIGHT',
    modes : [ {
        name : 'LIGHT',
        type : 'Number',
        unit : 'PERCENT'
    } ],
    ports : [ [ '0', '0' ], [ '1', '1' ], [ '2', '2' ], [ '3', '3' ], [ '4', '4' ], [ '5', '5' ], [ '6', '6' ], [ '7', '7' ] ]
};
sensors.light.arduino = {
  title : 'LIGHT',
  modes : [ {
      name : 'LIGHT',
      type : 'Number',
      unit : 'PERCENT'
  } ]
}
sensors.light.calliope = {
    title : 'LIGHT',
    modes : [ {
        name : 'VALUE',
        type : 'Number',
        unit : 'PERCENT'
    } ],
};
sensors.light.nxt = {
    title : 'LIGHT',
    modes : [ {
        name : 'LIGHT',
        type : 'Number',
        unit : 'PERCENT',
        value : 50
    }, {
        name : 'AMBIENTLIGHT',
        type : 'Number',
        unit : 'PERCENT',
        value : 50
    } ],
    ports : [ [ 'Port 1', '1' ], [ 'Port 2', '2' ], [ 'Port 3', '3' ], [ 'Port 4', '4' ] ],
    standardPort : '3',
};

sensors.rssi = {};
sensors.rssi.calliope = {
    title : 'RSSI',
    modes : [ {
        name : 'VALUE',
        type : 'Number',
    } ],
}

sensors.sound = {};
sensors.sound.calliope = {
    title : 'SOUND',
    modes : [ {
        name : 'SOUND',
        type : 'Number',
        unit : 'PERCENT',
        op : 'NUM_REV',
        value : 50
    } ],
}
sensors.sound.ev3 = {
    title : 'SOUND',
    modes : [ {
        name : 'SOUND',
        type : 'Number',
        unit : 'PERCENT',
        op : 'NUM_REV',
        value : 50
    } ],
    ports : [ [ 'Port 1', '1' ], [ 'Port 2', '2' ], [ 'Port 3', '3' ], [ 'Port 4', '4' ] ]
}
sensors.sound.nxt = {
    title : 'SOUND',
    modes : [ {
        name : 'SOUND',
        type : 'Number',
        unit : 'PERCENT',
        op : 'NUM_REV',
        value : 50
    } ],
    ports : [ [ 'Port 1', '1' ], [ 'Port 2', '2' ], [ 'Port 3', '3' ], [ 'Port 4', '4' ] ],
    standardPort : '2',
}

sensors.temperature = {};
sensors.temperature.arduino = {
    title : 'TEMPERATURE',
    modes : [ {
        name : 'VALUE',
        type : 'Number',
        unit : 'DEGREE',
        value : 20
    } ]
};
sensors.temperature.bob3 = {
    title : 'TEMPERATURE',
    modes : [ {
        name : 'VALUE',
        type : 'Number',
        unit : 'DEGREE',
        value : 20
    } ]
};
sensors.temperature.calliope = sensors.temperature.bob3
sensors.temperature.microbit = sensors.temperature.bob3

sensors.timer = {};
sensors.timer.ardu = {
    title : 'TIMER',
    modes : [ {
        name : 'VALUE',
        type : 'Number',
        unit : 'MS',
        op : 'NUM_REV',
        value : 500
    } ],
    ports : [ [ ' 1', '1' ] ]
};
sensors.timer.bob3 = sensors.timer.ardu;
sensors.timer.calliope = sensors.timer.ardu;
sensors.timer.nxt = sensors.timer.ardu;
sensors.timer.microbit = sensors.timer.ardu;
sensors.timer.arduino = sensors.timer.ardu;
sensors.timer.ev3 = {
    title : 'TIMER',
    modes : [ {
        name : 'VALUE',
        type : 'Number',
        unit : 'MS',
        op : 'NUM_REV',
        value : 500
    } ],
    ports : [ [ ' 1', '1' ], [ ' 2', '2' ], [ ' 3', '3' ], [ ' 4', '4' ], [ ' 5', '5' ] ]
};

sensors.pin = {};
sensors.pin.calliope = {
    title : 'PIN',
    modes : [ {
        name : 'ANALOG',
        type : 'Number',
        ports : [ [ '1', '1' ], [ '2', '2' ], [ 'A1', '5' ] ],
    }, {
        name : 'DIGITAL',
        type : 'Number',
        ports : [ [ '0', '0' ], [ '1', '1' ], [ '2', '2' ], [ '3', '3' ], [ 'A0', '4' ], [ 'A1', '5' ] ],
    }, {
        name : 'PULSE_HIGH',
        type : 'Number',
        ports : [ [ '0', '0' ], [ '1', '1' ], [ '2', '2' ], [ '3', '3' ], [ 'A0', '4' ], [ 'A1', '5' ] ],
    }, {
        name : 'PULSE_LOW',
        type : 'Number',
        ports : [ [ '0', '0' ], [ '1', '1' ], [ '2', '2' ], [ '3', '3' ], [ 'A0', '4' ], [ 'A1', '5' ] ],
    } ],
};
sensors.pin.microbit = {
    title : 'PIN',
    ports : [ [ '0', '0' ], [ '1', '1' ], [ '2', '2' ] ],
    modes : [ {
        name : 'ANALOG',
        type : 'Number',
    }, {
        name : 'DIGITAL',
        type : 'Number',
    }, {
        name : 'PULSE_HIGH',
        type : 'Number',
    }, {
        name : 'PULSE_LOW',
        type : 'Number',
    } ],
};

sensors.pintouch = {};
sensors.pintouch.bob3 = {
    title : 'PINTOUCH',
    ports : [ [ 'LEFT', '2' ], [ 'RIGHT', '1' ] ],
    slots : [ [ 'SENSOR_TOP', '1' ], [ 'CENTER', '2' ], [ 'SENSOR_BOTTOM', '3' ], [ 'SENSOR_ANY', '0' ] ],
    modes : [ {
        name : 'PRESSED',
        type : 'Boolean',
        question : true,
    } ]
};
sensors.pintouch.calliope = {
    title : 'PINTOUCH',
    ports : [ [ ' 0', '0' ], [ ' 1', '1' ], [ ' 2', '2' ], [ ' 3', '3' ] ],
    modes : [ {
        name : 'PRESSED',
        type : 'Boolean',
        question : true,
    } ],
    standardPort : '1'
};
sensors.pintouch.microbit = sensors.pintouch.calliope;

sensors.touch = {};
sensors.touch.ev3 = {
    title : 'TOUCH',
    ports : [ [ 'Port 1', '1' ], [ 'Port 2', '2' ], [ 'Port 3', '3' ], [ 'Port 4', '4' ] ],
    modes : [ {
        name : 'PRESSED',
        type : 'Boolean',
        question : true,
    } ],
    standardPort : '1'
};
sensors.touch.nxt = sensors.touch.ev3;

sensors.ultrasonic = {};
sensors.ultrasonic.ardu = {
    title : 'ULTRASONIC',
    ports : [ [ 'LEFT', '0' ], [ 'CENTER', '1' ], [ 'RIGHT', '2' ], [ 'SENSOR_SONAR', '3' ] ],
    modes : [ {
        name : 'DISTANCE',
        type : 'Number',
        unit : 'CM',
    } ]
};
sensors.ultrasonic.arduino = {
    title : 'ULTRASONIC',
    modes : [ {
        name : 'DISTANCE',
        type : 'Number',
        unit : 'CM',
    } ]
};
sensors.ultrasonic.ev3 = {
    title : 'ULTRASONIC',
    ports : [ [ 'Port 1', '1' ], [ 'Port 2', '2' ], [ 'Port 3', '3' ], [ 'Port 4', '4' ] ],
    modes : [ {
        name : 'DISTANCE',
        type : 'Number',
        unit : 'CM',
    }, {
        name : 'PRESENCE',
        type : 'Boolean',
    } ],
    standardPort : '4'
};

sensors.ultrasonic.nxt = {
    title : 'ULTRASONIC',
    ports : [ [ 'Port 1', '1' ], [ 'Port 2', '2' ], [ 'Port 3', '3' ], [ 'Port 4', '4' ] ],
    modes : [ {
        name : 'DISTANCE',
        type : 'Number',
        unit : 'CM',
    } ],
    standardPort : '4'
};
sensors.ultrasonic.mbot = sensors.ultrasonic.nxt;

sensors.moisture = {};
sensors.moisture.arduino = {
  title : 'MOISTURE',
  modes : [ {
      name : 'MOISTURE',
      type : 'Number',
      unit : 'PERCENT'
  } ]
}

var sensorsAll = [];
sensorsAll.ardu = [ sensors.infrared.ardu, sensors.light.ardu, sensors.compass.ardu, sensors.ultrasonic.ardu, sensors.colour.ardu, sensors.key.ardu ];
sensorsAll.ev3 = [ sensors.touch.ev3, sensors.ultrasonic.ev3, sensors.colour.ev3, sensors.infrared.ev3, sensors.encoder.ev3, sensors.key.ev3, sensors.gyro.ev3,
        sensors.timer.ev3, sensors.compass.ev3, sensors.irseeker.ev3 ];
sensorsAll.nxt = [ sensors.touch.nxt, sensors.sound.nxt, sensors.light.nxt, sensors.ultrasonic.nxt, sensors.encoder.nxt, sensors.key.nxt, sensors.colour.nxt,
        sensors.timer.nxt ];
sensorsAll.bob3 = [ sensors.pintouch.bob3, sensors.infrared.bob3, sensors.temperature.bob3, sensors.timer.bob3 ];
sensorsAll.calliope = [ sensors.key.calliope, sensors.pintouch.calliope, sensors.gesture.calliope, sensors.compass.calliope, sensors.sound.calliope,
        sensors.timer.calliope, sensors.temperature.calliope, sensors.light.calliope, sensors.pin.calliope, sensors.gyro.calliope,
        sensors.accelerometer.calliope ];
sensorsAll.microbit = [ sensors.key.microbit, sensors.pintouch.microbit, sensors.gesture.microbit, sensors.compass.microbit, sensors.timer.microbit,
        sensors.temperature.microbit, sensors.pin.microbit, sensors.accelerometer.microbit ];

function initSensors() {
    for ( var sensor in sensors) {
        if (sensors.hasOwnProperty(sensor)) {
            Blockly.Blocks['robSensors_' + sensor + '_getSample'] = {
                sensor : sensor,
                init : function() {
                    Blockly.Blocks['robSensors_generic'].init.call(this, sensors[this.sensor][this.workspace.device]);
                }
            };
        }
    }
};

initSensors();

Blockly.Blocks['robSensors_getSample'] = {
    init : function() {
        Blockly.Blocks['robSensors_generic_all'].init.call(this, sensorsAll[this.workspace.device]);
    }
};

// map other names to the available ones here ***********************************************************************************

Blockly.Blocks['robSensors_battery_voltage'] = Blockly.Blocks['robSensors_battery_getSample'];
Blockly.Blocks['robSensors_key_isPressed'] = Blockly.Blocks['robSensors_key_getSample'];
Blockly.Blocks['robSensors_touch_isPressed'] = Blockly.Blocks['robSensors_touch_getSample'];

Blockly.Blocks['robSensors_getSample_ardu'] = Blockly.Blocks['robSensors_getSample'];

Blockly.Blocks['bob3Sensors_ambientlight'] = Blockly.Blocks['robSensors_infrared_getSample'];
Blockly.Blocks['bob3Sensors_temperature_getSample'] = Blockly.Blocks['robSensors_temperature_getSample'];
Blockly.Blocks['bob3Sensors_getCode'] = Blockly.Blocks['robSensors_code_getSample'];
Blockly.Blocks['bob3Sensors_touch_getSample'] = Blockly.Blocks['robSensors_pintouch_getSample'];
Blockly.Blocks['bob3Sensors_getSample_bob3'] = Blockly.Blocks['robSensors_getSample'];

Blockly.Blocks['mbedSensors_getSample'] = Blockly.Blocks['robSensors_getSample'];
// Blockly.Blocks['mbedControls_wait_for'] = Blockly.Blocks['robControls_wait_for'];
Blockly.Blocks['mbedSensors_key_isPressed'] = Blockly.Blocks['robSensors_key_getSample'];
Blockly.Blocks['mbedSensors_pin_isTouched'] = Blockly.Blocks['robSensors_pintouch_getSample'];
Blockly.Blocks['mbedSensors_gesture_isActive'] = Blockly.Blocks['robSensors_gesture_getSample'];
Blockly.Blocks['mbedSensors_compass_getSample'] = Blockly.Blocks['robSensors_compass_getSample'];
Blockly.Blocks['mbedSensors_microphone_getSample'] = Blockly.Blocks['robSensors_sound_getSample'];
Blockly.Blocks['mbedSensors_timer_getSample'] = Blockly.Blocks['robSensors_timer_getSample'];
Blockly.Blocks['mbedSensors_temperature_getSample'] = Blockly.Blocks['robSensors_temperature_getSample'];
Blockly.Blocks['mbedSensors_getRssi'] = Blockly.Blocks['robSensors_rssi_getSample'];
Blockly.Blocks['mbedSensors_ambientLight_getSample'] = Blockly.Blocks['robSensors_light_getSample'];
Blockly.Blocks['mbedSensors_pin_getSample'] = Blockly.Blocks['robSensors_pin_getSample'];
Blockly.Blocks['mbedSensors_rotation_getSample'] = Blockly.Blocks['robSensors_gyro_getSample'];
Blockly.Blocks['mbedSensors_acceleration_getSample'] = Blockly.Blocks['robSensors_accelerometer_getSample'];
