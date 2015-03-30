Ext.define('RadioCloudPortal.store.Alerts', {
    extend: 'Ext.data.Store',
    requires: ['RadioCloudPortal.model.Alert'],
    autoLoad: true,
    model: 'RadioCloudPortal.model.Alert',
    //sorters: ['name'],
    
    
    filterByApplication: function(applicationId) {
        if (applicationId) {
            this.clearFilter();
            
            this.filterBy(function(rec, id) {
            	var a = rec.get('application');
            	if (a['id'] == applicationId)
            		return true;
            	else
            		return false;            	
            });
        }
    },

    
    filterByNode: function(nodeId) {
        if (nodeId) {
            this.clearFilter();
            
            this.filterBy(function(rec, id) {
            	if (rec.get('originType') == 2) {
            		if (rec.get('origin_id') == nodeId)
            			return true;
            	}
            	return false;            	
            });
        }
    },
        
});