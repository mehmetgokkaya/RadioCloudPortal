Ext.define("RadioCloud.view.sensor.SensorGrid", {
	extend: 'Ext.grid.Panel',
	xtype: 'sensorgrid',
	controller: 'sensorgrid',
    
	layout: 'fit',
	
    requires: ['Ext.grid.column.Column', 'Ext.grid.column.Template', 'Ext.grid.filters.Filters'],
    
    plugins: 'gridfilters',
    
 	emptyText: 'No Matching Records',
    loadMask: true,
    stateful: true,

    // Set a stateId so that this grid's state is persisted.
    //stateId: 'stateful-filter-grid',  
    
  	// Dispatch named listener and handler methods to this instance
    defaultListenerScope: true,     

    
    tbar: [{
        text: 'Show Filters...',
        tooltip: 'Show filter data for the store',
        handler: 'onShowFilters'
    }, {
        text: 'Clear Filters',
        tooltip: 'Clear all filters',
        handler: 'onClearFilters'
    }],    
    
    columns: [{
        text: 'Last Update',
        dataIndex: 'sensorType_id',
        width: 120,
        renderer : function(val) {
        	try {
        		n = Ext.getStore("sensor.SensorTypes").getById(val).get("name");
        		storeName = "sensor." + n + "Data";
        		store = Ext.getStore(storeName);
        		//return store.getAt(0).get('dateCreated');
        		return Ext.Date.format(store.getAt(0).get('dateCreated'),'m-d-y,  H:i a');
        	} catch (e) {
        		return 'No Updates';
        	}    	
        }
    }, {
        text: 'Node',
        dataIndex: 'node',
        
    	renderer : function(val) {
        	n = Ext.getStore("Nodes").getById(val['id']);
        	return n.get("name");
    	},
    	
       // As an object, the type property indicates the type of filter to
        // apply. All other properties configure that filter instance.
        filter: {
            type: 'list'
        }    	        
        
    }, {
        text: 'Sensor Type',
        dataIndex: 'sensorType_id',
        renderer : function(val) {
        	n = Ext.getStore("sensor.SensorTypes").getById(val);
        	return n.get("name");        	
        },
       
       	// As an object, the type property indicates the type of filter to
        // apply. All other properties configure that filter instance.
        filter: {
            type: 'list',
        }        
        
    }, {
        text: 'Current Value',
        dataIndex: 'sensorType_id',
        renderer : function(val) {
        	try {
        		n = Ext.getStore("sensor.SensorTypes").getById(val).get("name");
        		storeName = "sensor." + n + "Data";
        		store = Ext.getStore(storeName);
        		return store.getAt(0).get('value');
        	} catch (e) {
        		return 'No Data';
        	}
        },
        
        
    }],

    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'sensor.Sensors',
        dock: 'bottom',
        displayInfo: true
    }],

listeners: {
	scope: 'controller'			
},    
    
    
    onClearFilters: function () {
        // The "filters" property is added to the grid (this) by gridfilters
        this.filters.clearFilters();
    },

    onShowFilters: function () {
        var data = [];

        // The actual record filters are placed on the Store.
        this.store.getFilters().each(function (filter) {
            data.push(filter.serialize());
        });

        // Pretty it up for presentation
        data = Ext.JSON.encodeValue(data, '\n').replace(/^[ ]+/gm, function (s) {
            for (var r = '', i = s.length; i--; ) {
                r += '&#160;';
            }
            return r;
        });
        data = data.replace(/\n/g, '<br>');

        Ext.Msg.alert('Filter Data', data);
    },



log: function(message) {
        console.log(arguments.callee.caller.$name + ': ' + message);
}      

    });
