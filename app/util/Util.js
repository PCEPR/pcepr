Ext.define('PCEPR.util.Util',{
    statics : {
        decodeJson : function(text){
            var result = Ext.JSON.decode(text, true);
            if(!result){
                result = {};
                result.success = false;
                result.msg = text;
            }
            return result;
        },
        showErrorMsg: function(text){
            Ext.Msg.show({
                title : 'Error!',
                msg: text,
                icon: Ext.Msg.Error,
                buttons: Ext.Msg.OK
            });
        }
    }
});