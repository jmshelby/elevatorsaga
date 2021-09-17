// Compiled by ClojureScript 1.10.758 {:static-fns true, :optimize-constants true}
goog.provide('sci.impl.io');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
goog.require('sci.impl.unrestrict');
goog.require('sci.impl.vars');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__2929 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__2930 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__2930);

try{var G__2931 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$_STAR_in_STAR_);
sci.impl.vars.unbind(G__2931);

return G__2931;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__2929);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__2932 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__2933 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__2933);

try{var G__2934 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$_STAR_out_STAR_);
sci.impl.vars.unbind(G__2934);

return G__2934;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__2932);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__2935 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__2936 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__2936);

try{var G__2937 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$_STAR_err_STAR_);
sci.impl.vars.unbind(G__2937);

return G__2937;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__2935);
}})();
sci.impl.io.print_meta = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_STAR_print_DASH_meta_STAR_,false);
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_STAR_print_DASH_length_STAR_,null);
sci.impl.io.print_level = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_STAR_print_DASH_level_STAR_,null);
sci.impl.io.print_namespace_maps = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_STAR_print_DASH_namespace_DASH_maps_STAR_,true);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___2947 = arguments.length;
var i__4737__auto___2948 = (0);
while(true){
if((i__4737__auto___2948 < len__4736__auto___2947)){
args__4742__auto__.push((arguments[i__4737__auto___2948]));

var G__2949 = (i__4737__auto___2948 + (1));
i__4737__auto___2948 = G__2949;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__2939 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__2940 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__2941 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__2942 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__2943 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__2944 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__2945 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__2946 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__2943);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__2944);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__2945);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__2946);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__2942);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__2941);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__2940);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__2939);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq2938){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2938));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
return (sci.impl.io.println.cljs$core$IFn$_invoke$arity$0 ? sci.impl.io.println.cljs$core$IFn$_invoke$arity$0() : sci.impl.io.println.call(null));
});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___2959 = arguments.length;
var i__4737__auto___2960 = (0);
while(true){
if((i__4737__auto___2960 < len__4736__auto___2959)){
args__4742__auto__.push((arguments[i__4737__auto___2960]));

var G__2961 = (i__4737__auto___2960 + (1));
i__4737__auto___2960 = G__2961;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__2951 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__2952 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__2953 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__2954 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__2955 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__2956 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__2957 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__2958 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__2955);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__2956);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__2957);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__2958);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__2954);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__2953);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__2952);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__2951);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq2950){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2950));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___2971 = arguments.length;
var i__4737__auto___2972 = (0);
while(true){
if((i__4737__auto___2972 < len__4736__auto___2971)){
args__4742__auto__.push((arguments[i__4737__auto___2972]));

var G__2973 = (i__4737__auto___2972 + (1));
i__4737__auto___2972 = G__2973;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__2963 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__2964 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__2965 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__2966 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__2967 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__2968 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__2969 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__2970 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__2967);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__2968);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__2969);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__2970);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__2966);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__2965);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__2964);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__2963);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq2962){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2962));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___2983 = arguments.length;
var i__4737__auto___2984 = (0);
while(true){
if((i__4737__auto___2984 < len__4736__auto___2983)){
args__4742__auto__.push((arguments[i__4737__auto___2984]));

var G__2985 = (i__4737__auto___2984 + (1));
i__4737__auto___2984 = G__2985;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__2975 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__2976 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__2977 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__2978 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__2979 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__2980 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__2981 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__2982 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__2979);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__2980);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__2981);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__2982);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__2978);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__2977);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__2976);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__2975);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq2974){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2974));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___2993 = arguments.length;
var i__4737__auto___2994 = (0);
while(true){
if((i__4737__auto___2994 < len__4736__auto___2993)){
args__4742__auto__.push((arguments[i__4737__auto___2994]));

var G__2995 = (i__4737__auto___2994 + (1));
i__4737__auto___2994 = G__2995;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__2987 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__2988 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__2989 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__2990 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__2991 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__2992 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__2990);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__2991);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__2992);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__2989);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__2988);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__2987);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq2986){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2986));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___3005 = arguments.length;
var i__4737__auto___3006 = (0);
while(true){
if((i__4737__auto___3006 < len__4736__auto___3005)){
args__4742__auto__.push((arguments[i__4737__auto___3006]));

var G__3007 = (i__4737__auto___3006 + (1));
i__4737__auto___3006 = G__3007;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__2997 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__2998 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__2999 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__3000 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__3001 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__3002 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__3003 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__3004 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__3001);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__3002);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__3003);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__3004);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__3000);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__2999);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__2998);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__2997);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq2996){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq2996));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___3017 = arguments.length;
var i__4737__auto___3018 = (0);
while(true){
if((i__4737__auto___3018 < len__4736__auto___3017)){
args__4742__auto__.push((arguments[i__4737__auto___3018]));

var G__3019 = (i__4737__auto___3018 + (1));
i__4737__auto___3018 = G__3019;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__3009 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__3010 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__3011 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__3012 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_length_STAR__temp_val__3013 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__3014 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__3015 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__3016 = cljs.core.deref(sci.impl.io.print_namespace_maps);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__3013);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__3014);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__3015);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__3016);

try{cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));

return null;
}finally {(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__3012);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__3011);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__3010);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__3009);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq3008){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq3008));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___3024 = arguments.length;
var i__4737__auto___3025 = (0);
while(true){
if((i__4737__auto___3025 < len__4736__auto___3024)){
args__4742__auto__.push((arguments[i__4737__auto___3025]));

var G__3026 = (i__4737__auto___3025 + (1));
i__4737__auto___3025 = G__3026;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$s__3020__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$new,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$goog$string$StringBuffer,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_binding,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__STAR_out_STAR_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$s__3020__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_str,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$s__3020__auto__,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq3021){
var G__3022 = cljs.core.first(seq3021);
var seq3021__$1 = cljs.core.next(seq3021);
var G__3023 = cljs.core.first(seq3021__$1);
var seq3021__$2 = cljs.core.next(seq3021__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3022,G__3023,seq3021__$2);
}));

