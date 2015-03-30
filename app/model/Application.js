Ext.define('RadioCloudPortal.model.Application', {
    extend: 'Ext.data.TreeModel',
    //extend: 'RadioCloudPortal.model.BaseModel',
    
    requires: [
    	'RadioCloudPortal.MyGlobal'
    ],     

    
    fields: [
        { name: 'id', type: 'auto' },
 		{ name: 'dateCreated', type: 'auto' },
        { name: 'name', type: 'auto' },
        { name: 'nodes', type: 'auto' },
        { name: 'sensorTypes', type: 'auto' },
        { name: 'customer', type: 'auto' },
        { name: 'latitude', type: 'auto' },
        { name: 'longitude', type: 'auto' },
        { name: 'ctype', type: 'auto', defaultValue: 'Application' },        
    ],

    
        proxy: {
        	type: 'rest',
        	//url: 'http://127.0.0.1:9090/RadioCloudAppServer/application?max=100'  
        	url: RadioCloudPortal.MyGlobal.url + 'application?max=100'           
        }       
});
