// Compiled by ClojureScript 1.10.758 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.analyzer');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('sci.impl.destructure');
goog.require('sci.impl.doseq_macro');
goog.require('sci.impl.evaluator');
goog.require('sci.impl.fns');
goog.require('sci.impl.for_macro');
goog.require('sci.impl.interop');
goog.require('sci.impl.load');
goog.require('sci.impl.records');
goog.require('sci.impl.resolve');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');
sci.impl.analyzer.special_syms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [cljs.core.cst$sym$try,"null",cljs.core.cst$sym$finally,"null",cljs.core.cst$sym$do,"null",cljs.core.cst$sym$if,"null",cljs.core.cst$sym$new,"null",cljs.core.cst$sym$recur,"null",cljs.core.cst$sym$set_BANG_,"null",cljs.core.cst$sym$_DOT_,"null",cljs.core.cst$sym$var,"null",cljs.core.cst$sym$quote,"null",cljs.core.cst$sym$catch,"null",cljs.core.cst$sym$throw,"null",cljs.core.cst$sym$def,"null"], null), null);
sci.impl.analyzer.throw_error_with_location = (function sci$impl$analyzer$throw_error_with_location(msg,node){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,node,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$phase,"analysis"], null));
});



sci.impl.analyzer.macroexpand_1 = (function sci$impl$analyzer$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$for,null], null), null),op)){
var G__14574 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$sci$impl_SLASH_macroexpanding,true);
var G__14575 = expr;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__14574,G__14575) : sci.impl.analyzer.analyze.call(null,G__14574,G__14575));
} else {
var f = (function (){try{return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
}catch (e14576){var _ = e14576;
return cljs.core.cst$kw$sci$impl$analyzer_SLASH_unresolved;
}})();
if(cljs.core.truth_((function (){var G__14577 = cljs.core.cst$kw$sci$impl$analyzer_SLASH_unresolved;
var G__14578 = f;
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__14577,G__14578) : sci.impl.utils.kw_identical_QMARK_.call(null,G__14577,G__14578));
})())){
return expr;
} else {
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.utils.macro_QMARK_(f__$1))){
var f__$2 = (((sci.impl.utils.needs_ctx === (function (){var G__14579 = f__$1;
var G__14579__$1 = (((G__14579 == null))?null:cljs.core.meta(G__14579));
if((G__14579__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$sci$impl_SLASH_op.cljs$core$IFn$_invoke$arity$1(G__14579__$1);
}
})()))?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f__$1,ctx):f__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$2,original_expr,cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.analyzer.macroexpand = (function sci$impl$analyzer$macroexpand(ctx,form){
var ex = sci.impl.analyzer.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.analyzer.macroexpand.call(null,ctx,ex));
}
});
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_STAR_,sci.impl.analyzer.macroexpand);
cljs.core.vreset_BANG_(sci.impl.utils.macroexpand_1_STAR_,sci.impl.analyzer.macroexpand_1);
var ret__4785__auto___14584 = sci.impl.analyzer.gen_return_do = (function sci$impl$analyzer$gen_return_do(_AMPERSAND_form,_AMPERSAND_env){
var let_bindings = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["arg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_nth,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,j,null,(1),null))], 0))))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$1(i)], 0)))], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((2),(4)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$return_DASH_do,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$expr,cljs.core.cst$sym$analyzed_DASH_children], null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_case,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_count,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_nth,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null))], 0))))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__14580){
var vec__14581 = p__14580;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14581,(0),null);
var binds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14581,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,binds,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$utils_SLASH_ctx_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (j){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$evaluator_SLASH_eval,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["arg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')),null,(1),null))], 0))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(i))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$expr,null,(1),null))], 0)))),null,(1),null))], 0))))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([let_bindings], 0)),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$utils_SLASH_ctx_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$evaluator_SLASH_eval_DASH_do,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$expr,null,(1),null))], 0)))),null,(1),null))))))], 0))], 0)))),null,(1),null))], 0))));
});
(sci.impl.analyzer.gen_return_do.cljs$lang$macro = true);

sci.impl.analyzer.return_do = (function sci$impl$analyzer$return_do(expr,analyzed_children){
var G__14585 = cljs.core.count(analyzed_children);
switch (G__14585) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
sci.impl.evaluator.eval(ctx,bindings,arg0);

return sci.impl.evaluator.eval(ctx,bindings,arg1);
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
sci.impl.evaluator.eval(ctx,bindings,arg0);

sci.impl.evaluator.eval(ctx,bindings,arg1);

return sci.impl.evaluator.eval(ctx,bindings,arg2);
}),expr);

break;
default:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.evaluator.eval_do(ctx,bindings,analyzed_children);
}),expr);

}
});
var ret__4785__auto___14591 = sci.impl.analyzer.gen_return_or = (function sci$impl$analyzer$gen_return_or(_AMPERSAND_form,_AMPERSAND_env){
var let_bindings = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["arg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_nth,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,j,null,(1),null))], 0))))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$1(i)], 0)))], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((2),(20)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$return_DASH_or,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$expr,cljs.core.cst$sym$analyzed_DASH_children], null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_case,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_count,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_nth,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null))], 0))))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__14587){
var vec__14588 = p__14587;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14588,(0),null);
var binds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14588,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,binds,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$utils_SLASH_ctx_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_or,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (j){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$evaluator_SLASH_eval,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["arg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')),null,(1),null))], 0))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(i))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$expr,null,(1),null))], 0)))),null,(1),null))], 0))))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([let_bindings], 0)),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$utils_SLASH_ctx_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$evaluator_SLASH_eval_DASH_or,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$expr,null,(1),null))], 0)))),null,(1),null))))))], 0))], 0)))),null,(1),null))], 0))));
});
(sci.impl.analyzer.gen_return_or.cljs$lang$macro = true);

sci.impl.analyzer.return_or = (function sci$impl$analyzer$return_or(expr,analyzed_children){
var G__14592 = cljs.core.count(analyzed_children);
switch (G__14592) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg1);
}
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg2);
}
}
}),expr);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg3);
}
}
}
}),expr);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg4);
}
}
}
}
}),expr);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg5);
}
}
}
}
}
}),expr);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg6);
}
}
}
}
}
}
}),expr);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg7);
}
}
}
}
}
}
}
}),expr);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg8);
}
}
}
}
}
}
}
}
}),expr);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
var or__4126__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__4126__auto____$8)){
return or__4126__auto____$8;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg9);
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
var or__4126__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__4126__auto____$8)){
return or__4126__auto____$8;
} else {
var or__4126__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__4126__auto____$9)){
return or__4126__auto____$9;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg10);
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
var or__4126__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__4126__auto____$8)){
return or__4126__auto____$8;
} else {
var or__4126__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__4126__auto____$9)){
return or__4126__auto____$9;
} else {
var or__4126__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__4126__auto____$10)){
return or__4126__auto____$10;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg11);
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
var or__4126__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__4126__auto____$8)){
return or__4126__auto____$8;
} else {
var or__4126__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__4126__auto____$9)){
return or__4126__auto____$9;
} else {
var or__4126__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__4126__auto____$10)){
return or__4126__auto____$10;
} else {
var or__4126__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__4126__auto____$11)){
return or__4126__auto____$11;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg12);
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
var or__4126__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__4126__auto____$8)){
return or__4126__auto____$8;
} else {
var or__4126__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__4126__auto____$9)){
return or__4126__auto____$9;
} else {
var or__4126__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__4126__auto____$10)){
return or__4126__auto____$10;
} else {
var or__4126__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__4126__auto____$11)){
return or__4126__auto____$11;
} else {
var or__4126__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__4126__auto____$12)){
return or__4126__auto____$12;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg13);
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
var or__4126__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__4126__auto____$8)){
return or__4126__auto____$8;
} else {
var or__4126__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__4126__auto____$9)){
return or__4126__auto____$9;
} else {
var or__4126__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__4126__auto____$10)){
return or__4126__auto____$10;
} else {
var or__4126__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__4126__auto____$11)){
return or__4126__auto____$11;
} else {
var or__4126__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__4126__auto____$12)){
return or__4126__auto____$12;
} else {
var or__4126__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__4126__auto____$13)){
return or__4126__auto____$13;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg14);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
var or__4126__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__4126__auto____$8)){
return or__4126__auto____$8;
} else {
var or__4126__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__4126__auto____$9)){
return or__4126__auto____$9;
} else {
var or__4126__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__4126__auto____$10)){
return or__4126__auto____$10;
} else {
var or__4126__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__4126__auto____$11)){
return or__4126__auto____$11;
} else {
var or__4126__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__4126__auto____$12)){
return or__4126__auto____$12;
} else {
var or__4126__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__4126__auto____$13)){
return or__4126__auto____$13;
} else {
var or__4126__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(or__4126__auto____$14)){
return or__4126__auto____$14;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg15);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
var or__4126__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__4126__auto____$8)){
return or__4126__auto____$8;
} else {
var or__4126__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__4126__auto____$9)){
return or__4126__auto____$9;
} else {
var or__4126__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__4126__auto____$10)){
return or__4126__auto____$10;
} else {
var or__4126__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__4126__auto____$11)){
return or__4126__auto____$11;
} else {
var or__4126__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__4126__auto____$12)){
return or__4126__auto____$12;
} else {
var or__4126__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__4126__auto____$13)){
return or__4126__auto____$13;
} else {
var or__4126__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(or__4126__auto____$14)){
return or__4126__auto____$14;
} else {
var or__4126__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(or__4126__auto____$15)){
return or__4126__auto____$15;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg16);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
var or__4126__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__4126__auto____$8)){
return or__4126__auto____$8;
} else {
var or__4126__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__4126__auto____$9)){
return or__4126__auto____$9;
} else {
var or__4126__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__4126__auto____$10)){
return or__4126__auto____$10;
} else {
var or__4126__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__4126__auto____$11)){
return or__4126__auto____$11;
} else {
var or__4126__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__4126__auto____$12)){
return or__4126__auto____$12;
} else {
var or__4126__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__4126__auto____$13)){
return or__4126__auto____$13;
} else {
var or__4126__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(or__4126__auto____$14)){
return or__4126__auto____$14;
} else {
var or__4126__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(or__4126__auto____$15)){
return or__4126__auto____$15;
} else {
var or__4126__auto____$16 = sci.impl.evaluator.eval(ctx,bindings,arg16);
if(cljs.core.truth_(or__4126__auto____$16)){
return or__4126__auto____$16;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg17);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var or__4126__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
var or__4126__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(or__4126__auto____$4)){
return or__4126__auto____$4;
} else {
var or__4126__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(or__4126__auto____$5)){
return or__4126__auto____$5;
} else {
var or__4126__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(or__4126__auto____$6)){
return or__4126__auto____$6;
} else {
var or__4126__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(or__4126__auto____$7)){
return or__4126__auto____$7;
} else {
var or__4126__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(or__4126__auto____$8)){
return or__4126__auto____$8;
} else {
var or__4126__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(or__4126__auto____$9)){
return or__4126__auto____$9;
} else {
var or__4126__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(or__4126__auto____$10)){
return or__4126__auto____$10;
} else {
var or__4126__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(or__4126__auto____$11)){
return or__4126__auto____$11;
} else {
var or__4126__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(or__4126__auto____$12)){
return or__4126__auto____$12;
} else {
var or__4126__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(or__4126__auto____$13)){
return or__4126__auto____$13;
} else {
var or__4126__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(or__4126__auto____$14)){
return or__4126__auto____$14;
} else {
var or__4126__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(or__4126__auto____$15)){
return or__4126__auto____$15;
} else {
var or__4126__auto____$16 = sci.impl.evaluator.eval(ctx,bindings,arg16);
if(cljs.core.truth_(or__4126__auto____$16)){
return or__4126__auto____$16;
} else {
var or__4126__auto____$17 = sci.impl.evaluator.eval(ctx,bindings,arg17);
if(cljs.core.truth_(or__4126__auto____$17)){
return or__4126__auto____$17;
} else {
return sci.impl.evaluator.eval(ctx,bindings,arg18);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}),expr);

