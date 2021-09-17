// Compiled by ClojureScript 1.10.758 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.fns');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sci.impl.evaluator');
goog.require('sci.impl.faster');
goog.require('sci.impl.macros');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');
sci.impl.fns.throw_arity = (function sci$impl$fns$throw_arity(ctx,nsm,fn_name,macro_QMARK_,args){
if(cljs.core.truth_(cljs.core.cst$kw$disable_DASH_arity_DASH_checks.cljs$core$IFn$_invoke$arity$1(ctx))){
return null;
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(cljs.core.count(args) - (2)):cljs.core.count(args));
return ["Wrong number of args (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count),") passed to: ",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nsm),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)].join('')].join('');
})()));
}
});

/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.fns.Recur = (function (val){
this.val = val;
});
(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.fns.Recur.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(sci.impl.fns.Recur.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val], null);
}));

(sci.impl.fns.Recur.cljs$lang$type = true);

(sci.impl.fns.Recur.cljs$lang$ctorStr = "sci.impl.fns/Recur");

(sci.impl.fns.Recur.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"sci.impl.fns/Recur");
}));

/**
 * Positional factory function for sci.impl.fns/Recur.
 */
sci.impl.fns.__GT_Recur = (function sci$impl$fns$__GT_Recur(val){
return (new sci.impl.fns.Recur(val));
});

var ret__4785__auto___11831 = (function (){
sci.impl.fns.gen_fn = (function sci$impl$fns$gen_fn(var_args){
var G__11830 = arguments.length;
switch (G__11830) {
case 3:
return sci.impl.fns.gen_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return sci.impl.fns.gen_fn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(sci.impl.fns.gen_fn.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$fns_SLASH_gen_DASH_fn,null,(1),null)),(new cljs.core.List(null,n,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,false,null,(1),null))], 0))));
}));

(sci.impl.fns.gen_fn.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,n,disable_arity_checks){
var locals = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,cljs.core.gensym);
var fn_params = cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,cljs.core.gensym));
var rnge = cljs.core.range.cljs$core$IFn$_invoke$arity$1(n);
var nths = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n__$1){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$faster_SLASH_nth_DASH_2,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$params,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n__$1,null,(1),null))], 0))));
}),rnge);
var let_vec = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (local,ith){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [local,ith], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locals,nths], 0)));
var assocs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (local,fn_param){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$faster_SLASH_assoc_DASH_3,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,local,null,(1),null)),(new cljs.core.List(null,fn_param,null,(1),null))], 0)))),null,(1),null))))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locals,fn_params], 0));
var recurs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n__$1){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$faster_SLASH_nth_DASH_2,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$recur_DASH_val,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n__$1,null,(1),null))], 0))));
}),rnge);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,let_vec,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["arity-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,fn_params,null,(1),null)),(cljs.core.truth_(disable_arity_checks)?null:cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,n,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$$_DASH_length,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$js_DASH_arguments,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$fns_SLASH_throw_DASH_arity,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$nsm,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$fn_DASH_name,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$macro_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_vals,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$js_DASH__GT_clj,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$js_DASH_arguments,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))))),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(assocs,(new cljs.core.List(null,cljs.core.cst$sym$ret__11827__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$evaluator_SLASH_eval,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ctx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$body,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$recur_QMARK___11828__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_instance_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$sci$impl$fns_SLASH_Recur,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$ret__11827__auto__,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$recur_QMARK___11828__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$recur_DASH_val,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$sci$impl$types_SLASH_getVal,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ret__11827__auto__,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$recur,null,(1),null)),recurs))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$ret__11827__auto__,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.fns.gen_fn.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(sci.impl.fns.gen_fn.cljs$lang$macro = true);

var ret__4785__auto___11833 = sci.impl.fns.gen_fn_varargs = (function sci$impl$fns$gen_fn_varargs(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(cljs.core.cst$sym$fn,cljs.core.cst$sym$varargs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_AMPERSAND_,cljs.core.cst$sym$args], null),cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$bindings,cljs.core.list(cljs.core.cst$sym$loop,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$args_STAR_,cljs.core.list(cljs.core.cst$sym$seq,cljs.core.cst$sym$args),cljs.core.cst$sym$params,cljs.core.list(cljs.core.cst$sym$seq,cljs.core.cst$sym$params),cljs.core.cst$sym$ret,cljs.core.cst$sym$bindings], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.cst$sym$params,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fp,cljs.core.list(cljs.core.cst$sym$first,cljs.core.cst$sym$params)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.cst$sym$_AMPERSAND_),cljs.core.cst$sym$fp),cljs.core.list(cljs.core.cst$sym$assoc,cljs.core.cst$sym$ret,cljs.core.list(cljs.core.cst$sym$second,cljs.core.cst$sym$params),cljs.core.cst$sym$args_STAR_),cljs.core.list(cljs.core.cst$sym$do,cljs.core.list(cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$args_STAR_,cljs.core.list(cljs.core.cst$sym$throw_DASH_arity,cljs.core.cst$sym$ctx,cljs.core.cst$sym$nsm,cljs.core.cst$sym$fn_DASH_name,cljs.core.cst$sym$macro_QMARK_,cljs.core.cst$sym$args)),cljs.core.list(cljs.core.cst$sym$recur,cljs.core.list(cljs.core.cst$sym$next,cljs.core.cst$sym$args_STAR_),cljs.core.list(cljs.core.cst$sym$next,cljs.core.cst$sym$params),cljs.core.list(cljs.core.cst$sym$assoc_DASH_3,cljs.core.cst$sym$ret,cljs.core.cst$sym$fp,cljs.core.list(cljs.core.cst$sym$first,cljs.core.cst$sym$args_STAR_)))))),cljs.core.list(cljs.core.cst$sym$do,cljs.core.list(cljs.core.cst$sym$when,cljs.core.cst$sym$args_STAR_,cljs.core.list(cljs.core.cst$sym$throw_DASH_arity,cljs.core.cst$sym$ctx,cljs.core.cst$sym$nsm,cljs.core.cst$sym$fn_DASH_name,cljs.core.cst$sym$macro_QMARK_,cljs.core.cst$sym$args)),cljs.core.cst$sym$ret))),cljs.core.cst$sym$ret,cljs.core.list(cljs.core.cst$sym$eval_SLASH_eval,cljs.core.cst$sym$ctx,cljs.core.cst$sym$bindings,cljs.core.cst$sym$body),cljs.core.cst$sym$recur_QMARK_,cljs.core.list(cljs.core.cst$sym$instance_QMARK_,cljs.core.cst$sym$Recur,cljs.core.cst$sym$ret)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.cst$sym$recur_QMARK_,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$recur_DASH_val,cljs.core.list(cljs.core.cst$sym$t_SLASH_getVal,cljs.core.cst$sym$ret),cljs.core.cst$sym$min_DASH_var_DASH_args_DASH_arity,cljs.core.list(cljs.core.cst$sym$when,cljs.core.cst$sym$var_DASH_arg_DASH_name,cljs.core.cst$sym$fixed_DASH_arity)], null),cljs.core.list(cljs.core.cst$sym$if,cljs.core.cst$sym$min_DASH_var_DASH_args_DASH_arity,cljs.core.list(cljs.core.cst$sym$let,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fixed_DASH_args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rest_DASH_args], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$subvec,cljs.core.cst$sym$recur_DASH_val,(0),cljs.core.cst$sym$min_DASH_var_DASH_args_DASH_arity),cljs.core.list(cljs.core.cst$sym$subvec,cljs.core.cst$sym$recur_DASH_val,cljs.core.cst$sym$min_DASH_var_DASH_args_DASH_arity)], null)], null),cljs.core.list(cljs.core.cst$sym$recur,cljs.core.list(cljs.core.cst$sym$into,cljs.core.cst$sym$fixed_DASH_args,cljs.core.cst$sym$rest_DASH_args))),cljs.core.list(cljs.core.cst$sym$recur,cljs.core.cst$sym$recur_DASH_val))),cljs.core.cst$sym$ret)));
});
(sci.impl.fns.gen_fn_varargs.cljs$lang$macro = true);

