// Compiled by ClojureScript 1.10.914 {:optimizations :none}
goog.provide('app.components');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('app.db');
goog.require('app.colors');
goog.require('app.previews');
app.components.active_preview = reagent.core.atom.call(null,app.previews.preview_javascript);
app.components.toggle_preview = (function app$components$toggle_preview(lang){
return cljs.core.reset_BANG_.call(null,app.components.active_preview,lang);
});
app.components.select_component = (function app$components$select_component(compid,title,linklist){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn-group.themedrop","div.btn-group.themedrop",900759062),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),compid], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default.dropdown-toggle","button.btn.btn-default.dropdown-toggle",-1235297954),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"dropdown"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),"    "].join(''),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.caret","span.caret",-1405994877)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sr-only","span.sr-only",2081743235)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.dropdown-menu","ul.dropdown-menu",-867384656),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),compid], null),(function (){var iter__4652__auto__ = (function app$components$select_component_$_iter__15427(s__15428){
return (new cljs.core.LazySeq(null,(function (){
var s__15428__$1 = s__15428;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__15428__$1);
if(temp__5753__auto__){
var s__15428__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15428__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__15428__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__15430 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__15429 = (0);
while(true){
if((i__15429 < size__4651__auto__)){
var vec__15431 = cljs.core._nth.call(null,c__4650__auto__,i__15429);
var linkhandler = cljs.core.nth.call(null,vec__15431,(0),null);
var linktitle = cljs.core.nth.call(null,vec__15431,(1),null);
cljs.core.chunk_append.call(null,b__15430,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),linkhandler], null),linktitle], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linkhandler], null)));

var G__15437 = (i__15429 + (1));
i__15429 = G__15437;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15430),app$components$select_component_$_iter__15427.call(null,cljs.core.chunk_rest.call(null,s__15428__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15430),null);
}
} else {
var vec__15434 = cljs.core.first.call(null,s__15428__$2);
var linkhandler = cljs.core.nth.call(null,vec__15434,(0),null);
var linktitle = cljs.core.nth.call(null,vec__15434,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"on-click","on-click",1632826543),linkhandler], null),linktitle], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),linkhandler], null)),app$components$select_component_$_iter__15427.call(null,cljs.core.rest.call(null,s__15428__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,linklist);
})()], null)], null);
});
app.components.theme_select = (function app$components$theme_select(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.select_component,"themedrop","Theme Samples",new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme.call(null,app.db.black);
}),"black"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme.call(null,app.db.white);
}),"white"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme.call(null,app.db.warm_night);
}),"warm-night"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme.call(null,app.db.white_sand);
}),"white-sand"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme.call(null,app.db.munich);
}),"munich"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme.call(null,app.db.greymatters);
}),"greymatters"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme.call(null,app.db.reykjavik);
}),"reykjavik"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme.call(null,app.db.oldlace);
}),"oldlace"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme.call(null,app.db.soft_charcoal);
}),"soft-charcoal"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme.call(null,app.db.bergen);
}),"bergen"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme.call(null,app.db.madrid);
}),"madrid"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme.call(null,app.db.soft_morning);
}),"soft-morning"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme.call(null,app.db.magonyx);
}),"magonyx"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme.call(null,app.db.light_kiss);
}),"light-kiss"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme.call(null,app.db.foggy_night);
}),"foggy-night"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme.call(null,app.db.silkworm);
}),"silkworm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme.call(null,app.db.metalheart);
}),"metalheart"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme.call(null,app.db.breezy_fall);
}),"breezy-fall"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.db.switch_theme.call(null,app.db.thursday);
}),"thursday"], null)], null)], null);
});
app.components.language_select = (function app$components$language_select(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.select_component,"langdrop","Languages",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.components.toggle_preview.call(null,app.previews.preview_javascript);
}),"Javascript"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.components.toggle_preview.call(null,app.previews.preview_ruby);
}),"Ruby"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.components.toggle_preview.call(null,app.previews.preview_typescript);
}),"Typescript"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.components.toggle_preview.call(null,app.previews.preview_python);
}),"Python"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return app.components.toggle_preview.call(null,app.previews.preview_c);
}),"C"], null)], null)], null);
});
/**
 * button-component returns the markup for a bootstrap default button
 */
