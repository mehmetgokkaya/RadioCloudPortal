Ext.define('RadioCloudPortal.store.Gateways', {
	extend: 'Ext.data.Store',

	requires: ['RadioCloudPortal.model.Gateway'],



	model: 'RadioCloudPortal.model.Gateway',
	autoLoad: true
});