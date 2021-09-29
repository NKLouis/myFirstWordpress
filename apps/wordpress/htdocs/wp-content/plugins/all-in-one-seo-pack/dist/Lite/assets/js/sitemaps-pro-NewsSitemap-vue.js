(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["sitemaps-pro-NewsSitemap-vue"],{"7f5c":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("core-card",{attrs:{slug:"newsSitemap","header-text":t.strings.news}},[s("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[t._v(" "+t._s(t.strings.description)+" "),s("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"newsSitemaps",!0))}})]),s("core-settings-row",{attrs:{name:t.strings.enableSitemap},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-toggle",{model:{value:t.options.sitemap.news.enable,callback:function(e){t.$set(t.options.sitemap.news,"enable",e)},expression:"options.sitemap.news.enable"}})]},proxy:!0}])}),t.options.sitemap.news.enable?s("core-settings-row",{attrs:{name:t.$constants.GLOBAL_STRINGS.preview},scopedSlots:t._u([{key:"content",fn:function(){return[s("div",{staticClass:"aioseo-sitemap-preview"},[s("base-button",{attrs:{size:"medium",type:"blue",tag:"a",href:t.$aioseo.urls.newsSitemapUrl,target:"_blank"}},[s("svg-external"),t._v(" "+t._s(t.strings.openSitemap)+" ")],1)],1),s("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.noIndexDisplayed)+" "),s("br"),t._v(" "+t._s(t.strings.doYou404)+" "),s("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"blankSitemap",!0))}})])]},proxy:!0}],null,!1,3776392846)}):t._e()],1),t.options.sitemap.news.enable?s("core-card",{attrs:{slug:"newsSitemapSettings","header-text":t.strings.sitemapSettings}},[s("core-settings-row",{attrs:{id:"news-sitemap-publication-name",name:t.strings.publicationName},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-input",{attrs:{size:"medium"},model:{value:t.options.sitemap.news.publicationName,callback:function(e){t.$set(t.options.sitemap.news,"publicationName",e)},expression:"options.sitemap.news.publicationName"}})]},proxy:!0}],null,!1,1216089854)}),s("core-settings-row",{attrs:{name:t.strings.postTypes},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-checkbox",{attrs:{size:"medium"},model:{value:t.options.sitemap.news.postTypes.all,callback:function(e){t.$set(t.options.sitemap.news.postTypes,"all",e)},expression:"options.sitemap.news.postTypes.all"}},[t._v(" "+t._s(t.strings.includeAllPostTypes)+" ")]),t.options.sitemap.news.postTypes.all?t._e():s("core-post-type-options",{attrs:{options:t.options.sitemap.news,type:"postTypes",excluded:t.getExcludedPostTypes}}),s("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.selectPostTypes)+" "),s("span",{domProps:{innerHTML:t._s(t.$links.getDocLink(t.$constants.GLOBAL_STRINGS.learnMore,"selectPostTypesNews",!0))}})])]},proxy:!0}],null,!1,1747524496)})],1):t._e(),t.options.sitemap.news.enable?s("core-card",{attrs:{slug:"newsAdvancedSettings",toggles:t.options.sitemap.news.advancedSettings.enable},scopedSlots:t._u([{key:"header",fn:function(){return[s("base-toggle",{model:{value:t.options.sitemap.news.advancedSettings.enable,callback:function(e){t.$set(t.options.sitemap.news.advancedSettings,"enable",e)},expression:"options.sitemap.news.advancedSettings.enable"}}),t._v(" "+t._s(t.strings.advancedSettings)+" ")]},proxy:!0}],null,!1,357191883)},[s("core-settings-row",{staticClass:"aioseo-exclude-pages-posts",attrs:{name:t.strings.excludePostsPages},scopedSlots:t._u([{key:"content",fn:function(){return[s("core-exclude-posts",{attrs:{options:t.options.sitemap.news.advancedSettings,type:"posts"}})]},proxy:!0}],null,!1,2817990227)})],1):t._e()],1)},n=[],o=s("5530"),a=(s("4d63"),s("ac1f"),s("25f0"),s("5319"),s("9c0e")),r=s("92e5"),p=s("2f62"),l={mixins:[a["d"],r["a"]],data:function(){return{pagePostOptions:[],strings:{sitemapSettings:this.$t.__("News Sitemap Settings",this.$tdPro),publicationName:this.$t.__("Publication Name",this.$tdPro),postTypes:this.$t.__("Post Types",this.$tdPro),includeAllPostTypes:this.$t.__("Include All Post Types",this.$tdPro),selectPostTypes:this.$t.__("Select which Post Types appear in your sitemap.",this.$tdPro),advancedSettings:this.$t.__("Advanced Settings",this.$tdPro),excludePostsPages:this.$t.__("Exclude Posts / Pages",this.$tdPro),priorityScore:this.$t.__("Priority Score",this.$tdPro),noResult:this.$t.__("No pages or posts found with that title or ID. Try again!",this.$tdPro),clear:this.$t.__("Clear",this.$tdPro)}}},computed:Object(o["a"])(Object(o["a"])({},Object(p["e"])(["options"])),{},{getExcludedPostTypes:function(){return["attachment"]}}),methods:Object(o["a"])(Object(o["a"])({},Object(p["b"])(["getObjects"])),{},{processGetPagesPosts:function(t){var e=this;return this.getObjects(t).then((function(t){e.pagePostOptions=t.body.posts}))},getOptionTitle:function(t,e){var s=new RegExp("(".concat(e,")"),"gi");return t.replace(s,'<span class="search-term">$1</span>')}})},c=l,d=s("2877"),u=Object(d["a"])(c,i,n,!1,null,null,null);e["default"]=u.exports},"92e5":function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return n}));var i={data:function(){return{strings:{news:this.$t.__("News Sitemap",this.$td),setPublicationName:this.$t.__("Set Publication Name",this.$td),exclude:this.$t.__("Exclude Pages/Posts",this.$td),description:this.$t.__("Our Google News Sitemap lets you control which content you submit to Google News and only contains articles that were published in the last 48 hours. In order to submit a News Sitemap to Google, you must have added your site to Google’s Publisher Center and had it approved.",this.$td),enableSitemap:this.$t.__("Enable Sitemap",this.$td),openSitemap:this.$t.__("Open News Sitemap",this.$td),noIndexDisplayed:this.$t.__("Noindexed content will not be displayed in your sitemap.",this.$td),doYou404:this.$t.__("Do you get a blank sitemap or 404 error?",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock News Sitemaps",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("News Sitemaps are only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro"),thisFeatureRequires:this.$t.__("This feature requires one of the following plans:",this.$td)}}}},n={data:function(){return{strings:{customFieldSupport:this.$t.__("Custom Field Support",this.$td),exclude:this.$t.__("Exclude Pages/Posts",this.$td),video:this.$t.__("Video Sitemap",this.$td),description:this.$t.__("The Video Sitemap works in much the same way as the XML Sitemap module, it generates an XML Sitemap specifically for video content on your site. Search engines use this information to display rich snippet information in search results.",this.$td),enableSitemap:this.$t.__("Enable Sitemap",this.$td),openSitemap:this.$t.__("Open Video Sitemap",this.$td),noIndexDisplayed:this.$t.__("Noindexed content will not be displayed in your sitemap.",this.$td),doYou404:this.$t.__("Do you get a blank sitemap or 404 error?",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Video Sitemaps",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Video Sitemaps are only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro"),thisFeatureRequires:this.$t.__("This feature requires one of the following plans:",this.$td)}}}}}}]);