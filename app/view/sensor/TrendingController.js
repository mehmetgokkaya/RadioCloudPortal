Ext.define('RadioCloudPortal.view.sensor.TrendingController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.trending',

    requires: [
        ],
    		
     stores: [
     	'Nodes', 
     	'Applications', 
     	'sensor.BatteryVoltageData',
     	'sensor.ExternalHumidityData',
     	'sensor.InternalTemperatureData',
     	'sensor.ExternalTemperatureData'
     ],	
    
    listen: {
    	controller: {
    		'*': {
    				ApplicationChange: 'onApplicationChange',
    				NodeChange: 'onNodeChange'    				
    			 }
    	}    	
    },
    
    
    onApplicationChange: function (record) {
		this.log("OnApplicationChange called: " + record.get('id'));    	
    },
    

/*
	To Do:	
	This needs to be data driven.
*/
    onNodeChange: function (record) {
		this.log("OnNodeChange called: " + record.get('id'));
		    	
    	Ext.getStore("sensor.BatteryVoltageData").filterByNode(record.get('node_id'));
    	Ext.getStore("sensor.ExternalHumidityData").filterByNode(record.get('node_id'));
    	Ext.getStore("sensor.ExternalTemperatureData").filterByNode(record.get('node_id'));
    	Ext.getStore("sensor.InternalTemperatureData").filterByNode(record.get('node_id'));
    	
    	
    	
    	this.getView().renderCharts(Ext.getStore("Nodes").getById(record.get('node_id')));
    },
   
    log: function(message) {
        console.log(arguments.callee.caller.$name + ': ' + message);
    }
    
    
});
