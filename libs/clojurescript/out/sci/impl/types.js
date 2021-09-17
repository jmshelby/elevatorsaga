// Compiled by ClojureScript 1.10.758 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.types');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * @interface
 */
sci.impl.types.IBox = function(){};

var sci$impl$types$IBox$setVal$dyn_1361 = (function (_this,_v){
var x__4428__auto__ = (((_this == null))?null:_this);
var m__4429__auto__ = (sci.impl.types.setVal[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_this,_v) : m__4429__auto__.call(null,_this,_v));
} else {
var m__4426__auto__ = (sci.impl.types.setVal["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_this,_v) : m__4426__auto__.call(null,_this,_v));
} else {
throw cljs.core.missing_protocol("IBox.setVal",_this);
}
}
});
sci.impl.types.setVal = (function sci$impl$types$setVal(_this,_v){
if((((!((_this == null)))) && ((!((_this.sci$impl$types$IBox$setVal$arity$2 == null)))))){
return _this.sci$impl$types$IBox$setVal$arity$2(_this,_v);
} else {
return sci$impl$types$IBox$setVal$dyn_1361(_this,_v);
}
});

var sci$impl$types$IBox$getVal$dyn_1362 = (function (_this){
var x__4428__auto__ = (((_this == null))?null:_this);
var m__4429__auto__ = (sci.impl.types.getVal[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_this) : m__4429__auto__.call(null,_this));
} else {
var m__4426__auto__ = (sci.impl.types.getVal["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_this) : m__4426__auto__.call(null,_this));
} else {
throw cljs.core.missing_protocol("IBox.getVal",_this);
}
}
});
sci.impl.types.getVal = (function sci$impl$types$getVal(_this){
if((((!((_this == null)))) && ((!((_this.sci$impl$types$IBox$getVal$arity$1 == null)))))){
return _this.sci$impl$types$IBox$getVal$arity$1(_this);
} else {
return sci$impl$types$IBox$getVal$dyn_1362(_this);
}
});


/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.types.EvalVar = (function (v){
this.v = v;
});
(sci.impl.types.EvalVar.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.types.EvalVar.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return self__.v;
}));

(sci.impl.types.EvalVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$v], null);
}));

(sci.impl.types.EvalVar.cljs$lang$type = true);

(sci.impl.types.EvalVar.cljs$lang$ctorStr = "sci.impl.types/EvalVar");

(sci.impl.types.EvalVar.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"sci.impl.types/EvalVar");
}));

/**
 * Positional factory function for sci.impl.types/EvalVar.
 */
sci.impl.types.__GT_EvalVar = (function sci$impl$types$__GT_EvalVar(v){
return (new sci.impl.types.EvalVar(v));
});


/**
 * @interface
 */
sci.impl.types.IReified = function(){};

var sci$impl$types$IReified$getInterfaces$dyn_1363 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (sci.impl.types.getInterfaces[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (sci.impl.types.getInterfaces["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IReified.getInterfaces",_);
}
}
});
sci.impl.types.getInterfaces = (function sci$impl$types$getInterfaces(_){
if((((!((_ == null)))) && ((!((_.sci$impl$types$IReified$getInterfaces$arity$1 == null)))))){
return _.sci$impl$types$IReified$getInterfaces$arity$1(_);
} else {
return sci$impl$types$IReified$getInterfaces$dyn_1363(_);
}
});

var sci$impl$types$IReified$getMethods$dyn_1364 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (sci.impl.types.getMethods[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (sci.impl.types.getMethods["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IReified.getMethods",_);
}
}
});
sci.impl.types.getMethods = (function sci$impl$types$getMethods(_){
if((((!((_ == null)))) && ((!((_.sci$impl$types$IReified$getMethods$arity$1 == null)))))){
return _.sci$impl$types$IReified$getMethods$arity$1(_);
} else {
return sci$impl$types$IReified$getMethods$dyn_1364(_);
}
});

