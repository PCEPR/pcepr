Ext.define('PCEPR.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login-dialog',
    autoShow: true,
    height: 180,
    width: 360,
    // require: [
    //     'PCEPR.view.login.LoginController'
    // ],
    // controller: 'login',
    layout: {
        type: 'fit',
    },
    iconCls: 'fa fa-key fa-lg',
    title: 'Login',
    closeAction: 'hide',
    closable: false,
    constrain: true,
    draggable: true,
    resizable: true,
    items: [{
        xtype: 'form',
        // reference: 'form',
        bodyPadding: 15,
        defaults: {
            xtype: 'textfield',
            anchor: '100%',
            labelWidth: 60,
            allowBlank: false,
            vtype: 'alphanum',
            minLength: 3,
            msgTarget: 'under',
            // listeners: {
            //     specialKey: 'onTextFieldSpecialKey'
            // }
        },
        items: [{
                name: 'user',
                fieldLabel: 'User:',
                maxLength: 25
            },
            {
                inputType: 'password',
                name: 'password',
                fieldLabel: 'Password:',
                /** not for the login page */
                    // vtype : 'customPass',
                    // msgTarget : 'under',
                maxLength: 15,
                // id: 'password',
                // enableKeyEvents: true,
                // listeners: {
                //     keypress: 'onTextFieldKeyPress',
                //     specialKey: 'onTextFieldSpecialKey'
                // }
            }
        ]
    }],
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        items: [{
                xtype: 'tbfill'
            },
            {
                xtype: 'button',
                iconCls: 'fa fa-times fa-lg',
                text: 'Cancel',
                // listeners: {
                //     click: 'onButtonClickCancel',
                // }
            },
            {
                xtype: 'button',
                text: 'Submit',
                formBind: true,
                iconCls: 'fa fa-sign-in fa-lg',
                // listeners: {
                //     click: 'onButtonClickSubmit'
                // }
            }
        ]
    }]
});