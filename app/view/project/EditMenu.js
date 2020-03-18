Ext.define('PCEPR.view.project.EditMenu', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.editMenu',
    width: 120,
    requires: [
        'PCEPR.util.Glyphs',
    ],
    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [{
                    xtype: 'menuitem',
                    text: 'Edit',
                    glyph: PCEPR.util.Glyphs.getGlyph('edit')
                },
                {
                    xtype: 'menuitem',
                    text: 'Delete',
                    glyph: PCEPR.util.Glyphs.getGlyph('destroy')
                }
            ]
        });
        me.callParent(arguments);
    }
});