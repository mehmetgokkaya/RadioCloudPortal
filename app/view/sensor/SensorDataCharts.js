Ext.define('RadioCloudPortal.view.sensor.SensorDataCharts', {
    extend: 'Ext.tab.Panel',
    xtype: 'sensordatacharts',
    requires: [
    ],


    items: [{
        title: 'Dashboard',
        xtype: 'dashboard'
    }
    /*
    , {
        title: 'Historical Trends',
        xtype: 'trending'    
    }
    */]

});
