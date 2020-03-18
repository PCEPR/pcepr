Ext.define('PCEPR.view.project.CountryTree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.countrytree',
    // store: 'Countries',
    requires: [
        'PCEPR.model.project.Country',
        'Ext.data.*',
        'Ext.grid.*',
        'Ext.tree.*',
        'Ext.ux.CheckColumn'
    ],
    title: 'The whole world in a Tree Panel with Column Headers',
    height: 400,
    width: 800,
    padding: '5 5 5 5',
    useArrows: true,
    multiSelect: true,
    singleExpand: true,
    rootVisible: false,
    dockedItems: [{
        dock: 'bottom',
        items: [{
            xtype: 'button',
            text: 'Get all checked nodes',
            action: 'getCheckedNodes'
        }]
    }],
    //     columns: [{
    //             //treecolumn xtype tells the Grid which column will show the tree
    //             xtype: 'treecolumn',
    //             text: 'Project Names',
    //             flex: 2,
    //             sortable: true,
    //             dataIndex: 'task'
    //         },
    //         {
    //             text: 'Starting Date',
    //             flex: 1,
    //             sortable: true,
    //             dataIndex: 'starting_date',

    //         },
    //         {
    //             text: 'Due Date',
    //             flex: 1,
    //             sortable: true,
    //             dataIndex: 'due_date',

    //         },
    //         {
    //             text: 'Assigned To',
    //             flex: 1,
    //             sortable: true,
    //             dataIndex: 'assigned_to',
    //         },
    //         {
    //             text: 'Created Date',
    //             flex: 1,
    //             sortable: true,
    //             dataIndex: 'created_date',

    //         }
    //     ]
    // });



    initComponent: function () {
        this.width = 600;
        Ext.apply(this, {
                store: new Ext.data.TreeStore({
                    model: PCEPR.model.project.Country,
                    proxy: {
                        type: 'ajax',
                        url: 'resources/data/treegrid.json',
                        reader: {
                            type: 'json',
                            rootProperty: 'children'
                        },
                        // listeners: {
                        //     exception: function (proxy, response, operation) {
                        //         PCEPR.util.Util.showErrorMsg(response.responseText);
                        //     }
                        // }
                    },
                    folderSort: true
                }),
                columns: [{
                    xtype: 'treecolumn', //this is so we know which column will show the tree
                    text: 'Task',
                    flex: 2,
                    sortable: true,
                    dataIndex: 'task'
                }],
                // {
                //     //we must use the templateheader component so we can use a custom tpl
                //     xtype: 'templatecolumn',
                //     text: 'Duration',
                //     flex: 1,
                //     sortable: true,
                //     dataIndex: 'starting_date',
                //     align: 'center',
                //     //add in the custom tpl for the rows
                //     // tpl: Ext.create('Ext.XTemplate', '{duration:this.formatHours}', {
                //     //     formatHours: function (v) {
                //     //         if (v < 1) {
                //     //             return Math.round(v * 60) + ' mins';
                //     //         } else if (Math.floor(v) !== v) {
                //     //             var min = v - Math.floor(v);
                //     //             return Math.floor(v) + 'h ' + Math.round(min * 60) + 'm';
                //     //         } else {
                //     //             return v + ' hour' + (v === 1 ? '' : 's');
                //     //         }
                //     //     }
                //     // })
                // },
                // {
                //     text: 'Assigned To',
                //     flex: 1,
                //     dataIndex: 'assigned_to',
                //     sortable: true
                // },
                // {
                //     xtype: 'checkcolumn',
                //     header: 'Done',
                //     dataIndex: 'done',
                //     width: 55,
                //     stopSelection: false,
                //     menuDisabled: true
                // },
                // {
                //     text: 'Edit',
                //     width: 55,
                //     menuDisabled: true,
                //     xtype: 'actioncolumn',
                //     tooltip: 'Edit task',
                //     align: 'center',
                //     // icon: 'resources/images/edit_task.png',
                //     // handler: function (grid, rowIndex, colIndex, actionItem, event, record, row) {
                //     //     Ext.Msg.alert('Editing' + (record.get('done') ? ' completed task' : ''), record.get('task'));
                //     // },
                //     // // Only leaf level tasks may be edited
                //     // isDisabled: function (view, rowIdx, colIdx, item, record) {
                //     //     return !record.data.leaf;
                //     // }
                // }]
        });
    this.callParent();
}
});
