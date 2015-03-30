
Ext.define("RadioCloudPortal.view.navigation.Navigation",{
    extend: "Ext.Panel",
    xtype: 'navigation',
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

    //config: {
    //    applicationId: -1
    //},


/*
    initComponent: function() {
        this.log("s");

        var me = this;
        this.on('select', function(selectionModel, record) {
            //me.setSensor(record.get('text'));  //integration testing
            this.log(record.get('name'));
        });
        this.callParent();
    },



    applyApplicationId: function(applicationId) {
        var record = this.down('#applicationCombo').getStore().getById(applicationId);
        if (record) {
            return applicationId;
        }
    },
*/

    updateApplicationId: function(applicationId) {
        this.log(applicationId);
        this.down('#applicationCombo').setValue(applicationId);
        this.fireEvent('applicationchange', this, applicationId);
        this.log("aaaa");
    },


    //html: 'Application',
    tbar: [{
        xtype: 'combobox',
        itemId: 'applicationCombo',
        fieldLabel: 'Application',
        labelWidth: 60,
        width: 180,
        forceSelection: true,
        emptyText: 'Select',

        store: 'Applications',
        

        queryMode: 'local',
        displayField: 'name',
        valueField: 'id',
        listeners: {
            change: function(combo, value) {
                combo.up('navigation').setApplicationId(value);
            }
        }
	}],

    log: function(message) {
            console.log(arguments.callee.caller.$name + ': ' + message);
    }
});