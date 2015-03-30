/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('RadioCloudPortal.Application', {
    extend: 'Ext.app.Application',
    
    requires: [
    	'RadioCloudPortal.MyGlobal'
    ],
    
    name: 'RadioCloudPortal',

    stores: [
        // TODO: add global / shared stores here
        'Applications', 
        'Nodes', 
        'Alerts', 
        'sensor.BatteryVoltageData',
        'sensor.ExternalHumidityData',
        'sensor.InternalTemperatureData',
        'sensor.ExternalTemperatureData',
        'sensor.PushButtonData',
        'sensor.RSSIData',
        'sensor.AccelrometerTapData',
        'sensor.AccelrometerDoubleTapData',
        'sensor.SoilMoistureData', 
        'sensor.MotionData', 
        'sensor.GarbageData', 
        'sensor.TiltData',               
        'sensor.Sensors'
    ],
    
    launch: function () {
        // TODO - Launch the application
        Ext.getStore("Nodes").load();
        Ext.getStore("Alerts").load();
        this.callParent();
    }
});
