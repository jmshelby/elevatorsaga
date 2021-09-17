// Compiled by ClojureScript 1.10.758 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.load');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');
sci.impl.load.handle_refer_all = (function sci$impl$load$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var referred = cljs.core.cst$kw$refers.cljs$core$IFn$_invoke$arity$1(the_current_ns);
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__11056){
var vec__11057 = p__11056;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11057,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11057,(1),null);
if(cljs.core.truth_((((k instanceof cljs.core.Symbol))?(function (){var and__4115__auto__ = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4115__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),referred,the_loaded_ns);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,cljs.core.cst$kw$refers,referred__$1);
});
sci.impl.load.handle_require_libspec_env = (function sci$impl$load$handle_require_libspec_env(ctx,env,current_ns,the_loaded_ns,lib_name,p__11060){
var map__11061 = p__11060;
var map__11061__$1 = (((((!((map__11061 == null))))?(((((map__11061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11061):map__11061);
var _parsed_libspec = map__11061__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11061__$1,cljs.core.cst$kw$as);
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11061__$1,cljs.core.cst$kw$refer);
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11061__$1,cljs.core.cst$kw$rename);
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11061__$1,cljs.core.cst$kw$exclude);
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11061__$1,cljs.core.cst$kw$only);
var use = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11061__$1,cljs.core.cst$kw$use);
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aliases,as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4126__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4126__auto__ = (function (){var G__11065 = cljs.core.cst$kw$all;
var G__11066 = refer;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__11065,G__11066) : sci.impl.utils.kw_identical_QMARK_.call(null,G__11065,G__11066));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return use;
}
})())?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?(function (){var referred = cljs.core.cst$kw$refers.cljs$core$IFn$_invoke$arity$1(the_current_ns__$1);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_((include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(sym) : include_sym_QMARK_.call(null,sym)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5751__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__11067 = temp__5751__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11067,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11067,(1),null);
return v;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$uberscript.cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
}
})());
} else {
return ns;
}
}),referred,refer);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns__$1,cljs.core.cst$kw$refers,referred__$1);
})():(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use)?sci.impl.load.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,current_ns], null),the_current_ns__$2);
var temp__5753__auto___11072 = (function (){var G__11070 = the_loaded_ns;
var G__11070__$1 = (((G__11070 == null))?null:cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(G__11070));
var G__11070__$2 = (((G__11070__$1 == null))?null:cljs.core.meta(G__11070__$1));
if((G__11070__$2 == null)){
return null;
} else {
return cljs.core.cst$kw$sci$impl_SLASH_required_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__11070__$2);
}
})();
if(cljs.core.truth_(temp__5753__auto___11072)){
var on_loaded_11073 = temp__5753__auto___11072;
var G__11071_11074 = cljs.core.PersistentArrayMap.EMPTY;
(on_loaded_11073.cljs$core$IFn$_invoke$arity$1 ? on_loaded_11073.cljs$core$IFn$_invoke$arity$1(G__11071_11074) : on_loaded_11073.call(null,G__11071_11074));
} else {
}

