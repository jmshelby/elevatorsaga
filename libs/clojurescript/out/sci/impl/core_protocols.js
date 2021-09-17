// Compiled by ClojureScript 1.10.758 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.core_protocols');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sci.impl.types');
goog.require('sci.impl.vars');
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._deref !== 'undefined')){
} else {
sci.impl.core_protocols._deref = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__2109 = cljs.core.get_global_hierarchy;
return (fexpr__2109.cljs$core$IFn$_invoke$arity$0 ? fexpr__2109.cljs$core$IFn$_invoke$arity$0() : fexpr__2109.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-deref"),sci.impl.types.type_impl,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$sci$impl$protocols_SLASH_reified,(function (ref){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__2110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_deref);
return (fexpr__2110.cljs$core$IFn$_invoke$arity$1 ? fexpr__2110.cljs$core$IFn$_invoke$arity$1(ref) : fexpr__2110.call(null,ref));
}));
sci.impl.core_protocols.ideref_default = sci.impl.core_protocols._deref.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (ref){
return cljs.core.deref(ref);
}));
sci.impl.core_protocols.deref_STAR_ = (function sci$impl$core_protocols$deref_STAR_(x){
return (sci.impl.core_protocols._deref.cljs$core$IFn$_invoke$arity$1 ? sci.impl.core_protocols._deref.cljs$core$IFn$_invoke$arity$1(x) : sci.impl.core_protocols._deref.call(null,x));
});
sci.impl.core_protocols.cljs_core_ns = sci.impl.vars.__GT_SciNamespace(cljs.core.cst$sym$cljs$core,null);
sci.impl.core_protocols.deref_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$core$IDeref,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol,cljs.core.IDeref,cljs.core.cst$kw$methods,cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._deref]),cljs.core.cst$kw$ns,sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ns,sci.impl.core_protocols.cljs_core_ns], null));
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._swap_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._swap_BANG_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__2111 = cljs.core.get_global_hierarchy;
return (fexpr__2111.cljs$core$IFn$_invoke$arity$0 ? fexpr__2111.cljs$core$IFn$_invoke$arity$0() : fexpr__2111.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-swap!"),sci.impl.types.type_impl,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
if((typeof sci !== 'undefined') && (typeof sci.impl !== 'undefined') && (typeof sci.impl.core_protocols !== 'undefined') && (typeof sci.impl.core_protocols._reset_BANG_ !== 'undefined')){
} else {
sci.impl.core_protocols._reset_BANG_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__2112 = cljs.core.get_global_hierarchy;
return (fexpr__2112.cljs$core$IFn$_invoke$arity$0 ? fexpr__2112.cljs$core$IFn$_invoke$arity$0() : fexpr__2112.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sci.impl.core-protocols","-reset!"),sci.impl.types.type_impl,cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$sci$impl$protocols_SLASH_reified,(function() {
var G__2116 = null;
var G__2116__2 = (function (ref,f){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__2113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_swap_BANG_);
return (fexpr__2113.cljs$core$IFn$_invoke$arity$2 ? fexpr__2113.cljs$core$IFn$_invoke$arity$2(ref,f) : fexpr__2113.call(null,ref,f));
});
var G__2116__3 = (function (ref,f,a1){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__2114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_swap_BANG_);
return (fexpr__2114.cljs$core$IFn$_invoke$arity$3 ? fexpr__2114.cljs$core$IFn$_invoke$arity$3(ref,f,a1) : fexpr__2114.call(null,ref,f,a1));
});
var G__2116__4 = (function (ref,f,a1,a2){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__2115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_swap_BANG_);
return (fexpr__2115.cljs$core$IFn$_invoke$arity$4 ? fexpr__2115.cljs$core$IFn$_invoke$arity$4(ref,f,a1,a2) : fexpr__2115.call(null,ref,f,a1,a2));
});
var G__2116__5 = (function() { 
var G__2117__delegate = function (ref,f,a1,a2,args){
var methods$ = sci.impl.types.getMethods(ref);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_swap_BANG_),ref,f,a1,a2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
};
var G__2117 = function (ref,f,a1,a2,var_args){
var args = null;
if (arguments.length > 4) {
var G__2118__i = 0, G__2118__a = new Array(arguments.length -  4);
while (G__2118__i < G__2118__a.length) {G__2118__a[G__2118__i] = arguments[G__2118__i + 4]; ++G__2118__i;}
  args = new cljs.core.IndexedSeq(G__2118__a,0,null);
} 
return G__2117__delegate.call(this,ref,f,a1,a2,args);};
G__2117.cljs$lang$maxFixedArity = 4;
G__2117.cljs$lang$applyTo = (function (arglist__2119){
var ref = cljs.core.first(arglist__2119);
arglist__2119 = cljs.core.next(arglist__2119);
var f = cljs.core.first(arglist__2119);
arglist__2119 = cljs.core.next(arglist__2119);
var a1 = cljs.core.first(arglist__2119);
arglist__2119 = cljs.core.next(arglist__2119);
var a2 = cljs.core.first(arglist__2119);
var args = cljs.core.rest(arglist__2119);
return G__2117__delegate(ref,f,a1,a2,args);
});
G__2117.cljs$core$IFn$_invoke$arity$variadic = G__2117__delegate;
return G__2117;
})()
;
G__2116 = function(ref,f,a1,a2,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return G__2116__2.call(this,ref,f);
case 3:
return G__2116__3.call(this,ref,f,a1);
case 4:
return G__2116__4.call(this,ref,f,a1,a2);
default:
var G__2120 = null;
if (arguments.length > 4) {
var G__2121__i = 0, G__2121__a = new Array(arguments.length -  4);
while (G__2121__i < G__2121__a.length) {G__2121__a[G__2121__i] = arguments[G__2121__i + 4]; ++G__2121__i;}
G__2120 = new cljs.core.IndexedSeq(G__2121__a,0,null);
}
return G__2116__5.cljs$core$IFn$_invoke$arity$variadic(ref,f,a1,a2, G__2120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__2116.cljs$lang$maxFixedArity = 4;
G__2116.cljs$lang$applyTo = G__2116__5.cljs$lang$applyTo;
G__2116.cljs$core$IFn$_invoke$arity$2 = G__2116__2;
G__2116.cljs$core$IFn$_invoke$arity$3 = G__2116__3;
G__2116.cljs$core$IFn$_invoke$arity$4 = G__2116__4;
G__2116.cljs$core$IFn$_invoke$arity$variadic = G__2116__5.cljs$core$IFn$_invoke$arity$variadic;
return G__2116;
})()
);
sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$sci$impl$protocols_SLASH_reified,(function (ref,v){
var methods$ = sci.impl.types.getMethods(ref);
var fexpr__2122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(methods$,cljs.core.cst$sym$_DASH_reset_BANG_);
return (fexpr__2122.cljs$core$IFn$_invoke$arity$2 ? fexpr__2122.cljs$core$IFn$_invoke$arity$2(ref,v) : fexpr__2122.call(null,ref,v));
}));
sci.impl.core_protocols.iatom_defaults = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sci.impl.core_protocols._swap_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function() { 
var G__2123__delegate = function (ref,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,ref,f,args);
};
var G__2123 = function (ref,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__2124__i = 0, G__2124__a = new Array(arguments.length -  2);
while (G__2124__i < G__2124__a.length) {G__2124__a[G__2124__i] = arguments[G__2124__i + 2]; ++G__2124__i;}
  args = new cljs.core.IndexedSeq(G__2124__a,0,null);
} 
return G__2123__delegate.call(this,ref,f,args);};
G__2123.cljs$lang$maxFixedArity = 2;
G__2123.cljs$lang$applyTo = (function (arglist__2125){
var ref = cljs.core.first(arglist__2125);
arglist__2125 = cljs.core.next(arglist__2125);
var f = cljs.core.first(arglist__2125);
var args = cljs.core.rest(arglist__2125);
return G__2123__delegate(ref,f,args);
});
G__2123.cljs$core$IFn$_invoke$arity$variadic = G__2123__delegate;
return G__2123;
})()
),sci.impl.core_protocols._reset_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (ref,v){
return cljs.core.reset_BANG_(ref,v);
}))], null);
sci.impl.core_protocols.swap_BANG__STAR_ = (function sci$impl$core_protocols$swap_BANG__STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___2129 = arguments.length;
var i__4737__auto___2130 = (0);
while(true){
if((i__4737__auto___2130 < len__4736__auto___2129)){
args__4742__auto__.push((arguments[i__4737__auto___2130]));

var G__2131 = (i__4737__auto___2130 + (1));
i__4737__auto___2130 = G__2131;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(sci.impl.core_protocols._swap_BANG_,ref,f,args);
} else {
return (sci.impl.core_protocols._swap_BANG_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.core_protocols._swap_BANG_.cljs$core$IFn$_invoke$arity$2(ref,f) : sci.impl.core_protocols._swap_BANG_.call(null,ref,f));
}
}));