sci.impl.fns.fun = (function sci$impl$fns$fun(ctx,bindings,fn_body,fn_name,macro_QMARK_){
var bindings_fn = cljs.core.cst$kw$bindings_DASH_fn.cljs$core$IFn$_invoke$arity$1(fn_body);
var bindings__$1 = (bindings_fn.cljs$core$IFn$_invoke$arity$1 ? bindings_fn.cljs$core$IFn$_invoke$arity$1(bindings) : bindings_fn.call(null,bindings));
var fixed_arity = cljs.core.cst$kw$fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(fn_body);
var var_arg_name = cljs.core.cst$kw$var_DASH_arg_DASH_name.cljs$core$IFn$_invoke$arity$1(fn_body);
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(fn_body);
var body = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(fn_body);
var nsm = sci.impl.vars.current_ns_name();
var disable_arity_checks_QMARK_ = ctx.get(cljs.core.cst$kw$disable_DASH_arity_DASH_checks);
var f = ((cljs.core.not(var_arg_name))?(function (){var G__11834 = (fixed_arity | (0));
switch (G__11834) {
case (0):
return (function sci$impl$fns$fun_$_arity_0(){
while(true){
var ret = sci.impl.evaluator.eval(ctx,bindings__$1,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
continue;
} else {
return ret;
}
break;
}
});

break;
case (1):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__11836 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__11835){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__11836,G__11835);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12692 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
G__11835 = G__12692;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
} else {
var G__11838 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
return (function sci$impl$fns$fun_$_arity_1(G__11837){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__11838,G__11837);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12693 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
G__11837 = G__12693;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
}

break;
case (2):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__11841 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__11842 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__11839,G__11840){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__11841,G__11839);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__11842,G__11840);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$3,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12694 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12695 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
G__11839 = G__12694;
G__11840 = G__12695;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
} else {
var G__11845 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__11846 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
return (function sci$impl$fns$fun_$_arity_2(G__11843,G__11844){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__11845,G__11843);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__11846,G__11844);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$3,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12696 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12697 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
G__11843 = G__12696;
G__11844 = G__12697;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
}

break;
case (3):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__11850 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__11851 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__11852 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__11847,G__11848,G__11849){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__11850,G__11847);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__11851,G__11848);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__11852,G__11849);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$4,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12698 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12699 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12700 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
G__11847 = G__12698;
G__11848 = G__12699;
G__11849 = G__12700;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
} else {
var G__11856 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__11857 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__11858 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
return (function sci$impl$fns$fun_$_arity_3(G__11853,G__11854,G__11855){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__11856,G__11853);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__11857,G__11854);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__11858,G__11855);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$4,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12701 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12702 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12703 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
G__11853 = G__12701;
G__11854 = G__12702;
G__11855 = G__12703;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
}

break;
case (4):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__11863 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__11864 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__11865 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__11866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__11859,G__11860,G__11861,G__11862){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__11863,G__11859);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__11864,G__11860);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__11865,G__11861);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__11866,G__11862);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$5,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12704 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12705 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12706 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12707 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
G__11859 = G__12704;
G__11860 = G__12705;
G__11861 = G__12706;
G__11862 = G__12707;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
} else {
var G__11871 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__11872 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__11873 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__11874 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
return (function sci$impl$fns$fun_$_arity_4(G__11867,G__11868,G__11869,G__11870){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__11871,G__11867);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__11872,G__11868);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__11873,G__11869);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__11874,G__11870);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$5,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12708 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12709 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12710 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12711 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
G__11867 = G__12708;
G__11868 = G__12709;
G__11869 = G__12710;
G__11870 = G__12711;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
}

break;
case (5):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__11880 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__11881 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__11882 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__11883 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__11884 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__11875,G__11876,G__11877,G__11878,G__11879){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__11880,G__11875);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__11881,G__11876);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__11882,G__11877);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__11883,G__11878);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__11884,G__11879);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$6,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12712 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12713 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12714 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12715 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12716 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
G__11875 = G__12712;
G__11876 = G__12713;
G__11877 = G__12714;
G__11878 = G__12715;
G__11879 = G__12716;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
} else {
var G__11890 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__11891 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__11892 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__11893 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__11894 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
return (function sci$impl$fns$fun_$_arity_5(G__11885,G__11886,G__11887,G__11888,G__11889){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__11890,G__11885);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__11891,G__11886);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__11892,G__11887);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__11893,G__11888);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__11894,G__11889);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$6,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12717 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12718 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12719 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12720 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12721 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
G__11885 = G__12717;
G__11886 = G__12718;
G__11887 = G__12719;
G__11888 = G__12720;
G__11889 = G__12721;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
}

break;
case (6):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__11901 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__11902 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__11903 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__11904 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__11905 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__11906 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__11895,G__11896,G__11897,G__11898,G__11899,G__11900){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__11901,G__11895);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__11902,G__11896);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__11903,G__11897);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__11904,G__11898);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__11905,G__11899);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__11906,G__11900);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$7,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12722 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12723 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12724 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12725 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12726 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12727 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
G__11895 = G__12722;
G__11896 = G__12723;
G__11897 = G__12724;
G__11898 = G__12725;
G__11899 = G__12726;
G__11900 = G__12727;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
} else {
var G__11913 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__11914 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__11915 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__11916 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__11917 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__11918 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
return (function sci$impl$fns$fun_$_arity_6(G__11907,G__11908,G__11909,G__11910,G__11911,G__11912){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__11913,G__11907);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__11914,G__11908);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__11915,G__11909);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__11916,G__11910);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__11917,G__11911);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__11918,G__11912);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$7,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12728 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12729 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12730 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12731 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12732 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12733 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
G__11907 = G__12728;
G__11908 = G__12729;
G__11909 = G__12730;
G__11910 = G__12731;
G__11911 = G__12732;
G__11912 = G__12733;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
}

break;
case (7):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__11926 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__11927 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__11928 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__11929 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__11930 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__11931 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__11932 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__11919,G__11920,G__11921,G__11922,G__11923,G__11924,G__11925){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__11926,G__11919);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__11927,G__11920);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__11928,G__11921);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__11929,G__11922);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__11930,G__11923);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__11931,G__11924);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__11932,G__11925);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$8,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12734 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12735 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12736 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12737 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12738 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12739 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__12740 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
G__11919 = G__12734;
G__11920 = G__12735;
G__11921 = G__12736;
G__11922 = G__12737;
G__11923 = G__12738;
G__11924 = G__12739;
G__11925 = G__12740;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
} else {
var G__11940 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__11941 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__11942 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__11943 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__11944 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__11945 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__11946 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
return (function sci$impl$fns$fun_$_arity_7(G__11933,G__11934,G__11935,G__11936,G__11937,G__11938,G__11939){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((7),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__11940,G__11933);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__11941,G__11934);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__11942,G__11935);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__11943,G__11936);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__11944,G__11937);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__11945,G__11938);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__11946,G__11939);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$8,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12741 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12742 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12743 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12744 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12745 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12746 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__12747 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
G__11933 = G__12741;
G__11934 = G__12742;
G__11935 = G__12743;
G__11936 = G__12744;
G__11937 = G__12745;
G__11938 = G__12746;
G__11939 = G__12747;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
}