return env__$1;
});
sci.impl.load.add_loaded_lib = (function sci$impl$load$add_loaded_lib(env,lib){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.update,cljs.core.cst$kw$loaded_DASH_libs,(function (loaded_libs){
if((loaded_libs == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([lib]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loaded_libs,lib);
}
}));

return null;
});
sci.impl.load.handle_require_libspec = (function sci$impl$load$handle_require_libspec(ctx,lib,opts){
var map__11075 = opts;
var map__11075__$1 = (((((!((map__11075 == null))))?(((((map__11075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11075):map__11075);
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11075__$1,cljs.core.cst$kw$reload);
var reload_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11075__$1,cljs.core.cst$kw$reload_DASH_all);
var env_STAR_ = cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$namespaces);
var uberscript = cljs.core.cst$kw$uberscript.cljs$core$IFn$_invoke$arity$1(ctx);
var reload_STAR_ = (function (){var or__4126__auto__ = reload;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = reload_all;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = cljs.core.cst$kw$reload_DASH_all.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return uberscript;
}
}
}
})();
var temp__5751__auto___11082 = (cljs.core.truth_(reload_STAR_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib));
if(cljs.core.truth_(temp__5751__auto___11082)){
var the_loaded_ns_11083 = temp__5751__auto___11082;
var loading_11084 = cljs.core.cst$kw$loading.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_((function (){var and__4115__auto__ = loading_11084;
if(cljs.core.truth_(and__4115__auto__)){
return (((!(cljs.core.contains_QMARK_(cljs.core.cst$kw$loaded_DASH_libs.cljs$core$IFn$_invoke$arity$1(env),lib)))) && (cljs.core.nat_int_QMARK_(loading_11084.indexOf(lib))));
} else {
return and__4115__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((function (){var lib_emphasized = ["[ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)," ]"].join('');
var loading__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading_11084,lib);
var loading__$2 = cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([lib,lib_emphasized]),loading__$1);
return ["Cyclic load dependency: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("->",loading__$2)].join('');
})(),lib);
} else {
cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns_11083,lib,opts));
}
} else {
var temp__5751__auto___11085__$1 = cljs.core.cst$kw$load_DASH_fn.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5751__auto___11085__$1)){
var load_fn_11086 = temp__5751__auto___11085__$1;
var temp__5751__auto___11087__$2 = (function (){var G__11077 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$namespace,lib,cljs.core.cst$kw$reload,(function (){var or__4126__auto__ = reload;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return reload_all;
}
})()], null);
return (load_fn_11086.cljs$core$IFn$_invoke$arity$1 ? load_fn_11086.cljs$core$IFn$_invoke$arity$1(G__11077) : load_fn_11086.call(null,G__11077));
})();
if(cljs.core.truth_(temp__5751__auto___11087__$2)){
var map__11078_11088 = temp__5751__auto___11087__$2;
var map__11078_11089__$1 = (((((!((map__11078_11088 == null))))?(((((map__11078_11088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11078_11088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11078_11088):map__11078_11088);
var file_11090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11078_11089__$1,cljs.core.cst$kw$file);
var source_11091 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11078_11089__$1,cljs.core.cst$kw$source);
var ctx_11092__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$bindings,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$reload_DASH_all,reload_all),cljs.core.cst$kw$loading,(function (loading){
if((loading == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(loading,lib);
}
}));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file_11090]));

try{var fexpr__11081_11093 = cljs.core.deref(sci.impl.utils.eval_string_STAR_);
(fexpr__11081_11093.cljs$core$IFn$_invoke$arity$2 ? fexpr__11081_11093.cljs$core$IFn$_invoke$arity$2(ctx_11092__$1,source_11091) : fexpr__11081_11093.call(null,ctx_11092__$1,source_11091));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e11080){if((e11080 instanceof Error)){
var e_11094 = e11080;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,cljs.core.cst$kw$namespaces,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib], 0));

throw e_11094;
} else {
throw e11080;

}
}
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,cljs.core.cst$kw$namespaces);
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib);
return sci.impl.load.handle_require_libspec_env(ctx,env__$1,cnn,the_loaded_ns,lib,opts);
}));
} else {
var or__4126__auto___11095 = (cljs.core.truth_(reload_STAR_)?(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib);
if(cljs.core.truth_(temp__5753__auto__)){
var the_loaded_ns = temp__5753__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.load.handle_require_libspec_env(ctx,env,cnn,the_loaded_ns,lib,opts));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4126__auto___11095)){
} else {
throw (new Error(["Could not find namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}
} else {
throw (new Error(["Could not find namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib),"."].join('')));
}
}

sci.impl.load.add_loaded_lib(env_STAR_,lib);

return null;
});
sci.impl.load.load_lib = (function sci$impl$load$load_lib(var_args){
var args__4742__auto__ = [];
var len__4736__auto___11100 = arguments.length;
var i__4737__auto___11101 = (0);
while(true){
if((i__4737__auto___11101 < len__4736__auto___11100)){
args__4742__auto__.push((arguments[i__4737__auto___11101]));

var G__11102 = (i__4737__auto___11101 + (1));
i__4737__auto___11101 = G__11102;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(sci.impl.load.load_lib.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,prefix,lib,options){
if(cljs.core.truth_((function (){var and__4115__auto__ = prefix;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core.name(lib).indexOf(".") > (0));
} else {
return and__4115__auto__;
}
})())){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Found lib name '",cljs.core.name(lib),"' containing period with prefix '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),"'.  lib names inside prefix lists must not contain periods"].join(''),lib);
} else {
}

var lib__$1 = (cljs.core.truth_(prefix)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib)].join('')):lib);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);
return sci.impl.load.handle_require_libspec(ctx,lib__$1,opts);
}));

