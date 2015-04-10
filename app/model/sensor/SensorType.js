Ext.define('RadioCloudPortal.model.sensor.SensorType', {
    extend: 'Ext.data.Model',
    //extend: 'RadioCloudPortal.model.BaseModel',
   
    requires: [
    	'RadioCloudPortal.MyGlobal'
    ],     
    
    fields: [
        { name: 'id', type: 'auto' },
        { name: 'name', type: 'auto' },
    ],

    
        proxy: {
        	type: 'rest',
        	//url: 'http://127.0.0.1:9090/RadioCloudAppServer/customer'  
        	url: RadioCloudPortal.MyGlobal.url + 'sensors'           
        }

    }       
);
