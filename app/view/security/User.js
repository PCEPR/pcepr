Ext.define('PCEPR.view.security.User', {
    extend: 'Ext.panel.Panel',
    xtype: 'user',
    requires: [
        'PCEPR.view.security.UsersGrid',
        'PCEPR.util.Glyphs',
        'PCEPR.view.security.UserModel',
        'PCEPR.view.security.UserForm',
        'PCEPR.view.security.UserController'
    ],
    controller: 'user',
    viewModel: {
        type: 'user'
    },
    session : true,
    frame: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [{
        xtype: 'users-grid',
        flex: 1
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
                xtype: 'button',
                text: 'Add',
                glyph: PCEPR.util.Glyphs.getGlyph('add'),
                listeners: {
                    click: 'onAdd'
                }
            },
            {
                xtype: 'button',
                text: 'Edit',
                bind: {
                    disabled: '{!usersGrid.selection}'
                },
                glyph: PCEPR.util.Glyphs.getGlyph('edit'),
                listeners: {
                    click: 'onEdit'
                }
            },
            {
                xtype: 'button',
                text: 'Delete',
                bind: {
                    disabled: '{!usersGrid.selection}'
                },
                glyph: PCEPR.util.Glyphs.getGlyph('destroy'),
                listeners: {
                    click: 'onDelete'
                }
            }
        ]
    }]
});