break;
case (8):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__11955 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__11956 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__11957 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__11958 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__11959 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__11960 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__11961 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__11962 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__11947,G__11948,G__11949,G__11950,G__11951,G__11952,G__11953,G__11954){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__11955,G__11947);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__11956,G__11948);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__11957,G__11949);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__11958,G__11950);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__11959,G__11951);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__11960,G__11952);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__11961,G__11953);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__11962,G__11954);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$9,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12748 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12749 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12750 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12751 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12752 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12753 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__12754 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__12755 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
G__11947 = G__12748;
G__11948 = G__12749;
G__11949 = G__12750;
G__11950 = G__12751;
G__11951 = G__12752;
G__11952 = G__12753;
G__11953 = G__12754;
G__11954 = G__12755;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
} else {
var G__11971 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__11972 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__11973 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__11974 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__11975 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__11976 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__11977 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__11978 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
return (function sci$impl$fns$fun_$_arity_8(G__11963,G__11964,G__11965,G__11966,G__11967,G__11968,G__11969,G__11970){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((8),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__11971,G__11963);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__11972,G__11964);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__11973,G__11965);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__11974,G__11966);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__11975,G__11967);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__11976,G__11968);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__11977,G__11969);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__11978,G__11970);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$9,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12756 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12757 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12758 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12759 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12760 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12761 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__12762 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__12763 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
G__11963 = G__12756;
G__11964 = G__12757;
G__11965 = G__12758;
G__11966 = G__12759;
G__11967 = G__12760;
G__11968 = G__12761;
G__11969 = G__12762;
G__11970 = G__12763;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
}

break;
case (9):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__11988 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__11989 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__11990 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__11991 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__11992 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__11993 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__11994 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__11995 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__11996 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__11979,G__11980,G__11981,G__11982,G__11983,G__11984,G__11985,G__11986,G__11987){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__11988,G__11979);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__11989,G__11980);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__11990,G__11981);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__11991,G__11982);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__11992,G__11983);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__11993,G__11984);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__11994,G__11985);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__11995,G__11986);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__11996,G__11987);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$10,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12764 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12765 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12766 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12767 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12768 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12769 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__12770 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__12771 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__12772 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
G__11979 = G__12764;
G__11980 = G__12765;
G__11981 = G__12766;
G__11982 = G__12767;
G__11983 = G__12768;
G__11984 = G__12769;
G__11985 = G__12770;
G__11986 = G__12771;
G__11987 = G__12772;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
} else {
var G__12006 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__12007 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__12008 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__12009 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__12010 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__12011 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__12012 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__12013 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__12014 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
return (function sci$impl$fns$fun_$_arity_9(G__11997,G__11998,G__11999,G__12000,G__12001,G__12002,G__12003,G__12004,G__12005){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__12006,G__11997);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__12007,G__11998);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__12008,G__11999);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__12009,G__12000);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__12010,G__12001);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__12011,G__12002);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__12012,G__12003);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__12013,G__12004);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__12014,G__12005);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$10,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12773 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12774 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12775 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12776 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12777 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12778 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__12779 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__12780 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__12781 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
G__11997 = G__12773;
G__11998 = G__12774;
G__11999 = G__12775;
G__12000 = G__12776;
G__12001 = G__12777;
G__12002 = G__12778;
G__12003 = G__12779;
G__12004 = G__12780;
G__12005 = G__12781;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
}

break;
case (10):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__12025 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__12026 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__12027 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__12028 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__12029 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__12030 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__12031 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__12032 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__12033 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__12034 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__12015,G__12016,G__12017,G__12018,G__12019,G__12020,G__12021,G__12022,G__12023,G__12024){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__12025,G__12015);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__12026,G__12016);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__12027,G__12017);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__12028,G__12018);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__12029,G__12019);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__12030,G__12020);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__12031,G__12021);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__12032,G__12022);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__12033,G__12023);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__12034,G__12024);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$11,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12782 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12783 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12784 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12785 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12786 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12787 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__12788 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__12789 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__12790 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__12791 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
G__12015 = G__12782;
G__12016 = G__12783;
G__12017 = G__12784;
G__12018 = G__12785;
G__12019 = G__12786;
G__12020 = G__12787;
G__12021 = G__12788;
G__12022 = G__12789;
G__12023 = G__12790;
G__12024 = G__12791;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
} else {
var G__12045 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__12046 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__12047 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__12048 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__12049 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__12050 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__12051 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__12052 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__12053 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__12054 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
return (function sci$impl$fns$fun_$_arity_10(G__12035,G__12036,G__12037,G__12038,G__12039,G__12040,G__12041,G__12042,G__12043,G__12044){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((10),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__12045,G__12035);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__12046,G__12036);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__12047,G__12037);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__12048,G__12038);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__12049,G__12039);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__12050,G__12040);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__12051,G__12041);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__12052,G__12042);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__12053,G__12043);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__12054,G__12044);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$11,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12792 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12793 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12794 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12795 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12796 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12797 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__12798 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__12799 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__12800 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__12801 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
G__12035 = G__12792;
G__12036 = G__12793;
G__12037 = G__12794;
G__12038 = G__12795;
G__12039 = G__12796;
G__12040 = G__12797;
G__12041 = G__12798;
G__12042 = G__12799;
G__12043 = G__12800;
G__12044 = G__12801;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
}

break;
case (11):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__12066 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__12067 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__12068 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__12069 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__12070 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__12071 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__12072 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__12073 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__12074 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__12075 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__12076 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__12055,G__12056,G__12057,G__12058,G__12059,G__12060,G__12061,G__12062,G__12063,G__12064,G__12065){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__12066,G__12055);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__12067,G__12056);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__12068,G__12057);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__12069,G__12058);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__12070,G__12059);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__12071,G__12060);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__12072,G__12061);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__12073,G__12062);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__12074,G__12063);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__12075,G__12064);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__12076,G__12065);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$12,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12802 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12803 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12804 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12805 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12806 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12807 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__12808 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__12809 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__12810 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__12811 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__12812 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
G__12055 = G__12802;
G__12056 = G__12803;
G__12057 = G__12804;
G__12058 = G__12805;
G__12059 = G__12806;
G__12060 = G__12807;
G__12061 = G__12808;
G__12062 = G__12809;
G__12063 = G__12810;
G__12064 = G__12811;
G__12065 = G__12812;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
} else {
var G__12088 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__12089 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__12090 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__12091 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__12092 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__12093 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__12094 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__12095 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__12096 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__12097 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__12098 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
return (function sci$impl$fns$fun_$_arity_11(G__12077,G__12078,G__12079,G__12080,G__12081,G__12082,G__12083,G__12084,G__12085,G__12086,G__12087){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((11),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__12088,G__12077);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__12089,G__12078);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__12090,G__12079);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__12091,G__12080);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__12092,G__12081);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__12093,G__12082);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__12094,G__12083);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__12095,G__12084);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__12096,G__12085);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__12097,G__12086);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__12098,G__12087);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$12,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12813 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12814 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12815 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12816 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12817 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12818 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__12819 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__12820 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__12821 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__12822 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__12823 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
G__12077 = G__12813;
G__12078 = G__12814;
G__12079 = G__12815;
G__12080 = G__12816;
G__12081 = G__12817;
G__12082 = G__12818;
G__12083 = G__12819;
G__12084 = G__12820;
G__12085 = G__12821;
G__12086 = G__12822;
G__12087 = G__12823;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
}

