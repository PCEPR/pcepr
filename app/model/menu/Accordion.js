Ext.define('PCEPR.model.menu.Accordion', {
    extend: 'Ext.data.Model',
    requires: [
        'PCEPR.model.menu.TreeNode'
    ],
    fields: [{
            name: 'id',
            type: 'int'
        },
        {
            name: 'text'
        },
        {
            name: 'iconCls'
        }
    ],
    hasMany: {
        model: 'PCEPR.model.menu.TreeNode',
        foreignKey: 'parent_id',
        name: 'items'
    }
});