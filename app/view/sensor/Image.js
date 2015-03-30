Ext.define("RadioCloudPortal.view.sensor.Image", {
	extend: 'Ext.panel.Panel',
	xtype: 'sensorimage',
	    
	config: {
		src: 'resources/images/Trash Logo.png'
	},
	
	constructor: function(param, config) {
		this.param = param;
		Image.superclass.contructor.call(this,config);
	},
	
	items: [{
			xtype: 'image',
			//src: 'resources/images/Trash Logo.png',
			src: this.src,
			height: 200,
			width: 200,
			x:50,
			y:50	
	}],
	
log: function(message) {
    console.log(arguments.callee.caller.$name + ': ' + message);
},
});

