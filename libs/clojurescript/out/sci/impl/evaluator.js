// Compiled by ClojureScript 1.10.758 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.evaluator');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('sci.impl.faster');
goog.require('sci.impl.interop');
goog.require('sci.impl.macros');
goog.require('sci.impl.records');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');

sci.impl.evaluator.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$sym$fn,"null",cljs.core.cst$sym$do,"null",cljs.core.cst$sym$defn,"null",cljs.core.cst$sym$syntax_DASH_quote,"null",cljs.core.cst$sym$def,"null"], null), null);
/**
 * The and macro from clojure.core. Note: and is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_and = (function sci$impl$evaluator$eval_and(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,x) : sci.impl.evaluator.eval.call(null,ctx,bindings,x));
if(cljs.core.truth_(v)){
var xs = cljs.core.next(args__$2);
if(xs){
var G__10180 = xs;
args__$2 = G__10180;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core. Note: or is unrolled in the analyzer, this is a fallback.
 */
sci.impl.evaluator.eval_or = (function sci$impl$evaluator$eval_or(ctx,bindings,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,x) : sci.impl.evaluator.eval.call(null,ctx,bindings,x));
if(cljs.core.truth_(v)){
return v;
} else {
var xs = cljs.core.next(args__$2);
if(xs){
var G__10181 = xs;
args__$2 = G__10181;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.evaluator.eval_let = (function sci$impl$evaluator$eval_let(ctx,bindings,let_bindings,exprs){
var vec__10182 = (function (){var ctx__$1 = ctx;
var bindings__$1 = bindings;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx__$1,bindings__$1,let_val) : sci.impl.evaluator.eval.call(null,ctx__$1,bindings__$1,let_val));
var bindings__$2 = cljs.core._assoc(bindings__$1,let_name,v);
if(cljs.core.not(rest_let_bindings)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx__$1,bindings__$2], null);
} else {
var G__10185 = ctx__$1;
var G__10186 = bindings__$2;
var G__10187 = rest_let_bindings;
ctx__$1 = G__10185;
bindings__$1 = G__10186;
let_bindings__$1 = G__10187;
continue;
}
break;
}
})();
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10182,(0),null);
var bindings__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10182,(1),null);
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx__$1,bindings__$1,e) : sci.impl.evaluator.eval.call(null,ctx__$1,bindings__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__10188 = nexprs;
exprs__$1 = G__10188;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
});
sci.impl.evaluator.handle_meta = (function sci$impl$evaluator$handle_meta(ctx,bindings,m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var temp__5751__auto__ = cljs.core.meta(m);
if(cljs.core.truth_(temp__5751__auto__)){
var mm = temp__5751__auto__;
if(cljs.core.truth_((cljs.core.truth_(mm)?mm.get(cljs.core.cst$kw$sci$impl_SLASH_op):null))){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,m) : sci.impl.evaluator.eval.call(null,ctx,bindings,m));
} else {
return m;
}
} else {
return m;
}
})(),cljs.core.cst$kw$sci$impl_SLASH_op);
});
sci.impl.evaluator.eval_map = (function sci$impl$evaluator$eval_map(ctx,bindings,expr){
var temp__5751__auto__ = cljs.core.meta(expr);
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
if(cljs.core.truth_((function (){var G__10191 = cljs.core.cst$kw$eval;
var G__10192 = cljs.core.cst$kw$sci$impl_SLASH_op.cljs$core$IFn$_invoke$arity$1(m);
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__10191,G__10192) : sci.impl.utils.kw_identical_QMARK_.call(null,G__10191,G__10192));
})())){
return cljs.core.with_meta(cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10189_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__10189_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__10189_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10190_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__10190_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__10190_SHARP_));
}),cljs.core.vals(expr))),sci.impl.evaluator.handle_meta(ctx,bindings,m));
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.evaluator.eval_def = (function sci$impl$evaluator$eval_def(ctx,bindings,var_name,init,m){
var init__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,init) : sci.impl.evaluator.eval.call(null,ctx,bindings,init));
var m__$1 = (function (){var or__4126__auto__ = m;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.meta(var_name);
}
})();
var m__$2 = sci.impl.evaluator.eval_map(ctx,bindings,m__$1);
var cnn = sci.impl.vars.getName(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m__$2));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$namespaces),cnn);
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev),false):prev);
var v = (cljs.core.truth_((function (){var G__10193 = cljs.core.cst$kw$sci$impl_SLASH_var$unbound;
var G__10194 = init__$1;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__10193,G__10194) : sci.impl.utils.kw_identical_QMARK_.call(null,G__10193,G__10194));
})())?(function (){var G__10195 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10195,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$2], 0));

return G__10195;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$2], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,cljs.core.cst$kw$namespaces),cnn),var_name);
});
var ret__4785__auto___10196 = sci.impl.evaluator.resolve_symbol = (function sci$impl$evaluator$resolve_symbol(_AMPERSAND_form,_AMPERSAND_env,bindings,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$$get,null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(bindings,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$java$util$Map], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sym,null,(1),null))], 0))));
});
(sci.impl.evaluator.resolve_symbol.cljs$lang$macro = true);

sci.impl.evaluator.eval_case = (function sci$impl$evaluator$eval_case(var_args){
var G__10198 = arguments.length;
switch (G__10198) {
case 4:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,case_map,case_val){
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_val) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_val));
var temp__5751__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__10199 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10199,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10199,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,found) : sci.impl.evaluator.eval.call(null,ctx,bindings,found));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}));

(sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5 = (function (ctx,bindings,case_map,case_val,case_default){
var v = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_val) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_val));
var temp__5751__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__10202 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10202,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10202,(1),null);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,found) : sci.impl.evaluator.eval.call(null,ctx,bindings,found));
} else {
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,case_default) : sci.impl.evaluator.eval.call(null,ctx,bindings,case_default));
}
}));

(sci.impl.evaluator.eval_case.cljs$lang$maxFixedArity = 5);

sci.impl.evaluator.eval_try = (function sci$impl$evaluator$eval_try(ctx,bindings,body,catches,finally$){
try{var _STAR_in_try_STAR__orig_val__10217 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__10218 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__10218);

try{return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,body) : sci.impl.evaluator.eval.call(null,ctx,bindings,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__10217);
}}catch (e10206){if((e10206 instanceof Error)){
var e = e10206;
var temp__5751__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(c);
if(cljs.core.truth_((function (){var or__4126__auto__ = (function (){var G__10209 = cljs.core.cst$kw$default;
var G__10210 = clazz;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__10209,G__10210) : sci.impl.utils.kw_identical_QMARK_.call(null,G__10209,G__10210));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if((clazz instanceof sci.impl.types.EvalFn)){
var c__4162__auto__ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,clazz) : sci.impl.evaluator.eval.call(null,ctx,bindings,clazz));
var x__4163__auto__ = e;
return (x__4163__auto__ instanceof c__4162__auto__);
} else {
return (e instanceof clazz);
}
}
})())){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sci$impl$evaluator_SLASH_try_DASH_result,(function (){var G__10211 = ctx;
var G__10212 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,cljs.core.cst$kw$binding.cljs$core$IFn$_invoke$arity$1(c),e);
var G__10213 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10211,G__10212,G__10213) : sci.impl.evaluator.eval.call(null,G__10211,G__10212,G__10213));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5751__auto__)){
var vec__10214 = temp__5751__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10214,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10214,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,body);
}
} else {
throw e10206;

}
}finally {(sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,finally$) : sci.impl.evaluator.eval.call(null,ctx,bindings,finally$));
}});
sci.impl.evaluator.eval_static_method_invocation = (function sci$impl$evaluator$eval_static_method_invocation(ctx,bindings,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10219_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__10219_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__10219_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.evaluator.eval_instance_method_invocation = (function sci$impl$evaluator$eval_instance_method_invocation(ctx,bindings,instance_expr,method_str,args){
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = cljs.core.cst$kw$tag_DASH_class.cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,instance_expr) : sci.impl.evaluator.eval.call(null,ctx,bindings,instance_expr));
if(cljs.core.truth_(((cljs.core.map_QMARK_(instance_expr_STAR_))?cljs.core.cst$kw$sci$impl_SLASH_record.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(instance_expr_STAR_)):false))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instance_expr_STAR_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_str,(1))));
} else {
var instance_class = (function (){var or__4126__auto__ = tag_class;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var class__GT_opts = cljs.core.cst$kw$class_DASH__GT_opts.cljs$core$IFn$_invoke$arity$1(ctx);
var allowed_QMARK_ = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,cljs.core.cst$kw$allow);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5753__auto__ = cljs.core.cst$kw$public_DASH_class.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5753__auto__)){
var f = temp__5753__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(target_class)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10221_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__10221_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__10221_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
});
sci.impl.evaluator.eval_resolve = (function sci$impl$evaluator$eval_resolve(var_args){
var G__10223 = arguments.length;
switch (G__10223) {
case 3:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$3 = (function (ctx,bindings,sym){
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,sym) : sci.impl.evaluator.eval.call(null,ctx,bindings,sym));
return cljs.core.second((function (){var fexpr__10224 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__10224.cljs$core$IFn$_invoke$arity$3 ? fexpr__10224.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__10224.call(null,ctx,sym__$1,false));
})());
}));

