pimcore.registerNS("pimcore.plugin.DemoBundle");

pimcore.plugin.DemoBundle = Class.create(pimcore.plugin.admin, {
    getClassName: function () {
        return "pimcore.plugin.DemoBundle";
    },

    initialize: function () {
        pimcore.plugin.broker.registerPlugin(this);
        this.navEl = Ext.get('pimcore_menu_search').insertSibling('<li id="pimcore_menu_mds" data-menu-tooltip="Pimcore-5-Demo tooltip" class="pimcore_menu_item pimcore_menu_needs_children">Pimcore-5-Demo</li>', 'after');
        this.menu = new Ext.menu.Menu({
            items: [{
                text: "open panel",
                iconCls: "pimcore_icon_apply",
                handler: function () {
                    var obj = {
                        "title":"Demo Panel",
                        "text": "Hallo Welt"
                    };
                    DemoBundlePlugin.printPanel(obj,'demo-bundle')
                }
            }, {
                text: "Item 2",
                iconCls: "pimcore_icon_delete",
                handler: function () {
                    alert("pressed 2");
                }
            }],
            cls: "pimcore_navigation_flyout"
        });
        pimcore.layout.toolbar.prototype.mdsMenu = this.menu;
    },

    printPanel: function(obj,id) {
        DemoBundlePlugin.panel = new Ext.Panel({
            id:         id,
            title:      obj.title,
            iconCls:    "extensionexample_check_panel_icon",
            border:     false,
            closable:   true,
            renderTo: Ext.getBody(),
            html: obj.text
        });
        var tabPanel = Ext.getCmp("pimcore_panel_tabs");
        tabPanel.add(DemoBundlePlugin.panel);
        tabPanel.setActiveTab(DemoBundlePlugin.panel);

        pimcore.layout.refresh();
    },

    pimcoreReady: function (params, broker) {
        // alert("DemoBundle ready!");
        var toolbar = pimcore.globalmanager.get("layout_toolbar");
        this.navEl.on("mousedown", toolbar.showSubMenu.bind(toolbar.mdsMenu));
        pimcore.plugin.broker.fireEvent("mdsMenuReady", toolbar.mdsMenu);
    }
});

var DemoBundlePlugin = new pimcore.plugin.DemoBundle();
