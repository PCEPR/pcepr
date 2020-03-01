Ext.define('PCEPR.view.security.UsersGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.users-grid',
    bind : '{users}',
    reference: 'usersGrid',
    columns: [
        {
            width: 150,
            dataIndex: 'userName',
            flex: 1,
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
            flex: 1,
            text: 'Email'
        },
        {
            width: 150,
            dataIndex: 'groupName',
            flex: 1,
            text: 'Group'
        },
        {
            width: 150,
            dataIndex: 'password',
            hidden : true,
            flex: 1,
            text: 'Password'
        }
    ]
});