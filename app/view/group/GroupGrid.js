Ext.define('PCEPR.view.group.GroupGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.groups',

    bind : '{groups}',

    reference: 'groupGrid',

    columns: [
        {
            width: 150,
            dataIndex: 'id',
            text: 'Id'
        },
        {
            width: 200,
            dataIndex: 'name',
            flex: 1,
            text: 'Role'
        }
    ]
});