// Compiled by ClojureScript 1.10.758 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.macros');
goog.require('cljs.core');
goog.require('cljs.core.constants');
var ret__4785__auto___1409 = (function (){
/**
 * Private. deftime macro from https://github.com/cgrand/macrovich
 */
sci.impl.macros.deftime = (function sci$impl$macros$deftime(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1410 = arguments.length;
var i__4737__auto___1411 = (0);
while(true){
if((i__4737__auto___1411 < len__4736__auto___1410)){
args__4742__auto__.push((arguments[i__4737__auto___1411]));

var G__1412 = (i__4737__auto___1411 + (1));
i__4737__auto___1411 = G__1412;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.macros.deftime.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.macros.deftime.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
if(cljs.core.truth_((function (){var temp__5753__auto__ = (function (){var and__4115__auto__ = cljs.core._STAR_ns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.ns_name(cljs.core._STAR_ns_STAR_);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
return cljs.core.re_matches(/.*\$macros/,cljs.core.name(n));
} else {
return null;
}
})())){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body)));
} else {
return null;
}
}));

(sci.impl.macros.deftime.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.macros.deftime.cljs$lang$applyTo = (function (seq1406){
var G__1407 = cljs.core.first(seq1406);
var seq1406__$1 = cljs.core.next(seq1406);
var G__1408 = cljs.core.first(seq1406__$1);
var seq1406__$2 = cljs.core.next(seq1406__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1407,G__1408,seq1406__$2);
}));

return null;
})()
;
(sci.impl.macros.deftime.cljs$lang$macro = true);