(sci.impl.evaluator.eval_resolve.cljs$core$IFn$_invoke$arity$4 = (function (ctx,bindings,env,sym){
if(cljs.core.contains_QMARK_(env,sym)){
return null;
} else {
var sym__$1 = (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,sym) : sci.impl.evaluator.eval.call(null,ctx,bindings,sym));
return cljs.core.second((function (){var fexpr__10225 = cljs.core.deref(sci.impl.utils.lookup);
return (fexpr__10225.cljs$core$IFn$_invoke$arity$3 ? fexpr__10225.cljs$core$IFn$_invoke$arity$3(ctx,sym__$1,false) : fexpr__10225.call(null,ctx,sym__$1,false));
})());
}
}));

(sci.impl.evaluator.eval_resolve.cljs$lang$maxFixedArity = 4);

cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.evaluator.eval_resolve);
sci.impl.evaluator.eval_import = (function sci$impl$evaluator$eval_import(var_args){
var args__4742__auto__ = [];
var len__4736__auto___10233 = arguments.length;
var i__4737__auto___10234 = (0);
while(true){
if((i__4737__auto___10234 < len__4736__auto___10233)){
args__4742__auto__.push((arguments[i__4737__auto___10234]));

var G__10235 = (i__4737__auto___10234 + (1));
i__4737__auto___10234 = G__10235;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.evaluator.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10227_SHARP_){
if(((cljs.core.seq_QMARK_(p1__10227_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(p1__10227_SHARP_))))){
return cljs.core.second(p1__10227_SHARP_);
} else {
return p1__10227_SHARP_;
}
}),import_symbols_or_lists);
var env = cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,spec){
var vec__10230 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10230,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10230,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (___$1,class$){
var fq_class_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
var temp__5751__auto__ = sci.impl.interop.resolve_class(ctx,fq_class_name);
if(cljs.core.truth_(temp__5751__auto__)){
var clazz = temp__5751__auto__;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cnn,cljs.core.cst$kw$imports,class$], null),fq_class_name);

return clazz;
} else {
var temp__5751__auto____$1 = sci.impl.records.resolve_record_or_protocol_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5751__auto____$1)){
var rec = temp__5751__auto____$1;
var cnn = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cnn,class$], null),rec);

return rec;
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name)].join('')));
}
}
}),null,classes);
}),null,specs);
}));

(sci.impl.evaluator.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.evaluator.eval_import.cljs$lang$applyTo = (function (seq10228){
var G__10229 = cljs.core.first(seq10228);
var seq10228__$1 = cljs.core.next(seq10228);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10229,seq10228__$1);
}));

/**
 * Note: various arities of do have already been unrolled in the analyzer.
 */
sci.impl.evaluator.eval_do = (function sci$impl$evaluator$eval_do(ctx,bindings,exprs){
var exprs__$1 = cljs.core.seq(exprs);
var exprs__$2 = exprs__$1;
while(true){
if(exprs__$2){
var ret = (function (){var G__10236 = ctx;
var G__10237 = bindings;
var G__10238 = cljs.core.first(exprs__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10236,G__10237,G__10238) : sci.impl.evaluator.eval.call(null,G__10236,G__10237,G__10238));
})();
var temp__5751__auto__ = cljs.core.next(exprs__$2);
if(temp__5751__auto__){
var exprs__$3 = temp__5751__auto__;
var G__10239 = exprs__$3;
exprs__$2 = G__10239;
continue;
} else {
return ret;
}
} else {
return null;
}
break;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_do_STAR_,sci.impl.evaluator.eval_do);
sci.impl.evaluator.fn_call = (function sci$impl$evaluator$fn_call(ctx,bindings,f,args){
var G__10434 = cljs.core.count(args);
switch (G__10434) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg10244 = (function (){var G__10435 = ctx;
var G__10436 = bindings;
var G__10437 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10435,G__10436,G__10437) : sci.impl.evaluator.eval.call(null,G__10435,G__10436,G__10437));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg10244) : f.call(null,arg10244));

break;
case (2):
var arg10245 = (function (){var G__10438 = ctx;
var G__10439 = bindings;
var G__10440 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10438,G__10439,G__10440) : sci.impl.evaluator.eval.call(null,G__10438,G__10439,G__10440));
})();
var args__$1 = cljs.core.rest(args);
var arg10246 = (function (){var G__10441 = ctx;
var G__10442 = bindings;
var G__10443 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10441,G__10442,G__10443) : sci.impl.evaluator.eval.call(null,G__10441,G__10442,G__10443));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg10245,arg10246) : f.call(null,arg10245,arg10246));

break;
case (3):
var arg10247 = (function (){var G__10444 = ctx;
var G__10445 = bindings;
var G__10446 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10444,G__10445,G__10446) : sci.impl.evaluator.eval.call(null,G__10444,G__10445,G__10446));
})();
var args__$1 = cljs.core.rest(args);
var arg10248 = (function (){var G__10447 = ctx;
var G__10448 = bindings;
var G__10449 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10447,G__10448,G__10449) : sci.impl.evaluator.eval.call(null,G__10447,G__10448,G__10449));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg10249 = (function (){var G__10450 = ctx;
var G__10451 = bindings;
var G__10452 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10450,G__10451,G__10452) : sci.impl.evaluator.eval.call(null,G__10450,G__10451,G__10452));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg10247,arg10248,arg10249) : f.call(null,arg10247,arg10248,arg10249));

break;
case (4):
var arg10250 = (function (){var G__10453 = ctx;
var G__10454 = bindings;
var G__10455 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10453,G__10454,G__10455) : sci.impl.evaluator.eval.call(null,G__10453,G__10454,G__10455));
})();
var args__$1 = cljs.core.rest(args);
var arg10251 = (function (){var G__10456 = ctx;
var G__10457 = bindings;
var G__10458 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10456,G__10457,G__10458) : sci.impl.evaluator.eval.call(null,G__10456,G__10457,G__10458));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg10252 = (function (){var G__10459 = ctx;
var G__10460 = bindings;
var G__10461 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10459,G__10460,G__10461) : sci.impl.evaluator.eval.call(null,G__10459,G__10460,G__10461));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg10253 = (function (){var G__10462 = ctx;
var G__10463 = bindings;
var G__10464 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10462,G__10463,G__10464) : sci.impl.evaluator.eval.call(null,G__10462,G__10463,G__10464));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg10250,arg10251,arg10252,arg10253) : f.call(null,arg10250,arg10251,arg10252,arg10253));

