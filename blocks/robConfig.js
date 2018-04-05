/**
 * @fileoverview Sensor blocks for all systems.
 * @requires Blockly.Blocks
 * @author Beate
 */

'use strict';

goog.provide('Blockly.Blocks.robConfig');

goog.require('Blockly.Blocks.robConfigDefinitions');
goog.require('Blockly.Blocks');

Blockly.Blocks['robConf_generic'] = {
    /*- Generic sensor definition. Will create e.g. the following xml:
     *
     * <block type="robSensors_ultrasonic_getSample" id="vG?X/lTw]%:p!z.},u;r" intask="true">
     *     <mutation mode="DISTANCE"></mutation>
     *     <field name="NAME"></field>
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
        var pins;
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
        this.appendDummyInput('ROW').appendField(Blockly.Msg[type + confBlock.title], 'SENSORTITLE');
        this.appendDummyInput().appendField(Blockly.Msg.POPUP_NAME + ':').appendField(new Blockly.FieldTextInput('', this.validate), 'NAME');


        for (var i = 0; i < portList.length; i++){
          console.log(portList[i][0] == 'SCK' ||  portList[i][0] == 'MOSI' || portList[i][0] == 'MISO');
          if(!(portList[i][0] == 'SCK' ||  portList[i][0] == 'MOSI' || portList[i][0] == 'MISO')){
            console.log(portList[i]);
            pins = new Blockly.FieldDropdown(confBlock.pins);
            if(confBlock.standardPins){
              pins.setValue(confBlock.standardPins[i]);
            }
          }
          else{
            switch (portList[i][0]) {
              case 'SCK':
                pins = '13';
                break;
              case 'MOSI':
                pins = '11';
                break;
              default:
                pins = '12';
            }
          }
          this.appendDummyInput().appendField(portList[i][0]).appendField(pins, portList[i][1]);
        }

        //var thisBlock = this;
        this.setTooltip(function() {
            return Blockly.Msg[confBlock.title + '_TOOLTIP'];
        });
        this.type = 'robConf_' + confBlock.title.toLowerCase();
    }
};
