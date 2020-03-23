Ext.define('PCEPR.model.projectData.Items', {
    extend: 'PCEPR.model.projectData.Base',

    entityName: 'project',
    fields: [
        { name: 'p_id'},
        { name: 'p_name'},
        { name: 'created_date'},
        { name: 'starting_date'},
        { name: 'due_date'},
        { name: 'assigned_to'},
        { name: 'description'},
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