break;
case (12):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__12111 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__12112 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__12113 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__12114 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__12115 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__12116 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__12117 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__12118 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__12119 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__12120 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__12121 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__12122 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__12099,G__12100,G__12101,G__12102,G__12103,G__12104,G__12105,G__12106,G__12107,G__12108,G__12109,G__12110){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__12111,G__12099);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__12112,G__12100);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__12113,G__12101);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__12114,G__12102);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__12115,G__12103);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__12116,G__12104);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__12117,G__12105);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__12118,G__12106);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__12119,G__12107);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__12120,G__12108);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__12121,G__12109);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__12122,G__12110);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$13,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12824 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12825 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12826 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12827 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12828 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12829 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__12830 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__12831 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__12832 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__12833 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__12834 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__12835 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
G__12099 = G__12824;
G__12100 = G__12825;
G__12101 = G__12826;
G__12102 = G__12827;
G__12103 = G__12828;
G__12104 = G__12829;
G__12105 = G__12830;
G__12106 = G__12831;
G__12107 = G__12832;
G__12108 = G__12833;
G__12109 = G__12834;
G__12110 = G__12835;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
} else {
var G__12135 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__12136 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__12137 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__12138 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__12139 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__12140 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__12141 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__12142 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__12143 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__12144 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__12145 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__12146 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
return (function sci$impl$fns$fun_$_arity_12(G__12123,G__12124,G__12125,G__12126,G__12127,G__12128,G__12129,G__12130,G__12131,G__12132,G__12133,G__12134){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((12),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__12135,G__12123);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__12136,G__12124);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__12137,G__12125);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__12138,G__12126);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__12139,G__12127);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__12140,G__12128);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__12141,G__12129);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__12142,G__12130);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__12143,G__12131);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__12144,G__12132);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__12145,G__12133);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__12146,G__12134);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$13,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12836 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12837 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12838 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12839 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12840 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12841 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__12842 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__12843 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__12844 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__12845 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__12846 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__12847 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
G__12123 = G__12836;
G__12124 = G__12837;
G__12125 = G__12838;
G__12126 = G__12839;
G__12127 = G__12840;
G__12128 = G__12841;
G__12129 = G__12842;
G__12130 = G__12843;
G__12131 = G__12844;
G__12132 = G__12845;
G__12133 = G__12846;
G__12134 = G__12847;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
}

break;
case (13):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__12160 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__12161 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__12162 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__12163 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__12164 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__12165 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__12166 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__12167 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__12168 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__12169 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__12170 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__12171 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__12172 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__12147,G__12148,G__12149,G__12150,G__12151,G__12152,G__12153,G__12154,G__12155,G__12156,G__12157,G__12158,G__12159){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__12160,G__12147);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__12161,G__12148);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__12162,G__12149);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__12163,G__12150);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__12164,G__12151);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__12165,G__12152);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__12166,G__12153);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__12167,G__12154);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__12168,G__12155);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__12169,G__12156);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__12170,G__12157);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__12171,G__12158);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__12172,G__12159);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$14,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12848 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12849 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12850 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12851 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12852 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12853 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__12854 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__12855 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__12856 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__12857 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__12858 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__12859 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__12860 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
G__12147 = G__12848;
G__12148 = G__12849;
G__12149 = G__12850;
G__12150 = G__12851;
G__12151 = G__12852;
G__12152 = G__12853;
G__12153 = G__12854;
G__12154 = G__12855;
G__12155 = G__12856;
G__12156 = G__12857;
G__12157 = G__12858;
G__12158 = G__12859;
G__12159 = G__12860;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
} else {
var G__12186 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__12187 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__12188 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__12189 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__12190 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__12191 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__12192 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__12193 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__12194 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__12195 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__12196 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__12197 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__12198 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
return (function sci$impl$fns$fun_$_arity_13(G__12173,G__12174,G__12175,G__12176,G__12177,G__12178,G__12179,G__12180,G__12181,G__12182,G__12183,G__12184,G__12185){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__12186,G__12173);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__12187,G__12174);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__12188,G__12175);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__12189,G__12176);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__12190,G__12177);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__12191,G__12178);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__12192,G__12179);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__12193,G__12180);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__12194,G__12181);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__12195,G__12182);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__12196,G__12183);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__12197,G__12184);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__12198,G__12185);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$14,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12861 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12862 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12863 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12864 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12865 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__12867 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__12868 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__12869 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__12870 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__12871 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__12872 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__12873 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
G__12173 = G__12861;
G__12174 = G__12862;
G__12175 = G__12863;
G__12176 = G__12864;
G__12177 = G__12865;
G__12178 = G__12866;
G__12179 = G__12867;
G__12180 = G__12868;
G__12181 = G__12869;
G__12182 = G__12870;
G__12183 = G__12871;
G__12184 = G__12872;
G__12185 = G__12873;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
}

break;
case (14):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__12214 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__12215 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__12216 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__12217 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__12218 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__12219 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__12220 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__12221 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__12222 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__12223 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__12224 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__12225 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__12226 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__12227 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__12228 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__12199,G__12200,G__12201,G__12202,G__12203,G__12204,G__12205,G__12206,G__12207,G__12208,G__12209,G__12210,G__12211,G__12212,G__12213){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__12214,G__12199);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__12215,G__12200);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__12216,G__12201);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__12217,G__12202);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__12218,G__12203);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__12219,G__12204);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__12220,G__12205);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__12221,G__12206);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__12222,G__12207);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__12223,G__12208);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__12224,G__12209);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__12225,G__12210);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__12226,G__12211);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__12227,G__12212);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__12228,G__12213);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12874 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12875 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12876 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12877 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12878 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12879 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__12880 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__12881 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__12882 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__12883 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__12884 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__12885 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__12886 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__12887 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__12888 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
G__12199 = G__12874;
G__12200 = G__12875;
G__12201 = G__12876;
G__12202 = G__12877;
G__12203 = G__12878;
G__12204 = G__12879;
G__12205 = G__12880;
G__12206 = G__12881;
G__12207 = G__12882;
G__12208 = G__12883;
G__12209 = G__12884;
G__12210 = G__12885;
G__12211 = G__12886;
G__12212 = G__12887;
G__12213 = G__12888;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
} else {
var G__12244 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__12245 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__12246 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__12247 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__12248 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__12249 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__12250 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__12251 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__12252 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__12253 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__12254 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__12255 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__12256 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__12257 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__12258 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__12229,G__12230,G__12231,G__12232,G__12233,G__12234,G__12235,G__12236,G__12237,G__12238,G__12239,G__12240,G__12241,G__12242,G__12243){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__12244,G__12229);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__12245,G__12230);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__12246,G__12231);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__12247,G__12232);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__12248,G__12233);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__12249,G__12234);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__12250,G__12235);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__12251,G__12236);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__12252,G__12237);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__12253,G__12238);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__12254,G__12239);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__12255,G__12240);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__12256,G__12241);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__12257,G__12242);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__12258,G__12243);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12889 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12890 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12891 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12892 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12893 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12894 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__12895 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__12896 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__12897 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__12898 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__12899 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__12900 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__12901 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__12902 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__12903 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
G__12229 = G__12889;
G__12230 = G__12890;
G__12231 = G__12891;
G__12232 = G__12892;
G__12233 = G__12893;
G__12234 = G__12894;
G__12235 = G__12895;
G__12236 = G__12896;
G__12237 = G__12897;
G__12238 = G__12898;
G__12239 = G__12899;
G__12240 = G__12900;
G__12241 = G__12901;
G__12242 = G__12902;
G__12243 = G__12903;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
}

