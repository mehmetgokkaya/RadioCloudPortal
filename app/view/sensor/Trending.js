Ext.define('RadioCloudPortal.view.sensor.Trending', {
    extend: 'Ext.panel.Panel',
    xtype: 'trending',
    controller: 'trending',
     
    requires: [
        'RadioCloudPortal.store.sensor.Sensors',
        'Ext.data.JsonStore',
        'RadioCloudPortal.view.sensor.LineChart',
        'RadioCloudPortal.view.sensor.GaugeChart',
    ],

    stores: [
    	'Nodes', 
    	'Applications', 
    	'sensor.Sensors' 
    ],

    refs: [
    	{ ref: 'Sensors', selector: 'sensors'}
    ],

    layout: {
        type: 'fit'
        //type: 'column'
    },

    defaults: {
            ////xtype: 'chart',
            width: 500,
            height: 400,
            //bodyPadding: 30,
            frame: true,
            collapsible: true,
            animate: true,
            shadow: true,
            //padding: '10 10 10 10',
            //insetPadding: 10,
            //align: 'stretch'
            scroll: true

    },

    items: [],


    renderCharts: function(node) {
            
        this.removeAll();
        sensorList = node.get('sensors');
        this.log(sensorList.length);
		
/************************************************************************************
   To Do:
   
  Need to refactor this so that it is all data driven such that new sensor types can 
  be added dynamically.  Should be straight forward to do.
************************************************************************************/

        Ext.getStore('sensor.Sensors').load();  
        //this.log("Number of Sensors: " +  Ext.getStore('sensor.Sensors').getCount());
        
        
        var me = this;

        this.log("InternalTemperature count: " + Ext.getStore('sensor.InternalTemperatureData').getCount());
        this.log("ExternalTemperature count: " + Ext.getStore('sensor.ExternalTemperatureData').getCount());
        this.log("ExternalHumidity count: " + Ext.getStore('sensor.ExternalHumidityData').getCount());
        this.log("BatteryVoltage count: " + Ext.getStore('sensor.BatteryVoltageData').getCount());
        
        Ext.Array.forEach(sensorList, function(sensor) {
            
            //me.log("Sensor.id: " + sensor.id);
            
            var sensorType = Ext.getStore('sensor.Sensors').getById(sensor.id).get("sensorType_id");            
            //me.log("SensorType: " + sensorType);
            //me.log("&^&^&^  id: " + Ext.getStore('sensor.Sensors').getById(sensor.id).get("id"));
				
            if (sensorType==1 && Ext.getStore('sensor.ExternalHumidityData').getCount()>0) {
                me.log("Adding External Humidity Charts");
                me.add({
                    	title: 'External Humidity',
                    	xtype: 'linechart',
                    	store: 'sensor.ExternalHumidityData'
                })
            };            				
            if (sensorType==2 && Ext.getStore('sensor.InternalTemperatureData').getCount()>0) {
                me.log("Adding Internal Temp Chart");
                me.add({
                    	title: 'Internal Temperature',
                    	xtype: 'linechart',
                    	store: 'sensor.InternalTemperatureData',
                    	itemStore: 'sensor.InternalTemperatureData'
                })
            };
            if (sensorType==3  && Ext.getStore('sensor.ExternalTemperatureData').getCount()>0) {
                me.log("Adding External Temp Chart");
                me.add({
                    	title: 'External Temperature',
                    	xtype: 'linechart',
                    	store: 'sensor.ExternalTemperatureData'
                })
            };
            if (sensorType==4 && Ext.getStore('sensor.BatteryVoltageData').getCount()>0) {
                me.log("Adding Battery Voltage Guage");
                
	var store1 = Ext.create('Ext.data.JsonStore', {
            fields: ['value' ],
            data: [
                { value: 3.5, value: 2.5 }
            ]
        });                
                
                
                me.add({
                    	title: 'Battery Voltage',
                    	xtype: 'gaugechart',
                    	//xtype: 'linechart',
                    	store: 'sensor.BatteryVoltageData'
                    	//store: Ext.getStore('sensor.BatteryVoltageData')
                    	//store: store1
                })
            };
        });
    },

    log: function(message) {
        console.log(arguments.callee.caller.$name + ': ' + message);
    }
});