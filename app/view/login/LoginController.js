Ext.define('PCEPR.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login', 
    requires : [
        'PCEPR.view.login.CapsLockTooltip',
        'PCEPR.util.Util',
        'PCEPR.view.main.Main',
        'PCEPR.util.SessionMonitor'
    ],
    onTextFieldSpecialKey: function (field, e, options) {
        if(e.getKey() === e.ENTER){
            this.doLogin();
        }
    },
    onTextFieldKeyPress: function (field, e, options) {
        var charCode = e.getCharCode(), me = this;
        if((e.shiftKey && charCode >= 97 && charCode <=122) || (!e.shiftKey && charCode>= 65 && charCode <= 90)){
            if(me.capslockTooltip === undefined){
                me.capslockTooltip = Ext.widget('capslocktooltip');
            }
            me.capslockTooltip.show();
        }else{
            if(me.capslockTooltip !== undefined){
                me.capslockTooltip.hide();
            }
        }
    },
    onButtonClickCancel: function (button, e, options) {
        this.lookupReference('form').reset();
    }, // #6
    onButtonClickSubmit: function (button, e, options) {
        var me = this;
        if (me.lookupReference('form').isValid()){
            me.doLogin();
        }
    },
    doLogin: function () {
        var me = this, form = me.lookupReference('form');
        this.getView().mask('Authenticating... please wait...');
        form.submit({
            clientValidation : true,
            url : 'php/security/login.php',
            scope : me,
            success : 'onLoginSuccess',
            failure : 'onLoginFailure'
        })
    },
    onLoginFailure: function (form, action) {
        this.getView().unmask();
        var result = PCEPR.util.Util.decodeJson(action.response.responseText);
        switch(action.failureType){
            case Ext.form.action.Action.CLIENT_INVALID:
                PCEPR.util.Util.showErrorMsg('Form fields may not be submitted with invalid values ');
                break;
            case Ext.form.action.Action.CONNECT_FAILURE:
                PCEPR.util.Util.showErrorMsg(action.response.responseText);
                break;
            case Ext.form.action.Action.SERVER_INVALID:
                PCEPR.util.Util.showErrorMsg(result.msg);
        }
    },
    onLoginSuccess: function (form, action) {
        var view = this.getView();
        view.unmask();
        view.close();
        Ext.create('PCEPR.view.main.Main');
        PCEPR.util.SessionMonitor.start();
    }
});