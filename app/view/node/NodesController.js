Ext.define('RadioCloudPortal.view.alert.NodesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.nodes',

    requires: [
        ],
    	
    stores: ['Nodes'],	
	
    listen: {
    	controller: {
    		'*': {
    				ApplicationChange: 'onApplicationChange'    				
    			 }
    	}    	
    },
    
    onApplicationChange: function (record) {
    	console.log ("$#$#$#$#$#$ NodesController ApplicationChange event received.  New Application: " + record.get('name'));   
    	console.log ("%$%$%$%$%$%v Nodes Store: " + Ext.getStore("Nodes"));
    	   	
    	Ext.getStore("Nodes").filterByApplication(record.get('id'));
    },
    
});
