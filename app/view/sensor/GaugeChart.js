Ext.define('RadioCloudPortal.view.sensor.GaugeChart', {
extend: 'Ext.chart.PolarChart',
xtype: 'gaugechart',
    
requires: [
	'Ext.chart.*', 
],



interactions: {
    type: 'panzoom'
},



render: function() {

    this.callParent(arguments);
    if (this.getStore()) {
        var a = this;
        if (a && a.store) {
            if (a.store) {
                makeInterval = setInterval(function() {

                    if (a && a.store) {
                    	console.log("@@@@@@@@@@@@@@@@@@@@@Gauge Chart Store count: " + a.store.getCount());
                        a.store.load();
                        //a.log("count after load = " + a.getStore().count());
                        a.redraw();
                    }
                }, 10000)


                ;
            }
        }
    }
},



log: function(message) {
    console.log(arguments.callee.caller.$name + ': ' + message);
},


/*        
config: {
	max: 5
},
initComponent: function() {
	var me=this;
	this.callParent();
    this.max=5;	
},

getMax: function() {
	return this.max;
},
*/


	xtype: 'polar',
	
	draggable:true,

    width: 300,
    
    innerPadding: {
        left: 40,
        right: 40
    },


    insetPadding: 30,
    renderTo: Ext.getBody(),
    layout: 'fit',
    axes: [{
            type: 'numeric',
            position: 'gauge',
            maximum: 200,
            minimum: 0,
            steps: 10,
            majorticksteps:10,
			margin: -10,
			hidden: false,
            //label: {
            
            
            /*
            renderer: function (v) {
                    //if (v === 1) return 'low';
                    //if (v === 3) return 'medium';
                    //if (v === 5) return 'good';
                    //return ' ';
                    console.log("#####################################");
                    return v;
                }
                //}
            */
            
            
    }],
    series: [{
            type: 'gauge',
            field: 'value',
            //maximum: this.maximum,
            //maximum: 5,
            donut: 50,
            //donut: true,
            //colorSet: ['#F49D10', '#ddd'],
            //needle: true
    }],
});  