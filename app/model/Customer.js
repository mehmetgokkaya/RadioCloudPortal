Ext.define('RadioCloudPortal.model.Customer', {
    extend: 'Ext.data.Model',
    //extend: 'RadioCloudPortal.model.BaseModel',
   
    requires: [
    	'RadioCloudPortal.MyGlobal'
    ],     
    
    fields: [
        { name: 'id', type: 'auto' },
 		{ name: 'dateCreated', type: 'auto' },
        { name: 'name', type: 'auto' },
        { name: 'applications', type: 'auto' },
        { name: 'users', type: 'auto' },
        { name: 'emailAddress', type: 'auto' },
        { name: 'zipcode', type: 'auto' },
        { name: 'ctype', type: 'auto', defaultValue: 'Customer' },                
    ],

    
        proxy: {
        	type: 'rest',
        	//url: 'http://127.0.0.1:9090/RadioCloudAppServer/customer'  
        	url: RadioCloudPortal.MyGlobal.url + 'customer'           
        }

    }       
);
