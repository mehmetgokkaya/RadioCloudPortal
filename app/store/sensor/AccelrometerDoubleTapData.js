Ext.define('RadioCloudPortal.store.sensor.AccelrometerDoubleTapData', {
    extend: 'Ext.data.Store',
    requires: ['RadioCloudPortal.model.sensor.AccelrometerDoubleTapData'],

    model: 'RadioCloudPortal.model.sensor.AccelrometerDoubleTapData',
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
