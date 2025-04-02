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

const gpio_read_status = {
  init: function() {
    this.appendDummyInput('explanation')
      .appendField('status of GPIO pin')
      .appendField(new Blockly.FieldNumber(12, 0, 27), 'pin');
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(225);
  }
};
Blockly.common.defineBlocks({gpio_read_status: gpio_read_status});

const sleep = {
  init: function() {
    this.appendDummyInput('length')
      .appendField(new Blockly.FieldNumber(1, 0, Infinity, 1), 'sec')
      .appendField('sec sleep');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(0);
  }
};
Blockly.common.defineBlocks({sleep: sleep});
