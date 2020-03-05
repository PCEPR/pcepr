Ext.define('PCEPR.view.staticData.Items', {
    extend: 'PCEPR.view.staticData.BaseGrid',
    xtype: 'itemsgrid',

    store: 'staticData.Items',

    columns: [
        {
            text: 'Item Id',
            width: 100,
            dataIndex: 'items_id',
            filter: {
                type: 'numeric'
            }
        },
        {
            text: 'Item Name',
            flex: 1,
            dataIndex: 'items_name',
            editor: {
                allowBlank: false,
                maxLength: 100
            },
            filter: {
                type: 'string'
            }
        }
    ]
})