Ext.define('PCEPR.view.menu.Accordion', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainmenu',
    width: 250,
    layout: {
        type: 'accordion',
        multi: true
    },
    items: [{
        title: 'Cost Estimation',
        html: 'Panel content!'
    },{
        title: 'Database Management',
        html: 'Panel content!'
    },{
        title: 'Scheduling',
        html: 'Panel content!'
    }],
    collapsible: true,
    split: true,
    iconCls: 'fa fa-sitemap fa-lg',
    title: translations.menu
});