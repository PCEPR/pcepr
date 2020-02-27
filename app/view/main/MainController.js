Ext.define('PCEPR.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'PCEPR.util.Util',
        'PCEPR.view.login.Login'
    ],

    alias: 'controller.main',
    onLogout: function (button, e, options) {
        console.log('onLout');
        var me = this;
        Ext.Ajax.request({
            url: 'php/security/logout.php',
            scope: me,
            success: 'onLogoutSuccess',
            failure: 'onLogoutFailure'
        });
    },
    onLogoutFailure: function (conn, response, options, eOpts) {
        PCEPR.util.Util.showErrorMsg(conn.responseText);
    },
    onLogoutSuccess: function (conn, response, options, eOpts) {
        var result = PCEPR.util.Util.decodeJson(conn.responseText);
        if (result.success) {
            this.getView().destroy();
            window.location.reload();
        } else {
            PCEPR.util.Util.showErrorMsg(result.msg);
        }
    }
});