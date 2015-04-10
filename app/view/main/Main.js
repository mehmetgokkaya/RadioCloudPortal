/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('RadioCloudPortal.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'RadioCloudPortal.view.main.MainController',
        'RadioCloudPortal.view.main.MainModel',
        'RadioCloudPortal.view.navigation.Navigation',
        'RadioCloudPortal.view.navigation.NavigationController',
        'RadioCloudPortal.view.alert.Alerts',
        'RadioCloudPortal.view.map.NodesMap',
        'RadioCloudPortal.view.sensor.SensorDataCharts',
        'RadioCloudPortal.view.sensor.Dashboard', 
        'RadioCloudPortal.view.sensor.DashboardController'
              
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },


   items: [{
        xtype: 'component',
        region: 'north',
        padding: 10,
        height: 40,
        //html: 'Cognosos'
        html: '<img src="resources/images/cognosos.png" height="30" width="105" />'
    },{
        
        region: 'west',
        xtype: 'treenavigation',
        title: 'Applications',
        
        
        //width: 188,
        //kanir added flex so width of the panel depends on size of the window
        flex:2,
        columnWidth: .05,
        padding: 8,
        
        //padding: 10,
        split: true,
        collapsible: true,        

    }, {
        xtype: 'dashboard',
        region: 'center',
        //title: 'Sensor Data',
        title: '<font style="font-size: 16px;"><b>Sensor Data</b></font>',
        titleAlign: 'center',
        
        //kanir added flex so width of the panel depends on size of the window
        flex:10,
        
        
        padding: 10,
        height: 160,
        collapsible: false,
        split:true
    }, {    
        xtype: 'nodescontainer',
        //xtype: 'gauge-basic',
        region: 'east',
        padding: 10,
        title: 'Sensor Network',
        height: 160,
        width: 300,
        collapsible: true,
        split: true
    }, {
        xtype: 'alerts',
        region: 'south',
        padding: 10,
        title: 'Alerts',
        store: 'Alerts',
        height: 180,
        collapsible: true,
        split:true 
     }]
});
