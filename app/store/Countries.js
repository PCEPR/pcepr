Ext.define('PCEPR.store.Countries',
{
    extend: 'Ext.data.TreeStore',
    model: 'PCEPR.model.project.Country',
    autoLoad: true,
    requires: [
        'PCEPR.util.Util'
    ],
    proxy: {
        type: 'ajax',
        url: 'php/project/list.php',
    },
    folderSort: true,
    sorters: [{
        property: 'text',
        direction: 'ASC'
    }],

    // listeners: {
    //     load: function(tree, node, records){
    //         console.log('After loading a node: ' + node);
    //         if(node.get('checked')){
    //             node.eachChild(function(childNode){
    //                 childNode.set('checked', true);
    //             })
    //         }
    //     }
    // }
});