break;
default:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.evaluator.eval_or(ctx,bindings,analyzed_children);
}),expr);

}
});
var ret__4785__auto___14598 = sci.impl.analyzer.gen_return_and = (function sci$impl$analyzer$gen_return_and(_AMPERSAND_form,_AMPERSAND_env){
var let_bindings = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["arg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_nth,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,j,null,(1),null))], 0))))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$1(i)], 0)))], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((2),(20)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$return_DASH_and,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$expr,cljs.core.cst$sym$analyzed_DASH_children], null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_case,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_count,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_nth,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null))], 0))))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__14594){
var vec__14595 = p__14594;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14595,(0),null);
var binds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14595,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,binds,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$utils_SLASH_ctx_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_and,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (j){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$evaluator_SLASH_eval,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["arg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')),null,(1),null))], 0))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(i))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$expr,null,(1),null))], 0)))),null,(1),null))], 0))))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([let_bindings], 0)),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$utils_SLASH_ctx_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$evaluator_SLASH_eval_DASH_and,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$expr,null,(1),null))], 0)))),null,(1),null))))))], 0))], 0)))),null,(1),null))], 0))));
});
(sci.impl.analyzer.gen_return_and.cljs$lang$macro = true);

sci.impl.analyzer.return_and = (function sci$impl$analyzer$return_and(expr,analyzed_children){
var G__14599 = cljs.core.count(analyzed_children);
switch (G__14599) {
case (0):
return null;

break;
case (1):
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__4115__auto__)){
return sci.impl.evaluator.eval(ctx,bindings,arg1);
} else {
return and__4115__auto__;
}
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
return sci.impl.evaluator.eval(ctx,bindings,arg2);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
return sci.impl.evaluator.eval(ctx,bindings,arg3);
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
return sci.impl.evaluator.eval(ctx,bindings,arg4);
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
return sci.impl.evaluator.eval(ctx,bindings,arg5);
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
return sci.impl.evaluator.eval(ctx,bindings,arg6);
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
return sci.impl.evaluator.eval(ctx,bindings,arg7);
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
var and__4115__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__4115__auto____$7)){
return sci.impl.evaluator.eval(ctx,bindings,arg8);
} else {
return and__4115__auto____$7;
}
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
var and__4115__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__4115__auto____$7)){
var and__4115__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__4115__auto____$8)){
return sci.impl.evaluator.eval(ctx,bindings,arg9);
} else {
return and__4115__auto____$8;
}
} else {
return and__4115__auto____$7;
}
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
var and__4115__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__4115__auto____$7)){
var and__4115__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__4115__auto____$8)){
var and__4115__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__4115__auto____$9)){
return sci.impl.evaluator.eval(ctx,bindings,arg10);
} else {
return and__4115__auto____$9;
}
} else {
return and__4115__auto____$8;
}
} else {
return and__4115__auto____$7;
}
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
var and__4115__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__4115__auto____$7)){
var and__4115__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__4115__auto____$8)){
var and__4115__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__4115__auto____$9)){
var and__4115__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__4115__auto____$10)){
return sci.impl.evaluator.eval(ctx,bindings,arg11);
} else {
return and__4115__auto____$10;
}
} else {
return and__4115__auto____$9;
}
} else {
return and__4115__auto____$8;
}
} else {
return and__4115__auto____$7;
}
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
var and__4115__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__4115__auto____$7)){
var and__4115__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__4115__auto____$8)){
var and__4115__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__4115__auto____$9)){
var and__4115__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__4115__auto____$10)){
var and__4115__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__4115__auto____$11)){
return sci.impl.evaluator.eval(ctx,bindings,arg12);
} else {
return and__4115__auto____$11;
}
} else {
return and__4115__auto____$10;
}
} else {
return and__4115__auto____$9;
}
} else {
return and__4115__auto____$8;
}
} else {
return and__4115__auto____$7;
}
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
var and__4115__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__4115__auto____$7)){
var and__4115__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__4115__auto____$8)){
var and__4115__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__4115__auto____$9)){
var and__4115__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__4115__auto____$10)){
var and__4115__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__4115__auto____$11)){
var and__4115__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__4115__auto____$12)){
return sci.impl.evaluator.eval(ctx,bindings,arg13);
} else {
return and__4115__auto____$12;
}
} else {
return and__4115__auto____$11;
}
} else {
return and__4115__auto____$10;
}
} else {
return and__4115__auto____$9;
}
} else {
return and__4115__auto____$8;
}
} else {
return and__4115__auto____$7;
}
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
var and__4115__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__4115__auto____$7)){
var and__4115__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__4115__auto____$8)){
var and__4115__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__4115__auto____$9)){
var and__4115__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__4115__auto____$10)){
var and__4115__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__4115__auto____$11)){
var and__4115__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__4115__auto____$12)){
var and__4115__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__4115__auto____$13)){
return sci.impl.evaluator.eval(ctx,bindings,arg14);
} else {
return and__4115__auto____$13;
}
} else {
return and__4115__auto____$12;
}
} else {
return and__4115__auto____$11;
}
} else {
return and__4115__auto____$10;
}
} else {
return and__4115__auto____$9;
}
} else {
return and__4115__auto____$8;
}
} else {
return and__4115__auto____$7;
}
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
var and__4115__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__4115__auto____$7)){
var and__4115__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__4115__auto____$8)){
var and__4115__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__4115__auto____$9)){
var and__4115__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__4115__auto____$10)){
var and__4115__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__4115__auto____$11)){
var and__4115__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__4115__auto____$12)){
var and__4115__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__4115__auto____$13)){
var and__4115__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(and__4115__auto____$14)){
return sci.impl.evaluator.eval(ctx,bindings,arg15);
} else {
return and__4115__auto____$14;
}
} else {
return and__4115__auto____$13;
}
} else {
return and__4115__auto____$12;
}
} else {
return and__4115__auto____$11;
}
} else {
return and__4115__auto____$10;
}
} else {
return and__4115__auto____$9;
}
} else {
return and__4115__auto____$8;
}
} else {
return and__4115__auto____$7;
}
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
var and__4115__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__4115__auto____$7)){
var and__4115__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__4115__auto____$8)){
var and__4115__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__4115__auto____$9)){
var and__4115__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__4115__auto____$10)){
var and__4115__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__4115__auto____$11)){
var and__4115__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__4115__auto____$12)){
var and__4115__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__4115__auto____$13)){
var and__4115__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(and__4115__auto____$14)){
var and__4115__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(and__4115__auto____$15)){
return sci.impl.evaluator.eval(ctx,bindings,arg16);
} else {
return and__4115__auto____$15;
}
} else {
return and__4115__auto____$14;
}
} else {
return and__4115__auto____$13;
}
} else {
return and__4115__auto____$12;
}
} else {
return and__4115__auto____$11;
}
} else {
return and__4115__auto____$10;
}
} else {
return and__4115__auto____$9;
}
} else {
return and__4115__auto____$8;
}
} else {
return and__4115__auto____$7;
}
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
var and__4115__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__4115__auto____$7)){
var and__4115__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__4115__auto____$8)){
var and__4115__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__4115__auto____$9)){
var and__4115__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__4115__auto____$10)){
var and__4115__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__4115__auto____$11)){
var and__4115__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__4115__auto____$12)){
var and__4115__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__4115__auto____$13)){
var and__4115__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(and__4115__auto____$14)){
var and__4115__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(and__4115__auto____$15)){
var and__4115__auto____$16 = sci.impl.evaluator.eval(ctx,bindings,arg16);
if(cljs.core.truth_(and__4115__auto____$16)){
return sci.impl.evaluator.eval(ctx,bindings,arg17);
} else {
return and__4115__auto____$16;
}
} else {
return and__4115__auto____$15;
}
} else {
return and__4115__auto____$14;
}
} else {
return and__4115__auto____$13;
}
} else {
return and__4115__auto____$12;
}
} else {
return and__4115__auto____$11;
}
} else {
return and__4115__auto____$10;
}
} else {
return and__4115__auto____$9;
}
} else {
return and__4115__auto____$8;
}
} else {
return and__4115__auto____$7;
}
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
var and__4115__auto__ = sci.impl.evaluator.eval(ctx,bindings,arg0);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sci.impl.evaluator.eval(ctx,bindings,arg1);
if(cljs.core.truth_(and__4115__auto____$1)){
var and__4115__auto____$2 = sci.impl.evaluator.eval(ctx,bindings,arg2);
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = sci.impl.evaluator.eval(ctx,bindings,arg3);
if(cljs.core.truth_(and__4115__auto____$3)){
var and__4115__auto____$4 = sci.impl.evaluator.eval(ctx,bindings,arg4);
if(cljs.core.truth_(and__4115__auto____$4)){
var and__4115__auto____$5 = sci.impl.evaluator.eval(ctx,bindings,arg5);
if(cljs.core.truth_(and__4115__auto____$5)){
var and__4115__auto____$6 = sci.impl.evaluator.eval(ctx,bindings,arg6);
if(cljs.core.truth_(and__4115__auto____$6)){
var and__4115__auto____$7 = sci.impl.evaluator.eval(ctx,bindings,arg7);
if(cljs.core.truth_(and__4115__auto____$7)){
var and__4115__auto____$8 = sci.impl.evaluator.eval(ctx,bindings,arg8);
if(cljs.core.truth_(and__4115__auto____$8)){
var and__4115__auto____$9 = sci.impl.evaluator.eval(ctx,bindings,arg9);
if(cljs.core.truth_(and__4115__auto____$9)){
var and__4115__auto____$10 = sci.impl.evaluator.eval(ctx,bindings,arg10);
if(cljs.core.truth_(and__4115__auto____$10)){
var and__4115__auto____$11 = sci.impl.evaluator.eval(ctx,bindings,arg11);
if(cljs.core.truth_(and__4115__auto____$11)){
var and__4115__auto____$12 = sci.impl.evaluator.eval(ctx,bindings,arg12);
if(cljs.core.truth_(and__4115__auto____$12)){
var and__4115__auto____$13 = sci.impl.evaluator.eval(ctx,bindings,arg13);
if(cljs.core.truth_(and__4115__auto____$13)){
var and__4115__auto____$14 = sci.impl.evaluator.eval(ctx,bindings,arg14);
if(cljs.core.truth_(and__4115__auto____$14)){
var and__4115__auto____$15 = sci.impl.evaluator.eval(ctx,bindings,arg15);
if(cljs.core.truth_(and__4115__auto____$15)){
var and__4115__auto____$16 = sci.impl.evaluator.eval(ctx,bindings,arg16);
if(cljs.core.truth_(and__4115__auto____$16)){
var and__4115__auto____$17 = sci.impl.evaluator.eval(ctx,bindings,arg17);
if(cljs.core.truth_(and__4115__auto____$17)){
return sci.impl.evaluator.eval(ctx,bindings,arg18);
} else {
return and__4115__auto____$17;
}
} else {
return and__4115__auto____$16;
}
} else {
return and__4115__auto____$15;
}
} else {
return and__4115__auto____$14;
}
} else {
return and__4115__auto____$13;
}
} else {
return and__4115__auto____$12;
}
} else {
return and__4115__auto____$11;
}
} else {
return and__4115__auto____$10;
}
} else {
return and__4115__auto____$9;
}
} else {
return and__4115__auto____$8;
}
} else {
return and__4115__auto____$7;
}
} else {
return and__4115__auto____$6;
}
} else {
return and__4115__auto____$5;
}
} else {
return and__4115__auto____$4;
}
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}),expr);

break;
default:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.evaluator.eval_and(ctx,bindings,analyzed_children);
}),expr);

}
});
sci.impl.analyzer.recur_0 = sci.impl.fns.__GT_Recur(cljs.core.PersistentVector.EMPTY);
var ret__4785__auto___14605 = sci.impl.analyzer.gen_return_recur = (function sci$impl$analyzer$gen_return_recur(_AMPERSAND_form,_AMPERSAND_env){
var let_bindings = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["arg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_nth,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,j,null,(1),null))], 0))))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$1(i)], 0)))], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(20)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$return_DASH_recur,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$expr,cljs.core.cst$sym$analyzed_DASH_children], null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_case,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_count,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$utils_SLASH_ctx_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_bindings,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$sci$impl$analyzer_SLASH_recur_DASH_0,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$expr,null,(1),null))], 0))))], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__14601){
var vec__14602 = p__14601;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14602,(0),null);
var binds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14602,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,binds,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$utils_SLASH_ctx_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_and,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$fns_SLASH__DASH__GT_Recur,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (j){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$evaluator_SLASH_eval,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["arg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')),null,(1),null))], 0))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(i)))))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$expr,null,(1),null))], 0)))),null,(1),null))], 0))))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([let_bindings], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$utils_SLASH_ctx_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$evaluator_SLASH_fn_DASH_call,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_comp,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$sci$impl$fns_SLASH__DASH__GT_Recur,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_vector,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$expr,null,(1),null))], 0)))),null,(1),null))))))], 0))], 0)))),null,(1),null))], 0))));
});
(sci.impl.analyzer.gen_return_recur.cljs$lang$macro = true);

sci.impl.analyzer.return_recur = (function sci$impl$analyzer$return_recur(expr,analyzed_children){
var G__14606 = cljs.core.count(analyzed_children);
switch (G__14606) {
case (0):
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (_,_bindings){
return sci.impl.analyzer.recur_0;
}),expr);

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0)], null));
}),expr);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1)], null));
}),expr);

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2)], null));
}),expr);

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3)], null));
}),expr);

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4)], null));
}),expr);

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5)], null));
}),expr);

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6)], null));
}),expr);

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7)], null));
}),expr);

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8)], null));
}),expr);

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9)], null));
}),expr);

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10)], null));
}),expr);

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11)], null));
}),expr);

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12)], null));
}),expr);

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13)], null));
}),expr);

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14)], null));
}),expr);

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14),sci.impl.evaluator.eval(ctx,bindings,arg15)], null));
}),expr);

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14),sci.impl.evaluator.eval(ctx,bindings,arg15),sci.impl.evaluator.eval(ctx,bindings,arg16)], null));
}),expr);

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14),sci.impl.evaluator.eval(ctx,bindings,arg15),sci.impl.evaluator.eval(ctx,bindings,arg16),sci.impl.evaluator.eval(ctx,bindings,arg17)], null));
}),expr);

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.fns.__GT_Recur(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.evaluator.eval(ctx,bindings,arg0),sci.impl.evaluator.eval(ctx,bindings,arg1),sci.impl.evaluator.eval(ctx,bindings,arg2),sci.impl.evaluator.eval(ctx,bindings,arg3),sci.impl.evaluator.eval(ctx,bindings,arg4),sci.impl.evaluator.eval(ctx,bindings,arg5),sci.impl.evaluator.eval(ctx,bindings,arg6),sci.impl.evaluator.eval(ctx,bindings,arg7),sci.impl.evaluator.eval(ctx,bindings,arg8),sci.impl.evaluator.eval(ctx,bindings,arg9),sci.impl.evaluator.eval(ctx,bindings,arg10),sci.impl.evaluator.eval(ctx,bindings,arg11),sci.impl.evaluator.eval(ctx,bindings,arg12),sci.impl.evaluator.eval(ctx,bindings,arg13),sci.impl.evaluator.eval(ctx,bindings,arg14),sci.impl.evaluator.eval(ctx,bindings,arg15),sci.impl.evaluator.eval(ctx,bindings,arg16),sci.impl.evaluator.eval(ctx,bindings,arg17),sci.impl.evaluator.eval(ctx,bindings,arg18)], null));
}),expr);

break;
default:
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),analyzed_children);
}),expr);

}
});
sci.impl.analyzer.analyze_children = (function sci$impl$analyzer$analyze_children(ctx,children){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14608_SHARP_){
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,p1__14608_SHARP_) : sci.impl.analyzer.analyze.call(null,ctx,p1__14608_SHARP_));
}),children);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
sci.impl.analyzer.FnBody = (function (params,body,fixed_arity,var_arg_name,bindings_fn,__meta,__extmap,__hash){
this.params = params;
this.body = body;
this.fixed_arity = fixed_arity;
this.var_arg_name = var_arg_name;
this.bindings_fn = bindings_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k14610,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__14614 = k14610;
var G__14614__$1 = (((G__14614 instanceof cljs.core.Keyword))?G__14614.fqn:null);
switch (G__14614__$1) {
case "params":
return self__.params;

break;
case "body":
return self__.body;

break;
case "fixed-arity":
return self__.fixed_arity;

break;
case "var-arg-name":
return self__.var_arg_name;

break;
case "bindings-fn":
return self__.bindings_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14610,else__4383__auto__);

}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__14615){
var vec__14616 = p__14615;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14616,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14616,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#sci.impl.analyzer.FnBody{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$body,self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fixed_DASH_arity,self__.fixed_arity],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$var_DASH_arg_DASH_name,self__.var_arg_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$bindings_DASH_fn,self__.bindings_fn],null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14609){
var self__ = this;
var G__14609__$1 = this;
return (new cljs.core.RecordIter((0),G__14609__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params,cljs.core.cst$kw$body,cljs.core.cst$kw$fixed_DASH_arity,cljs.core.cst$kw$var_DASH_arg_DASH_name,cljs.core.cst$kw$bindings_DASH_fn], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__14619 = (function (coll__4377__auto__){
return (1733662014 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__14619(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14611,other14612){
var self__ = this;
var this14611__$1 = this;
return (((!((other14612 == null)))) && ((this14611__$1.constructor === other14612.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14611__$1.params,other14612.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14611__$1.body,other14612.body)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14611__$1.fixed_arity,other14612.fixed_arity)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14611__$1.var_arg_name,other14612.var_arg_name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14611__$1.bindings_fn,other14612.bindings_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14611__$1.__extmap,other14612.__extmap)));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$var_DASH_arg_DASH_name,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$fixed_DASH_arity,null,cljs.core.cst$kw$bindings_DASH_fn,null,cljs.core.cst$kw$body,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__14609){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__14620 = cljs.core.keyword_identical_QMARK_;
var expr__14621 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__14623 = cljs.core.cst$kw$params;
var G__14624 = expr__14621;
return (pred__14620.cljs$core$IFn$_invoke$arity$2 ? pred__14620.cljs$core$IFn$_invoke$arity$2(G__14623,G__14624) : pred__14620.call(null,G__14623,G__14624));
})())){
return (new sci.impl.analyzer.FnBody(G__14609,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14625 = cljs.core.cst$kw$body;
var G__14626 = expr__14621;
return (pred__14620.cljs$core$IFn$_invoke$arity$2 ? pred__14620.cljs$core$IFn$_invoke$arity$2(G__14625,G__14626) : pred__14620.call(null,G__14625,G__14626));
})())){
return (new sci.impl.analyzer.FnBody(self__.params,G__14609,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14627 = cljs.core.cst$kw$fixed_DASH_arity;
var G__14628 = expr__14621;
return (pred__14620.cljs$core$IFn$_invoke$arity$2 ? pred__14620.cljs$core$IFn$_invoke$arity$2(G__14627,G__14628) : pred__14620.call(null,G__14627,G__14628));
})())){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,G__14609,self__.var_arg_name,self__.bindings_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14629 = cljs.core.cst$kw$var_DASH_arg_DASH_name;
var G__14630 = expr__14621;
return (pred__14620.cljs$core$IFn$_invoke$arity$2 ? pred__14620.cljs$core$IFn$_invoke$arity$2(G__14629,G__14630) : pred__14620.call(null,G__14629,G__14630));
})())){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,G__14609,self__.bindings_fn,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__14631 = cljs.core.cst$kw$bindings_DASH_fn;
var G__14632 = expr__14621;
return (pred__14620.cljs$core$IFn$_invoke$arity$2 ? pred__14620.cljs$core$IFn$_invoke$arity$2(G__14631,G__14632) : pred__14620.call(null,G__14631,G__14632));
})())){
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,G__14609,self__.__meta,self__.__extmap,null));
} else {
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__14609),null));
}
}
}
}
}
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$params,self__.params,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$body,self__.body,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$fixed_DASH_arity,self__.fixed_arity,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$var_DASH_arg_DASH_name,self__.var_arg_name,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$bindings_DASH_fn,self__.bindings_fn,null))], null),self__.__extmap));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__14609){
var self__ = this;
var this__4379__auto____$1 = this;
return (new sci.impl.analyzer.FnBody(self__.params,self__.body,self__.fixed_arity,self__.var_arg_name,self__.bindings_fn,G__14609,self__.__extmap,self__.__hash));
}));

(sci.impl.analyzer.FnBody.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(sci.impl.analyzer.FnBody.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$params,cljs.core.cst$sym$body,cljs.core.cst$sym$fixed_DASH_arity,cljs.core.cst$sym$var_DASH_arg_DASH_name,cljs.core.cst$sym$bindings_DASH_fn], null);
}));

(sci.impl.analyzer.FnBody.cljs$lang$type = true);

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"sci.impl.analyzer/FnBody",null,(1),null));
}));

(sci.impl.analyzer.FnBody.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"sci.impl.analyzer/FnBody");
}));

/**
 * Positional factory function for sci.impl.analyzer/FnBody.
 */
