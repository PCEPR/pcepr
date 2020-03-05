Ext.define('PCEPR.model.Base', {
    extend: 'Ext.data.Model',

    requires: [
        'PCEPR.util.Util',
        // 'PCEPR.ux.data.writer.AssociatedWriter'
    ],

    schema: {
        namespace: 'PCEPR.model',
        urlPrefix: 'php',
        proxy: {
            type: 'ajax',
            api :{
                read : '{prefix}/{entityName:lowercase}/list.php',
                create: '{prefix}/{entityName:lowercase}/create.php',
                update: '{prefix}/{entityName:lowercase}/update.php',
                destroy: '{prefix}/{entityName:lowercase}/destroy.php'
            },
            reader: {
                type: 'json',
                rootProperty: 'data'
            },
            writer: {
                type: 'associatedjson',
                writeAllFields: true,
                encode: true,
                rootProperty: 'data',
                allowSingle: false
            },
            listeners: {
                exception: function(proxy, response, operation){
                    PCEPR.util.Util.showErrorMsg(response.responseText);
                }
            }
        }
    }
});