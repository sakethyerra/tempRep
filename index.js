var expressExtension = require('express-integrator-extension');
var functions = require('./extensionFunctions');

var systemToken = '9827e039f1c047399a97e6705822b7af'; // Set this value to the systemToken of the stack created in integrator.io
var options = {
  diy: functions,
  // connectors: { _connectorId: functions }, // for connectors
  systemToken: systemToken,
  port: 7000
};

console.log('Starting Server!!');

expressExtension.createServer(options, function (err) {
    if(err){
        console.log('Error ocurred');
        throw err;
    }
    console.log('Server Started');
});