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

const gpio_set_read = {
  init: function() {
    this.appendDummyInput('explanation')
      .appendField('set GPIO No. ')
      .appendField(new Blockly.FieldNumber(0, 0, 27), 'pin')
      .appendField('reading mode')
      .appendField(new Blockly.FieldDropdown([
          ['high', '1'],
          ['low', '0']
        ]), 'pud');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(225);
  }
};
Blockly.common.defineBlocks({gpio_set_read: gpio_set_read});

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

const boot_JoyCon_input = {
  init: function() {
    this.appendDummyInput('explanation')
      .appendField('start listening to')
      .appendField(new Blockly.FieldDropdown([
          ['Joy-Con', 'Joy-Con'],
          ['Joy-Con(R)', 'Joy-Con(R)'],
          ['Joy-Con(L)', 'Joy-Con(L)']
        ]), 'device_name')
      .appendField('command');
    this.setInputsInline(true)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(225);
  }
};
Blockly.common.defineBlocks({boot_JoyCon_input: boot_JoyCon_input});

const test_statement = {
  init: function() {
    this.appendValueInput('bol');
    this.appendDummyInput('exp1')
      .appendField('IF True');
    this.appendStatementInput('iftrue')
      .appendField('do');
    this.appendDummyInput('exp2')
      .appendField('IF False');
    this.appendStatementInput('ifalse')
      .appendField('do');
    this.setInputsInline(false)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(225);
  }
};
Blockly.common.defineBlocks({test_statement: test_statement});

const my_PiController = {
  init: function() {
    this.appendDummyInput('exp1')
      .appendField('If north');
    this.appendStatementInput('north')
      .appendField('do');
    this.appendDummyInput('exp2')
      .appendField('If south');
    this.appendStatementInput('south')
      .appendField('do');
    this.setInputsInline(false)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(225);
  }
};
Blockly.common.defineBlocks({my_PiController: my_PiController});

const button_handler_joyconR = {
  init: function() {
    this.appendDummyInput('exp1')
      .appendField('if button')
      .appendField(new Blockly.FieldDropdown([
          ['X', 'NORTH'],
          ['A', 'EAST'],
          ['B', 'SOUTH'],
          ['Y', 'WEST']
        ]), 'name')
      .appendField('is')
      .appendField(new Blockly.FieldDropdown([
          ['push', '1'],
          ['release', '0']
        ]), 'state');
    this.appendStatementInput('action')
      .appendField('do');
    this.setInputsInline(false)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setHelpUrl('');
    this.setColour(225);
  }
};
Blockly.common.defineBlocks({button_handler_joyconR: button_handler_joyconR});
