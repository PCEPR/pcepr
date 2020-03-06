Ext.define('PCEPR.util.Glyphs', {
    singleton: true, //#1
    config: { //#2
        webFont: 'FontAwesome',
        add: 'xf067',
        edit: 'xf040',
        destroy: 'xf1f8',
        save: 'xf00c',
        cancel: 'xf0e2',
        saveAll: 'xf0c7',
        clearFilter: 'xf0b0',
        importitems: 'xf1c3',
        view: 'xf05a'
    },
    constructor: function (config) { //#3
        this.initConfig(config);
    },
    getGlyph: function (glyph) { //#4
        var me = this, font = me.getWebFont(); //#5
        if (typeof me.config[glyph] === 'undefined') {
            return false;
        }
        return me.config[glyph] + '@' + font;
    }
});