(sci.impl.load.load_lib.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.impl.load.load_lib.cljs$lang$applyTo = (function (seq11096){
var G__11097 = cljs.core.first(seq11096);
var seq11096__$1 = cljs.core.next(seq11096);
var G__11098 = cljs.core.first(seq11096__$1);
var seq11096__$2 = cljs.core.next(seq11096__$1);
var G__11099 = cljs.core.first(seq11096__$2);
var seq11096__$3 = cljs.core.next(seq11096__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11097,G__11098,G__11099,seq11096__$3);
}));

/**
 * Prepends a symbol or a seq to coll
 */
sci.impl.load.prependss = (function sci$impl$load$prependss(x,coll){
if((x instanceof cljs.core.Symbol)){
return cljs.core.cons(x,coll);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,coll);
}
});
/**
 * Returns true if x is a libspec
 */
sci.impl.load.libspec_QMARK_ = (function sci$impl$load$libspec_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) || (((cljs.core.vector_QMARK_(x)) && ((((cljs.core.second(x) == null)) || ((cljs.core.second(x) instanceof cljs.core.Keyword)))))));
});
/**
 * Loads libs, evaling libspecs, prefix lists, and flags for
 *   forwarding to load-lib
 */
sci.impl.load.load_libs = (function sci$impl$load$load_libs(ctx,kw,args){
var args_STAR_ = cljs.core.cons(kw,args);
var flags = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,args_STAR_);
var opts = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
var args_STAR___$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.keyword_QMARK_),args_STAR_);
var supported_11135 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$use,null,cljs.core.cst$kw$as,null,cljs.core.cst$kw$require,null,cljs.core.cst$kw$verbose,null,cljs.core.cst$kw$reload,null,cljs.core.cst$kw$reload_DASH_all,null,cljs.core.cst$kw$refer,null], null), null);
var unsupported_11136 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(supported_11135,flags));
if(unsupported_11136){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Unsupported option(s) supplied: ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",unsupported_11136)),args);
} else {
}

if(cljs.core.seq(args_STAR___$1)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("Nothing specified to load",args);
}

