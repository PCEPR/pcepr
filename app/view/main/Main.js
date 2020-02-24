Ext.define('PCEPR.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'PCEPR.view.main.Header',
        'PCEPR.view.main.Footer',
        'PCEPR.view.main.Panel',
        'PCEPR.view.main.MainController',
        'PCEPR.view.main.MainModel'
    ],

    xtype: 'app-main',
    controller: 'main',
    plugins: 'viewport',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype : 'mainpanel',
        region: 'center'
    },
    {
        xtype : 'appheader',
        region : 'north'
    },
    {
        xtype : 'appfooter',
        region : 'south'
    },
    {
        xtype : 'container',
        region : 'west',
        width : 200,
        split : true
    }
    ]
});
