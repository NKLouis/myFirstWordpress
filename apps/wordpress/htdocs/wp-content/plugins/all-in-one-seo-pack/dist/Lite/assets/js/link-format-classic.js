/*! ! built on Tuesday, August 31st 2021, 7:39:32 pm */
!function(e){var t={};function n(i){if(t[i])return t[i].exports;var l=t[i]={i:i,l:!1,exports:{}};return e[i].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(i,l,function(t){return e[t]}.bind(null,l));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=65)}({65:function(e,t){function n(){return r?r.$('a[data-wplink-edit="true"]'):null}var i,l,a,r,s,o,c,p,d,u,h,f,k;i=jQuery,l=window.aioseoL10n,a=window.wp,d=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i,u=/^(https?|ftp):\/\/[A-Z0-9.-]+\.[A-Z]{2,63}[^ "]*$/i,h={},f={},k="ontouchend"in document,window.wpLink={timeToTriggerRiver:150,minRiverAJAXDuration:200,riverBottomThreshold:5,keySensitivity:100,lastSearch:"",textarea:"",modalOpen:!1,init:function(){i("#wp-link .link-target").append('<br><label style="padding-left: 4px;"><span>&nbsp;</span><input type="checkbox" id="aioseop-add-nofollow">'+l.noFollow+"</label>"),i("#wp-link .link-target").append('<br><label style="padding-left: 4px;"><span>&nbsp;</span><input type="checkbox" id="aioseop-add-sponsored">'+l.sponsored+"</label>"),i("#wp-link .link-target").append('<br><label style="padding-left: 4px;"><span>&nbsp;</span><input type="checkbox" id="aioseop-add-ugc">'+l.ugc+"</label><br>"),i(".wp-link-text-field").before('<div class="link-title-field"><label><span style="padding-left: 4px;">'+l.labelTitle+'</span><input id="wp-link-title" type="text" name="linktitle" /></label></div>'),i('<style type="text/css"> .has-text-field #wp-link .query-results { top: 256px !important; } #wp-link-wrap.search-panel-visible {height: 549px !important;}</style>').appendTo("head"),h.wrap=i("#wp-link-wrap"),h.dialog=i("#wp-link"),h.backdrop=i("#wp-link-backdrop"),h.submit=i("#wp-link-submit"),h.close=i("#wp-link-close"),h.tanfl=i("#aioseop-add-nofollow"),h.tanfl_sponsored=i("#aioseop-add-sponsored"),h.tanfl_ugc=i("#aioseop-add-ugc"),h.title=i("#wp-link-title"),h.text=i("#wp-link-text"),h.url=i("#wp-link-url"),h.nonce=i("#_ajax_linking_nonce"),h.openInNewTab=i("#wp-link-target"),h.search=i("#wp-link-search"),f.search=new o(i("#search-results")),f.recent=new o(i("#most-recent-results")),f.elements=h.dialog.find(".query-results"),h.queryNotice=i("#query-notice-message"),h.queryNoticeTextDefault=h.queryNotice.find(".query-notice-default"),h.queryNoticeTextHint=h.queryNotice.find(".query-notice-hint"),h.dialog.keydown(wpLink.keydown),h.dialog.keyup(wpLink.keyup),h.submit.click((function(e){e.preventDefault(),wpLink.update()})),h.close.add(h.backdrop).add("#wp-link-cancel button").click((function(e){e.preventDefault(),wpLink.close()})),f.elements.on("river-select",wpLink.updateFields),h.search.on("focus.wplink",(function(){h.queryNoticeTextDefault.hide(),h.queryNoticeTextHint.removeClass("screen-reader-text").show()})).on("blur.wplink",(function(){h.queryNoticeTextDefault.show(),h.queryNoticeTextHint.addClass("screen-reader-text").hide()})),h.search.on("keyup input",(function(){window.clearTimeout(s),s=window.setTimeout((function(){wpLink.searchInternalLinks()}),500)})),h.url.on("paste",(function(){setTimeout(wpLink.correctURL,0)})),h.url.on("blur",wpLink.correctURL)},correctURL:function(){var e=i.trim(h.url.val());e&&p!==e&&!/^(?:[a-z]+:|#|\?|\.|\/)/.test(e)&&(h.url.val("http://"+e),p=e)},open:function(e,t,n){var l=i(document.body);l.addClass("modal-open"),wpLink.modalOpen=!0,wpLink.range=null,e&&(window.wpActiveEditor=e),window.wpActiveEditor&&(this.textarea=i("#"+window.wpActiveEditor).get(0),void 0!==window.tinymce&&(l.append(h.backdrop,h.wrap),l=window.tinymce.get(window.wpActiveEditor),r=l&&!l.isHidden()?l:null),!wpLink.isMCE()&&document.selection&&(this.textarea.focus(),this.range=document.selection.createRange()),h.wrap.show(),h.backdrop.show(),wpLink.refresh(t,n),i(document).trigger("wplink-open",h.wrap))},isMCE:function(){return r&&!r.isHidden()},refresh:function(e,t){f.search.refresh(),f.recent.refresh(),wpLink.isMCE()?wpLink.mceRefresh(e,t):(h.wrap.hasClass("has-text-field")||h.wrap.addClass("has-text-field"),document.selection?document.selection.createRange().text:void 0!==this.textarea.selectionStart&&this.textarea.selectionStart!==this.textarea.selectionEnd&&(t=this.textarea.value.substring(this.textarea.selectionStart,this.textarea.selectionEnd)||t||""),h.text.val(t),wpLink.setDefaultValues()),k?h.url.focus().blur():window.setTimeout((function(){h.url[0].select(),h.url.focus()})),f.recent.ul.children().length||f.recent.ajax(),p=h.url.val().replace(/^http:\/\//,""),jQuery(".has-text-field #wp-link .query-results").css("margin-top",25)},hasSelectedText:function(e){var t,n,i,l=r.selection.getContent();if(/</.test(l)&&(!/^<a [^>]+>[^<]+<\/a>$/.test(l)||-1===l.indexOf("href=")))return!1;if(e.length){if(!(n=e[0].childNodes)||!n.length)return!1;for(i=n.length-1;0<=i;i--)if(3!=(t=n[i]).nodeType&&!window.tinymce.dom.BookmarkManager.isBookmarkNode(t))return!1}return!0},mceRefresh:function(e,t){var a,s,o=n(),c=this.hasSelectedText(o);o.length?(a=o.text(),s=o.attr("href"),i.trim(a)||(a=t||""),"_wp_link_placeholder"!==(s=e&&(u.test(e)||d.test(e))?e:s)?(h.url.val(s),h.openInNewTab.prop("checked","_blank"===o.attr("target")),h.submit.val(l.update)):this.setDefaultValues(a),e&&e!==s?(h.url.val(e),h.search.val(e)):h.search.val(""),0<=r.dom.getAttrib(o,"rel").indexOf("nofollow")?h.tanfl.prop("checked",!0):h.tanfl.prop("checked",!1),0<=r.dom.getAttrib(o,"rel").indexOf("sponsored")?h.tanfl_sponsored.prop("checked",!0):h.tanfl_sponsored.prop("checked",!1),0<=r.dom.getAttrib(o,"rel").indexOf("ugc")?h.tanfl_ugc.prop("checked",!0):h.tanfl_ugc.prop("checked",!1),h.title.val(r.dom.getAttrib(o,"title")),window.setTimeout((function(){wpLink.searchInternalLinks()}))):(a=r.selection.getContent({format:"text"})||t||"",this.setDefaultValues(a),h.url.val(e)),c?(h.text.val(a),h.wrap.addClass("has-text-field")):(h.text.val(""),h.wrap.removeClass("has-text-field"))},close:function(e){i(document.body).removeClass("modal-open"),wpLink.modalOpen=!1,"noReset"!==e&&(wpLink.isMCE()?(r.plugins.wplink&&r.plugins.wplink.close(),r.focus()):(wpLink.textarea.focus(),wpLink.range&&(wpLink.range.moveToBookmark(wpLink.range.getBookmark()),wpLink.range.select()))),h.backdrop.hide(),h.wrap.hide(),p=!1,i(document).trigger("wplink-close",h.wrap)},getAttrs:function(){wpLink.correctURL();var e="";return h.tanfl.prop("checked")&&(e+="nofollow "),h.tanfl_sponsored.prop("checked")&&(e+="sponsored "),h.tanfl_ugc.prop("checked")&&(e+="ugc"),{href:i.trim(h.url.val()),target:h.openInNewTab.prop("checked")?"_blank":null,rel:""!==e?e:null,title:""!==h.title.val()?i.trim(h.title.val()):null}},buildHtml:function(e){var t='<a href="'+e.href+'"';return e.title&&(title=e.title.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),t+=' title="'+title+'"'),e.target?e.rel?t+=' rel="noopener '+e.rel+'" target="'+e.target+'"':t+=' rel="noopener" target="'+e.target+'"':e.rel&&(t+=' rel="'+e.rel+'"'),t+">"},update:function(){wpLink.isMCE()?wpLink.mceUpdate():wpLink.htmlUpdate()},htmlUpdate:function(){var e,t,n,r,s,o=wpLink.textarea;o&&(n=wpLink.getAttrs(),r=h.text.val(),(s=document.createElement("a")).href=n.href,"javascript:"!==s.protocol&&"data:"!==s.protocol||(n.href=""),n.href&&(e=wpLink.buildHtml(n),document.selection&&wpLink.range?(o.focus(),wpLink.range.text=e+(r||wpLink.range.text)+"</a>",wpLink.range.moveToBookmark(wpLink.range.getBookmark()),wpLink.range.select(),wpLink.range=null):void 0!==o.selectionStart&&(t=o.selectionStart,s=o.selectionEnd,r=t+(e=e+(n=r||o.value.substring(t,s))+"</a>").length,t!==s||n||(r-=4),o.value=o.value.substring(0,t)+e+o.value.substring(s,o.value.length),o.selectionStart=o.selectionEnd=r),wpLink.close(),o.focus(),i(o).trigger("change"),a.a11y.speak(l.linkInserted)))},mceUpdate:function(){var e,t,s,o=wpLink.getAttrs(),c=document.createElement("a");if(c.href=o.href,"javascript:"!==c.protocol&&"data:"!==c.protocol||(o.href=""),!o.href)return r.execCommand("unlink"),void wpLink.close();e=n(),r.undoManager.transact((function(){e.length||(r.execCommand("mceInsertLink",!1,{href:"_wp_link_placeholder","data-wp-temp-link":1}),e=r.$('a[data-wp-temp-link="1"]').removeAttr("data-wp-temp-link"),s=i.trim(e.text())),e.length?(h.wrap.hasClass("has-text-field")&&((t=h.text.val())?e.text(t):s||e.text(o.href)),o["data-wplink-edit"]=null,o["data-mce-href"]=o.href,e.attr(o)):r.execCommand("unlink")})),e=r.$('a[data-wplink-url-error="1"]').removeAttr("data-wplink-url-error"),wpLink.close("noReset"),r.focus(),e.length&&(r.selection.select(e[0]),r.plugins.wplink&&r.plugins.wplink.checkLink(e[0])),r.nodeChanged(),a.a11y.speak(l.linkInserted)},updateFields:function(e,t){h.url.val(t.children(".item-permalink").val()),h.title.val(t.hasClass("no-title")?"":t.children(".item-title").text()),h.wrap.hasClass("has-text-field")&&!h.text.val()&&h.text.val(t.children(".item-title").text())},getUrlFromSelection:function(e){return e||(this.isMCE()?e=r.selection.getContent({format:"text"}):document.selection&&wpLink.range?e=wpLink.range.text:void 0!==this.textarea.selectionStart&&(e=this.textarea.value.substring(this.textarea.selectionStart,this.textarea.selectionEnd))),(e=i.trim(e))&&d.test(e)?"mailto:"+e:e&&u.test(e)?e.replace(/&amp;|&#0?38;/gi,"&"):""},setDefaultValues:function(e){h.url.val(this.getUrlFromSelection(e)),h.title.val(""),h.openInNewTab.prop("checked",!1),h.tanfl.prop("checked",!1),h.tanfl_sponsored.prop("checked",!1),h.tanfl_ugc.prop("checked",!1),h.search.val(""),wpLink.searchInternalLinks(),h.submit.val(l.save)},searchInternalLinks:function(){var e,t=h.search.val()||"",n=parseInt(l.minInputLength,10)||3;t.length>=n?(f.recent.hide(),f.search.show(),wpLink.lastSearch!=t&&(wpLink.lastSearch=t,e=h.search.parent().find(".spinner").addClass("is-active"),f.search.change(t),f.search.ajax((function(){e.removeClass("is-active")})))):(f.search.hide(),f.recent.show())},next:function(){f.search.next(),f.recent.next()},prev:function(){f.search.prev(),f.recent.prev()},keydown:function(e){var t;27===e.keyCode?(wpLink.close(),e.stopImmediatePropagation()):9===e.keyCode&&("wp-link-submit"!==(t=e.target.id)||e.shiftKey?"wp-link-close"===t&&e.shiftKey&&(h.submit.focus(),e.preventDefault()):(h.close.focus(),e.preventDefault())),e.shiftKey||38!==e.keyCode&&40!==e.keyCode||document.activeElement&&("link-title-field"===document.activeElement.id||"url-field"===document.activeElement.id)||(t=38===e.keyCode?"prev":"next",clearInterval(wpLink.keyInterval),wpLink[t](),wpLink.keyInterval=setInterval(wpLink[t],wpLink.keySensitivity),e.preventDefault())},keyup:function(e){38!==e.keyCode&&40!==e.keyCode||(clearInterval(wpLink.keyInterval),e.preventDefault())},delayedCallback:function(e,t){var n,i,l,a;return t?(setTimeout((function(){return i?e.apply(a,l):void(n=!0)}),t),function(){if(n)return e.apply(this,arguments);l=arguments,a=this,i=!0}):e}},o=function(e,t){var n=this;this.element=e,this.ul=e.children("ul"),this.contentHeight=e.children("#link-selector-height"),this.waiting=e.find(".river-waiting"),this.change(t),this.refresh(),i("#wp-link .query-results, #wp-link #link-selector").scroll((function(){n.maybeLoad()})),e.on("click","li",(function(e){n.select(i(this),e)}))},i.extend(o.prototype,{refresh:function(){this.deselect(),this.visible=this.element.is(":visible")},show:function(){this.visible||(this.deselect(),this.element.show(),this.visible=!0)},hide:function(){this.element.hide(),this.visible=!1},select:function(e,t){var n,i,l,a;e.hasClass("unselectable")||e==this.selected||(this.deselect(),this.selected=e.addClass("selected"),n=e.outerHeight(),i=this.element.height(),l=e.position().top,a=this.element.scrollTop(),l<0?this.element.scrollTop(a+l):i<l+n&&this.element.scrollTop(a+l-i+n),this.element.trigger("river-select",[e,t,this]))},deselect:function(){this.selected&&this.selected.removeClass("selected"),this.selected=!1},prev:function(){var e;this.visible&&this.selected&&(e=this.selected.prev("li")).length&&this.select(e)},next:function(){var e;!this.visible||(e=this.selected?this.selected.next("li"):i("li:not(.unselectable):first",this.element)).length&&this.select(e)},ajax:function(e){var t=this,n=1==this.query.page?0:wpLink.minRiverAJAXDuration;n=wpLink.delayedCallback((function(n,i){t.process(n,i),e&&e(n,i)}),n);this.query.ajax(n)},change:function(e){this.query&&this._search==e||(this._search=e,this.query=new c(e),this.element.scrollTop(0))},process:function(e,t){var n,a="",r=!0;t=1==t.page;e?i.each(e,(function(){n=r?"alternate":"",n+=this.title?"":" no-title",a+=n?'<li class="'+n+'">':"<li>",a+='<input type="hidden" class="item-permalink" value="'+this.permalink+'" />',a+='<span class="item-title">',a+=this.title||l.noTitle,a+='</span><span class="item-info">'+this.info+"</span></li>",r=!r})):t&&(a+='<li class="unselectable no-matches-found"><span class="item-title"><em>'+l.noMatchesFound+"</em></span></li>"),this.ul[t?"html":"append"](a)},maybeLoad:function(){var e=this,t=this.element,n=t.scrollTop()+t.height();!this.query.ready()||n<this.contentHeight.height()-wpLink.riverBottomThreshold||setTimeout((function(){var n=t.scrollTop(),i=n+t.height();!e.query.ready()||i<e.contentHeight.height()-wpLink.riverBottomThreshold||(e.waiting.addClass("is-active"),t.scrollTop(n+e.waiting.outerHeight()),e.ajax((function(){e.waiting.removeClass("is-active")})))}),wpLink.timeToTriggerRiver)}}),c=function(e){this.page=1,this.allLoaded=!1,this.querying=!1,this.search=e},i.extend(c.prototype,{ready:function(){return!(this.querying||this.allLoaded)},ajax:function(e){var t=this,n={action:"wp-link-ajax",page:this.page,_ajax_linking_nonce:h.nonce.val()};this.search&&(n.search=this.search),this.querying=!0,i.post(window.ajaxurl,n,(function(i){t.page++,t.querying=!1,t.allLoaded=!i,e(i,n)}),"json")}}),i(document).ready(wpLink.init)}});