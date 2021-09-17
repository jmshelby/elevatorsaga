// Compiled by ClojureScript 1.10.758 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.protocols');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sci.impl.multimethods');
goog.require('sci.impl.types');
goog.require('sci.impl.utils');
goog.require('sci.impl.vars');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___3193 = arguments.length;
var i__4737__auto___3194 = (0);
while(true){
if((i__4737__auto___3194 < len__4736__auto___3193)){
args__4742__auto__.push((arguments[i__4737__auto___3194]));

var G__3195 = (i__4737__auto___3194 + (1));
i__4737__auto___3194 = G__3195;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__3183 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3183,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3183,(1),null);
var vec__3186 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3186,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3186,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_name));
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$def,null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$kw$methods,null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$ns,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__STAR_ns_STAR_,null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__3189){
var vec__3190 = p__3189;
var seq__3191 = cljs.core.seq(vec__3190);
var first__3192 = cljs.core.first(seq__3191);
var seq__3191__$1 = cljs.core.next(seq__3191);
var method_name = first__3192;
var ___$2 = seq__3191__$1;
var fq_name__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defmulti,null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_protocol_DASH_type_DASH_impl,null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defmethod,null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$sci$impl$protocols_SLASH_reified,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$x__3171__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_AMPERSAND_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$args__3172__auto__,null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$methods__3173__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__DASH_reified_DASH_methods,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$x__3171__auto__,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_apply,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_get,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$methods__3173__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$x__3171__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$args__3172__auto__,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(cljs.core.cst$kw$extend_DASH_via_DASH_metadata.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defmethod,null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$default,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$x__3174__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$_AMPERSAND_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$args__3175__auto__,null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$meta__3176__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_meta,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$x__3174__auto__,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$method__3177__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_get,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$meta__3176__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$quote,null,(1),null)),(new cljs.core.List(null,fq_name__$1,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$method__3177__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_apply,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$method__3177__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$x__3174__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$args__3175__auto__,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$throw,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$new,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$js_SLASH_Error,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_str,null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$var,null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_protocol_DASH_type_DASH_impl,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$x__3174__auto__,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$def,null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_update,null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$kw$methods,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_conj,null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq3178){
var G__3179 = cljs.core.first(seq3178);
var seq3178__$1 = cljs.core.next(seq3178);
var G__3180 = cljs.core.first(seq3178__$1);
var seq3178__$2 = cljs.core.next(seq3178__$1);
var G__3181 = cljs.core.first(seq3178__$2);
var seq3178__$3 = cljs.core.next(seq3178__$2);
var G__3182 = cljs.core.first(seq3178__$3);
var seq3178__$4 = cljs.core.next(seq3178__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3179,G__3180,G__3181,G__3182,seq3178__$4);
}));

sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___3211 = arguments.length;
var i__4737__auto___3212 = (0);
while(true){
if((i__4737__auto___3212 < len__4736__auto___3211)){
args__4742__auto__.push((arguments[i__4737__auto___3212]));

var G__3213 = (i__4737__auto___3212 + (1));
i__4737__auto___3212 = G__3213;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__3196_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__3196_SHARP_)));
}),impls);
var protocol_var = (function (){var G__3204 = ctx;
var G__3205 = cljs.core.cst$kw$bindingx.cljs$core$IFn$_invoke$arity$1(ctx);
var G__3206 = protocol_name;
var fexpr__3203 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__3203.cljs$core$IFn$_invoke$arity$3 ? fexpr__3203.cljs$core$IFn$_invoke$arity$3(G__3204,G__3205,G__3206) : fexpr__3203.call(null,G__3204,G__3205,G__3206));
})();
var protocol_ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__3197_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__3197_SHARP_);
});
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__3207){
var vec__3208 = p__3207;
var seq__3209 = cljs.core.seq(vec__3208);
var first__3210 = cljs.core.first(seq__3209);
var seq__3209__$1 = cljs.core.next(seq__3209);
var type = first__3210;
var meths = seq__3209__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defmethod,null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.name(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq3198){
var G__3199 = cljs.core.first(seq3198);
var seq3198__$1 = cljs.core.next(seq3198);
var G__3200 = cljs.core.first(seq3198__$1);
var seq3198__$2 = cljs.core.next(seq3198__$1);
var G__3201 = cljs.core.first(seq3198__$2);
var seq3198__$3 = cljs.core.next(seq3198__$2);
var G__3202 = cljs.core.first(seq3198__$3);
var seq3198__$4 = cljs.core.next(seq3198__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3199,G__3200,G__3201,G__3202,seq3198__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___3299 = arguments.length;
var i__4737__auto___3300 = (0);
while(true){
if((i__4737__auto___3300 < len__4736__auto___3299)){
args__4742__auto__.push((arguments[i__4737__auto___3300]));

var G__3301 = (i__4737__auto___3300 + (1));
i__4737__auto___3300 = G__3301;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__3217 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__3219 = null;
var count__3220 = (0);
var i__3221 = (0);
while(true){
if((i__3221 < count__3220)){
var vec__3261 = chunk__3219.cljs$core$IIndexed$_nth$arity$2(null,i__3221);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3261,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3261,(1),null);
var proto_ns_3302 = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(proto);
var pns_3303 = sci.impl.vars.getName(proto_ns_3302);
var seq__3264_3304 = cljs.core.seq(mmap);
var chunk__3265_3305 = null;
var count__3266_3306 = (0);
var i__3267_3307 = (0);
while(true){
if((i__3267_3307 < count__3266_3306)){
var vec__3274_3308 = chunk__3265_3305.cljs$core$IIndexed$_nth$arity$2(null,i__3267_3307);
var fn_name_3309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3274_3308,(0),null);
var f_3310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3274_3308,(1),null);
var fn_sym_3311 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_3309));
var env_3312 = cljs.core.deref(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_3313 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_3312,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,pns_3303,fn_sym_3311], null));
var multi_method_3314 = cljs.core.deref(multi_method_var_3313);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_3314,atype,f_3310);


var G__3315 = seq__3264_3304;
var G__3316 = chunk__3265_3305;
var G__3317 = count__3266_3306;
var G__3318 = (i__3267_3307 + (1));
seq__3264_3304 = G__3315;
chunk__3265_3305 = G__3316;
count__3266_3306 = G__3317;
i__3267_3307 = G__3318;
continue;
} else {
var temp__5753__auto___3319 = cljs.core.seq(seq__3264_3304);
if(temp__5753__auto___3319){
var seq__3264_3320__$1 = temp__5753__auto___3319;
if(cljs.core.chunked_seq_QMARK_(seq__3264_3320__$1)){
var c__4556__auto___3321 = cljs.core.chunk_first(seq__3264_3320__$1);
var G__3322 = cljs.core.chunk_rest(seq__3264_3320__$1);
var G__3323 = c__4556__auto___3321;
var G__3324 = cljs.core.count(c__4556__auto___3321);
var G__3325 = (0);
seq__3264_3304 = G__3322;
chunk__3265_3305 = G__3323;
count__3266_3306 = G__3324;
i__3267_3307 = G__3325;
continue;
} else {
var vec__3277_3326 = cljs.core.first(seq__3264_3320__$1);
var fn_name_3327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3277_3326,(0),null);
var f_3328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3277_3326,(1),null);
var fn_sym_3329 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_3327));
var env_3330 = cljs.core.deref(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_3331 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_3330,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,pns_3303,fn_sym_3329], null));
var multi_method_3332 = cljs.core.deref(multi_method_var_3331);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_3332,atype,f_3328);


var G__3333 = cljs.core.next(seq__3264_3320__$1);
var G__3334 = null;
var G__3335 = (0);
var G__3336 = (0);
seq__3264_3304 = G__3333;
chunk__3265_3305 = G__3334;
count__3266_3306 = G__3335;
i__3267_3307 = G__3336;
continue;
}
} else {
}
}
break;
}


