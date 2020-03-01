Ext.define('PCEPR.view.security.UserModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.user',
    stores: {
        users: {
            model: 'PCEPR.model.security.User',
            autoLoad: true
        },
        groups: {
            model: 'PCEPR.model.security.Group',
            autoLoad: true
        }
    }
});