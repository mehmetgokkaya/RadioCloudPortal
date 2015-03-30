Ext.define('RadioCloudPortal.store.sensor.ExternalHumidityData', {
    extend: 'Ext.data.Store',
    requires: ['RadioCloudPortal.model.sensor.ExternalHumidityData'],

    model: 'RadioCloudPortal.model.sensor.ExternalHumidityData',
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
