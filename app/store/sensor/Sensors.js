Ext.define('RadioCloudPortal.store.sensor.Sensors', {
    extend : 'Ext.data.Store',
    requires: ['RadioCloudPortal.model.sensor.Sensor'],
    model: 'RadioCloudPortal.model.sensor.Sensor',
    autoLoad : true,
    


    filterByApplication: function(applicationId) {        
        if (applicationId) {
            this.clearFilter();
            
            this.filterBy(function(rec, id) {    
            	retVal = false;
            	
            	n = rec.get('node');
            	
            	console.log("OOOOOOOOOOOOO" + n['id']);
            	
            	r = Ext.getStore("Nodes");
            	console.log(r.count());
            	
            	aNode = r.getById(n['id']);
            	if (aNode != null) {
            		retVal = true;
            	}
            	return retVal;          	            
        	});
    }},    

    filterByNode: function(nodeId) {
        if (nodeId) {
            this.clearFilter();
            this.filterBy(function(rec, id) {            
            	retVal = false;
            	node = rec.get('node');
            	if (node['id'] == nodeId) 
            		return true;
            	return retVal;          	            
            });            
        }
    },
    
    
    
    
});