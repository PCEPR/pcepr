Ext.define('PCEPR.view.group.Groups', {
    extend: 'Ext.panel.Panel',
    xtype: 'group',

    requires: [
        'PCEPR.view.group.GroupGrid',
        'PCEPR.view.group.GroupModel',
    ],
    viewModel: {
        type: 'group'
    },
    session: true,

    frame: true,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'groups',
            flex: 1
        }
    ],
    //  dockedItems: [
    //     {
    //         xtype: 'toolbar',
    //         dock: 'top',
    //         items: [
    //             {
    //                 xtype: 'button',
    //                 text: 'Add',
    //                 glyph: PCEPR.util.Glyphs.getGlyph('add'),
    //                 listeners: {
    //                     click: 'onAdd'
    //                 }
    //             },
    //             {
    //                 xtype: 'button',
    //                 text: 'Edit',
    //                 glyph: PCEPR.util.Glyphs.getGlyph('edit'),
    //                 listeners: {
    //                     click: 'onEdit'
    //                 },
    //                 bind: {
    //                     disabled: '{!groupGrid.selection}'
    //                 }
    //             },
    //             {
    //                 xtype: 'button',
    //                 text: 'Delete',
    //                 glyph: PCEPR.util.Glyphs.getGlyph('destroy'),
    //                 listeners: {
    //                     click: 'onDelete'
    //                 },
    //                 bind: {
    //                     disabled: '{!groupGrid.selection}'
    //                 }
    //             }
    //         ]
    //     }
    // ]
});