var seq__11103 = cljs.core.seq(args_STAR___$1);
var chunk__11104 = null;
var count__11105 = (0);
var i__11106 = (0);
while(true){
if((i__11106 < count__11105)){
var arg = chunk__11104.cljs$core$IIndexed$_nth$arity$2(null,i__11106);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__11121_11137 = arg;
var seq__11122_11138 = cljs.core.seq(vec__11121_11137);
var first__11123_11139 = cljs.core.first(seq__11122_11138);
var seq__11122_11140__$1 = cljs.core.next(seq__11122_11138);
var prefix_11141 = first__11123_11139;
var args_STAR__11142__$2 = seq__11122_11140__$1;
if((prefix_11141 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__11124_11143 = cljs.core.seq(args_STAR__11142__$2);
var chunk__11125_11144 = null;
var count__11126_11145 = (0);
var i__11127_11146 = (0);
while(true){
if((i__11127_11146 < count__11126_11145)){
var arg_11147__$1 = chunk__11125_11144.cljs$core$IIndexed$_nth$arity$2(null,i__11127_11146);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_11141,sci.impl.load.prependss(arg_11147__$1,opts));


var G__11148 = seq__11124_11143;
var G__11149 = chunk__11125_11144;
var G__11150 = count__11126_11145;
var G__11151 = (i__11127_11146 + (1));
seq__11124_11143 = G__11148;
chunk__11125_11144 = G__11149;
count__11126_11145 = G__11150;
i__11127_11146 = G__11151;
continue;
} else {
var temp__5753__auto___11152 = cljs.core.seq(seq__11124_11143);
if(temp__5753__auto___11152){
var seq__11124_11153__$1 = temp__5753__auto___11152;
if(cljs.core.chunked_seq_QMARK_(seq__11124_11153__$1)){
var c__4556__auto___11154 = cljs.core.chunk_first(seq__11124_11153__$1);
var G__11155 = cljs.core.chunk_rest(seq__11124_11153__$1);
var G__11156 = c__4556__auto___11154;
var G__11157 = cljs.core.count(c__4556__auto___11154);
var G__11158 = (0);
seq__11124_11143 = G__11155;
chunk__11125_11144 = G__11156;
count__11126_11145 = G__11157;
i__11127_11146 = G__11158;
continue;
} else {
var arg_11159__$1 = cljs.core.first(seq__11124_11153__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_11141,sci.impl.load.prependss(arg_11159__$1,opts));


var G__11160 = cljs.core.next(seq__11124_11153__$1);
var G__11161 = null;
var G__11162 = (0);
var G__11163 = (0);
seq__11124_11143 = G__11160;
chunk__11125_11144 = G__11161;
count__11126_11145 = G__11162;
i__11127_11146 = G__11163;
continue;
}
} else {
}
}
break;
}
}


var G__11164 = seq__11103;
var G__11165 = chunk__11104;
var G__11166 = count__11105;
var G__11167 = (i__11106 + (1));
seq__11103 = G__11164;
chunk__11104 = G__11165;
count__11105 = G__11166;
i__11106 = G__11167;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__11103);
if(temp__5753__auto__){
var seq__11103__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11103__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__11103__$1);
var G__11168 = cljs.core.chunk_rest(seq__11103__$1);
var G__11169 = c__4556__auto__;
var G__11170 = cljs.core.count(c__4556__auto__);
var G__11171 = (0);
seq__11103 = G__11168;
chunk__11104 = G__11169;
count__11105 = G__11170;
i__11106 = G__11171;
continue;
} else {
var arg = cljs.core.first(seq__11103__$1);
if(sci.impl.load.libspec_QMARK_(arg)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,null,sci.impl.load.prependss(arg,opts));
} else {
var vec__11128_11172 = arg;
var seq__11129_11173 = cljs.core.seq(vec__11128_11172);
var first__11130_11174 = cljs.core.first(seq__11129_11173);
var seq__11129_11175__$1 = cljs.core.next(seq__11129_11173);
var prefix_11176 = first__11130_11174;
var args_STAR__11177__$2 = seq__11129_11175__$1;
if((prefix_11176 == null)){
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2("prefix cannot be nil",args);
} else {
}

var seq__11131_11178 = cljs.core.seq(args_STAR__11177__$2);
var chunk__11132_11179 = null;
var count__11133_11180 = (0);
var i__11134_11181 = (0);
while(true){
if((i__11134_11181 < count__11133_11180)){
var arg_11182__$1 = chunk__11132_11179.cljs$core$IIndexed$_nth$arity$2(null,i__11134_11181);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_11176,sci.impl.load.prependss(arg_11182__$1,opts));


var G__11183 = seq__11131_11178;
var G__11184 = chunk__11132_11179;
var G__11185 = count__11133_11180;
var G__11186 = (i__11134_11181 + (1));
seq__11131_11178 = G__11183;
chunk__11132_11179 = G__11184;
count__11133_11180 = G__11185;
i__11134_11181 = G__11186;
continue;
} else {
var temp__5753__auto___11187__$1 = cljs.core.seq(seq__11131_11178);
if(temp__5753__auto___11187__$1){
var seq__11131_11188__$1 = temp__5753__auto___11187__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11131_11188__$1)){
var c__4556__auto___11189 = cljs.core.chunk_first(seq__11131_11188__$1);
var G__11190 = cljs.core.chunk_rest(seq__11131_11188__$1);
var G__11191 = c__4556__auto___11189;
var G__11192 = cljs.core.count(c__4556__auto___11189);
var G__11193 = (0);
seq__11131_11178 = G__11190;
chunk__11132_11179 = G__11191;
count__11133_11180 = G__11192;
i__11134_11181 = G__11193;
continue;
} else {
var arg_11194__$1 = cljs.core.first(seq__11131_11188__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.load_lib,ctx,prefix_11176,sci.impl.load.prependss(arg_11194__$1,opts));


var G__11195 = cljs.core.next(seq__11131_11188__$1);
var G__11196 = null;
var G__11197 = (0);
var G__11198 = (0);
seq__11131_11178 = G__11195;
chunk__11132_11179 = G__11196;
count__11133_11180 = G__11197;
i__11134_11181 = G__11198;
continue;
}
} else {
}
}
break;
}
}


