Ext.define('RadioCloudPortal.store.sensor.BatteryVoltageData', {
    extend: 'Ext.data.Store',
    requires: ['RadioCloudPortal.model.sensor.BatteryVoltageData'],
    //alias: "BatteryVoltageData",

    model: 'RadioCloudPortal.model.sensor.BatteryVoltageData',
    autoLoad: true,
    
    filterByNode: function(nodeId) {
        if (nodeId) {
            this.clearFilter();
            
            this.filterBy(function(rec, id) {
            	var a = rec.get('node');
            	if (a['id'] == nodeId) {
            		//console.log("^^^^^^^^ Adding battery voltage data");
            		return true;
            		}
            	else
            		return false;            	
            });
        }
    },
        
});
