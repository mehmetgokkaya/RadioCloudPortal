Ext.define('RadioCloudPortal.store.Applications', {
	extend: 'Ext.data.TreeStore',
	requires: ['RadioCloudPortal.model.Application'],
	model: 'RadioCloudPortal.model.Application',
	autoLoad: true
});