break;
case (5):
var arg10254 = (function (){var G__10465 = ctx;
var G__10466 = bindings;
var G__10467 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10465,G__10466,G__10467) : sci.impl.evaluator.eval.call(null,G__10465,G__10466,G__10467));
})();
var args__$1 = cljs.core.rest(args);
var arg10255 = (function (){var G__10468 = ctx;
var G__10469 = bindings;
var G__10470 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10468,G__10469,G__10470) : sci.impl.evaluator.eval.call(null,G__10468,G__10469,G__10470));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg10256 = (function (){var G__10471 = ctx;
var G__10472 = bindings;
var G__10473 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10471,G__10472,G__10473) : sci.impl.evaluator.eval.call(null,G__10471,G__10472,G__10473));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg10257 = (function (){var G__10474 = ctx;
var G__10475 = bindings;
var G__10476 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10474,G__10475,G__10476) : sci.impl.evaluator.eval.call(null,G__10474,G__10475,G__10476));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg10258 = (function (){var G__10477 = ctx;
var G__10478 = bindings;
var G__10479 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10477,G__10478,G__10479) : sci.impl.evaluator.eval.call(null,G__10477,G__10478,G__10479));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg10254,arg10255,arg10256,arg10257,arg10258) : f.call(null,arg10254,arg10255,arg10256,arg10257,arg10258));

break;
case (6):
var arg10259 = (function (){var G__10480 = ctx;
var G__10481 = bindings;
var G__10482 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10480,G__10481,G__10482) : sci.impl.evaluator.eval.call(null,G__10480,G__10481,G__10482));
})();
var args__$1 = cljs.core.rest(args);
var arg10260 = (function (){var G__10483 = ctx;
var G__10484 = bindings;
var G__10485 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10483,G__10484,G__10485) : sci.impl.evaluator.eval.call(null,G__10483,G__10484,G__10485));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg10261 = (function (){var G__10486 = ctx;
var G__10487 = bindings;
var G__10488 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10486,G__10487,G__10488) : sci.impl.evaluator.eval.call(null,G__10486,G__10487,G__10488));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg10262 = (function (){var G__10489 = ctx;
var G__10490 = bindings;
var G__10491 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10489,G__10490,G__10491) : sci.impl.evaluator.eval.call(null,G__10489,G__10490,G__10491));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg10263 = (function (){var G__10492 = ctx;
var G__10493 = bindings;
var G__10494 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10492,G__10493,G__10494) : sci.impl.evaluator.eval.call(null,G__10492,G__10493,G__10494));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg10264 = (function (){var G__10495 = ctx;
var G__10496 = bindings;
var G__10497 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10495,G__10496,G__10497) : sci.impl.evaluator.eval.call(null,G__10495,G__10496,G__10497));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg10259,arg10260,arg10261,arg10262,arg10263,arg10264) : f.call(null,arg10259,arg10260,arg10261,arg10262,arg10263,arg10264));

break;
case (7):
var arg10265 = (function (){var G__10498 = ctx;
var G__10499 = bindings;
var G__10500 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10498,G__10499,G__10500) : sci.impl.evaluator.eval.call(null,G__10498,G__10499,G__10500));
})();
var args__$1 = cljs.core.rest(args);
var arg10266 = (function (){var G__10501 = ctx;
var G__10502 = bindings;
var G__10503 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10501,G__10502,G__10503) : sci.impl.evaluator.eval.call(null,G__10501,G__10502,G__10503));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg10267 = (function (){var G__10504 = ctx;
var G__10505 = bindings;
var G__10506 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10504,G__10505,G__10506) : sci.impl.evaluator.eval.call(null,G__10504,G__10505,G__10506));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg10268 = (function (){var G__10507 = ctx;
var G__10508 = bindings;
var G__10509 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10507,G__10508,G__10509) : sci.impl.evaluator.eval.call(null,G__10507,G__10508,G__10509));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg10269 = (function (){var G__10510 = ctx;
var G__10511 = bindings;
var G__10512 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10510,G__10511,G__10512) : sci.impl.evaluator.eval.call(null,G__10510,G__10511,G__10512));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg10270 = (function (){var G__10513 = ctx;
var G__10514 = bindings;
var G__10515 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10513,G__10514,G__10515) : sci.impl.evaluator.eval.call(null,G__10513,G__10514,G__10515));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg10271 = (function (){var G__10516 = ctx;
var G__10517 = bindings;
var G__10518 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10516,G__10517,G__10518) : sci.impl.evaluator.eval.call(null,G__10516,G__10517,G__10518));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg10265,arg10266,arg10267,arg10268,arg10269,arg10270,arg10271) : f.call(null,arg10265,arg10266,arg10267,arg10268,arg10269,arg10270,arg10271));

break;
case (8):
var arg10272 = (function (){var G__10519 = ctx;
var G__10520 = bindings;
var G__10521 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10519,G__10520,G__10521) : sci.impl.evaluator.eval.call(null,G__10519,G__10520,G__10521));
})();
var args__$1 = cljs.core.rest(args);
var arg10273 = (function (){var G__10522 = ctx;
var G__10523 = bindings;
var G__10524 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10522,G__10523,G__10524) : sci.impl.evaluator.eval.call(null,G__10522,G__10523,G__10524));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg10274 = (function (){var G__10525 = ctx;
var G__10526 = bindings;
var G__10527 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10525,G__10526,G__10527) : sci.impl.evaluator.eval.call(null,G__10525,G__10526,G__10527));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg10275 = (function (){var G__10528 = ctx;
var G__10529 = bindings;
var G__10530 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10528,G__10529,G__10530) : sci.impl.evaluator.eval.call(null,G__10528,G__10529,G__10530));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg10276 = (function (){var G__10531 = ctx;
var G__10532 = bindings;
var G__10533 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10531,G__10532,G__10533) : sci.impl.evaluator.eval.call(null,G__10531,G__10532,G__10533));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg10277 = (function (){var G__10534 = ctx;
var G__10535 = bindings;
var G__10536 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10534,G__10535,G__10536) : sci.impl.evaluator.eval.call(null,G__10534,G__10535,G__10536));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg10278 = (function (){var G__10537 = ctx;
var G__10538 = bindings;
var G__10539 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10537,G__10538,G__10539) : sci.impl.evaluator.eval.call(null,G__10537,G__10538,G__10539));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg10279 = (function (){var G__10540 = ctx;
var G__10541 = bindings;
var G__10542 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10540,G__10541,G__10542) : sci.impl.evaluator.eval.call(null,G__10540,G__10541,G__10542));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg10272,arg10273,arg10274,arg10275,arg10276,arg10277,arg10278,arg10279) : f.call(null,arg10272,arg10273,arg10274,arg10275,arg10276,arg10277,arg10278,arg10279));

