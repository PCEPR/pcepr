Ext.define('PCEPR.model.staticData.Base', {
    extend: 'PCEPR.model.Base',

    fields: [{
        name: 'last_update',
        type: 'date',
        dateFormat : 'Y-m-j H:i:s'
    }]
});