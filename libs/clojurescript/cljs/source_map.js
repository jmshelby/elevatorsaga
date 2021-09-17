// Compiled by ClojureScript 1.10.758 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__3686){
var vec__3687 = p__3686;
var i = cljs.core.nth.call(null,vec__3687,(0),null);
var v = cljs.core.nth.call(null,vec__3687,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__3690 = seg;
var gcol = cljs.core.nth.call(null,vec__3690,(0),null);
var source = cljs.core.nth.call(null,vec__3690,(1),null);
var line = cljs.core.nth.call(null,vec__3690,(2),null);
var col = cljs.core.nth.call(null,vec__3690,(3),null);
var name = cljs.core.nth.call(null,vec__3690,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__5753__auto__)){
var name__$1 = temp__5753__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__3693 = seg;
var gcol = cljs.core.nth.call(null,vec__3693,(0),null);
var source = cljs.core.nth.call(null,vec__3693,(1),null);
var line = cljs.core.nth.call(null,vec__3693,(2),null);
var col = cljs.core.nth.call(null,vec__3693,(3),null);
var name = cljs.core.nth.call(null,vec__3693,(4),null);
var vec__3696 = relseg;
var rgcol = cljs.core.nth.call(null,vec__3696,(0),null);
var rsource = cljs.core.nth.call(null,vec__3696,(1),null);
var rline = cljs.core.nth.call(null,vec__3696,(2),null);
var rcol = cljs.core.nth.call(null,vec__3696,(3),null);
var rname = cljs.core.nth.call(null,vec__3696,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4126__auto__ = col;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__3699 = segmap;
var map__3699__$1 = (((((!((map__3699 == null))))?(((((map__3699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3699):map__3699);
var gcol = cljs.core.get.call(null,map__3699__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__3699__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__3699__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__3699__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__3699__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,(function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,(function (v){
return cljs.core.conj.call(null,v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__3702 = arguments.length;
switch (G__3702) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__3706 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__3710 = cljs.core.next.call(null,segs__$1);
var G__3711 = nrelseg;
var G__3712 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__3710;
relseg__$1 = G__3711;
result__$1 = G__3712;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__3706,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__3706,(1),null);
var G__3713 = (gline + (1));
var G__3714 = cljs.core.next.call(null,lines__$1);
var G__3715 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__3716 = result__$1;
gline = G__3713;
lines__$1 = G__3714;
relseg = G__3715;
result = G__3716;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__3718 = segmap;
var map__3718__$1 = (((((!((map__3718 == null))))?(((((map__3718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3718):map__3718);
var gcol = cljs.core.get.call(null,map__3718__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__3718__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__3718__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__3718__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__3718__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,(function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,(function (p1__3717_SHARP_){
return cljs.core.conj.call(null,p1__3717_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__3721 = arguments.length;
switch (G__3721) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__3725 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__3729 = cljs.core.next.call(null,segs__$1);
var G__3730 = nrelseg;
var G__3731 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__3729;
relseg__$1 = G__3730;
result__$1 = G__3731;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__3725,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__3725,(1),null);
var G__3732 = (gline + (1));
var G__3733 = cljs.core.next.call(null,lines__$1);
var G__3734 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__3735 = result__$1;
gline = G__3732;
lines__$1 = G__3733;
relseg = G__3734;
result = G__3735;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,(function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,(function (p__3736){
var vec__3737 = p__3736;
var _ = cljs.core.nth.call(null,vec__3737,(0),null);
var source = cljs.core.nth.call(null,vec__3737,(1),null);
var line = cljs.core.nth.call(null,vec__3737,(2),null);
var col = cljs.core.nth.call(null,vec__3737,(3),null);
var name = cljs.core.nth.call(null,vec__3737,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,(function (cols__$1,p__3740){
var vec__3741 = p__3740;
var gcol = cljs.core.nth.call(null,vec__3741,(0),null);
var sidx = cljs.core.nth.call(null,vec__3741,(1),null);
var line = cljs.core.nth.call(null,vec__3741,(2),null);
var col = cljs.core.nth.call(null,vec__3741,(3),null);
var name = cljs.core.nth.call(null,vec__3741,(4),null);
var seg = vec__3741;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,(function (p__3744){
var vec__3745 = p__3744;
var _ = cljs.core.nth.call(null,vec__3745,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__3745,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__3745,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__3745,(3),null);
var lname = cljs.core.nth.call(null,vec__3745,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5751__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5751__auto__)){
var name = temp__5751__auto__;
var idx = (function (){var temp__5751__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__5751__auto____$1)){
var idx = temp__5751__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__3751 = cljs.core.seq.call(null,infos);
var chunk__3752 = null;
var count__3753 = (0);
var i__3754 = (0);
while(true){
if((i__3754 < count__3753)){
var info = cljs.core._nth.call(null,chunk__3752,i__3754);
var segv_4105 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_4106 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_4107 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_4106 > (lc_4107 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__3751,chunk__3752,count__3753,i__3754,segv_4105,gline_4106,lc_4107,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_4106 - (lc_4107 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_4105], null));
});})(seq__3751,chunk__3752,count__3753,i__3754,segv_4105,gline_4106,lc_4107,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__3751,chunk__3752,count__3753,i__3754,segv_4105,gline_4106,lc_4107,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4106], null),cljs.core.conj,segv_4105);
});})(seq__3751,chunk__3752,count__3753,i__3754,segv_4105,gline_4106,lc_4107,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__4108 = seq__3751;
var G__4109 = chunk__3752;
var G__4110 = count__3753;
var G__4111 = (i__3754 + (1));
seq__3751 = G__4108;
chunk__3752 = G__4109;
count__3753 = G__4110;
i__3754 = G__4111;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq.call(null,seq__3751);
if(temp__5753__auto__){
var seq__3751__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3751__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__3751__$1);
var G__4112 = cljs.core.chunk_rest.call(null,seq__3751__$1);
var G__4113 = c__4556__auto__;
var G__4114 = cljs.core.count.call(null,c__4556__auto__);
var G__4115 = (0);
seq__3751 = G__4112;
chunk__3752 = G__4113;
count__3753 = G__4114;
i__3754 = G__4115;
continue;
} else {
var info = cljs.core.first.call(null,seq__3751__$1);
var segv_4116 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_4117 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_4118 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_4117 > (lc_4118 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__3751,chunk__3752,count__3753,i__3754,segv_4116,gline_4117,lc_4118,info,seq__3751__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_4117 - (lc_4118 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_4116], null));
});})(seq__3751,chunk__3752,count__3753,i__3754,segv_4116,gline_4117,lc_4118,info,seq__3751__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__3751,chunk__3752,count__3753,i__3754,segv_4116,gline_4117,lc_4118,info,seq__3751__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4117], null),cljs.core.conj,segv_4116);
});})(seq__3751,chunk__3752,count__3753,i__3754,segv_4116,gline_4117,lc_4118,info,seq__3751__$1,temp__5753__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__4119 = cljs.core.next.call(null,seq__3751__$1);
var G__4120 = null;
var G__4121 = (0);
var G__4122 = (0);
seq__3751 = G__4119;
chunk__3752 = G__4120;
count__3753 = G__4121;
i__3754 = G__4122;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__3755_4123 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__3756_4124 = null;
var count__3757_4125 = (0);
var i__3758_4126 = (0);
while(true){
if((i__3758_4126 < count__3757_4125)){
var vec__3931_4127 = cljs.core._nth.call(null,chunk__3756_4124,i__3758_4126);
var source_idx_4128 = cljs.core.nth.call(null,vec__3931_4127,(0),null);
var vec__3934_4129 = cljs.core.nth.call(null,vec__3931_4127,(1),null);
var __4130 = cljs.core.nth.call(null,vec__3934_4129,(0),null);
var lines_4131__$1 = cljs.core.nth.call(null,vec__3934_4129,(1),null);
var seq__3937_4132 = cljs.core.seq.call(null,lines_4131__$1);
var chunk__3938_4133 = null;
var count__3939_4134 = (0);
var i__3940_4135 = (0);
while(true){
if((i__3940_4135 < count__3939_4134)){
var vec__3979_4136 = cljs.core._nth.call(null,chunk__3938_4133,i__3940_4135);
var line_4137 = cljs.core.nth.call(null,vec__3979_4136,(0),null);
var cols_4138 = cljs.core.nth.call(null,vec__3979_4136,(1),null);
var seq__3982_4139 = cljs.core.seq.call(null,cols_4138);
var chunk__3983_4140 = null;
var count__3984_4141 = (0);
var i__3985_4142 = (0);
while(true){
if((i__3985_4142 < count__3984_4141)){
var vec__3992_4143 = cljs.core._nth.call(null,chunk__3983_4140,i__3985_4142);
var col_4144 = cljs.core.nth.call(null,vec__3992_4143,(0),null);
var infos_4145 = cljs.core.nth.call(null,vec__3992_4143,(1),null);
encode_cols.call(null,infos_4145,source_idx_4128,line_4137,col_4144);


var G__4146 = seq__3982_4139;
var G__4147 = chunk__3983_4140;
var G__4148 = count__3984_4141;
var G__4149 = (i__3985_4142 + (1));
seq__3982_4139 = G__4146;
chunk__3983_4140 = G__4147;
count__3984_4141 = G__4148;
i__3985_4142 = G__4149;
continue;
} else {
var temp__5753__auto___4150 = cljs.core.seq.call(null,seq__3982_4139);
if(temp__5753__auto___4150){
var seq__3982_4151__$1 = temp__5753__auto___4150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3982_4151__$1)){
var c__4556__auto___4152 = cljs.core.chunk_first.call(null,seq__3982_4151__$1);
var G__4153 = cljs.core.chunk_rest.call(null,seq__3982_4151__$1);
var G__4154 = c__4556__auto___4152;
var G__4155 = cljs.core.count.call(null,c__4556__auto___4152);
var G__4156 = (0);
seq__3982_4139 = G__4153;
chunk__3983_4140 = G__4154;
count__3984_4141 = G__4155;
i__3985_4142 = G__4156;
continue;
} else {
var vec__3995_4157 = cljs.core.first.call(null,seq__3982_4151__$1);
var col_4158 = cljs.core.nth.call(null,vec__3995_4157,(0),null);
var infos_4159 = cljs.core.nth.call(null,vec__3995_4157,(1),null);
encode_cols.call(null,infos_4159,source_idx_4128,line_4137,col_4158);


var G__4160 = cljs.core.next.call(null,seq__3982_4151__$1);
var G__4161 = null;
var G__4162 = (0);
var G__4163 = (0);
seq__3982_4139 = G__4160;
chunk__3983_4140 = G__4161;
count__3984_4141 = G__4162;
i__3985_4142 = G__4163;
continue;
}
} else {
}
}
break;
}


var G__4164 = seq__3937_4132;
var G__4165 = chunk__3938_4133;
var G__4166 = count__3939_4134;
var G__4167 = (i__3940_4135 + (1));
seq__3937_4132 = G__4164;
chunk__3938_4133 = G__4165;
count__3939_4134 = G__4166;
i__3940_4135 = G__4167;
continue;
} else {
var temp__5753__auto___4168 = cljs.core.seq.call(null,seq__3937_4132);
if(temp__5753__auto___4168){
var seq__3937_4169__$1 = temp__5753__auto___4168;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3937_4169__$1)){
var c__4556__auto___4170 = cljs.core.chunk_first.call(null,seq__3937_4169__$1);
var G__4171 = cljs.core.chunk_rest.call(null,seq__3937_4169__$1);
var G__4172 = c__4556__auto___4170;
var G__4173 = cljs.core.count.call(null,c__4556__auto___4170);
var G__4174 = (0);
seq__3937_4132 = G__4171;
chunk__3938_4133 = G__4172;
count__3939_4134 = G__4173;
i__3940_4135 = G__4174;
continue;
} else {
var vec__3998_4175 = cljs.core.first.call(null,seq__3937_4169__$1);
var line_4176 = cljs.core.nth.call(null,vec__3998_4175,(0),null);
var cols_4177 = cljs.core.nth.call(null,vec__3998_4175,(1),null);
var seq__4001_4178 = cljs.core.seq.call(null,cols_4177);
var chunk__4002_4179 = null;
var count__4003_4180 = (0);
var i__4004_4181 = (0);
while(true){
if((i__4004_4181 < count__4003_4180)){
var vec__4011_4182 = cljs.core._nth.call(null,chunk__4002_4179,i__4004_4181);
var col_4183 = cljs.core.nth.call(null,vec__4011_4182,(0),null);
var infos_4184 = cljs.core.nth.call(null,vec__4011_4182,(1),null);
encode_cols.call(null,infos_4184,source_idx_4128,line_4176,col_4183);


var G__4185 = seq__4001_4178;
var G__4186 = chunk__4002_4179;
var G__4187 = count__4003_4180;
var G__4188 = (i__4004_4181 + (1));
seq__4001_4178 = G__4185;
chunk__4002_4179 = G__4186;
count__4003_4180 = G__4187;
i__4004_4181 = G__4188;
continue;
} else {
var temp__5753__auto___4189__$1 = cljs.core.seq.call(null,seq__4001_4178);
if(temp__5753__auto___4189__$1){
var seq__4001_4190__$1 = temp__5753__auto___4189__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4001_4190__$1)){
var c__4556__auto___4191 = cljs.core.chunk_first.call(null,seq__4001_4190__$1);
var G__4192 = cljs.core.chunk_rest.call(null,seq__4001_4190__$1);
var G__4193 = c__4556__auto___4191;
var G__4194 = cljs.core.count.call(null,c__4556__auto___4191);
var G__4195 = (0);
seq__4001_4178 = G__4192;
chunk__4002_4179 = G__4193;
count__4003_4180 = G__4194;
i__4004_4181 = G__4195;
continue;
} else {
var vec__4014_4196 = cljs.core.first.call(null,seq__4001_4190__$1);
var col_4197 = cljs.core.nth.call(null,vec__4014_4196,(0),null);
var infos_4198 = cljs.core.nth.call(null,vec__4014_4196,(1),null);
encode_cols.call(null,infos_4198,source_idx_4128,line_4176,col_4197);


var G__4199 = cljs.core.next.call(null,seq__4001_4190__$1);
var G__4200 = null;
var G__4201 = (0);
var G__4202 = (0);
seq__4001_4178 = G__4199;
chunk__4002_4179 = G__4200;
count__4003_4180 = G__4201;
i__4004_4181 = G__4202;
continue;
}
} else {
}
}
break;
}


var G__4203 = cljs.core.next.call(null,seq__3937_4169__$1);
var G__4204 = null;
var G__4205 = (0);
var G__4206 = (0);
seq__3937_4132 = G__4203;
chunk__3938_4133 = G__4204;
count__3939_4134 = G__4205;
i__3940_4135 = G__4206;
continue;
}
} else {
}
}
break;
}


var G__4207 = seq__3755_4123;
var G__4208 = chunk__3756_4124;
var G__4209 = count__3757_4125;
var G__4210 = (i__3758_4126 + (1));
seq__3755_4123 = G__4207;
chunk__3756_4124 = G__4208;
count__3757_4125 = G__4209;
i__3758_4126 = G__4210;
continue;
} else {
var temp__5753__auto___4211 = cljs.core.seq.call(null,seq__3755_4123);
if(temp__5753__auto___4211){
var seq__3755_4212__$1 = temp__5753__auto___4211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3755_4212__$1)){
var c__4556__auto___4213 = cljs.core.chunk_first.call(null,seq__3755_4212__$1);
var G__4214 = cljs.core.chunk_rest.call(null,seq__3755_4212__$1);
var G__4215 = c__4556__auto___4213;
var G__4216 = cljs.core.count.call(null,c__4556__auto___4213);
var G__4217 = (0);
seq__3755_4123 = G__4214;
chunk__3756_4124 = G__4215;
count__3757_4125 = G__4216;
i__3758_4126 = G__4217;
continue;
} else {
var vec__4017_4218 = cljs.core.first.call(null,seq__3755_4212__$1);
var source_idx_4219 = cljs.core.nth.call(null,vec__4017_4218,(0),null);
var vec__4020_4220 = cljs.core.nth.call(null,vec__4017_4218,(1),null);
var __4221 = cljs.core.nth.call(null,vec__4020_4220,(0),null);
var lines_4222__$1 = cljs.core.nth.call(null,vec__4020_4220,(1),null);
var seq__4023_4223 = cljs.core.seq.call(null,lines_4222__$1);
var chunk__4024_4224 = null;
var count__4025_4225 = (0);
var i__4026_4226 = (0);
while(true){
if((i__4026_4226 < count__4025_4225)){
var vec__4065_4227 = cljs.core._nth.call(null,chunk__4024_4224,i__4026_4226);
var line_4228 = cljs.core.nth.call(null,vec__4065_4227,(0),null);
var cols_4229 = cljs.core.nth.call(null,vec__4065_4227,(1),null);
var seq__4068_4230 = cljs.core.seq.call(null,cols_4229);
var chunk__4069_4231 = null;
var count__4070_4232 = (0);
var i__4071_4233 = (0);
while(true){
if((i__4071_4233 < count__4070_4232)){
var vec__4078_4234 = cljs.core._nth.call(null,chunk__4069_4231,i__4071_4233);
var col_4235 = cljs.core.nth.call(null,vec__4078_4234,(0),null);
var infos_4236 = cljs.core.nth.call(null,vec__4078_4234,(1),null);
encode_cols.call(null,infos_4236,source_idx_4219,line_4228,col_4235);


var G__4237 = seq__4068_4230;
var G__4238 = chunk__4069_4231;
var G__4239 = count__4070_4232;
var G__4240 = (i__4071_4233 + (1));
seq__4068_4230 = G__4237;
chunk__4069_4231 = G__4238;
count__4070_4232 = G__4239;
i__4071_4233 = G__4240;
continue;
} else {
var temp__5753__auto___4241__$1 = cljs.core.seq.call(null,seq__4068_4230);
if(temp__5753__auto___4241__$1){
var seq__4068_4242__$1 = temp__5753__auto___4241__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4068_4242__$1)){
var c__4556__auto___4243 = cljs.core.chunk_first.call(null,seq__4068_4242__$1);
var G__4244 = cljs.core.chunk_rest.call(null,seq__4068_4242__$1);
var G__4245 = c__4556__auto___4243;
var G__4246 = cljs.core.count.call(null,c__4556__auto___4243);
var G__4247 = (0);
seq__4068_4230 = G__4244;
chunk__4069_4231 = G__4245;
count__4070_4232 = G__4246;
i__4071_4233 = G__4247;
continue;
} else {
var vec__4081_4248 = cljs.core.first.call(null,seq__4068_4242__$1);
var col_4249 = cljs.core.nth.call(null,vec__4081_4248,(0),null);
var infos_4250 = cljs.core.nth.call(null,vec__4081_4248,(1),null);
encode_cols.call(null,infos_4250,source_idx_4219,line_4228,col_4249);


var G__4251 = cljs.core.next.call(null,seq__4068_4242__$1);
var G__4252 = null;
var G__4253 = (0);
var G__4254 = (0);
seq__4068_4230 = G__4251;
chunk__4069_4231 = G__4252;
count__4070_4232 = G__4253;
i__4071_4233 = G__4254;
continue;
}
} else {
}
}
break;
}


var G__4255 = seq__4023_4223;
var G__4256 = chunk__4024_4224;
var G__4257 = count__4025_4225;
var G__4258 = (i__4026_4226 + (1));
seq__4023_4223 = G__4255;
chunk__4024_4224 = G__4256;
count__4025_4225 = G__4257;
i__4026_4226 = G__4258;
continue;
} else {
var temp__5753__auto___4259__$1 = cljs.core.seq.call(null,seq__4023_4223);
if(temp__5753__auto___4259__$1){
var seq__4023_4260__$1 = temp__5753__auto___4259__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4023_4260__$1)){
var c__4556__auto___4261 = cljs.core.chunk_first.call(null,seq__4023_4260__$1);
var G__4262 = cljs.core.chunk_rest.call(null,seq__4023_4260__$1);
var G__4263 = c__4556__auto___4261;
var G__4264 = cljs.core.count.call(null,c__4556__auto___4261);
var G__4265 = (0);
seq__4023_4223 = G__4262;
chunk__4024_4224 = G__4263;
count__4025_4225 = G__4264;
i__4026_4226 = G__4265;
continue;
} else {
var vec__4084_4266 = cljs.core.first.call(null,seq__4023_4260__$1);
var line_4267 = cljs.core.nth.call(null,vec__4084_4266,(0),null);
var cols_4268 = cljs.core.nth.call(null,vec__4084_4266,(1),null);
var seq__4087_4269 = cljs.core.seq.call(null,cols_4268);
var chunk__4088_4270 = null;
var count__4089_4271 = (0);
var i__4090_4272 = (0);
while(true){
if((i__4090_4272 < count__4089_4271)){
var vec__4097_4273 = cljs.core._nth.call(null,chunk__4088_4270,i__4090_4272);
var col_4274 = cljs.core.nth.call(null,vec__4097_4273,(0),null);
var infos_4275 = cljs.core.nth.call(null,vec__4097_4273,(1),null);
encode_cols.call(null,infos_4275,source_idx_4219,line_4267,col_4274);


var G__4276 = seq__4087_4269;
var G__4277 = chunk__4088_4270;
var G__4278 = count__4089_4271;
var G__4279 = (i__4090_4272 + (1));
seq__4087_4269 = G__4276;
chunk__4088_4270 = G__4277;
count__4089_4271 = G__4278;
i__4090_4272 = G__4279;
continue;
} else {
var temp__5753__auto___4280__$2 = cljs.core.seq.call(null,seq__4087_4269);
if(temp__5753__auto___4280__$2){
var seq__4087_4281__$1 = temp__5753__auto___4280__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4087_4281__$1)){
var c__4556__auto___4282 = cljs.core.chunk_first.call(null,seq__4087_4281__$1);
var G__4283 = cljs.core.chunk_rest.call(null,seq__4087_4281__$1);
var G__4284 = c__4556__auto___4282;
var G__4285 = cljs.core.count.call(null,c__4556__auto___4282);
var G__4286 = (0);
seq__4087_4269 = G__4283;
chunk__4088_4270 = G__4284;
count__4089_4271 = G__4285;
i__4090_4272 = G__4286;
continue;
} else {
var vec__4100_4287 = cljs.core.first.call(null,seq__4087_4281__$1);
var col_4288 = cljs.core.nth.call(null,vec__4100_4287,(0),null);
var infos_4289 = cljs.core.nth.call(null,vec__4100_4287,(1),null);
encode_cols.call(null,infos_4289,source_idx_4219,line_4267,col_4288);


var G__4290 = cljs.core.next.call(null,seq__4087_4281__$1);
var G__4291 = null;
var G__4292 = (0);
var G__4293 = (0);
seq__4087_4269 = G__4290;
chunk__4088_4270 = G__4291;
count__4089_4271 = G__4292;
i__4090_4272 = G__4293;
continue;
}
} else {
}
}
break;
}


var G__4294 = cljs.core.next.call(null,seq__4023_4260__$1);
var G__4295 = null;
var G__4296 = (0);
var G__4297 = (0);
seq__4023_4223 = G__4294;
chunk__4024_4224 = G__4295;
count__4025_4225 = G__4296;
i__4026_4226 = G__4297;
continue;
}
} else {
}
}
break;
}


var G__4298 = cljs.core.next.call(null,seq__3755_4212__$1);
var G__4299 = null;
var G__4300 = (0);
var G__4301 = (0);
seq__3755_4123 = G__4298;
chunk__3756_4124 = G__4299;
count__3757_4125 = G__4300;
i__3758_4126 = G__4301;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__4103 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__3748_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__3748_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__3749_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__3749_SHARP_,/\//));
}));
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,(function (p1__3750_SHARP_){
return clojure.string.join.call(null,",",p1__3750_SHARP_);
}),cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__4104 = G__4103;
goog.object.set(G__4104,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__4104;
} else {
return G__4103;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__4302 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__4302,(0),null);
var col_map = cljs.core.nth.call(null,vec__4302,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__4305 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__4305,(0),null);
var infos = cljs.core.nth.call(null,vec__4305,(1),null);
var G__4311 = cljs.core.next.call(null,col_map_seq);
var G__4312 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__4305,col,infos,vec__4302,line,col_map){
return (function (v,p__4308){
var map__4309 = p__4308;
var map__4309__$1 = (((((!((map__4309 == null))))?(((((map__4309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4309):map__4309);
var gline = cljs.core.get.call(null,map__4309__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__4309__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__4305,col,infos,vec__4302,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__4311;
new_cols = G__4312;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__4313 = cljs.core.next.call(null,line_map_seq);
var G__4314 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__4313;
new_lines = G__4314;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__4315_4587 = cljs.core.seq.call(null,reverse_map);
var chunk__4316_4588 = null;
var count__4317_4589 = (0);
var i__4318_4590 = (0);
while(true){
if((i__4318_4590 < count__4317_4589)){
var vec__4453_4591 = cljs.core._nth.call(null,chunk__4316_4588,i__4318_4590);
var line_4592 = cljs.core.nth.call(null,vec__4453_4591,(0),null);
var columns_4593 = cljs.core.nth.call(null,vec__4453_4591,(1),null);
var seq__4456_4594 = cljs.core.seq.call(null,columns_4593);
var chunk__4457_4595 = null;
var count__4458_4596 = (0);
var i__4459_4597 = (0);
while(true){
if((i__4459_4597 < count__4458_4596)){
var vec__4490_4598 = cljs.core._nth.call(null,chunk__4457_4595,i__4459_4597);
var column_4599 = cljs.core.nth.call(null,vec__4490_4598,(0),null);
var column_info_4600 = cljs.core.nth.call(null,vec__4490_4598,(1),null);
var seq__4493_4601 = cljs.core.seq.call(null,column_info_4600);
var chunk__4494_4602 = null;
var count__4495_4603 = (0);
var i__4496_4604 = (0);
while(true){
if((i__4496_4604 < count__4495_4603)){
var map__4501_4605 = cljs.core._nth.call(null,chunk__4494_4602,i__4496_4604);
var map__4501_4606__$1 = (((((!((map__4501_4605 == null))))?(((((map__4501_4605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4501_4605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4501_4605):map__4501_4605);
var gline_4607 = cljs.core.get.call(null,map__4501_4606__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_4608 = cljs.core.get.call(null,map__4501_4606__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_4609 = cljs.core.get.call(null,map__4501_4606__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4607], null),cljs.core.fnil.call(null,((function (seq__4493_4601,chunk__4494_4602,count__4495_4603,i__4496_4604,seq__4456_4594,chunk__4457_4595,count__4458_4596,i__4459_4597,seq__4315_4587,chunk__4316_4588,count__4317_4589,i__4318_4590,map__4501_4605,map__4501_4606__$1,gline_4607,gcol_4608,name_4609,vec__4490_4598,column_4599,column_info_4600,vec__4453_4591,line_4592,columns_4593,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_4608], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4592,new cljs.core.Keyword(null,"col","col",-1959363084),column_4599,new cljs.core.Keyword(null,"name","name",1843675177),name_4609], null));
});})(seq__4493_4601,chunk__4494_4602,count__4495_4603,i__4496_4604,seq__4456_4594,chunk__4457_4595,count__4458_4596,i__4459_4597,seq__4315_4587,chunk__4316_4588,count__4317_4589,i__4318_4590,map__4501_4605,map__4501_4606__$1,gline_4607,gcol_4608,name_4609,vec__4490_4598,column_4599,column_info_4600,vec__4453_4591,line_4592,columns_4593,inverted))
,cljs.core.sorted_map.call(null)));


var G__4610 = seq__4493_4601;
var G__4611 = chunk__4494_4602;
var G__4612 = count__4495_4603;
var G__4613 = (i__4496_4604 + (1));
seq__4493_4601 = G__4610;
chunk__4494_4602 = G__4611;
count__4495_4603 = G__4612;
i__4496_4604 = G__4613;
continue;
} else {
var temp__5753__auto___4614 = cljs.core.seq.call(null,seq__4493_4601);
if(temp__5753__auto___4614){
var seq__4493_4615__$1 = temp__5753__auto___4614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4493_4615__$1)){
var c__4556__auto___4616 = cljs.core.chunk_first.call(null,seq__4493_4615__$1);
var G__4617 = cljs.core.chunk_rest.call(null,seq__4493_4615__$1);
var G__4618 = c__4556__auto___4616;
var G__4619 = cljs.core.count.call(null,c__4556__auto___4616);
var G__4620 = (0);
seq__4493_4601 = G__4617;
chunk__4494_4602 = G__4618;
count__4495_4603 = G__4619;
i__4496_4604 = G__4620;
continue;
} else {
var map__4503_4621 = cljs.core.first.call(null,seq__4493_4615__$1);
var map__4503_4622__$1 = (((((!((map__4503_4621 == null))))?(((((map__4503_4621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4503_4621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4503_4621):map__4503_4621);
var gline_4623 = cljs.core.get.call(null,map__4503_4622__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_4624 = cljs.core.get.call(null,map__4503_4622__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_4625 = cljs.core.get.call(null,map__4503_4622__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4623], null),cljs.core.fnil.call(null,((function (seq__4493_4601,chunk__4494_4602,count__4495_4603,i__4496_4604,seq__4456_4594,chunk__4457_4595,count__4458_4596,i__4459_4597,seq__4315_4587,chunk__4316_4588,count__4317_4589,i__4318_4590,map__4503_4621,map__4503_4622__$1,gline_4623,gcol_4624,name_4625,seq__4493_4615__$1,temp__5753__auto___4614,vec__4490_4598,column_4599,column_info_4600,vec__4453_4591,line_4592,columns_4593,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_4624], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4592,new cljs.core.Keyword(null,"col","col",-1959363084),column_4599,new cljs.core.Keyword(null,"name","name",1843675177),name_4625], null));
});})(seq__4493_4601,chunk__4494_4602,count__4495_4603,i__4496_4604,seq__4456_4594,chunk__4457_4595,count__4458_4596,i__4459_4597,seq__4315_4587,chunk__4316_4588,count__4317_4589,i__4318_4590,map__4503_4621,map__4503_4622__$1,gline_4623,gcol_4624,name_4625,seq__4493_4615__$1,temp__5753__auto___4614,vec__4490_4598,column_4599,column_info_4600,vec__4453_4591,line_4592,columns_4593,inverted))
,cljs.core.sorted_map.call(null)));


var G__4626 = cljs.core.next.call(null,seq__4493_4615__$1);
var G__4627 = null;
var G__4628 = (0);
var G__4629 = (0);
seq__4493_4601 = G__4626;
chunk__4494_4602 = G__4627;
count__4495_4603 = G__4628;
i__4496_4604 = G__4629;
continue;
}
} else {
}
}
break;
}


var G__4630 = seq__4456_4594;
var G__4631 = chunk__4457_4595;
var G__4632 = count__4458_4596;
var G__4633 = (i__4459_4597 + (1));
seq__4456_4594 = G__4630;
chunk__4457_4595 = G__4631;
count__4458_4596 = G__4632;
i__4459_4597 = G__4633;
continue;
} else {
var temp__5753__auto___4634 = cljs.core.seq.call(null,seq__4456_4594);
if(temp__5753__auto___4634){
var seq__4456_4635__$1 = temp__5753__auto___4634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4456_4635__$1)){
var c__4556__auto___4636 = cljs.core.chunk_first.call(null,seq__4456_4635__$1);
var G__4637 = cljs.core.chunk_rest.call(null,seq__4456_4635__$1);
var G__4638 = c__4556__auto___4636;
var G__4639 = cljs.core.count.call(null,c__4556__auto___4636);
var G__4640 = (0);
seq__4456_4594 = G__4637;
chunk__4457_4595 = G__4638;
count__4458_4596 = G__4639;
i__4459_4597 = G__4640;
continue;
} else {
var vec__4505_4641 = cljs.core.first.call(null,seq__4456_4635__$1);
var column_4642 = cljs.core.nth.call(null,vec__4505_4641,(0),null);
var column_info_4643 = cljs.core.nth.call(null,vec__4505_4641,(1),null);
var seq__4508_4644 = cljs.core.seq.call(null,column_info_4643);
var chunk__4509_4645 = null;
var count__4510_4646 = (0);
var i__4511_4647 = (0);
while(true){
if((i__4511_4647 < count__4510_4646)){
var map__4516_4648 = cljs.core._nth.call(null,chunk__4509_4645,i__4511_4647);
var map__4516_4649__$1 = (((((!((map__4516_4648 == null))))?(((((map__4516_4648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4516_4648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4516_4648):map__4516_4648);
var gline_4650 = cljs.core.get.call(null,map__4516_4649__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_4651 = cljs.core.get.call(null,map__4516_4649__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_4652 = cljs.core.get.call(null,map__4516_4649__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4650], null),cljs.core.fnil.call(null,((function (seq__4508_4644,chunk__4509_4645,count__4510_4646,i__4511_4647,seq__4456_4594,chunk__4457_4595,count__4458_4596,i__4459_4597,seq__4315_4587,chunk__4316_4588,count__4317_4589,i__4318_4590,map__4516_4648,map__4516_4649__$1,gline_4650,gcol_4651,name_4652,vec__4505_4641,column_4642,column_info_4643,seq__4456_4635__$1,temp__5753__auto___4634,vec__4453_4591,line_4592,columns_4593,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_4651], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4592,new cljs.core.Keyword(null,"col","col",-1959363084),column_4642,new cljs.core.Keyword(null,"name","name",1843675177),name_4652], null));
});})(seq__4508_4644,chunk__4509_4645,count__4510_4646,i__4511_4647,seq__4456_4594,chunk__4457_4595,count__4458_4596,i__4459_4597,seq__4315_4587,chunk__4316_4588,count__4317_4589,i__4318_4590,map__4516_4648,map__4516_4649__$1,gline_4650,gcol_4651,name_4652,vec__4505_4641,column_4642,column_info_4643,seq__4456_4635__$1,temp__5753__auto___4634,vec__4453_4591,line_4592,columns_4593,inverted))
,cljs.core.sorted_map.call(null)));


var G__4653 = seq__4508_4644;
var G__4654 = chunk__4509_4645;
var G__4655 = count__4510_4646;
var G__4656 = (i__4511_4647 + (1));
seq__4508_4644 = G__4653;
chunk__4509_4645 = G__4654;
count__4510_4646 = G__4655;
i__4511_4647 = G__4656;
continue;
} else {
var temp__5753__auto___4657__$1 = cljs.core.seq.call(null,seq__4508_4644);
if(temp__5753__auto___4657__$1){
var seq__4508_4658__$1 = temp__5753__auto___4657__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4508_4658__$1)){
var c__4556__auto___4659 = cljs.core.chunk_first.call(null,seq__4508_4658__$1);
var G__4660 = cljs.core.chunk_rest.call(null,seq__4508_4658__$1);
var G__4661 = c__4556__auto___4659;
var G__4662 = cljs.core.count.call(null,c__4556__auto___4659);
var G__4663 = (0);
seq__4508_4644 = G__4660;
chunk__4509_4645 = G__4661;
count__4510_4646 = G__4662;
i__4511_4647 = G__4663;
continue;
} else {
var map__4518_4664 = cljs.core.first.call(null,seq__4508_4658__$1);
var map__4518_4665__$1 = (((((!((map__4518_4664 == null))))?(((((map__4518_4664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4518_4664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4518_4664):map__4518_4664);
var gline_4666 = cljs.core.get.call(null,map__4518_4665__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_4667 = cljs.core.get.call(null,map__4518_4665__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_4668 = cljs.core.get.call(null,map__4518_4665__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4666], null),cljs.core.fnil.call(null,((function (seq__4508_4644,chunk__4509_4645,count__4510_4646,i__4511_4647,seq__4456_4594,chunk__4457_4595,count__4458_4596,i__4459_4597,seq__4315_4587,chunk__4316_4588,count__4317_4589,i__4318_4590,map__4518_4664,map__4518_4665__$1,gline_4666,gcol_4667,name_4668,seq__4508_4658__$1,temp__5753__auto___4657__$1,vec__4505_4641,column_4642,column_info_4643,seq__4456_4635__$1,temp__5753__auto___4634,vec__4453_4591,line_4592,columns_4593,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_4667], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4592,new cljs.core.Keyword(null,"col","col",-1959363084),column_4642,new cljs.core.Keyword(null,"name","name",1843675177),name_4668], null));
});})(seq__4508_4644,chunk__4509_4645,count__4510_4646,i__4511_4647,seq__4456_4594,chunk__4457_4595,count__4458_4596,i__4459_4597,seq__4315_4587,chunk__4316_4588,count__4317_4589,i__4318_4590,map__4518_4664,map__4518_4665__$1,gline_4666,gcol_4667,name_4668,seq__4508_4658__$1,temp__5753__auto___4657__$1,vec__4505_4641,column_4642,column_info_4643,seq__4456_4635__$1,temp__5753__auto___4634,vec__4453_4591,line_4592,columns_4593,inverted))
,cljs.core.sorted_map.call(null)));


var G__4669 = cljs.core.next.call(null,seq__4508_4658__$1);
var G__4670 = null;
var G__4671 = (0);
var G__4672 = (0);
seq__4508_4644 = G__4669;
chunk__4509_4645 = G__4670;
count__4510_4646 = G__4671;
i__4511_4647 = G__4672;
continue;
}
} else {
}
}
break;
}


var G__4673 = cljs.core.next.call(null,seq__4456_4635__$1);
var G__4674 = null;
var G__4675 = (0);
var G__4676 = (0);
seq__4456_4594 = G__4673;
chunk__4457_4595 = G__4674;
count__4458_4596 = G__4675;
i__4459_4597 = G__4676;
continue;
}
} else {
}
}
break;
}


var G__4677 = seq__4315_4587;
var G__4678 = chunk__4316_4588;
var G__4679 = count__4317_4589;
var G__4680 = (i__4318_4590 + (1));
seq__4315_4587 = G__4677;
chunk__4316_4588 = G__4678;
count__4317_4589 = G__4679;
i__4318_4590 = G__4680;
continue;
} else {
var temp__5753__auto___4681 = cljs.core.seq.call(null,seq__4315_4587);
if(temp__5753__auto___4681){
var seq__4315_4682__$1 = temp__5753__auto___4681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4315_4682__$1)){
var c__4556__auto___4683 = cljs.core.chunk_first.call(null,seq__4315_4682__$1);
var G__4684 = cljs.core.chunk_rest.call(null,seq__4315_4682__$1);
var G__4685 = c__4556__auto___4683;
var G__4686 = cljs.core.count.call(null,c__4556__auto___4683);
var G__4687 = (0);
seq__4315_4587 = G__4684;
chunk__4316_4588 = G__4685;
count__4317_4589 = G__4686;
i__4318_4590 = G__4687;
continue;
} else {
var vec__4520_4688 = cljs.core.first.call(null,seq__4315_4682__$1);
var line_4689 = cljs.core.nth.call(null,vec__4520_4688,(0),null);
var columns_4690 = cljs.core.nth.call(null,vec__4520_4688,(1),null);
var seq__4523_4691 = cljs.core.seq.call(null,columns_4690);
var chunk__4524_4692 = null;
var count__4525_4693 = (0);
var i__4526_4694 = (0);
while(true){
if((i__4526_4694 < count__4525_4693)){
var vec__4557_4695 = cljs.core._nth.call(null,chunk__4524_4692,i__4526_4694);
var column_4696 = cljs.core.nth.call(null,vec__4557_4695,(0),null);
var column_info_4697 = cljs.core.nth.call(null,vec__4557_4695,(1),null);
var seq__4560_4698 = cljs.core.seq.call(null,column_info_4697);
var chunk__4561_4699 = null;
var count__4562_4700 = (0);
var i__4563_4701 = (0);
while(true){
if((i__4563_4701 < count__4562_4700)){
var map__4568_4702 = cljs.core._nth.call(null,chunk__4561_4699,i__4563_4701);
var map__4568_4703__$1 = (((((!((map__4568_4702 == null))))?(((((map__4568_4702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4568_4702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4568_4702):map__4568_4702);
var gline_4704 = cljs.core.get.call(null,map__4568_4703__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_4705 = cljs.core.get.call(null,map__4568_4703__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_4706 = cljs.core.get.call(null,map__4568_4703__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4704], null),cljs.core.fnil.call(null,((function (seq__4560_4698,chunk__4561_4699,count__4562_4700,i__4563_4701,seq__4523_4691,chunk__4524_4692,count__4525_4693,i__4526_4694,seq__4315_4587,chunk__4316_4588,count__4317_4589,i__4318_4590,map__4568_4702,map__4568_4703__$1,gline_4704,gcol_4705,name_4706,vec__4557_4695,column_4696,column_info_4697,vec__4520_4688,line_4689,columns_4690,seq__4315_4682__$1,temp__5753__auto___4681,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_4705], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4689,new cljs.core.Keyword(null,"col","col",-1959363084),column_4696,new cljs.core.Keyword(null,"name","name",1843675177),name_4706], null));
});})(seq__4560_4698,chunk__4561_4699,count__4562_4700,i__4563_4701,seq__4523_4691,chunk__4524_4692,count__4525_4693,i__4526_4694,seq__4315_4587,chunk__4316_4588,count__4317_4589,i__4318_4590,map__4568_4702,map__4568_4703__$1,gline_4704,gcol_4705,name_4706,vec__4557_4695,column_4696,column_info_4697,vec__4520_4688,line_4689,columns_4690,seq__4315_4682__$1,temp__5753__auto___4681,inverted))
,cljs.core.sorted_map.call(null)));


var G__4707 = seq__4560_4698;
var G__4708 = chunk__4561_4699;
var G__4709 = count__4562_4700;
var G__4710 = (i__4563_4701 + (1));
seq__4560_4698 = G__4707;
chunk__4561_4699 = G__4708;
count__4562_4700 = G__4709;
i__4563_4701 = G__4710;
continue;
} else {
var temp__5753__auto___4711__$1 = cljs.core.seq.call(null,seq__4560_4698);
if(temp__5753__auto___4711__$1){
var seq__4560_4712__$1 = temp__5753__auto___4711__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4560_4712__$1)){
var c__4556__auto___4713 = cljs.core.chunk_first.call(null,seq__4560_4712__$1);
var G__4714 = cljs.core.chunk_rest.call(null,seq__4560_4712__$1);
var G__4715 = c__4556__auto___4713;
var G__4716 = cljs.core.count.call(null,c__4556__auto___4713);
var G__4717 = (0);
seq__4560_4698 = G__4714;
chunk__4561_4699 = G__4715;
count__4562_4700 = G__4716;
i__4563_4701 = G__4717;
continue;
} else {
var map__4570_4718 = cljs.core.first.call(null,seq__4560_4712__$1);
var map__4570_4719__$1 = (((((!((map__4570_4718 == null))))?(((((map__4570_4718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4570_4718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4570_4718):map__4570_4718);
var gline_4720 = cljs.core.get.call(null,map__4570_4719__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_4721 = cljs.core.get.call(null,map__4570_4719__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_4722 = cljs.core.get.call(null,map__4570_4719__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4720], null),cljs.core.fnil.call(null,((function (seq__4560_4698,chunk__4561_4699,count__4562_4700,i__4563_4701,seq__4523_4691,chunk__4524_4692,count__4525_4693,i__4526_4694,seq__4315_4587,chunk__4316_4588,count__4317_4589,i__4318_4590,map__4570_4718,map__4570_4719__$1,gline_4720,gcol_4721,name_4722,seq__4560_4712__$1,temp__5753__auto___4711__$1,vec__4557_4695,column_4696,column_info_4697,vec__4520_4688,line_4689,columns_4690,seq__4315_4682__$1,temp__5753__auto___4681,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_4721], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4689,new cljs.core.Keyword(null,"col","col",-1959363084),column_4696,new cljs.core.Keyword(null,"name","name",1843675177),name_4722], null));
});})(seq__4560_4698,chunk__4561_4699,count__4562_4700,i__4563_4701,seq__4523_4691,chunk__4524_4692,count__4525_4693,i__4526_4694,seq__4315_4587,chunk__4316_4588,count__4317_4589,i__4318_4590,map__4570_4718,map__4570_4719__$1,gline_4720,gcol_4721,name_4722,seq__4560_4712__$1,temp__5753__auto___4711__$1,vec__4557_4695,column_4696,column_info_4697,vec__4520_4688,line_4689,columns_4690,seq__4315_4682__$1,temp__5753__auto___4681,inverted))
,cljs.core.sorted_map.call(null)));


var G__4723 = cljs.core.next.call(null,seq__4560_4712__$1);
var G__4724 = null;
var G__4725 = (0);
var G__4726 = (0);
seq__4560_4698 = G__4723;
chunk__4561_4699 = G__4724;
count__4562_4700 = G__4725;
i__4563_4701 = G__4726;
continue;
}
} else {
}
}
break;
}


var G__4727 = seq__4523_4691;
var G__4728 = chunk__4524_4692;
var G__4729 = count__4525_4693;
var G__4730 = (i__4526_4694 + (1));
seq__4523_4691 = G__4727;
chunk__4524_4692 = G__4728;
count__4525_4693 = G__4729;
i__4526_4694 = G__4730;
continue;
} else {
var temp__5753__auto___4731__$1 = cljs.core.seq.call(null,seq__4523_4691);
if(temp__5753__auto___4731__$1){
var seq__4523_4732__$1 = temp__5753__auto___4731__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4523_4732__$1)){
var c__4556__auto___4733 = cljs.core.chunk_first.call(null,seq__4523_4732__$1);
var G__4734 = cljs.core.chunk_rest.call(null,seq__4523_4732__$1);
var G__4735 = c__4556__auto___4733;
var G__4736 = cljs.core.count.call(null,c__4556__auto___4733);
var G__4737 = (0);
seq__4523_4691 = G__4734;
chunk__4524_4692 = G__4735;
count__4525_4693 = G__4736;
i__4526_4694 = G__4737;
continue;
} else {
var vec__4572_4738 = cljs.core.first.call(null,seq__4523_4732__$1);
var column_4739 = cljs.core.nth.call(null,vec__4572_4738,(0),null);
var column_info_4740 = cljs.core.nth.call(null,vec__4572_4738,(1),null);
var seq__4575_4741 = cljs.core.seq.call(null,column_info_4740);
var chunk__4576_4742 = null;
var count__4577_4743 = (0);
var i__4578_4744 = (0);
while(true){
if((i__4578_4744 < count__4577_4743)){
var map__4583_4745 = cljs.core._nth.call(null,chunk__4576_4742,i__4578_4744);
var map__4583_4746__$1 = (((((!((map__4583_4745 == null))))?(((((map__4583_4745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4583_4745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4583_4745):map__4583_4745);
var gline_4747 = cljs.core.get.call(null,map__4583_4746__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_4748 = cljs.core.get.call(null,map__4583_4746__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_4749 = cljs.core.get.call(null,map__4583_4746__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4747], null),cljs.core.fnil.call(null,((function (seq__4575_4741,chunk__4576_4742,count__4577_4743,i__4578_4744,seq__4523_4691,chunk__4524_4692,count__4525_4693,i__4526_4694,seq__4315_4587,chunk__4316_4588,count__4317_4589,i__4318_4590,map__4583_4745,map__4583_4746__$1,gline_4747,gcol_4748,name_4749,vec__4572_4738,column_4739,column_info_4740,seq__4523_4732__$1,temp__5753__auto___4731__$1,vec__4520_4688,line_4689,columns_4690,seq__4315_4682__$1,temp__5753__auto___4681,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_4748], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4689,new cljs.core.Keyword(null,"col","col",-1959363084),column_4739,new cljs.core.Keyword(null,"name","name",1843675177),name_4749], null));
});})(seq__4575_4741,chunk__4576_4742,count__4577_4743,i__4578_4744,seq__4523_4691,chunk__4524_4692,count__4525_4693,i__4526_4694,seq__4315_4587,chunk__4316_4588,count__4317_4589,i__4318_4590,map__4583_4745,map__4583_4746__$1,gline_4747,gcol_4748,name_4749,vec__4572_4738,column_4739,column_info_4740,seq__4523_4732__$1,temp__5753__auto___4731__$1,vec__4520_4688,line_4689,columns_4690,seq__4315_4682__$1,temp__5753__auto___4681,inverted))
,cljs.core.sorted_map.call(null)));


var G__4750 = seq__4575_4741;
var G__4751 = chunk__4576_4742;
var G__4752 = count__4577_4743;
var G__4753 = (i__4578_4744 + (1));
seq__4575_4741 = G__4750;
chunk__4576_4742 = G__4751;
count__4577_4743 = G__4752;
i__4578_4744 = G__4753;
continue;
} else {
var temp__5753__auto___4754__$2 = cljs.core.seq.call(null,seq__4575_4741);
if(temp__5753__auto___4754__$2){
var seq__4575_4755__$1 = temp__5753__auto___4754__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4575_4755__$1)){
var c__4556__auto___4756 = cljs.core.chunk_first.call(null,seq__4575_4755__$1);
var G__4757 = cljs.core.chunk_rest.call(null,seq__4575_4755__$1);
var G__4758 = c__4556__auto___4756;
var G__4759 = cljs.core.count.call(null,c__4556__auto___4756);
var G__4760 = (0);
seq__4575_4741 = G__4757;
chunk__4576_4742 = G__4758;
count__4577_4743 = G__4759;
i__4578_4744 = G__4760;
continue;
} else {
var map__4585_4761 = cljs.core.first.call(null,seq__4575_4755__$1);
var map__4585_4762__$1 = (((((!((map__4585_4761 == null))))?(((((map__4585_4761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4585_4761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4585_4761):map__4585_4761);
var gline_4763 = cljs.core.get.call(null,map__4585_4762__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_4764 = cljs.core.get.call(null,map__4585_4762__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_4765 = cljs.core.get.call(null,map__4585_4762__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4763], null),cljs.core.fnil.call(null,((function (seq__4575_4741,chunk__4576_4742,count__4577_4743,i__4578_4744,seq__4523_4691,chunk__4524_4692,count__4525_4693,i__4526_4694,seq__4315_4587,chunk__4316_4588,count__4317_4589,i__4318_4590,map__4585_4761,map__4585_4762__$1,gline_4763,gcol_4764,name_4765,seq__4575_4755__$1,temp__5753__auto___4754__$2,vec__4572_4738,column_4739,column_info_4740,seq__4523_4732__$1,temp__5753__auto___4731__$1,vec__4520_4688,line_4689,columns_4690,seq__4315_4682__$1,temp__5753__auto___4681,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_4764], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_4689,new cljs.core.Keyword(null,"col","col",-1959363084),column_4739,new cljs.core.Keyword(null,"name","name",1843675177),name_4765], null));
});})(seq__4575_4741,chunk__4576_4742,count__4577_4743,i__4578_4744,seq__4523_4691,chunk__4524_4692,count__4525_4693,i__4526_4694,seq__4315_4587,chunk__4316_4588,count__4317_4589,i__4318_4590,map__4585_4761,map__4585_4762__$1,gline_4763,gcol_4764,name_4765,seq__4575_4755__$1,temp__5753__auto___4754__$2,vec__4572_4738,column_4739,column_info_4740,seq__4523_4732__$1,temp__5753__auto___4731__$1,vec__4520_4688,line_4689,columns_4690,seq__4315_4682__$1,temp__5753__auto___4681,inverted))
,cljs.core.sorted_map.call(null)));


var G__4766 = cljs.core.next.call(null,seq__4575_4755__$1);
var G__4767 = null;
var G__4768 = (0);
var G__4769 = (0);
seq__4575_4741 = G__4766;
chunk__4576_4742 = G__4767;
count__4577_4743 = G__4768;
i__4578_4744 = G__4769;
continue;
}
} else {
}
}
break;
}


var G__4770 = cljs.core.next.call(null,seq__4523_4732__$1);
var G__4771 = null;
var G__4772 = (0);
var G__4773 = (0);
seq__4523_4691 = G__4770;
chunk__4524_4692 = G__4771;
count__4525_4693 = G__4772;
i__4526_4694 = G__4773;
continue;
}
} else {
}
}
break;
}


var G__4774 = cljs.core.next.call(null,seq__4315_4682__$1);
var G__4775 = null;
var G__4776 = (0);
var G__4777 = (0);
seq__4315_4587 = G__4774;
chunk__4316_4588 = G__4775;
count__4317_4589 = G__4776;
i__4318_4590 = G__4777;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map
