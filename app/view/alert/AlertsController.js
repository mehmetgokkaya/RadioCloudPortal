Ext.define('RadioCloudPortal.view.alert.AlertsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.alerts',

    requires: [
        ],
    	
    stores: ['Alerts'],	
	
    listen: {
    	controller: {
    		'*': {
    				ApplicationChange: 'onApplicationChange',
    				NodeChange: 'onNodeChange'
    				
    			 }
    	}    	
    },
    
    onCellClick: function (table,td, cellIndex, record, tr, rowIndex, e, eOpts) {
    	console.log (record.get('message'));
    	console.log (record.get('dateCreated'));
    	console.log (record.get('status'));
    	console.log (record.get('origin_id'));
    	
    	
    	record.set('status','0');  
    	
    	// The following is not uodating the database for some reason.  Need to investigate.
    	table.saveState();  	    	
    },
    
    onApplicationChange: function (record) {
    	console.log ("ApplicationChange event received.  New Application: " + record.get('name'));   
    	console.log ("Alerts Store: " + Ext.getStore("Alerts"));
    	
    	
    	Ext.getStore("Alerts").filterByApplication(record.get('id'));
    },
    
    onNodeChange: function (record) {
    	console.log ("NodeChange event received.  New Node Name: " + record.get('name'));   
    	console.log ("ANodeChange event received.  New Node Id: " + record.get('node_id'));
    	  	
    	Ext.getStore("Alerts").filterByNode(record.get('node_id'));
    }
    
    
});
