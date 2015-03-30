Ext.define('RadioCloudPortal.store.Nodes', {
    extend: 'Ext.data.TreeStore',
    requires: ['RadioCloudPortal.model.Node'],

    model: 'RadioCloudPortal.model.Node',
    autoLoad: true,
    alias: 'nodes.store',
    
    //sorters: ['name'],



    updateApplication: function(application) {
        var applicationId = application.getId();
        if (applicationId) {
            this.log("");
            this.load({
                params: {
                    applicationid: applicationId
                }
            })
        }
    },
 

    filterByApplication: function(applicationId) {        
        if (applicationId) {
            this.clearFilter();
            
            this.filterBy(function(rec, id) {            
            	retVal = false;
            	rec.get('applications').forEach( function (app) {
            		if (app['id']==applicationId) {
            			retVal = true;
            		}
            	});  
            	return retVal;          	            
            });            
        }
    },    


    filterByNode: function(nodeId) {
        if (nodeId) {
            this.clearFilter();
            this.filter('id', nodeId);
        }
    },
    
    


    log: function(message) {
        console.log(arguments.callee.caller.$name + ': ' + message);
    }

});