sci.impl.analyzer.__GT_FnBody = (function sci$impl$analyzer$__GT_FnBody(params,body,fixed_arity,var_arg_name,bindings_fn){
return (new sci.impl.analyzer.FnBody(params,body,fixed_arity,var_arg_name,bindings_fn,null,null,null));
});

/**
 * Factory function for sci.impl.analyzer/FnBody, taking a map of keywords to field values.
 */
sci.impl.analyzer.map__GT_FnBody = (function sci$impl$analyzer$map__GT_FnBody(G__14613){
var extmap__4419__auto__ = (function (){var G__14633 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14613,cljs.core.cst$kw$params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$body,cljs.core.cst$kw$fixed_DASH_arity,cljs.core.cst$kw$var_DASH_arg_DASH_name,cljs.core.cst$kw$bindings_DASH_fn], 0));
if(cljs.core.record_QMARK_(G__14613)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14633);
} else {
return G__14633;
}
})();
return (new sci.impl.analyzer.FnBody(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__14613),cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(G__14613),cljs.core.cst$kw$fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(G__14613),cljs.core.cst$kw$var_DASH_arg_DASH_name.cljs$core$IFn$_invoke$arity$1(G__14613),cljs.core.cst$kw$bindings_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__14613),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

sci.impl.analyzer.expand_fn_args_PLUS_body = (function sci$impl$analyzer$expand_fn_args_PLUS_body(p__14638,p__14639,_fn_name,macro_QMARK_){
var map__14640 = p__14638;
var map__14640__$1 = (((((!((map__14640 == null))))?(((((map__14640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14640):map__14640);
var ctx = map__14640__$1;
var fn_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14640__$1,cljs.core.cst$kw$fn_DASH_expr);
var vec__14641 = p__14639;
var seq__14642 = cljs.core.seq(vec__14641);
var first__14643 = cljs.core.first(seq__14642);
var seq__14642__$1 = cljs.core.next(seq__14642);
var binding_vector = first__14643;
var body_exprs = seq__14642__$1;
if(cljs.core.truth_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",fn_expr);
}

if(cljs.core.vector_QMARK_(binding_vector)){
} else {
sci.impl.analyzer.throw_error_with_location("Parameter declaration should be a vector",fn_expr);
}

var binding_vector__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_AMPERSAND_form,cljs.core.cst$sym$_AMPERSAND_env], null),binding_vector):binding_vector);
var fixed_args = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__14635_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_AMPERSAND_,p1__14635_SHARP_);
}),binding_vector__$1);
var fixed_arity = cljs.core.count(fixed_args);
var var_arg_name = cljs.core.second(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__14636_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_AMPERSAND_,p1__14636_SHARP_);
}),binding_vector__$1));
var next_body = cljs.core.next(body_exprs);
var conds = ((next_body)?(function (){var e = cljs.core.first(body_exprs);
if(cljs.core.map_QMARK_(e)){
return e;
} else {
return null;
}
})():null);
var body_exprs__$1 = (cljs.core.truth_(conds)?next_body:body_exprs);
var conds__$1 = (function (){var or__4126__auto__ = conds;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.meta(binding_vector__$1);
}
})();
var pre = cljs.core.cst$kw$pre.cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = cljs.core.cst$kw$post.cljs$core$IFn$_invoke$arity$1(conds__$1);
var body_exprs__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body_exprs__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body_exprs__$1))):cljs.core.first(body_exprs__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_assert,null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,cljs.core.cst$sym$_PERCENT_,null,(1),null))], 0)))),null,(1),null))))):body_exprs__$1);
var body_exprs__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_assert,null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body_exprs__$2):body_exprs__$2);
var map__14645 = sci.impl.utils.maybe_destructured(binding_vector__$1,body_exprs__$3);
var map__14645__$1 = (((((!((map__14645 == null))))?(((((map__14645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14645):map__14645);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14645__$1,cljs.core.cst$kw$params);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14645__$1,cljs.core.cst$kw$body);
var param_bindings = cljs.core.zipmap(params,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));
var bindings = cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(ctx);
var binding_cnt = cljs.core.count(bindings);
var vec__14646 = (function (){var temp__5751__auto__ = cljs.core.cst$kw$closure_DASH_bindings.cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5751__auto__)){
var cb = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$param_DASH_map,param_bindings),cb], null);
} else {
if(cljs.core.empty_QMARK_(bindings)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,null], null);
} else {
var cb = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx,cljs.core.cst$kw$closure_DASH_bindings,cb,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$param_DASH_map,param_bindings], 0)),cb], null);
}
}
})();
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14646,(0),null);
var closure_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14646,(1),null);
var ctx__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx__$1,cljs.core.cst$kw$bindings,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bindings,param_bindings], 0)));
var ana_children = sci.impl.analyzer.analyze_children(ctx__$2,body);
var body__$1 = sci.impl.analyzer.return_do(fn_expr,ana_children);
var closure_bindings__$1 = (cljs.core.truth_(closure_bindings)?cljs.core.deref(closure_bindings):null);
var closure_binding_cnt = (cljs.core.truth_(closure_bindings__$1)?cljs.core.count(closure_bindings__$1):null);
var bindings_fn = (cljs.core.truth_(closure_bindings__$1)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(binding_cnt,closure_binding_cnt))?cljs.core.identity:(function (p1__14637_SHARP_){
return cljs.core.select_keys(p1__14637_SHARP_,closure_bindings__$1);
})):cljs.core.identity);
return sci.impl.analyzer.__GT_FnBody(params,body__$1,fixed_arity,var_arg_name,bindings_fn);
});
sci.impl.analyzer.analyzed_fn_meta = (function sci$impl$analyzer$analyzed_fn_meta(ctx,m){
var meta_needs_eval_QMARK_ = (cljs.core.count(m) > (2));
var m__$1 = ((meta_needs_eval_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__14650 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$meta,true);
var G__14651 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__14650,G__14651) : sci.impl.analyzer.analyze.call(null,G__14650,G__14651));
})(),cljs.core.assoc,cljs.core.cst$kw$sci$impl_SLASH_op,cljs.core.cst$kw$eval):m);
return m__$1;
});
sci.impl.analyzer.expand_fn_STAR_ = (function sci$impl$analyzer$expand_fn_STAR_(ctx,p__14652,macro_QMARK_){
var vec__14653 = p__14652;
var seq__14654 = cljs.core.seq(vec__14653);
var first__14655 = cljs.core.first(seq__14654);
var seq__14654__$1 = cljs.core.next(seq__14654);
var _fn = first__14655;
var first__14655__$1 = cljs.core.first(seq__14654__$1);
var seq__14654__$2 = cljs.core.next(seq__14654__$1);
var name_QMARK_ = first__14655__$1;
var body = seq__14654__$2;
var fn_expr = vec__14653;
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$fn_DASH_expr,fn_expr);
var fn_name = (((name_QMARK_ instanceof cljs.core.Symbol))?name_QMARK_:null);
var body__$1 = (cljs.core.truth_(fn_name)?body:cljs.core.cons(name_QMARK_,body));
var bodies = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?body__$1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [body__$1], null));
var ctx__$2 = (cljs.core.truth_(fn_name)?cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bindings,fn_name], null),null):ctx__$1);
var analyzed_bodies = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__14656,body__$2){
var map__14657 = p__14656;
var map__14657__$1 = (((((!((map__14657 == null))))?(((((map__14657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14657):map__14657);
var acc = map__14657__$1;
var max_fixed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14657__$1,cljs.core.cst$kw$max_DASH_fixed);
var min_varargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14657__$1,cljs.core.cst$kw$min_DASH_varargs);
var arglist = cljs.core.first(body__$2);
var body__$3 = sci.impl.analyzer.expand_fn_args_PLUS_body(ctx__$2,body__$2,fn_name,macro_QMARK_);
var var_arg_name = body__$3.var_arg_name;
var fixed_arity = body__$3.fixed_arity;
var new_min_varargs = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_((function (){var and__4115__auto__ = var_arg_name;
if(cljs.core.truth_(and__4115__auto__)){
return min_varargs;
} else {
return and__4115__auto__;
}
})())){
sci.impl.analyzer.throw_error_with_location("Can't have more than 1 variadic overload",fn_expr);
} else {
}

if(cljs.core.truth_(((cljs.core.not(var_arg_name))?(function (){var and__4115__auto__ = min_varargs;
if(cljs.core.truth_(and__4115__auto__)){
return (fixed_arity > min_varargs);
} else {
return and__4115__auto__;
}
})():false))){
sci.impl.analyzer.throw_error_with_location("Can't have fixed arity function with more params than variadic function",fn_expr);
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,cljs.core.cst$kw$min_DASH_varargs,new_min_varargs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$max_DASH_fixed,(function (){var x__4214__auto__ = fixed_arity;
var y__4215__auto__ = max_fixed;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()], 0)),cljs.core.cst$kw$bodies,cljs.core.conj,body__$3),cljs.core.cst$kw$arglists,cljs.core.conj,arglist);
}),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$bodies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$arglists,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$min_DASH_var_DASH_args,null,cljs.core.cst$kw$max_DASH_fixed,(-1)], null),bodies);
var arities = cljs.core.cst$kw$bodies.cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var arglists = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(analyzed_bodies);
var fn_meta = cljs.core.meta(fn_expr);
var ana_fn_meta = sci.impl.analyzer.analyzed_fn_meta(ctx__$2,fn_meta);
var fn_meta__$1 = (((fn_meta === ana_fn_meta))?null:cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(ana_fn_meta,cljs.core.cst$kw$line,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$column,cljs.core.cst$kw$end_DASH_column], 0)));
var struct = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_bodies,arities,cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_name,fn_name,cljs.core.cst$kw$sci$impl_SLASH_arglists,arglists,cljs.core.cst$kw$sci$impl_SLASH_fn,true,cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_meta,fn_meta__$1], null);
return struct;
});
sci.impl.analyzer.fn_ctx_fn = (function sci$impl$analyzer$fn_ctx_fn(_ctx,struct,fn_meta){
var fn_name = cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_name.cljs$core$IFn$_invoke$arity$1(struct);
var fn_bodies = cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_bodies.cljs$core$IFn$_invoke$arity$1(struct);
var defn_QMARK_ = cljs.core.cst$kw$sci$impl_SLASH_defn.cljs$core$IFn$_invoke$arity$1(struct);
var macro_QMARK_ = cljs.core.cst$kw$sci_SLASH_macro.cljs$core$IFn$_invoke$arity$1(struct);
var self_ref_QMARK_ = (function (){var and__4115__auto__ = fn_name;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(defn_QMARK_);
} else {
return and__4115__auto__;
}
})();
var single_arity = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fn_bodies)))?cljs.core.first(fn_bodies):null);
if(cljs.core.truth_(fn_meta)){
return (function (ctx,bindings){
var fn_meta__$1 = sci.impl.evaluator.handle_meta(ctx,bindings,fn_meta);
var f = sci.impl.fns.eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(f,cljs.core.merge,fn_meta__$1);
});
} else {
return (function (ctx,bindings){
return sci.impl.fns.eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_);
});
}
});
sci.impl.analyzer.expand_fn = (function sci$impl$analyzer$expand_fn(ctx,fn_expr,macro_QMARK_){
var struct = sci.impl.analyzer.expand_fn_STAR_(ctx,fn_expr,macro_QMARK_);
var fn_meta = cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_meta.cljs$core$IFn$_invoke$arity$1(struct);
var ctxfn = sci.impl.analyzer.fn_ctx_fn(ctx,struct,fn_meta);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4(ctxfn,struct,fn_expr,null);
});
sci.impl.analyzer.expand_let_STAR_ = (function sci$impl$analyzer$expand_let_STAR_(ctx,expr,destructured_let_bindings,exprs){
var vec__14659 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__14662,p__14663){
var vec__14664 = p__14662;
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14664,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14664,(1),null);
var vec__14667 = p__14663;
var binding_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14667,(0),null);
var binding_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14667,(1),null);
var m = cljs.core.meta(binding_value);
var t = (cljs.core.truth_(m)?cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(m):null);
var binding_name__$1 = (cljs.core.truth_(t)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(binding_name,cljs.core.assoc,cljs.core.cst$kw$tag,t):binding_name);
var v = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx__$1,binding_value) : sci.impl.analyzer.analyze.call(null,ctx__$1,binding_value));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$5(ctx__$1,cljs.core.cst$kw$bindings,cljs.core.assoc,binding_name__$1,v),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new_let_bindings,binding_name__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctx,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),destructured_let_bindings));
var ctx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14659,(0),null);
var new_let_bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14659,(1),null);
var body = sci.impl.analyzer.analyze_children(ctx__$1,exprs);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$2,bindings){
return sci.impl.evaluator.eval_let(ctx__$2,bindings,new_let_bindings,body);
}),expr);
});
/**
 * The let macro from clojure.core
 */
sci.impl.analyzer.expand_let = (function sci$impl$analyzer$expand_let(ctx,p__14670){
var vec__14671 = p__14670;
var seq__14672 = cljs.core.seq(vec__14671);
var first__14673 = cljs.core.first(seq__14672);
var seq__14672__$1 = cljs.core.next(seq__14672);
var _let = first__14673;
var first__14673__$1 = cljs.core.first(seq__14672__$1);
var seq__14672__$2 = cljs.core.next(seq__14672__$1);
var let_bindings = first__14673__$1;
var exprs = seq__14672__$2;
var expr = vec__14671;
var let_bindings__$1 = sci.impl.destructure.destructure(let_bindings);
return sci.impl.analyzer.expand_let_STAR_(ctx,expr,let_bindings__$1,exprs);
});
sci.impl.analyzer.expand_def = (function sci$impl$analyzer$expand_def(ctx,expr){
var vec__14674 = expr;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14674,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14674,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14674,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14674,(3),null);
var G__14677_14681 = ctx;
var G__14678_14682 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,var_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__14677_14681,G__14678_14682) : sci.impl.analyzer.expand_declare.call(null,G__14677_14681,G__14678_14682));

if(cljs.core.simple_symbol_QMARK_(var_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var arg_count = cljs.core.count(expr);
var docstring = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arg_count)) && (typeof _QMARK_docstring === 'string')))?_QMARK_docstring:null);
var expected_arg_count = (cljs.core.truth_(docstring)?(4):(3));
if((arg_count <= expected_arg_count)){
} else {
throw (new Error("Too many arguments to def"));
}

var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arg_count))?cljs.core.cst$kw$sci$impl_SLASH_var$unbound:(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.analyzer.analyze.call(null,ctx,init)));
var m = cljs.core.meta(var_name);
var m__$1 = (function (){var G__14679 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$meta,true);
var G__14680 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__14679,G__14680) : sci.impl.analyzer.analyze.call(null,G__14679,G__14680));
})();
var m__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core.cst$kw$ns,cljs.core.deref(sci.impl.vars.current_ns));
var m__$3 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$2,cljs.core.cst$kw$doc,docstring):m__$2);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.evaluator.eval_def(ctx__$1,bindings,var_name,init__$1,m__$3);
}),expr);
});
sci.impl.analyzer.expand_defn = (function sci$impl$analyzer$expand_defn(ctx,p__14683){
var vec__14684 = p__14683;
var seq__14685 = cljs.core.seq(vec__14684);
var first__14686 = cljs.core.first(seq__14685);
var seq__14685__$1 = cljs.core.next(seq__14685);
var op = first__14686;
var first__14686__$1 = cljs.core.first(seq__14685__$1);
var seq__14685__$2 = cljs.core.next(seq__14685__$1);
var fn_name = first__14686__$1;
var body = seq__14685__$2;
var expr = vec__14684;
if(cljs.core.simple_symbol_QMARK_(fn_name)){
} else {
sci.impl.analyzer.throw_error_with_location("Var name should be simple symbol.",expr);
}

var G__14687_14698 = ctx;
var G__14688_14699 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,fn_name], null);
(sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.expand_declare.cljs$core$IFn$_invoke$arity$2(G__14687_14698,G__14688_14699) : sci.impl.analyzer.expand_declare.call(null,G__14687_14698,G__14688_14699));

