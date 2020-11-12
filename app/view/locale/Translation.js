Ext.define('PCEPR.view.locale.Translation', {
    extend: 'Ext.button.Split',
    xtype: 'translation',

    requires: [
        'PCEPR.view.locale.TranslationController'
    ],

    controller: 'translation',

    menu: {
        xtype: 'menu',
        defaults:{
            listeners: {
                click: 'onMenuItemClick'
            }
        },
        items: [
            {
                xtype: 'menuitem',
                iconCls: 'en',
                text: 'English'
            },
            {
                xtype: 'menuitem',
                iconCls: 'eth',
                text: 'Ethiopia'
            },
            {
                xtype: 'menuitem',
                iconCls: 'pt_BR',
                text: 'Afan Oromo'
            }
        ]
    }
});