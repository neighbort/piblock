python.pythonGenerator.forBlock['average'] = function(block, generator) {
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_v1 = generator.valueToCode(block, 'v1', python.Order.ATOMIC);
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_v2 = generator.valueToCode(block, 'v2', python.Order.ATOMIC);
    // TODO: Assemble javascript into the code variable.
    const code = '(' + value_v1 + '+' + value_v2 + ')/2';
    // TODO: Change Order.NONE to the correct operator precedence strength
    return [code, python.Order.NONE];
  }

python.pythonGenerator.forBlock['gpio_out_ctl'] = function(block, generator) {
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_gpiopin = generator.valueToCode(block, 'gpiopin', python.Order.ATOMIC);
  const dropdown_gpioval = block.getFieldValue('gpioval');
//  console.log(dropdown_gpioval);
  // TODO: Assemble javascript into the code variable.
  const code = 'import pigpio\n'
	+ 'pi = pigpio.pi()\n'
	+ 'pi.set_mode(' + value_gpiopin + ', pigpio.OUTPUT)\n'
	+ 'pi.write(' + value_gpiopin + ', ' + dropdown_gpioval + ')\n';
  return code;
}

python.pythonGenerator.forBlock['gpio_set_read'] = function(block, generator) {
  const number_pin = block.getFieldValue('pin');
  const dropdown_pud = block.getFieldValue('pud');
  // TODO: Assemble python into the code variable.
  const code = 'import pigpio\n'
	+ 'pi = pigpio.pi()\n'
	+ 'pi.set_mode(' + number_pin + ', pigpio.INPUT)\n'
	+ 'pi.set_pull_up_down(' + number_pin + ', pigpio.PUD_UP) if ' + dropdown_pud + '== 1 else pi.set_pull_up_down(' + number_pin + ', pigpio.PUD_DOWN)\n';
  return code;
}

python.pythonGenerator.forBlock['gpio_read_status'] = function(block, generator) {
  const number_pin = block.getFieldValue('pin');
  // TODO: Assemble python into the code variable.
  const code = 'pi.read(' + number_pin + ')';
  // TODO: Change Order.NONE to the correct operator precedence strength
  return [code, python.Order.NONE];
}

python.pythonGenerator.forBlock['sleep'] = function(block, generator) {
  const number_sec = block.getFieldValue('sec');
  // TODO: Assemble python into the code variable.
//  const code = 'from time import sleep;';
  const code = 'from time import sleep\n'
	+ 'sleep(' + number_sec + ')\n';
  return code;
}

python.pythonGenerator.forBlock['boot_JoyCon_input'] = function(block, generator) {
  const dropdown_device_name = block.getFieldValue('device_name');
  // TODO: Assemble python into the code variable.
  const code = 'from evdev import InputDevice, categorize, ecodes, list_devices\n'
	+ 'print(list_devices())\n'
	+ 'joycon = False\n'
	+ 'for path in list_devices():\n'
	+ '\tprint(InputDevice(path).name, path)\n'
	+ '\tif "' + dropdown_device_name + '" in InputDevice(path).name:\n'
	+ '\t\tjoycon = InputDevice(path)\n'
	+ '\t\tjoycon_name = joycon.name\n'
	+ '\t\tbreak\n'
	+ 'print("Failed, please connect the Joy-Con to RaspberryPi") if not joycon else print("Success !")\n';
  return code;
}

python.pythonGenerator.forBlock['test_statement'] = function(block, generator) {
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_bol = generator.valueToCode(block, 'bol', python.Order.ATOMIC);

  const statement_iftrue = generator.statementToCode(block, 'iftrue');

  const statement_ifalse = generator.statementToCode(block, 'ifalse');

  // TODO: Assemble python into the code variable.
  const code = 'print("start")\n'
	+ 'if ' + value_bol + ' == True:\n'
	+ statement_iftrue + '\n'
	+ 'elif ' + value_bol + ' == False:\n'
	+ statement_ifalse + '\n';
  return code;
}

python.pythonGenerator.forBlock['my_PiController'] = function(block, generator) {
  const statement_north = generator.statementToCode(block, 'north');
  const statement_south = generator.statementToCode(block, 'south');
  // TODO: Assemble python into the code variable.
  const code = 'print("Listening!")\n'
	+ 'for event in joycon.read_loop():\n'
	+ statement_north + '\n';
//	+ '\tprint(categorize(event))\n'
//	+ '\tif event.type == ecodes.EV_KEY:\n'
//	+ '\t\tif "NORTH" in categorize(event).keycode[0] and categorize(event).keystate == 0 :\n'
//	+ '\t\t\tprint("X pushed")\n';
  return code;
}

python.pythonGenerator.forBlock['button_handler_joyconR'] = function(block, generator) {
  const dropdown_name = block.getFieldValue('name');
  const dropdown_state = block.getFieldValue('state');
  const statement_action = generator.statementToCode(block, 'action');
  // TODO: Assemble python into the code variable.
//  const code = 'if event.type == ecodes.EV_KEY:\n'
  const code = 'keyev = categorize(event)\n'
//	+ '\tkeyev = categorize(event)\n'
	+ 'print(keyev)\n'
	+ 'if event.type == ecodes.EV_KEY and "' + dropdown_name + '" in keyev.keycode[0] and keyev.keystate == ' + dropdown_state + ':\n'
	+ statement_action + '\n';
  return code;
}