break;
case (15):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__12274 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__12275 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__12276 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__12277 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__12278 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__12279 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__12280 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__12281 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__12282 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__12283 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__12284 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__12285 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__12286 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__12287 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__12288 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__12259,G__12260,G__12261,G__12262,G__12263,G__12264,G__12265,G__12266,G__12267,G__12268,G__12269,G__12270,G__12271,G__12272,G__12273){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__12274,G__12259);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__12275,G__12260);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__12276,G__12261);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__12277,G__12262);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__12278,G__12263);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__12279,G__12264);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__12280,G__12265);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__12281,G__12266);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__12282,G__12267);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__12283,G__12268);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__12284,G__12269);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__12285,G__12270);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__12286,G__12271);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__12287,G__12272);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__12288,G__12273);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12904 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12905 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12906 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12907 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12908 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12909 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__12910 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__12911 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__12912 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__12913 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__12914 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__12915 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__12916 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__12917 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__12918 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
G__12259 = G__12904;
G__12260 = G__12905;
G__12261 = G__12906;
G__12262 = G__12907;
G__12263 = G__12908;
G__12264 = G__12909;
G__12265 = G__12910;
G__12266 = G__12911;
G__12267 = G__12912;
G__12268 = G__12913;
G__12269 = G__12914;
G__12270 = G__12915;
G__12271 = G__12916;
G__12272 = G__12917;
G__12273 = G__12918;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
} else {
var G__12304 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__12305 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__12306 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__12307 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__12308 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__12309 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__12310 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__12311 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__12312 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__12313 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__12314 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__12315 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__12316 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__12317 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__12318 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
return (function sci$impl$fns$fun_$_arity_15(G__12289,G__12290,G__12291,G__12292,G__12293,G__12294,G__12295,G__12296,G__12297,G__12298,G__12299,G__12300,G__12301,G__12302,G__12303){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((15),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__12304,G__12289);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__12305,G__12290);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__12306,G__12291);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__12307,G__12292);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__12308,G__12293);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__12309,G__12294);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__12310,G__12295);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__12311,G__12296);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__12312,G__12297);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__12313,G__12298);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__12314,G__12299);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__12315,G__12300);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__12316,G__12301);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__12317,G__12302);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__12318,G__12303);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$16,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12919 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12920 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12921 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12922 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12923 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12924 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__12925 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__12926 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__12927 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__12928 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__12929 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__12930 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__12931 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__12932 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__12933 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
G__12289 = G__12919;
G__12290 = G__12920;
G__12291 = G__12921;
G__12292 = G__12922;
G__12293 = G__12923;
G__12294 = G__12924;
G__12295 = G__12925;
G__12296 = G__12926;
G__12297 = G__12927;
G__12298 = G__12928;
G__12299 = G__12929;
G__12300 = G__12930;
G__12301 = G__12931;
G__12302 = G__12932;
G__12303 = G__12933;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
}

break;
case (16):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__12335 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__12336 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__12337 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__12338 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__12339 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__12340 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__12341 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__12342 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__12343 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__12344 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__12345 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__12346 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__12347 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__12348 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__12349 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__12350 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__12319,G__12320,G__12321,G__12322,G__12323,G__12324,G__12325,G__12326,G__12327,G__12328,G__12329,G__12330,G__12331,G__12332,G__12333,G__12334){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__12335,G__12319);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__12336,G__12320);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__12337,G__12321);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__12338,G__12322);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__12339,G__12323);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__12340,G__12324);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__12341,G__12325);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__12342,G__12326);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__12343,G__12327);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__12344,G__12328);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__12345,G__12329);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__12346,G__12330);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__12347,G__12331);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__12348,G__12332);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__12349,G__12333);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__12350,G__12334);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$17,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12934 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12935 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12936 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12937 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12938 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12939 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__12940 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__12941 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__12942 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__12943 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__12944 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__12945 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__12946 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__12947 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__12948 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__12949 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
G__12319 = G__12934;
G__12320 = G__12935;
G__12321 = G__12936;
G__12322 = G__12937;
G__12323 = G__12938;
G__12324 = G__12939;
G__12325 = G__12940;
G__12326 = G__12941;
G__12327 = G__12942;
G__12328 = G__12943;
G__12329 = G__12944;
G__12330 = G__12945;
G__12331 = G__12946;
G__12332 = G__12947;
G__12333 = G__12948;
G__12334 = G__12949;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
} else {
var G__12367 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__12368 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__12369 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__12370 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__12371 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__12372 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__12373 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__12374 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__12375 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__12376 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__12377 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__12378 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__12379 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__12380 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__12381 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__12382 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
return (function sci$impl$fns$fun_$_arity_16(G__12351,G__12352,G__12353,G__12354,G__12355,G__12356,G__12357,G__12358,G__12359,G__12360,G__12361,G__12362,G__12363,G__12364,G__12365,G__12366){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((16),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__12367,G__12351);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__12368,G__12352);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__12369,G__12353);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__12370,G__12354);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__12371,G__12355);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__12372,G__12356);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__12373,G__12357);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__12374,G__12358);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__12375,G__12359);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__12376,G__12360);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__12377,G__12361);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__12378,G__12362);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__12379,G__12363);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__12380,G__12364);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__12381,G__12365);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__12382,G__12366);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$17,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12950 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12951 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12952 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12953 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12954 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12955 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__12956 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__12957 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__12958 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__12959 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__12960 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__12961 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__12962 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__12963 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__12964 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__12965 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
G__12351 = G__12950;
G__12352 = G__12951;
G__12353 = G__12952;
G__12354 = G__12953;
G__12355 = G__12954;
G__12356 = G__12955;
G__12357 = G__12956;
G__12358 = G__12957;
G__12359 = G__12958;
G__12360 = G__12959;
G__12361 = G__12960;
G__12362 = G__12961;
G__12363 = G__12962;
G__12364 = G__12963;
G__12365 = G__12964;
G__12366 = G__12965;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
}

break;
case (17):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__12400 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__12401 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__12402 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__12403 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__12404 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__12405 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__12406 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__12407 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__12408 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__12409 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__12410 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__12411 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__12412 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__12413 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__12414 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__12415 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__12416 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__12383,G__12384,G__12385,G__12386,G__12387,G__12388,G__12389,G__12390,G__12391,G__12392,G__12393,G__12394,G__12395,G__12396,G__12397,G__12398,G__12399){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__12400,G__12383);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__12401,G__12384);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__12402,G__12385);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__12403,G__12386);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__12404,G__12387);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__12405,G__12388);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__12406,G__12389);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__12407,G__12390);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__12408,G__12391);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__12409,G__12392);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__12410,G__12393);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__12411,G__12394);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__12412,G__12395);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__12413,G__12396);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__12414,G__12397);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__12415,G__12398);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__12416,G__12399);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$18,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12966 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12967 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12968 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12969 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12970 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12971 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__12972 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__12973 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__12974 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__12975 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__12976 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__12977 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__12978 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__12979 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__12980 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__12981 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__12982 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
G__12383 = G__12966;
G__12384 = G__12967;
G__12385 = G__12968;
G__12386 = G__12969;
G__12387 = G__12970;
G__12388 = G__12971;
G__12389 = G__12972;
G__12390 = G__12973;
G__12391 = G__12974;
G__12392 = G__12975;
G__12393 = G__12976;
G__12394 = G__12977;
G__12395 = G__12978;
G__12396 = G__12979;
G__12397 = G__12980;
G__12398 = G__12981;
G__12399 = G__12982;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
} else {
var G__12434 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__12435 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__12436 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__12437 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__12438 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__12439 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__12440 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__12441 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__12442 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__12443 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__12444 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__12445 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__12446 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__12447 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__12448 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__12449 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__12450 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
return (function sci$impl$fns$fun_$_arity_17(G__12417,G__12418,G__12419,G__12420,G__12421,G__12422,G__12423,G__12424,G__12425,G__12426,G__12427,G__12428,G__12429,G__12430,G__12431,G__12432,G__12433){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((17),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__12434,G__12417);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__12435,G__12418);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__12436,G__12419);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__12437,G__12420);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__12438,G__12421);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__12439,G__12422);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__12440,G__12423);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__12441,G__12424);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__12442,G__12425);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__12443,G__12426);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__12444,G__12427);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__12445,G__12428);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__12446,G__12429);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__12447,G__12430);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__12448,G__12431);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__12449,G__12432);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__12450,G__12433);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$18,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__12983 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__12984 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__12985 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__12986 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__12987 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__12988 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__12989 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__12990 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__12991 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__12992 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__12993 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__12994 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__12995 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__12996 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__12997 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__12998 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__12999 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
G__12417 = G__12983;
G__12418 = G__12984;
G__12419 = G__12985;
G__12420 = G__12986;
G__12421 = G__12987;
G__12422 = G__12988;
G__12423 = G__12989;
G__12424 = G__12990;
G__12425 = G__12991;
G__12426 = G__12992;
G__12427 = G__12993;
G__12428 = G__12994;
G__12429 = G__12995;
G__12430 = G__12996;
G__12431 = G__12997;
G__12432 = G__12998;
G__12433 = G__12999;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
}

