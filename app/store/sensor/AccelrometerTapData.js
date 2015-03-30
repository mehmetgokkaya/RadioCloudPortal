Ext.define('RadioCloudPortal.store.sensor.AccelrometerTapData', {
    extend: 'Ext.data.Store',
    requires: ['RadioCloudPortal.model.sensor.AccelrometerTapData'],

    model: 'RadioCloudPortal.model.sensor.AccelrometerTapData',
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
