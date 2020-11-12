Ext.define('PCEPR.model.projectData.Items', {
    extend: 'PCEPR.model.projectData.Base',

    entityName: 'project',
    fields: [
        { name: 'p_id'},
        { name: 'p_name'},
        { name: 'created_date'},
        { name: 'starting_date'},
        { name: 'due_date'},
        { name: 'description'},
]
});