break;
case (9):
var arg10280 = (function (){var G__10543 = ctx;
var G__10544 = bindings;
var G__10545 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10543,G__10544,G__10545) : sci.impl.evaluator.eval.call(null,G__10543,G__10544,G__10545));
})();
var args__$1 = cljs.core.rest(args);
var arg10281 = (function (){var G__10546 = ctx;
var G__10547 = bindings;
var G__10548 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10546,G__10547,G__10548) : sci.impl.evaluator.eval.call(null,G__10546,G__10547,G__10548));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg10282 = (function (){var G__10549 = ctx;
var G__10550 = bindings;
var G__10551 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10549,G__10550,G__10551) : sci.impl.evaluator.eval.call(null,G__10549,G__10550,G__10551));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg10283 = (function (){var G__10552 = ctx;
var G__10553 = bindings;
var G__10554 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10552,G__10553,G__10554) : sci.impl.evaluator.eval.call(null,G__10552,G__10553,G__10554));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg10284 = (function (){var G__10555 = ctx;
var G__10556 = bindings;
var G__10557 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10555,G__10556,G__10557) : sci.impl.evaluator.eval.call(null,G__10555,G__10556,G__10557));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg10285 = (function (){var G__10558 = ctx;
var G__10559 = bindings;
var G__10560 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10558,G__10559,G__10560) : sci.impl.evaluator.eval.call(null,G__10558,G__10559,G__10560));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg10286 = (function (){var G__10561 = ctx;
var G__10562 = bindings;
var G__10563 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10561,G__10562,G__10563) : sci.impl.evaluator.eval.call(null,G__10561,G__10562,G__10563));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg10287 = (function (){var G__10564 = ctx;
var G__10565 = bindings;
var G__10566 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10564,G__10565,G__10566) : sci.impl.evaluator.eval.call(null,G__10564,G__10565,G__10566));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg10288 = (function (){var G__10567 = ctx;
var G__10568 = bindings;
var G__10569 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10567,G__10568,G__10569) : sci.impl.evaluator.eval.call(null,G__10567,G__10568,G__10569));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg10280,arg10281,arg10282,arg10283,arg10284,arg10285,arg10286,arg10287,arg10288) : f.call(null,arg10280,arg10281,arg10282,arg10283,arg10284,arg10285,arg10286,arg10287,arg10288));

break;
case (10):
var arg10289 = (function (){var G__10570 = ctx;
var G__10571 = bindings;
var G__10572 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10570,G__10571,G__10572) : sci.impl.evaluator.eval.call(null,G__10570,G__10571,G__10572));
})();
var args__$1 = cljs.core.rest(args);
var arg10290 = (function (){var G__10573 = ctx;
var G__10574 = bindings;
var G__10575 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10573,G__10574,G__10575) : sci.impl.evaluator.eval.call(null,G__10573,G__10574,G__10575));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg10291 = (function (){var G__10576 = ctx;
var G__10577 = bindings;
var G__10578 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10576,G__10577,G__10578) : sci.impl.evaluator.eval.call(null,G__10576,G__10577,G__10578));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg10292 = (function (){var G__10579 = ctx;
var G__10580 = bindings;
var G__10581 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10579,G__10580,G__10581) : sci.impl.evaluator.eval.call(null,G__10579,G__10580,G__10581));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg10293 = (function (){var G__10582 = ctx;
var G__10583 = bindings;
var G__10584 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10582,G__10583,G__10584) : sci.impl.evaluator.eval.call(null,G__10582,G__10583,G__10584));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg10294 = (function (){var G__10585 = ctx;
var G__10586 = bindings;
var G__10587 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10585,G__10586,G__10587) : sci.impl.evaluator.eval.call(null,G__10585,G__10586,G__10587));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg10295 = (function (){var G__10588 = ctx;
var G__10589 = bindings;
var G__10590 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10588,G__10589,G__10590) : sci.impl.evaluator.eval.call(null,G__10588,G__10589,G__10590));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg10296 = (function (){var G__10591 = ctx;
var G__10592 = bindings;
var G__10593 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10591,G__10592,G__10593) : sci.impl.evaluator.eval.call(null,G__10591,G__10592,G__10593));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg10297 = (function (){var G__10594 = ctx;
var G__10595 = bindings;
var G__10596 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10594,G__10595,G__10596) : sci.impl.evaluator.eval.call(null,G__10594,G__10595,G__10596));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg10298 = (function (){var G__10597 = ctx;
var G__10598 = bindings;
var G__10599 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10597,G__10598,G__10599) : sci.impl.evaluator.eval.call(null,G__10597,G__10598,G__10599));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg10289,arg10290,arg10291,arg10292,arg10293,arg10294,arg10295,arg10296,arg10297,arg10298) : f.call(null,arg10289,arg10290,arg10291,arg10292,arg10293,arg10294,arg10295,arg10296,arg10297,arg10298));

break;
case (11):
var arg10299 = (function (){var G__10600 = ctx;
var G__10601 = bindings;
var G__10602 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10600,G__10601,G__10602) : sci.impl.evaluator.eval.call(null,G__10600,G__10601,G__10602));
})();
var args__$1 = cljs.core.rest(args);
var arg10300 = (function (){var G__10603 = ctx;
var G__10604 = bindings;
var G__10605 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10603,G__10604,G__10605) : sci.impl.evaluator.eval.call(null,G__10603,G__10604,G__10605));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg10301 = (function (){var G__10606 = ctx;
var G__10607 = bindings;
var G__10608 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10606,G__10607,G__10608) : sci.impl.evaluator.eval.call(null,G__10606,G__10607,G__10608));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg10302 = (function (){var G__10609 = ctx;
var G__10610 = bindings;
var G__10611 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10609,G__10610,G__10611) : sci.impl.evaluator.eval.call(null,G__10609,G__10610,G__10611));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg10303 = (function (){var G__10612 = ctx;
var G__10613 = bindings;
var G__10614 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10612,G__10613,G__10614) : sci.impl.evaluator.eval.call(null,G__10612,G__10613,G__10614));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg10304 = (function (){var G__10615 = ctx;
var G__10616 = bindings;
var G__10617 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10615,G__10616,G__10617) : sci.impl.evaluator.eval.call(null,G__10615,G__10616,G__10617));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg10305 = (function (){var G__10618 = ctx;
var G__10619 = bindings;
var G__10620 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10618,G__10619,G__10620) : sci.impl.evaluator.eval.call(null,G__10618,G__10619,G__10620));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg10306 = (function (){var G__10621 = ctx;
var G__10622 = bindings;
var G__10623 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10621,G__10622,G__10623) : sci.impl.evaluator.eval.call(null,G__10621,G__10622,G__10623));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg10307 = (function (){var G__10624 = ctx;
var G__10625 = bindings;
var G__10626 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10624,G__10625,G__10626) : sci.impl.evaluator.eval.call(null,G__10624,G__10625,G__10626));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg10308 = (function (){var G__10627 = ctx;
var G__10628 = bindings;
var G__10629 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10627,G__10628,G__10629) : sci.impl.evaluator.eval.call(null,G__10627,G__10628,G__10629));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg10309 = (function (){var G__10630 = ctx;
var G__10631 = bindings;
var G__10632 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10630,G__10631,G__10632) : sci.impl.evaluator.eval.call(null,G__10630,G__10631,G__10632));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg10299,arg10300,arg10301,arg10302,arg10303,arg10304,arg10305,arg10306,arg10307,arg10308,arg10309) : f.call(null,arg10299,arg10300,arg10301,arg10302,arg10303,arg10304,arg10305,arg10306,arg10307,arg10308,arg10309));