var G__3337 = seq__3217;
var G__3338 = chunk__3219;
var G__3339 = count__3220;
var G__3340 = (i__3221 + (1));
seq__3217 = G__3337;
chunk__3219 = G__3338;
count__3220 = G__3339;
i__3221 = G__3340;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__3217);
if(temp__5753__auto__){
var seq__3217__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__3217__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__3217__$1);
var G__3341 = cljs.core.chunk_rest(seq__3217__$1);
var G__3342 = c__4556__auto__;
var G__3343 = cljs.core.count(c__4556__auto__);
var G__3344 = (0);
seq__3217 = G__3341;
chunk__3219 = G__3342;
count__3220 = G__3343;
i__3221 = G__3344;
continue;
} else {
var vec__3280 = cljs.core.first(seq__3217__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3280,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3280,(1),null);
var proto_ns_3345 = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(proto);
var pns_3346 = sci.impl.vars.getName(proto_ns_3345);
var seq__3283_3347 = cljs.core.seq(mmap);
var chunk__3284_3348 = null;
var count__3285_3349 = (0);
var i__3286_3350 = (0);
while(true){
if((i__3286_3350 < count__3285_3349)){
var vec__3293_3351 = chunk__3284_3348.cljs$core$IIndexed$_nth$arity$2(null,i__3286_3350);
var fn_name_3352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3293_3351,(0),null);
var f_3353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3293_3351,(1),null);
var fn_sym_3354 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_3352));
var env_3355 = cljs.core.deref(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_3356 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_3355,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,pns_3346,fn_sym_3354], null));
var multi_method_3357 = cljs.core.deref(multi_method_var_3356);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_3357,atype,f_3353);


var G__3358 = seq__3283_3347;
var G__3359 = chunk__3284_3348;
var G__3360 = count__3285_3349;
var G__3361 = (i__3286_3350 + (1));
seq__3283_3347 = G__3358;
chunk__3284_3348 = G__3359;
count__3285_3349 = G__3360;
i__3286_3350 = G__3361;
continue;
} else {
var temp__5753__auto___3362__$1 = cljs.core.seq(seq__3283_3347);
if(temp__5753__auto___3362__$1){
var seq__3283_3363__$1 = temp__5753__auto___3362__$1;
if(cljs.core.chunked_seq_QMARK_(seq__3283_3363__$1)){
var c__4556__auto___3364 = cljs.core.chunk_first(seq__3283_3363__$1);
var G__3365 = cljs.core.chunk_rest(seq__3283_3363__$1);
var G__3366 = c__4556__auto___3364;
var G__3367 = cljs.core.count(c__4556__auto___3364);
var G__3368 = (0);
seq__3283_3347 = G__3365;
chunk__3284_3348 = G__3366;
count__3285_3349 = G__3367;
i__3286_3350 = G__3368;
continue;
} else {
var vec__3296_3369 = cljs.core.first(seq__3283_3363__$1);
var fn_name_3370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3296_3369,(0),null);
var f_3371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__3296_3369,(1),null);
var fn_sym_3372 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_3370));
var env_3373 = cljs.core.deref(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_3374 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_3373,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$namespaces,pns_3346,fn_sym_3372], null));
var multi_method_3375 = cljs.core.deref(multi_method_var_3374);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_3375,atype,f_3371);


var G__3376 = cljs.core.next(seq__3283_3363__$1);
var G__3377 = null;
var G__3378 = (0);
var G__3379 = (0);
seq__3283_3347 = G__3376;
chunk__3284_3348 = G__3377;
count__3285_3349 = G__3378;
i__3286_3350 = G__3379;
continue;
}
} else {
}
}
break;
}


