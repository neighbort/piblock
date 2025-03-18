javascript.javascriptGenerator.forBlock['average'] = function(block, generator) {
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_v1 = generator.valueToCode(block, 'v1', javascript.Order.ATOMIC);
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_v2 = generator.valueToCode(block, 'v2', javascript.Order.ATOMIC);
    // TODO: Assemble javascript into the code variable.
    const code = '(' + value_v1 + '+' + value_v2 + ')/2';
    // TODO: Change Order.NONE to the correct operator precedence strength
    return [code, javascript.Order.NONE];
  }

  javascript.javascriptGenerator.forBlock['console_log'] = function(block, generator) {
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_output = generator.valueToCode(block, 'output', javascript.Order.ATOMIC);
    // TODO: Assemble javascript into the code variable.
    const code = 'console.log(' + value_output + ');';
    return code;
//    return [code, javascript.Order.NONE];
  }

  javascript.javascriptGenerator.forBlock['sleep'] = function(block, generator) {
    // TODO: change Order.ATOMIC to the correct operator precedence strength
    const value_sec = generator.valueToCode(block, 'sec', javascript.Order.ATOMIC);
    // TODO: Assemble javascript into the code variable.
    const stime = 1000 * value_sec;
    const code = 'const sleep=(ms)=> new Promise((resolve) => setTimeout(resolve, ms));'
	  + 'async function slp(){await sleep(' + stime + ');console.log('+stime+');};'
	  + 'slp();';
    return code;
  }

javascript.javascriptGenerator.forBlock['sleep_then_do'] = function(block, generator) {
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_sec = generator.valueToCode(block, 'sec', javascript.Order.ATOMIC);
  const statement_cmnd = generator.statementToCode(block, 'cmnd');
  // TODO: Assemble javascript into the code variable.
  const stime = 1000 * value_sec;
  //const code = 'const sleep=(ms)=> new Promise((resolve) => setTimeout(resolve, ms));'
//	+ 'async function slp(){await sleep(' + stime + ');' + statement_cmnd + '};'
//	+ 'slp();';
  const code = 'async function slp(ms){'
	+ 'return new Promise(function(resolve, reject){'
	+ 'setTimeout(function(){'
	+ 'resolve();'
	+ '//reject();'
	+ '}, ms);'
	+ '});'
	+ '}'
	+ 'slp(' + stime + ').then(function(){'
	+ 'console.log(' + stime + ');'
	+ '});'
  return code;
}

javascript.javascriptGenerator.forBlock['gpio_out_ctl'] = function(block, generator) {
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_gpiopin = generator.valueToCode(block, 'gpiopin', javascript.Order.ATOMIC);
  const dropdown_gpioval = block.getFieldValue('gpioval');
  console.log(dropdown_gpioval);
  // TODO: Assemble javascript into the code variable.
  const code = 'const {requestGPIOAccess} = require("node-web-gpio");'
	+ 'async function gpioctl(gpiopin, pinval){'
	+ 'const gpioAccess = await requestGPIOAccess();'
	+ 'const port = gpioAccess.ports.get(gpiopin);'
	+ 'await port.export("out");'
	+ 'await port.write(pinval);'
	+ '}'
	+ 'console.log(' + dropdown_gpioval + ');'
	+ 'console.log(' + value_gpiopin + ');'
	+ 'gpioctl(' +  value_gpiopin + ',' + dropdown_gpioval + ');';
  return code;
}
