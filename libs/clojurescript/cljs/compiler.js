// Compiled by ClojureScript 1.10.758 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,(function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.call(null,ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv.call(null,(function (xs,ns,_){
if(cljs.core._EQ_.call(null,needle,cljs.compiler.get_first_ns_segment.call(null,ns))){
return cljs.core.reduced.call(null,needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__4796 = s;
var map__4796__$1 = (((((!((map__4796 == null))))?(((((map__4796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4796):map__4796);
var name = cljs.core.get.call(null,map__4796__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__4796__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__4799 = info;
var map__4800 = G__4799;
var map__4800__$1 = (((((!((map__4800 == null))))?(((((map__4800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4800):map__4800);
var shadow = cljs.core.get.call(null,map__4800__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__4799__$1 = G__4799;
while(true){
var d__$2 = d__$1;
var map__4804 = G__4799__$1;
var map__4804__$1 = (((((!((map__4804 == null))))?(((((map__4804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4804):map__4804);
var shadow__$1 = cljs.core.get.call(null,map__4804__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__4806 = (d__$2 + (1));
var G__4807 = shadow__$1;
d__$1 = G__4806;
G__4799__$1 = G__4807;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__4808){
var map__4809 = p__4808;
var map__4809__$1 = (((((!((map__4809 == null))))?(((((map__4809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4809):map__4809);
var name_var = map__4809__$1;
var name = cljs.core.get.call(null,map__4809__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__4809__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__4811 = info;
var map__4811__$1 = (((((!((map__4811 == null))))?(((((map__4811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4811):map__4811);
var ns = cljs.core.get.call(null,map__4811__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__4811__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.call(null,reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__4814 = arguments.length;
switch (G__4814) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(25),(1),(11501),(11501),new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)])).call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__4816 = cp;
switch (G__4816) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.call(null,"0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__4818_4822 = cljs.core.seq.call(null,s);
var chunk__4819_4823 = null;
var count__4820_4824 = (0);
var i__4821_4825 = (0);
while(true){
if((i__4821_4825 < count__4820_4824)){
var c_4826 = cljs.core._nth.call(null,chunk__4819_4823,i__4821_4825);
sb.append(cljs.compiler.escape_char.call(null,c_4826));


var G__4827 = seq__4818_4822;
var G__4828 = chunk__4819_4823;
var G__4829 = count__4820_4824;
var G__4830 = (i__4821_4825 + (1));
seq__4818_4822 = G__4827;
chunk__4819_4823 = G__4828;
count__4820_4824 = G__4829;
i__4821_4825 = G__4830;
continue;
} else {
var temp__5753__auto___4831 = cljs.core.seq.call(null,seq__4818_4822);
if(temp__5753__auto___4831){
var seq__4818_4832__$1 = temp__5753__auto___4831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4818_4832__$1)){
var c__4556__auto___4833 = cljs.core.chunk_first.call(null,seq__4818_4832__$1);
var G__4834 = cljs.core.chunk_rest.call(null,seq__4818_4832__$1);
var G__4835 = c__4556__auto___4833;
var G__4836 = cljs.core.count.call(null,c__4556__auto___4833);
var G__4837 = (0);
seq__4818_4822 = G__4834;
chunk__4819_4823 = G__4835;
count__4820_4824 = G__4836;
i__4821_4825 = G__4837;
continue;
} else {
var c_4838 = cljs.core.first.call(null,seq__4818_4832__$1);
sb.append(cljs.compiler.escape_char.call(null,c_4838));


var G__4839 = cljs.core.next.call(null,seq__4818_4832__$1);
var G__4840 = null;
var G__4841 = (0);
var G__4842 = (0);
seq__4818_4822 = G__4839;
chunk__4819_4823 = G__4840;
count__4820_4824 = G__4841;
i__4821_4825 = G__4842;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__4843_4848 = ast;
var map__4843_4849__$1 = (((((!((map__4843_4848 == null))))?(((((map__4843_4848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4843_4848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4843_4848):map__4843_4848);
var env_4850 = cljs.core.get.call(null,map__4843_4849__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_4850))){
var map__4845_4851 = env_4850;
var map__4845_4852__$1 = (((((!((map__4845_4851 == null))))?(((((map__4845_4851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4845_4851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4845_4851):map__4845_4851);
var line_4853 = cljs.core.get.call(null,map__4845_4852__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_4854 = cljs.core.get.call(null,map__4845_4852__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__4847 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast)))){
return cljs.core.assoc.call(null,G__4847,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__4847;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_4853 - (1))], null),cljs.core.fnil.call(null,(function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_4854)?(column_4854 - (1)):(0))], null),cljs.core.fnil.call(null,(function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__4863 = arguments.length;
switch (G__4863) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___4870 = arguments.length;
var i__4737__auto___4871 = (0);
while(true){
if((i__4737__auto___4871 < len__4736__auto___4870)){
args_arr__4757__auto__.push((arguments[i__4737__auto___4871]));

var G__4872 = (i__4737__auto___4871 + (1));
i__4737__auto___4871 = G__4872;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,a)){
cljs.compiler.emit.call(null,a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,a)){
cljs.core.apply.call(null,cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
a.call(null);
} else {
var s_4873 = (function (){var G__4864 = a;
if((!(typeof a === 'string'))){
return G__4864.toString();
} else {
return G__4864;
}
})();
var temp__5757__auto___4874 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5757__auto___4874 == null)){
} else {
var sm_data_4875 = temp__5757__auto___4874;
cljs.core.swap_BANG_.call(null,sm_data_4875,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__4855_SHARP_){
return (p1__4855_SHARP_ + s_4873.length);
}));
}

cljs.core.print.call(null,s_4873);

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

return cljs.compiler.emits.call(null,b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler.emits.call(null,c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler.emits.call(null,d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler.emits.call(null,e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__4865 = cljs.core.seq.call(null,xs);
var chunk__4866 = null;
var count__4867 = (0);
var i__4868 = (0);
while(true){
if((i__4868 < count__4867)){
var x = cljs.core._nth.call(null,chunk__4866,i__4868);
cljs.compiler.emits.call(null,x);


var G__4876 = seq__4865;
var G__4877 = chunk__4866;
var G__4878 = count__4867;
var G__4879 = (i__4868 + (1));
seq__4865 = G__4876;
chunk__4866 = G__4877;
count__4867 = G__4878;
i__4868 = G__4879;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__4865);
if(temp__5753__auto__){
var seq__4865__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4865__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__4865__$1);
var G__4880 = cljs.core.chunk_rest.call(null,seq__4865__$1);
var G__4881 = c__4556__auto__;
var G__4882 = cljs.core.count.call(null,c__4556__auto__);
var G__4883 = (0);
seq__4865 = G__4880;
chunk__4866 = G__4881;
count__4867 = G__4882;
i__4868 = G__4883;
continue;
} else {
var x = cljs.core.first.call(null,seq__4865__$1);
cljs.compiler.emits.call(null,x);


var G__4884 = cljs.core.next.call(null,seq__4865__$1);
var G__4885 = null;
var G__4886 = (0);
var G__4887 = (0);
seq__4865 = G__4884;
chunk__4866 = G__4885;
count__4867 = G__4886;
i__4868 = G__4887;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq4857){
var G__4858 = cljs.core.first.call(null,seq4857);
var seq4857__$1 = cljs.core.next.call(null,seq4857);
var G__4859 = cljs.core.first.call(null,seq4857__$1);
var seq4857__$2 = cljs.core.next.call(null,seq4857__$1);
var G__4860 = cljs.core.first.call(null,seq4857__$2);
var seq4857__$3 = cljs.core.next.call(null,seq4857__$2);
var G__4861 = cljs.core.first.call(null,seq4857__$3);
var seq4857__$4 = cljs.core.next.call(null,seq4857__$3);
var G__4862 = cljs.core.first.call(null,seq4857__$4);
var seq4857__$5 = cljs.core.next.call(null,seq4857__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4858,G__4859,G__4860,G__4861,G__4862,seq4857__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__4888){
var map__4889 = p__4888;
var map__4889__$1 = (((((!((map__4889 == null))))?(((((map__4889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4889):map__4889);
var m = map__4889__$1;
var gen_line = cljs.core.get.call(null,map__4889__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__4898 = arguments.length;
switch (G__4898) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___4904 = arguments.length;
var i__4737__auto___4905 = (0);
while(true){
if((i__4737__auto___4905 < len__4736__auto___4904)){
args_arr__4757__auto__.push((arguments[i__4737__auto___4905]));

var G__4906 = (i__4737__auto___4905 + (1));
i__4737__auto___4905 = G__4906;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.call(null,a);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

return cljs.compiler._emitln.call(null);
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.call(null,a);

cljs.compiler.emits.call(null,b);

cljs.compiler.emits.call(null,c);

cljs.compiler.emits.call(null,d);

cljs.compiler.emits.call(null,e);

var seq__4899_4907 = cljs.core.seq.call(null,xs);
var chunk__4900_4908 = null;
var count__4901_4909 = (0);
var i__4902_4910 = (0);
while(true){
if((i__4902_4910 < count__4901_4909)){
var x_4911 = cljs.core._nth.call(null,chunk__4900_4908,i__4902_4910);
cljs.compiler.emits.call(null,x_4911);


var G__4912 = seq__4899_4907;
var G__4913 = chunk__4900_4908;
var G__4914 = count__4901_4909;
var G__4915 = (i__4902_4910 + (1));
seq__4899_4907 = G__4912;
chunk__4900_4908 = G__4913;
count__4901_4909 = G__4914;
i__4902_4910 = G__4915;
continue;
} else {
var temp__5753__auto___4916 = cljs.core.seq.call(null,seq__4899_4907);
if(temp__5753__auto___4916){
var seq__4899_4917__$1 = temp__5753__auto___4916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4899_4917__$1)){
var c__4556__auto___4918 = cljs.core.chunk_first.call(null,seq__4899_4917__$1);
var G__4919 = cljs.core.chunk_rest.call(null,seq__4899_4917__$1);
var G__4920 = c__4556__auto___4918;
var G__4921 = cljs.core.count.call(null,c__4556__auto___4918);
var G__4922 = (0);
seq__4899_4907 = G__4919;
chunk__4900_4908 = G__4920;
count__4901_4909 = G__4921;
i__4902_4910 = G__4922;
continue;
} else {
var x_4923 = cljs.core.first.call(null,seq__4899_4917__$1);
cljs.compiler.emits.call(null,x_4923);


var G__4924 = cljs.core.next.call(null,seq__4899_4917__$1);
var G__4925 = null;
var G__4926 = (0);
var G__4927 = (0);
seq__4899_4907 = G__4924;
chunk__4900_4908 = G__4925;
count__4901_4909 = G__4926;
i__4902_4910 = G__4927;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln.call(null);
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq4892){
var G__4893 = cljs.core.first.call(null,seq4892);
var seq4892__$1 = cljs.core.next.call(null,seq4892);
var G__4894 = cljs.core.first.call(null,seq4892__$1);
var seq4892__$2 = cljs.core.next.call(null,seq4892__$1);
var G__4895 = cljs.core.first.call(null,seq4892__$2);
var seq4892__$3 = cljs.core.next.call(null,seq4892__$2);
var G__4896 = cljs.core.first.call(null,seq4892__$3);
var seq4892__$4 = cljs.core.next.call(null,seq4892__$3);
var G__4897 = cljs.core.first.call(null,seq4892__$4);
var seq4892__$5 = cljs.core.next.call(null,seq4892__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4893,G__4894,G__4895,G__4896,G__4897,seq4892__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__4928_4932 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__4929_4933 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__4930_4934 = true;
var _STAR_print_fn_STAR__temp_val__4931_4935 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__4930_4934);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__4931_4935);

try{cljs.compiler.emit.call(null,expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__4929_4933);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__4928_4932);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x)){
return cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.core.record_QMARK_.call(null,x)){
var vec__4936 = cljs.analyzer.record_ns_PLUS_name.call(null,x);
var ns = cljs.core.nth.call(null,vec__4936,(0),null);
var name = cljs.core.nth.call(null,vec__4936,(1),null);
return cljs.compiler.emit_record_value.call(null,ns,name,(function (){
return cljs.compiler.emit_constant.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,x));
}));
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x)){
return cljs.compiler.emit_map.call(null,cljs.core.keys.call(null,x),cljs.core.vals.call(null,x),cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
if(cljs.analyzer.cljs_vector_QMARK_.call(null,x)){
return cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep);
} else {
if(cljs.analyzer.cljs_set_QMARK_.call(null,x)){
return cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_);
} else {
return cljs.compiler.emit_constant_STAR_.call(null,x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta.call(null,cljs.core.meta.call(null,v));
if((!((cljs.core.seq.call(null,m) == null)))){
return cljs.compiler.emit_with_meta.call(null,(function (){
return cljs.compiler.emit_constant_no_meta.call(null,v);
}),(function (){
return cljs.compiler.emit_constant_no_meta.call(null,m);
}));
} else {
return cljs.compiler.emit_constant_no_meta.call(null,v);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.call(null,["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.call(null,cljs.core.type.call(null,x))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.call(null,"NaN");
} else {
if(cljs.core.not.call(null,isFinite(x))){
return cljs.compiler.emits.call(null,(((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.call(null,"(",x,")");

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__4939 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.call(null,vec__4939,(0),null);
var flags = cljs.core.nth.call(null,vec__4939,(1),null);
var pattern = cljs.core.nth.call(null,vec__4939,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Keyword,(function (x){
var temp__5751__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var value = temp__5751__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.Symbol,(function (x){
var temp__5751__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
return x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var value = temp__5751__auto__;
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (i,m){
if(cljs.core.even_QMARK_.call(null,i)){
return cljs.compiler.emit_constant.call(null,m);
} else {
return cljs.compiler.emits.call(null,m);
}
}),cljs.compiler.comma_sep.call(null,cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant_STAR_,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_.call(null,items)){
return cljs.compiler.emit_js_object.call(null,items,(function (p1__4942_SHARP_){
return (function (){
return cljs.compiler.emit_constant.call(null,p1__4942_SHARP_);
});
}));
} else {
return cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__4944){
var map__4945 = p__4944;
var map__4945__$1 = (((((!((map__4945 == null))))?(((((map__4945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4945):map__4945);
var ast = map__4945__$1;
var info = cljs.core.get.call(null,map__4945__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__4945__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__4945__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5751__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5751__auto__)){
var const_expr = temp__5751__auto__;
return cljs.compiler.emit.call(null,cljs.core.assoc.call(null,const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__4947 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__4947__$1 = (((((!((map__4947 == null))))?(((((map__4947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4947):map__4947);
var cenv = map__4947__$1;
var options = cljs.core.get.call(null,map__4947__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4126__auto__ = js_module_name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,ast));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__4949 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.compiler.es5_GT__EQ_.call(null,new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options));
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace.call(null,var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.call(null,G__4949,cljs.analyzer.es5_allowed);
} else {
return G__4949;
}
})();
var js_module = cljs.core.get_in.call(null,cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})()], null));
var info__$2 = (function (){var G__4950 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__4950,reserved);
} else {
return G__4950;
}
})();
var env__4788__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var G__4951_4952 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__4951_4953__$1 = (((G__4951_4952 instanceof cljs.core.Keyword))?G__4951_4952.fqn:null);
switch (G__4951_4953__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace.call(null,var_name))){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"].",cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved));
} else {
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.name.call(null,var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.namespace.call(null,var_name);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.call(null,"default",cljs.core.name.call(null,var_name));
} else {
return and__4115__auto__;
}
})())){
cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,cljs.core.namespace.call(null,var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.call(null,info__$2);
}

break;
default:
cljs.compiler.emits.call(null,info__$2);

}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__4955){
var map__4956 = p__4955;
var map__4956__$1 = (((((!((map__4956 == null))))?(((((map__4956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4956):map__4956);
var arg = map__4956__$1;
var env = cljs.core.get.call(null,map__4956__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__4956__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__4956__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__4956__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__4958 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__4958__$1 = (((((!((map__4958 == null))))?(((((map__4958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4958):map__4958);
var name = cljs.core.get.call(null,map__4958__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__4788__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__4960){
var map__4961 = p__4960;
var map__4961__$1 = (((((!((map__4961 == null))))?(((((map__4961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4961.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4961):map__4961);
var expr = cljs.core.get.call(null,map__4961__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__4961__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__4961__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__4788__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_with_meta.call(null,expr,meta);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_.call(null,(function (p1__4963_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__4963_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count.call(null,keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count.call(null,keys) === (0))){
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(distinct_keys_QMARK_.call(null,keys))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.createAsIfByAssoc([",comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"])");
}
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",comma_sep.call(null,keys),"],[",comma_sep.call(null,vals),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__4964){
var map__4965 = p__4964;
var map__4965__$1 = (((((!((map__4965 == null))))?(((((map__4965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4965):map__4965);
var env = cljs.core.get.call(null,map__4965__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__4965__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__4965__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__4788__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_map.call(null,keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.call(null,"cljs.core.list(",comma_sep.call(null,items),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count.call(null,items);
if((cnt < (32))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",comma_sep.call(null,items),"], null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",comma_sep.call(null,items),"], true)");
}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__4967){
var map__4968 = p__4967;
var map__4968__$1 = (((((!((map__4968 == null))))?(((((map__4968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4968):map__4968);
var items = cljs.core.get.call(null,map__4968__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__4968__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__4788__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_vector.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.call(null,cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_.call(null,(function (p1__4970_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__4970_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count.call(null,items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_.call(null,items)){
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(distinct_constants_QMARK_.call(null,items))){
return cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
return cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.createAsIfByAssoc([",comma_sep.call(null,items),"])");

}
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__4971){
var map__4972 = p__4971;
var map__4972__$1 = (((((!((map__4972 == null))))?(((((map__4972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4972):map__4972);
var items = cljs.core.get.call(null,map__4972__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__4972__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__4788__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_set.call(null,items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.call(null,"({");

var temp__5753__auto___4996 = cljs.core.seq.call(null,items);
if(temp__5753__auto___4996){
var items_4997__$1 = temp__5753__auto___4996;
var vec__4974_4998 = items_4997__$1;
var seq__4975_4999 = cljs.core.seq.call(null,vec__4974_4998);
var first__4976_5000 = cljs.core.first.call(null,seq__4975_4999);
var seq__4975_5001__$1 = cljs.core.next.call(null,seq__4975_4999);
var vec__4977_5002 = first__4976_5000;
var k_5003 = cljs.core.nth.call(null,vec__4977_5002,(0),null);
var v_5004 = cljs.core.nth.call(null,vec__4977_5002,(1),null);
var r_5005 = seq__4975_5001__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_5003),"\": ",emit_js_object_val.call(null,v_5004));

var seq__4980_5006 = cljs.core.seq.call(null,r_5005);
var chunk__4981_5007 = null;
var count__4982_5008 = (0);
var i__4983_5009 = (0);
while(true){
if((i__4983_5009 < count__4982_5008)){
var vec__4990_5010 = cljs.core._nth.call(null,chunk__4981_5007,i__4983_5009);
var k_5011__$1 = cljs.core.nth.call(null,vec__4990_5010,(0),null);
var v_5012__$1 = cljs.core.nth.call(null,vec__4990_5010,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_5011__$1),"\": ",emit_js_object_val.call(null,v_5012__$1));


var G__5013 = seq__4980_5006;
var G__5014 = chunk__4981_5007;
var G__5015 = count__4982_5008;
var G__5016 = (i__4983_5009 + (1));
seq__4980_5006 = G__5013;
chunk__4981_5007 = G__5014;
count__4982_5008 = G__5015;
i__4983_5009 = G__5016;
continue;
} else {
var temp__5753__auto___5017__$1 = cljs.core.seq.call(null,seq__4980_5006);
if(temp__5753__auto___5017__$1){
var seq__4980_5018__$1 = temp__5753__auto___5017__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4980_5018__$1)){
var c__4556__auto___5019 = cljs.core.chunk_first.call(null,seq__4980_5018__$1);
var G__5020 = cljs.core.chunk_rest.call(null,seq__4980_5018__$1);
var G__5021 = c__4556__auto___5019;
var G__5022 = cljs.core.count.call(null,c__4556__auto___5019);
var G__5023 = (0);
seq__4980_5006 = G__5020;
chunk__4981_5007 = G__5021;
count__4982_5008 = G__5022;
i__4983_5009 = G__5023;
continue;
} else {
var vec__4993_5024 = cljs.core.first.call(null,seq__4980_5018__$1);
var k_5025__$1 = cljs.core.nth.call(null,vec__4993_5024,(0),null);
var v_5026__$1 = cljs.core.nth.call(null,vec__4993_5024,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_5025__$1),"\": ",emit_js_object_val.call(null,v_5026__$1));


var G__5027 = cljs.core.next.call(null,seq__4980_5018__$1);
var G__5028 = null;
var G__5029 = (0);
var G__5030 = (0);
seq__4980_5006 = G__5027;
chunk__4981_5007 = G__5028;
count__4982_5008 = G__5029;
i__4983_5009 = G__5030;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.call(null,"[",comma_sep.call(null,items),"]");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__5031){
var map__5032 = p__5031;
var map__5032__$1 = (((((!((map__5032 == null))))?(((((map__5032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5032):map__5032);
var keys = cljs.core.get.call(null,map__5032__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__5032__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.call(null,map__5032__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__4788__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_object.call(null,cljs.core.map.call(null,cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__5034){
var map__5035 = p__5034;
var map__5035__$1 = (((((!((map__5035 == null))))?(((((map__5035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5035):map__5035);
var items = cljs.core.get.call(null,map__5035__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__5035__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__4788__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_js_array.call(null,items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.call(null,ns,".map__GT_",name,"(",items,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__5037){
var map__5038 = p__5037;
var map__5038__$1 = (((((!((map__5038 == null))))?(((((map__5038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5038):map__5038);
var expr = cljs.core.get.call(null,map__5038__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit.call(null,expr);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__5040){
var map__5041 = p__5040;
var map__5041__$1 = (((((!((map__5041 == null))))?(((((map__5041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5041):map__5041);
var form = cljs.core.get.call(null,map__5041__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__5041__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__4788__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__5043 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__5043__$1 = (((((!((map__5043 == null))))?(((((map__5043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5043):map__5043);
var op = cljs.core.get.call(null,map__5043__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__5043__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__5043__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842)))?(function (){var and__4115__auto__ = form;
if(cljs.core.truth_(and__4115__auto__)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.call(null,form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4115__auto__;
}
})():false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return cljs.compiler.truthy_constant_QMARK_.call(null,const_expr);
} else {
return false;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__5045 = cljs.analyzer.unwrap_quote.call(null,expr);
var map__5045__$1 = (((((!((map__5045 == null))))?(((((map__5045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5045):map__5045);
var op = cljs.core.get.call(null,map__5045__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__5045__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.call(null,map__5045__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return cljs.compiler.falsey_constant_QMARK_.call(null,const_expr);
} else {
return false;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__4126__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__5047){
var map__5048 = p__5047;
var map__5048__$1 = (((((!((map__5048 == null))))?(((((map__5048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5048):map__5048);
var test = cljs.core.get.call(null,map__5048__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__5048__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__5048__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__5048__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__5048__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__4126__auto__ = unchecked;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__5050){
var map__5051 = p__5050;
var map__5051__$1 = (((((!((map__5051 == null))))?(((((map__5051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5051):map__5051);
var v = cljs.core.get.call(null,map__5051__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.call(null,map__5051__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.call(null,map__5051__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__5051__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__5053_5089 = cljs.core.seq.call(null,nodes);
var chunk__5054_5090 = null;
var count__5055_5091 = (0);
var i__5056_5092 = (0);
while(true){
if((i__5056_5092 < count__5055_5091)){
var map__5073_5093 = cljs.core._nth.call(null,chunk__5054_5090,i__5056_5092);
var map__5073_5094__$1 = (((((!((map__5073_5093 == null))))?(((((map__5073_5093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5073_5093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5073_5093):map__5073_5093);
var ts_5095 = cljs.core.get.call(null,map__5073_5094__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__5074_5096 = cljs.core.get.call(null,map__5073_5094__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__5074_5097__$1 = (((((!((map__5074_5096 == null))))?(((((map__5074_5096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5074_5096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5074_5096):map__5074_5096);
var then_5098 = cljs.core.get.call(null,map__5074_5097__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__5077_5099 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_5095));
var chunk__5078_5100 = null;
var count__5079_5101 = (0);
var i__5080_5102 = (0);
while(true){
if((i__5080_5102 < count__5079_5101)){
var test_5103 = cljs.core._nth.call(null,chunk__5078_5100,i__5080_5102);
cljs.compiler.emitln.call(null,"case ",test_5103,":");


var G__5104 = seq__5077_5099;
var G__5105 = chunk__5078_5100;
var G__5106 = count__5079_5101;
var G__5107 = (i__5080_5102 + (1));
seq__5077_5099 = G__5104;
chunk__5078_5100 = G__5105;
count__5079_5101 = G__5106;
i__5080_5102 = G__5107;
continue;
} else {
var temp__5753__auto___5108 = cljs.core.seq.call(null,seq__5077_5099);
if(temp__5753__auto___5108){
var seq__5077_5109__$1 = temp__5753__auto___5108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5077_5109__$1)){
var c__4556__auto___5110 = cljs.core.chunk_first.call(null,seq__5077_5109__$1);
var G__5111 = cljs.core.chunk_rest.call(null,seq__5077_5109__$1);
var G__5112 = c__4556__auto___5110;
var G__5113 = cljs.core.count.call(null,c__4556__auto___5110);
var G__5114 = (0);
seq__5077_5099 = G__5111;
chunk__5078_5100 = G__5112;
count__5079_5101 = G__5113;
i__5080_5102 = G__5114;
continue;
} else {
var test_5115 = cljs.core.first.call(null,seq__5077_5109__$1);
cljs.compiler.emitln.call(null,"case ",test_5115,":");


var G__5116 = cljs.core.next.call(null,seq__5077_5109__$1);
var G__5117 = null;
var G__5118 = (0);
var G__5119 = (0);
seq__5077_5099 = G__5116;
chunk__5078_5100 = G__5117;
count__5079_5101 = G__5118;
i__5080_5102 = G__5119;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_5098);
} else {
cljs.compiler.emitln.call(null,then_5098);
}

cljs.compiler.emitln.call(null,"break;");


var G__5120 = seq__5053_5089;
var G__5121 = chunk__5054_5090;
var G__5122 = count__5055_5091;
var G__5123 = (i__5056_5092 + (1));
seq__5053_5089 = G__5120;
chunk__5054_5090 = G__5121;
count__5055_5091 = G__5122;
i__5056_5092 = G__5123;
continue;
} else {
var temp__5753__auto___5124 = cljs.core.seq.call(null,seq__5053_5089);
if(temp__5753__auto___5124){
var seq__5053_5125__$1 = temp__5753__auto___5124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5053_5125__$1)){
var c__4556__auto___5126 = cljs.core.chunk_first.call(null,seq__5053_5125__$1);
var G__5127 = cljs.core.chunk_rest.call(null,seq__5053_5125__$1);
var G__5128 = c__4556__auto___5126;
var G__5129 = cljs.core.count.call(null,c__4556__auto___5126);
var G__5130 = (0);
seq__5053_5089 = G__5127;
chunk__5054_5090 = G__5128;
count__5055_5091 = G__5129;
i__5056_5092 = G__5130;
continue;
} else {
var map__5081_5131 = cljs.core.first.call(null,seq__5053_5125__$1);
var map__5081_5132__$1 = (((((!((map__5081_5131 == null))))?(((((map__5081_5131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5081_5131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5081_5131):map__5081_5131);
var ts_5133 = cljs.core.get.call(null,map__5081_5132__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__5082_5134 = cljs.core.get.call(null,map__5081_5132__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__5082_5135__$1 = (((((!((map__5082_5134 == null))))?(((((map__5082_5134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5082_5134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5082_5134):map__5082_5134);
var then_5136 = cljs.core.get.call(null,map__5082_5135__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__5085_5137 = cljs.core.seq.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"test","test",577538877),ts_5133));
var chunk__5086_5138 = null;
var count__5087_5139 = (0);
var i__5088_5140 = (0);
while(true){
if((i__5088_5140 < count__5087_5139)){
var test_5141 = cljs.core._nth.call(null,chunk__5086_5138,i__5088_5140);
cljs.compiler.emitln.call(null,"case ",test_5141,":");


var G__5142 = seq__5085_5137;
var G__5143 = chunk__5086_5138;
var G__5144 = count__5087_5139;
var G__5145 = (i__5088_5140 + (1));
seq__5085_5137 = G__5142;
chunk__5086_5138 = G__5143;
count__5087_5139 = G__5144;
i__5088_5140 = G__5145;
continue;
} else {
var temp__5753__auto___5146__$1 = cljs.core.seq.call(null,seq__5085_5137);
if(temp__5753__auto___5146__$1){
var seq__5085_5147__$1 = temp__5753__auto___5146__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5085_5147__$1)){
var c__4556__auto___5148 = cljs.core.chunk_first.call(null,seq__5085_5147__$1);
var G__5149 = cljs.core.chunk_rest.call(null,seq__5085_5147__$1);
var G__5150 = c__4556__auto___5148;
var G__5151 = cljs.core.count.call(null,c__4556__auto___5148);
var G__5152 = (0);
seq__5085_5137 = G__5149;
chunk__5086_5138 = G__5150;
count__5087_5139 = G__5151;
i__5088_5140 = G__5152;
continue;
} else {
var test_5153 = cljs.core.first.call(null,seq__5085_5147__$1);
cljs.compiler.emitln.call(null,"case ",test_5153,":");


var G__5154 = cljs.core.next.call(null,seq__5085_5147__$1);
var G__5155 = null;
var G__5156 = (0);
var G__5157 = (0);
seq__5085_5137 = G__5154;
chunk__5086_5138 = G__5155;
count__5087_5139 = G__5156;
i__5088_5140 = G__5157;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_5136);
} else {
cljs.compiler.emitln.call(null,then_5136);
}

cljs.compiler.emitln.call(null,"break;");


var G__5158 = cljs.core.next.call(null,seq__5053_5125__$1);
var G__5159 = null;
var G__5160 = (0);
var G__5161 = (0);
seq__5053_5089 = G__5158;
chunk__5054_5090 = G__5159;
count__5055_5091 = G__5160;
i__5056_5092 = G__5161;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__5162){
var map__5163 = p__5162;
var map__5163__$1 = (((((!((map__5163 == null))))?(((((map__5163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5163):map__5163);
var throw$ = cljs.core.get.call(null,map__5163__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.call(null,map__5163__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(goog.string.startsWith(t,"!")){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(goog.string.startsWith(t,"{")){
return t;
} else {
if(goog.string.startsWith(t,"function")){
var idx = t.lastIndexOf(":");
var vec__5166 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__5166,(0),null);
var rstr = cljs.core.nth.call(null,vec__5166,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,(function (p1__5165_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__5165_SHARP_);
}),clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__5169 = ["function(",clojure.string.join.call(null,",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__5169,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__5169;
}
} else {
if(goog.string.endsWith(t,"=")){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),"="].join('');
} else {
return cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return ["{",clojure.string.join.call(null,"|",cljs.core.map.call(null,(function (p1__5170_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__5170_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__5171 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__5172 = cljs.core.seq.call(null,vec__5171);
var first__5173 = cljs.core.first.call(null,seq__5172);
var seq__5172__$1 = cljs.core.next.call(null,seq__5172);
var p = first__5173;
var first__5173__$1 = cljs.core.first.call(null,seq__5172__$1);
var seq__5172__$2 = cljs.core.next.call(null,seq__5172__$1);
var ts = first__5173__$1;
var first__5173__$2 = cljs.core.first.call(null,seq__5172__$2);
var seq__5172__$3 = cljs.core.next.call(null,seq__5172__$2);
var n = first__5173__$2;
var xs = seq__5172__$3;
if(cljs.core.truth_(((cljs.core._EQ_.call(null,"@param",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__5174 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__5175 = cljs.core.seq.call(null,vec__5174);
var first__5176 = cljs.core.first.call(null,seq__5175);
var seq__5175__$1 = cljs.core.next.call(null,seq__5175);
var p = first__5176;
var first__5176__$1 = cljs.core.first.call(null,seq__5175__$1);
var seq__5175__$2 = cljs.core.next.call(null,seq__5175__$1);
var ts = first__5176__$1;
var xs = seq__5175__$2;
if(cljs.core.truth_(((cljs.core._EQ_.call(null,"@return",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__5179 = arguments.length;
switch (G__5179) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__5187 = cljs.core.map.call(null,(function (p1__5177_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__5177_SHARP_);
} else {
return p1__5177_SHARP_;
}
}),clojure.string.split_lines.call(null,e));
var seq__5188 = cljs.core.seq.call(null,vec__5187);
var first__5189 = cljs.core.first.call(null,seq__5188);
var seq__5188__$1 = cljs.core.next.call(null,seq__5188);
var x = first__5189;
var ys = seq__5188__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__5190 = cljs.core.seq.call(null,ys);
var chunk__5191 = null;
var count__5192 = (0);
var i__5193 = (0);
while(true){
if((i__5193 < count__5192)){
var next_line = cljs.core._nth.call(null,chunk__5191,i__5193);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__5199 = seq__5190;
var G__5200 = chunk__5191;
var G__5201 = count__5192;
var G__5202 = (i__5193 + (1));
seq__5190 = G__5199;
chunk__5191 = G__5200;
count__5192 = G__5201;
i__5193 = G__5202;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__5190);
if(temp__5753__auto__){
var seq__5190__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5190__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5190__$1);
var G__5203 = cljs.core.chunk_rest.call(null,seq__5190__$1);
var G__5204 = c__4556__auto__;
var G__5205 = cljs.core.count.call(null,c__4556__auto__);
var G__5206 = (0);
seq__5190 = G__5203;
chunk__5191 = G__5204;
count__5192 = G__5205;
i__5193 = G__5206;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__5190__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));


var G__5207 = cljs.core.next.call(null,seq__5190__$1);
var G__5208 = null;
var G__5209 = (0);
var G__5210 = (0);
seq__5190 = G__5207;
chunk__5191 = G__5208;
count__5192 = G__5209;
i__5193 = G__5210;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__5194_5211 = cljs.core.seq.call(null,docs__$2);
var chunk__5195_5212 = null;
var count__5196_5213 = (0);
var i__5197_5214 = (0);
while(true){
if((i__5197_5214 < count__5196_5213)){
var e_5215 = cljs.core._nth.call(null,chunk__5195_5212,i__5197_5214);
if(cljs.core.truth_(e_5215)){
print_comment_lines.call(null,e_5215);
} else {
}


var G__5216 = seq__5194_5211;
var G__5217 = chunk__5195_5212;
var G__5218 = count__5196_5213;
var G__5219 = (i__5197_5214 + (1));
seq__5194_5211 = G__5216;
chunk__5195_5212 = G__5217;
count__5196_5213 = G__5218;
i__5197_5214 = G__5219;
continue;
} else {
var temp__5753__auto___5220 = cljs.core.seq.call(null,seq__5194_5211);
if(temp__5753__auto___5220){
var seq__5194_5221__$1 = temp__5753__auto___5220;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5194_5221__$1)){
var c__4556__auto___5222 = cljs.core.chunk_first.call(null,seq__5194_5221__$1);
var G__5223 = cljs.core.chunk_rest.call(null,seq__5194_5221__$1);
var G__5224 = c__4556__auto___5222;
var G__5225 = cljs.core.count.call(null,c__4556__auto___5222);
var G__5226 = (0);
seq__5194_5211 = G__5223;
chunk__5195_5212 = G__5224;
count__5196_5213 = G__5225;
i__5197_5214 = G__5226;
continue;
} else {
var e_5227 = cljs.core.first.call(null,seq__5194_5221__$1);
if(cljs.core.truth_(e_5227)){
print_comment_lines.call(null,e_5227);
} else {
}


var G__5228 = cljs.core.next.call(null,seq__5194_5221__$1);
var G__5229 = null;
var G__5230 = (0);
var G__5231 = (0);
seq__5194_5211 = G__5228;
chunk__5195_5212 = G__5229;
count__5196_5213 = G__5230;
i__5197_5214 = G__5231;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4115__auto__ = cljs.core.some.call(null,(function (p1__5233_SHARP_){
return goog.string.startsWith(p1__5233_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = opts;
if(cljs.core.truth_(and__4115__auto____$1)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478))){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_.call(null,define)){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return false;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__5234){
var map__5235 = p__5234;
var map__5235__$1 = (((((!((map__5235 == null))))?(((((map__5235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5235):map__5235);
var doc = cljs.core.get.call(null,map__5235__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__5235__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.call(null,map__5235__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.call(null,map__5235__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.call(null,map__5235__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.call(null,map__5235__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__5235__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.call(null,map__5235__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.call(null,map__5235__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.call(null,map__5235__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4126__auto__ = init;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,(cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__5751__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__5751__auto__)){
var define = temp__5751__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return test;
} else {
return and__4115__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__5237){
var map__5238 = p__5237;
var map__5238__$1 = (((((!((map__5238 == null))))?(((((map__5238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5238):map__5238);
var name = cljs.core.get.call(null,map__5238__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__5238__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__5238__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,name)),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__5240_5264 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__5241_5265 = null;
var count__5242_5266 = (0);
var i__5243_5267 = (0);
while(true){
if((i__5243_5267 < count__5242_5266)){
var vec__5250_5268 = cljs.core._nth.call(null,chunk__5241_5265,i__5243_5267);
var i_5269 = cljs.core.nth.call(null,vec__5250_5268,(0),null);
var param_5270 = cljs.core.nth.call(null,vec__5250_5268,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_5270);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__5271 = seq__5240_5264;
var G__5272 = chunk__5241_5265;
var G__5273 = count__5242_5266;
var G__5274 = (i__5243_5267 + (1));
seq__5240_5264 = G__5271;
chunk__5241_5265 = G__5272;
count__5242_5266 = G__5273;
i__5243_5267 = G__5274;
continue;
} else {
var temp__5753__auto___5275 = cljs.core.seq.call(null,seq__5240_5264);
if(temp__5753__auto___5275){
var seq__5240_5276__$1 = temp__5753__auto___5275;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5240_5276__$1)){
var c__4556__auto___5277 = cljs.core.chunk_first.call(null,seq__5240_5276__$1);
var G__5278 = cljs.core.chunk_rest.call(null,seq__5240_5276__$1);
var G__5279 = c__4556__auto___5277;
var G__5280 = cljs.core.count.call(null,c__4556__auto___5277);
var G__5281 = (0);
seq__5240_5264 = G__5278;
chunk__5241_5265 = G__5279;
count__5242_5266 = G__5280;
i__5243_5267 = G__5281;
continue;
} else {
var vec__5253_5282 = cljs.core.first.call(null,seq__5240_5276__$1);
var i_5283 = cljs.core.nth.call(null,vec__5253_5282,(0),null);
var param_5284 = cljs.core.nth.call(null,vec__5253_5282,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_5284);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");


var G__5285 = cljs.core.next.call(null,seq__5240_5276__$1);
var G__5286 = null;
var G__5287 = (0);
var G__5288 = (0);
seq__5240_5264 = G__5285;
chunk__5241_5265 = G__5286;
count__5242_5266 = G__5287;
i__5243_5267 = G__5288;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__5256_5289 = cljs.core.seq.call(null,params);
var chunk__5257_5290 = null;
var count__5258_5291 = (0);
var i__5259_5292 = (0);
while(true){
if((i__5259_5292 < count__5258_5291)){
var param_5293 = cljs.core._nth.call(null,chunk__5257_5290,i__5259_5292);
cljs.compiler.emit.call(null,param_5293);

if(cljs.core._EQ_.call(null,param_5293,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5294 = seq__5256_5289;
var G__5295 = chunk__5257_5290;
var G__5296 = count__5258_5291;
var G__5297 = (i__5259_5292 + (1));
seq__5256_5289 = G__5294;
chunk__5257_5290 = G__5295;
count__5258_5291 = G__5296;
i__5259_5292 = G__5297;
continue;
} else {
var temp__5753__auto___5298 = cljs.core.seq.call(null,seq__5256_5289);
if(temp__5753__auto___5298){
var seq__5256_5299__$1 = temp__5753__auto___5298;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5256_5299__$1)){
var c__4556__auto___5300 = cljs.core.chunk_first.call(null,seq__5256_5299__$1);
var G__5301 = cljs.core.chunk_rest.call(null,seq__5256_5299__$1);
var G__5302 = c__4556__auto___5300;
var G__5303 = cljs.core.count.call(null,c__4556__auto___5300);
var G__5304 = (0);
seq__5256_5289 = G__5301;
chunk__5257_5290 = G__5302;
count__5258_5291 = G__5303;
i__5259_5292 = G__5304;
continue;
} else {
var param_5305 = cljs.core.first.call(null,seq__5256_5299__$1);
cljs.compiler.emit.call(null,param_5305);

if(cljs.core._EQ_.call(null,param_5305,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5306 = cljs.core.next.call(null,seq__5256_5299__$1);
var G__5307 = null;
var G__5308 = (0);
var G__5309 = (0);
seq__5256_5289 = G__5306;
chunk__5257_5290 = G__5307;
count__5258_5291 = G__5308;
i__5259_5292 = G__5309;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__5260_5310 = cljs.core.seq.call(null,params);
var chunk__5261_5311 = null;
var count__5262_5312 = (0);
var i__5263_5313 = (0);
while(true){
if((i__5263_5313 < count__5262_5312)){
var param_5314 = cljs.core._nth.call(null,chunk__5261_5311,i__5263_5313);
cljs.compiler.emit.call(null,param_5314);

if(cljs.core._EQ_.call(null,param_5314,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5315 = seq__5260_5310;
var G__5316 = chunk__5261_5311;
var G__5317 = count__5262_5312;
var G__5318 = (i__5263_5313 + (1));
seq__5260_5310 = G__5315;
chunk__5261_5311 = G__5316;
count__5262_5312 = G__5317;
i__5263_5313 = G__5318;
continue;
} else {
var temp__5753__auto___5319 = cljs.core.seq.call(null,seq__5260_5310);
if(temp__5753__auto___5319){
var seq__5260_5320__$1 = temp__5753__auto___5319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5260_5320__$1)){
var c__4556__auto___5321 = cljs.core.chunk_first.call(null,seq__5260_5320__$1);
var G__5322 = cljs.core.chunk_rest.call(null,seq__5260_5320__$1);
var G__5323 = c__4556__auto___5321;
var G__5324 = cljs.core.count.call(null,c__4556__auto___5321);
var G__5325 = (0);
seq__5260_5310 = G__5322;
chunk__5261_5311 = G__5323;
count__5262_5312 = G__5324;
i__5263_5313 = G__5325;
continue;
} else {
var param_5326 = cljs.core.first.call(null,seq__5260_5320__$1);
cljs.compiler.emit.call(null,param_5326);

if(cljs.core._EQ_.call(null,param_5326,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5327 = cljs.core.next.call(null,seq__5260_5320__$1);
var G__5328 = null;
var G__5329 = (0);
var G__5330 = (0);
seq__5260_5310 = G__5327;
chunk__5261_5311 = G__5328;
count__5262_5312 = G__5329;
i__5263_5313 = G__5330;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__5331 = cljs.core.seq.call(null,params);
var chunk__5332 = null;
var count__5333 = (0);
var i__5334 = (0);
while(true){
if((i__5334 < count__5333)){
var param = cljs.core._nth.call(null,chunk__5332,i__5334);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5335 = seq__5331;
var G__5336 = chunk__5332;
var G__5337 = count__5333;
var G__5338 = (i__5334 + (1));
seq__5331 = G__5335;
chunk__5332 = G__5336;
count__5333 = G__5337;
i__5334 = G__5338;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__5331);
if(temp__5753__auto__){
var seq__5331__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5331__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5331__$1);
var G__5339 = cljs.core.chunk_rest.call(null,seq__5331__$1);
var G__5340 = c__4556__auto__;
var G__5341 = cljs.core.count.call(null,c__4556__auto__);
var G__5342 = (0);
seq__5331 = G__5339;
chunk__5332 = G__5340;
count__5333 = G__5341;
i__5334 = G__5342;
continue;
} else {
var param = cljs.core.first.call(null,seq__5331__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5343 = cljs.core.next.call(null,seq__5331__$1);
var G__5344 = null;
var G__5345 = (0);
var G__5346 = (0);
seq__5331 = G__5343;
chunk__5332 = G__5344;
count__5333 = G__5345;
i__5334 = G__5346;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__5347){
var map__5348 = p__5347;
var map__5348__$1 = (((((!((map__5348 == null))))?(((((map__5348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5348):map__5348);
var expr = cljs.core.get.call(null,map__5348__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.call(null,map__5348__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__5348__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__5348__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__5348__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__5348__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__4788__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__5350){
var map__5351 = p__5350;
var map__5351__$1 = (((((!((map__5351 == null))))?(((((map__5351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5351):map__5351);
var f = map__5351__$1;
var expr = cljs.core.get.call(null,map__5351__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.call(null,map__5351__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.call(null,map__5351__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.call(null,map__5351__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__5351__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__5351__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__5351__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__5351__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__4788__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_5361__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_5362 = cljs.compiler.munge.call(null,name_5361__$1);
var delegate_name_5363 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_5362),"__delegate"].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_5363," = function (");

var seq__5353_5364 = cljs.core.seq.call(null,params);
var chunk__5354_5365 = null;
var count__5355_5366 = (0);
var i__5356_5367 = (0);
while(true){
if((i__5356_5367 < count__5355_5366)){
var param_5368 = cljs.core._nth.call(null,chunk__5354_5365,i__5356_5367);
cljs.compiler.emit.call(null,param_5368);

if(cljs.core._EQ_.call(null,param_5368,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5369 = seq__5353_5364;
var G__5370 = chunk__5354_5365;
var G__5371 = count__5355_5366;
var G__5372 = (i__5356_5367 + (1));
seq__5353_5364 = G__5369;
chunk__5354_5365 = G__5370;
count__5355_5366 = G__5371;
i__5356_5367 = G__5372;
continue;
} else {
var temp__5753__auto___5373 = cljs.core.seq.call(null,seq__5353_5364);
if(temp__5753__auto___5373){
var seq__5353_5374__$1 = temp__5753__auto___5373;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5353_5374__$1)){
var c__4556__auto___5375 = cljs.core.chunk_first.call(null,seq__5353_5374__$1);
var G__5376 = cljs.core.chunk_rest.call(null,seq__5353_5374__$1);
var G__5377 = c__4556__auto___5375;
var G__5378 = cljs.core.count.call(null,c__4556__auto___5375);
var G__5379 = (0);
seq__5353_5364 = G__5376;
chunk__5354_5365 = G__5377;
count__5355_5366 = G__5378;
i__5356_5367 = G__5379;
continue;
} else {
var param_5380 = cljs.core.first.call(null,seq__5353_5374__$1);
cljs.compiler.emit.call(null,param_5380);

if(cljs.core._EQ_.call(null,param_5380,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5381 = cljs.core.next.call(null,seq__5353_5374__$1);
var G__5382 = null;
var G__5383 = (0);
var G__5384 = (0);
seq__5353_5364 = G__5381;
chunk__5354_5365 = G__5382;
count__5355_5366 = G__5383;
i__5356_5367 = G__5384;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_5362," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_5385 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_5385,",0,null);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_5363,".call(this,");

var seq__5357_5386 = cljs.core.seq.call(null,params);
var chunk__5358_5387 = null;
var count__5359_5388 = (0);
var i__5360_5389 = (0);
while(true){
if((i__5360_5389 < count__5359_5388)){
var param_5390 = cljs.core._nth.call(null,chunk__5358_5387,i__5360_5389);
cljs.compiler.emit.call(null,param_5390);

if(cljs.core._EQ_.call(null,param_5390,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5391 = seq__5357_5386;
var G__5392 = chunk__5358_5387;
var G__5393 = count__5359_5388;
var G__5394 = (i__5360_5389 + (1));
seq__5357_5386 = G__5391;
chunk__5358_5387 = G__5392;
count__5359_5388 = G__5393;
i__5360_5389 = G__5394;
continue;
} else {
var temp__5753__auto___5395 = cljs.core.seq.call(null,seq__5357_5386);
if(temp__5753__auto___5395){
var seq__5357_5396__$1 = temp__5753__auto___5395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5357_5396__$1)){
var c__4556__auto___5397 = cljs.core.chunk_first.call(null,seq__5357_5396__$1);
var G__5398 = cljs.core.chunk_rest.call(null,seq__5357_5396__$1);
var G__5399 = c__4556__auto___5397;
var G__5400 = cljs.core.count.call(null,c__4556__auto___5397);
var G__5401 = (0);
seq__5357_5386 = G__5398;
chunk__5358_5387 = G__5399;
count__5359_5388 = G__5400;
i__5360_5389 = G__5401;
continue;
} else {
var param_5402 = cljs.core.first.call(null,seq__5357_5396__$1);
cljs.compiler.emit.call(null,param_5402);

if(cljs.core._EQ_.call(null,param_5402,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}


var G__5403 = cljs.core.next.call(null,seq__5357_5396__$1);
var G__5404 = null;
var G__5405 = (0);
var G__5406 = (0);
seq__5357_5386 = G__5403;
chunk__5358_5387 = G__5404;
count__5359_5388 = G__5405;
i__5360_5389 = G__5406;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_5362,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_5362,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_5361__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_5362,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_5363,";");

cljs.compiler.emitln.call(null,"return ",mname_5362,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__5410){
var map__5411 = p__5410;
var map__5411__$1 = (((((!((map__5411 == null))))?(((((map__5411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5411):map__5411);
var variadic = cljs.core.get.call(null,map__5411__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.call(null,map__5411__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__5411__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__5411__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__5411__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.call(null,map__5411__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.call(null,map__5411__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.call(null,map__5411__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,(function (p1__5407_SHARP_){
var and__4115__auto__ = p1__5407_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__5407_SHARP_));
} else {
return and__4115__auto__;
}
}),recur_frames));
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,recur_params,(cljs.core.truth_((function (){var or__4126__auto__ = in_loop;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.seq.call(null,recur_params);
}
})())?cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets):null))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_5464__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_5465 = cljs.compiler.munge.call(null,name_5464__$1);
var maxparams_5466 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_5467 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_5465),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_5468 = cljs.core.sort_by.call(null,(function (p1__5408_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__5408_SHARP_)));
}),cljs.core.seq.call(null,mmap_5467));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_5465," = null;");

var seq__5413_5469 = cljs.core.seq.call(null,ms_5468);
var chunk__5414_5470 = null;
var count__5415_5471 = (0);
var i__5416_5472 = (0);
while(true){
if((i__5416_5472 < count__5415_5471)){
var vec__5423_5473 = cljs.core._nth.call(null,chunk__5414_5470,i__5416_5472);
var n_5474 = cljs.core.nth.call(null,vec__5423_5473,(0),null);
var meth_5475 = cljs.core.nth.call(null,vec__5423_5473,(1),null);
cljs.compiler.emits.call(null,"var ",n_5474," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_5475))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_5475);
} else {
cljs.compiler.emit_fn_method.call(null,meth_5475);
}

cljs.compiler.emitln.call(null,";");


var G__5476 = seq__5413_5469;
var G__5477 = chunk__5414_5470;
var G__5478 = count__5415_5471;
var G__5479 = (i__5416_5472 + (1));
seq__5413_5469 = G__5476;
chunk__5414_5470 = G__5477;
count__5415_5471 = G__5478;
i__5416_5472 = G__5479;
continue;
} else {
var temp__5753__auto___5480 = cljs.core.seq.call(null,seq__5413_5469);
if(temp__5753__auto___5480){
var seq__5413_5481__$1 = temp__5753__auto___5480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5413_5481__$1)){
var c__4556__auto___5482 = cljs.core.chunk_first.call(null,seq__5413_5481__$1);
var G__5483 = cljs.core.chunk_rest.call(null,seq__5413_5481__$1);
var G__5484 = c__4556__auto___5482;
var G__5485 = cljs.core.count.call(null,c__4556__auto___5482);
var G__5486 = (0);
seq__5413_5469 = G__5483;
chunk__5414_5470 = G__5484;
count__5415_5471 = G__5485;
i__5416_5472 = G__5486;
continue;
} else {
var vec__5426_5487 = cljs.core.first.call(null,seq__5413_5481__$1);
var n_5488 = cljs.core.nth.call(null,vec__5426_5487,(0),null);
var meth_5489 = cljs.core.nth.call(null,vec__5426_5487,(1),null);
cljs.compiler.emits.call(null,"var ",n_5488," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_5489))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_5489);
} else {
cljs.compiler.emit_fn_method.call(null,meth_5489);
}

cljs.compiler.emitln.call(null,";");


var G__5490 = cljs.core.next.call(null,seq__5413_5481__$1);
var G__5491 = null;
var G__5492 = (0);
var G__5493 = (0);
seq__5413_5469 = G__5490;
chunk__5414_5470 = G__5491;
count__5415_5471 = G__5492;
i__5416_5472 = G__5493;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_5465," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_5466),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_5466)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_5466));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__5429_5494 = cljs.core.seq.call(null,ms_5468);
var chunk__5430_5495 = null;
var count__5431_5496 = (0);
var i__5432_5497 = (0);
while(true){
if((i__5432_5497 < count__5431_5496)){
var vec__5439_5498 = cljs.core._nth.call(null,chunk__5430_5495,i__5432_5497);
var n_5499 = cljs.core.nth.call(null,vec__5439_5498,(0),null);
var meth_5500 = cljs.core.nth.call(null,vec__5439_5498,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_5500))){
cljs.compiler.emitln.call(null,"default:");

var restarg_5501 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_5501," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_5502 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_5501," = new cljs.core.IndexedSeq(",a_5502,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_5499,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_5466)),(((cljs.core.count.call(null,maxparams_5466) > (1)))?", ":null),restarg_5501,");");
} else {
var pcnt_5503 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_5500));
cljs.compiler.emitln.call(null,"case ",pcnt_5503,":");

cljs.compiler.emitln.call(null,"return ",n_5499,".call(this",(((pcnt_5503 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_5503,maxparams_5466)),null,(1),null)),(2),null))),");");
}


var G__5504 = seq__5429_5494;
var G__5505 = chunk__5430_5495;
var G__5506 = count__5431_5496;
var G__5507 = (i__5432_5497 + (1));
seq__5429_5494 = G__5504;
chunk__5430_5495 = G__5505;
count__5431_5496 = G__5506;
i__5432_5497 = G__5507;
continue;
} else {
var temp__5753__auto___5508 = cljs.core.seq.call(null,seq__5429_5494);
if(temp__5753__auto___5508){
var seq__5429_5509__$1 = temp__5753__auto___5508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5429_5509__$1)){
var c__4556__auto___5510 = cljs.core.chunk_first.call(null,seq__5429_5509__$1);
var G__5511 = cljs.core.chunk_rest.call(null,seq__5429_5509__$1);
var G__5512 = c__4556__auto___5510;
var G__5513 = cljs.core.count.call(null,c__4556__auto___5510);
var G__5514 = (0);
seq__5429_5494 = G__5511;
chunk__5430_5495 = G__5512;
count__5431_5496 = G__5513;
i__5432_5497 = G__5514;
continue;
} else {
var vec__5442_5515 = cljs.core.first.call(null,seq__5429_5509__$1);
var n_5516 = cljs.core.nth.call(null,vec__5442_5515,(0),null);
var meth_5517 = cljs.core.nth.call(null,vec__5442_5515,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_5517))){
cljs.compiler.emitln.call(null,"default:");

var restarg_5518 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_5518," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_5519 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_5518," = new cljs.core.IndexedSeq(",a_5519,",0,null);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_5516,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_5466)),(((cljs.core.count.call(null,maxparams_5466) > (1)))?", ":null),restarg_5518,");");
} else {
var pcnt_5520 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_5517));
cljs.compiler.emitln.call(null,"case ",pcnt_5520,":");

cljs.compiler.emitln.call(null,"return ",n_5516,".call(this",(((pcnt_5520 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_5520,maxparams_5466)),null,(1),null)),(2),null))),");");
}


var G__5521 = cljs.core.next.call(null,seq__5429_5509__$1);
var G__5522 = null;
var G__5523 = (0);
var G__5524 = (0);
seq__5429_5494 = G__5521;
chunk__5430_5495 = G__5522;
count__5431_5496 = G__5523;
i__5432_5497 = G__5524;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

var arg_count_js_5525 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,cljs.core.first.call(null,ms_5468)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + ",arg_count_js_5525,"));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_5465,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_5465,".cljs$lang$applyTo = ",cljs.core.some.call(null,(function (p1__5409_SHARP_){
var vec__5445 = p1__5409_SHARP_;
var n = cljs.core.nth.call(null,vec__5445,(0),null);
var m = cljs.core.nth.call(null,vec__5445,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_5468),".cljs$lang$applyTo;");
} else {
}

var seq__5448_5526 = cljs.core.seq.call(null,ms_5468);
var chunk__5449_5527 = null;
var count__5450_5528 = (0);
var i__5451_5529 = (0);
while(true){
if((i__5451_5529 < count__5450_5528)){
var vec__5458_5530 = cljs.core._nth.call(null,chunk__5449_5527,i__5451_5529);
var n_5531 = cljs.core.nth.call(null,vec__5458_5530,(0),null);
var meth_5532 = cljs.core.nth.call(null,vec__5458_5530,(1),null);
var c_5533 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_5532));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_5532))){
cljs.compiler.emitln.call(null,mname_5465,".cljs$core$IFn$_invoke$arity$variadic = ",n_5531,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_5465,".cljs$core$IFn$_invoke$arity$",c_5533," = ",n_5531,";");
}


var G__5534 = seq__5448_5526;
var G__5535 = chunk__5449_5527;
var G__5536 = count__5450_5528;
var G__5537 = (i__5451_5529 + (1));
seq__5448_5526 = G__5534;
chunk__5449_5527 = G__5535;
count__5450_5528 = G__5536;
i__5451_5529 = G__5537;
continue;
} else {
var temp__5753__auto___5538 = cljs.core.seq.call(null,seq__5448_5526);
if(temp__5753__auto___5538){
var seq__5448_5539__$1 = temp__5753__auto___5538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5448_5539__$1)){
var c__4556__auto___5540 = cljs.core.chunk_first.call(null,seq__5448_5539__$1);
var G__5541 = cljs.core.chunk_rest.call(null,seq__5448_5539__$1);
var G__5542 = c__4556__auto___5540;
var G__5543 = cljs.core.count.call(null,c__4556__auto___5540);
var G__5544 = (0);
seq__5448_5526 = G__5541;
chunk__5449_5527 = G__5542;
count__5450_5528 = G__5543;
i__5451_5529 = G__5544;
continue;
} else {
var vec__5461_5545 = cljs.core.first.call(null,seq__5448_5539__$1);
var n_5546 = cljs.core.nth.call(null,vec__5461_5545,(0),null);
var meth_5547 = cljs.core.nth.call(null,vec__5461_5545,(1),null);
var c_5548 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_5547));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_5547))){
cljs.compiler.emitln.call(null,mname_5465,".cljs$core$IFn$_invoke$arity$variadic = ",n_5546,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_5465,".cljs$core$IFn$_invoke$arity$",c_5548," = ",n_5546,";");
}


var G__5549 = cljs.core.next.call(null,seq__5448_5539__$1);
var G__5550 = null;
var G__5551 = (0);
var G__5552 = (0);
seq__5448_5526 = G__5549;
chunk__5449_5527 = G__5550;
count__5450_5528 = G__5551;
i__5451_5529 = G__5552;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_5465,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__5553){
var map__5554 = p__5553;
var map__5554__$1 = (((((!((map__5554 == null))))?(((((map__5554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5554):map__5554);
var statements = cljs.core.get.call(null,map__5554__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__5554__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__5554__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__5556_5560 = cljs.core.seq.call(null,statements);
var chunk__5557_5561 = null;
var count__5558_5562 = (0);
var i__5559_5563 = (0);
while(true){
if((i__5559_5563 < count__5558_5562)){
var s_5564 = cljs.core._nth.call(null,chunk__5557_5561,i__5559_5563);
cljs.compiler.emitln.call(null,s_5564);


var G__5565 = seq__5556_5560;
var G__5566 = chunk__5557_5561;
var G__5567 = count__5558_5562;
var G__5568 = (i__5559_5563 + (1));
seq__5556_5560 = G__5565;
chunk__5557_5561 = G__5566;
count__5558_5562 = G__5567;
i__5559_5563 = G__5568;
continue;
} else {
var temp__5753__auto___5569 = cljs.core.seq.call(null,seq__5556_5560);
if(temp__5753__auto___5569){
var seq__5556_5570__$1 = temp__5753__auto___5569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5556_5570__$1)){
var c__4556__auto___5571 = cljs.core.chunk_first.call(null,seq__5556_5570__$1);
var G__5572 = cljs.core.chunk_rest.call(null,seq__5556_5570__$1);
var G__5573 = c__4556__auto___5571;
var G__5574 = cljs.core.count.call(null,c__4556__auto___5571);
var G__5575 = (0);
seq__5556_5560 = G__5572;
chunk__5557_5561 = G__5573;
count__5558_5562 = G__5574;
i__5559_5563 = G__5575;
continue;
} else {
var s_5576 = cljs.core.first.call(null,seq__5556_5570__$1);
cljs.compiler.emitln.call(null,s_5576);


var G__5577 = cljs.core.next.call(null,seq__5556_5570__$1);
var G__5578 = null;
var G__5579 = (0);
var G__5580 = (0);
seq__5556_5560 = G__5577;
chunk__5557_5561 = G__5578;
count__5558_5562 = G__5579;
i__5559_5563 = G__5580;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(((cljs.core.seq.call(null,statements)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__5581){
var map__5582 = p__5581;
var map__5582__$1 = (((((!((map__5582 == null))))?(((((map__5582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5582):map__5582);
var try$ = cljs.core.get.call(null,map__5582__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.call(null,map__5582__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.call(null,map__5582__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__5582__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__5582__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote.call(null,finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__5584,is_loop){
var map__5585 = p__5584;
var map__5585__$1 = (((((!((map__5585 == null))))?(((((map__5585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5585):map__5585);
var expr = cljs.core.get.call(null,map__5585__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__5585__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__5585__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__5587_5601 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__5588_5602 = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,(function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__5588_5602);

try{var seq__5589_5603 = cljs.core.seq.call(null,bindings);
var chunk__5590_5604 = null;
var count__5591_5605 = (0);
var i__5592_5606 = (0);
while(true){
if((i__5592_5606 < count__5591_5605)){
var map__5597_5607 = cljs.core._nth.call(null,chunk__5590_5604,i__5592_5606);
var map__5597_5608__$1 = (((((!((map__5597_5607 == null))))?(((((map__5597_5607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5597_5607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5597_5607):map__5597_5607);
var binding_5609 = map__5597_5608__$1;
var init_5610 = cljs.core.get.call(null,map__5597_5608__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_5609);

cljs.compiler.emitln.call(null," = ",init_5610,";");


var G__5611 = seq__5589_5603;
var G__5612 = chunk__5590_5604;
var G__5613 = count__5591_5605;
var G__5614 = (i__5592_5606 + (1));
seq__5589_5603 = G__5611;
chunk__5590_5604 = G__5612;
count__5591_5605 = G__5613;
i__5592_5606 = G__5614;
continue;
} else {
var temp__5753__auto___5615 = cljs.core.seq.call(null,seq__5589_5603);
if(temp__5753__auto___5615){
var seq__5589_5616__$1 = temp__5753__auto___5615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5589_5616__$1)){
var c__4556__auto___5617 = cljs.core.chunk_first.call(null,seq__5589_5616__$1);
var G__5618 = cljs.core.chunk_rest.call(null,seq__5589_5616__$1);
var G__5619 = c__4556__auto___5617;
var G__5620 = cljs.core.count.call(null,c__4556__auto___5617);
var G__5621 = (0);
seq__5589_5603 = G__5618;
chunk__5590_5604 = G__5619;
count__5591_5605 = G__5620;
i__5592_5606 = G__5621;
continue;
} else {
var map__5599_5622 = cljs.core.first.call(null,seq__5589_5616__$1);
var map__5599_5623__$1 = (((((!((map__5599_5622 == null))))?(((((map__5599_5622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5599_5622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5599_5622):map__5599_5622);
var binding_5624 = map__5599_5623__$1;
var init_5625 = cljs.core.get.call(null,map__5599_5623__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_5624);

cljs.compiler.emitln.call(null," = ",init_5625,";");


var G__5626 = cljs.core.next.call(null,seq__5589_5616__$1);
var G__5627 = null;
var G__5628 = (0);
var G__5629 = (0);
seq__5589_5603 = G__5626;
chunk__5590_5604 = G__5627;
count__5591_5605 = G__5628;
i__5592_5606 = G__5629;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__5587_5601);
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__5630){
var map__5631 = p__5630;
var map__5631__$1 = (((((!((map__5631 == null))))?(((((map__5631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5631):map__5631);
var frame = cljs.core.get.call(null,map__5631__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__5631__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__5631__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___5633 = cljs.core.count.call(null,exprs);
var i_5634 = (0);
while(true){
if((i_5634 < n__4613__auto___5633)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_5634)," = ",exprs.call(null,i_5634),";");

var G__5635 = (i_5634 + (1));
i_5634 = G__5635;
continue;
} else {
}
break;
}

var n__4613__auto___5636 = cljs.core.count.call(null,exprs);
var i_5637 = (0);
while(true){
if((i_5637 < n__4613__auto___5636)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_5637))," = ",temps.call(null,i_5637),";");

var G__5638 = (i_5637 + (1));
i_5637 = G__5638;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__5639){
var map__5640 = p__5639;
var map__5640__$1 = (((((!((map__5640 == null))))?(((((map__5640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5640):map__5640);
var expr = cljs.core.get.call(null,map__5640__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.call(null,map__5640__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.call(null,map__5640__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__5642_5654 = cljs.core.seq.call(null,bindings);
var chunk__5643_5655 = null;
var count__5644_5656 = (0);
var i__5645_5657 = (0);
while(true){
if((i__5645_5657 < count__5644_5656)){
var map__5650_5658 = cljs.core._nth.call(null,chunk__5643_5655,i__5645_5657);
var map__5650_5659__$1 = (((((!((map__5650_5658 == null))))?(((((map__5650_5658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5650_5658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5650_5658):map__5650_5658);
var binding_5660 = map__5650_5659__$1;
var init_5661 = cljs.core.get.call(null,map__5650_5659__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_5660)," = ",init_5661,";");


var G__5662 = seq__5642_5654;
var G__5663 = chunk__5643_5655;
var G__5664 = count__5644_5656;
var G__5665 = (i__5645_5657 + (1));
seq__5642_5654 = G__5662;
chunk__5643_5655 = G__5663;
count__5644_5656 = G__5664;
i__5645_5657 = G__5665;
continue;
} else {
var temp__5753__auto___5666 = cljs.core.seq.call(null,seq__5642_5654);
if(temp__5753__auto___5666){
var seq__5642_5667__$1 = temp__5753__auto___5666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5642_5667__$1)){
var c__4556__auto___5668 = cljs.core.chunk_first.call(null,seq__5642_5667__$1);
var G__5669 = cljs.core.chunk_rest.call(null,seq__5642_5667__$1);
var G__5670 = c__4556__auto___5668;
var G__5671 = cljs.core.count.call(null,c__4556__auto___5668);
var G__5672 = (0);
seq__5642_5654 = G__5669;
chunk__5643_5655 = G__5670;
count__5644_5656 = G__5671;
i__5645_5657 = G__5672;
continue;
} else {
var map__5652_5673 = cljs.core.first.call(null,seq__5642_5667__$1);
var map__5652_5674__$1 = (((((!((map__5652_5673 == null))))?(((((map__5652_5673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5652_5673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5652_5673):map__5652_5673);
var binding_5675 = map__5652_5674__$1;
var init_5676 = cljs.core.get.call(null,map__5652_5674__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_5675)," = ",init_5676,";");


var G__5677 = cljs.core.next.call(null,seq__5642_5667__$1);
var G__5678 = null;
var G__5679 = (0);
var G__5680 = (0);
seq__5642_5654 = G__5677;
chunk__5643_5655 = G__5678;
count__5644_5656 = G__5679;
i__5645_5657 = G__5680;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__5683){
var map__5684 = p__5683;
var map__5684__$1 = (((((!((map__5684 == null))))?(((((map__5684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5684):map__5684);
var expr = map__5684__$1;
var f = cljs.core.get.call(null,map__5684__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.call(null,map__5684__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__5684__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info))){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return false;
}
} else {
return and__4115__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4115__auto__ = protocol;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = tag;
if(cljs.core.truth_(and__4115__auto____$1)){
var or__4126__auto__ = (function (){var and__4115__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = protocol;
if(cljs.core.truth_(and__4115__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto____$2 = (function (){var or__4126__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4115__auto____$2)){
var or__4126__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
if((!(cljs.core.set_QMARK_.call(null,tag)))){
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null).call(null,tag))){
var temp__5753__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.vary_meta.call(null,tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5753__auto__)){
var ps = temp__5753__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return false;
}
} else {
return false;
}
}
} else {
return and__4115__auto____$2;
}
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null).call(null,first_arg_tag))));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag.call(null,env,f);
var js_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4126__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5753__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5753__auto__)){
var ns_str = temp__5753__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.call(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote.call(null,f);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__5686 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (arity > mfa);
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__5681_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__5681_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__5682_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__5682_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__5686,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__5686,(1),null);
var env__4788__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"(!(",cljs.core.first.call(null,args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.call(null,"((",cljs.core.first.call(null,args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_5689 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_5689,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_5690 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_5690,args)),(((mfa_5690 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_5690,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1));
} else {
return and__4115__auto__;
}
})())){
var fprop_5691 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.call(null,"(",f__$1,fprop_5691," ? ",f__$1,fprop_5691,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,"(",cljs.compiler.comma_sep.call(null,args),"))");
} else {
cljs.compiler.emits.call(null,"(",f__$1,fprop_5691," ? ",f__$1,fprop_5691,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
}
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__5692){
var map__5693 = p__5692;
var map__5693__$1 = (((((!((map__5693 == null))))?(((((map__5693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5693):map__5693);
var ctor = cljs.core.get.call(null,map__5693__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.call(null,map__5693__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__5693__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__4788__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__5695){
var map__5696 = p__5695;
var map__5696__$1 = (((((!((map__5696 == null))))?(((((map__5696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5696):map__5696);
var target = cljs.core.get.call(null,map__5696__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__5696__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__5696__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__4788__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(",target," = ",val,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_global_export.call(null,lib)," = goog.global",cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.call(null,cljs.core.name.call(null,(function (){var or__4126__auto__ = cljs.core.get.call(null,global_exports,cljs.core.symbol.call(null,lib));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,global_exports,cljs.core.name.call(null,lib));
}
})()),/\./))),";");
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__5698 = cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_);
var map__5698__$1 = (((((!((map__5698 == null))))?(((((map__5698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5698):map__5698);
var options = cljs.core.get.call(null,map__5698__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.call(null,map__5698__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__5699 = options;
var map__5699__$1 = (((((!((map__5699 == null))))?(((((map__5699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5699):map__5699);
var target = cljs.core.get.call(null,map__5699__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.call(null,map__5699__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.call(null,map__5699__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__5700 = (function (){var libs__$1 = cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.filter.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,libs)),deps));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__5705 = cljs.core.group_by.call(null,cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__5705__$1 = (((((!((map__5705 == null))))?(((((map__5705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5705):map__5705);
var node_libs = cljs.core.get.call(null,map__5705__$1,true);
var libs_to_load = cljs.core.get.call(null,map__5705__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.call(null,vec__5700,(0),null);
var libs_to_load = cljs.core.nth.call(null,vec__5700,(1),null);
var global_exports_libs = cljs.core.filter.call(null,cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__5707_5727 = cljs.core.seq.call(null,libs_to_load);
var chunk__5708_5728 = null;
var count__5709_5729 = (0);
var i__5710_5730 = (0);
while(true){
if((i__5710_5730 < count__5709_5729)){
var lib_5731 = cljs.core._nth.call(null,chunk__5708_5728,i__5710_5730);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_5731)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_5731),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_5731),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_5731),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_5731),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_5731,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_5731),"');");
}

}
}
}


var G__5732 = seq__5707_5727;
var G__5733 = chunk__5708_5728;
var G__5734 = count__5709_5729;
var G__5735 = (i__5710_5730 + (1));
seq__5707_5727 = G__5732;
chunk__5708_5728 = G__5733;
count__5709_5729 = G__5734;
i__5710_5730 = G__5735;
continue;
} else {
var temp__5753__auto___5736 = cljs.core.seq.call(null,seq__5707_5727);
if(temp__5753__auto___5736){
var seq__5707_5737__$1 = temp__5753__auto___5736;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5707_5737__$1)){
var c__4556__auto___5738 = cljs.core.chunk_first.call(null,seq__5707_5737__$1);
var G__5739 = cljs.core.chunk_rest.call(null,seq__5707_5737__$1);
var G__5740 = c__4556__auto___5738;
var G__5741 = cljs.core.count.call(null,c__4556__auto___5738);
var G__5742 = (0);
seq__5707_5727 = G__5739;
chunk__5708_5728 = G__5740;
count__5709_5729 = G__5741;
i__5710_5730 = G__5742;
continue;
} else {
var lib_5743 = cljs.core.first.call(null,seq__5707_5737__$1);
if(((cljs.analyzer.foreign_dep_QMARK_.call(null,lib_5743)) && ((!(cljs.core.keyword_identical_QMARK_.call(null,optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_5743),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_5743),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_5743),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_5743),"', 'reload-all');");
} else {
if(cljs.core._EQ_.call(null,lib_5743,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_5743),"');");
}

}
}
}


var G__5744 = cljs.core.next.call(null,seq__5707_5737__$1);
var G__5745 = null;
var G__5746 = (0);
var G__5747 = (0);
seq__5707_5727 = G__5744;
chunk__5708_5728 = G__5745;
count__5709_5729 = G__5746;
i__5710_5730 = G__5747;
continue;
}
} else {
}
}
break;
}

var seq__5711_5748 = cljs.core.seq.call(null,node_libs);
var chunk__5712_5749 = null;
var count__5713_5750 = (0);
var i__5714_5751 = (0);
while(true){
if((i__5714_5751 < count__5713_5750)){
var lib_5752 = cljs.core._nth.call(null,chunk__5712_5749,i__5714_5751);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_5752)," = require('",lib_5752,"');");


var G__5753 = seq__5711_5748;
var G__5754 = chunk__5712_5749;
var G__5755 = count__5713_5750;
var G__5756 = (i__5714_5751 + (1));
seq__5711_5748 = G__5753;
chunk__5712_5749 = G__5754;
count__5713_5750 = G__5755;
i__5714_5751 = G__5756;
continue;
} else {
var temp__5753__auto___5757 = cljs.core.seq.call(null,seq__5711_5748);
if(temp__5753__auto___5757){
var seq__5711_5758__$1 = temp__5753__auto___5757;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5711_5758__$1)){
var c__4556__auto___5759 = cljs.core.chunk_first.call(null,seq__5711_5758__$1);
var G__5760 = cljs.core.chunk_rest.call(null,seq__5711_5758__$1);
var G__5761 = c__4556__auto___5759;
var G__5762 = cljs.core.count.call(null,c__4556__auto___5759);
var G__5763 = (0);
seq__5711_5748 = G__5760;
chunk__5712_5749 = G__5761;
count__5713_5750 = G__5762;
i__5714_5751 = G__5763;
continue;
} else {
var lib_5764 = cljs.core.first.call(null,seq__5711_5758__$1);
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,ns_name),".",cljs.analyzer.munge_node_lib.call(null,lib_5764)," = require('",lib_5764,"');");


var G__5765 = cljs.core.next.call(null,seq__5711_5758__$1);
var G__5766 = null;
var G__5767 = (0);
var G__5768 = (0);
seq__5711_5748 = G__5765;
chunk__5712_5749 = G__5766;
count__5713_5750 = G__5767;
i__5714_5751 = G__5768;
continue;
}
} else {
}
}
break;
}

var seq__5715_5769 = cljs.core.seq.call(null,global_exports_libs);
var chunk__5716_5770 = null;
var count__5717_5771 = (0);
var i__5718_5772 = (0);
while(true){
if((i__5718_5772 < count__5717_5771)){
var lib_5773 = cljs.core._nth.call(null,chunk__5716_5770,i__5718_5772);
var map__5723_5774 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_5773));
var map__5723_5775__$1 = (((((!((map__5723_5774 == null))))?(((((map__5723_5774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5723_5774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5723_5774):map__5723_5774);
var global_exports_5776 = cljs.core.get.call(null,map__5723_5775__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_5776,lib_5773);


var G__5777 = seq__5715_5769;
var G__5778 = chunk__5716_5770;
var G__5779 = count__5717_5771;
var G__5780 = (i__5718_5772 + (1));
seq__5715_5769 = G__5777;
chunk__5716_5770 = G__5778;
count__5717_5771 = G__5779;
i__5718_5772 = G__5780;
continue;
} else {
var temp__5753__auto___5781 = cljs.core.seq.call(null,seq__5715_5769);
if(temp__5753__auto___5781){
var seq__5715_5782__$1 = temp__5753__auto___5781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5715_5782__$1)){
var c__4556__auto___5783 = cljs.core.chunk_first.call(null,seq__5715_5782__$1);
var G__5784 = cljs.core.chunk_rest.call(null,seq__5715_5782__$1);
var G__5785 = c__4556__auto___5783;
var G__5786 = cljs.core.count.call(null,c__4556__auto___5783);
var G__5787 = (0);
seq__5715_5769 = G__5784;
chunk__5716_5770 = G__5785;
count__5717_5771 = G__5786;
i__5718_5772 = G__5787;
continue;
} else {
var lib_5788 = cljs.core.first.call(null,seq__5715_5782__$1);
var map__5725_5789 = cljs.core.get.call(null,js_dependency_index,cljs.core.name.call(null,lib_5788));
var map__5725_5790__$1 = (((((!((map__5725_5789 == null))))?(((((map__5725_5789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5725_5789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5725_5789):map__5725_5789);
var global_exports_5791 = cljs.core.get.call(null,map__5725_5790__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export.call(null,ns_name,global_exports_5791,lib_5788);


var G__5792 = cljs.core.next.call(null,seq__5715_5782__$1);
var G__5793 = null;
var G__5794 = (0);
var G__5795 = (0);
seq__5715_5769 = G__5792;
chunk__5716_5770 = G__5793;
count__5717_5771 = G__5794;
i__5718_5772 = G__5795;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__5796){
var map__5797 = p__5796;
var map__5797__$1 = (((((!((map__5797 == null))))?(((((map__5797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5797):map__5797);
var name = cljs.core.get.call(null,map__5797__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__5797__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__5797__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__5797__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__5797__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__5797__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__5797__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"'nil';");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__5799){
var map__5800 = p__5799;
var map__5800__$1 = (((((!((map__5800 == null))))?(((((map__5800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5800):map__5800);
var name = cljs.core.get.call(null,map__5800__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__5800__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__5800__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__5800__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__5800__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__5800__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.call(null,map__5800__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__5802){
var map__5803 = p__5802;
var map__5803__$1 = (((((!((map__5803 == null))))?(((((map__5803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5803):map__5803);
var t = cljs.core.get.call(null,map__5803__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__5803__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__5803__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__5803__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__5803__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__5805_5829 = cljs.core.seq.call(null,protocols);
var chunk__5806_5830 = null;
var count__5807_5831 = (0);
var i__5808_5832 = (0);
while(true){
if((i__5808_5832 < count__5807_5831)){
var protocol_5833 = cljs.core._nth.call(null,chunk__5806_5830,i__5808_5832);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_5833)),"}");


var G__5834 = seq__5805_5829;
var G__5835 = chunk__5806_5830;
var G__5836 = count__5807_5831;
var G__5837 = (i__5808_5832 + (1));
seq__5805_5829 = G__5834;
chunk__5806_5830 = G__5835;
count__5807_5831 = G__5836;
i__5808_5832 = G__5837;
continue;
} else {
var temp__5753__auto___5838 = cljs.core.seq.call(null,seq__5805_5829);
if(temp__5753__auto___5838){
var seq__5805_5839__$1 = temp__5753__auto___5838;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5805_5839__$1)){
var c__4556__auto___5840 = cljs.core.chunk_first.call(null,seq__5805_5839__$1);
var G__5841 = cljs.core.chunk_rest.call(null,seq__5805_5839__$1);
var G__5842 = c__4556__auto___5840;
var G__5843 = cljs.core.count.call(null,c__4556__auto___5840);
var G__5844 = (0);
seq__5805_5829 = G__5841;
chunk__5806_5830 = G__5842;
count__5807_5831 = G__5843;
i__5808_5832 = G__5844;
continue;
} else {
var protocol_5845 = cljs.core.first.call(null,seq__5805_5839__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_5845)),"}");


var G__5846 = cljs.core.next.call(null,seq__5805_5839__$1);
var G__5847 = null;
var G__5848 = (0);
var G__5849 = (0);
seq__5805_5829 = G__5846;
chunk__5806_5830 = G__5847;
count__5807_5831 = G__5848;
i__5808_5832 = G__5849;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__5809_5850 = cljs.core.seq.call(null,fields__$1);
var chunk__5810_5851 = null;
var count__5811_5852 = (0);
var i__5812_5853 = (0);
while(true){
if((i__5812_5853 < count__5811_5852)){
var fld_5854 = cljs.core._nth.call(null,chunk__5810_5851,i__5812_5853);
cljs.compiler.emitln.call(null,"this.",fld_5854," = ",fld_5854,";");


var G__5855 = seq__5809_5850;
var G__5856 = chunk__5810_5851;
var G__5857 = count__5811_5852;
var G__5858 = (i__5812_5853 + (1));
seq__5809_5850 = G__5855;
chunk__5810_5851 = G__5856;
count__5811_5852 = G__5857;
i__5812_5853 = G__5858;
continue;
} else {
var temp__5753__auto___5859 = cljs.core.seq.call(null,seq__5809_5850);
if(temp__5753__auto___5859){
var seq__5809_5860__$1 = temp__5753__auto___5859;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5809_5860__$1)){
var c__4556__auto___5861 = cljs.core.chunk_first.call(null,seq__5809_5860__$1);
var G__5862 = cljs.core.chunk_rest.call(null,seq__5809_5860__$1);
var G__5863 = c__4556__auto___5861;
var G__5864 = cljs.core.count.call(null,c__4556__auto___5861);
var G__5865 = (0);
seq__5809_5850 = G__5862;
chunk__5810_5851 = G__5863;
count__5811_5852 = G__5864;
i__5812_5853 = G__5865;
continue;
} else {
var fld_5866 = cljs.core.first.call(null,seq__5809_5860__$1);
cljs.compiler.emitln.call(null,"this.",fld_5866," = ",fld_5866,";");


var G__5867 = cljs.core.next.call(null,seq__5809_5860__$1);
var G__5868 = null;
var G__5869 = (0);
var G__5870 = (0);
seq__5809_5850 = G__5867;
chunk__5810_5851 = G__5868;
count__5811_5852 = G__5869;
i__5812_5853 = G__5870;
continue;
}
} else {
}
}
break;
}

var seq__5813_5871 = cljs.core.seq.call(null,pmasks);
var chunk__5814_5872 = null;
var count__5815_5873 = (0);
var i__5816_5874 = (0);
while(true){
if((i__5816_5874 < count__5815_5873)){
var vec__5823_5875 = cljs.core._nth.call(null,chunk__5814_5872,i__5816_5874);
var pno_5876 = cljs.core.nth.call(null,vec__5823_5875,(0),null);
var pmask_5877 = cljs.core.nth.call(null,vec__5823_5875,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_5876,"$ = ",pmask_5877,";");


var G__5878 = seq__5813_5871;
var G__5879 = chunk__5814_5872;
var G__5880 = count__5815_5873;
var G__5881 = (i__5816_5874 + (1));
seq__5813_5871 = G__5878;
chunk__5814_5872 = G__5879;
count__5815_5873 = G__5880;
i__5816_5874 = G__5881;
continue;
} else {
var temp__5753__auto___5882 = cljs.core.seq.call(null,seq__5813_5871);
if(temp__5753__auto___5882){
var seq__5813_5883__$1 = temp__5753__auto___5882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5813_5883__$1)){
var c__4556__auto___5884 = cljs.core.chunk_first.call(null,seq__5813_5883__$1);
var G__5885 = cljs.core.chunk_rest.call(null,seq__5813_5883__$1);
var G__5886 = c__4556__auto___5884;
var G__5887 = cljs.core.count.call(null,c__4556__auto___5884);
var G__5888 = (0);
seq__5813_5871 = G__5885;
chunk__5814_5872 = G__5886;
count__5815_5873 = G__5887;
i__5816_5874 = G__5888;
continue;
} else {
var vec__5826_5889 = cljs.core.first.call(null,seq__5813_5883__$1);
var pno_5890 = cljs.core.nth.call(null,vec__5826_5889,(0),null);
var pmask_5891 = cljs.core.nth.call(null,vec__5826_5889,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_5890,"$ = ",pmask_5891,";");


var G__5892 = cljs.core.next.call(null,seq__5813_5883__$1);
var G__5893 = null;
var G__5894 = (0);
var G__5895 = (0);
seq__5813_5871 = G__5892;
chunk__5814_5872 = G__5893;
count__5815_5873 = G__5894;
i__5816_5874 = G__5895;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__5896){
var map__5897 = p__5896;
var map__5897__$1 = (((((!((map__5897 == null))))?(((((map__5897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5897):map__5897);
var t = cljs.core.get.call(null,map__5897__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__5897__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__5897__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__5897__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__5897__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__5899_5923 = cljs.core.seq.call(null,protocols);
var chunk__5900_5924 = null;
var count__5901_5925 = (0);
var i__5902_5926 = (0);
while(true){
if((i__5902_5926 < count__5901_5925)){
var protocol_5927 = cljs.core._nth.call(null,chunk__5900_5924,i__5902_5926);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_5927)),"}");


var G__5928 = seq__5899_5923;
var G__5929 = chunk__5900_5924;
var G__5930 = count__5901_5925;
var G__5931 = (i__5902_5926 + (1));
seq__5899_5923 = G__5928;
chunk__5900_5924 = G__5929;
count__5901_5925 = G__5930;
i__5902_5926 = G__5931;
continue;
} else {
var temp__5753__auto___5932 = cljs.core.seq.call(null,seq__5899_5923);
if(temp__5753__auto___5932){
var seq__5899_5933__$1 = temp__5753__auto___5932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5899_5933__$1)){
var c__4556__auto___5934 = cljs.core.chunk_first.call(null,seq__5899_5933__$1);
var G__5935 = cljs.core.chunk_rest.call(null,seq__5899_5933__$1);
var G__5936 = c__4556__auto___5934;
var G__5937 = cljs.core.count.call(null,c__4556__auto___5934);
var G__5938 = (0);
seq__5899_5923 = G__5935;
chunk__5900_5924 = G__5936;
count__5901_5925 = G__5937;
i__5902_5926 = G__5938;
continue;
} else {
var protocol_5939 = cljs.core.first.call(null,seq__5899_5933__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_5939)),"}");


var G__5940 = cljs.core.next.call(null,seq__5899_5933__$1);
var G__5941 = null;
var G__5942 = (0);
var G__5943 = (0);
seq__5899_5923 = G__5940;
chunk__5900_5924 = G__5941;
count__5901_5925 = G__5942;
i__5902_5926 = G__5943;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__5903_5944 = cljs.core.seq.call(null,fields__$1);
var chunk__5904_5945 = null;
var count__5905_5946 = (0);
var i__5906_5947 = (0);
while(true){
if((i__5906_5947 < count__5905_5946)){
var fld_5948 = cljs.core._nth.call(null,chunk__5904_5945,i__5906_5947);
cljs.compiler.emitln.call(null,"this.",fld_5948," = ",fld_5948,";");


var G__5949 = seq__5903_5944;
var G__5950 = chunk__5904_5945;
var G__5951 = count__5905_5946;
var G__5952 = (i__5906_5947 + (1));
seq__5903_5944 = G__5949;
chunk__5904_5945 = G__5950;
count__5905_5946 = G__5951;
i__5906_5947 = G__5952;
continue;
} else {
var temp__5753__auto___5953 = cljs.core.seq.call(null,seq__5903_5944);
if(temp__5753__auto___5953){
var seq__5903_5954__$1 = temp__5753__auto___5953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5903_5954__$1)){
var c__4556__auto___5955 = cljs.core.chunk_first.call(null,seq__5903_5954__$1);
var G__5956 = cljs.core.chunk_rest.call(null,seq__5903_5954__$1);
var G__5957 = c__4556__auto___5955;
var G__5958 = cljs.core.count.call(null,c__4556__auto___5955);
var G__5959 = (0);
seq__5903_5944 = G__5956;
chunk__5904_5945 = G__5957;
count__5905_5946 = G__5958;
i__5906_5947 = G__5959;
continue;
} else {
var fld_5960 = cljs.core.first.call(null,seq__5903_5954__$1);
cljs.compiler.emitln.call(null,"this.",fld_5960," = ",fld_5960,";");


var G__5961 = cljs.core.next.call(null,seq__5903_5954__$1);
var G__5962 = null;
var G__5963 = (0);
var G__5964 = (0);
seq__5903_5944 = G__5961;
chunk__5904_5945 = G__5962;
count__5905_5946 = G__5963;
i__5906_5947 = G__5964;
continue;
}
} else {
}
}
break;
}

var seq__5907_5965 = cljs.core.seq.call(null,pmasks);
var chunk__5908_5966 = null;
var count__5909_5967 = (0);
var i__5910_5968 = (0);
while(true){
if((i__5910_5968 < count__5909_5967)){
var vec__5917_5969 = cljs.core._nth.call(null,chunk__5908_5966,i__5910_5968);
var pno_5970 = cljs.core.nth.call(null,vec__5917_5969,(0),null);
var pmask_5971 = cljs.core.nth.call(null,vec__5917_5969,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_5970,"$ = ",pmask_5971,";");


var G__5972 = seq__5907_5965;
var G__5973 = chunk__5908_5966;
var G__5974 = count__5909_5967;
var G__5975 = (i__5910_5968 + (1));
seq__5907_5965 = G__5972;
chunk__5908_5966 = G__5973;
count__5909_5967 = G__5974;
i__5910_5968 = G__5975;
continue;
} else {
var temp__5753__auto___5976 = cljs.core.seq.call(null,seq__5907_5965);
if(temp__5753__auto___5976){
var seq__5907_5977__$1 = temp__5753__auto___5976;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5907_5977__$1)){
var c__4556__auto___5978 = cljs.core.chunk_first.call(null,seq__5907_5977__$1);
var G__5979 = cljs.core.chunk_rest.call(null,seq__5907_5977__$1);
var G__5980 = c__4556__auto___5978;
var G__5981 = cljs.core.count.call(null,c__4556__auto___5978);
var G__5982 = (0);
seq__5907_5965 = G__5979;
chunk__5908_5966 = G__5980;
count__5909_5967 = G__5981;
i__5910_5968 = G__5982;
continue;
} else {
var vec__5920_5983 = cljs.core.first.call(null,seq__5907_5977__$1);
var pno_5984 = cljs.core.nth.call(null,vec__5920_5983,(0),null);
var pmask_5985 = cljs.core.nth.call(null,vec__5920_5983,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_5984,"$ = ",pmask_5985,";");


var G__5986 = cljs.core.next.call(null,seq__5907_5977__$1);
var G__5987 = null;
var G__5988 = (0);
var G__5989 = (0);
seq__5907_5965 = G__5986;
chunk__5908_5966 = G__5987;
count__5909_5967 = G__5988;
i__5910_5968 = G__5989;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"});");

return cljs.compiler.emit.call(null,body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__5990){
var map__5991 = p__5990;
var map__5991__$1 = (((((!((map__5991 == null))))?(((((map__5991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5991):map__5991);
var target = cljs.core.get.call(null,map__5991__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__5991__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__5991__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__5991__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__5991__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__4788__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot.call(null,ast);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__5993){
var map__5994 = p__5993;
var map__5994__$1 = (((((!((map__5994 == null))))?(((((map__5994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5994):map__5994);
var op = cljs.core.get.call(null,map__5994__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__5994__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__5994__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__5994__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__5994__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__4788__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__4788__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.call(null,"goog.require('cljs.core');");

var seq__6000 = cljs.core.seq.call(null,table);
var chunk__6001 = null;
var count__6002 = (0);
var i__6003 = (0);
while(true){
if((i__6003 < count__6002)){
var vec__6010 = cljs.core._nth.call(null,chunk__6001,i__6003);
var sym = cljs.core.nth.call(null,vec__6010,(0),null);
var value = cljs.core.nth.call(null,vec__6010,(1),null);
var ns_6016 = cljs.core.namespace.call(null,sym);
var name_6017 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__6018 = seq__6000;
var G__6019 = chunk__6001;
var G__6020 = count__6002;
var G__6021 = (i__6003 + (1));
seq__6000 = G__6018;
chunk__6001 = G__6019;
count__6002 = G__6020;
i__6003 = G__6021;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__6000);
if(temp__5753__auto__){
var seq__6000__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6000__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__6000__$1);
var G__6022 = cljs.core.chunk_rest.call(null,seq__6000__$1);
var G__6023 = c__4556__auto__;
var G__6024 = cljs.core.count.call(null,c__4556__auto__);
var G__6025 = (0);
seq__6000 = G__6022;
chunk__6001 = G__6023;
count__6002 = G__6024;
i__6003 = G__6025;
continue;
} else {
var vec__6013 = cljs.core.first.call(null,seq__6000__$1);
var sym = cljs.core.nth.call(null,vec__6013,(0),null);
var value = cljs.core.nth.call(null,vec__6013,(1),null);
var ns_6026 = cljs.core.namespace.call(null,sym);
var name_6027 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.call(null,";\n");


var G__6028 = cljs.core.next.call(null,seq__6000__$1);
var G__6029 = null;
var G__6030 = (0);
var G__6031 = (0);
seq__6000 = G__6028;
chunk__6001 = G__6029;
count__6002 = G__6030;
i__6003 = G__6031;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__6033 = arguments.length;
switch (G__6033) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.call(null,cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs.call(null):null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq.call(null,cljs.core.keys.call(null,externs));
while(true){
if(ks){
var k_6038 = cljs.core.first.call(null,ks);
var vec__6034_6039 = cljs.core.conj.call(null,prefix,k_6038);
var top_6040 = cljs.core.nth.call(null,vec__6034_6039,(0),null);
var prefix_SINGLEQUOTE__6041 = vec__6034_6039;
if(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_6038)) && ((cljs.core.get_in.call(null,known_externs,prefix_SINGLEQUOTE__6041) == null)))){
if((!(((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,top_level),top_6040)) || (cljs.core.contains_QMARK_.call(null,known_externs,top_6040)))))){
cljs.compiler.emitln.call(null,"var ",clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__6041)),";");

cljs.core.swap_BANG_.call(null,top_level,cljs.core.conj,top_6040);
} else {
cljs.compiler.emitln.call(null,clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.compiler.munge,prefix_SINGLEQUOTE__6041)),";");
}
} else {
}

var m_6042 = cljs.core.get.call(null,externs,k_6038);
if(cljs.core.empty_QMARK_.call(null,m_6042)){
} else {
cljs.compiler.emit_externs.call(null,prefix_SINGLEQUOTE__6041,m_6042,top_level,known_externs);
}

var G__6043 = cljs.core.next.call(null,ks);
ks = G__6043;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=compiler.js.map
