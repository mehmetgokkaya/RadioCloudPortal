Ext.define('RadioCloudPortal.model.sensor.Sensor', {
    extend: 'Ext.data.Model',
    //extend: 'RadioCloudPortal.model.BaseModel',
    
    requires: [
    	'RadioCloudPortal.MyGlobal'
    ],  
    
    fields: [
    //{ name: 'text', type: 'auto' } // integration testing
        {name: 'id', type: 'auto' },
        {name: 'sensorType_id', type: 'auto' },
        {name: 'node', type: 'auto' },

    ],
    
    
        proxy: {
            type: 'rest',
            //url: 'http://127.0.0.1:9090/RadioCloudAppServer/sensor?max=1000' 
            url: RadioCloudPortal.MyGlobal.url + 'sensor?max=1000' 
        }  
});