var macro_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("defmacro",cljs.core.name(op));
var vec__14689 = cljs.core.split_with(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.sequential_QMARK_),body);
var pre_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14689,(0),null);
var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14689,(1),null);
var _ = ((cljs.core.empty_QMARK_(body__$1))?sci.impl.analyzer.throw_error_with_location("Parameter declaration missing.",expr):null);
var docstring = (function (){var temp__5753__auto__ = cljs.core.first(pre_body);
if(cljs.core.truth_(temp__5753__auto__)){
var ds = temp__5753__auto__;
if(typeof ds === 'string'){
return ds;
} else {
return null;
}
} else {
return null;
}
})();
var meta_map = (function (){var temp__5753__auto__ = cljs.core.last(pre_body);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
if(cljs.core.map_QMARK_(m)){
return m;
} else {
return null;
}
} else {
return null;
}
})();
var vec__14692 = ((cljs.core.seq_QMARK_(cljs.core.first(body__$1)))?(function (){var lb = cljs.core.last(body__$1);
if(cljs.core.map_QMARK_(lb)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lb,cljs.core.butlast(body__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body__$1], null);
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,body__$1], null));
var meta_map2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14692,(0),null);
var body__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14692,(1),null);
var meta_map__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(fn_name),cljs.core.meta(expr),meta_map], 0));
var meta_map__$2 = (cljs.core.truth_(meta_map2)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta_map__$1,meta_map2], 0)):meta_map__$1);
var meta_map__$3 = (function (){var G__14695 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$meta,true);
var G__14696 = meta_map__$2;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__14695,G__14696) : sci.impl.analyzer.analyze.call(null,G__14695,G__14696));
})();
var fn_body = cljs.core.with_meta(cljs.core.cons(cljs.core.cst$sym$fn,body__$2),cljs.core.meta(expr));
var f = sci.impl.analyzer.expand_fn_STAR_(ctx,fn_body,macro_QMARK_);
var arglists = cljs.core.seq(cljs.core.cst$kw$sci$impl_SLASH_arglists.cljs$core$IFn$_invoke$arity$1(f));
var meta_map__$4 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(meta_map__$3,cljs.core.cst$kw$ns,cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$arglists,arglists], 0));
var meta_map__$5 = (function (){var G__14697 = meta_map__$4;
var G__14697__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14697,cljs.core.cst$kw$doc,docstring):G__14697);
if(macro_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14697__$1,cljs.core.cst$kw$macro,true);
} else {
return G__14697__$1;
}
})();
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.cst$kw$sci_SLASH_macro,macro_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_name,fn_name,cljs.core.cst$kw$sci$impl_SLASH_defn,true], 0));
var fn_meta = cljs.core.cst$kw$sci$impl_SLASH_fn_DASH_meta.cljs$core$IFn$_invoke$arity$1(f__$1);
var ctxfn = sci.impl.analyzer.fn_ctx_fn(ctx,f__$1,fn_meta);
var f__$2 = sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$3(ctxfn,f__$1,f__$1);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.evaluator.eval_def(ctx__$1,bindings,fn_name,f__$2,meta_map__$5);
}),expr);
});
sci.impl.analyzer.expand_loop = (function sci$impl$analyzer$expand_loop(ctx,expr){
var bv = cljs.core.second(expr);
var arg_names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bv);
var init_vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(bv));
var vec__14700 = ((cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,arg_names))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bv,arg_names], null):(function (){var syms = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_names),(function (){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}));
var bv1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,syms,init_vals);
var bv2 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,arg_names,syms);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bv1,bv2)),syms], null);
})());
var bv__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14700,(0),null);
var syms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14700,(1),null);
var body = cljs.core.nnext(expr);
var expansion = (new cljs.core.List(null,cljs.core.cst$sym$let,(new cljs.core.List(null,bv__$1,(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(arg_names),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),syms),null,(1),null)),(2),null)),(3),null));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,expansion) : sci.impl.analyzer.analyze.call(null,ctx,expansion));
});
sci.impl.analyzer.analyze_lazy_seq = (function sci$impl$analyzer$analyze_lazy_seq(ctx,expr){
var body = cljs.core.rest(expr);
var ana = (function (){var G__14703 = ctx;
var G__14704 = cljs.core.cons(cljs.core.cst$sym$do,body);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__14703,G__14704) : sci.impl.analyzer.analyze.call(null,G__14703,G__14704));
})();
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return (new cljs.core.LazySeq(null,(function (){
return sci.impl.evaluator.eval(ctx__$1,bindings,ana);
}),null,null));
}),expr);
});
sci.impl.analyzer.return_if = (function sci$impl$analyzer$return_if(ctx,expr){
var exprs = cljs.core.rest(expr);
var children = sci.impl.analyzer.analyze_children(ctx,exprs);
var G__14705 = cljs.core.count(children);
switch (G__14705) {
case (0):
case (1):
return sci.impl.analyzer.throw_error_with_location("Too few arguments to if",expr);

break;
case (2):
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
if(cljs.core.not(condition)){
return null;
} else {
if(sci.impl.utils.constant_QMARK_(condition)){
return then;
} else {
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
if(cljs.core.truth_(sci.impl.evaluator.eval(ctx__$1,bindings,condition))){
return sci.impl.evaluator.eval(ctx__$1,bindings,then);
} else {
return null;
}
}),null,expr,null);

}
}

break;
case (3):
var condition = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(2));
if(cljs.core.not(condition)){
return else$;
} else {
if(sci.impl.utils.constant_QMARK_(condition)){
return then;
} else {
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
if(cljs.core.truth_(sci.impl.evaluator.eval(ctx__$1,bindings,condition))){
return sci.impl.evaluator.eval(ctx__$1,bindings,then);
} else {
return sci.impl.evaluator.eval(ctx__$1,bindings,else$);
}
}),null,expr,null);

}
}

break;
default:
return sci.impl.analyzer.throw_error_with_location("Too many arguments to if",expr);

}
});
sci.impl.analyzer.analyze_case = (function sci$impl$analyzer$analyze_case(ctx,expr){
var case_val = (function (){var G__14710 = ctx;
var G__14711 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__14710,G__14711) : sci.impl.analyzer.analyze.call(null,G__14710,G__14711));
})();
var clauses = cljs.core.nnext(expr);
var match_clauses = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),clauses);
var result_clauses = sci.impl.analyzer.analyze_children(ctx,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(clauses)));
var vec__14707 = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,(function (){var G__14712 = ctx;
var G__14713 = cljs.core.last(clauses);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__14712,G__14713) : sci.impl.analyzer.analyze.call(null,G__14712,G__14713));
})()], null):null);
var default_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14707,(0),null);
var case_default = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14707,(1),null);
var cases = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(match_clauses,result_clauses);
var assoc_new = (function (m,k,v){
if((!(cljs.core.contains_QMARK_(m,k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return sci.impl.analyzer.throw_error_with_location(["Duplicate case test constant ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),expr);
}
});
var case_map = (function (){var cases__$1 = cljs.core.seq(cases);
var ret_map = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cases__$1){
var vec__14717 = cases__$1;
var seq__14718 = cljs.core.seq(vec__14717);
var first__14719 = cljs.core.first(seq__14718);
var seq__14718__$1 = cljs.core.next(seq__14718);
var k = first__14719;
var first__14719__$1 = cljs.core.first(seq__14718__$1);
var seq__14718__$2 = cljs.core.next(seq__14718__$1);
var v = first__14719__$1;
var cases__$2 = seq__14718__$2;
if(cljs.core.seq_QMARK_(k)){
var G__14720 = cases__$2;
var G__14721 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cases__$1,ret_map,vec__14717,seq__14718,first__14719,seq__14718__$1,k,first__14719__$1,seq__14718__$2,v,cases__$2,case_val,clauses,match_clauses,result_clauses,vec__14707,default_QMARK_,case_default,cases,assoc_new){
return (function (acc,k__$1){
return assoc_new(acc,k__$1,v);
});})(cases__$1,ret_map,vec__14717,seq__14718,first__14719,seq__14718__$1,k,first__14719__$1,seq__14718__$2,v,cases__$2,case_val,clauses,match_clauses,result_clauses,vec__14707,default_QMARK_,case_default,cases,assoc_new))
,ret_map,k);
cases__$1 = G__14720;
ret_map = G__14721;
continue;
} else {
var G__14722 = cases__$2;
var G__14723 = assoc_new(ret_map,k,v);
cases__$1 = G__14722;
ret_map = G__14723;
continue;
}
} else {
return ret_map;
}
break;
}
})();
var f = (cljs.core.truth_(default_QMARK_)?(function (ctx__$1,bindings){
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$5(ctx__$1,bindings,case_map,case_val,case_default);
}):(function (ctx__$1,bindings){
return sci.impl.evaluator.eval_case.cljs$core$IFn$_invoke$arity$4(ctx__$1,bindings,case_map,case_val);
}));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4(f,null,expr,null);
});
sci.impl.analyzer.analyze_try = (function sci$impl$analyzer$analyze_try(ctx,expr){
var body = cljs.core.next(expr);
var vec__14724 = (function (){var exprs = body;
var body_exprs = cljs.core.PersistentVector.EMPTY;
var catch_exprs = cljs.core.PersistentVector.EMPTY;
var finally_expr = null;
while(true){
if(exprs){
var expr__$1 = cljs.core.first(exprs);
var exprs__$1 = cljs.core.next(exprs);
if(((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$catch,cljs.core.first(expr__$1))))){
var G__14737 = exprs__$1;
var G__14738 = body_exprs;
var G__14739 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(catch_exprs,expr__$1);
var G__14740 = finally_expr;
exprs = G__14737;
body_exprs = G__14738;
catch_exprs = G__14739;
finally_expr = G__14740;
continue;
} else {
if(((cljs.core.not(exprs__$1)) && (((cljs.core.seq_QMARK_(expr__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$finally,cljs.core.first(expr__$1))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,expr__$1], null);
} else {
var G__14741 = exprs__$1;
var G__14742 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(body_exprs,expr__$1);
var G__14743 = catch_exprs;
var G__14744 = finally_expr;
exprs = G__14741;
body_exprs = G__14742;
catch_exprs = G__14743;
finally_expr = G__14744;
continue;

}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [body_exprs,catch_exprs,finally_expr], null);
}
break;
}
})();
var body_exprs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14724,(0),null);
var catches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14724,(1),null);
var finally$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14724,(2),null);
var body__$1 = (function (){var G__14727 = ctx;
var G__14728 = cljs.core.cons(cljs.core.cst$sym$do,body_exprs);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__14727,G__14728) : sci.impl.analyzer.analyze.call(null,G__14727,G__14728));
})();
var catches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var vec__14729 = c;
var seq__14730 = cljs.core.seq(vec__14729);
var first__14731 = cljs.core.first(seq__14730);
var seq__14730__$1 = cljs.core.next(seq__14730);
var _ = first__14731;
var first__14731__$1 = cljs.core.first(seq__14730__$1);
var seq__14730__$2 = cljs.core.next(seq__14730__$1);
var ex = first__14731__$1;
var first__14731__$2 = cljs.core.first(seq__14730__$2);
var seq__14730__$3 = cljs.core.next(seq__14730__$2);
var binding = first__14731__$2;
var body__$2 = seq__14730__$3;
var temp__5751__auto__ = (function (){var G__14732 = ex;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$js_SLASH_Error,G__14732)){
return Error;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$js_SLASH_Object,G__14732)){
return Object;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__14732)){
return cljs.core.cst$kw$default;
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.analyzer.analyze.call(null,ctx,ex));

}
}
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var clazz = temp__5751__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,clazz,cljs.core.cst$kw$binding,binding,cljs.core.cst$kw$body,(function (){var G__14733 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bindings,binding], null),null);
var G__14734 = cljs.core.cons(cljs.core.cst$sym$do,body__$2);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__14733,G__14734) : sci.impl.analyzer.analyze.call(null,G__14733,G__14734));
})()], null);
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex)].join(''),ex);
}
}),catches);
var finally$__$1 = (cljs.core.truth_(finally$)?(function (){var G__14735 = ctx;
var G__14736 = cljs.core.cons(cljs.core.cst$sym$do,cljs.core.rest(finally$));
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__14735,G__14736) : sci.impl.analyzer.analyze.call(null,G__14735,G__14736));
})():null);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.evaluator.eval_try(ctx__$1,bindings,body__$1,catches__$1,finally$__$1);
}),expr);
});
sci.impl.analyzer.analyze_throw = (function sci$impl$analyzer$analyze_throw(ctx,p__14745){
var vec__14746 = p__14745;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14746,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14746,(1),null);
var expr = vec__14746;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(expr))){
} else {
sci.impl.analyzer.throw_error_with_location("Too many arguments to throw",expr);
}

var ana = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.analyzer.analyze.call(null,ctx,ex));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
throw sci.impl.evaluator.eval(ctx__$1,bindings,ana);
}),expr,null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),cljs.core.cst$kw$ns,cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$file,cljs.core.deref(sci.impl.vars.current_file),cljs.core.cst$kw$special,true], 0)));
});
sci.impl.analyzer.expand_declare = (function sci$impl$analyzer$expand_declare(ctx,p__14749){
var vec__14750 = p__14749;
var seq__14751 = cljs.core.seq(vec__14750);
var first__14752 = cljs.core.first(seq__14751);
var seq__14751__$1 = cljs.core.next(seq__14751);
var _declare = first__14752;
var names = seq__14751__$1;
var expr = vec__14750;
var cnn_14754 = sci.impl.vars.current_ns_name();
var env_14755 = cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx);
var the_current_ns_14756 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(env_14755),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,cnn_14754], null));
var refers_14757 = cljs.core.cst$kw$refers.cljs$core$IFn$_invoke$arity$1(the_current_ns_14756);
var the_current_ns_14758__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,name){
var temp__5751__auto__ = (function (){var and__4115__auto__ = refers_14757;
if(cljs.core.truth_(and__4115__auto__)){
return refers_14757.get(name);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var x = temp__5751__auto__;
return sci.impl.analyzer.throw_error_with_location([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)," already refers to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," in namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_14754)].join(''),expr);
} else {
if(cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns_14756,name))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,name,(function (){var G__14753 = sci.impl.vars.__GT_SciVar(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn_14754),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$ns,cljs.core.deref(sci.impl.vars.current_ns),cljs.core.cst$kw$file,cljs.core.deref(sci.impl.vars.current_file)], null),false);
G__14753.sci$impl$vars$IVar$unbind$arity$1(null);

return G__14753;
})());
} else {
return the_current_ns_14756;
}
}
}),the_current_ns_14756,names);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_14755,(function (env__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(env__$1,cljs.core.cst$kw$namespaces,cljs.core.assoc,cnn_14754,the_current_ns_14758__$1);
}));

return null;
});
sci.impl.analyzer.expand_dot = (function sci$impl$analyzer$expand_dot(ctx,p__14759){
var vec__14760 = p__14759;
var seq__14761 = cljs.core.seq(vec__14760);
var first__14762 = cljs.core.first(seq__14761);
var seq__14761__$1 = cljs.core.next(seq__14761);
var _dot = first__14762;
var first__14762__$1 = cljs.core.first(seq__14761__$1);
var seq__14761__$2 = cljs.core.next(seq__14761__$1);
var instance_expr = first__14762__$1;
var first__14762__$2 = cljs.core.first(seq__14761__$2);
var seq__14761__$3 = cljs.core.next(seq__14761__$2);
var method_expr = first__14762__$2;
var args = seq__14761__$3;
var expr = vec__14760;
var vec__14763 = ((cljs.core.seq_QMARK_(method_expr))?method_expr:cljs.core.cons(method_expr,args));
var seq__14764 = cljs.core.seq(vec__14763);
var first__14765 = cljs.core.first(seq__14764);
var seq__14764__$1 = cljs.core.next(seq__14764);
var method_expr__$1 = first__14765;
var args__$1 = seq__14764__$1;
var instance_expr__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.analyzer.analyze.call(null,ctx,instance_expr));
var instance_expr__$2 = sci.impl.utils.vary_meta_STAR_(instance_expr__$1,(function (m){
var temp__5751__auto__ = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5751__auto__)){
var t = temp__5751__auto__;
var clazz = (function (){var or__4126__auto__ = sci.impl.interop.resolve_class(ctx,t);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = sci.impl.records.resolve_record_class(ctx,t);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''),t);
}
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$tag_DASH_class,clazz);
} else {
return m;
}
}));
var method_expr__$2 = cljs.core.name(method_expr__$1);
var args__$2 = ((args__$1)?sci.impl.analyzer.analyze_children(ctx,args__$1):null);
var res = sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
return sci.impl.evaluator.eval_instance_method_invocation(ctx__$1,bindings,instance_expr__$2,method_expr__$2,args__$2);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$sci$impl$analyzer_SLASH_instance_DASH_expr,instance_expr__$2,cljs.core.cst$kw$sci$impl$analyzer_SLASH_method_DASH_expr,method_expr__$2], null),expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),cljs.core.cst$kw$ns,cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$file,cljs.core.deref(sci.impl.vars.current_file)], 0)));
return res;
});
/**
 * Expands (. x method)
 */
