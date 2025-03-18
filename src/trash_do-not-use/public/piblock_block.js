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

const console_log = {
  init: function() {
    this.appendValueInput('output');
    this.appendDummyInput('indicator')
      .appendField('show on console');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(225);
  }
};
Blockly.common.defineBlocks({console_log: console_log});

const sleep = {
  init: function() {
    this.appendValueInput('sec')
    .setCheck('Number')
      .appendField('sleep');
    this.appendDummyInput('unit')
      .appendField('sec');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(225);
  }
};
Blockly.common.defineBlocks({sleep: sleep});

const sleep_then_do = {
  init: function() {
    this.appendValueInput('sec')
    .setCheck('Number')
      .appendField('sleep');
    this.appendDummyInput('unit')
      .appendField('sec');
    this.appendStatementInput('cmnd')
      .appendField('then do');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(225);
  }
};
Blockly.common.defineBlocks({sleep_then_do: sleep_then_do});

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
