Ext.define('RadioCloudPortal.store.sensor.TiltData', {
    extend: 'Ext.data.Store',
    requires: ['RadioCloudPortal.model.sensor.TiltData'],
    //alias: "BatteryVoltageData",

    model: 'RadioCloudPortal.model.sensor.TiltData',
    autoLoad: true,
    
    filterByNode: function(nodeId) {
        if (nodeId) {
            this.clearFilter();
            
            this.filterBy(function(rec, id) {
            	var a = rec.get('node');
            	if (a['id'] == nodeId) {
            		//console.log("^^^^^^^^ Adding tilt data");
            		return true;
            		}
            	else
            		return false;            	
            });
        }
    },
        
});
