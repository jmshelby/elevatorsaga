// Compiled by ClojureScript 1.10.758 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('sci.impl.types');
goog.require('sci.impl.vars');
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sci$error_SLASH_realized_DASH_beyond_DASH_max,cljs.core.cst$kw$sci_SLASH_error);
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sci$error_SLASH_parse,cljs.core.cst$kw$sci_SLASH_error);
sci.impl.utils.constant_QMARK_ = (function sci$impl$utils$constant_QMARK_(x){
return ((typeof x === 'number') || (typeof x === 'string') || ((x instanceof cljs.core.Keyword)) || (cljs.core.boolean_QMARK_(x)));
});
sci.impl.utils.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
sci.impl.utils.throw_error_with_location = (function sci$impl$utils$throw_error_with_location(var_args){
var G__2070 = arguments.length;
switch (G__2070) {
case 2:
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2 = (function (msg,iobj){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,iobj,cljs.core.PersistentArrayMap.EMPTY);
}));

(sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3 = (function (msg,iobj,data){
var map__2071 = cljs.core.meta(iobj);
var map__2071__$1 = (((((!((map__2071 == null))))?(((((map__2071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2071):map__2071);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2071__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2071__$1,cljs.core.cst$kw$column);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__2071__$1,cljs.core.cst$kw$file,cljs.core.deref(sci.impl.vars.current_file));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$sci_SLASH_error,cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column,cljs.core.cst$kw$file,file], null),data], 0)));
}));

(sci.impl.utils.throw_error_with_location.cljs$lang$maxFixedArity = 3);

sci.impl.utils._STAR_in_try_STAR_ = false;
sci.impl.utils.macro_QMARK_ = (function sci$impl$utils$macro_QMARK_(f){
var temp__5753__auto__ = cljs.core.meta(f);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
var or__4126__auto__ = cljs.core.cst$kw$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
}
} else {
return null;
}
});
sci.impl.utils.needs_ctx = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("needs-ctx");
sci.impl.utils.rethrow_with_location_of_node = (function sci$impl$utils$rethrow_with_location_of_node(var_args){
var G__2075 = arguments.length;
switch (G__2075) {
case 3:
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3 = (function (ctx,e,raw_node){
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(ctx),e,raw_node);
}));

(sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,e,raw_node){
if(cljs.core.truth_(sci.impl.utils._STAR_in_try_STAR_)){
throw e;
} else {
var stack = sci.impl.types.stack(raw_node);
var node = sci.impl.types.sexpr(raw_node);
var f = ((cljs.core.seqable_QMARK_(node))?cljs.core.first(node):null);
var fm = (function (){var or__4126__auto__ = cljs.core.cst$kw$sci$impl_SLASH_f_DASH_meta.cljs$core$IFn$_invoke$arity$1(stack);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__2076 = f;
if((G__2076 == null)){
return null;
} else {
return cljs.core.meta(G__2076);
}
}
})();
var env = cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx);
var id = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(stack)){
if(cljs.core.truth_(cljs.core.cst$kw$special.cljs$core$IFn$_invoke$arity$1(stack))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sci$impl_SLASH_callstack,id], null),(function (vt){
if(cljs.core.truth_(vt)){
cljs.core._vreset_BANG_(vt,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(vt),stack));

return vt;
} else {
return cljs.core.volatile_BANG_((new cljs.core.List(null,stack,null,(1),null)));
}
}));
}
} else {
}

var d = cljs.core.ex_data(e);
var wrapping_sci_error_QMARK_ = cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(d),cljs.core.cst$kw$sci_SLASH_error);
if(wrapping_sci_error_QMARK_){
throw e;
} else {
var ex_msg = e.message;
var map__2077 = (function (){var or__4126__auto__ = stack;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var G__2079 = env;
var G__2079__$1 = (((G__2079 == null))?null:cljs.core.deref(G__2079));
var G__2079__$2 = (((G__2079__$1 == null))?null:cljs.core.cst$kw$sci$impl_SLASH_callstack.cljs$core$IFn$_invoke$arity$1(G__2079__$1));
var G__2079__$3 = (((G__2079__$2 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__2079__$2,id));
var G__2079__$4 = (((G__2079__$3 == null))?null:cljs.core.deref(G__2079__$3));
var G__2079__$5 = (((G__2079__$4 == null))?null:cljs.core.last(G__2079__$4));
if((G__2079__$5 == null)){
return null;
} else {
return cljs.core.meta(G__2079__$5);
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.meta(node);
}
}
})();
var map__2077__$1 = (((((!((map__2077 == null))))?(((((map__2077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2077):map__2077);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2077__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2077__$1,cljs.core.cst$kw$column);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__2077__$1,cljs.core.cst$kw$file);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
var ex_msg__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = ex_msg;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(fm);
} else {
return and__4115__auto__;
}
})())?clojure.string.replace(ex_msg,/(sci\.impl\.)?fns\/fun\/[a-zA-Z0-9-]+--\d+/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(fm)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(fm))].join('')):ex_msg);
var new_exception = (function (){var new_d = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,cljs.core.cst$kw$sci_SLASH_error,cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column,cljs.core.cst$kw$message,ex_msg__$1,cljs.core.cst$kw$sci$impl_SLASH_callstack,(new cljs.core.Delay((function (){
var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sci$impl_SLASH_callstack,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(ctx)], null));
if(cljs.core.truth_(temp__5753__auto__)){
var v = temp__5753__auto__;
return cljs.core.deref(v);
} else {
return null;
}
}),null)),cljs.core.cst$kw$file,file,cljs.core.cst$kw$locals,bindings], null);
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(ex_msg__$1,new_d,e);
})();
throw new_exception;
} else {
throw e;
}
}
}
}));

