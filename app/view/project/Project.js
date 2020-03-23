Ext.define('PCEPR.view.project.project', {
    extend: 'PCEPR.view.project.BaseGrid',
    alias: 'widget.countrytree',
    session: true,
    store: 'projectData.Items',
    frame: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    columns: [{
        text: 'Project Id',
        width: 100,
        dataIndex: 'p_id',
        filter: {
            type: 'numeric'
        }
    },
    {
        text: 'Project Name',
        flex: 1,
        dataIndex: 'p_name',
        filter: {
            type: 'string'
        }
    },
    {
        text: 'Created Date',
        flex: 1,
        dataIndex: 'created_date',
        filter: {
            type: 'date'
        }
    },
    {
        text: 'Starting Date',
        flex: 1,
        dataIndex: 'starting_date',
        filter: {
            type: 'date'
        }
    },
    {
        text: 'Due Date',
        flex: 1,
        dataIndex: 'due_date',
        filter: {
            type: 'date'
        }
    },
    {
        text: 'Description',
        flex: 2,
        dataIndex: 'description',
        filter: {
            type: 'string'
        }
    },
    {
        text: 'Assigned To',
        flex: 1,
        dataIndex: 'assigned_to',
        filter: {
            type: 'string'
        }
    },
]
});