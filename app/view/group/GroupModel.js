Ext.define('PCEPR.view.group.GroupModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.group',
    stores: {
        groups: {
            model: 'PCEPR.model.group.Group',
            autoLoad: true
        }
    }
});