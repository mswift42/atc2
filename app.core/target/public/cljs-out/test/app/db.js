// Compiled by ClojureScript 1.10.914 {:optimizations :none}
goog.provide('app.db');
goog.require('cljs.core');
goog.require('reagent.core');
app.db.black = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#d4d4d4","#ff8800","#d4d4d4","#d4d4d4","#d4d4d4","#d4d4d4","#ff0000","#d4d4d4","#d4d4d4","#000000","#808080","black","#d4d4d4"]);
app.db.white = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#000000","#ff8800","#000000","#000000","#000000","#000000","#ff0000","#000000","#303030","#ffffff","#606060","white","#000000"]);
app.db.white_sand = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#476238","#ff4d12","#697024","#8c4a79","#b3534b","#bd745e","#ff1276","#4a858c","#585858","#f5ebe1","#a9a9a9","white-sand","#1a8591"]);
app.db.warm_night = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#c27d7b","#e86310","#bd845f","#8b8fc6","#71a19f","#b680b1","#e81050","#96905f","#b1b1b1","#292424","#5d5a58","warm-night","#71a46c"]);
app.db.oldlace = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#3f5b32","#fa7b0c","#64502f","#634575","#305f5e","#714355","#fa0c0c","#3f567b","#525252","#fdf5e6","#949494","Oldlace","#7b4135"]);
app.db.greymatters = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#3f5b32","#fa7b0c","#64502f","#634575","#305f5e","#714355","#fa0c0c","#3f567b","#2f2f2f","#f9fbfd","#949494","Greymatters","#7b4135"]);
app.db.soft_charcoal = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#8885b2","#ff2370","#8aa6c1","#8aa6c1","#5d90cd","#7a8bbd","#ff6523","#8aa234","#c2c2c2","#191919","#808080","soft-charcoal","#54686d"]);
app.db.munich = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#9798d6","#e86310","#d7897c","#cf88af","#36aea8","#40a8d3","#e81050","#b39b5f","#b1b1b1","#281123","#5d5d5d","munich","#7aa975"]);
app.db.reykjavik = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#e1c9aa","#e86310","#a3d6cc","#c1d2b1","#e6c2db","#f1c1bd","#e81050","#a3d4e8","#b1b1b1","#112328","#5d5d5d","reykjavik","#c4cbee"]);
app.db.bergen = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#6d3e7e","#ff4d12","#0081a6","#00847a","#b15a56","#926e31","#ff1276","#5c71b3","#585858","#eae7e9","#a9a9a9","bergen","#a35c8e"]);
app.db.madrid = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#4394a7","#e86310","#a27ea4","#718bb6","#818f62","#96546c","#e81050","#b7797d","#b1b1b1","#1b1b1b","#5d5d5d","madrid","#a78360"]);
app.db.soft_morning = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#f03f3f","#e80f29","#f03f3f","#727170","#3450a2","#a82e4d","#ff6523","#8aa234","#282828","#f2f1f0","#808080","soft-morning","#727170"]);
app.db.magonyx = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#e69ae8","#e86310","#eca661","#ff909d","#5ba2b1","#75b7ff","#e81050","#9ec065","#c7c7c7","#353839","#5d5d5d","magonyx","#cbb021"]);
app.db.light_kiss = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#337d92","#ff8800","#337d92","#337d92","#2a55a8","#2a55a8","#ff0000","#c87758","#303030","#efe6e6","#909090","light-kiss","#2a55a8"]);
app.db.foggy_night = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#7b875b","#e86310","#3e8c9d","#8d5351","#ad7176","#9e7a5a","#e81050","#6b83ac","#8f8f8f","#292929","#626262","foggy-night","#997599"]);
app.db.silkworm = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#a74f31","#ff4d12","#a74f31","#76690b","#3b4bab","#ad4271","#ff1276","#367a7f","#585858","#ece3db","#a9a9a9","silkworm","#0073b5"]);
app.db.metalheart = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#638f81","#ff8800","#5980a3","#7a9f81","#ba899c","#937aba","#ff0000","#6e94ad","#8693ae","#1d272a","#727272","metalheart","#9a91b8"]);
app.db.breezy_fall = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#922f8c","#ff4d12","#844c41","#454b7a","#994485","#a94142","#ff1276","#0073a3","#78693c","#f6f3cf","#906e86","breezy-fall","#3b61b1"]);
app.db.thursday = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"warning2","warning2",972253928),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"mainbg","mainbg",-549902636),new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"themename","themename",554673720),new cljs.core.Keyword(null,"builtin","builtin",-1707593346)],["#7d6740","#fa7b0c","#28766e","#56724b","#8c5c79","#935c54","#fa0c0c","#28728f","#2f2f2f","#f5f7f9","#949494","thursday","#636792"]);
app.db.contrastcolors = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mainfg","mainfg",-752299820),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"builtin","builtin",-1707593346),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"comment","comment",532206069)], null);
app.db.randomcolors = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"builtin","builtin",-1707593346),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"functionname","functionname",-2124216080),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constant","constant",-379609303)], null);
app.db.app_db = reagent.core.atom.call(null,app.db.black);
app.db.adjustbg = reagent.core.atom.call(null,false);
app.db.custom_palette_db = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"saturation","saturation",-14247929),(0),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),(0)], null));
app.db.switch_theme = (function app$db$switch_theme(theme){
return cljs.core.reset_BANG_.call(null,app.db.app_db,theme);
});
app.db.toggle_adjust = (function app$db$toggle_adjust(){
return cljs.core.reset_BANG_.call(null,app.db.adjustbg,cljs.core.not.call(null,cljs.core.deref.call(null,app.db.adjustbg)));
});
app.db.set_custom_palette = (function app$db$set_custom_palette(lightness,saturation){
return cljs.core.reset_BANG_.call(null,app.db.custom_palette_db,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"saturation","saturation",-14247929),saturation,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),lightness], null));
});
app.db.storagename = "themecreator";
app.db.save_to_storage = (function app$db$save_to_storage(){
return localStorage.setItem(app.db.storagename,JSON.stringify(cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,app.db.app_db),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),new cljs.core.Keyword(null,"lightness","lightness",-2040901930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.custom_palette_db)),new cljs.core.Keyword(null,"saturation","saturation",-14247929),new cljs.core.Keyword(null,"saturation","saturation",-14247929).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.db.custom_palette_db))))));
});
/**
 * convert a map with strings as keys to a map with keyword keys and string 
 * values.
 */
