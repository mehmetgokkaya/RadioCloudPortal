Ext.define('RadioCloudPortal.view.map.NodesContainer', {
    extend: 'Ext.tab.Panel',
    xtype: 'nodescontainer',
    requires: [
    ],
    collapsible: true,


    items: [{
        title: 'Map',
        xtype: 'nodesmap',
        store: 'Nodes',
    }, {
        xtype: 'nodesgrid',
        title: 'Nodes',
        padding: 10,
        store: 'Nodes',
    
    }, {
        xtype: 'sensorgrid',
        title: 'Sensor',
        padding: 10,
        store: 'sensor.Sensors',
        collapsible: true,
        split:true    

    }]

});
