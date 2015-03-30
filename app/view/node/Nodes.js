Ext.define("RadioCloud.view.node.Nodes", {
	extend: 'Ext.grid.Panel',
	xtype: 'nodesgrid',
	controller: 'nodes',
    
	layout: 'fit',
	
    requires: ['Ext.grid.column.Column', 'Ext.grid.column.Template'],

    columns: [{
        text: 'Name',
        dataIndex: 'name',
        width: 120
    }, {
        text: 'Status',
        dataIndex: 'status'
    }, {
        text: 'Signal Strength',
        dataIndex: 'signal_strength',
        align: 'right'
    }, {
        text: 'Address',
        dataIndex: 'address',
        flex: 1
}],

    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'Nodes',   // same store GridPanel is using
        dock: 'bottom',
        displayInfo: true
    }],

listeners: {
	scope: 'controller'			
},    
    
    log: function(message) {
        console.log(arguments.callee.caller.$name + ': ' + message);
    }      

    });