app.db.string_to_keyword = (function app$db$string_to_keyword(strmap){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4652__auto__ = (function app$db$string_to_keyword_$_iter__9426(s__9427){
return (new cljs.core.LazySeq(null,(function (){
var s__9427__$1 = s__9427;
while(true){
var temp__5753__auto__ = cljs.core.seq.call(null,s__9427__$1);
if(temp__5753__auto__){
var s__9427__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9427__$2)){
var c__4650__auto__ = cljs.core.chunk_first.call(null,s__9427__$2);
var size__4651__auto__ = cljs.core.count.call(null,c__4650__auto__);
var b__9429 = cljs.core.chunk_buffer.call(null,size__4651__auto__);
if((function (){var i__9428 = (0);
while(true){
if((i__9428 < size__4651__auto__)){
var vec__9430 = cljs.core._nth.call(null,c__4650__auto__,i__9428);
var k = cljs.core.nth.call(null,vec__9430,(0),null);
var v = cljs.core.nth.call(null,vec__9430,(1),null);
cljs.core.chunk_append.call(null,b__9429,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null));

var G__9436 = (i__9428 + (1));
i__9428 = G__9436;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9429),app$db$string_to_keyword_$_iter__9426.call(null,cljs.core.chunk_rest.call(null,s__9427__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9429),null);
}
} else {
var vec__9433 = cljs.core.first.call(null,s__9427__$2);
var k = cljs.core.nth.call(null,vec__9433,(0),null);
var v = cljs.core.nth.call(null,vec__9433,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,k),v], null),app$db$string_to_keyword_$_iter__9426.call(null,cljs.core.rest.call(null,s__9427__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__.call(null,strmap);
})());
});
app.db.load_from_storage = (function app$db$load_from_storage(){
var th = localStorage.getItem(app.db.storagename);
if(cljs.core.truth_(th)){
return cljs.core.js__GT_clj.call(null,JSON.parse(localStorage.getItem(app.db.storagename)));
} else {
return null;
}
});
app.db.set_db_from_storage = (function app$db$set_db_from_storage(){
if(cljs.core.truth_(localStorage.getItem(app.db.storagename))){
var storedtheme = app.db.string_to_keyword.call(null,app.db.load_from_storage.call(null));
app.db.switch_theme.call(null,storedtheme);

return cljs.core.reset_BANG_.call(null,app.db.custom_palette_db,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"saturation","saturation",-14247929),new cljs.core.Keyword(null,"saturation","saturation",-14247929).cljs$core$IFn$_invoke$arity$1(storedtheme),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),new cljs.core.Keyword(null,"lightness","lightness",-2040901930).cljs$core$IFn$_invoke$arity$1(storedtheme)], null));
} else {
return null;
}
});

//# sourceMappingURL=db.js.map
