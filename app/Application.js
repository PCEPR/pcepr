function loadLocale(){
    var lang = localStorage ? (localStorage.getItem('user-lang') || 'en') : 'en', file = Ext.util.Format.format("resources/locale/{0}.js", lang);
    var extJsFile = Ext.util.Format.format("ext/packages/ext-locale/build/ext-locale-{0}.js", lang);
    Ext.Loader.loadScript({url: extJsFile});
    Ext.Loader.loadScript({
        url : file,
        onError : function(){
            // alert('Error loading locale file. please contact system admin.');
            console.log(lang);
        }
    });
}
loadLocale();




Ext.define('PCEPR.Application', {
    extend: 'Ext.app.Application',
    name: 'PCEPR',
    glyphFontFamily: 'FontAwesome',
    requires: [
        'PCEPR.overrides.tree.ColumnOverride'
    ],
    views: [
    ],
    controllers: [
        'Menu',
        'StaticData'
    ],
    stores: [
        'staticData.Items'
    ],
    launch: function () {
        Ext.tip.QuickTipManager.init();
        var me = this;
        var task = new Ext.util.DelayedTask(function(){
            me.splashscreen.fadeOut({
                duration: 1000,
                remove: true
            });

            me.splashscreen.next().fadeOut({
                duration:1000,
                remove: true,
                listeners: {
                    afteranimate: function(el, startTime, eopts){
                        Ext.widget('login-dialog');
                    }
                }
            });
        });
        task.delay(2000);
    },
    init : function(){
        var me = this;
        me.splashscreen = Ext.getBody().mask(
            'Please wait! Loading Application...', 'splashscreen'
        );
        /** this code is  used for loading an image */
        me.splashscreen.addCls('splashscreen');
        // Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
        //     cls : 'x-splash-icon'
        // });
    }
});
