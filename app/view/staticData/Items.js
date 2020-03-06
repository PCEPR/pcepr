Ext.define('PCEPR.view.staticData.Items', {
    extend: 'PCEPR.view.staticData.BaseGrid',
    xtype: 'itemsgrid',

    store: 'staticData.Items',

    columns: [{
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
        },
        {
            text: 'UoM',
            width: 100,
            dataIndex: 'UoM',
            editor: {
                allowBlank: true,
                maxLength: 100
            },
            filter: {
                type: 'string'
            }
        },
        {
            text: 'Price',
            width: 100,
            dataIndex: 'price',
            editor: {
                allowBlank: true,
                maxLength: 100
            },
            filter: {
                type: 'numeric'
            }
        },
        {
            text: 'Brand',
            flex: 1,
            dataIndex: 'brand',
            editor: {
                allowBlank: false,
                maxLength: 100
            },
            filter: {
                type: 'string'
            }
        },
        {
            text: 'Tax',
            hidden: true,
            flex: 1,
            dataIndex: 'tax',
            editor: {
                allowBlank: true,
                maxLength: 100
            },
            filter: {
                type: 'string'
            }
        },
        {
            text: 'Model',
            flex: 1,
            dataIndex: 'model',
            editor: {
                allowBlank: true,
                maxLength: 100
            },
            filter: {
                type: 'numeric'
            }
        },
        {
            text: 'category',
            flex: 1,
            dataIndex: 'category_fkid',
            editor: {
                allowBlank: true,
                maxLength: 100
            },
            filter: {
                type: 'numeric'
            }
        },
        {
            text: 'Make',
            flex: 1,
            hidden: true,
            dataIndex: 'make',
            editor: {
                allowBlank: false,
                maxLength: 100
            },
            filter: {
                type: 'string'
            }
        },
        {
            text: 'image',
            width: 100,
            hidden: true,
            dataIndex: 'image',
            editor: {
                allowBlank: true,
                maxLength: 100
            },
            filter: {
                type: 'string'
            }
        },
        {
            text: 'Description',
            hidden: true,
            flex: 1,
            dataIndex: 'description',
            editor: {
                allowBlank: true,
                maxLength: 100
            },
            filter: {
                type: 'string'
            }
        }
    ]
})