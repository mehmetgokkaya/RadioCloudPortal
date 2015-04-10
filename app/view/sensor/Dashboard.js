Ext.define('RadioCloudPortal.view.sensor.Dashboard', {
    extend: 'Ext.panel.Panel',
    xtype: 'dashboard',
    controller: 'dashboard',
     
    requires: [
        'RadioCloudPortal.store.sensor.Sensors',
        'Ext.data.JsonStore',
        'RadioCloudPortal.view.sensor.LineChart',
        'RadioCloudPortal.view.sensor.GaugeChart',
        'RadioCloudPortal.view.sensor.GreenCircle',
        'RadioCloudPortal.view.sensor.RedCircle',
        
    ],

    stores: [
    	'Nodes', 
    	'Applications', 
    	'sensor.Sensors' 
    ],

    refs: [
    	{ ref: 'Sensors', selector: 'sensors'}
    ],

    layout: {
        type: 'table',
        columns: 3,
        align: 'center',        
		tableAttrs : {
            style : {
                        width : '100%',
                        height : '100%'                                 
                    }
            },
            tdAttrs : {
                    align : 'center',
                    valign : 'middle',
                    
                    //Kanir Added width and height % to scale according to window
                    width : '33%',                    
                    
            },        
    },

    defaults: {

			//Kanir changed the width to 100% and added flex=1 so table streches
            //width: 400,
			width: '100%',
			flex:1,



            height: 400,
            //height: '50%',
            
            
            frame: true,
            titleAlign: 'center',            
            animate: true,
            shadow: true,
            //padding: '10 10 10 10',
            //insetPadding: 10,
            //align: 'stretch'
            scrollbar: true,
            border:false,

    },

    items: [],
    autoScroll: true,


    renderCharts: function(node) {
            
        this.removeAll();
        sensorList = node.get('sensors');
        this.log(sensorList.length);
		
/************************************************************************************
   To Do:
   
  Need to refactor this so that it is all data driven such that new sensor types can 
  be added dynamically.  Should be straight forward to do.
************************************************************************************/

        Ext.getStore('sensor.Sensors').load();  
        //this.log("Number of Sensors: " +  Ext.getStore('sensor.Sensors').getCount());
        
        
        var me = this;

        this.log("InternalTemperature count: " + Ext.getStore('sensor.InternalTemperatureData').getCount());
        this.log("ExternalTemperature count: " + Ext.getStore('sensor.ExternalTemperatureData').getCount());
        this.log("ExternalHumidity count: " + Ext.getStore('sensor.ExternalHumidityData').getCount());
        this.log("BatteryVoltage count: " + Ext.getStore('sensor.BatteryVoltageData').getCount());
        this.log("Soil Moisture count: " + Ext.getStore('sensor.SoilMoistureData').getCount());
        
        
        Ext.Array.forEach(sensorList, function(sensor) {
            
            //me.log("Sensor.id: " + sensor.id);
            
            var sensorType = Ext.getStore('sensor.Sensors').getById(sensor.id).get("sensorType_id");            
				

// ########### External Humidity #######################################################
            if (sensorType==1 && Ext.getStore('sensor.ExternalHumidityData').getCount()>0) {
                me.log("Adding External Humidity Charts");
                me.add({
                    	title: 'External Humidity',
                    	//xtype: 'gaugechart',
                    	xtype: 'linechart',
                    	maximum: 10,
                    	majorTickSteps: 2,                    	                    	
                    	store: 'sensor.ExternalHumidityData'
                })
            };  
            
// ########### Internal Temperature #######################################################                      				
            if (sensorType==2 && Ext.getStore('sensor.InternalTemperatureData').getCount()>0) {
                me.log("Adding Internal Temp Chart");
                me.add({
                    	title: 'Internal Temperature',
                    	xtype: 'linechart',
                    	//xtype: 'gaugechart',
                    	maximum: 10,
                    	majorTickSteps: 2,                    	
                    	store: 'sensor.InternalTemperatureData',
                    	itemStore: 'sensor.InternalTemperatureData'
                })
            };
            
// ########### External Temperature #######################################################            
            if (sensorType==3  && Ext.getStore('sensor.ExternalTemperatureData').getCount()>0) {
                me.log("Adding External Temp Chart");
                me.add({
                    	title: 'External Temperature',
                    	xtype: 'linechart',
                    	//xtype: 'gaugechart',
                    	maximum: 10,
                    	majorTickSteps: 2,                    	
                    	store: 'sensor.ExternalTemperatureData'
                })
            };
            
// ########### Battery Voltage Humidity #######################################################            
            if (sensorType==4 && Ext.getStore('sensor.BatteryVoltageData').getCount()>0) {
                me.log("Adding Battery Voltage Gauge");
                             
                me.add({
                    	title: 'Battery Voltage',
                    	xtype: 'gaugechart',
                    	//maximum: 5,
                    	//majorTickSteps: 2,
                    	store: 'sensor.BatteryVoltageData',
                    	
        			
        			// Add the Axis Hack.  This is required only because there is some bug in Ext JS for guage Axis.
        			sprites: [{
            			type: 'text',
            			x: 15,
            			y: 123,
            			text: 'Empty',
            			fontSize: 18,
            			fillStyle: 'red'
        			}, {
            			type: 'text',
            			x: 415,
            			y: 123,
            			text: 'Full',
            			fontSize: 18,
            			fillStyle: 'red'        			
        			}
        			
        			]                      	                    	
                });
            };
            
// ########### Soil Moisture #######################################################            

            
            
            /*
            if (sensorType==9 && Ext.getStore('sensor.SoilMoistureData').getCount()>0) {
                me.log("Adding Soil Moisture Gauge");
                             
                me.add({
                    	title: 'Soil Moisture',
                    	xtype: 'gaugechart',
                    	//maximum: 5,
                    	//majorTickSteps: 2,
                    	store: 'sensor.SoilMoistureData',
                    	
                })
            };
            
            */
            
            if (sensorType==9 && Ext.getStore('sensor.SoilMoistureData').getCount()>0) {
                me.log("Adding Soil Moisture Gauge");
                
                // create a panel
                var soil_moisture_panel = me.add({
                	xtype: 'panel',
                	layout: { 
                		type: 'table', 
                		columns: 1,
                	
						tableAttrs : {
            				style : {
                        		width : '100%',
                        		height : '100%'                                 
                    		}
            			},
            			tdAttrs : {
                    		align : 'center',
                    		valign : 'middle',
            			},                  	                	
                	},
                	title: 'Soil Moisture',
                	draggable:true,
                	id: 'soilmoisture'
                });                
                
                
                // Create a polar chart
                var polarChart = soil_moisture_panel.add(Ext.create('Ext.chart.PolarChart', {
    				xtype: 'polar',
    				
    				//Kanir Changed it to Draggable=false
    				//draggable: true,
    				
    				width:325,   				
    				height: 200,
    				//y: 50,
    				
    				store: 'sensor.SoilMoistureData',
 					
 					axes: [{
            			type: 'numeric',
            			position: 'gauge',
            			maximum: 1000,
            			minimum: 400,
            			steps: 10,
            			majorticksteps:10,
						margin: -10,
    				}],    				    				
    				
    				series: [{
            			type: 'gauge',
            			field: 'value',
            			//maximum: this.maximum,
            			//maximum: 5,
            			donut: 50,
    				}],
				}));
				
				//soil_moisture_panel.add(polarChart);
                
                polarChart.redraw();
                
                
                var store = Ext.getStore('sensor.SoilMoistureData');
                store.load();
                var x = store.getAt(0).get('value');	

                // create a label
				var label = soil_moisture_panel.add({
					xtype: 'displayfield',
        			name: 'soil_moisture_txt',
        			//textAlign: 'center',
        			//y: 400,
        			//margin: "10,10,10,10",
        			value: x + " counts",
        			fieldCls:'biggertext',
        			style:{
         				'font-size':'16px!important'
        			},
				});
                
                
                
                // start the timer
                makeInterval = setInterval(function() {
                    var store = Ext.getStore('sensor.SoilMoistureData');
                    store.load();
                    
                    if (store.count() > 0) {
                    	var val = store.getAt(0).get('value');
                    
                    	if (val>800) {
                    		//label.setValue(val + " counts");
                    		label.setValue("Soil is very dry: " + val);
                    	} else if (val>800) {
                    		label.setValue("Soil moisture is a bit low: " + val);                    
                    	} else if (val<625) {
                    		label.setValue("Soil moisture is too much: " + val);
                    	} else {
                    		label.setValue("Soil moisture is appropriate: " + val);
                    	}
 						polarChart.redraw();    
 					}              	
                }, 2000);  
                
            };              				

            
// ###################################  Motion Data Sensor #############################            
            if (sensorType==12 && Ext.getStore('sensor.MotionData').getCount()>0) {
                me.log("Adding Motion Data");
                
                var motion = me.add({
                	xtype: 'panel',
                	layout: { type: 'table', columns: 1},
                	title: 'Motion Detection Sensor',
                	draggable:true,
                	id: 'motion'
                });                
                
                var motionImage = Ext.create('Ext.Img', {
    				src: 'resources/images/VibrateOff.png',
    				height: 280,
    				width:200,
    				x:0,
    				y:100,
    				padding: '75 0 0 0',
				});
				
				motion.add(motionImage);
 				
                makeInterval = setInterval(function() {
                    var store = Ext.getStore('sensor.MotionData');
                    store.load();
                    if (store.count()>0) {
                    
                    	var val = store.getAt(0).get('value');
                    
                    	var row = store.getAt(0);
                    
						if (row.get('value') == 'OFF') motionImage.setSrc('resources/images/VibrateOff.png');
						if (row.get('value') == 'ON') motionImage.setSrc('resources/images/VibrateOn.png');
					}

                }, 2000);
                
            };
            
            
// ###################################  Tilt Data Sensor #############################            
            if (sensorType==11 && Ext.getStore('sensor.TiltData').getCount()>0) {
                me.log("****************   Adding Tilt Sensor *************");
                             
                var tilt = me.add({
                	xtype: 'panel',
                	layout: { type: 'table', columns: 1},
                	title: 'Tilt Detection Sensor',
                	draggable:true,
                	id: 'tilt'
                });                
                
                var tiltImage = Ext.create('Ext.Img', {
    				src: 'resources/images/TiltUp.png',
    				height: 280,
    				width:200,
    				x:0,
    				y:100,
    				padding: '75 0 0 0',
				});
				
				tilt.add(tiltImage); 				

                // Look at the tilt position
                var store = Ext.getStore('sensor.TiltData');
                store.load();
                
                if (store.count() > 0) {
                	var val = store.getAt(0).get('value');
					if (val == 'UP') tiltImage.setSrc('resources/images/TiltUp.png');
					if (val == 'DOWN') tiltImage.setSrc('resources/images/TiltDown.png');
					if (val == 'LEFT') tiltImage.setSrc('resources/images/TiltLeft.png');
					if (val == 'RIGHT') tiltImage.setSrc('resources/images/TiltRight.png');
				}



                makeInterval = setInterval(function() {
                    var store = Ext.getStore('sensor.TiltData');
                    store.load();
                    if (store.count() > 0) {
                    	var val = store.getAt(0).get('value');
                    
                    	var row = store.getAt(0);
                    
						if (row.get('value') == 'UP') tiltImage.setSrc('resources/images/TiltUp.png');
						if (row.get('value') == 'DOWN') tiltImage.setSrc('resources/images/TiltDown.png');
						if (row.get('value') == 'LEFT') tiltImage.setSrc('resources/images/TiltLeft.png');
						if (row.get('value') == 'RIGHT') tiltImage.setSrc('resources/images/TiltRight.png');
					}
                }, 2000);
            };            

// ###################################  Waste Management Data Sensor #############################            
            if (sensorType==10  && Ext.getStore('sensor.GarbageData').getCount()>0 ) {
                me.log("Adding Waste Management Image");
                
                // Add a panel to the dashboard
                var waste_management = me.add({
                	xtype: 'panel',
                	layout: { 
                		type: 'table', 
                		columns: 1,
                		tableAttrs : {
            				style : {
                        		width : '100%',
                        		height : '100%'                                 
                    		}
            			},
            			tdAttrs : {
                    		align : 'center',
                    		valign : 'middle',
            			},                  	                	
                	},
                	title: 'Waste Management',
                	draggable:true,
                	id: 'wastemanagement'
                });                
                
                // Add an image to the waste_management panel
                var garbageImage = Ext.create('Ext.Img', {
    				src: 'resources/images/garbage_full.jpg',
    				height: 250,
    				width:250,
    				//autoEl: 'div',
    				x:0,
    				y:100,
    				//padding: '75 0 0 0',
				});
				
				waste_management.add(garbageImage);
				
				
				var store = Ext.getStore('sensor.GarbageData');
                store.load();
                if (store.count()>0) {
                	var x = store.getAt(0).get('value');				
				
					// Add a label to display the fill level
					var label = waste_management.add({
						xtype: 'displayfield',
						fieldLabel: 'Free Space:',
        				name: 'percent_full_txt',
        				value: x + " cms",
        				labelCls: 'biggertext',
        				fieldCls:'biggertext',
        				style:{
         					'font-size':'16px!important'
        				},
  						//labelStyle:{
                		//	'font-size':'32px!important'
             			//},
					});
				}
                
                
                // Start a timer to periodically fetch the latest value
                makeInterval = setInterval(function() {
                    var store = Ext.getStore('sensor.GarbageData');
                    store.load();
                    if (store.count() > 0) {
                    	var val = store.getAt(0).get('value');
                    	label.setValue(val + " cms");
                    	if (val<26) {
                    		garbageImage.setSrc('resources/images/garbage_full.jpg');
                    	}
                    	else
                    		garbageImage.setSrc('resources/images/garbage_empty.jpg');
                    }
                    	
                }, 2000);                				
    		}
    		
    	});
    	
    },	
    

    log: function(message) {
        console.log(arguments.callee.caller.$name + ': ' + message);
    }
});