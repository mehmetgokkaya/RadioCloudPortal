Ext.define('RadioCloudPortal.model.Gateway', {
    extend: 'Ext.data.Model',
    //extend: 'RadioCloudPortal.model.BaseModel',
    
    requires: [
    	'RadioCloudPortal.MyGlobal'
    ],     

    fields: [
        { name: 'id', type: 'auto' },
        { name: 'name', type: 'auto' },
        { name: 'address', type: 'auto' },
        { name: 'latitude', type: 'auto' },
        { name: 'longitude', type: 'auto' },
        { name: 'nodes', type: 'auto' },
        { name: 'alerts', type: 'auto' },
        { name: 'status', type: 'auto' },
        { name: 'ctype', type: 'auto', defaultValue: 'Gateway' },

    ],

    
        proxy: {
        	type: 'rest',
        	//url: 'http://127.0.0.1:9090/RadioCloudAppServer/gateway'    
        	url: RadioCloudPortal.MyGlobal.url + 'gateway'         
		}
    }       
);
