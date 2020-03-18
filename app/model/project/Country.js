Ext.define('PCEPR.model.project.Country', {
    extend: 'Ext.data.TreeModel',
    fields: [{
        name: 'class',
        type: 'string'
    }, {
        name: 'id',
        type: 'int'
    }, {
        name: 'text',
        type: 'string'
    }]
});