Ext.define('PCEPR.view.security.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user',
    requires: [
        'PCEPR.util.Util'
    ],
    onAdd: function (button, e, options) {
        this.createDialog(null);
    },
    onEdit: function (button, e, options) {
        var me = this,
            records = me.getRecordsSelected();
        if (records[0]) {
            me.createDialog(records[0]);
        }
    },
    createDialog: function (record) {
        var me = this, view = me.getView();
        me.dialog = view.add({
            xtype: 'user-form',
            viewModel: {
                data: {
                    title: record ? 'Edit: ' + record.get('name') : 'Add new User'
                },
                links: {
                    currentUser: record || {
                        type: 'user',
                        create: true
                    }
                }
            }
        });
        me.dialog.show();
    },
    getRecordsSelected: function () {
        var grid = this.lookupReference('usersGrid');
        return grid.getSelection();
    },
    onDelete: function (button, e, options) {
        var me = this,
            view = me.getView(),
            records = me.getRecordsSelected(), //#1
            store = me.getStore('users'); //#2
        if (store.getCount() >= 2 && records.length) { //#3
            Ext.Msg.show({
                title: 'Delete?', //#4
                msg: 'Are you sure you want to delete?',
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.QUESTION,
                fn: function (buttonId) {
                    if (buttonId == 'yes') { //#5
                        store.remove(records); //#6
                        store.sync(); //#7
                    }
                }
            });
        } else if (store.getCount() === 1) { //#8
            Ext.Msg.show({
                title: 'Warning',
                msg: 'You cannot delete all the users from the application.',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });
        }
    },
    onSave: function (button, e, options) {
        var me = this,
            form = me.lookupReference('form');
        if (form && form.isValid()) {
            form.submit({
                clientValidation: true,
                url: 'php/user/save.php',
                scope: me,
                success: 'onSaveSuccess',
                failure: 'onSaveFailure'
            })
        }
    },
    onSaveSuccess: function (form, action) {
        var me = this;
        me.onCancel();
        me.refresh();
        PCEPR.util.Util.showToast('success! User saved.');
    },
    onSaveFailure: function (form, action) {
        PCEPR.util.Util.handleFormFailure(action);
    },
    onCancel: function (button, e, options) {
        var me = this;
        me.dialog = Ext.destroy(me.dialog);
    },
    refresh: function (button, e, options) {
        var me = this,
            store = me.getStore('users');
        store.load();
    },
    onFileFieldChange: function (fileField, value, options) {
        var me = this,
            file = fileField.fileInputEl.dom.files[0], //#1
            picture = this.lookupReference('userPicture'); //#2
        if (typeof FileReader !== 'undefined' && (/image/i).test(file.type)) { //#3
            var reader = new FileReader(); //#4
            reader.onload = function (e) { //#5
                picture.setSrc(e.target.result); //#6
            };
            reader.readAsDataURL(file); //#7
        } else if (!(/image/i).test(file.type)) { //#8
            Ext.Msg.alert('Warning', 'You can only upload imagefiles!');
            fileField.reset(); //#9
        }
    }
});