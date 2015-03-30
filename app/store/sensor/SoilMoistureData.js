Ext.define('RadioCloudPortal.store.sensor.SoilMoistureData', {
    extend: 'Ext.data.Store',
    requires: ['RadioCloudPortal.model.sensor.SoilMoistureData'],
    //alias: "BatteryVoltageData",

    model: 'RadioCloudPortal.model.sensor.SoilMoistureData',
    autoLoad: true,
    
    filterByNode: function(nodeId) {
        if (nodeId) {
            this.clearFilter();
            
            this.filterBy(function(rec, id) {
            	var a = rec.get('node');
            	if (a['id'] == nodeId) {
            		//console.log("^^^^^^^^ Adding soil moisture data");
            		return true;
            		}
            	else
            		return false;            	
            });
        }
    },
        
});
