Ext.define('RadioCloudPortal.store.Customers', {
	extend: 'Ext.data.Store',

	requires: ['RadioCloudPortal.model.Customer'],



	model: 'RadioCloudPortal.model.Customer',
	autoLoad: true
});