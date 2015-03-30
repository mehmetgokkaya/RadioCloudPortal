Ext.define('RadioCloudPortal.view.map.NodesContainer', {
    extend: 'Ext.tab.Panel',
    xtype: 'nodescontainer',
    requires: [
    ],


    items: [{
        title: 'Map',
        xtype: 'nodesmap',
        store: 'Nodes',
        collapsible: true,
        split: true
    }, {
        xtype: 'nodesgrid',
        title: 'Nodes',
        padding: 10,
        store: 'Nodes',
        collapsible: true,
        split:true    
    
    }]

});