break;
case (12):
var arg10310 = (function (){var G__10633 = ctx;
var G__10634 = bindings;
var G__10635 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10633,G__10634,G__10635) : sci.impl.evaluator.eval.call(null,G__10633,G__10634,G__10635));
})();
var args__$1 = cljs.core.rest(args);
var arg10311 = (function (){var G__10636 = ctx;
var G__10637 = bindings;
var G__10638 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10636,G__10637,G__10638) : sci.impl.evaluator.eval.call(null,G__10636,G__10637,G__10638));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg10312 = (function (){var G__10639 = ctx;
var G__10640 = bindings;
var G__10641 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10639,G__10640,G__10641) : sci.impl.evaluator.eval.call(null,G__10639,G__10640,G__10641));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg10313 = (function (){var G__10642 = ctx;
var G__10643 = bindings;
var G__10644 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10642,G__10643,G__10644) : sci.impl.evaluator.eval.call(null,G__10642,G__10643,G__10644));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg10314 = (function (){var G__10645 = ctx;
var G__10646 = bindings;
var G__10647 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10645,G__10646,G__10647) : sci.impl.evaluator.eval.call(null,G__10645,G__10646,G__10647));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg10315 = (function (){var G__10648 = ctx;
var G__10649 = bindings;
var G__10650 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10648,G__10649,G__10650) : sci.impl.evaluator.eval.call(null,G__10648,G__10649,G__10650));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg10316 = (function (){var G__10651 = ctx;
var G__10652 = bindings;
var G__10653 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10651,G__10652,G__10653) : sci.impl.evaluator.eval.call(null,G__10651,G__10652,G__10653));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg10317 = (function (){var G__10654 = ctx;
var G__10655 = bindings;
var G__10656 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10654,G__10655,G__10656) : sci.impl.evaluator.eval.call(null,G__10654,G__10655,G__10656));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg10318 = (function (){var G__10657 = ctx;
var G__10658 = bindings;
var G__10659 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10657,G__10658,G__10659) : sci.impl.evaluator.eval.call(null,G__10657,G__10658,G__10659));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg10319 = (function (){var G__10660 = ctx;
var G__10661 = bindings;
var G__10662 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10660,G__10661,G__10662) : sci.impl.evaluator.eval.call(null,G__10660,G__10661,G__10662));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg10320 = (function (){var G__10663 = ctx;
var G__10664 = bindings;
var G__10665 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10663,G__10664,G__10665) : sci.impl.evaluator.eval.call(null,G__10663,G__10664,G__10665));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg10321 = (function (){var G__10666 = ctx;
var G__10667 = bindings;
var G__10668 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10666,G__10667,G__10668) : sci.impl.evaluator.eval.call(null,G__10666,G__10667,G__10668));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg10310,arg10311,arg10312,arg10313,arg10314,arg10315,arg10316,arg10317,arg10318,arg10319,arg10320,arg10321) : f.call(null,arg10310,arg10311,arg10312,arg10313,arg10314,arg10315,arg10316,arg10317,arg10318,arg10319,arg10320,arg10321));

break;
case (13):
var arg10322 = (function (){var G__10669 = ctx;
var G__10670 = bindings;
var G__10671 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10669,G__10670,G__10671) : sci.impl.evaluator.eval.call(null,G__10669,G__10670,G__10671));
})();
var args__$1 = cljs.core.rest(args);
var arg10323 = (function (){var G__10672 = ctx;
var G__10673 = bindings;
var G__10674 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10672,G__10673,G__10674) : sci.impl.evaluator.eval.call(null,G__10672,G__10673,G__10674));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg10324 = (function (){var G__10675 = ctx;
var G__10676 = bindings;
var G__10677 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10675,G__10676,G__10677) : sci.impl.evaluator.eval.call(null,G__10675,G__10676,G__10677));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg10325 = (function (){var G__10678 = ctx;
var G__10679 = bindings;
var G__10680 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10678,G__10679,G__10680) : sci.impl.evaluator.eval.call(null,G__10678,G__10679,G__10680));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg10326 = (function (){var G__10681 = ctx;
var G__10682 = bindings;
var G__10683 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10681,G__10682,G__10683) : sci.impl.evaluator.eval.call(null,G__10681,G__10682,G__10683));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg10327 = (function (){var G__10684 = ctx;
var G__10685 = bindings;
var G__10686 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10684,G__10685,G__10686) : sci.impl.evaluator.eval.call(null,G__10684,G__10685,G__10686));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg10328 = (function (){var G__10687 = ctx;
var G__10688 = bindings;
var G__10689 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10687,G__10688,G__10689) : sci.impl.evaluator.eval.call(null,G__10687,G__10688,G__10689));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg10329 = (function (){var G__10690 = ctx;
var G__10691 = bindings;
var G__10692 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10690,G__10691,G__10692) : sci.impl.evaluator.eval.call(null,G__10690,G__10691,G__10692));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg10330 = (function (){var G__10693 = ctx;
var G__10694 = bindings;
var G__10695 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10693,G__10694,G__10695) : sci.impl.evaluator.eval.call(null,G__10693,G__10694,G__10695));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg10331 = (function (){var G__10696 = ctx;
var G__10697 = bindings;
var G__10698 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10696,G__10697,G__10698) : sci.impl.evaluator.eval.call(null,G__10696,G__10697,G__10698));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg10332 = (function (){var G__10699 = ctx;
var G__10700 = bindings;
var G__10701 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10699,G__10700,G__10701) : sci.impl.evaluator.eval.call(null,G__10699,G__10700,G__10701));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg10333 = (function (){var G__10702 = ctx;
var G__10703 = bindings;
var G__10704 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10702,G__10703,G__10704) : sci.impl.evaluator.eval.call(null,G__10702,G__10703,G__10704));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg10334 = (function (){var G__10705 = ctx;
var G__10706 = bindings;
var G__10707 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10705,G__10706,G__10707) : sci.impl.evaluator.eval.call(null,G__10705,G__10706,G__10707));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg10322,arg10323,arg10324,arg10325,arg10326,arg10327,arg10328,arg10329,arg10330,arg10331,arg10332,arg10333,arg10334) : f.call(null,arg10322,arg10323,arg10324,arg10325,arg10326,arg10327,arg10328,arg10329,arg10330,arg10331,arg10332,arg10333,arg10334));

break;
case (14):
var arg10335 = (function (){var G__10708 = ctx;
var G__10709 = bindings;
var G__10710 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10708,G__10709,G__10710) : sci.impl.evaluator.eval.call(null,G__10708,G__10709,G__10710));
})();
var args__$1 = cljs.core.rest(args);
var arg10336 = (function (){var G__10711 = ctx;
var G__10712 = bindings;
var G__10713 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10711,G__10712,G__10713) : sci.impl.evaluator.eval.call(null,G__10711,G__10712,G__10713));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg10337 = (function (){var G__10714 = ctx;
var G__10715 = bindings;
var G__10716 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10714,G__10715,G__10716) : sci.impl.evaluator.eval.call(null,G__10714,G__10715,G__10716));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg10338 = (function (){var G__10717 = ctx;
var G__10718 = bindings;
var G__10719 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10717,G__10718,G__10719) : sci.impl.evaluator.eval.call(null,G__10717,G__10718,G__10719));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg10339 = (function (){var G__10720 = ctx;
var G__10721 = bindings;
var G__10722 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10720,G__10721,G__10722) : sci.impl.evaluator.eval.call(null,G__10720,G__10721,G__10722));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg10340 = (function (){var G__10723 = ctx;
var G__10724 = bindings;
var G__10725 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10723,G__10724,G__10725) : sci.impl.evaluator.eval.call(null,G__10723,G__10724,G__10725));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg10341 = (function (){var G__10726 = ctx;
var G__10727 = bindings;
var G__10728 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10726,G__10727,G__10728) : sci.impl.evaluator.eval.call(null,G__10726,G__10727,G__10728));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg10342 = (function (){var G__10729 = ctx;
var G__10730 = bindings;
var G__10731 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10729,G__10730,G__10731) : sci.impl.evaluator.eval.call(null,G__10729,G__10730,G__10731));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg10343 = (function (){var G__10732 = ctx;
var G__10733 = bindings;
var G__10734 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10732,G__10733,G__10734) : sci.impl.evaluator.eval.call(null,G__10732,G__10733,G__10734));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg10344 = (function (){var G__10735 = ctx;
var G__10736 = bindings;
var G__10737 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10735,G__10736,G__10737) : sci.impl.evaluator.eval.call(null,G__10735,G__10736,G__10737));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg10345 = (function (){var G__10738 = ctx;
var G__10739 = bindings;
var G__10740 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10738,G__10739,G__10740) : sci.impl.evaluator.eval.call(null,G__10738,G__10739,G__10740));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg10346 = (function (){var G__10741 = ctx;
var G__10742 = bindings;
var G__10743 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10741,G__10742,G__10743) : sci.impl.evaluator.eval.call(null,G__10741,G__10742,G__10743));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg10347 = (function (){var G__10744 = ctx;
var G__10745 = bindings;
var G__10746 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10744,G__10745,G__10746) : sci.impl.evaluator.eval.call(null,G__10744,G__10745,G__10746));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg10348 = (function (){var G__10747 = ctx;
var G__10748 = bindings;
var G__10749 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10747,G__10748,G__10749) : sci.impl.evaluator.eval.call(null,G__10747,G__10748,G__10749));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg10335,arg10336,arg10337,arg10338,arg10339,arg10340,arg10341,arg10342,arg10343,arg10344,arg10345,arg10346,arg10347,arg10348) : f.call(null,arg10335,arg10336,arg10337,arg10338,arg10339,arg10340,arg10341,arg10342,arg10343,arg10344,arg10345,arg10346,arg10347,arg10348));

