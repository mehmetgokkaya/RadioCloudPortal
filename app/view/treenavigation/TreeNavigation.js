
Ext.define("RadioCloudPortal.view.navigation.TreeNavigation",{
    extend: "Ext.Panel",
    xtype: 'treenavigation',
    controller: 'treenavigation',

    
	requires: [
		'RadioCloudPortal.model.Application',
		'RadioCloudPortal.store.Applications',
		'RadioCloudPortal.model.Node',
		'RadioCloudPortal.store.Nodes',		
		'RadioCloudPortal.view.navigation.NavigationController',
		'RadioCloudPortal.view.navigation.NavigationModel',
		'Ext.form.field.ComboBox',
		'Ext.tree.TreePanel'		
		],	
		
		

 	items: [{
        xtype: 'treepanel',
        width: 300,
        height: 200,
        rootVisible: false,
        // Sharing the store synchronizes the views:
        store: 'Applications',
        //title: 'Tree test',
        useArrows: true,
        displayField: 'name',
        //colspan: 2,
		listeners: {
			itemclick: 'onItemChange',
			beforeitemexpand: 'onItemExpand',
			beforeitemcollapse: 'onItemCollapsed',
			scope: 'controller'			
		}
        
	}],
	

    log: function(message) {
            console.log(arguments.callee.caller.$name + ': ' + message);
    }
});