sci.impl.analyzer.expand_dot_STAR__STAR_ = (function sci$impl$analyzer$expand_dot_STAR__STAR_(ctx,expr){
if((cljs.core.count(expr) < (3))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.expand_dot(ctx,expr);
});
/**
 * Expands (.foo x)
 */
sci.impl.analyzer.expand_dot_STAR_ = (function sci$impl$analyzer$expand_dot_STAR_(ctx,p__14766){
var vec__14767 = p__14766;
var seq__14768 = cljs.core.seq(vec__14767);
var first__14769 = cljs.core.first(seq__14768);
var seq__14768__$1 = cljs.core.next(seq__14768);
var method_name = first__14769;
var first__14769__$1 = cljs.core.first(seq__14768__$1);
var seq__14768__$2 = cljs.core.next(seq__14768__$1);
var obj = first__14769__$1;
var args = seq__14768__$2;
var expr = vec__14767;
if((cljs.core.count(expr) < (2))){
throw (new Error("Malformed member expression, expecting (.member target ...)"));
} else {
}

return sci.impl.analyzer.expand_dot(ctx,(new cljs.core.List(null,cljs.core.cst$sym$_DOT_,(new cljs.core.List(null,obj,(new cljs.core.List(null,cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.name(method_name),(1))),args),null,(1),null)),(2),null)),(3),null)));
});
sci.impl.analyzer.analyze_new = (function sci$impl$analyzer$analyze_new(ctx,p__14771){
var vec__14772 = p__14771;
var seq__14773 = cljs.core.seq(vec__14772);
var first__14774 = cljs.core.first(seq__14773);
var seq__14773__$1 = cljs.core.next(seq__14773);
var _new = first__14774;
var first__14774__$1 = cljs.core.first(seq__14773__$1);
var seq__14773__$2 = cljs.core.next(seq__14773__$1);
var class_sym = first__14774__$1;
var args = seq__14773__$2;
var expr = vec__14772;
var temp__5751__auto__ = sci.impl.interop.resolve_class_opts(ctx,class_sym);
if(cljs.core.truth_(temp__5751__auto__)){
var map__14775 = temp__5751__auto__;
var map__14775__$1 = (((((!((map__14775 == null))))?(((((map__14775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14775):map__14775);
var _opts = map__14775__$1;
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14775__$1,cljs.core.cst$kw$constructor);
var args__$1 = sci.impl.analyzer.analyze_children(ctx,args);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.interop.invoke_constructor(constructor$,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__14770_SHARP_){
return sci.impl.evaluator.eval(ctx__$1,bindings,p1__14770_SHARP_);
}),args__$1));
}),expr);
} else {
var temp__5751__auto____$1 = sci.impl.records.resolve_record_class(ctx,class_sym);
if(cljs.core.truth_(temp__5751__auto____$1)){
var record = temp__5751__auto____$1;
var args__$1 = sci.impl.analyzer.analyze_children(ctx,args);
var G__14777 = ctx;
var G__14778 = expr;
var G__14779 = cljs.core.cst$kw$sci$impl$record_SLASH_constructor.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(record));
var G__14780 = args__$1;
var G__14781 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),cljs.core.cst$kw$ns,cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$file,cljs.core.deref(sci.impl.vars.current_file)], 0));
return (sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$5 ? sci.impl.analyzer.return_call.cljs$core$IFn$_invoke$arity$5(G__14777,G__14778,G__14779,G__14780,G__14781) : sci.impl.analyzer.return_call.call(null,G__14777,G__14778,G__14779,G__14780,G__14781));
} else {
return sci.impl.analyzer.throw_error_with_location(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_sym)].join(''),class_sym);
}
}
});
sci.impl.analyzer.expand_constructor = (function sci$impl$analyzer$expand_constructor(ctx,p__14782){
var vec__14783 = p__14782;
var seq__14784 = cljs.core.seq(vec__14783);
var first__14785 = cljs.core.first(seq__14784);
var seq__14784__$1 = cljs.core.next(seq__14784);
var constructor_sym = first__14785;
var args = seq__14784__$1;
var constructor_name = cljs.core.name(constructor_sym);
var class_sym = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(constructor_name,(0),(((constructor_name).length) - (1)))),cljs.core.meta(constructor_sym));
return sci.impl.analyzer.analyze_new(ctx,cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$new,class_sym,args),cljs.core.meta(constructor_sym)));
});
sci.impl.analyzer.return_ns_op = (function sci$impl$analyzer$return_ns_op(_ctx,f,expr,analyzed_args){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx,_bindings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,ctx,analyzed_args);
}),expr);
});
sci.impl.analyzer.analyze_ns_form = (function sci$impl$analyzer$analyze_ns_form(ctx,p__14786){
var vec__14787 = p__14786;
var seq__14788 = cljs.core.seq(vec__14787);
var first__14789 = cljs.core.first(seq__14788);
var seq__14788__$1 = cljs.core.next(seq__14788);
var _ns = first__14789;
var first__14789__$1 = cljs.core.first(seq__14788__$1);
var seq__14788__$2 = cljs.core.next(seq__14788__$1);
var ns_name = first__14789__$1;
var exprs = seq__14788__$2;
var expr = vec__14787;
if((ns_name instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Namespace name must be symbol, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ns_name], 0))].join('')));
}

var vec__14790 = (function (){var fexpr = cljs.core.first(exprs);
if(typeof fexpr === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr,cljs.core.next(exprs)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14790,(0),null);
var exprs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14790,(1),null);
var vec__14793 = (function (){var m = cljs.core.first(exprs__$1);
if(cljs.core.map_QMARK_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.next(exprs__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,exprs__$1], null);
}
})();
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14793,(0),null);
var exprs__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14793,(1),null);
var attr_map__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_map,cljs.core.cst$kw$doc,docstring):attr_map);
sci.impl.utils.set_namespace_BANG_(ctx,ns_name,attr_map__$1);

var exprs__$3 = exprs__$2;
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(exprs__$3)){
var vec__14801 = cljs.core.first(exprs__$3);
var seq__14802 = cljs.core.seq(vec__14801);
var first__14803 = cljs.core.first(seq__14802);
var seq__14802__$1 = cljs.core.next(seq__14802);
var k = first__14803;
var args = seq__14802__$1;
var expr__$1 = vec__14801;
var G__14804 = k;
var G__14804__$1 = (((G__14804 instanceof cljs.core.Keyword))?G__14804.fqn:null);
switch (G__14804__$1) {
case "require":
case "use":
case "import":
case "refer-clojure":
var G__14807 = cljs.core.next(exprs__$3);
var G__14808 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.analyzer.return_ns_op(ctx,(function (){var G__14805 = k;
var G__14805__$1 = (((G__14805 instanceof cljs.core.Keyword))?G__14805.fqn:null);
switch (G__14805__$1) {
case "require":
return sci.impl.load.eval_require;

break;
case "use":
return sci.impl.load.eval_use;

break;
case "import":
return sci.impl.evaluator.eval_import;

break;
case "refer-clojure":
return ((function (exprs__$3,ret,G__14805,G__14805__$1,G__14804,G__14804__$1,vec__14801,seq__14802,first__14803,seq__14802__$1,k,args,expr__$1,vec__14790,docstring,exprs__$1,vec__14793,attr_map,exprs__$2,attr_map__$1,vec__14787,seq__14788,first__14789,seq__14788__$1,_ns,first__14789__$1,seq__14788__$2,ns_name,exprs,expr){
return (function() { 
var G__14810__delegate = function (ctx__$1,args__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.load.eval_refer,ctx__$1,cljs.core.cst$sym$clojure$core,args__$1);
};
var G__14810 = function (ctx__$1,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__14811__i = 0, G__14811__a = new Array(arguments.length -  1);
while (G__14811__i < G__14811__a.length) {G__14811__a[G__14811__i] = arguments[G__14811__i + 1]; ++G__14811__i;}
  args__$1 = new cljs.core.IndexedSeq(G__14811__a,0,null);
} 
return G__14810__delegate.call(this,ctx__$1,args__$1);};
G__14810.cljs$lang$maxFixedArity = 1;
G__14810.cljs$lang$applyTo = (function (arglist__14812){
var ctx__$1 = cljs.core.first(arglist__14812);
var args__$1 = cljs.core.rest(arglist__14812);
return G__14810__delegate(ctx__$1,args__$1);
});
G__14810.cljs$core$IFn$_invoke$arity$variadic = G__14810__delegate;
return G__14810;
})()
;
;})(exprs__$3,ret,G__14805,G__14805__$1,G__14804,G__14804__$1,vec__14801,seq__14802,first__14803,seq__14802__$1,k,args,expr__$1,vec__14790,docstring,exprs__$1,vec__14793,attr_map,exprs__$2,attr_map__$1,vec__14787,seq__14788,first__14789,seq__14788__$1,_ns,first__14789__$1,seq__14788__$2,ns_name,exprs,expr))

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14805__$1)].join('')));

}
})(),expr__$1,args));
exprs__$3 = G__14807;
ret = G__14808;
continue;

break;
case "gen-class":
var G__14813 = cljs.core.next(exprs__$3);
var G__14814 = ret;
exprs__$3 = G__14813;
ret = G__14814;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14804__$1)].join('')));

}
} else {
return sci.impl.analyzer.return_do(expr,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2(((function (exprs__$3,ret,vec__14790,docstring,exprs__$1,vec__14793,attr_map,exprs__$2,attr_map__$1,vec__14787,seq__14788,first__14789,seq__14788__$1,_ns,first__14789__$1,seq__14788__$2,ns_name,exprs,expr){
return (function (ctx__$1,_bindings){
sci.impl.load.add_loaded_lib(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx__$1),ns_name);

return null;
});})(exprs__$3,ret,vec__14790,docstring,exprs__$1,vec__14793,attr_map,exprs__$2,attr_map__$1,vec__14787,seq__14788,first__14789,seq__14788__$1,_ns,first__14789__$1,seq__14788__$2,ns_name,exprs,expr))
,null)));
}
break;
}
});
sci.impl.analyzer.analyze_var = (function sci$impl$analyzer$analyze_var(ctx,p__14815){
var vec__14816 = p__14815;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14816,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14816,(1),null);
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,var_name);
});
sci.impl.analyzer.analyze_set_BANG_ = (function sci$impl$analyzer$analyze_set_BANG_(ctx,p__14819){
var vec__14820 = p__14819;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14820,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14820,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14820,(2),null);
var expr = vec__14820;
if((obj instanceof cljs.core.Symbol)){
var obj__$1 = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$2(ctx,obj);
var ___$1 = ((sci.impl.vars.var_QMARK_(obj__$1))?null:sci.impl.analyzer.throw_error_with_location("Invalid assignment target",expr));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var v__$2 = sci.impl.evaluator.eval(ctx__$1,bindings,v__$1);
return sci.impl.types.setVal(obj__$1,v__$2);
}),expr);
} else {
if(cljs.core.seq_QMARK_(obj)){
var obj__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.analyzer.analyze.call(null,ctx,obj));
var v__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.analyzer.analyze.call(null,ctx,v));
var obj__$2 = sci.impl.types.info(obj__$1);
var k = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sci$impl$analyzer_SLASH_method_DASH_expr.cljs$core$IFn$_invoke$arity$1(obj__$2),(1));
var obj__$3 = cljs.core.cst$kw$sci$impl$analyzer_SLASH_instance_DASH_expr.cljs$core$IFn$_invoke$arity$1(obj__$2);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var obj__$4 = sci.impl.evaluator.eval(ctx__$1,bindings,obj__$3);
var v__$2 = sci.impl.evaluator.eval(ctx__$1,bindings,v__$1);
return goog.object.set(obj__$4,k,v__$2);
}),expr);
} else {
return sci.impl.analyzer.throw_error_with_location("Invalid assignment target",expr);

}
}
});
var ret__4785__auto___14827 = /**
 * Creates returning-binding-call function, optimizes calling a local
 *   binding as function.
 */
sci.impl.analyzer.gen_return_binding_call = (function sci$impl$analyzer$gen_return_binding_call(_AMPERSAND_form,_AMPERSAND_env){
var let_bindings = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["arg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_nth,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,j,null,(1),null))], 0))))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$1(i)], 0)))], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$return_DASH_binding_DASH_call,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_ctx,cljs.core.cst$sym$expr,cljs.core.cst$sym$f,cljs.core.cst$sym$analyzed_DASH_children,cljs.core.cst$sym$stack], null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$utils_SLASH_ctx_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_case,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_count,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__14823){
var vec__14824 = p__14823;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14824,(0),null);
var binds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14824,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,binds,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$evaluator_SLASH_resolve_DASH_symbol,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$f,null,(1),null))], 0)))),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (j){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$evaluator_SLASH_eval,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["arg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')),null,(1),null))], 0))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(i))))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([let_bindings], 0)),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$evaluator_SLASH_fn_DASH_call,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$evaluator_SLASH_resolve_DASH_symbol,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$f,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$expr,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$stack,null,(1),null))], 0)))),null,(1),null))], 0))));
});
(sci.impl.analyzer.gen_return_binding_call.cljs$lang$macro = true);