break;
case (15):
var arg10349 = (function (){var G__10750 = ctx;
var G__10751 = bindings;
var G__10752 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10750,G__10751,G__10752) : sci.impl.evaluator.eval.call(null,G__10750,G__10751,G__10752));
})();
var args__$1 = cljs.core.rest(args);
var arg10350 = (function (){var G__10753 = ctx;
var G__10754 = bindings;
var G__10755 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10753,G__10754,G__10755) : sci.impl.evaluator.eval.call(null,G__10753,G__10754,G__10755));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg10351 = (function (){var G__10756 = ctx;
var G__10757 = bindings;
var G__10758 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10756,G__10757,G__10758) : sci.impl.evaluator.eval.call(null,G__10756,G__10757,G__10758));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg10352 = (function (){var G__10759 = ctx;
var G__10760 = bindings;
var G__10761 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10759,G__10760,G__10761) : sci.impl.evaluator.eval.call(null,G__10759,G__10760,G__10761));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg10353 = (function (){var G__10762 = ctx;
var G__10763 = bindings;
var G__10764 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10762,G__10763,G__10764) : sci.impl.evaluator.eval.call(null,G__10762,G__10763,G__10764));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg10354 = (function (){var G__10765 = ctx;
var G__10766 = bindings;
var G__10767 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10765,G__10766,G__10767) : sci.impl.evaluator.eval.call(null,G__10765,G__10766,G__10767));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg10355 = (function (){var G__10768 = ctx;
var G__10769 = bindings;
var G__10770 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10768,G__10769,G__10770) : sci.impl.evaluator.eval.call(null,G__10768,G__10769,G__10770));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg10356 = (function (){var G__10771 = ctx;
var G__10772 = bindings;
var G__10773 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10771,G__10772,G__10773) : sci.impl.evaluator.eval.call(null,G__10771,G__10772,G__10773));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg10357 = (function (){var G__10774 = ctx;
var G__10775 = bindings;
var G__10776 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10774,G__10775,G__10776) : sci.impl.evaluator.eval.call(null,G__10774,G__10775,G__10776));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg10358 = (function (){var G__10777 = ctx;
var G__10778 = bindings;
var G__10779 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10777,G__10778,G__10779) : sci.impl.evaluator.eval.call(null,G__10777,G__10778,G__10779));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg10359 = (function (){var G__10780 = ctx;
var G__10781 = bindings;
var G__10782 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10780,G__10781,G__10782) : sci.impl.evaluator.eval.call(null,G__10780,G__10781,G__10782));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg10360 = (function (){var G__10783 = ctx;
var G__10784 = bindings;
var G__10785 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10783,G__10784,G__10785) : sci.impl.evaluator.eval.call(null,G__10783,G__10784,G__10785));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg10361 = (function (){var G__10786 = ctx;
var G__10787 = bindings;
var G__10788 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10786,G__10787,G__10788) : sci.impl.evaluator.eval.call(null,G__10786,G__10787,G__10788));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg10362 = (function (){var G__10789 = ctx;
var G__10790 = bindings;
var G__10791 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10789,G__10790,G__10791) : sci.impl.evaluator.eval.call(null,G__10789,G__10790,G__10791));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg10363 = (function (){var G__10792 = ctx;
var G__10793 = bindings;
var G__10794 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10792,G__10793,G__10794) : sci.impl.evaluator.eval.call(null,G__10792,G__10793,G__10794));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg10349,arg10350,arg10351,arg10352,arg10353,arg10354,arg10355,arg10356,arg10357,arg10358,arg10359,arg10360,arg10361,arg10362,arg10363) : f.call(null,arg10349,arg10350,arg10351,arg10352,arg10353,arg10354,arg10355,arg10356,arg10357,arg10358,arg10359,arg10360,arg10361,arg10362,arg10363));

break;
case (16):
var arg10364 = (function (){var G__10795 = ctx;
var G__10796 = bindings;
var G__10797 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10795,G__10796,G__10797) : sci.impl.evaluator.eval.call(null,G__10795,G__10796,G__10797));
})();
var args__$1 = cljs.core.rest(args);
var arg10365 = (function (){var G__10798 = ctx;
var G__10799 = bindings;
var G__10800 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10798,G__10799,G__10800) : sci.impl.evaluator.eval.call(null,G__10798,G__10799,G__10800));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg10366 = (function (){var G__10801 = ctx;
var G__10802 = bindings;
var G__10803 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10801,G__10802,G__10803) : sci.impl.evaluator.eval.call(null,G__10801,G__10802,G__10803));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg10367 = (function (){var G__10804 = ctx;
var G__10805 = bindings;
var G__10806 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10804,G__10805,G__10806) : sci.impl.evaluator.eval.call(null,G__10804,G__10805,G__10806));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg10368 = (function (){var G__10807 = ctx;
var G__10808 = bindings;
var G__10809 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10807,G__10808,G__10809) : sci.impl.evaluator.eval.call(null,G__10807,G__10808,G__10809));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg10369 = (function (){var G__10810 = ctx;
var G__10811 = bindings;
var G__10812 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10810,G__10811,G__10812) : sci.impl.evaluator.eval.call(null,G__10810,G__10811,G__10812));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg10370 = (function (){var G__10813 = ctx;
var G__10814 = bindings;
var G__10815 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10813,G__10814,G__10815) : sci.impl.evaluator.eval.call(null,G__10813,G__10814,G__10815));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg10371 = (function (){var G__10816 = ctx;
var G__10817 = bindings;
var G__10818 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10816,G__10817,G__10818) : sci.impl.evaluator.eval.call(null,G__10816,G__10817,G__10818));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg10372 = (function (){var G__10819 = ctx;
var G__10820 = bindings;
var G__10821 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10819,G__10820,G__10821) : sci.impl.evaluator.eval.call(null,G__10819,G__10820,G__10821));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg10373 = (function (){var G__10822 = ctx;
var G__10823 = bindings;
var G__10824 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10822,G__10823,G__10824) : sci.impl.evaluator.eval.call(null,G__10822,G__10823,G__10824));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg10374 = (function (){var G__10825 = ctx;
var G__10826 = bindings;
var G__10827 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10825,G__10826,G__10827) : sci.impl.evaluator.eval.call(null,G__10825,G__10826,G__10827));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg10375 = (function (){var G__10828 = ctx;
var G__10829 = bindings;
var G__10830 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10828,G__10829,G__10830) : sci.impl.evaluator.eval.call(null,G__10828,G__10829,G__10830));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg10376 = (function (){var G__10831 = ctx;
var G__10832 = bindings;
var G__10833 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10831,G__10832,G__10833) : sci.impl.evaluator.eval.call(null,G__10831,G__10832,G__10833));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg10377 = (function (){var G__10834 = ctx;
var G__10835 = bindings;
var G__10836 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10834,G__10835,G__10836) : sci.impl.evaluator.eval.call(null,G__10834,G__10835,G__10836));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg10378 = (function (){var G__10837 = ctx;
var G__10838 = bindings;
var G__10839 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10837,G__10838,G__10839) : sci.impl.evaluator.eval.call(null,G__10837,G__10838,G__10839));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg10379 = (function (){var G__10840 = ctx;
var G__10841 = bindings;
var G__10842 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10840,G__10841,G__10842) : sci.impl.evaluator.eval.call(null,G__10840,G__10841,G__10842));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg10364,arg10365,arg10366,arg10367,arg10368,arg10369,arg10370,arg10371,arg10372,arg10373,arg10374,arg10375,arg10376,arg10377,arg10378,arg10379) : f.call(null,arg10364,arg10365,arg10366,arg10367,arg10368,arg10369,arg10370,arg10371,arg10372,arg10373,arg10374,arg10375,arg10376,arg10377,arg10378,arg10379));

