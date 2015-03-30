Ext.define('RadioCloudPortal.store.sensor.InternalTemperatureData', {
    extend: 'Ext.data.Store',
    requires: ['RadioCloudPortal.model.sensor.InternalTemperatureData'],

    model: 'RadioCloudPortal.model.sensor.InternalTemperatureData',
    autoLoad: true,
    
    filterByNode: function(nodeId) {
        if (nodeId) {
            this.clearFilter();
            
            this.filterBy(function(rec, id) {
            	var a = rec.get('node');
            	if (a['id'] == nodeId) {
            		//console.log("^^^^^^^^ Adding Internal Temp data");
            		return true;            	
            	}
            	else
            		return false;            	
            });
        }
    },
        
});