sci.impl.analyzer.return_binding_call = (function sci$impl$analyzer$return_binding_call(_ctx,expr,f,analyzed_children,stack){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (){var G__14828 = cljs.core.count(analyzed_children);
switch (G__14828) {
case (0):
return (function (ctx,bindings){
var fexpr__14829 = bindings.get(f);
return (fexpr__14829.cljs$core$IFn$_invoke$arity$0 ? fexpr__14829.cljs$core$IFn$_invoke$arity$0() : fexpr__14829.call(null));
});

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return (function (ctx,bindings){
var G__14831 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var fexpr__14830 = bindings.get(f);
return (fexpr__14830.cljs$core$IFn$_invoke$arity$1 ? fexpr__14830.cljs$core$IFn$_invoke$arity$1(G__14831) : fexpr__14830.call(null,G__14831));
});

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return (function (ctx,bindings){
var G__14833 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__14834 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var fexpr__14832 = bindings.get(f);
return (fexpr__14832.cljs$core$IFn$_invoke$arity$2 ? fexpr__14832.cljs$core$IFn$_invoke$arity$2(G__14833,G__14834) : fexpr__14832.call(null,G__14833,G__14834));
});

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return (function (ctx,bindings){
var G__14836 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__14837 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__14838 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var fexpr__14835 = bindings.get(f);
return (fexpr__14835.cljs$core$IFn$_invoke$arity$3 ? fexpr__14835.cljs$core$IFn$_invoke$arity$3(G__14836,G__14837,G__14838) : fexpr__14835.call(null,G__14836,G__14837,G__14838));
});

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return (function (ctx,bindings){
var G__14840 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__14841 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__14842 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__14843 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var fexpr__14839 = bindings.get(f);
return (fexpr__14839.cljs$core$IFn$_invoke$arity$4 ? fexpr__14839.cljs$core$IFn$_invoke$arity$4(G__14840,G__14841,G__14842,G__14843) : fexpr__14839.call(null,G__14840,G__14841,G__14842,G__14843));
});

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return (function (ctx,bindings){
var G__14845 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__14846 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__14847 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__14848 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__14849 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var fexpr__14844 = bindings.get(f);
return (fexpr__14844.cljs$core$IFn$_invoke$arity$5 ? fexpr__14844.cljs$core$IFn$_invoke$arity$5(G__14845,G__14846,G__14847,G__14848,G__14849) : fexpr__14844.call(null,G__14845,G__14846,G__14847,G__14848,G__14849));
});

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return (function (ctx,bindings){
var G__14851 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__14852 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__14853 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__14854 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__14855 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__14856 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var fexpr__14850 = bindings.get(f);
return (fexpr__14850.cljs$core$IFn$_invoke$arity$6 ? fexpr__14850.cljs$core$IFn$_invoke$arity$6(G__14851,G__14852,G__14853,G__14854,G__14855,G__14856) : fexpr__14850.call(null,G__14851,G__14852,G__14853,G__14854,G__14855,G__14856));
});

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return (function (ctx,bindings){
var G__14858 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__14859 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__14860 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__14861 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__14862 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__14863 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__14864 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var fexpr__14857 = bindings.get(f);
return (fexpr__14857.cljs$core$IFn$_invoke$arity$7 ? fexpr__14857.cljs$core$IFn$_invoke$arity$7(G__14858,G__14859,G__14860,G__14861,G__14862,G__14863,G__14864) : fexpr__14857.call(null,G__14858,G__14859,G__14860,G__14861,G__14862,G__14863,G__14864));
});

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return (function (ctx,bindings){
var G__14866 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__14867 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__14868 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__14869 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__14870 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__14871 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__14872 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__14873 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var fexpr__14865 = bindings.get(f);
return (fexpr__14865.cljs$core$IFn$_invoke$arity$8 ? fexpr__14865.cljs$core$IFn$_invoke$arity$8(G__14866,G__14867,G__14868,G__14869,G__14870,G__14871,G__14872,G__14873) : fexpr__14865.call(null,G__14866,G__14867,G__14868,G__14869,G__14870,G__14871,G__14872,G__14873));
});

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return (function (ctx,bindings){
var G__14875 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__14876 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__14877 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__14878 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__14879 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__14880 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__14881 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__14882 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__14883 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var fexpr__14874 = bindings.get(f);
return (fexpr__14874.cljs$core$IFn$_invoke$arity$9 ? fexpr__14874.cljs$core$IFn$_invoke$arity$9(G__14875,G__14876,G__14877,G__14878,G__14879,G__14880,G__14881,G__14882,G__14883) : fexpr__14874.call(null,G__14875,G__14876,G__14877,G__14878,G__14879,G__14880,G__14881,G__14882,G__14883));
});

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return (function (ctx,bindings){
var G__14885 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__14886 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__14887 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__14888 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__14889 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__14890 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__14891 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__14892 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__14893 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__14894 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var fexpr__14884 = bindings.get(f);
return (fexpr__14884.cljs$core$IFn$_invoke$arity$10 ? fexpr__14884.cljs$core$IFn$_invoke$arity$10(G__14885,G__14886,G__14887,G__14888,G__14889,G__14890,G__14891,G__14892,G__14893,G__14894) : fexpr__14884.call(null,G__14885,G__14886,G__14887,G__14888,G__14889,G__14890,G__14891,G__14892,G__14893,G__14894));
});

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return (function (ctx,bindings){
var G__14896 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__14897 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__14898 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__14899 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__14900 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__14901 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__14902 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__14903 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__14904 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__14905 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__14906 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var fexpr__14895 = bindings.get(f);
return (fexpr__14895.cljs$core$IFn$_invoke$arity$11 ? fexpr__14895.cljs$core$IFn$_invoke$arity$11(G__14896,G__14897,G__14898,G__14899,G__14900,G__14901,G__14902,G__14903,G__14904,G__14905,G__14906) : fexpr__14895.call(null,G__14896,G__14897,G__14898,G__14899,G__14900,G__14901,G__14902,G__14903,G__14904,G__14905,G__14906));
});

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return (function (ctx,bindings){
var G__14908 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__14909 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__14910 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__14911 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__14912 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__14913 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__14914 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__14915 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__14916 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__14917 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__14918 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__14919 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var fexpr__14907 = bindings.get(f);
return (fexpr__14907.cljs$core$IFn$_invoke$arity$12 ? fexpr__14907.cljs$core$IFn$_invoke$arity$12(G__14908,G__14909,G__14910,G__14911,G__14912,G__14913,G__14914,G__14915,G__14916,G__14917,G__14918,G__14919) : fexpr__14907.call(null,G__14908,G__14909,G__14910,G__14911,G__14912,G__14913,G__14914,G__14915,G__14916,G__14917,G__14918,G__14919));
});

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return (function (ctx,bindings){
var G__14921 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__14922 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__14923 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__14924 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__14925 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__14926 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__14927 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__14928 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__14929 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__14930 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__14931 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__14932 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__14933 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var fexpr__14920 = bindings.get(f);
return (fexpr__14920.cljs$core$IFn$_invoke$arity$13 ? fexpr__14920.cljs$core$IFn$_invoke$arity$13(G__14921,G__14922,G__14923,G__14924,G__14925,G__14926,G__14927,G__14928,G__14929,G__14930,G__14931,G__14932,G__14933) : fexpr__14920.call(null,G__14921,G__14922,G__14923,G__14924,G__14925,G__14926,G__14927,G__14928,G__14929,G__14930,G__14931,G__14932,G__14933));
});

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return (function (ctx,bindings){
var G__14935 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__14936 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__14937 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__14938 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__14939 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__14940 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__14941 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__14942 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__14943 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__14944 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__14945 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__14946 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__14947 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__14948 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var fexpr__14934 = bindings.get(f);
return (fexpr__14934.cljs$core$IFn$_invoke$arity$14 ? fexpr__14934.cljs$core$IFn$_invoke$arity$14(G__14935,G__14936,G__14937,G__14938,G__14939,G__14940,G__14941,G__14942,G__14943,G__14944,G__14945,G__14946,G__14947,G__14948) : fexpr__14934.call(null,G__14935,G__14936,G__14937,G__14938,G__14939,G__14940,G__14941,G__14942,G__14943,G__14944,G__14945,G__14946,G__14947,G__14948));
});

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return (function (ctx,bindings){
var G__14950 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__14951 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__14952 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__14953 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__14954 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__14955 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__14956 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__14957 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__14958 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__14959 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__14960 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__14961 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__14962 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__14963 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__14964 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var fexpr__14949 = bindings.get(f);
return (fexpr__14949.cljs$core$IFn$_invoke$arity$15 ? fexpr__14949.cljs$core$IFn$_invoke$arity$15(G__14950,G__14951,G__14952,G__14953,G__14954,G__14955,G__14956,G__14957,G__14958,G__14959,G__14960,G__14961,G__14962,G__14963,G__14964) : fexpr__14949.call(null,G__14950,G__14951,G__14952,G__14953,G__14954,G__14955,G__14956,G__14957,G__14958,G__14959,G__14960,G__14961,G__14962,G__14963,G__14964));
});

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return (function (ctx,bindings){
var G__14966 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__14967 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__14968 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__14969 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__14970 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__14971 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__14972 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__14973 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__14974 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__14975 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__14976 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__14977 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__14978 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__14979 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__14980 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__14981 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var fexpr__14965 = bindings.get(f);
return (fexpr__14965.cljs$core$IFn$_invoke$arity$16 ? fexpr__14965.cljs$core$IFn$_invoke$arity$16(G__14966,G__14967,G__14968,G__14969,G__14970,G__14971,G__14972,G__14973,G__14974,G__14975,G__14976,G__14977,G__14978,G__14979,G__14980,G__14981) : fexpr__14965.call(null,G__14966,G__14967,G__14968,G__14969,G__14970,G__14971,G__14972,G__14973,G__14974,G__14975,G__14976,G__14977,G__14978,G__14979,G__14980,G__14981));
});

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return (function (ctx,bindings){
var G__14983 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__14984 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__14985 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__14986 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__14987 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__14988 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__14989 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__14990 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__14991 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__14992 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__14993 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__14994 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__14995 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__14996 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__14997 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__14998 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__14999 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var fexpr__14982 = bindings.get(f);
return (fexpr__14982.cljs$core$IFn$_invoke$arity$17 ? fexpr__14982.cljs$core$IFn$_invoke$arity$17(G__14983,G__14984,G__14985,G__14986,G__14987,G__14988,G__14989,G__14990,G__14991,G__14992,G__14993,G__14994,G__14995,G__14996,G__14997,G__14998,G__14999) : fexpr__14982.call(null,G__14983,G__14984,G__14985,G__14986,G__14987,G__14988,G__14989,G__14990,G__14991,G__14992,G__14993,G__14994,G__14995,G__14996,G__14997,G__14998,G__14999));
});

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return (function (ctx,bindings){
var G__15001 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15002 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15003 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15004 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15005 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15006 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15007 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15008 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15009 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__15010 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__15011 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__15012 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__15013 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__15014 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__15015 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__15016 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__15017 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__15018 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var fexpr__15000 = bindings.get(f);
return (fexpr__15000.cljs$core$IFn$_invoke$arity$18 ? fexpr__15000.cljs$core$IFn$_invoke$arity$18(G__15001,G__15002,G__15003,G__15004,G__15005,G__15006,G__15007,G__15008,G__15009,G__15010,G__15011,G__15012,G__15013,G__15014,G__15015,G__15016,G__15017,G__15018) : fexpr__15000.call(null,G__15001,G__15002,G__15003,G__15004,G__15005,G__15006,G__15007,G__15008,G__15009,G__15010,G__15011,G__15012,G__15013,G__15014,G__15015,G__15016,G__15017,G__15018));
});

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return (function (ctx,bindings){
var G__15020 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15021 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15022 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15023 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15024 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15025 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15026 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15027 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15028 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__15029 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__15030 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__15031 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__15032 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__15033 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__15034 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__15035 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__15036 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__15037 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var G__15038 = sci.impl.evaluator.eval(ctx,bindings,arg18);
var fexpr__15019 = bindings.get(f);
return (fexpr__15019.cljs$core$IFn$_invoke$arity$19 ? fexpr__15019.cljs$core$IFn$_invoke$arity$19(G__15020,G__15021,G__15022,G__15023,G__15024,G__15025,G__15026,G__15027,G__15028,G__15029,G__15030,G__15031,G__15032,G__15033,G__15034,G__15035,G__15036,G__15037,G__15038) : fexpr__15019.call(null,G__15020,G__15021,G__15022,G__15023,G__15024,G__15025,G__15026,G__15027,G__15028,G__15029,G__15030,G__15031,G__15032,G__15033,G__15034,G__15035,G__15036,G__15037,G__15038));
});

break;
default:
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,bindings.get(f),analyzed_children);
});

}
})(),null,expr,stack);
});
var ret__4785__auto___15044 = sci.impl.analyzer.gen_return_needs_ctx_call = (function sci$impl$analyzer$gen_return_needs_ctx_call(_AMPERSAND_form,_AMPERSAND_env){
var let_bindings = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["arg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_nth,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,j,null,(1),null))], 0))))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$1(i)], 0)))], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$return_DASH_needs_DASH_ctx_DASH_call,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_ctx,cljs.core.cst$sym$expr,cljs.core.cst$sym$f,cljs.core.cst$sym$analyzed_DASH_children], null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$utils_SLASH_ctx_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_case,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_count,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__15040){
var vec__15041 = p__15040;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15041,(0),null);
var binds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15041,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,binds,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$f,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (j){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$evaluator_SLASH_eval,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["arg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')),null,(1),null))], 0))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(i))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([let_bindings], 0)),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$evaluator_SLASH_fn_DASH_call,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$f,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_cons,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$expr,null,(1),null))], 0)))),null,(1),null))], 0))));
});
(sci.impl.analyzer.gen_return_needs_ctx_call.cljs$lang$macro = true);

sci.impl.analyzer.return_needs_ctx_call = (function sci$impl$analyzer$return_needs_ctx_call(_ctx,expr,f,analyzed_children){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (){var G__15045 = cljs.core.count(analyzed_children);
switch (G__15045) {
case (0):
return (function (ctx,bindings){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(ctx) : f.call(null,ctx));
});

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return (function (ctx,bindings){
var G__15046 = ctx;
var G__15047 = sci.impl.evaluator.eval(ctx,bindings,arg0);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15046,G__15047) : f.call(null,G__15046,G__15047));
});

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return (function (ctx,bindings){
var G__15048 = ctx;
var G__15049 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15050 = sci.impl.evaluator.eval(ctx,bindings,arg1);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15048,G__15049,G__15050) : f.call(null,G__15048,G__15049,G__15050));
});

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return (function (ctx,bindings){
var G__15051 = ctx;
var G__15052 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15053 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15054 = sci.impl.evaluator.eval(ctx,bindings,arg2);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__15051,G__15052,G__15053,G__15054) : f.call(null,G__15051,G__15052,G__15053,G__15054));
});

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return (function (ctx,bindings){
var G__15055 = ctx;
var G__15056 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15057 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15058 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15059 = sci.impl.evaluator.eval(ctx,bindings,arg3);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__15055,G__15056,G__15057,G__15058,G__15059) : f.call(null,G__15055,G__15056,G__15057,G__15058,G__15059));
});

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return (function (ctx,bindings){
var G__15060 = ctx;
var G__15061 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15062 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15063 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15064 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15065 = sci.impl.evaluator.eval(ctx,bindings,arg4);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__15060,G__15061,G__15062,G__15063,G__15064,G__15065) : f.call(null,G__15060,G__15061,G__15062,G__15063,G__15064,G__15065));
});

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return (function (ctx,bindings){
var G__15066 = ctx;
var G__15067 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15068 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15069 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15070 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15071 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15072 = sci.impl.evaluator.eval(ctx,bindings,arg5);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__15066,G__15067,G__15068,G__15069,G__15070,G__15071,G__15072) : f.call(null,G__15066,G__15067,G__15068,G__15069,G__15070,G__15071,G__15072));
});

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return (function (ctx,bindings){
var G__15073 = ctx;
var G__15074 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15075 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15076 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15077 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15078 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15079 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15080 = sci.impl.evaluator.eval(ctx,bindings,arg6);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__15073,G__15074,G__15075,G__15076,G__15077,G__15078,G__15079,G__15080) : f.call(null,G__15073,G__15074,G__15075,G__15076,G__15077,G__15078,G__15079,G__15080));
});

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return (function (ctx,bindings){
var G__15081 = ctx;
var G__15082 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15083 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15084 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15085 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15086 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15087 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15088 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15089 = sci.impl.evaluator.eval(ctx,bindings,arg7);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__15081,G__15082,G__15083,G__15084,G__15085,G__15086,G__15087,G__15088,G__15089) : f.call(null,G__15081,G__15082,G__15083,G__15084,G__15085,G__15086,G__15087,G__15088,G__15089));
});

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return (function (ctx,bindings){
var G__15090 = ctx;
var G__15091 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15092 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15093 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15094 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15095 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15096 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15097 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15098 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15099 = sci.impl.evaluator.eval(ctx,bindings,arg8);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__15090,G__15091,G__15092,G__15093,G__15094,G__15095,G__15096,G__15097,G__15098,G__15099) : f.call(null,G__15090,G__15091,G__15092,G__15093,G__15094,G__15095,G__15096,G__15097,G__15098,G__15099));
});

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return (function (ctx,bindings){
var G__15100 = ctx;
var G__15101 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15102 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15103 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15104 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15105 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15106 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15107 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15108 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15109 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__15110 = sci.impl.evaluator.eval(ctx,bindings,arg9);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__15100,G__15101,G__15102,G__15103,G__15104,G__15105,G__15106,G__15107,G__15108,G__15109,G__15110) : f.call(null,G__15100,G__15101,G__15102,G__15103,G__15104,G__15105,G__15106,G__15107,G__15108,G__15109,G__15110));
});

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return (function (ctx,bindings){
var G__15111 = ctx;
var G__15112 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15113 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15114 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15115 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15116 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15117 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15118 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15119 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15120 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__15121 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__15122 = sci.impl.evaluator.eval(ctx,bindings,arg10);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__15111,G__15112,G__15113,G__15114,G__15115,G__15116,G__15117,G__15118,G__15119,G__15120,G__15121,G__15122) : f.call(null,G__15111,G__15112,G__15113,G__15114,G__15115,G__15116,G__15117,G__15118,G__15119,G__15120,G__15121,G__15122));
});

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return (function (ctx,bindings){
var G__15123 = ctx;
var G__15124 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15125 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15126 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15127 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15128 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15129 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15130 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15131 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15132 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__15133 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__15134 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__15135 = sci.impl.evaluator.eval(ctx,bindings,arg11);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__15123,G__15124,G__15125,G__15126,G__15127,G__15128,G__15129,G__15130,G__15131,G__15132,G__15133,G__15134,G__15135) : f.call(null,G__15123,G__15124,G__15125,G__15126,G__15127,G__15128,G__15129,G__15130,G__15131,G__15132,G__15133,G__15134,G__15135));
});

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return (function (ctx,bindings){
var G__15136 = ctx;
var G__15137 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15138 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15139 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15140 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15141 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15142 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15143 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15144 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15145 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__15146 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__15147 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__15148 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__15149 = sci.impl.evaluator.eval(ctx,bindings,arg12);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__15136,G__15137,G__15138,G__15139,G__15140,G__15141,G__15142,G__15143,G__15144,G__15145,G__15146,G__15147,G__15148,G__15149) : f.call(null,G__15136,G__15137,G__15138,G__15139,G__15140,G__15141,G__15142,G__15143,G__15144,G__15145,G__15146,G__15147,G__15148,G__15149));
});

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return (function (ctx,bindings){
var G__15150 = ctx;
var G__15151 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15152 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15153 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15154 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15155 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15156 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15157 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15158 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15159 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__15160 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__15161 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__15162 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__15163 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__15164 = sci.impl.evaluator.eval(ctx,bindings,arg13);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__15150,G__15151,G__15152,G__15153,G__15154,G__15155,G__15156,G__15157,G__15158,G__15159,G__15160,G__15161,G__15162,G__15163,G__15164) : f.call(null,G__15150,G__15151,G__15152,G__15153,G__15154,G__15155,G__15156,G__15157,G__15158,G__15159,G__15160,G__15161,G__15162,G__15163,G__15164));
});

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return (function (ctx,bindings){
var G__15165 = ctx;
var G__15166 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15167 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15168 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15169 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15170 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15171 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15172 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15173 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15174 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__15175 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__15176 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__15177 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__15178 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__15179 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__15180 = sci.impl.evaluator.eval(ctx,bindings,arg14);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__15165,G__15166,G__15167,G__15168,G__15169,G__15170,G__15171,G__15172,G__15173,G__15174,G__15175,G__15176,G__15177,G__15178,G__15179,G__15180) : f.call(null,G__15165,G__15166,G__15167,G__15168,G__15169,G__15170,G__15171,G__15172,G__15173,G__15174,G__15175,G__15176,G__15177,G__15178,G__15179,G__15180));
});

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return (function (ctx,bindings){
var G__15181 = ctx;
var G__15182 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15183 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15184 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15185 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15186 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15187 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15188 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15189 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15190 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__15191 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__15192 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__15193 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__15194 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__15195 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__15196 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__15197 = sci.impl.evaluator.eval(ctx,bindings,arg15);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__15181,G__15182,G__15183,G__15184,G__15185,G__15186,G__15187,G__15188,G__15189,G__15190,G__15191,G__15192,G__15193,G__15194,G__15195,G__15196,G__15197) : f.call(null,G__15181,G__15182,G__15183,G__15184,G__15185,G__15186,G__15187,G__15188,G__15189,G__15190,G__15191,G__15192,G__15193,G__15194,G__15195,G__15196,G__15197));
});

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return (function (ctx,bindings){
var G__15198 = ctx;
var G__15199 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15200 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15201 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15202 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15203 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15204 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15205 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15206 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15207 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__15208 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__15209 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__15210 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__15211 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__15212 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__15213 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__15214 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__15215 = sci.impl.evaluator.eval(ctx,bindings,arg16);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__15198,G__15199,G__15200,G__15201,G__15202,G__15203,G__15204,G__15205,G__15206,G__15207,G__15208,G__15209,G__15210,G__15211,G__15212,G__15213,G__15214,G__15215) : f.call(null,G__15198,G__15199,G__15200,G__15201,G__15202,G__15203,G__15204,G__15205,G__15206,G__15207,G__15208,G__15209,G__15210,G__15211,G__15212,G__15213,G__15214,G__15215));
});

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return (function (ctx,bindings){
var G__15216 = ctx;
var G__15217 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15218 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15219 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15220 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15221 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15222 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15223 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15224 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15225 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__15226 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__15227 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__15228 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__15229 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__15230 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__15231 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__15232 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__15233 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__15234 = sci.impl.evaluator.eval(ctx,bindings,arg17);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__15216,G__15217,G__15218,G__15219,G__15220,G__15221,G__15222,G__15223,G__15224,G__15225,G__15226,G__15227,G__15228,G__15229,G__15230,G__15231,G__15232,G__15233,G__15234) : f.call(null,G__15216,G__15217,G__15218,G__15219,G__15220,G__15221,G__15222,G__15223,G__15224,G__15225,G__15226,G__15227,G__15228,G__15229,G__15230,G__15231,G__15232,G__15233,G__15234));
});

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return (function (ctx,bindings){
var G__15235 = ctx;
var G__15236 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15237 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15238 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15239 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15240 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15241 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15242 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15243 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15244 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__15245 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__15246 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__15247 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__15248 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__15249 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__15250 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__15251 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__15252 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__15253 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var G__15254 = sci.impl.evaluator.eval(ctx,bindings,arg18);
return (f.cljs$core$IFn$_invoke$arity$20 ? f.cljs$core$IFn$_invoke$arity$20(G__15235,G__15236,G__15237,G__15238,G__15239,G__15240,G__15241,G__15242,G__15243,G__15244,G__15245,G__15246,G__15247,G__15248,G__15249,G__15250,G__15251,G__15252,G__15253,G__15254) : f.call(null,G__15235,G__15236,G__15237,G__15238,G__15239,G__15240,G__15241,G__15242,G__15243,G__15244,G__15245,G__15246,G__15247,G__15248,G__15249,G__15250,G__15251,G__15252,G__15253,G__15254));
});

