Ext.define('PCEPR.view.main.Panel', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainpanel',
    activeTab: 0,
    items: [{
        xtype: 'panel',
        closable: false,
        iconCls: 'fa fa-home fa-lg tabIcon',
        title: 'Home'
    },{
        xtype : 'panel',
        closable : true,
        iconCls: 'fa fa-user fa-lg tabIcon',
        title : 'User'
    }]
});