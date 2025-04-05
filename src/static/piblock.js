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