var G__11199 = cljs.core.next(seq__11103__$1);
var G__11200 = null;
var G__11201 = (0);
var G__11202 = (0);
seq__11103 = G__11199;
chunk__11104 = G__11200;
count__11105 = G__11201;
i__11106 = G__11202;
continue;
}
} else {
return null;
}
}
break;
}
});
sci.impl.load.eval_require = (function sci$impl$load$eval_require(var_args){
var args__4742__auto__ = [];
var len__4736__auto___11205 = arguments.length;
var i__4737__auto___11206 = (0);
while(true){
if((i__4737__auto___11206 < len__4736__auto___11205)){
args__4742__auto__.push((arguments[i__4737__auto___11206]));

var G__11207 = (i__4737__auto___11206 + (1));
i__4737__auto___11206 = G__11207;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.load.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,cljs.core.cst$kw$require,args);
}));

(sci.impl.load.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_require.cljs$lang$applyTo = (function (seq11203){
var G__11204 = cljs.core.first(seq11203);
var seq11203__$1 = cljs.core.next(seq11203);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11204,seq11203__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.load.eval_require);
sci.impl.load.eval_use = (function sci$impl$load$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___11210 = arguments.length;
var i__4737__auto___11211 = (0);
while(true){
if((i__4737__auto___11211 < len__4736__auto___11210)){
args__4742__auto__.push((arguments[i__4737__auto___11211]));

var G__11212 = (i__4737__auto___11211 + (1));
i__4737__auto___11211 = G__11212;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.load.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return sci.impl.load.load_libs(ctx,cljs.core.cst$kw$use,args);
}));

(sci.impl.load.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.load.eval_use.cljs$lang$applyTo = (function (seq11208){
var G__11209 = cljs.core.first(seq11208);
var seq11208__$1 = cljs.core.next(seq11208);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11209,seq11208__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.load.eval_use);
sci.impl.load.eval_refer_clojure = (function sci$impl$load$eval_refer_clojure(ctx,exprs){
var ns_sym = cljs.core.cst$sym$clojure$core;
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__11213 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11213,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11213,(1),null);
var G__11216_11221 = k;
var G__11216_11222__$1 = (((G__11216_11221 instanceof cljs.core.Keyword))?G__11216_11221.fqn:null);
switch (G__11216_11222__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__11216_11221,G__11216_11222__$1,vec__11213,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cnn,cljs.core.cst$kw$refer,ns_sym,cljs.core.cst$kw$exclude], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__11216_11221,G__11216_11222__$1,vec__11213,k,v,ns_sym))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__11216_11221,G__11216_11222__$1,vec__11213,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,ns_sym], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__11216_11221,G__11216_11222__$1,vec__11213,k,v,ns_sym))
);

