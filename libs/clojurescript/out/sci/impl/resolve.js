// Compiled by ClojureScript 1.10.758 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.resolve');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('sci.impl.evaluator');
goog.require('sci.impl.faster');
goog.require('sci.impl.interop');
goog.require('sci.impl.records');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');
sci.impl.resolve.throw_error_with_location = (function sci$impl$resolve$throw_error_with_location(msg,node){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,node,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phase,"analysis"], null));
});
sci.impl.resolve.mark_resolve_sym = (function sci$impl$resolve$mark_resolve_sym(sym){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(sym,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$sci$impl_SLASH_op,cljs.core.cst$kw$resolve_DASH_sym);
}));
});
sci.impl.resolve.check_permission_BANG_ = (function sci$impl$resolve$check_permission_BANG_(ctx,sym,p__11240){
var vec__11241 = p__11240;
var check_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11241,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11241,(1),null);
var or__4126__auto__ = (sci.impl.utils.allowed_loop === sym);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (sci.impl.utils.allowed_recur === sym);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
var check_sym__$1 = sci.impl.utils.strip_core_ns(check_sym);
var allow = cljs.core.cst$kw$allow.cljs$core$IFn$_invoke$arity$1(ctx);
if((cljs.core.truth_(allow)?((((sci.impl.vars.var_QMARK_(v)) && (cljs.core.not(cljs.core.cst$kw$sci$impl_SLASH_built_DASH_in.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))))) || (cljs.core.contains_QMARK_(allow,check_sym__$1))):true)){
} else {
sci.impl.resolve.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," is not allowed!"].join(''),sym);
}

