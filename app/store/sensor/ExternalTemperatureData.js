Ext.define('RadioCloudPortal.store.sensor.ExternalTemperatureData', {
    extend: 'Ext.data.Store',
    requires: ['RadioCloudPortal.model.sensor.ExternalTemperatureData'],
    //alias: "ExternalTemperatureData",

    model: 'RadioCloudPortal.model.sensor.ExternalTemperatureData',
    autoLoad: true,
    
    filterByNode: function(nodeId) {
        if (nodeId) {
            this.clearFilter();
            
            this.filterBy(function(rec, id) {
            	var a = rec.get('node');
            	if (a['id'] == nodeId) {
            		//console.log("^^^^^^^^ Adding External Temp data");
            		return true;
            	}
            	else
            		return false;            	
            });
        }
    },
        
});
