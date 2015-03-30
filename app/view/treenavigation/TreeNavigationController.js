Ext.define('RadioCloudPortal.view.navigation.TreeNavigationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.treenavigation',

    requires: [
        'RadioCloudPortal.model.Node',
        'RadioCloudPortal.store.Nodes',
        ],
    	
    stores: ['Nodes', 'Application'],	
	
    onItemChange: function (view, record, item, index, e) {
    	console.log (record.get('name'));
    	console.log ("Node Class: " + record.get('ctype'));
    	//console.log ("Node Class Attributes: " + Object.getOwnPropertyNames(record));
    	
    	var ctype = record.get('ctype');
    	
    	
    	if (ctype) {
    		if (ctype ==  "Application") {
    			console.log ("Triggering ApplicationChnage event");
    			this.fireEvent("ApplicationChange", record); 
    		} 
    		if (ctype ==  "Node") {
    		console.log ("Triggering NodeChnage event");
    			//this.fireEvent("ApplicationChange", record);
    			this.fireEvent("NodeChange", record);
    		}
    	} 
    			
    },



    onItemExpand: function (item, e) {
    
    	try {
    	if (item) {
    		if (!item.isRoot()) {
    			if (item.get('ctype') == "Application") {
    			
    				/*
    				if ( (Ext.getStore("Applications")
    						.getById(item.get("id"))
    						.get("nodes")
    						.length)>0) 
    						
    				{
    				*/
    					item.set('leaf', false);    				    				    				
    					item.removeAll();
    				

    					    				

    					Ext.getStore("Applications").getById(item.get("id")).get("nodes").forEach(function (node) {    				   			
    						var n = item.appendChild({
    							//id: node["id"],
    							node_id: node["id"],
    							name: Ext.getStore("Nodes").getById(node["id"]).get("name"),
    							leaf: true,
    							ctype: 'Node',
    							text: node["id"],
    							});   						
    						}
    					)	    				
    				/*
    				}
    				else {
    					return false;
    				}
    				*/
    				if (item.get('ctype') == "Region") {
    				// To Do:  include the Region logic
    				}
    			}    		    
    		}
    		}
    	} catch(e) {
    		console.log("######## Exception ############");
    	}	
    },





    onItemCollapsed: function (node, e) {
    	console.log ("Node Collapsed: " + node.get('name'));
    }
    
    
});