break;
case "rename":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__11216_11221,G__11216_11222__$1,vec__11213,k,v,ns_sym){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.cst$kw$namespaces.cljs$core$IFn$_invoke$arity$1(env);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,ns_sym], null));
var the_current_ns__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__11216_11221,G__11216_11222__$1,vec__11213,k,v,ns_sym){
return (function (acc,p__11217){
var vec__11218 = p__11217;
var original_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11218,(0),null);
var new_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11218,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$refers,new_name], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(other_ns,original_name)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$refer,ns_sym,cljs.core.cst$kw$exclude], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),original_name);
});})(exprs__$1,cnn,namespaces,the_current_ns,other_ns,G__11216_11221,G__11216_11222__$1,vec__11213,k,v,ns_sym))
,the_current_ns,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cnn], null),the_current_ns__$1);
});})(exprs__$1,G__11216_11221,G__11216_11222__$1,vec__11213,k,v,ns_sym))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11216_11222__$1)].join('')));

}

var G__11224 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__11224;
continue;
} else {
return null;
}
break;
}
});
sci.impl.load.eval_refer_STAR_ = (function sci$impl$load$eval_refer_STAR_(env,ns_sym,filters){

var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.cst$kw$namespaces.cljs$core$IFn$_invoke$arity$1(env);
var ns = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,ns_sym);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw (new Error(["No namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym)].join('')));
}
})();
var fs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,filters);
var public_keys = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(ns));
var rename = (function (){var or__4126__auto__ = cljs.core.cst$kw$rename.cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var exclude = cljs.core.set(cljs.core.cst$kw$exclude.cljs$core$IFn$_invoke$arity$1(fs));
var to_do = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$all,cljs.core.cst$kw$refer.cljs$core$IFn$_invoke$arity$1(fs)))?public_keys:(function (){var or__4126__auto__ = cljs.core.cst$kw$refer.cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.cst$kw$only.cljs$core$IFn$_invoke$arity$1(fs);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return public_keys;
}
}
})());
var _ = (cljs.core.truth_((function (){var and__4115__auto__ = to_do;
if(cljs.core.truth_(and__4115__auto__)){
return (!(cljs.core.sequential_QMARK_(to_do)));
} else {
return and__4115__auto__;
}
})())?(function(){throw (new Error(":only/:refer value must be a sequential collection of symbols"))})():null);
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,cnn);
var referred = cljs.core.cst$kw$refers.cljs$core$IFn$_invoke$arity$1(the_current_ns);
var referred__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (referred__$1,sym){
if(cljs.core.not((exclude.cljs$core$IFn$_invoke$arity$1 ? exclude.cljs$core$IFn$_invoke$arity$1(sym) : exclude.call(null,sym)))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ns,sym);
if(cljs.core.truth_(v)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')
));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(referred__$1,(function (){var or__4126__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sym;
}
})(),v);
} else {
return referred__$1;
}
}),referred,to_do);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,cljs.core.cst$kw$refers,referred__$1);
var namespaces__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(namespaces,cnn,the_current_ns__$1);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.cst$kw$namespaces,namespaces__$1);
return env__$1;
});
/**
 * The function equivalent of :refer is handled differently than what we
 *   did before (this is more like what Clojure itself does.) For
 *   referring clojure.core we still use the old code.
 */
sci.impl.load.eval_refer = (function sci$impl$load$eval_refer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___11228 = arguments.length;
var i__4737__auto___11229 = (0);
while(true){
if((i__4737__auto___11229 < len__4736__auto___11228)){
args__4742__auto__.push((arguments[i__4737__auto___11229]));

var G__11230 = (i__4737__auto___11229 + (1));
i__4737__auto___11229 = G__11230;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.load.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,filters){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$clojure$core,ns_sym)){
sci.impl.load.eval_refer_clojure(ctx,filters);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),sci.impl.load.eval_refer_STAR_,ns_sym,filters);
}

return null;
}));

(sci.impl.load.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.load.eval_refer.cljs$lang$applyTo = (function (seq11225){
var G__11226 = cljs.core.first(seq11225);
var seq11225__$1 = cljs.core.next(seq11225);
var G__11227 = cljs.core.first(seq11225__$1);
var seq11225__$2 = cljs.core.next(seq11225__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11226,G__11227,seq11225__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.load.eval_refer);