break;
case (18):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__12469 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__12470 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__12471 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__12472 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__12473 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__12474 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__12475 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__12476 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__12477 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__12478 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__12479 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__12480 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__12481 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__12482 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__12483 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__12484 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__12485 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var G__12486 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__12451,G__12452,G__12453,G__12454,G__12455,G__12456,G__12457,G__12458,G__12459,G__12460,G__12461,G__12462,G__12463,G__12464,G__12465,G__12466,G__12467,G__12468){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__12469,G__12451);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__12470,G__12452);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__12471,G__12453);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__12472,G__12454);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__12473,G__12455);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__12474,G__12456);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__12475,G__12457);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__12476,G__12458);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__12477,G__12459);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__12478,G__12460);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__12479,G__12461);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__12480,G__12462);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__12481,G__12463);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__12482,G__12464);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__12483,G__12465);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__12484,G__12466);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__12485,G__12467);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__12486,G__12468);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$19,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__13000 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__13001 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__13002 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__13003 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__13004 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__13005 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__13006 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__13007 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__13008 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__13009 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__13010 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__13011 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__13012 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__13013 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__13014 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__13015 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__13016 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
var G__13017 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(17));
G__12451 = G__13000;
G__12452 = G__13001;
G__12453 = G__13002;
G__12454 = G__13003;
G__12455 = G__13004;
G__12456 = G__13005;
G__12457 = G__13006;
G__12458 = G__13007;
G__12459 = G__13008;
G__12460 = G__13009;
G__12461 = G__13010;
G__12462 = G__13011;
G__12463 = G__13012;
G__12464 = G__13013;
G__12465 = G__13014;
G__12466 = G__13015;
G__12467 = G__13016;
G__12468 = G__13017;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
} else {
var G__12505 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__12506 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__12507 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__12508 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__12509 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__12510 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__12511 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__12512 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__12513 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__12514 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__12515 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__12516 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__12517 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__12518 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__12519 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__12520 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__12521 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var G__12522 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(17));
return (function sci$impl$fns$fun_$_arity_18(G__12487,G__12488,G__12489,G__12490,G__12491,G__12492,G__12493,G__12494,G__12495,G__12496,G__12497,G__12498,G__12499,G__12500,G__12501,G__12502,G__12503,G__12504){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((18),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__12505,G__12487);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__12506,G__12488);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__12507,G__12489);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__12508,G__12490);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__12509,G__12491);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__12510,G__12492);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__12511,G__12493);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__12512,G__12494);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__12513,G__12495);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__12514,G__12496);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__12515,G__12497);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__12516,G__12498);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__12517,G__12499);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__12518,G__12500);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__12519,G__12501);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__12520,G__12502);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__12521,G__12503);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__12522,G__12504);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$19,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__13018 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__13019 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__13020 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__13021 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__13022 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__13023 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__13024 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__13025 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__13026 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__13027 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__13028 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__13029 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__13030 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__13031 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__13032 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__13033 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__13034 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
var G__13035 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(17));
G__12487 = G__13018;
G__12488 = G__13019;
G__12489 = G__13020;
G__12490 = G__13021;
G__12491 = G__13022;
G__12492 = G__13023;
G__12493 = G__13024;
G__12494 = G__13025;
G__12495 = G__13026;
G__12496 = G__13027;
G__12497 = G__13028;
G__12498 = G__13029;
G__12499 = G__13030;
G__12500 = G__13031;
G__12501 = G__13032;
G__12502 = G__13033;
G__12503 = G__13034;
G__12504 = G__13035;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
}

break;
case (19):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__12542 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__12543 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__12544 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__12545 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__12546 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__12547 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__12548 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__12549 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__12550 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__12551 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__12552 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__12553 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__12554 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__12555 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__12556 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__12557 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__12558 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var G__12559 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(17));
var G__12560 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__12523,G__12524,G__12525,G__12526,G__12527,G__12528,G__12529,G__12530,G__12531,G__12532,G__12533,G__12534,G__12535,G__12536,G__12537,G__12538,G__12539,G__12540,G__12541){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__12542,G__12523);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__12543,G__12524);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__12544,G__12525);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__12545,G__12526);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__12546,G__12527);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__12547,G__12528);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__12548,G__12529);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__12549,G__12530);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__12550,G__12531);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__12551,G__12532);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__12552,G__12533);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__12553,G__12534);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__12554,G__12535);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__12555,G__12536);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__12556,G__12537);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__12557,G__12538);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__12558,G__12539);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__12559,G__12540);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__12560,G__12541);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$20,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__13036 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__13037 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__13038 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__13039 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__13040 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__13041 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__13042 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__13043 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__13044 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__13045 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__13046 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__13047 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__13048 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__13049 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__13050 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__13051 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__13052 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
var G__13053 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(17));
var G__13054 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(18));
G__12523 = G__13036;
G__12524 = G__13037;
G__12525 = G__13038;
G__12526 = G__13039;
G__12527 = G__13040;
G__12528 = G__13041;
G__12529 = G__13042;
G__12530 = G__13043;
G__12531 = G__13044;
G__12532 = G__13045;
G__12533 = G__13046;
G__12534 = G__13047;
G__12535 = G__13048;
G__12536 = G__13049;
G__12537 = G__13050;
G__12538 = G__13051;
G__12539 = G__13052;
G__12540 = G__13053;
G__12541 = G__13054;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
} else {
var G__12580 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__12581 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__12582 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__12583 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__12584 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__12585 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__12586 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__12587 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__12588 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__12589 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__12590 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__12591 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__12592 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__12593 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__12594 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__12595 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__12596 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var G__12597 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(17));
var G__12598 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(18));
return (function sci$impl$fns$fun_$_arity_19(G__12561,G__12562,G__12563,G__12564,G__12565,G__12566,G__12567,G__12568,G__12569,G__12570,G__12571,G__12572,G__12573,G__12574,G__12575,G__12576,G__12577,G__12578,G__12579){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((19),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__12580,G__12561);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__12581,G__12562);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__12582,G__12563);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__12583,G__12564);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__12584,G__12565);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__12585,G__12566);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__12586,G__12567);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__12587,G__12568);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__12588,G__12569);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__12589,G__12570);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__12590,G__12571);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__12591,G__12572);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__12592,G__12573);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__12593,G__12574);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__12594,G__12575);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__12595,G__12576);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__12596,G__12577);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__12597,G__12578);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__12598,G__12579);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$20,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__13055 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__13056 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__13057 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__13058 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__13059 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__13060 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__13061 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__13062 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__13063 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__13064 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__13065 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__13066 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__13067 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__13068 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__13069 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__13070 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__13071 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
var G__13072 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(17));
var G__13073 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(18));
G__12561 = G__13055;
G__12562 = G__13056;
G__12563 = G__13057;
G__12564 = G__13058;
G__12565 = G__13059;
G__12566 = G__13060;
G__12567 = G__13061;
G__12568 = G__13062;
G__12569 = G__13063;
G__12570 = G__13064;
G__12571 = G__13065;
G__12572 = G__13066;
G__12573 = G__13067;
G__12574 = G__13068;
G__12575 = G__13069;
G__12576 = G__13070;
G__12577 = G__13071;
G__12578 = G__13072;
G__12579 = G__13073;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
}