break;
default:
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,cljs.core.cons(ctx,analyzed_children));
});

}
})(),expr);
});
var ret__4785__auto___15260 = sci.impl.analyzer.gen_return_call = (function sci$impl$analyzer$gen_return_call(_AMPERSAND_form,_AMPERSAND_env){
var let_bindings = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (j){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["arg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_nth,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,j,null,(1),null))], 0))))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$1(i)], 0)))], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((20)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$return_DASH_call,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_ctx,cljs.core.cst$sym$expr,cljs.core.cst$sym$f,cljs.core.cst$sym$analyzed_DASH_children,cljs.core.cst$sym$stack], null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$utils_SLASH_ctx_DASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_case,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_count,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__15256){
var vec__15257 = p__15256;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15257,(0),null);
var binds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15257,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,binds,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$f,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (j){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$evaluator_SLASH_eval,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["arg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')),null,(1),null))], 0))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(i))))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([let_bindings], 0)),cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$evaluator_SLASH_fn_DASH_call,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$f,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$analyzed_DASH_children,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$expr,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$stack,null,(1),null))], 0)))),null,(1),null))], 0))));
});
(sci.impl.analyzer.gen_return_call.cljs$lang$macro = true);

sci.impl.analyzer.return_call = (function sci$impl$analyzer$return_call(_ctx,expr,f,analyzed_children,stack){
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (){var G__15261 = cljs.core.count(analyzed_children);
switch (G__15261) {
case (0):
return (function (ctx,bindings){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});

break;
case (1):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
return (function (ctx,bindings){
var G__15262 = sci.impl.evaluator.eval(ctx,bindings,arg0);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15262) : f.call(null,G__15262));
});

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
return (function (ctx,bindings){
var G__15263 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15264 = sci.impl.evaluator.eval(ctx,bindings,arg1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15263,G__15264) : f.call(null,G__15263,G__15264));
});

break;
case (3):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
return (function (ctx,bindings){
var G__15265 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15266 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15267 = sci.impl.evaluator.eval(ctx,bindings,arg2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15265,G__15266,G__15267) : f.call(null,G__15265,G__15266,G__15267));
});

break;
case (4):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
return (function (ctx,bindings){
var G__15268 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15269 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15270 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15271 = sci.impl.evaluator.eval(ctx,bindings,arg3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__15268,G__15269,G__15270,G__15271) : f.call(null,G__15268,G__15269,G__15270,G__15271));
});

break;
case (5):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
return (function (ctx,bindings){
var G__15272 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15273 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15274 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15275 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15276 = sci.impl.evaluator.eval(ctx,bindings,arg4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__15272,G__15273,G__15274,G__15275,G__15276) : f.call(null,G__15272,G__15273,G__15274,G__15275,G__15276));
});

break;
case (6):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
return (function (ctx,bindings){
var G__15277 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15278 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15279 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15280 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15281 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15282 = sci.impl.evaluator.eval(ctx,bindings,arg5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__15277,G__15278,G__15279,G__15280,G__15281,G__15282) : f.call(null,G__15277,G__15278,G__15279,G__15280,G__15281,G__15282));
});

break;
case (7):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
return (function (ctx,bindings){
var G__15283 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15284 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15285 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15286 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15287 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15288 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15289 = sci.impl.evaluator.eval(ctx,bindings,arg6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(G__15283,G__15284,G__15285,G__15286,G__15287,G__15288,G__15289) : f.call(null,G__15283,G__15284,G__15285,G__15286,G__15287,G__15288,G__15289));
});

break;
case (8):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
return (function (ctx,bindings){
var G__15290 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15291 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15292 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15293 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15294 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15295 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15296 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15297 = sci.impl.evaluator.eval(ctx,bindings,arg7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(G__15290,G__15291,G__15292,G__15293,G__15294,G__15295,G__15296,G__15297) : f.call(null,G__15290,G__15291,G__15292,G__15293,G__15294,G__15295,G__15296,G__15297));
});

break;
case (9):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
return (function (ctx,bindings){
var G__15298 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15299 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15300 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15301 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15302 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15303 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15304 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15305 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15306 = sci.impl.evaluator.eval(ctx,bindings,arg8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(G__15298,G__15299,G__15300,G__15301,G__15302,G__15303,G__15304,G__15305,G__15306) : f.call(null,G__15298,G__15299,G__15300,G__15301,G__15302,G__15303,G__15304,G__15305,G__15306));
});

break;
case (10):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
return (function (ctx,bindings){
var G__15307 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15308 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15309 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15310 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15311 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15312 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15313 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15314 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15315 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__15316 = sci.impl.evaluator.eval(ctx,bindings,arg9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(G__15307,G__15308,G__15309,G__15310,G__15311,G__15312,G__15313,G__15314,G__15315,G__15316) : f.call(null,G__15307,G__15308,G__15309,G__15310,G__15311,G__15312,G__15313,G__15314,G__15315,G__15316));
});

break;
case (11):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
return (function (ctx,bindings){
var G__15317 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15318 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15319 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15320 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15321 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15322 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15323 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15324 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15325 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__15326 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__15327 = sci.impl.evaluator.eval(ctx,bindings,arg10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(G__15317,G__15318,G__15319,G__15320,G__15321,G__15322,G__15323,G__15324,G__15325,G__15326,G__15327) : f.call(null,G__15317,G__15318,G__15319,G__15320,G__15321,G__15322,G__15323,G__15324,G__15325,G__15326,G__15327));
});

break;
case (12):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
return (function (ctx,bindings){
var G__15328 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15329 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15330 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15331 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15332 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15333 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15334 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15335 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15336 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__15337 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__15338 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__15339 = sci.impl.evaluator.eval(ctx,bindings,arg11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(G__15328,G__15329,G__15330,G__15331,G__15332,G__15333,G__15334,G__15335,G__15336,G__15337,G__15338,G__15339) : f.call(null,G__15328,G__15329,G__15330,G__15331,G__15332,G__15333,G__15334,G__15335,G__15336,G__15337,G__15338,G__15339));
});

break;
case (13):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
return (function (ctx,bindings){
var G__15340 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15341 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15342 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15343 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15344 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15345 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15346 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15347 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15348 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__15349 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__15350 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__15351 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__15352 = sci.impl.evaluator.eval(ctx,bindings,arg12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(G__15340,G__15341,G__15342,G__15343,G__15344,G__15345,G__15346,G__15347,G__15348,G__15349,G__15350,G__15351,G__15352) : f.call(null,G__15340,G__15341,G__15342,G__15343,G__15344,G__15345,G__15346,G__15347,G__15348,G__15349,G__15350,G__15351,G__15352));
});

break;
case (14):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
return (function (ctx,bindings){
var G__15353 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15354 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15355 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15356 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15357 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15358 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15359 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15360 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15361 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__15362 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__15363 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__15364 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__15365 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__15366 = sci.impl.evaluator.eval(ctx,bindings,arg13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(G__15353,G__15354,G__15355,G__15356,G__15357,G__15358,G__15359,G__15360,G__15361,G__15362,G__15363,G__15364,G__15365,G__15366) : f.call(null,G__15353,G__15354,G__15355,G__15356,G__15357,G__15358,G__15359,G__15360,G__15361,G__15362,G__15363,G__15364,G__15365,G__15366));
});

break;
case (15):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
return (function (ctx,bindings){
var G__15367 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15368 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15369 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15370 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15371 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15372 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15373 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15374 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15375 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__15376 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__15377 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__15378 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__15379 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__15380 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__15381 = sci.impl.evaluator.eval(ctx,bindings,arg14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(G__15367,G__15368,G__15369,G__15370,G__15371,G__15372,G__15373,G__15374,G__15375,G__15376,G__15377,G__15378,G__15379,G__15380,G__15381) : f.call(null,G__15367,G__15368,G__15369,G__15370,G__15371,G__15372,G__15373,G__15374,G__15375,G__15376,G__15377,G__15378,G__15379,G__15380,G__15381));
});

break;
case (16):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
return (function (ctx,bindings){
var G__15382 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15383 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15384 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15385 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15386 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15387 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15388 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15389 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15390 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__15391 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__15392 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__15393 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__15394 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__15395 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__15396 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__15397 = sci.impl.evaluator.eval(ctx,bindings,arg15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(G__15382,G__15383,G__15384,G__15385,G__15386,G__15387,G__15388,G__15389,G__15390,G__15391,G__15392,G__15393,G__15394,G__15395,G__15396,G__15397) : f.call(null,G__15382,G__15383,G__15384,G__15385,G__15386,G__15387,G__15388,G__15389,G__15390,G__15391,G__15392,G__15393,G__15394,G__15395,G__15396,G__15397));
});

break;
case (17):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
return (function (ctx,bindings){
var G__15398 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15399 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15400 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15401 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15402 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15403 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15404 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15405 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15406 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__15407 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__15408 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__15409 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__15410 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__15411 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__15412 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__15413 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__15414 = sci.impl.evaluator.eval(ctx,bindings,arg16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(G__15398,G__15399,G__15400,G__15401,G__15402,G__15403,G__15404,G__15405,G__15406,G__15407,G__15408,G__15409,G__15410,G__15411,G__15412,G__15413,G__15414) : f.call(null,G__15398,G__15399,G__15400,G__15401,G__15402,G__15403,G__15404,G__15405,G__15406,G__15407,G__15408,G__15409,G__15410,G__15411,G__15412,G__15413,G__15414));
});

break;
case (18):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
return (function (ctx,bindings){
var G__15415 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15416 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15417 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15418 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15419 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15420 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15421 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15422 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15423 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__15424 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__15425 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__15426 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__15427 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__15428 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__15429 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__15430 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__15431 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__15432 = sci.impl.evaluator.eval(ctx,bindings,arg17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(G__15415,G__15416,G__15417,G__15418,G__15419,G__15420,G__15421,G__15422,G__15423,G__15424,G__15425,G__15426,G__15427,G__15428,G__15429,G__15430,G__15431,G__15432) : f.call(null,G__15415,G__15416,G__15417,G__15418,G__15419,G__15420,G__15421,G__15422,G__15423,G__15424,G__15425,G__15426,G__15427,G__15428,G__15429,G__15430,G__15431,G__15432));
});

break;
case (19):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(1));
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(2));
var arg3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(3));
var arg4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(4));
var arg5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(5));
var arg6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(6));
var arg7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(7));
var arg8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(8));
var arg9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(9));
var arg10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(10));
var arg11 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(11));
var arg12 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(12));
var arg13 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(13));
var arg14 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(14));
var arg15 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(15));
var arg16 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(16));
var arg17 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(17));
var arg18 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(analyzed_children,(18));
return (function (ctx,bindings){
var G__15433 = sci.impl.evaluator.eval(ctx,bindings,arg0);
var G__15434 = sci.impl.evaluator.eval(ctx,bindings,arg1);
var G__15435 = sci.impl.evaluator.eval(ctx,bindings,arg2);
var G__15436 = sci.impl.evaluator.eval(ctx,bindings,arg3);
var G__15437 = sci.impl.evaluator.eval(ctx,bindings,arg4);
var G__15438 = sci.impl.evaluator.eval(ctx,bindings,arg5);
var G__15439 = sci.impl.evaluator.eval(ctx,bindings,arg6);
var G__15440 = sci.impl.evaluator.eval(ctx,bindings,arg7);
var G__15441 = sci.impl.evaluator.eval(ctx,bindings,arg8);
var G__15442 = sci.impl.evaluator.eval(ctx,bindings,arg9);
var G__15443 = sci.impl.evaluator.eval(ctx,bindings,arg10);
var G__15444 = sci.impl.evaluator.eval(ctx,bindings,arg11);
var G__15445 = sci.impl.evaluator.eval(ctx,bindings,arg12);
var G__15446 = sci.impl.evaluator.eval(ctx,bindings,arg13);
var G__15447 = sci.impl.evaluator.eval(ctx,bindings,arg14);
var G__15448 = sci.impl.evaluator.eval(ctx,bindings,arg15);
var G__15449 = sci.impl.evaluator.eval(ctx,bindings,arg16);
var G__15450 = sci.impl.evaluator.eval(ctx,bindings,arg17);
var G__15451 = sci.impl.evaluator.eval(ctx,bindings,arg18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(G__15433,G__15434,G__15435,G__15436,G__15437,G__15438,G__15439,G__15440,G__15441,G__15442,G__15443,G__15444,G__15445,G__15446,G__15447,G__15448,G__15449,G__15450,G__15451) : f.call(null,G__15433,G__15434,G__15435,G__15436,G__15437,G__15438,G__15439,G__15440,G__15441,G__15442,G__15443,G__15444,G__15445,G__15446,G__15447,G__15448,G__15449,G__15450,G__15451));
});

