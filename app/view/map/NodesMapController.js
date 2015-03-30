Ext.define('RadioCloudPortal.view.map.NodesMapController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.nodesmap',

    requires: [
    	'RadioCloudPortal.view.map.NodesMap'
        ],
        
//    refs: [
//    	{ ref: 'nodesMap', selector: 'nodesmap'}
//    ],        
    	
    stores: ['Nodes', 'Applications'],	
	
    listen: {
    	controller: {
    		'*': {
    				ApplicationChange: 'onApplicationChange',
    				NodeChange: 'onNodeChange'
    				
    			 }
    	}    	
    },
        
    onApplicationChange: function (record) {
        var appName = record.get('name');
        var appId = record.get('id')        
        this.log("ApplicationId: " + appId);
        this.log("Application Name: " + appName);
                
        var application = Ext.getStore("Applications").getById(appId);
        if (application) {
            // Render the Map            
            this.getView().centerMap(application.get('latitude'), application.get('longitude'));
            this.getView().circleMap(application.get('latitude'), application.get('longitude'));
        }
    },
    
    onNodeChange: function (record) {
    	this.log ("NodeChange event received.  New Node Name: " + record.get('name'));   
    	this.log ("ANodeChange event received.  New Node Id: " + record.get('node_id'));
    },
    
    log: function(message) {
        console.log(arguments.callee.caller.$name + ': ' + message);
    }    
    
});