(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.core_protocols.swap_BANG__STAR_.cljs$lang$applyTo = (function (seq2126){
var G__2127 = cljs.core.first(seq2126);
var seq2126__$1 = cljs.core.next(seq2126);
var G__2128 = cljs.core.first(seq2126__$1);
var seq2126__$2 = cljs.core.next(seq2126__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2127,G__2128,seq2126__$2);
}));

sci.impl.core_protocols.reset_BANG__STAR_ = (function sci$impl$core_protocols$reset_BANG__STAR_(ref,v){
return (sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.core_protocols._reset_BANG_.cljs$core$IFn$_invoke$arity$2(ref,v) : sci.impl.core_protocols._reset_BANG_.call(null,ref,v));
});
sci.impl.core_protocols.swap_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$core$ISwap,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol,cljs.core.ISwap,cljs.core.cst$kw$methods,cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._swap_BANG_]),cljs.core.cst$kw$ns,sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ns,sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.reset_protocol = sci.impl.vars.new_var.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$cljs$core$IReset,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$protocol,cljs.core.IReset,cljs.core.cst$kw$methods,cljs.core.PersistentHashSet.createAsIfByAssoc([sci.impl.core_protocols._reset_BANG_]),cljs.core.cst$kw$ns,sci.impl.core_protocols.cljs_core_ns], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ns,sci.impl.core_protocols.cljs_core_ns], null));
sci.impl.core_protocols.defaults = cljs.core.set(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sci.impl.core_protocols.iatom_defaults,sci.impl.core_protocols.ideref_default));