(sci.impl.utils.rethrow_with_location_of_node.cljs$lang$maxFixedArity = 4);

sci.impl.utils.iobj_QMARK_ = (function sci$impl$utils$iobj_QMARK_(obj){
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$))))?true:false):false)){
return cljs.core.meta(obj);
} else {
return false;
}
});
/**
 * Only adds metadata to obj if d is not nil and if obj already has meta
 */
sci.impl.utils.vary_meta_STAR_ = (function sci$impl$utils$vary_meta_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___2088 = arguments.length;
var i__4737__auto___2089 = (0);
while(true){
if((i__4737__auto___2089 < len__4736__auto___2088)){
args__4742__auto__.push((arguments[i__4737__auto___2089]));

var G__2090 = (i__4737__auto___2089 + (1));
i__4737__auto___2089 = G__2090;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.utils.vary_meta_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.utils.vary_meta_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,f,args){
if(cljs.core.truth_(sci.impl.utils.iobj_QMARK_(obj))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vary_meta,obj,f,args);
} else {
return obj;
}
}));

(sci.impl.utils.vary_meta_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.utils.vary_meta_STAR_.cljs$lang$applyTo = (function (seq2085){
var G__2086 = cljs.core.first(seq2085);
var seq2085__$1 = cljs.core.next(seq2085);
var G__2087 = cljs.core.first(seq2085__$1);
var seq2085__$2 = cljs.core.next(seq2085__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2086,G__2087,seq2085__$2);
}));

sci.impl.utils.strip_core_ns = (function sci$impl$utils$strip_core_ns(sym){
var G__2091 = cljs.core.namespace(sym);
switch (G__2091) {
case "clojure.core":
case "cljs.core":
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));

break;
default:
return sym;

}
});
sci.impl.utils.allowed_loop = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("loop");
sci.impl.utils.allowed_recur = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("recur");
sci.impl.utils.walk_STAR_ = (function sci$impl$utils$walk_STAR_(inner,form){
if(cljs.core.truth_(cljs.core.cst$kw$sci$impl_SLASH_op.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form)))){
return form;
} else {
if(cljs.core.list_QMARK_(form)){
return cljs.core.with_meta(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form)),cljs.core.meta(form));
} else {
if(cljs.core.map_entry_QMARK_(form)){
return (new cljs.core.MapEntry((function (){var G__2093 = cljs.core.key(form);
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__2093) : inner.call(null,G__2093));
})(),(function (){var G__2094 = cljs.core.val(form);
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__2094) : inner.call(null,G__2094));
})(),null));
} else {
if(cljs.core.seq_QMARK_(form)){
return cljs.core.with_meta(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form)),cljs.core.meta(form));
} else {
if(cljs.core.record_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(x) : inner.call(null,x)));
}),form,form);
} else {
if(cljs.core.coll_QMARK_(form)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
} else {
return form;

}
}
}
}
}
}
});
/**
 * Prewalk with metadata preservation. Does not prewalk :sci.impl/op nodes.
 */
sci.impl.utils.prewalk = (function sci$impl$utils$prewalk(f,form){
return sci.impl.utils.walk_STAR_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sci.impl.utils.prewalk,f),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(form) : f.call(null,form)));
});
/**
 * Fetches namespaces from env if it exists. Else, if `create?`,
 *   produces one regardless of the existince of the namespace in env and
 *   adds it to env before returning it.
 */
sci.impl.utils.namespace_object = (function sci$impl$utils$namespace_object(env,ns_sym,create_QMARK_,attr_map){
var env_STAR_ = cljs.core.deref(env);
var ns_map = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,ns_sym], null));
var or__4126__auto__ = cljs.core.cst$kw$obj.cljs$core$IFn$_invoke$arity$1(ns_map);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.truth_((function (){var or__4126__auto____$1 = ns_map;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return create_QMARK_;
}
})())){
var ns_obj = sci.impl.vars.__GT_SciNamespace(ns_sym,attr_map);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,ns_sym,cljs.core.cst$kw$obj], null),ns_obj);

