// Compiled by ClojureScript 1.10.758 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__5168){
var map__5169 = p__5168;
var map__5169__$1 = (((((!((map__5169 == null))))?(((((map__5169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5169):map__5169);
var m = map__5169__$1;
var n = cljs.core.get.call(null,map__5169__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__5169__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__5171_5203 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__5172_5204 = null;
var count__5173_5205 = (0);
var i__5174_5206 = (0);
while(true){
if((i__5174_5206 < count__5173_5205)){
var f_5207 = cljs.core._nth.call(null,chunk__5172_5204,i__5174_5206);
cljs.core.println.call(null,"  ",f_5207);


var G__5208 = seq__5171_5203;
var G__5209 = chunk__5172_5204;
var G__5210 = count__5173_5205;
var G__5211 = (i__5174_5206 + (1));
seq__5171_5203 = G__5208;
chunk__5172_5204 = G__5209;
count__5173_5205 = G__5210;
i__5174_5206 = G__5211;
continue;
} else {
var temp__5753__auto___5212 = cljs.core.seq.call(null,seq__5171_5203);
if(temp__5753__auto___5212){
var seq__5171_5213__$1 = temp__5753__auto___5212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5171_5213__$1)){
var c__4556__auto___5214 = cljs.core.chunk_first.call(null,seq__5171_5213__$1);
var G__5215 = cljs.core.chunk_rest.call(null,seq__5171_5213__$1);
var G__5216 = c__4556__auto___5214;
var G__5217 = cljs.core.count.call(null,c__4556__auto___5214);
var G__5218 = (0);
seq__5171_5203 = G__5215;
chunk__5172_5204 = G__5216;
count__5173_5205 = G__5217;
i__5174_5206 = G__5218;
continue;
} else {
var f_5219 = cljs.core.first.call(null,seq__5171_5213__$1);
cljs.core.println.call(null,"  ",f_5219);


var G__5220 = cljs.core.next.call(null,seq__5171_5213__$1);
var G__5221 = null;
var G__5222 = (0);
var G__5223 = (0);
seq__5171_5203 = G__5220;
chunk__5172_5204 = G__5221;
count__5173_5205 = G__5222;
i__5174_5206 = G__5223;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_5224 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_5224);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_5224)))?cljs.core.second.call(null,arglists_5224):arglists_5224));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__5175_5225 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__5176_5226 = null;
var count__5177_5227 = (0);
var i__5178_5228 = (0);
while(true){
if((i__5178_5228 < count__5177_5227)){
var vec__5189_5229 = cljs.core._nth.call(null,chunk__5176_5226,i__5178_5228);
var name_5230 = cljs.core.nth.call(null,vec__5189_5229,(0),null);
var map__5192_5231 = cljs.core.nth.call(null,vec__5189_5229,(1),null);
var map__5192_5232__$1 = (((((!((map__5192_5231 == null))))?(((((map__5192_5231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5192_5231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5192_5231):map__5192_5231);
var doc_5233 = cljs.core.get.call(null,map__5192_5232__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_5234 = cljs.core.get.call(null,map__5192_5232__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_5230);

cljs.core.println.call(null," ",arglists_5234);

if(cljs.core.truth_(doc_5233)){
cljs.core.println.call(null," ",doc_5233);
} else {
}


var G__5235 = seq__5175_5225;
var G__5236 = chunk__5176_5226;
var G__5237 = count__5177_5227;
var G__5238 = (i__5178_5228 + (1));
seq__5175_5225 = G__5235;
chunk__5176_5226 = G__5236;
count__5177_5227 = G__5237;
i__5178_5228 = G__5238;
continue;
} else {
var temp__5753__auto___5239 = cljs.core.seq.call(null,seq__5175_5225);
if(temp__5753__auto___5239){
var seq__5175_5240__$1 = temp__5753__auto___5239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5175_5240__$1)){
var c__4556__auto___5241 = cljs.core.chunk_first.call(null,seq__5175_5240__$1);
var G__5242 = cljs.core.chunk_rest.call(null,seq__5175_5240__$1);
var G__5243 = c__4556__auto___5241;
var G__5244 = cljs.core.count.call(null,c__4556__auto___5241);
var G__5245 = (0);
seq__5175_5225 = G__5242;
chunk__5176_5226 = G__5243;
count__5177_5227 = G__5244;
i__5178_5228 = G__5245;
continue;
} else {
var vec__5194_5246 = cljs.core.first.call(null,seq__5175_5240__$1);
var name_5247 = cljs.core.nth.call(null,vec__5194_5246,(0),null);
var map__5197_5248 = cljs.core.nth.call(null,vec__5194_5246,(1),null);
var map__5197_5249__$1 = (((((!((map__5197_5248 == null))))?(((((map__5197_5248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5197_5248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5197_5248):map__5197_5248);
var doc_5250 = cljs.core.get.call(null,map__5197_5249__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_5251 = cljs.core.get.call(null,map__5197_5249__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_5247);

cljs.core.println.call(null," ",arglists_5251);

if(cljs.core.truth_(doc_5250)){
cljs.core.println.call(null," ",doc_5250);
} else {
}


var G__5252 = cljs.core.next.call(null,seq__5175_5240__$1);
var G__5253 = null;
var G__5254 = (0);
var G__5255 = (0);
seq__5175_5225 = G__5252;
chunk__5176_5226 = G__5253;
count__5177_5227 = G__5254;
i__5178_5228 = G__5255;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.call(null,"Spec");

var seq__5199 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__5200 = null;
var count__5201 = (0);
var i__5202 = (0);
while(true){
if((i__5202 < count__5201)){
var role = cljs.core._nth.call(null,chunk__5200,i__5202);
var temp__5753__auto___5256__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___5256__$1)){
var spec_5257 = temp__5753__auto___5256__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_5257));
} else {
}


var G__5258 = seq__5199;
var G__5259 = chunk__5200;
var G__5260 = count__5201;
var G__5261 = (i__5202 + (1));
seq__5199 = G__5258;
chunk__5200 = G__5259;
count__5201 = G__5260;
i__5202 = G__5261;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__5199);
if(temp__5753__auto____$1){
var seq__5199__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5199__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__5199__$1);
var G__5262 = cljs.core.chunk_rest.call(null,seq__5199__$1);
var G__5263 = c__4556__auto__;
var G__5264 = cljs.core.count.call(null,c__4556__auto__);
var G__5265 = (0);
seq__5199 = G__5262;
chunk__5200 = G__5263;
count__5201 = G__5264;
i__5202 = G__5265;
continue;
} else {
var role = cljs.core.first.call(null,seq__5199__$1);
var temp__5753__auto___5266__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___5266__$2)){
var spec_5267 = temp__5753__auto___5266__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_5267));
} else {
}


var G__5268 = cljs.core.next.call(null,seq__5199__$1);
var G__5269 = null;
var G__5270 = (0);
var G__5271 = (0);
seq__5199 = G__5268;
chunk__5200 = G__5269;
count__5201 = G__5270;
i__5202 = G__5271;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__5272 = cljs.core.conj.call(null,via,t);
var G__5273 = cljs.core.ex_cause.call(null,t);
via = G__5272;
t = G__5273;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__5276 = datafied_throwable;
var map__5276__$1 = (((((!((map__5276 == null))))?(((((map__5276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5276):map__5276);
var via = cljs.core.get.call(null,map__5276__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__5276__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__5276__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__5277 = cljs.core.last.call(null,via);
var map__5277__$1 = (((((!((map__5277 == null))))?(((((map__5277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5277):map__5277);
var type = cljs.core.get.call(null,map__5277__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__5277__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__5277__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__5278 = data;
var map__5278__$1 = (((((!((map__5278 == null))))?(((((map__5278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5278):map__5278);
var problems = cljs.core.get.call(null,map__5278__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__5278__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__5278__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__5279 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__5279__$1 = (((((!((map__5279 == null))))?(((((map__5279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5279):map__5279);
var top_data = map__5279__$1;
var source = cljs.core.get.call(null,map__5279__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__5284 = phase;
var G__5284__$1 = (((G__5284 instanceof cljs.core.Keyword))?G__5284.fqn:null);
switch (G__5284__$1) {
case "read-source":
var map__5285 = data;
var map__5285__$1 = (((((!((map__5285 == null))))?(((((map__5285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5285):map__5285);
var line = cljs.core.get.call(null,map__5285__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__5285__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__5287 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__5287__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__5287,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__5287);
var G__5287__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__5287__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__5287__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__5287__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__5287__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__5288 = top_data;
var G__5288__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__5288,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__5288);
var G__5288__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__5288__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__5288__$1);
var G__5288__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__5288__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__5288__$2);
var G__5288__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__5288__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__5288__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__5288__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__5288__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__5289 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__5289,(0),null);
var method = cljs.core.nth.call(null,vec__5289,(1),null);
var file = cljs.core.nth.call(null,vec__5289,(2),null);
var line = cljs.core.nth.call(null,vec__5289,(3),null);
var G__5292 = top_data;
var G__5292__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__5292,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__5292);
var G__5292__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__5292__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__5292__$1);
var G__5292__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__5292__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__5292__$2);
var G__5292__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__5292__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__5292__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__5292__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__5292__$4;
}

break;
case "execution":
var vec__5293 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__5293,(0),null);
var method = cljs.core.nth.call(null,vec__5293,(1),null);
var file = cljs.core.nth.call(null,vec__5293,(2),null);
var line = cljs.core.nth.call(null,vec__5293,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__5275_SHARP_){
var or__4126__auto__ = (p1__5275_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__5275_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__5296 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__5296__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__5296,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__5296);
var G__5296__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__5296__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__5296__$1);
var G__5296__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__5296__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__5296__$2);
var G__5296__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__5296__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__5296__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__5296__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__5296__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5284__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__5300){
var map__5301 = p__5300;
var map__5301__$1 = (((((!((map__5301 == null))))?(((((map__5301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5301):map__5301);
var triage_data = map__5301__$1;
var phase = cljs.core.get.call(null,map__5301__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__5301__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__5301__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__5301__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__5301__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__5301__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__5301__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__5301__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__5303 = phase;
var G__5303__$1 = (((G__5303 instanceof cljs.core.Keyword))?G__5303.fqn:null);
switch (G__5303__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__5304_5313 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__5305_5314 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__5306_5315 = true;
var _STAR_print_fn_STAR__temp_val__5307_5316 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__5306_5315);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__5307_5316);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__5298_SHARP_){
return cljs.core.dissoc.call(null,p1__5298_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__5305_5314);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__5304_5313);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__5308_5317 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__5309_5318 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__5310_5319 = true;
var _STAR_print_fn_STAR__temp_val__5311_5320 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__5310_5319);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__5311_5320);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__5299_SHARP_){
return cljs.core.dissoc.call(null,p1__5299_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__5309_5318);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__5308_5317);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__5303__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});
