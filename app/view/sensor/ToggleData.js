Ext.define("RadioCloudPortal.view.sensor.ToggleData",{
    extend:"Ext.Container",
    xtype:'toggledata',
    config:{
    },
    layout: 'vbox',
    
	items: [],
	
    initComponent: function() {
    	this.add({
    		xtype: 'button',
    		text: 'green'
    	});
    }
	    
});