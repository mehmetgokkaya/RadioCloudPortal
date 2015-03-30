Ext.define("RadioCloudPortal.view.sensor.RedCircle", {
	extend: 'Ext.draw.Container',
	xtype: 'redcircle',
	store: 'sensor.MotionData',
	


/*
render: function() {


    this.callParent(arguments);
    //if (this.getStore()) {
        var a = this;
        if (a && a.store) {
            if (a.store) {
                makeInterval = setInterval(function() {
					a.hide();
                    if (a && a.store) {
                    	console.log("@@@@@@@@@@@@@@@@@@@@@Red Motion Data Store count: " + a.store.getCount());
                        //a.store.load();
                        a.log("count after load = " + a.getStore().count());
                        a.redraw();
                    }
                }, 10000)
                ;
            }
        }
    //}
},
  
*/

  
    sprites: {
        type: 'circle',
        fillStyle: 'red',
        r: 85,
        cx: 215,
        cy: 185,
  	},
  	          
    height:100,
    width:100,
    draggable:true,
    renderTo:Ext.getBody(),

log: function(message) {
    console.log(arguments.callee.caller.$name + ': ' + message);
},
});