var sci$impl$types$IReified$getProtocols$dyn_1365 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (sci.impl.types.getProtocols[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (sci.impl.types.getProtocols["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IReified.getProtocols",_);
}
}
});
sci.impl.types.getProtocols = (function sci$impl$types$getProtocols(_){
if((((!((_ == null)))) && ((!((_.sci$impl$types$IReified$getProtocols$arity$1 == null)))))){
return _.sci$impl$types$IReified$getProtocols$arity$1(_);
} else {
return sci$impl$types$IReified$getProtocols$dyn_1365(_);
}
});


/**
* @constructor
 * @implements {sci.impl.types.IReified}
*/
sci.impl.types.Reified = (function (interfaces,meths,protocols){
this.interfaces = interfaces;
this.meths = meths;
this.protocols = protocols;
});
(sci.impl.types.Reified.prototype.sci$impl$types$IReified$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.types.Reified.prototype.sci$impl$types$IReified$getInterfaces$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.interfaces;
}));

(sci.impl.types.Reified.prototype.sci$impl$types$IReified$getMethods$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meths;
}));

(sci.impl.types.Reified.prototype.sci$impl$types$IReified$getProtocols$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.protocols;
}));

(sci.impl.types.Reified.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$interfaces,cljs.core.cst$sym$meths,cljs.core.cst$sym$protocols], null);
}));

(sci.impl.types.Reified.cljs$lang$type = true);

(sci.impl.types.Reified.cljs$lang$ctorStr = "sci.impl.types/Reified");

(sci.impl.types.Reified.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"sci.impl.types/Reified");
}));

/**
 * Positional factory function for sci.impl.types/Reified.
 */
sci.impl.types.__GT_Reified = (function sci$impl$types$__GT_Reified(interfaces,meths,protocols){
return (new sci.impl.types.Reified(interfaces,meths,protocols));
});

sci.impl.types.type_impl = (function sci$impl$types$type_impl(var_args){
var args__4742__auto__ = [];
var len__4736__auto___1370 = arguments.length;
var i__4737__auto___1371 = (0);
while(true){
if((i__4737__auto___1371 < len__4736__auto___1370)){
args__4742__auto__.push((arguments[i__4737__auto___1371]));

var G__1372 = (i__4737__auto___1371 + (1));
i__4737__auto___1371 = G__1372;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.types.type_impl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.types.type_impl.cljs$core$IFn$_invoke$arity$variadic = (function (x,_xs){
var or__4126__auto__ = (((x instanceof sci.impl.types.Reified))?cljs.core.cst$kw$sci$impl$protocols_SLASH_reified:null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var G__1369 = x;
var G__1369__$1 = (((G__1369 == null))?null:cljs.core.meta(G__1369));
if((G__1369__$1 == null)){
return null;
} else {
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__1369__$1);
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.type(x);
}
}
}));

(sci.impl.types.type_impl.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.types.type_impl.cljs$lang$applyTo = (function (seq1366){
var G__1367 = cljs.core.first(seq1366);
var seq1366__$1 = cljs.core.next(seq1366);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1367,seq1366__$1);
}));


/**
* @constructor
 * @implements {sci.impl.types.IBox}
*/
sci.impl.types.EvalForm = (function (form){
this.form = form;
});
(sci.impl.types.EvalForm.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.types.EvalForm.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return self__.form;
}));

(sci.impl.types.EvalForm.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form], null);
}));

(sci.impl.types.EvalForm.cljs$lang$type = true);

(sci.impl.types.EvalForm.cljs$lang$ctorStr = "sci.impl.types/EvalForm");

(sci.impl.types.EvalForm.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"sci.impl.types/EvalForm");
}));

/**
 * Positional factory function for sci.impl.types/EvalForm.
 */
sci.impl.types.__GT_EvalForm = (function sci$impl$types$__GT_EvalForm(form){
return (new sci.impl.types.EvalForm(form));
});


/**
 * @interface
 */
sci.impl.types.Sexpr = function(){};

var sci$impl$types$Sexpr$sexpr$dyn_1373 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (sci.impl.types.sexpr[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (sci.impl.types.sexpr["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Sexpr.sexpr",this$);
}
}
});
sci.impl.types.sexpr = (function sci$impl$types$sexpr(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$types$Sexpr$sexpr$arity$1 == null)))))){
return this$.sci$impl$types$Sexpr$sexpr$arity$1(this$);
} else {
return sci$impl$types$Sexpr$sexpr$dyn_1373(this$);
}
});

