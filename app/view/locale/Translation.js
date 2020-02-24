Ext.define('PCEPR.view.locale.Translation', {
    extend: 'Ext.button.Split',
    alias: 'widget.translation',
    requires : [
        'PCEPR.view.locale.TranslationController'
    ],
    controller : 'translation',
    menu: Ext.create('Ext.menu.Menu', {
        items: [
            {
                xtype: 'menuitem',
                iconCls: 'en',
                text: 'English',
                listeners:{
                    click : 'onMenuItemClick'
                }
            },
            {
                xtype: 'menuitem',
                iconCls: 'eth',
                text: 'Ethiopia',
                listeners:{
                    click : 'onMenuItemClick'
                }
            },
            {
                xtype: 'menuitem',
                iconCls: 'pt_BR',
                text: 'Português',
                listeners:{
                    click : 'onMenuItemClick'
                }
            }
        ]
    })
});