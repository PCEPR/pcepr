Ext.define('PCEPR.view.security.UsersGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.users-grid',

    bind : '{users}',

    reference: 'usersGrid',

    columns: [
        {
            width: 150,
            dataIndex: 'userName',
            text: 'Username'
        },
        {
            width: 200,
            dataIndex: 'name',
            flex: 1,
            text: 'Name'
        },
        {
            width: 250,
            dataIndex: 'email',
            text: 'Email'
        },
        {
            width: 150,
            dataIndex: 'groupName',
            text: 'Group'
        },{
            width : 150,
            dataIndex : 'password',
            text : "Password",
            hidden : true
        }
    ]
});