var deny = cljs.core.cst$kw$deny.cljs$core$IFn$_invoke$arity$1(ctx);
if((cljs.core.truth_(deny)?cljs.core.contains_QMARK_(deny,check_sym__$1):false)){
return sci.impl.resolve.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," is not allowed!"].join(''),sym);
} else {
return null;
}
}
}
});
sci.impl.resolve.lookup_STAR_ = (function sci$impl$resolve$lookup_STAR_(ctx,sym,call_QMARK_){
var sym_ns = (function (){var G__11244 = cljs.core.namespace(sym);
if((G__11244 == null)){
return null;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(G__11244);
}
})();
var sym_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
var env = ctx.get(cljs.core.cst$kw$env);
var env__$1 = cljs.core.deref(env);
var cnn = sci.impl.vars.current_ns_name();
var the_current_ns = (function (){var G__11245 = cljs.core.cst$kw$namespaces.cljs$core$IFn$_invoke$arity$1(env__$1);
return (cnn.cljs$core$IFn$_invoke$arity$1 ? cnn.cljs$core$IFn$_invoke$arity$1(G__11245) : cnn.call(null,G__11245));
})();
var sym_ns__$1 = (cljs.core.truth_(sym_ns)?(function (){var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$aliases,sym_ns], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sym_ns;
}
})():null);
if(cljs.core.truth_(sym_ns__$1)){
var or__4126__auto__ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym_ns__$1,cljs.core.cst$sym$clojure$core)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym_ns__$1,cljs.core.cst$sym$cljs$core))))?(function (){var or__4126__auto__ = (function (){var G__11249 = env__$1;
var G__11249__$1 = (((G__11249 == null))?null:cljs.core.cst$kw$namespaces.cljs$core$IFn$_invoke$arity$1(G__11249));
var G__11249__$2 = (((G__11249__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__11249__$1,cljs.core.cst$sym$clojure$core));
if((G__11249__$2 == null)){
return null;
} else {
return cljs.core.find(G__11249__$2,sym_name);
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var temp__5753__auto__ = (cljs.core.truth_(call_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.utils.ana_macros,sym_name):null);
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,v], null);
} else {
return null;
}
}
})():null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var G__11251 = env__$1;
var G__11251__$1 = (((G__11251 == null))?null:cljs.core.cst$kw$namespaces.cljs$core$IFn$_invoke$arity$1(G__11251));
var G__11251__$2 = (((G__11251__$1 == null))?null:(sym_ns__$1.cljs$core$IFn$_invoke$arity$1 ? sym_ns__$1.cljs$core$IFn$_invoke$arity$1(G__11251__$1) : sym_ns__$1.call(null,G__11251__$1)));
if((G__11251__$2 == null)){
return null;
} else {
return cljs.core.find(G__11251__$2,sym_name);
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5753__auto__ = sci.impl.interop.resolve_class(ctx,sym_ns__$1);
if(cljs.core.truth_(temp__5753__auto__)){
var clazz = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,(cljs.core.truth_(call_QMARK_)?cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clazz,sym_name], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sci$impl$analyzer_SLASH_static_DASH_access,true], null)):sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (_ctx,_bindings){
return sci.impl.interop.get_static_field(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clazz,sym_name], null));
}),null,sym,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(sym),cljs.core.cst$kw$file,cljs.core.deref(sci.impl.vars.current_file),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$ns,cljs.core.deref(sci.impl.vars.current_ns)], 0))))], null);
} else {
return null;
}
}
}
} else {
var or__4126__auto__ = (function (){var temp__5753__auto__ = cljs.core.cst$kw$refers.cljs$core$IFn$_invoke$arity$1(the_current_ns);
if(cljs.core.truth_(temp__5753__auto__)){
var refers = temp__5753__auto__;
return cljs.core.find(refers,sym_name);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.find(the_current_ns,sym);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = (function (){var kv = (function (){var G__11254 = env__$1;
var G__11254__$1 = (((G__11254 == null))?null:cljs.core.cst$kw$namespaces.cljs$core$IFn$_invoke$arity$1(G__11254));
var G__11254__$2 = (((G__11254__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__11254__$1,cljs.core.cst$sym$clojure$core));
if((G__11254__$2 == null)){
return null;
} else {
return cljs.core.find(G__11254__$2,sym_name);
}
})();
if(cljs.core.truth_((function (){var G__11255 = the_current_ns;
var G__11255__$1 = (((G__11255 == null))?null:cljs.core.cst$kw$refer.cljs$core$IFn$_invoke$arity$1(G__11255));
var G__11255__$2 = (((G__11255__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__11255__$1,cljs.core.cst$sym$clojure$core));
var G__11255__$3 = (((G__11255__$2 == null))?null:cljs.core.cst$kw$exclude.cljs$core$IFn$_invoke$arity$1(G__11255__$2));
if((G__11255__$3 == null)){
return null;
} else {
return cljs.core.contains_QMARK_(G__11255__$3,sym_name);
}
})())){
return null;
} else {
return kv;
}
})();
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = (cljs.core.truth_((cljs.core.truth_(call_QMARK_)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.utils.ana_macros,sym):null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,sym], null):null);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = (function (){var temp__5753__auto__ = sci.impl.interop.resolve_class(ctx,sym);
if(cljs.core.truth_(temp__5753__auto__)){
var c = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,c], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var temp__5753__auto__ = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$2(ctx,sym);
if(cljs.core.truth_(temp__5753__auto__)){
var x = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,x], null);
} else {
return null;
}
}
}
}
}
}
}
});
sci.impl.resolve.lookup = (function sci$impl$resolve$lookup(var_args){
var G__11257 = arguments.length;
switch (G__11257) {
case 3:
return sci.impl.resolve.lookup.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.resolve.lookup.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.resolve.lookup.cljs$core$IFn$_invoke$arity$3 = (function (ctx,sym,call_QMARK_){
return sci.impl.resolve.lookup.cljs$core$IFn$_invoke$arity$4(ctx,sym,call_QMARK_,null);
}));

(sci.impl.resolve.lookup.cljs$core$IFn$_invoke$arity$4 = (function (ctx,sym,call_QMARK_,tag){
var bindings = ctx.get(cljs.core.cst$kw$bindings);
var or__4126__auto__ = (function (){var temp__5753__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5753__auto__)){
var vec__11261 = temp__5753__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11261,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11261,(1),null);
var ___$1 = (function (){var temp__5753__auto____$1 = cljs.core.cst$kw$closure_DASH_bindings.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5753__auto____$1)){
var cb = temp__5753__auto____$1;
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$param_DASH_map.cljs$core$IFn$_invoke$arity$1(ctx),sym)){
return null;
} else {
return cljs.core._vreset_BANG_(cb,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(cb),sym));
}
} else {
return null;
}
})();
var v = (cljs.core.truth_(call_QMARK_)?sci.impl.resolve.mark_resolve_sym(k):(function (){var v = sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$3((function (_ctx,bindings__$1){
return bindings__$1.get(k);
}),null,(cljs.core.truth_(tag)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(k,cljs.core.assoc,cljs.core.cst$kw$tag,tag):k));
return v;
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var temp__5753__auto__ = sci.impl.resolve.lookup_STAR_(ctx,sym,call_QMARK_);
if(cljs.core.truth_(temp__5753__auto__)){
var kv = temp__5753__auto__;
if(cljs.core.truth_(cljs.core.cst$kw$check_DASH_permissions.cljs$core$IFn$_invoke$arity$1(ctx))){
sci.impl.resolve.check_permission_BANG_(ctx,sym,kv);
} else {
}

return kv;
} else {
return null;
}
}
}));

(sci.impl.resolve.lookup.cljs$lang$maxFixedArity = 4);

cljs.core.vreset_BANG_(sci.impl.utils.lookup,sci.impl.resolve.lookup);
sci.impl.resolve.resolve_symbol = (function sci$impl$resolve$resolve_symbol(var_args){
var G__11266 = arguments.length;
switch (G__11266) {
case 2:
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2 = (function (ctx,sym){
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4(ctx,sym,false,null);
}));

(sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3 = (function (ctx,sym,call_QMARK_){
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4(ctx,sym,call_QMARK_,null);
}));

(sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4 = (function (ctx,sym,call_QMARK_,tag){
var res = cljs.core.second((function (){var or__4126__auto__ = sci.impl.resolve.lookup.cljs$core$IFn$_invoke$arity$4(ctx,sym,call_QMARK_,tag);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var n = cljs.core.name(sym);
if(cljs.core.truth_((function (){var and__4115__auto__ = call_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return ((clojure.string.starts_with_QMARK_(n,".")) && ((((n).length) > (1))));
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,cljs.core.cst$sym$expand_DASH_dot_STAR_], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = call_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return ((clojure.string.ends_with_QMARK_(n,".")) && ((((n).length) > (1))));
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym,cljs.core.cst$sym$expand_DASH_constructor], null);
} else {
return sci.impl.resolve.throw_error_with_location(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),sym);

}
}
}
})());
return res;
}));

(sci.impl.resolve.resolve_symbol.cljs$lang$maxFixedArity = 4);

