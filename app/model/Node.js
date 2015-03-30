Ext.define('RadioCloudPortal.model.Node', {
    extend: 'Ext.data.TreeModel',
	//extend: 'RadioCloudPortal.model.BaseModel',

    requires: [
    	'RadioCloudPortal.MyGlobal'
    ],     


    fields: [
        { name: 'id', type: 'auto' },
        { name: 'address', type: 'auto' },
        { name: 'name', type: 'auto' },
        { name: 'sensors', type: 'auto' },
        { name: 'alerts', type: 'auto' },
        { name: 'applications', type: 'auto' },
        { name: 'node_group_id', type: 'auto' },
        { name: 'latitude', type: 'auto' },
        { name: 'longitude', type: 'auto' },
        { name: 'signal_strength', type: 'auto' },
        { name: 'status', type: 'auto' },
        { name: 'ctype', type: 'auto', defaultValue: 'Node' },        
    ],

   
        proxy: {
            type: 'rest',
            //url: 'http://127.0.0.1:9090/RadioCloudAppServer/node?max=100' 
            url: RadioCloudPortal.MyGlobal.url + 'node?max=100'          
            }
       }        
    
);
