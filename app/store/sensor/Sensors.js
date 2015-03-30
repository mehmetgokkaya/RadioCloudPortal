Ext.define('RadioCloudPortal.store.sensor.Sensors', {
    extend : 'Ext.data.Store',
    requires: ['RadioCloudPortal.model.sensor.Sensor'],
    model: 'RadioCloudPortal.model.sensor.Sensor',
    autoLoad : true
});