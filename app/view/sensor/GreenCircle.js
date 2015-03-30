Ext.define("RadioCloudPortal.view.sensor.GreenCircle", {
	extend: 'Ext.draw.Container',
	xtype: 'greencircle',
	store: 'sensor.MotionData',
	


/*
render: function() {

    this.callParent(arguments);
    //if (this.getStore()) {
        var a = this;
        if (a && a.store) {
            if (a.store) {
                makeInterval = setInterval(function() {

                    if (a && a.store) {
                    	console.log("@@@@@@@@@@@@@@@@@@@@@ Green Motion Data Store count: " + a.store.getCount());
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
        fillStyle: 'green',
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