break;
case (20):
if(cljs.core.truth_(disable_arity_checks_QMARK_)){
var G__12619 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__12620 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__12621 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__12622 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__12623 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__12624 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__12625 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__12626 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__12627 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__12628 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__12629 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__12630 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__12631 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__12632 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__12633 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__12634 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__12635 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var G__12636 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(17));
var G__12637 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(18));
var G__12638 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__12599,G__12600,G__12601,G__12602,G__12603,G__12604,G__12605,G__12606,G__12607,G__12608,G__12609,G__12610,G__12611,G__12612,G__12613,G__12614,G__12615,G__12616,G__12617,G__12618){
while(true){
var bindings__$2 = cljs.core._assoc(bindings__$1,G__12619,G__12599);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__12620,G__12600);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__12621,G__12601);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__12622,G__12602);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__12623,G__12603);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__12624,G__12604);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__12625,G__12605);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__12626,G__12606);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__12627,G__12607);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__12628,G__12608);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__12629,G__12609);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__12630,G__12610);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__12631,G__12611);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__12632,G__12612);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__12633,G__12613);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__12634,G__12614);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__12635,G__12615);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__12636,G__12616);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__12637,G__12617);
var bindings__$21 = cljs.core._assoc(bindings__$20,G__12638,G__12618);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$21,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__13074 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__13075 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__13076 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__13077 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__13078 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__13079 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__13080 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__13081 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__13082 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__13083 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__13084 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__13085 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__13086 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__13087 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__13088 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__13089 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__13090 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
var G__13091 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(17));
var G__13092 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(18));
var G__13093 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(19));
G__12599 = G__13074;
G__12600 = G__13075;
G__12601 = G__13076;
G__12602 = G__13077;
G__12603 = G__13078;
G__12604 = G__13079;
G__12605 = G__13080;
G__12606 = G__13081;
G__12607 = G__13082;
G__12608 = G__13083;
G__12609 = G__13084;
G__12610 = G__13085;
G__12611 = G__13086;
G__12612 = G__13087;
G__12613 = G__13088;
G__12614 = G__13089;
G__12615 = G__13090;
G__12616 = G__13091;
G__12617 = G__13092;
G__12618 = G__13093;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
} else {
var G__12659 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(0));
var G__12660 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(1));
var G__12661 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(2));
var G__12662 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(3));
var G__12663 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(4));
var G__12664 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(5));
var G__12665 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(6));
var G__12666 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(7));
var G__12667 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(8));
var G__12668 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(9));
var G__12669 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(10));
var G__12670 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(11));
var G__12671 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(12));
var G__12672 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(13));
var G__12673 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(14));
var G__12674 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(15));
var G__12675 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(16));
var G__12676 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(17));
var G__12677 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(18));
var G__12678 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(params,(19));
return (function sci$impl$fns$fun_$_arity_20(G__12639,G__12640,G__12641,G__12642,G__12643,G__12644,G__12645,G__12646,G__12647,G__12648,G__12649,G__12650,G__12651,G__12652,G__12653,G__12654,G__12655,G__12656,G__12657,G__12658){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((20),arguments.length)){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,cljs.core.vals(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(arguments)));
}

var bindings__$2 = cljs.core._assoc(bindings__$1,G__12659,G__12639);
var bindings__$3 = cljs.core._assoc(bindings__$2,G__12660,G__12640);
var bindings__$4 = cljs.core._assoc(bindings__$3,G__12661,G__12641);
var bindings__$5 = cljs.core._assoc(bindings__$4,G__12662,G__12642);
var bindings__$6 = cljs.core._assoc(bindings__$5,G__12663,G__12643);
var bindings__$7 = cljs.core._assoc(bindings__$6,G__12664,G__12644);
var bindings__$8 = cljs.core._assoc(bindings__$7,G__12665,G__12645);
var bindings__$9 = cljs.core._assoc(bindings__$8,G__12666,G__12646);
var bindings__$10 = cljs.core._assoc(bindings__$9,G__12667,G__12647);
var bindings__$11 = cljs.core._assoc(bindings__$10,G__12668,G__12648);
var bindings__$12 = cljs.core._assoc(bindings__$11,G__12669,G__12649);
var bindings__$13 = cljs.core._assoc(bindings__$12,G__12670,G__12650);
var bindings__$14 = cljs.core._assoc(bindings__$13,G__12671,G__12651);
var bindings__$15 = cljs.core._assoc(bindings__$14,G__12672,G__12652);
var bindings__$16 = cljs.core._assoc(bindings__$15,G__12673,G__12653);
var bindings__$17 = cljs.core._assoc(bindings__$16,G__12674,G__12654);
var bindings__$18 = cljs.core._assoc(bindings__$17,G__12675,G__12655);
var bindings__$19 = cljs.core._assoc(bindings__$18,G__12676,G__12656);
var bindings__$20 = cljs.core._assoc(bindings__$19,G__12677,G__12657);
var bindings__$21 = cljs.core._assoc(bindings__$20,G__12678,G__12658);
var ret__11288__auto__ = sci.impl.evaluator.eval(ctx,bindings__$21,body);
var recur_QMARK___11289__auto__ = (ret__11288__auto__ instanceof sci.impl.fns.Recur);
if(recur_QMARK___11289__auto__){
var recur_val = sci.impl.types.getVal(ret__11288__auto__);
var G__13094 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(0));
var G__13095 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(1));
var G__13096 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(2));
var G__13097 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(3));
var G__13098 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(4));
var G__13099 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(5));
var G__13100 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(6));
var G__13101 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(7));
var G__13102 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(8));
var G__13103 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(9));
var G__13104 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(10));
var G__13105 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(11));
var G__13106 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(12));
var G__13107 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(13));
var G__13108 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(14));
var G__13109 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(15));
var G__13110 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(16));
var G__13111 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(17));
var G__13112 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(18));
var G__13113 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(recur_val,(19));
G__12639 = G__13094;
G__12640 = G__13095;
G__12641 = G__13096;
G__12642 = G__13097;
G__12643 = G__13098;
G__12644 = G__13099;
G__12645 = G__13100;
G__12646 = G__13101;
G__12647 = G__13102;
G__12648 = G__13103;
G__12649 = G__13104;
G__12650 = G__13105;
G__12651 = G__13106;
G__12652 = G__13107;
G__12653 = G__13108;
G__12654 = G__13109;
G__12655 = G__13110;
G__12656 = G__13111;
G__12657 = G__13112;
G__12658 = G__13113;
continue;
} else {
return ret__11288__auto__;
}
break;
}
});
}

break;
default:
return (function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings__$2 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings__$1;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_AMPERSAND_,fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
}

