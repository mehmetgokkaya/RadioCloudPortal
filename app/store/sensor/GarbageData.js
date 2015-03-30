Ext.define('RadioCloudPortal.store.sensor.GarbageData', {
    extend: 'Ext.data.Store',
    requires: ['RadioCloudPortal.model.sensor.GarbageData'],
    //alias: "BatteryVoltageData",

    model: 'RadioCloudPortal.model.sensor.GarbageData',
    autoLoad: true,
    
    filterByNode: function(nodeId) {
        if (nodeId) {
            this.clearFilter();
            
            this.filterBy(function(rec, id) {
            	var a = rec.get('node');
            	if (a['id'] == nodeId) {
            		//console.log("^^^^^^^^ Adding garbage data");
            		return true;
            		}
            	else
            		return false;            	
            });
        }
    },
        
});