break;
case (17):
var arg10380 = (function (){var G__10843 = ctx;
var G__10844 = bindings;
var G__10845 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10843,G__10844,G__10845) : sci.impl.evaluator.eval.call(null,G__10843,G__10844,G__10845));
})();
var args__$1 = cljs.core.rest(args);
var arg10381 = (function (){var G__10846 = ctx;
var G__10847 = bindings;
var G__10848 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10846,G__10847,G__10848) : sci.impl.evaluator.eval.call(null,G__10846,G__10847,G__10848));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg10382 = (function (){var G__10849 = ctx;
var G__10850 = bindings;
var G__10851 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10849,G__10850,G__10851) : sci.impl.evaluator.eval.call(null,G__10849,G__10850,G__10851));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg10383 = (function (){var G__10852 = ctx;
var G__10853 = bindings;
var G__10854 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10852,G__10853,G__10854) : sci.impl.evaluator.eval.call(null,G__10852,G__10853,G__10854));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg10384 = (function (){var G__10855 = ctx;
var G__10856 = bindings;
var G__10857 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10855,G__10856,G__10857) : sci.impl.evaluator.eval.call(null,G__10855,G__10856,G__10857));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg10385 = (function (){var G__10858 = ctx;
var G__10859 = bindings;
var G__10860 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10858,G__10859,G__10860) : sci.impl.evaluator.eval.call(null,G__10858,G__10859,G__10860));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg10386 = (function (){var G__10861 = ctx;
var G__10862 = bindings;
var G__10863 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10861,G__10862,G__10863) : sci.impl.evaluator.eval.call(null,G__10861,G__10862,G__10863));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg10387 = (function (){var G__10864 = ctx;
var G__10865 = bindings;
var G__10866 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10864,G__10865,G__10866) : sci.impl.evaluator.eval.call(null,G__10864,G__10865,G__10866));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg10388 = (function (){var G__10867 = ctx;
var G__10868 = bindings;
var G__10869 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10867,G__10868,G__10869) : sci.impl.evaluator.eval.call(null,G__10867,G__10868,G__10869));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg10389 = (function (){var G__10870 = ctx;
var G__10871 = bindings;
var G__10872 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10870,G__10871,G__10872) : sci.impl.evaluator.eval.call(null,G__10870,G__10871,G__10872));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg10390 = (function (){var G__10873 = ctx;
var G__10874 = bindings;
var G__10875 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10873,G__10874,G__10875) : sci.impl.evaluator.eval.call(null,G__10873,G__10874,G__10875));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg10391 = (function (){var G__10876 = ctx;
var G__10877 = bindings;
var G__10878 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10876,G__10877,G__10878) : sci.impl.evaluator.eval.call(null,G__10876,G__10877,G__10878));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg10392 = (function (){var G__10879 = ctx;
var G__10880 = bindings;
var G__10881 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10879,G__10880,G__10881) : sci.impl.evaluator.eval.call(null,G__10879,G__10880,G__10881));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg10393 = (function (){var G__10882 = ctx;
var G__10883 = bindings;
var G__10884 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10882,G__10883,G__10884) : sci.impl.evaluator.eval.call(null,G__10882,G__10883,G__10884));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg10394 = (function (){var G__10885 = ctx;
var G__10886 = bindings;
var G__10887 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10885,G__10886,G__10887) : sci.impl.evaluator.eval.call(null,G__10885,G__10886,G__10887));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg10395 = (function (){var G__10888 = ctx;
var G__10889 = bindings;
var G__10890 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10888,G__10889,G__10890) : sci.impl.evaluator.eval.call(null,G__10888,G__10889,G__10890));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg10396 = (function (){var G__10891 = ctx;
var G__10892 = bindings;
var G__10893 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10891,G__10892,G__10893) : sci.impl.evaluator.eval.call(null,G__10891,G__10892,G__10893));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg10380,arg10381,arg10382,arg10383,arg10384,arg10385,arg10386,arg10387,arg10388,arg10389,arg10390,arg10391,arg10392,arg10393,arg10394,arg10395,arg10396) : f.call(null,arg10380,arg10381,arg10382,arg10383,arg10384,arg10385,arg10386,arg10387,arg10388,arg10389,arg10390,arg10391,arg10392,arg10393,arg10394,arg10395,arg10396));

break;
case (18):
var arg10397 = (function (){var G__10894 = ctx;
var G__10895 = bindings;
var G__10896 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10894,G__10895,G__10896) : sci.impl.evaluator.eval.call(null,G__10894,G__10895,G__10896));
})();
var args__$1 = cljs.core.rest(args);
var arg10398 = (function (){var G__10897 = ctx;
var G__10898 = bindings;
var G__10899 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10897,G__10898,G__10899) : sci.impl.evaluator.eval.call(null,G__10897,G__10898,G__10899));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg10399 = (function (){var G__10900 = ctx;
var G__10901 = bindings;
var G__10902 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10900,G__10901,G__10902) : sci.impl.evaluator.eval.call(null,G__10900,G__10901,G__10902));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg10400 = (function (){var G__10903 = ctx;
var G__10904 = bindings;
var G__10905 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10903,G__10904,G__10905) : sci.impl.evaluator.eval.call(null,G__10903,G__10904,G__10905));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg10401 = (function (){var G__10906 = ctx;
var G__10907 = bindings;
var G__10908 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10906,G__10907,G__10908) : sci.impl.evaluator.eval.call(null,G__10906,G__10907,G__10908));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg10402 = (function (){var G__10909 = ctx;
var G__10910 = bindings;
var G__10911 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10909,G__10910,G__10911) : sci.impl.evaluator.eval.call(null,G__10909,G__10910,G__10911));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg10403 = (function (){var G__10912 = ctx;
var G__10913 = bindings;
var G__10914 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10912,G__10913,G__10914) : sci.impl.evaluator.eval.call(null,G__10912,G__10913,G__10914));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg10404 = (function (){var G__10915 = ctx;
var G__10916 = bindings;
var G__10917 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10915,G__10916,G__10917) : sci.impl.evaluator.eval.call(null,G__10915,G__10916,G__10917));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg10405 = (function (){var G__10918 = ctx;
var G__10919 = bindings;
var G__10920 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10918,G__10919,G__10920) : sci.impl.evaluator.eval.call(null,G__10918,G__10919,G__10920));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg10406 = (function (){var G__10921 = ctx;
var G__10922 = bindings;
var G__10923 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10921,G__10922,G__10923) : sci.impl.evaluator.eval.call(null,G__10921,G__10922,G__10923));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg10407 = (function (){var G__10924 = ctx;
var G__10925 = bindings;
var G__10926 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10924,G__10925,G__10926) : sci.impl.evaluator.eval.call(null,G__10924,G__10925,G__10926));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg10408 = (function (){var G__10927 = ctx;
var G__10928 = bindings;
var G__10929 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10927,G__10928,G__10929) : sci.impl.evaluator.eval.call(null,G__10927,G__10928,G__10929));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg10409 = (function (){var G__10930 = ctx;
var G__10931 = bindings;
var G__10932 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10930,G__10931,G__10932) : sci.impl.evaluator.eval.call(null,G__10930,G__10931,G__10932));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg10410 = (function (){var G__10933 = ctx;
var G__10934 = bindings;
var G__10935 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10933,G__10934,G__10935) : sci.impl.evaluator.eval.call(null,G__10933,G__10934,G__10935));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg10411 = (function (){var G__10936 = ctx;
var G__10937 = bindings;
var G__10938 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10936,G__10937,G__10938) : sci.impl.evaluator.eval.call(null,G__10936,G__10937,G__10938));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg10412 = (function (){var G__10939 = ctx;
var G__10940 = bindings;
var G__10941 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10939,G__10940,G__10941) : sci.impl.evaluator.eval.call(null,G__10939,G__10940,G__10941));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg10413 = (function (){var G__10942 = ctx;
var G__10943 = bindings;
var G__10944 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10942,G__10943,G__10944) : sci.impl.evaluator.eval.call(null,G__10942,G__10943,G__10944));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg10414 = (function (){var G__10945 = ctx;
var G__10946 = bindings;
var G__10947 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10945,G__10946,G__10947) : sci.impl.evaluator.eval.call(null,G__10945,G__10946,G__10947));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg10397,arg10398,arg10399,arg10400,arg10401,arg10402,arg10403,arg10404,arg10405,arg10406,arg10407,arg10408,arg10409,arg10410,arg10411,arg10412,arg10413,arg10414) : f.call(null,arg10397,arg10398,arg10399,arg10400,arg10401,arg10402,arg10403,arg10404,arg10405,arg10406,arg10407,arg10408,arg10409,arg10410,arg10411,arg10412,arg10413,arg10414));

