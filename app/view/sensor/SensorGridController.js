Ext.define('RadioCloudPortal.view.sensor.SensorGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sensorgrid',

    requires: [
        ],
    	
    stores: ['sensor.Sensors'],	
	
    listen: {
    	controller: {
    		'*': {
    				ApplicationChange: 'onApplicationChange',
    				NodeChange: 'onNodeChange'    				
    			 }
    	}    	
    },
    
    onApplicationChange: function (record) {
    	console.log ("$#$#$#$#$#$ SensorGridController ApplicationChange event received.  New Application: " + record.get('name'));   
    	console.log ("%$%$%$%$%$%v Sensor Store: " + Ext.getStore("sensor.Sensors"));
    	   	
    	Ext.getStore("sensor.Sensors").filterByApplication(record.get('id'));
    },
    
    onNodeChange: function (record) {
    	console.log ("$#$#$#$#$#$ SensorGridController NodeChange event received.  New Node: " + record.get('node_id'));   
    	console.log ("%$%$%$%$%$%v Sensor Store: " + Ext.getStore("sensor.Sensors"));
    	   	
    	Ext.getStore("sensor.Sensors").filterByNode(record.get('node_id'));
    },
    
    
    
    
});
