Ext.define('PCEPR.view.main.Main', {
    extend: 'Ext.container.Container',
    plugins: 'viewport',
    xtype: 'app-main',
    requires: [
        'PCEPR.view.main.Header',
        'PCEPR.view.main.Footer',
        'PCEPR.view.main.Panel',
        'PCEPR.view.main.MainController',
        'PCEPR.view.main.MainModel',
        'PCEPR.view.menu.Accordion',
    ],

    controller: 'main',
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
        xtype : 'mainmenu',
        region : 'west',
    },
    ]
});