var G__3380 = cljs.core.next(seq__3217__$1);
var G__3381 = null;
var G__3382 = (0);
var G__3383 = (0);
seq__3217 = G__3380;
chunk__3219 = G__3381;
count__3220 = G__3382;
i__3221 = G__3383;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq3214){
var G__3215 = cljs.core.first(seq3214);
var seq3214__$1 = cljs.core.next(seq3214);
var G__3216 = cljs.core.first(seq3214__$1);
var seq3214__$2 = cljs.core.next(seq3214__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3215,G__3216,seq3214__$2);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___3399 = arguments.length;
var i__4737__auto___3400 = (0);
while(true){
if((i__4737__auto___3400 < len__4736__auto___3399)){
args__4742__auto__.push((arguments[i__4737__auto___3400]));

var G__3401 = (i__4737__auto___3400 + (1));
i__4737__auto___3400 = G__3401;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,atype,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__3384_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__3384_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__3391){
var vec__3392 = p__3391;
var seq__3393 = cljs.core.seq(vec__3392);
var first__3394 = cljs.core.first(seq__3393);
var seq__3393__$1 = cljs.core.next(seq__3393);
var proto = first__3394;
var meths = seq__3393__$1;
var protocol_var = (function (){var G__3396 = ctx;
var G__3397 = cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(ctx);
var G__3398 = proto;
var fexpr__3395 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__3395.cljs$core$IFn$_invoke$arity$3 ? fexpr__3395.cljs$core$IFn$_invoke$arity$3(G__3396,G__3397,G__3398) : fexpr__3395.call(null,G__3396,G__3397,G__3398));
})();
var protocol_ns = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__3385_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__3385_SHARP_);
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defmethod,null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.name(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,atype,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq3386){
var G__3387 = cljs.core.first(seq3386);
var seq3386__$1 = cljs.core.next(seq3386);
var G__3388 = cljs.core.first(seq3386__$1);
var seq3386__$2 = cljs.core.next(seq3386__$1);
var G__3389 = cljs.core.first(seq3386__$2);
var seq3386__$3 = cljs.core.next(seq3386__$2);
var G__3390 = cljs.core.first(seq3386__$3);
var seq3386__$4 = cljs.core.next(seq3386__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3387,G__3388,G__3389,G__3390,seq3386__$4);
}));

sci.impl.protocols.find_matching_non_default_method = (function sci$impl$protocols$find_matching_non_default_method(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__3402_SHARP_){
var temp__5753__auto__ = cljs.core.get_method(p1__3402_SHARP_,sci.impl.types.type_impl(obj));
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
var ms = cljs.core.methods$(p1__3402_SHARP_);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms,cljs.core.cst$kw$default);
return (!((m === default$)));
} else {
return null;
}
}),cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(protocol)));
});
sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
if((obj instanceof sci.impl.types.Reified)){
return cljs.core.contains_QMARK_(obj.sci$impl$types$IReified$getProtocols$arity$1(null),protocol);
} else {
var p = cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(protocol);
var or__4126__auto__ = (function (){var and__4115__auto__ = p;
if(cljs.core.truth_(and__4115__auto__)){
var pred__3409 = cljs.core._EQ_;
var expr__3410 = p;
if(cljs.core.truth_((pred__3409.cljs$core$IFn$_invoke$arity$2 ? pred__3409.cljs$core$IFn$_invoke$arity$2(cljs.core.IDeref,expr__3410) : pred__3409.call(null,cljs.core.IDeref,expr__3410)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj);
}
} else {
if(cljs.core.truth_((pred__3409.cljs$core$IFn$_invoke$arity$2 ? pred__3409.cljs$core$IFn$_invoke$arity$2(cljs.core.ISwap,expr__3410) : pred__3409.call(null,cljs.core.ISwap,expr__3410)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (65536))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$ISwap$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.ISwap,obj);
}
} else {
if(cljs.core.truth_((pred__3409.cljs$core$IFn$_invoke$arity$2 ? pred__3409.cljs$core$IFn$_invoke$arity$2(cljs.core.IReset,expr__3410) : pred__3409.call(null,cljs.core.IReset,expr__3410)))){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition1$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IReset$)))){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IReset,obj);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__3410)].join('')));
}
}
}
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sci.impl.protocols.find_matching_non_default_method(protocol,obj);
}
}
});
sci.impl.protocols.instance_impl = (function sci$impl$protocols$instance_impl(clazz,x){
if(cljs.core.truth_((((clazz instanceof cljs.core.Symbol))?(function (){var G__3416 = clazz;
var G__3416__$1 = (((G__3416 == null))?null:cljs.core.meta(G__3416));
if((G__3416__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$sci$impl_SLASH_record.cljs$core$IFn$_invoke$arity$1(G__3416__$1);
}
})():false))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clazz,cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x)));
} else {
return (x instanceof clazz);

}
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__3417_SHARP_){
return cljs.core.get_method(p1__3417_SHARP_,atype);
}),cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(protocol)));
});