app.components.button_component = (function app$components$button_component(text,handler){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),handler], null),text], null);
});
app.components.inc_contrast_component = (function app$components$inc_contrast_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.colors.inc_contrast.call(null);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.conticons","span.conticons",1877329379),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-adjust","i.fa.fa-adjust",-32951383)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-plus","i.fa.fa-plus",1581703945)], null)], null)], null);
});
app.components.red_contrast_component = (function app$components$red_contrast_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.colors.red_contrast.call(null);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.conticons","span.conticons",1877329379),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-adjust","i.fa.fa-adjust",-32951383)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-minus","i.fa.fa-minus",-2118708238)], null)], null)], null);
});
app.components.adjustbg_component = (function app$components$adjustbg_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.adbggroup","div.adbggroup",-802988762),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#adbg.adbgcheckbox","input#adbg.adbgcheckbox",-477240987),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,app.db.adjustbg),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return app.db.toggle_adjust.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"adbg"], null),"Adjust Bg"], null)], null);
});
app.components.random_button_component = (function app$components$random_button_component(text,handler){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),handler], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.randicons","span.randicons",-1030221658),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-random","i.fa.fa-random",1838280410)], null),text], null)], null);
});
app.components.random_colors_component = (function app$components$random_colors_component(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.randbuttons.row","div.randbuttons.row",-179264539),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.random_button_component,"Warm",(function (){
return app.colors.set_random_palette.call(null,app.colors.warm_palette.call(null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.random_button_component,"Soft",(function (){
return app.colors.set_random_palette.call(null,app.colors.soft_palette.call(null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.random_button_component,"Pop",(function (){
return app.colors.set_random_palette.call(null,app.colors.pop_palette.call(null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.random_button_component,"Muted",(function (){
return app.colors.set_random_palette.call(null,app.colors.muted_palette.call(null));
})], null)], null);
});
app.components.custom_color_input_component = (function app$components$custom_color_input_component(value,title){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.custominputlabel","span.custominputlabel",1572122074),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.custominput","input.custominput",-1266151278),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.name.call(null,value),"id"].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"step","step",1288888124),"0.1",new cljs.core.Keyword(null,"min","min",444991522),"0",new cljs.core.Keyword(null,"max","max",61366548),"100",new cljs.core.Keyword(null,"default-value","default-value",232220170),value.call(null,cljs.core.deref.call(null,app.db.custom_palette_db)).toFixed((2))], null)], null)], null);
});
app.components.custom_colors_component = (function app$components$custom_colors_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.randbuttons.row.custombutton","div.randbuttons.row.custombutton",1759835946),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.random_button_component,"Custom",(function (){
var sat_15438 = document.getElementById("saturationid").value;
var light_15439 = document.getElementById("lightnessid").value;
cljs.core.reset_BANG_.call(null,app.db.custom_palette_db,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"saturation","saturation",-14247929),parseFloat(sat_15438),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),parseFloat(light_15439)], null));

return app.colors.set_random_palette.call(null,app.colors.custom_palette.call(null,new cljs.core.Keyword(null,"lightness","lightness",-2040901930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.custom_palette_db)),new cljs.core.Keyword(null,"saturation","saturation",-14247929).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.custom_palette_db))));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.custom_color_input_component,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),"L: "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.components.custom_color_input_component,new cljs.core.Keyword(null,"saturation","saturation",-14247929),"S: "], null)], null);
});
app.components.color_component = (function app$components$color_component(facename){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.colorcomponent","div.colorcomponent",1489361333),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.themeface","div.row.themeface",-525395240),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.colortitle.col-xs-4","label.colortitle.col-xs-4",-431957645),cljs.core.name.call(null,facename)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.col-xs-3.colorinput.col-xs-offset-1","input.col-xs-3.colorinput.col-xs-offset-1",760327153),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"color",new cljs.core.Keyword(null,"value","value",305978217),facename.call(null,cljs.core.deref.call(null,app.db.app_db)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15440_SHARP_){
return cljs.core.swap_BANG_.call(null,app.db.app_db,cljs.core.assoc,facename,p1__15440_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.col-xs-3.textinput","input.col-xs-3.textinput",-1077763393),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),facename.call(null,cljs.core.deref.call(null,app.db.app_db)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15441_SHARP_){
return cljs.core.swap_BANG_.call(null,app.db.app_db,cljs.core.assoc,facename,p1__15441_SHARP_.target.value);
})], null)], null)], null)], null);
});
app.components.name_component = (function app$components$name_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.themename","div.themename",-1614010319),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.colortitle.col-xs-5","label.colortitle.col-xs-5",594450053),"Themename"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.col-xs-4.textinput.col-xs-offset-1.nameinput","input.col-xs-4.textinput.col-xs-offset-1.nameinput",903477146),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"themename","themename",554673720).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15442_SHARP_){
return cljs.core.swap_BANG_.call(null,app.db.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"themename","themename",554673720),p1__15442_SHARP_.target.value);
})], null)], null)], null)], null);
});
app.components.author_component = (function app$components$author_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.themename","div.themename",-1614010319),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.colortitle.col-xs-5","label.colortitle.col-xs-5",594450053),"Author"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.col-xs-4.textinput.col-xs-offset-1.nameinput","input.col-xs-4.textinput.col-xs-offset-1.nameinput",903477146),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"themeauthor","themeauthor",1913172160).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.app_db)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15443_SHARP_){
return cljs.core.swap_BANG_.call(null,app.db.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"themeauthor","themeauthor",1913172160),p1__15443_SHARP_.target.value);
})], null)], null)], null)], null);
});

//# sourceMappingURL=components.js.map
