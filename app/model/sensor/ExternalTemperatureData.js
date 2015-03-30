Ext.define('RadioCloudPortal.model.sensor.ExternalTemperatureData', {
    extend: 'Ext.data.Model',
    //extend: 'RadioCloudPortal.model.sensor.BaseSensor',
    
    requires: [
    	'RadioCloudPortal.MyGlobal'
    ],  
       
   fields: [
        { name: 'node', type: 'auto' },
        { name: 'dateCreated', type: 'date' },
        { name: 'sensor', type: 'auto' },
        { name: 'value', type: 'auto' },
        { name: 'ctype', type: 'auto', defaultValue: 'ExternalTemperatureData' },
    ],
    
    proxy: {
            type: 'rest',
            //url: 'http://127.0.0.1:9090/RadioCloudAppServer/SensorData?sensor.sensorType_id=3&max=1000&sort=dateCreated&order=desc'            
    		url: RadioCloudPortal.MyGlobal.url + 'SensorData?sensor.sensorType_id=3&max=10&sort=dateCreated&order=desc'
    }    
        
        
    });
