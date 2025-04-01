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
  const code = 'pi = pigpio.pi();'
	+ 'pi.set_mode(' + value_gpiopin + ', pigpio.OUTPUT);'
	+ 'pi.write(' + value_gpiopin + ', ' + dropdown_gpioval + ');';
  return code;
}

python.pythonGenerator.forBlock['sleep'] = function(block, generator) {
  const number_sec = block.getFieldValue('sec');
  // TODO: Assemble python into the code variable.
//  const code = 'from time import sleep;';
  const code = 'sleep(' + number_sec + ');';
  return code;
}
