Ext.define('PCEPR.controller.Menu', {
    extend: 'Ext.app.Controller',


    renderDynamicMenu: function (view, options) {
        console.log("loading dyanmic menu");
    },
    onTreePanelItemClick: function (view, record, item, index, event, options) {},
    init: function (application) {
        this.control({
            "menutree": {
                itemclick: this.onTreePanelItemClick
            },
            "mainmenu": {
                render: this.renderDynamicMenu
            },
        });
    }
});