const average = {
  init: function() {
    this.appendValueInput('v1')
    .setCheck('Number')
      .appendField('value1');
    this.appendValueInput('v2')
    .setCheck('Number')
      .appendField('value2');
    this.appendDummyInput('labl')
      .appendField('average');
    this.setOutput(true, 'Number');
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(225);
  }
};
Blockly.common.defineBlocks({average: average});

const gpio_out_ctl = {
  init: function() {
    this.appendValueInput('gpiopin')
    .setCheck('Number')
      .appendField('set GPIO No.');
    this.appendDummyInput('show')
      .appendField('to output')
      .appendField(new Blockly.FieldDropdown([
          ['high', '1'],
          ['low', '0']
        ]), 'gpioval');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(0);
  }
};
Blockly.common.defineBlocks({gpio_out_ctl: gpio_out_ctl});
