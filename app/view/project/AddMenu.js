Ext.define('PCEPR.view.project.AddMenu', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.addMenu',
    width: 120,
    requires: [
        'PCEPR.util.Glyphs',
    ],
    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [{
                xtype: 'menuitem',
                text: 'Add',
                glyph: PCEPR.util.Glyphs.getGlyph('add')
            }]
        });

        me.callParent(arguments);
    }
});
