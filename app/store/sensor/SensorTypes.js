Ext.define('RadioCloudPortal.store.sensor.SensorTypes', {
    extend: 'Ext.data.Store',
    requires: ['RadioCloudPortal.model.sensor.SensorType'],

    model: 'RadioCloudPortal.model.sensor.SensorType',
    autoLoad: true,
    alias: 'sensor.sensortype',
    
    log: function(message) {
        console.log(arguments.callee.caller.$name + ': ' + message);
    }

});