goog.object.set(sci.impl.types.Sexpr,"_",true);

goog.object.set(sci.impl.types.sexpr,"_",(function (this$){
return this$;
}));

/**
 * @interface
 */
sci.impl.types.Info = function(){};

var sci$impl$types$Info$info$dyn_1374 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (sci.impl.types.info[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (sci.impl.types.info["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Info.info",this$);
}
}
});
sci.impl.types.info = (function sci$impl$types$info(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$types$Info$info$arity$1 == null)))))){
return this$.sci$impl$types$Info$info$arity$1(this$);
} else {
return sci$impl$types$Info$info$dyn_1374(this$);
}
});


/**
 * @interface
 */
sci.impl.types.Stack = function(){};

var sci$impl$types$Stack$stack$dyn_1375 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (sci.impl.types.stack[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (sci.impl.types.stack["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Stack.stack",this$);
}
}
});
sci.impl.types.stack = (function sci$impl$types$stack(this$){
if((((!((this$ == null)))) && ((!((this$.sci$impl$types$Stack$stack$arity$1 == null)))))){
return this$.sci$impl$types$Stack$stack$arity$1(this$);
} else {
return sci$impl$types$Stack$stack$dyn_1375(this$);
}
});

goog.object.set(sci.impl.types.Stack,"_",true);

goog.object.set(sci.impl.types.stack,"_",(function (this$){
return null;
}));

/**
* @constructor
 * @implements {sci.impl.types.Object}
 * @implements {sci.impl.types.Stack}
 * @implements {cljs.core.IMeta}
 * @implements {sci.impl.types.Info}
 * @implements {sci.impl.types.IBox}
 * @implements {cljs.core.IWithMeta}
 * @implements {sci.impl.types.Sexpr}
*/
sci.impl.types.EvalFn = (function (f,info,expr,stack){
this.f = f;
this.info = info;
this.expr = expr;
this.stack = stack;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(sci.impl.types.EvalFn.prototype.sci$impl$types$IBox$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.types.EvalFn.prototype.sci$impl$types$IBox$getVal$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return self__.f;
}));

(sci.impl.types.EvalFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.meta(self__.expr);
}));

(sci.impl.types.EvalFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_this,m){
var self__ = this;
var _this__$1 = this;
var G__1376 = self__.f;
var G__1377 = self__.info;
var G__1378 = cljs.core.with_meta(self__.expr,m);
var G__1379 = self__.stack;
return (sci.impl.types.__GT_EvalFn.cljs$core$IFn$_invoke$arity$4 ? sci.impl.types.__GT_EvalFn.cljs$core$IFn$_invoke$arity$4(G__1376,G__1377,G__1378,G__1379) : sci.impl.types.__GT_EvalFn.call(null,G__1376,G__1377,G__1378,G__1379));
}));

(sci.impl.types.EvalFn.prototype.sci$impl$types$Info$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.types.EvalFn.prototype.sci$impl$types$Info$info$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.info;
}));

(sci.impl.types.EvalFn.prototype.sci$impl$types$Sexpr$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.types.EvalFn.prototype.sci$impl$types$Sexpr$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.expr;
}));

(sci.impl.types.EvalFn.prototype.toString = (function (){
var self__ = this;
var _this = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.expr);
}));

(sci.impl.types.EvalFn.prototype.sci$impl$types$Stack$ = cljs.core.PROTOCOL_SENTINEL);

(sci.impl.types.EvalFn.prototype.sci$impl$types$Stack$stack$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.stack;
}));

(sci.impl.types.EvalFn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$info,cljs.core.cst$sym$expr,cljs.core.cst$sym$stack], null);
}));

(sci.impl.types.EvalFn.cljs$lang$type = true);

(sci.impl.types.EvalFn.cljs$lang$ctorStr = "sci.impl.types/EvalFn");

(sci.impl.types.EvalFn.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"sci.impl.types/EvalFn");
}));

/**
 * Positional factory function for sci.impl.types/EvalFn.
 */
sci.impl.types.__GT_EvalFn = (function sci$impl$types$__GT_EvalFn(f,info,expr,stack){
return (new sci.impl.types.EvalFn(f,info,expr,stack));
});

