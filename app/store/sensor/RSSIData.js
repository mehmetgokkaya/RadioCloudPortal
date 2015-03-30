Ext.define('RadioCloudPortal.store.sensor.RSSIData', {
    extend: 'Ext.data.Store',
    requires: ['RadioCloudPortal.model.sensor.RSSIData'],

    model: 'RadioCloudPortal.model.sensor.RSSIData',
    autoLoad: true,
    
    filterByNode: function(nodeId) {
        if (nodeId) {
            this.clearFilter();
            
            this.filterBy(function(rec, id) {
            	var a = rec.get('node');
            	if (a['id'] == nodeId)
            		return true;
            	else
            		return false;            	
            });
        }
    },

        
});
