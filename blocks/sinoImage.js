/**
 * @fileoverview Action blocks for Sino:Bit.
 * @requires Blockly.Blocks
 * @author Sceptic Int;
 */
'use strict';

goog.provide('Blockly.Blocks.sinoImage');

goog.require('Blockly.Blocks');

/**
 * @lends Block
 */

Blockly.Blocks['sinoImage_image'] = {
    /**
     * Represents an image.
     * 
     * @constructs sinoImage_image
     * @this.Blockly.Block
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        this.setColour(Blockly.CAT_IMAGE_RGB);
        this.appendDummyInput().appendField("    0      1      2      3      4      5      6      7      8      9      10      11");
        var rowNumber=0;
      
        for (var rowNumber = 0; rowNumber < 12; rowNumber++) { 
        this.appendDummyInput().appendField((""+rowNumber).padStart(2, "0"))
                .appendField(new Blockly.FieldTextInput('  ', this.validate_), "P00_"+rowNumber).appendField(' ')
                .appendField(new Blockly.FieldTextInput('  ', this.validate_), "P10_"+rowNumber).appendField(' ')
                .appendField(new Blockly.FieldTextInput('  ', this.validate_), "P20_"+rowNumber).appendField(' ')
                .appendField(new Blockly.FieldTextInput('  ', this.validate_), "P30_"+rowNumber).appendField(' ')
                .appendField(new Blockly.FieldTextInput('  ', this.validate_), "P40_"+rowNumber).appendField(' ')
                .appendField(new Blockly.FieldTextInput('  ', this.validate_), "P50_"+rowNumber).appendField(' ')
                .appendField(new Blockly.FieldTextInput('  ', this.validate_), "P60_"+rowNumber).appendField(' ')
                .appendField(new Blockly.FieldTextInput('  ', this.validate_), "P70_"+rowNumber).appendField(' ')
                .appendField(new Blockly.FieldTextInput('  ', this.validate_), "P80_"+rowNumber).appendField(' ')
                .appendField(new Blockly.FieldTextInput('  ', this.validate_), "P90_"+rowNumber).appendField(' ')
                .appendField(new Blockly.FieldTextInput('  ', this.validate_), "P10_"+rowNumber).appendField(' ')
                .appendField(new Blockly.FieldTextInput('  ', this.validate_), "P11_"+rowNumber).appendField(' ');
        }
        this.setOutput(true, 'sinoImage');
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

