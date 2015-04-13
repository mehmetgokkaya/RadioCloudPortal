Ext.define("RadioCloud.view.node.Nodes", {
	extend: 'Ext.grid.Panel',
	xtype: 'nodesgrid',
	controller: 'nodes',
    
	layout: 'fit',
	
    requires: ['Ext.grid.column.Column', 'Ext.grid.column.Template'],
    
    plugins: 'gridfilters',
    
 	emptyText: 'No Matching Records',
    loadMask: true,
    stateful: true,
    defaultListenerScope: true,   
    

    columns: [{
        text: 'Name',
        dataIndex: 'name',
        width: 120
    }, {
        text: 'Status',
        dataIndex: 'status',
        //align: 'center',
        renderer : function(val) {
        	var out = "Connected";
        	if (val==0)
            	out = "Disconnected";
            
        if (val == 0) {
            return '<span style="color:' + "#cf4c35" + ';">' + out + '</span>';
        } else {
            return '<span style="color:' + "#73b51e" + ';">' + out + '</span>';
        }
        return out;
    }        

    }, {
        text: 'Signal Strength',
        dataIndex: 'signal_strength',
        align: 'center',
        renderer : function(val) {
        	var out = "Strong";
        	
        	if (val<-100) {
            	out = "Weak";
            	return '<span style="color:' + "#cf4c35" + ';">' + out + '</span>';
            }


        	if (val<-70) {
            	out = "Fair";
            	return out;
            };
        	           
            return '<span style="color:' + "#73b51e" + ';">' + out + '</span>';
    	}                
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
