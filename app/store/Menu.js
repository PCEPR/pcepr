Ext.define('PCEPR.store.Menu',
{
    extend: 'Ext.data.Store',
    requires: [
        'PCEPR.util.Util'
    ],
    model: 'PCEPR.model.menu.Accordion',
    proxy: {
        type: 'ajax',
        url: 'php/menu/list.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        listeners: {
            exception: function (proxy, response, operation) {
                PCEPR.util.Util.showErrorMsg(response.responseText);
            }
        }
    }
});