return ns_obj;
} else {
return null;
}
}
});
sci.impl.utils.set_namespace_BANG_ = (function sci$impl$utils$set_namespace_BANG_(ctx,ns_sym,attr_map){
var env = cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx);
var attr_map__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(ns_sym),attr_map], 0));
var ns_obj = sci.impl.utils.namespace_object(env,ns_sym,true,attr_map__$1);
return sci.impl.types.setVal(sci.impl.vars.current_ns,ns_obj);
});
sci.impl.utils.eval_form_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_require_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_use_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_resolve_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_refer_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.macroexpand_STAR_ = cljs.core.volatile_BANG_(null);
sci.impl.utils.macroexpand_1_STAR_ = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_STAR_ = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_do_STAR_ = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_fn = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_string_STAR_ = cljs.core.volatile_BANG_(null);
sci.impl.utils.lookup = cljs.core.volatile_BANG_(null);
/**
 * Like partition-by but splits collection only when `pred` returns
 *   a truthy value. E.g. `(split-when odd? [1 2 3 4 5]) => ((1 2) (3 4) (5))`
 */
sci.impl.utils.split_when = (function sci$impl$utils$split_when(pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__5753__auto__ = cljs.core.seq(coll);
if(temp__5753__auto__){
var s = temp__5753__auto__;
var fst = cljs.core.first(s);
var f = cljs.core.complement(pred);
var run = cljs.core.cons(fst,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__2095_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__2095_SHARP_) : f.call(null,p1__2095_SHARP_));
}),cljs.core.next(s)));
return cljs.core.cons(run,(function (){var G__2096 = pred;
var G__2097 = (new cljs.core.LazySeq(null,(function (){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(run),s);
}),null,null));
return (sci.impl.utils.split_when.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.split_when.cljs$core$IFn$_invoke$arity$2(G__2096,G__2097) : sci.impl.utils.split_when.call(null,G__2096,G__2097));
})());
} else {
return null;
}
}),null,null));
});
sci.impl.utils.ana_macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 28, [cljs.core.cst$sym$try,"null",cljs.core.cst$sym$import,"null",cljs.core.cst$sym$doseq,"null",cljs.core.cst$sym$lazy_DASH_seq,"null",cljs.core.cst$sym$let,"null",cljs.core.cst$sym$fn,"null",cljs.core.cst$sym$do,"null",cljs.core.cst$sym$in_DASH_ns,"null",cljs.core.cst$sym$defn,"null",cljs.core.cst$sym$if,"null",cljs.core.cst$sym$new,"null",cljs.core.cst$sym$ns,"null",cljs.core.cst$sym$declare,"null",cljs.core.cst$sym$or,"null",cljs.core.cst$sym$fn_STAR_,"null",cljs.core.cst$sym$loop,"null",cljs.core.cst$sym$for,"null",cljs.core.cst$sym$expand_DASH_constructor,"null",cljs.core.cst$sym$defmacro,"null",cljs.core.cst$sym$set_BANG_,"null",cljs.core.cst$sym$_DOT_,"null",cljs.core.cst$sym$var,"null",cljs.core.cst$sym$case,"null",cljs.core.cst$sym$comment,"null",cljs.core.cst$sym$resolve,"null",cljs.core.cst$sym$and,"null",cljs.core.cst$sym$def,"null",cljs.core.cst$sym$expand_DASH_dot_STAR_,"null"], null), null);
sci.impl.utils.ctx_fn = (function sci$impl$utils$ctx_fn(var_args){
var G__2099 = arguments.length;
switch (G__2099) {
case 2:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2 = (function (f,expr){
return sci.impl.types.__GT_EvalFn(f,null,expr,null);
}));

(sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$3 = (function (f,m,expr){
return sci.impl.types.__GT_EvalFn(f,m,expr,null);
}));

(sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4 = (function (f,m,expr,stack){
return sci.impl.types.__GT_EvalFn(f,m,expr,stack);
}));

(sci.impl.utils.ctx_fn.cljs$lang$maxFixedArity = 4);

sci.impl.utils.maybe_destructured = (function sci$impl$utils$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,params,cljs.core.cst$kw$body,body], null);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__2101 = cljs.core.next(params__$1);
var G__2102 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__2103 = lets;
params__$1 = G__2101;
new_params = G__2102;
lets = G__2103;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__2104 = cljs.core.next(params__$1);
var G__2105 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__2106 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__2104;
new_params = G__2105;
lets = G__2106;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$params,new_params,cljs.core.cst$kw$body,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))))], null)], null);
}
break;
}
}
});
