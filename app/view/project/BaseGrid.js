Ext.define('PCEPR.view.project.BaseGrid', {
    extend: 'Ext.ux.LiveSearchGridPanel',
    xtype: 'projectgrid',

    requires: [
        'PCEPR.util.Glyphs',
    ],

    columnLines: true,
    viewConfig: {
        stripeRows: true
    },
      plugins: [
    {
      ptype: 'rowexpander',
      rowBodyTpl: ['<b>Description:</b> {Description}</br>'],
    },
  ],
    initComponent: function () {
        var me = this;

        me.selModel = {
            selType: 'cellmodel'
        };

        me.plugins = [
            {
                ptype: 'gridfilters'
            }
        ];

        me.dockedItems = [{
            xtype: 'toolbar',
            dock: 'top',
            itemId: 'topToolbar',
            items: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [{
                        xtype: 'button',
                        text: 'Add',
                        glyph: PCEPR.util.Glyphs.getGlyph('add'),
                        listeners: {
                            click: 'onAdd'
                        }
                    }]
                },
            ]
        }];
        me.columns = Ext.Array.merge(
            me.columns,
            [
                {
                    xtype: 'widgetcolumn',
                    width: 50,
                    sortable: false,
                    menuDisabled: true,
                    widget: {
                        xtype: 'button',
                        glyph: PCEPR.util.Glyphs.getGlyph('destroy'),
                        tooltip: 'Delete',
                        scope: me,
                        handler: function (btn) {
                            me.fireEvent('widgetclickdelete', me, btn);
                        }
                    }
                },
                {
                    xtype: 'widgetcolumn',
                    width: 50,
                    sortable: false,
                    menuDisabled: true,
                    widget: {
                        xtype: 'button',
                        glyph: PCEPR.util.Glyphs.getGlyph('edit'),
                        tooltip: 'Edit',
                        scope: me,
                        handler: function (btn) {
                            me.fireEvent('widgetclickedit', me, btn);
                        }
                    }
                }
            ]
        );


        me.callParent(arguments);
    }
});