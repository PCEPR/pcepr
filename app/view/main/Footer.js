Ext.define('PCEPR.view.main.Footer', {
    extend: 'Ext.container.Container',
    xtype: 'appfooter',
    requires: [
        PCEPR.view.main.MainModel
    ],
    cls: 'app-footer',
    height: 30,
    layout: 'center',
    items: [{
        xtype: 'component',
        width: 350,
        componentCls: 'app-footer-title',
        bind: {
            html: '{footer}'
        }
    }]
});