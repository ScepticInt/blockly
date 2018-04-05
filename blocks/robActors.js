/**
 * @fileoverview Sensor blocks for all systems.
 * @requires Blockly.Blocks
 * @author Beate
 */

'use strict';

goog.provide('Blockly.Blocks.robConf');

goog.require('Blockly.Blocks.robActorDefinitions');
goog.require('Blockly.Blocks');

Blockly.Blocks['robConf_generic'] = {
    /*- Generic sensor definition. Will create e.g. the following xml:
     *
     * <block type="robSensors_ultrasonic_getSample" id="vG?X/lTw]%:p!z.},u;r" intask="true">
     *     <mutation mode="DISTANCE"></mutation>
     *     <field name="TEXT"></field>
     *     <field name="TRIG">1</field>
     *     <field name="ECHO">2</field>
     * </block>
     *
     */
    /**
     * @param {Object
     *            sensor}
     *
     * @memberof Block
     */
    init : function(confBlock) {
        this.setColour(confBlock.sensor ? Blockly.CAT_SENSOR_RGB : Blockly.CAT_ACTION_RGB);
        var ports;
        var portList = [];
        if (confBlock.ports) {
            for (var i = 0; i < confBlock.ports.length; i++) {
                portList.push([ Blockly.Msg[confBlock.ports[i][0]] || confBlock.ports[i][0], confBlock.ports[i][1] ]);
            }
            ports = new Blockly.FieldDropdown(portList);
        }  else {
            ports = new Blockly.FieldHidden();
        }

        var type = confBlock.sensor ? 'SENSOR_' : 'ACTION_'
        this.appendDummyInput('ROW').appendField(Blockly.Msg[type + confBlock.title + '_'
                  + this.workspace.device.toUpperCase()]
                  || Blockly.Msg[type + confBlock.title] || Blockly.checkMsgKey(type + confBlock.title), 'SENSORTITLE');
        this.appendDummyInput().appendField(Blockly.Msg.POPUP_NAME + ':').appendField(new Blockly.FieldTextInput('', this.validate), 'TEXT');


        for (var i = 0; i < portList.length; i++)
          this.appendDummyInput().appendField(portList[i][0]).appendField(new Blockly.FieldDropdown(confBlock.pins), portList[i][1]);

        var thisBlock = this;
        this.setTooltip(function() {
            return Blockly.Msg[type + confBlock.title + '_GETSAMPLE_TOOLTIP_' + thisBlock.workspace.device.toUpperCase()]
                    || Blockly.Msg[type + confBlock.title + '_GETSAMPLE_TOOLTIP']
                    || Blockly.Msg[type + confBlock.title + '_GETSAMPLE_TOOLTIP'] || Blockly.checkMsgKey(type + confBlock.title + '_GETSAMPLE_TOOLTIP');
        });
        this.type = 'robConf_' + confBlock.title.toLowerCase();
    }
};
