Ext.define('PCEPR.view.menu.Accordion', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainmenu',
    width: 250,
    layout: {
        type: 'accordion',
        animate: true,
        fill: true
    },
    collapsible: true,
    split: true,
    iconCls: 'fa fa-sitemap fa-lg',
    title: translations.menu
});