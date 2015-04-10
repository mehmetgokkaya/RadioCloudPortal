/**
 * A wrapper around a Google map. Use centerMap(latitude, longitude) to center
 * the map at the specified location.
 */

Ext.define('RadioCloudPortal.view.map.NodesMap', {
    extend: 'Ext.Component',
    xtype: 'nodesmap',
    controller: 'nodesmap',
    config: {
        store: null
    },
    
    //padding: 20,
    //title: 'Sensor Network',

    //html: '<p>Please select a school and category.</p>',



/*
    constructor: function(config) {

        // Surprisingly, nothing up the component 
        // hierarchy calls this.initConfig(). Since
        // we have an apply method, we need it so the
        // calling routine's store config is applied.
        this.initConfig(config);
        this.callParent(arguments);
    },
*/

    applyStore: function(store) {
        if (Ext.isString(store)) {
            store = Ext.getStore(store);
        }
        return store;
    },
    
    updateStore: function(store) {
        if (store) {
            var me = this;
            this.getStore().on('datachanged', function(store) {
                me.setMarkers(store);
            }, me);
        }
    },


     
    // @private

    renderMap: function() {
        
        this.log("");
        // Assert : centerMap() has been run, and therefore, 
        // this.latitude and this.longitude are set.
        var cfg = {
            zoom: 11,
            center: new google.maps.LatLng(this.latitude, this.longitude),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };

        this.map = new google.maps.Map(this.getEl().dom, cfg);
        this.renderMarkers();
    },



    circleMap: function(latitude, longitude) {
        this.log("");
        if (this.map) {
            this.applicationLatitude = latitude;
            this.applicationLongitude = longitude;

            this.CircleOptions = {
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.07,
                map: this.map,
                center: new google.maps.LatLng(latitude, longitude),
                radius: 8000
            };

            this.applicationRangeCircle = new google.maps.Circle(this.CircleOptions);
        }
    },



    circleApplication: function() {
        this.circleMap(this.applicationLatitude, this.applicationLongitude);
    },

    centerMap: function(latitude, longitude) {
        this.log("");
        
        // Save the latitude/longitude
        this.latitude = latitude;
        this.longitude = longitude;
        
        // If we're visible, render the map right away. Else wait until someone clicks on the tab.
        if (this.isVisible()) {
            this.renderMap();
        } else {
            this.on('show', this.renderMap, this, {
                single: true
            });
        }
    },



    highlight: function(record) {
        this.log("");
        if (this.selection === record) {
            return;
        }

        this.selection = record;
        var markers = this.getMarkers();
        for (var i = 0; i < markers.length; i++) {
            var marker = markers[i];

            if (marker.record === record) {
                marker.setIcon('resources/images/YellowStar.png');
            } else {
                if(marker.get('title') !== "Application Center")
                    marker.setIcon();
            }
        }
    },


    // @private

    getMarkers: function() {
        return (this.markers || []);
    },

    // @private
    setMarkers: function(nodes) {
        this.log("");
        
        // Hide the previously saved markers
        var markers = this.getMarkers();
        Ext.Array.forEach(markers, function(marker) {
            marker.setMap(null);
        });

        this.markers = [];

        // For each Node, push a new marker onto the array
        var me = this;

        nodes.each(function(r) {
            var ll = new google.maps.LatLng(r.data.latitude, r.data.longitude);
            var marker = new google.maps.Marker({
                position: ll,
                title: r.get('name'),
                record: r
            });
            
            me.markers.push(marker);
            google.maps.event.addListener(marker, "click", function() {
                me.fireEvent('select', me, r);
                me.highlight(r);
            });
        });


            
/* Let's not mark the gateways here, as now this is application focussed and not Gateway focussed
            var application_pos = new google.maps.LatLng(this.applicationLatitude, this.applicationLongitude);
            var marker = new google.maps.Marker({
                position: application_pos,
                title: 'Application Center'
                //record: g
            });
            
            //marker.setIcon('resources/images/blue.png');
            marker.setIcon('resources/images/gateway2.png');
            me.markers.push(marker);
*/


        // If we're visible, render the markers right away. Else wait until someone clicks on the tab.

        if (this.isVisible()) {
            this.renderMarkers();
        } else {
            this.on('show', this.renderMarkers, this, {
                single: true
            });
        }
    },



    // @private
    renderMarkers: function() {
        this.log("");
        // This method must always be run after setMarkers()
        // Assert: this.map is set.

        var me = this;
        Ext.Array.forEach(this.getMarkers(), function(marker) {
            marker.setMap(me.map);
        });
    },



    log: function(message) {
        console.log(arguments.callee.caller.$name + ': ' + message);
    }



});