break;
case (19):
var arg10415 = (function (){var G__10948 = ctx;
var G__10949 = bindings;
var G__10950 = cljs.core.first(args);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10948,G__10949,G__10950) : sci.impl.evaluator.eval.call(null,G__10948,G__10949,G__10950));
})();
var args__$1 = cljs.core.rest(args);
var arg10416 = (function (){var G__10951 = ctx;
var G__10952 = bindings;
var G__10953 = cljs.core.first(args__$1);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10951,G__10952,G__10953) : sci.impl.evaluator.eval.call(null,G__10951,G__10952,G__10953));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg10417 = (function (){var G__10954 = ctx;
var G__10955 = bindings;
var G__10956 = cljs.core.first(args__$2);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10954,G__10955,G__10956) : sci.impl.evaluator.eval.call(null,G__10954,G__10955,G__10956));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg10418 = (function (){var G__10957 = ctx;
var G__10958 = bindings;
var G__10959 = cljs.core.first(args__$3);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10957,G__10958,G__10959) : sci.impl.evaluator.eval.call(null,G__10957,G__10958,G__10959));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg10419 = (function (){var G__10960 = ctx;
var G__10961 = bindings;
var G__10962 = cljs.core.first(args__$4);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10960,G__10961,G__10962) : sci.impl.evaluator.eval.call(null,G__10960,G__10961,G__10962));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg10420 = (function (){var G__10963 = ctx;
var G__10964 = bindings;
var G__10965 = cljs.core.first(args__$5);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10963,G__10964,G__10965) : sci.impl.evaluator.eval.call(null,G__10963,G__10964,G__10965));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg10421 = (function (){var G__10966 = ctx;
var G__10967 = bindings;
var G__10968 = cljs.core.first(args__$6);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10966,G__10967,G__10968) : sci.impl.evaluator.eval.call(null,G__10966,G__10967,G__10968));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg10422 = (function (){var G__10969 = ctx;
var G__10970 = bindings;
var G__10971 = cljs.core.first(args__$7);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10969,G__10970,G__10971) : sci.impl.evaluator.eval.call(null,G__10969,G__10970,G__10971));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg10423 = (function (){var G__10972 = ctx;
var G__10973 = bindings;
var G__10974 = cljs.core.first(args__$8);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10972,G__10973,G__10974) : sci.impl.evaluator.eval.call(null,G__10972,G__10973,G__10974));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg10424 = (function (){var G__10975 = ctx;
var G__10976 = bindings;
var G__10977 = cljs.core.first(args__$9);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10975,G__10976,G__10977) : sci.impl.evaluator.eval.call(null,G__10975,G__10976,G__10977));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg10425 = (function (){var G__10978 = ctx;
var G__10979 = bindings;
var G__10980 = cljs.core.first(args__$10);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10978,G__10979,G__10980) : sci.impl.evaluator.eval.call(null,G__10978,G__10979,G__10980));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg10426 = (function (){var G__10981 = ctx;
var G__10982 = bindings;
var G__10983 = cljs.core.first(args__$11);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10981,G__10982,G__10983) : sci.impl.evaluator.eval.call(null,G__10981,G__10982,G__10983));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg10427 = (function (){var G__10984 = ctx;
var G__10985 = bindings;
var G__10986 = cljs.core.first(args__$12);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10984,G__10985,G__10986) : sci.impl.evaluator.eval.call(null,G__10984,G__10985,G__10986));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg10428 = (function (){var G__10987 = ctx;
var G__10988 = bindings;
var G__10989 = cljs.core.first(args__$13);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10987,G__10988,G__10989) : sci.impl.evaluator.eval.call(null,G__10987,G__10988,G__10989));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg10429 = (function (){var G__10990 = ctx;
var G__10991 = bindings;
var G__10992 = cljs.core.first(args__$14);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10990,G__10991,G__10992) : sci.impl.evaluator.eval.call(null,G__10990,G__10991,G__10992));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg10430 = (function (){var G__10993 = ctx;
var G__10994 = bindings;
var G__10995 = cljs.core.first(args__$15);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10993,G__10994,G__10995) : sci.impl.evaluator.eval.call(null,G__10993,G__10994,G__10995));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg10431 = (function (){var G__10996 = ctx;
var G__10997 = bindings;
var G__10998 = cljs.core.first(args__$16);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10996,G__10997,G__10998) : sci.impl.evaluator.eval.call(null,G__10996,G__10997,G__10998));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg10432 = (function (){var G__10999 = ctx;
var G__11000 = bindings;
var G__11001 = cljs.core.first(args__$17);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__10999,G__11000,G__11001) : sci.impl.evaluator.eval.call(null,G__10999,G__11000,G__11001));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg10433 = (function (){var G__11002 = ctx;
var G__11003 = bindings;
var G__11004 = cljs.core.first(args__$18);
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(G__11002,G__11003,G__11004) : sci.impl.evaluator.eval.call(null,G__11002,G__11003,G__11004));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg10415,arg10416,arg10417,arg10418,arg10419,arg10420,arg10421,arg10422,arg10423,arg10424,arg10425,arg10426,arg10427,arg10428,arg10429,arg10430,arg10431,arg10432,arg10433) : f.call(null,arg10415,arg10416,arg10417,arg10418,arg10419,arg10420,arg10421,arg10422,arg10423,arg10424,arg10425,arg10426,arg10427,arg10428,arg10429,arg10430,arg10431,arg10432,arg10433));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__9969_SHARP_){
return (sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3 ? sci.impl.evaluator.eval.cljs$core$IFn$_invoke$arity$3(ctx,bindings,p1__9969_SHARP_) : sci.impl.evaluator.eval.call(null,ctx,bindings,p1__9969_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.evaluator.eval = (function sci$impl$evaluator$eval(ctx,bindings,expr){
try{if((expr instanceof sci.impl.types.EvalFn)){
var f = expr.f;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(ctx,bindings) : f.call(null,ctx,bindings));
} else {
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.v;
return cljs.core._deref(v);
} else {
if((((expr == null))?false:(((!((expr == null))))?(((((expr.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === expr.cljs$core$IMap$))))?true:(((!expr.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,expr):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,expr)))){
return sci.impl.evaluator.eval_map(ctx,bindings,expr);
} else {
return expr;

}
}
}
}catch (e11006){if((e11006 instanceof Error)){
var e = e11006;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$4(ctx,bindings,e,expr);
} else {
throw e11006;

}
}});
cljs.core.vreset_BANG_(sci.impl.utils.eval_STAR_,sci.impl.evaluator.eval);