var G__13114 = cljs.core.next(args_STAR_);
var G__13115 = cljs.core.next(params__$1);
var G__13116 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__13114;
params__$1 = G__13115;
ret = G__13116;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ret = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_(min_var_args_arity)){
var vec__12679 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12679,(0),null);
var vec__12682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12679,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12682,(0),null);
var G__13117 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__13117;
continue;
} else {
var G__13118 = recur_val;
args = G__13118;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13119__i = 0, G__13119__a = new Array(arguments.length -  0);
while (G__13119__i < G__13119__a.length) {G__13119__a[G__13119__i] = arguments[G__13119__i + 0]; ++G__13119__i;}
  args = new cljs.core.IndexedSeq(G__13119__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__13120){
var args = cljs.core.seq(arglist__13120);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
;

}
})():(function() { 
var sci$impl$fns$fun_$_varargs__delegate = function (args){
while(true){
var bindings__$2 = (function (){var args_STAR_ = cljs.core.seq(args);
var params__$1 = cljs.core.seq(params);
var ret = bindings__$1;
while(true){
if(params__$1){
var fp = cljs.core.first(params__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_AMPERSAND_,fp)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.second(params__$1),args_STAR_);
} else {
if(args_STAR_){
} else {
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
}

var G__13121 = cljs.core.next(args_STAR_);
var G__13122 = cljs.core.next(params__$1);
var G__13123 = cljs.core._assoc(ret,fp,cljs.core.first(args_STAR_));
args_STAR_ = G__13121;
params__$1 = G__13122;
ret = G__13123;
continue;
}
} else {
if(args_STAR_){
sci.impl.fns.throw_arity(ctx,nsm,fn_name,macro_QMARK_,args);
} else {
}

return ret;
}
break;
}
})();
var ret = sci.impl.evaluator.eval(ctx,bindings__$2,body);
var recur_QMARK_ = (ret instanceof sci.impl.fns.Recur);
if(recur_QMARK_){
var recur_val = sci.impl.types.getVal(ret);
var min_var_args_arity = (cljs.core.truth_(var_arg_name)?fixed_arity:null);
if(cljs.core.truth_(min_var_args_arity)){
var vec__12685 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(recur_val,(0),min_var_args_arity),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(recur_val,min_var_args_arity)], null);
var fixed_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12685,(0),null);
var vec__12688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12685,(1),null);
var rest_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12688,(0),null);
var G__13124 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fixed_args,rest_args);
args = G__13124;
continue;
} else {
var G__13125 = recur_val;
args = G__13125;
continue;
}
} else {
return ret;
}
break;
}
};
var sci$impl$fns$fun_$_varargs = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13126__i = 0, G__13126__a = new Array(arguments.length -  0);
while (G__13126__i < G__13126__a.length) {G__13126__a[G__13126__i] = arguments[G__13126__i + 0]; ++G__13126__i;}
  args = new cljs.core.IndexedSeq(G__13126__a,0,null);
} 
return sci$impl$fns$fun_$_varargs__delegate.call(this,args);};
sci$impl$fns$fun_$_varargs.cljs$lang$maxFixedArity = 0;
sci$impl$fns$fun_$_varargs.cljs$lang$applyTo = (function (arglist__13127){
var args = cljs.core.seq(arglist__13127);
return sci$impl$fns$fun_$_varargs__delegate(args);
});
sci$impl$fns$fun_$_varargs.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$fun_$_varargs__delegate;
return sci$impl$fns$fun_$_varargs;
})()
);
return f;
});
sci.impl.fns.lookup_by_arity = (function sci$impl$fns$lookup_by_arity(arities,arity){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(arities,arity);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$variadic.cljs$core$IFn$_invoke$arity$1(arities);
}
});
sci.impl.fns.fn_arity_map = (function sci$impl$fns$fn_arity_map(ctx,bindings,fn_name,macro_QMARK_,fn_bodies){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arity_map,fn_body){
var f = sci.impl.fns.fun(ctx,bindings,fn_body,fn_name,macro_QMARK_);
var var_arg_QMARK_ = cljs.core.cst$kw$var_DASH_arg_DASH_name.cljs$core$IFn$_invoke$arity$1(fn_body);
var fixed_arity = cljs.core.cst$kw$fixed_DASH_arity.cljs$core$IFn$_invoke$arity$1(fn_body);
if(cljs.core.truth_(var_arg_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,cljs.core.cst$kw$variadic,f);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(arity_map,fixed_arity,f);
}
}),cljs.core.PersistentArrayMap.EMPTY,fn_bodies);
});
sci.impl.fns.eval_fn = (function sci$impl$fns$eval_fn(ctx,bindings,fn_name,fn_bodies,macro_QMARK_,single_arity,self_ref_QMARK_){
var self_ref = (cljs.core.truth_(self_ref_QMARK_)?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null):null);
var bindings__$1 = (cljs.core.truth_(self_ref_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bindings,fn_name,(function() { 
var sci$impl$fns$eval_fn_$_call_self__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self_ref),args);
};
var sci$impl$fns$eval_fn_$_call_self = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13129__i = 0, G__13129__a = new Array(arguments.length -  0);
while (G__13129__i < G__13129__a.length) {G__13129__a[G__13129__i] = arguments[G__13129__i + 0]; ++G__13129__i;}
  args = new cljs.core.IndexedSeq(G__13129__a,0,null);
} 
return sci$impl$fns$eval_fn_$_call_self__delegate.call(this,args);};
sci$impl$fns$eval_fn_$_call_self.cljs$lang$maxFixedArity = 0;
sci$impl$fns$eval_fn_$_call_self.cljs$lang$applyTo = (function (arglist__13130){
var args = cljs.core.seq(arglist__13130);
return sci$impl$fns$eval_fn_$_call_self__delegate(args);
});
sci$impl$fns$eval_fn_$_call_self.cljs$core$IFn$_invoke$arity$variadic = sci$impl$fns$eval_fn_$_call_self__delegate;
return sci$impl$fns$eval_fn_$_call_self;
})()
):bindings);
var f = (cljs.core.truth_(single_arity)?sci.impl.fns.fun(ctx,bindings__$1,single_arity,fn_name,macro_QMARK_):(function (){var arities = sci.impl.fns.fn_arity_map(ctx,bindings__$1,fn_name,macro_QMARK_,fn_bodies);
return (function() { 
var G__13131__delegate = function (args){
var arg_count = cljs.core.count(args);
var temp__5751__auto__ = sci.impl.fns.lookup_by_arity(arities,arg_count);
if(cljs.core.truth_(temp__5751__auto__)){
var f = temp__5751__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
throw (new Error((function (){var actual_count = (cljs.core.truth_(macro_QMARK_)?(arg_count - (2)):arg_count);
return ["Cannot call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_name)," with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual_count)," arguments"].join('');
})()));
}
};
var G__13131 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13132__i = 0, G__13132__a = new Array(arguments.length -  0);
while (G__13132__i < G__13132__a.length) {G__13132__a[G__13132__i] = arguments[G__13132__i + 0]; ++G__13132__i;}
  args = new cljs.core.IndexedSeq(G__13132__a,0,null);
} 
return G__13131__delegate.call(this,args);};
G__13131.cljs$lang$maxFixedArity = 0;
G__13131.cljs$lang$applyTo = (function (arglist__13133){
var args = cljs.core.seq(arglist__13133);
return G__13131__delegate(args);
});
G__13131.cljs$core$IFn$_invoke$arity$variadic = G__13131__delegate;
return G__13131;
})()
;
})());
var f__$1 = (cljs.core.truth_(macro_QMARK_)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(f,(function (p1__13128_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13128_SHARP_,cljs.core.cst$kw$sci_SLASH_macro,macro_QMARK_);
})):f);
if(cljs.core.truth_(self_ref_QMARK_)){
cljs.core.reset_BANG_(self_ref,f__$1);
} else {
}

return f__$1;
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_fn,sci.impl.fns.eval_fn);
