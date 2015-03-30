Ext.define('RadioCloudPortal.store.sensor.PushButtonData', {
    extend: 'Ext.data.Store',
    requires: ['RadioCloudPortal.model.sensor.PushButtonData'],

    model: 'RadioCloudPortal.model.sensor.PushButtonData',
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
