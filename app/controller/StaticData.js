Ext.define('PCEPR.controller.StaticData', {
    extend: 'Ext.app.Controller',

    requires: [
        'PCEPR.util.Util',
        'PCEPR.util.Glyphs',
    ],

    stores: [
        'staticData.Items',
    ],

    views: [
        'staticData.BaseGrid',
        'staticData.Items'
    ],

    init: function (application) {

        var me = this;

        me.control({
            'staticdatagrid': {
                render: me.render,
                edit: me.onEdit,
                afterrender: me.onAfterRender,
                widgetclick: me.onWidgetClick,
                widgetclickview: me.onWidgetClickView

            },
            'staticdatagrid button#add': {
                click: me.onButtonClickAdd
            },
            'staticdatagrid button#save': {
                click: me.onButtonClickSave
            },
            'staticdatagrid button#cancel': {
                click: me.onButtonClickCancel
            },
            'staticdatagrid button#clearFilter': {
                click: me.onButtonClickClearFilter
            },
            'citiesgrid button#clearGrouping': {
                toggle: me.onButtonToggleClearGrouping
            }
        });

        me.listen({
            store: {
                '#staticData.Base': {
                    write: me.onStoreSync
                }
            }
        });
    },

    onStoreSync: function (store, operation, options) {
        PCEPR.util.Util.showToast('Success! Your changes have been saved.');
    },

    render: function (component, options) {
        //component.getStore().load();

        if (component.xtype === 'citiesgrid' && component.features.length > 0) {
            if (component.features[0].ftype === 'grouping') {
                component.down('toolbar#topToolbar').add([{
                        xtype: 'tbseparator'
                    },
                    {
                        xtype: 'button',
                        itemId: 'clearGrouping',
                        text: 'Group by Country: ON',
                        glyph: Packt.util.Glyphs.getGlyph('groupCountry'),
                        enableToggle: true,
                        pressed: true
                    }
                ]);
            }
        }
    },

    onEdit: function (editor, context, options) {
        context.record.set('last_update', new Date());
    },

    onButtonClickAdd: function (button, e, options) {
        var grid = button.up('staticdatagrid'),
            store = grid.getStore(),
            modelName = store.getModel().getName(),
            cellEditing = grid.getPlugin('cellplugin');

        store.insert(0, Ext.create(modelName, {
            last_update: new Date()
        }));

        cellEditing.startEditByPosition({
            row: 0,
            column: 1
        });
    },

    onButtonClickSave: function (button, e, options) {
        var grid = button.up('staticdatagrid'),
            store = grid.getStore(),
            errors = grid.validate();

        if (errors === undefined) {
            store.sync();
        } else {
            Ext.Msg.alert(errors);
        }
    },

    onButtonClickCancel: function (button, e, options) {
        button.up('staticdatagrid').getStore().reload();
    },

    onButtonClickClearFilter: function (button, e, options) {
        button.up('staticdatagrid').filters.clearFilters();
    },


    onWidgetClick: function (grid, button) {

        var store = grid.getStore(),
            rec = button.getWidgetRecord();
        store.remove(rec);
        Ext.Msg.alert('Delete', 'Save the changes to persist the removed record.');
    },
    onWidgetClickView: function (grid, button) {
        var rec = button.getWidgetRecord();
        var title = rec.data.items_name;
        var currentUser = rec.data;
        console.log(title);
        var what = Ext.create('Ext.window.Window', {
            height: 600,
            width: 700,
            layout: {
                type: 'fit'
            },
            title: title,
            autoScroll: true,
            closable: true,
            modal: true,
            items: [
                {
                    bodyPadding: 5,
                    modelValidation: true,
                    autoScroll: true,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'fieldset',
                            flex: 1,
                            title: 'Items Information',
                            layout: 'anchor',
                            autoScroll: true,
                            defaults: {
                                anchor: '100%',
                                xtype: 'displayfield',
                             
                            },
                            items: [
                                {
                                    fieldLabel: 'Item Name',
                                    value : currentUser.items_name
                                },
                                {
                                    fieldLabel: 'UoM',
                                    value : currentUser.UoM
                                },
                                {
                                    fieldLabel: 'Price',
                                    value : currentUser.price
                                },
                                {
                                    fieldLabel: 'Brand',
                                    value : currentUser.brand
                                },
                                {
                                    fieldLabel: 'tax',
                                    value : currentUser.tax
                                },
                                {
                                    fieldLabel: 'Model',
                                    value : currentUser.model
                                },
                                {
                                    fieldLabel: 'make',
                                    value: currentUser.make
                                },
                                {
                                    fieldLabel: 'Description',
                                    value: currentUser.description
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            title: 'Photo',
                            width: 170,
                            items: [
                                {
                                    xtype: 'image',
                                    reference: 'userPicture',
                                    height: 150,
                                    width: 150,
                                    bind:{
                                        src: 'resources/itemImages/'+currentUser.image
                                    }
                                }
                            ]
                        }
                    ]
                }
            ],
        });
        what.show();
    },
    onButtonToggleClearGrouping: function (button, pressed, options) {

        var store = button.up('citiesgrid').getStore();

        if (pressed) {
            button.setText('Group by Country: ON');
            store.group('country_id');
        } else {
            button.setText('Group by Country: OFF');
            store.clearGrouping();
        }
    },

    onAfterRender: function (grid, options) {
        var view = grid.getView();
        view.on('itemupdate', function (record, index, node, options) {
            grid.validateRow(record, index, node, options);
        });
    },
});