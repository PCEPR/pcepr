Ext.define('PCEPR.model.staticData.Items', {
    extend: 'PCEPR.model.staticData.Base',

    entityName: 'Items',
    fields: [
        { name: 'items_id', type: 'int'},
        { name: 'items_name'},
        { name: 'UoM'},
        { name: 'price'},
        { name: 'brand'},
        { name: 'tax'},
        { name: 'model'},
        { name: 'make'},
        { name: 'image'},
        { name: 'description'},
        { name: 'category_fkid'},
    //     { name:'categoryName', type:'string', persist:false,
    //     convert:function(v, rec){
    //         var data = rec.data;
    //         if (data.category && data.category.name){
    //             return data.category.name;
    //         }
    //         return data.category_fkid;
    //     }
    // }
]
});