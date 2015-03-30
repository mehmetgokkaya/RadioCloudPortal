Ext.define('RadioCloudPortal.model.Alert', {
    extend: 'Ext.data.Model',
    //extend: 'RadioCloudPortal.model.BaseModel',

    requires: [
    	'RadioCloudPortal.MyGlobal'
    ],     
    
    
    fields: [

        { name: 'origin_id', type: 'auto' },
        { name: 'originType', type: 'auto' },
        { name: 'alert_type', type: 'auto' },
        { name: 'application', type: 'auto' },
        { name: 'dateCreated', type: 'auto' },
        { name: 'message', type: 'auto' },
        { name: 'status', type: 'auto' },
        { name: 'ctype', type: 'auto', defaultValue: 'Alert' },  

    ],
        proxy: {
            type: 'rest',
            //url: 'http://127.0.0.1:9090/RadioCloudAppServer/alert?max=100' 
            url: RadioCloudPortal.MyGlobal.url + 'alert?max=100'           
            }

       }            
);