break;
default:
return (function (ctx,bindings){
return sci.impl.evaluator.fn_call(ctx,bindings,f,analyzed_children);
});

}
})(),null,expr,stack);
});
sci.impl.analyzer.analyze_quote = (function sci$impl$analyzer$analyze_quote(_ctx,expr){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(expr))){
} else {
sci.impl.analyzer.throw_error_with_location("Wrong number of args (0) passed to quote",expr);
}

var snd = cljs.core.second(expr);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (_ctx__$1,_bindings){
return snd;
}),expr);
});
sci.impl.analyzer.analyze_in_ns = (function sci$impl$analyzer$analyze_in_ns(ctx,expr){
var ns_expr = (function (){var G__15453 = ctx;
var G__15454 = cljs.core.second(expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__15453,G__15454) : sci.impl.analyzer.analyze.call(null,G__15453,G__15454));
})();
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var ns_sym = sci.impl.evaluator.eval(ctx__$1,bindings,ns_expr);
sci.impl.utils.set_namespace_BANG_(ctx__$1,ns_sym,null);

return null;
}),expr);
});
sci.impl.analyzer.analyze_import = (function sci$impl$analyzer$analyze_import(_ctx,expr){
var args = cljs.core.rest(expr);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx,_bindings){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.evaluator.eval_import,ctx,args);
}),null,expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),cljs.core.cst$kw$ns,cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$file,cljs.core.deref(sci.impl.vars.current_file)], 0)));
});
sci.impl.analyzer.analyze_call = (function sci$impl$analyzer$analyze_call(ctx,expr,top_level_QMARK_){
var f = cljs.core.first(expr);
if((f instanceof cljs.core.Symbol)){
var special_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,f);
var _ = (cljs.core.truth_((function (){var and__4115__auto__ = special_sym;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.cst$kw$check_DASH_permissions.cljs$core$IFn$_invoke$arity$1(ctx);
} else {
return and__4115__auto__;
}
})())?sci.impl.resolve.check_permission_BANG_(ctx,f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_sym,null], null)):null);
var f__$1 = (function (){var or__4126__auto__ = special_sym;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,f,true);
}
})();
var f_meta = cljs.core.meta(f__$1);
var eval_QMARK_ = (function (){var and__4115__auto__ = f_meta;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.cst$kw$sci$impl_SLASH_op.cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = f_meta;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.cst$kw$sci$impl$analyzer_SLASH_static_DASH_access.cljs$core$IFn$_invoke$arity$1(f_meta);
} else {
return and__4115__auto__;
}
})())){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return sci.impl.evaluator.eval_static_method_invocation(ctx__$1,bindings,cljs.core.cons(f__$1,children));
}),expr);
} else {
if(cljs.core.truth_(((cljs.core.not(eval_QMARK_))?(function (){var or__4126__auto__ = special_sym;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.contains_QMARK_(sci.impl.utils.ana_macros,f__$1);
}
})():false))){
var G__15455 = f__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_DOT_,G__15455)){
return sci.impl.analyzer.expand_dot_STAR__STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$and,G__15455)){
return sci.impl.analyzer.return_and(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$import,G__15455)){
return sci.impl.analyzer.analyze_import(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$case,G__15455)){
return sci.impl.analyzer.analyze_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$fn_STAR_,G__15455)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$if,G__15455)){
return sci.impl.analyzer.return_if(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$defmacro,G__15455)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$defn,G__15455)){
var ret = sci.impl.analyzer.expand_defn(ctx,expr);
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$do,G__15455)){
return sci.impl.analyzer.return_do(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$loop,G__15455)){
return sci.impl.analyzer.expand_loop(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$doseq,G__15455)){
var G__15456 = ctx;
var G__15457 = sci.impl.doseq_macro.expand_doseq(ctx,expr);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__15456,G__15457) : sci.impl.analyzer.analyze.call(null,G__15456,G__15457));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$expand_DASH_constructor,G__15455)){
return sci.impl.analyzer.expand_constructor(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$def,G__15455)){
return sci.impl.analyzer.expand_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$declare,G__15455)){
return sci.impl.analyzer.expand_declare(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,G__15455)){
return sci.impl.analyzer.analyze_quote(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$expand_DASH_dot_STAR_,G__15455)){
return sci.impl.analyzer.expand_dot_STAR_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$ns,G__15455)){
return sci.impl.analyzer.analyze_ns_form(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$for,G__15455)){
var res = sci.impl.for_macro.expand_for(ctx,expr);
if(cljs.core.truth_(cljs.core.cst$kw$sci$impl_SLASH_macroexpanding.cljs$core$IFn$_invoke$arity$1(ctx))){
return res;
} else {
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,res) : sci.impl.analyzer.analyze.call(null,ctx,res));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$let,G__15455)){
return sci.impl.analyzer.expand_let(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$fn,G__15455)){
return sci.impl.analyzer.expand_fn(ctx,expr,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$in_DASH_ns,G__15455)){
return sci.impl.analyzer.analyze_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$set_BANG_,G__15455)){
return sci.impl.analyzer.analyze_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$recur,G__15455)){
return sci.impl.analyzer.return_recur(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$new,G__15455)){
return sci.impl.analyzer.analyze_new(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$var,G__15455)){
return sci.impl.analyzer.analyze_var(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$lazy_DASH_seq,G__15455)){
return sci.impl.analyzer.analyze_lazy_seq(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$throw,G__15455)){
return sci.impl.analyzer.analyze_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$try,G__15455)){
return sci.impl.analyzer.analyze_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$or,G__15455)){
return sci.impl.analyzer.return_or(expr,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15455)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
} else {
try{if(cljs.core.truth_(sci.impl.utils.macro_QMARK_(f__$1))){
var needs_ctx_QMARK_ = (sci.impl.utils.needs_ctx === cljs.core.cst$kw$sci$impl_SLASH_op.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1)));
var v = ((needs_ctx_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,expr,cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(ctx),ctx,cljs.core.rest(expr)):cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$1,expr,cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr)));
var expanded = (cljs.core.truth_(cljs.core.cst$kw$sci$impl_SLASH_macroexpanding.cljs$core$IFn$_invoke$arity$1(ctx))?v:(cljs.core.truth_((function (){var and__4115__auto__ = top_level_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.seq_QMARK_(v)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$do,cljs.core.first(v))));
} else {
return and__4115__auto__;
}
})())?sci.impl.types.__GT_EvalForm(v):(function (){var m = cljs.core.meta(expr);
var v__$1 = (cljs.core.truth_(m)?(((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.with_meta(v,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,cljs.core.meta(v)], 0))):v):v);
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,v__$1) : sci.impl.analyzer.analyze.call(null,ctx,v__$1));
})()
));
return expanded;
} else {
var temp__5751__auto__ = cljs.core.cst$kw$sci$impl_SLASH_inlined.cljs$core$IFn$_invoke$arity$1(f_meta);
if(cljs.core.truth_(temp__5751__auto__)){
var f__$2 = temp__5751__auto__;
return sci.impl.analyzer.return_call(ctx,expr,f__$2,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),cljs.core.cst$kw$ns,cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$file,cljs.core.deref(sci.impl.vars.current_file),cljs.core.cst$kw$sci$impl_SLASH_f_DASH_meta,f_meta], 0)));
} else {
var temp__5751__auto____$1 = cljs.core.cst$kw$sci$impl_SLASH_op.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(f__$1));
if(cljs.core.truth_(temp__5751__auto____$1)){
var op = temp__5751__auto____$1;
var G__15460 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$needs_DASH_ctx,G__15460)){
if((sci.impl.utils.needs_ctx === op)){
return sci.impl.analyzer.return_needs_ctx_call(ctx,expr,f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),cljs.core.cst$kw$ns,cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$file,cljs.core.deref(sci.impl.vars.current_file),cljs.core.cst$kw$sci$impl_SLASH_f_DASH_meta,f_meta], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$resolve_DASH_sym,G__15460)){
return sci.impl.analyzer.return_binding_call(ctx,expr,f__$1,sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),cljs.core.cst$kw$ns,cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$file,cljs.core.deref(sci.impl.vars.current_file),cljs.core.cst$kw$sci$impl_SLASH_f_DASH_meta,f_meta], 0)));
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),cljs.core.cst$kw$ns,cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$file,cljs.core.deref(sci.impl.vars.current_file),cljs.core.cst$kw$sci$impl_SLASH_f_DASH_meta,f_meta], 0)));

}
}
} else {
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.analyzer.return_call(ctx,expr,f__$1,children,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),cljs.core.cst$kw$ns,cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$file,cljs.core.deref(sci.impl.vars.current_file),cljs.core.cst$kw$sci$impl_SLASH_f_DASH_meta,f_meta], 0)));
}
}
}
}catch (e15458){if((e15458 instanceof Error)){
var e = e15458;
return sci.impl.utils.rethrow_with_location_of_node.cljs$core$IFn$_invoke$arity$3(ctx,e,sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4(null,null,expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),cljs.core.cst$kw$ns,cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$file,cljs.core.deref(sci.impl.vars.current_file),cljs.core.cst$kw$sci$impl_SLASH_f_DASH_meta,f_meta], 0))));
} else {
throw e15458;

}
}
}
}
} else {
if((f instanceof cljs.core.Keyword)){
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
var ccount = cljs.core.count(children);
var G__15461 = ccount;
switch (G__15461) {
case (1):
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return f.cljs$core$IFn$_invoke$arity$1(sci.impl.evaluator.eval(ctx__$1,bindings,arg));
}),expr);

break;
case (2):
var arg0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(0));
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children,(1));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
return f.cljs$core$IFn$_invoke$arity$2(sci.impl.evaluator.eval(ctx__$1,bindings,arg0),sci.impl.evaluator.eval(ctx__$1,bindings,arg1));
}),expr);

break;
default:
return sci.impl.analyzer.throw_error_with_location(["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ccount),") passed to: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''),expr);

}
} else {
var f__$1 = (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.analyzer.analyze.call(null,ctx,f));
var children = sci.impl.analyzer.analyze_children(ctx,cljs.core.rest(expr));
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$4((function (ctx__$1,bindings){
var f__$2 = sci.impl.evaluator.eval(ctx__$1,bindings,f__$1);
if(cljs.core.ifn_QMARK_(f__$2)){
return sci.impl.evaluator.fn_call(ctx__$1,bindings,f__$2,children);
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$2], 0))," as a function."].join('')));
}
}),null,expr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.meta(expr),cljs.core.cst$kw$ns,cljs.core.deref(sci.impl.vars.current_ns),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$file,cljs.core.deref(sci.impl.vars.current_file)], 0)));

}
}
});
sci.impl.analyzer.constant_colls = true;
sci.impl.analyzer.return_map = (function sci$impl$analyzer$return_map(ctx,the_map){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,the_map);
var analyzed_children = sci.impl.analyzer.analyze_children(ctx,children);
if((cljs.core.count(analyzed_children) <= (16))){
return sci.impl.analyzer.return_call(ctx,the_map,cljs.core.array_map,analyzed_children,null);
} else {
return sci.impl.analyzer.return_call(ctx,the_map,cljs.core.hash_map,analyzed_children,null);
}
});
sci.impl.analyzer.analyze_map = (function sci$impl$analyzer$analyze_map(ctx,expr,m){
var ks = cljs.core.keys(expr);
var vs = cljs.core.vals(expr);
var constant_map_QMARK_ = ((true) && (cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,ks)) && (cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,vs)));
var analyzed_map = ((constant_map_QMARK_)?expr:((cljs.core.not(cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(ctx)))?sci.impl.analyzer.return_map(ctx,expr):cljs.core.zipmap(sci.impl.analyzer.analyze_children(ctx,ks),sci.impl.analyzer.analyze_children(ctx,vs))
));
var analyzed_meta = (cljs.core.truth_(m)?(function (){var G__15463 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.cst$kw$meta,true);
var G__15464 = m;
return (sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__15463,G__15464) : sci.impl.analyzer.analyze.call(null,G__15463,G__15464));
})():null);
var analyzed_meta__$1 = ((((constant_map_QMARK_) && ((m === analyzed_meta))))?analyzed_meta:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(analyzed_meta,cljs.core.cst$kw$sci$impl_SLASH_op,cljs.core.cst$kw$eval));
var ret = (cljs.core.truth_(analyzed_meta__$1)?(((analyzed_map instanceof sci.impl.types.EvalFn))?sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var md = sci.impl.evaluator.handle_meta(ctx__$1,bindings,analyzed_meta__$1);
var coll = sci.impl.evaluator.eval(ctx__$1,bindings,analyzed_map);
return cljs.core.with_meta(coll,md);
}),expr):cljs.core.with_meta(analyzed_map,analyzed_meta__$1)):analyzed_map);
return ret;
});
/**
 * Returns analyzed vector or set
 */
sci.impl.analyzer.analyze_vec_or_set = (function sci$impl$analyzer$analyze_vec_or_set(ctx,_f1,f2,expr,m){
var constant_coll_QMARK_ = ((true) && (cljs.core.every_QMARK_(sci.impl.utils.constant_QMARK_,expr)));
var analyzed_meta = (cljs.core.truth_(m)?(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.analyzer.analyze.call(null,ctx,m)):null);
var must_eval = (((!(constant_coll_QMARK_))) || ((!((m === analyzed_meta)))));
var analyzed_coll = (((!(must_eval)))?expr:(cljs.core.truth_(m)?(function (){var ef = sci.impl.analyzer.return_call(ctx,expr,f2,sci.impl.analyzer.analyze_children(ctx,expr),null);
return sci.impl.utils.ctx_fn.cljs$core$IFn$_invoke$arity$2((function (ctx__$1,bindings){
var md = sci.impl.evaluator.eval(ctx__$1,bindings,analyzed_meta);
var coll = sci.impl.evaluator.eval(ctx__$1,bindings,ef);
return cljs.core.with_meta(coll,md);
}),expr);
})():sci.impl.analyzer.return_call(ctx,expr,f2,sci.impl.analyzer.analyze_children(ctx,expr),null)));
return analyzed_coll;
});
sci.impl.analyzer.analyze = (function sci$impl$analyzer$analyze(var_args){
var G__15466 = arguments.length;
switch (G__15466) {
case 2:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (ctx,expr){
return sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(ctx,expr,false);
}));

(sci.impl.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (ctx,expr,top_level_QMARK_){
var m = cljs.core.meta(expr);
if(sci.impl.utils.constant_QMARK_(expr)){
return expr;
} else {
if((expr instanceof cljs.core.Symbol)){
var v = sci.impl.resolve.resolve_symbol.cljs$core$IFn$_invoke$arity$4(ctx,expr,false,cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(m));
var mv = cljs.core.meta(v);
if(sci.impl.utils.constant_QMARK_(v)){
return v;
} else {
if(sci.impl.vars.var_QMARK_(v)){
if(cljs.core.truth_(cljs.core.cst$kw$const.cljs$core$IFn$_invoke$arity$1(mv))){
return cljs.core.deref(v);
} else {
if(cljs.core.truth_(sci.impl.vars.isMacro(v))){
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
} else {
return sci.impl.types.__GT_EvalVar(v);
}
}
} else {
if((sci.impl.utils.needs_ctx === cljs.core.cst$kw$sci$impl_SLASH_op.cljs$core$IFn$_invoke$arity$1(mv))){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(v,ctx);
} else {
return v;

}
}
}
} else {
if(cljs.core.record_QMARK_(expr)){
return expr;
} else {
if(cljs.core.map_QMARK_(expr)){
return sci.impl.analyzer.analyze_map(ctx,expr,m);
} else {
if(cljs.core.vector_QMARK_(expr)){
return sci.impl.analyzer.analyze_vec_or_set(ctx,cljs.core.identity,cljs.core.vector,expr,m);
} else {
if(cljs.core.set_QMARK_(expr)){
return sci.impl.analyzer.analyze_vec_or_set(ctx,cljs.core.set,cljs.core.hash_set,expr,m);
} else {
if(cljs.core.seq_QMARK_(expr)){
if(cljs.core.seq(expr)){
return sci.impl.analyzer.analyze_call(ctx,expr,top_level_QMARK_);
} else {
return expr;
}
} else {
return expr;

}
}
}
}
}
}
}
}));

(sci.impl.analyzer.analyze.cljs$lang$maxFixedArity = 3);

