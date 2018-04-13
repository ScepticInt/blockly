/**
 * @fileoverview Action blocks for Sino:Bit.
 * @requires Blockly.Blocks
 * @author Sceptic Int;
 */
'use strict';

goog.provide('Blockly.Blocks.mbedImage12x12');

goog.require('Blockly.Blocks');

/**
 * @lends Block
 */

Blockly.Blocks['mbedImage_image12x12'] = {
    /**
     * Represents an image.
     * If we create a new fieldtextinput block with textsize smaller than 11 this 
     * will probably get smaller too.
     * 
     * 
     * @constructs mbedImage_12x12image
     * @this.Blockly.Block
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_IMAGE_RGB);
        this.appendDummyInput().appendField("    0      1      2      3      4      5      6      7      8      9      10      11");
       
      
        var rowNumber=0;
        for (rowNumber = 0; i < 12; i++) { 
            r+=1
            this.appendDummyInput().appendField(i).appendField(new Blockly.FieldTextInput('  ', this.validate_), "P_0_"+rowNumber).
                                    appendField(' ').appendField(new Blockly.FieldTextInput('  ', this.validate_), "P_1_"+rowNumber).
                                    appendField(' ').appendField(new Blockly.FieldTextInput('  ', this.validate_), "P_2_"+rowNumber).
                                    appendField(' ').appendField(new Blockly.FieldTextInput('  ', this.validate_), "P_3_"+rowNumber).
                                    appendField(' ').appendField(new Blockly.FieldTextInput('  ', this.validate_), "P_4_"+rowNumber).
                                    appendField(' ').appendField(new Blockly.FieldTextInput('  ', this.validate_), "P_5_"+rowNumber).
                                    appendField(' ').appendField(new Blockly.FieldTextInput('  ', this.validate_), "P_6_"+rowNumber).
                                    appendField(' ').appendField(new Blockly.FieldTextInput('  ', this.validate_), "P_7_"+rowNumber).
                                    appendField(' ').appendField(new Blockly.FieldTextInput('  ', this.validate_), "P_8_"+rowNumber).
                                    appendField(' ').appendField(new Blockly.FieldTextInput('  ', this.validate_), "P_9_"+rowNumber).
                                    appendField(' ').appendField(new Blockly.FieldTextInput('  ', this.validate_), "P_10_"+rowNumber).
                                    appendField(' ').appendField(new Blockly.FieldTextInput('  ', this.validate_), "P_11_"+rowNumber);
     
        };

                this.setOutput(true, 'Image12x12');
        this.setTooltip(Blockly.Msg.IMAGE_TOOLTIP);
    },
    validate_ : function(p) {
        if (!Blockly.FieldTextInput.htmlInput_)
            return p;
        if (p == Blockly.FieldTextInput.htmlInput_.value) {
            if (p == '  ') {
                Blockly.FieldTextInput.htmlInput_.value = '#';
                return '#';
            } else if (p == '#') {
                Blockly.FieldTextInput.htmlInput_.value = '  ';
                return '  ';
            } else if (p.match(/^[1-8]$/)) {
                Blockly.FieldTextInput.htmlInput_.value = p;
                return p;
            } else if (p == ' ' || p == '0') {
                Blockly.FieldTextInput.htmlInput_.value = '  ';
                return '  ';
            } else if (p.substring(0, 2) == '  ') {
                Blockly.FieldTextInput.htmlInput_.value = p.substr(2);
                return p.substr(2);
            } else if (p.substring(0, 1) == '#') {
                Blockly.FieldTextInput.htmlInput_.value = p.substr(1);
                return p.substr(1);
            } else if (!p.match(/^[1-8]$/)) {
                Blockly.FieldTextInput.htmlInput_.value = '#';
                return '#';
            } else {
                Blockly.FieldTextInput.htmlInput_.value = '  ';
                return '  ';
            }
        }
        Blockly.FieldTextInput.htmlInput_.value = '';
        return p;
    }
};

