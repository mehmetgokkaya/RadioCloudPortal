Ext.define("RadioCloudPortal.view.alert.Alerts", {
    extend: 'Ext.grid.Panel',
    //requires: ['Ext.chart.axis.Category', 'Ext.chart.axis.Numeric', 'Ext.chart.series.Line'],
    xtype: 'alerts',    
    requires: ['Ext.grid.column.Column', 'Ext.grid.column.Template'],
    controller: 'alerts',

	layout: 'fit',

render: function() {

    handled = false;
    this.callParent(arguments);
    if (this.getStore()) {
        var a = this;
        this.log("aaa");
        if (a && a.store) {
            if (a.store && !handled) {
		handled = true;
                makeInterval = setInterval(function() {

                    if (a && a.store) {
                        a.store.load();
                        a.log("count after load = " + a.getStore().count());
                        a.log("bbb");
                        a.refresh();
                         a.log("ccc");
                    }
                }, 20000)


                ;
            }
        }
    }
},

columns: [{
    text: 'date_created',
    dataIndex: 'dateCreated',
    renderer: this.formatDate,
    align: 'right'
}, {
    text: 'origin_id',
    dataIndex: 'origin_id',
    //hidden: true,
    width: 120,
    align: 'center'
}, {
    text: 'message',
    dataIndex: 'message',
    hidden: false,
    flex: 1
}, {
    text: 'status',
    dataIndex: 'status',
    //hidden: true,
    flex: 1,
    renderer : function(val) {
        var out = "Pending";
        if (val==0)
            out = "Handled";
            
        if (val == 0) {
            return '<span style="color:' + "#73b51e" + ';">' + out + '</span>';
        } else {
            return '<span style="color:' + "#cf4c35" + ';">' + out + '</span>';
        }
        return out;
    }        
}],

listeners: {
	cellclick: 'onCellClick',
	scope: 'controller'			
},

//refresh: function() {
//},


    /**
     * Title renderer
     * @private
     */
    formatTitle: function(value, p, record){
        return Ext.String.format('<div class="alerttype"><b>{0}</b><span class="gateway_id">{1}</span></div><span class="node_id">{2}</span></div>', value, record.get('gateway_id') || "Unknown", record.get('node_id') || "Unknown");
    },

    /**
     * Date renderer
     * @private
     */
    formatDate: function(date){
        if (!date) {
            return '';
        }

        var now = new Date(), d = Ext.Date.clearTime(now, true), notime = Ext.Date.clearTime(date, true).getTime();

        if (notime === d.getTime()) {
            return 'Today ' + Ext.Date.format(date, 'g:i a');
        }

        d = Ext.Date.add(d, 'd', -6);
        if (d.getTime() <= notime) {
            return Ext.Date.format(date, 'D g:i a');
        }
        return Ext.Date.format(date, 'Y/m/d g:i a');
    },

log: function(message) {
    console.log(arguments.callee.caller.$name + ': ' + message);
}

});
