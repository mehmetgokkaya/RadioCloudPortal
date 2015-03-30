Ext.define("RadioCloudPortal.view.sensor.LineChart", {
	extend: 'Ext.chart.CartesianChart',
	xtype: 'linechart',
	
	draggable:true,

	requires: [
		'Ext.chart.axis.Category', 
		'Ext.chart.axis.Numeric', 
		'Ext.chart.series.Line',
		'Ext.chart.CartesianChart',
		'RadioCloudPortal.store.sensor.InternalTemperatureData'
	],
	

	
	render: function() {

    this.callParent(arguments);
    if (this.getStore()) {
        var a = this;
        if (a && a.store) {
            if (a.store) {
                makeInterval = setInterval(function() {

                    if (a && a.store) {
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
	xtype: 'chart',
	width: 300,
	//width: 100%,
	renderTo: Ext.getBody(),

    insetPadding: 40,
    innerPadding: {
        left: 40,
        right: 40
    },
    
    sprites: [{
        	type: 'text',
        	//text: 'asasa',
        	font: '22px Helvetica',
        	width: 100,
        	height: 30,
        	x: 40, // the sprite x position
        	y: 20  // the sprite y position
        },{
            type: 'text',
            //text: 'Data: Browser Stats 2012',
            font: '10px Helvetica',
            x: 12,
            y: 470
    	}],    	
    
    axes: [{
            type: 'numeric',
            fields: 'value',
            position: 'left',
            grid: true,
            minimum: 0,
            maximum: 100,
            renderer: function (v) { return v.toFixed(1); }
        },{
            type: 'category',
            fields: 'dateCreated',
            position: 'bottom',
            grid: false,
            label: {
                rotate: {
                    degrees: -45
                },
            },
                
                // To Do:
                // Since the timestamp is too long, don't display it.
                // Need to customize this render function such that it
                // displays just the time and not date.  Should show the date
                // only once per day.
                renderer: function(v){
                	//return "";
                	return Ext.Date.format(v,'H-i');
                	//return v;
                }
            //}
    	}],
    
    series: [{
            type: 'line',
            xField: 'dateCreated',
            yField: 'value',
            style: {
                lineWidth: 4
            },
            marker: {
                radius: 4
            },
            //label: {
            //    field: 'value',
            //    display: 'over'
            //},
            highlight: {
                fillStyle: '#000',
                radius: 5,
                lineWidth: 2,
                strokeStyle: '#fff'
            },
                
            tooltip: {
                trackMouse: true,
                style: 'background: #fff',
                showDelay: 0,
                dismissDelay: 0,
                hideDelay: 0,
                renderer: function(storeItem, item) {
                    this.setHtml(storeItem.get('value') + ': ' + storeItem.get('dateCreated'));
                }
            }                
    	}]
});