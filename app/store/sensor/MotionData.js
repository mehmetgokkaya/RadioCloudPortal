Ext.define('RadioCloudPortal.store.sensor.MotionData', {
    extend: 'Ext.data.Store',
    requires: ['RadioCloudPortal.model.sensor.MotionData'],
    //alias: "BatteryVoltageData",

    model: 'RadioCloudPortal.model.sensor.MotionData',
    autoLoad: true,
    
    filterByNode: function(nodeId) {
        if (nodeId) {
            this.clearFilter();
            
            this.filterBy(function(rec, id) {
            	var a = rec.get('node');
            	if (a['id'] == nodeId) {
            		//console.log("^^^^^^^^ Adding motion data");
            		return true;
            		}
            	else
            		return false;            	
            });
        }
    },
        
});
