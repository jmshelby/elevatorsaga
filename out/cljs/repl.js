// Compiled by ClojureScript 1.10.758 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__6875){
var map__6876 = p__6875;
var map__6876__$1 = (((((!((map__6876 == null))))?(((((map__6876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6876):map__6876);
var m = map__6876__$1;
var n = cljs.core.get.call(null,map__6876__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__6876__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__6878_6910 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6879_6911 = null;
var count__6880_6912 = (0);
var i__6881_6913 = (0);
while(true){
if((i__6881_6913 < count__6880_6912)){
var f_6914 = cljs.core._nth.call(null,chunk__6879_6911,i__6881_6913);
cljs.core.println.call(null,"  ",f_6914);


var G__6915 = seq__6878_6910;
var G__6916 = chunk__6879_6911;
var G__6917 = count__6880_6912;
var G__6918 = (i__6881_6913 + (1));
seq__6878_6910 = G__6915;
chunk__6879_6911 = G__6916;
count__6880_6912 = G__6917;
i__6881_6913 = G__6918;
continue;
} else {
var temp__5753__auto___6919 = cljs.core.seq.call(null,seq__6878_6910);
if(temp__5753__auto___6919){
var seq__6878_6920__$1 = temp__5753__auto___6919;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6878_6920__$1)){
var c__4556__auto___6921 = cljs.core.chunk_first.call(null,seq__6878_6920__$1);
var G__6922 = cljs.core.chunk_rest.call(null,seq__6878_6920__$1);
var G__6923 = c__4556__auto___6921;
var G__6924 = cljs.core.count.call(null,c__4556__auto___6921);
var G__6925 = (0);
seq__6878_6910 = G__6922;
chunk__6879_6911 = G__6923;
count__6880_6912 = G__6924;
i__6881_6913 = G__6925;
continue;
} else {
var f_6926 = cljs.core.first.call(null,seq__6878_6920__$1);
cljs.core.println.call(null,"  ",f_6926);


var G__6927 = cljs.core.next.call(null,seq__6878_6920__$1);
var G__6928 = null;
var G__6929 = (0);
var G__6930 = (0);
seq__6878_6910 = G__6927;
chunk__6879_6911 = G__6928;
count__6880_6912 = G__6929;
i__6881_6913 = G__6930;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_6931 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_6931);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_6931)))?cljs.core.second.call(null,arglists_6931):arglists_6931));
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
var seq__6882_6932 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__6883_6933 = null;
var count__6884_6934 = (0);
var i__6885_6935 = (0);
while(true){
if((i__6885_6935 < count__6884_6934)){
var vec__6896_6936 = cljs.core._nth.call(null,chunk__6883_6933,i__6885_6935);
var name_6937 = cljs.core.nth.call(null,vec__6896_6936,(0),null);
var map__6899_6938 = cljs.core.nth.call(null,vec__6896_6936,(1),null);
var map__6899_6939__$1 = (((((!((map__6899_6938 == null))))?(((((map__6899_6938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6899_6938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6899_6938):map__6899_6938);
var doc_6940 = cljs.core.get.call(null,map__6899_6939__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_6941 = cljs.core.get.call(null,map__6899_6939__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_6937);

cljs.core.println.call(null," ",arglists_6941);

if(cljs.core.truth_(doc_6940)){
cljs.core.println.call(null," ",doc_6940);
} else {
}


var G__6942 = seq__6882_6932;
var G__6943 = chunk__6883_6933;
var G__6944 = count__6884_6934;
var G__6945 = (i__6885_6935 + (1));
seq__6882_6932 = G__6942;
chunk__6883_6933 = G__6943;
count__6884_6934 = G__6944;
i__6885_6935 = G__6945;
continue;
} else {
var temp__5753__auto___6946 = cljs.core.seq.call(null,seq__6882_6932);
if(temp__5753__auto___6946){
var seq__6882_6947__$1 = temp__5753__auto___6946;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6882_6947__$1)){
var c__4556__auto___6948 = cljs.core.chunk_first.call(null,seq__6882_6947__$1);
var G__6949 = cljs.core.chunk_rest.call(null,seq__6882_6947__$1);
var G__6950 = c__4556__auto___6948;
var G__6951 = cljs.core.count.call(null,c__4556__auto___6948);
var G__6952 = (0);
seq__6882_6932 = G__6949;
chunk__6883_6933 = G__6950;
count__6884_6934 = G__6951;
i__6885_6935 = G__6952;
continue;
} else {
var vec__6901_6953 = cljs.core.first.call(null,seq__6882_6947__$1);
var name_6954 = cljs.core.nth.call(null,vec__6901_6953,(0),null);
var map__6904_6955 = cljs.core.nth.call(null,vec__6901_6953,(1),null);
var map__6904_6956__$1 = (((((!((map__6904_6955 == null))))?(((((map__6904_6955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6904_6955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6904_6955):map__6904_6955);
var doc_6957 = cljs.core.get.call(null,map__6904_6956__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_6958 = cljs.core.get.call(null,map__6904_6956__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_6954);

cljs.core.println.call(null," ",arglists_6958);

if(cljs.core.truth_(doc_6957)){
cljs.core.println.call(null," ",doc_6957);
} else {
}


var G__6959 = cljs.core.next.call(null,seq__6882_6947__$1);
var G__6960 = null;
var G__6961 = (0);
var G__6962 = (0);
seq__6882_6932 = G__6959;
chunk__6883_6933 = G__6960;
count__6884_6934 = G__6961;
i__6885_6935 = G__6962;
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

var seq__6906 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__6907 = null;
var count__6908 = (0);
var i__6909 = (0);
while(true){
if((i__6909 < count__6908)){
var role = cljs.core._nth.call(null,chunk__6907,i__6909);
var temp__5753__auto___6963__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___6963__$1)){
var spec_6964 = temp__5753__auto___6963__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_6964));
} else {
}


var G__6965 = seq__6906;
var G__6966 = chunk__6907;
var G__6967 = count__6908;
var G__6968 = (i__6909 + (1));
seq__6906 = G__6965;
chunk__6907 = G__6966;
count__6908 = G__6967;
i__6909 = G__6968;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq.call(null,seq__6906);
if(temp__5753__auto____$1){
var seq__6906__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6906__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__6906__$1);
var G__6969 = cljs.core.chunk_rest.call(null,seq__6906__$1);
var G__6970 = c__4556__auto__;
var G__6971 = cljs.core.count.call(null,c__4556__auto__);
var G__6972 = (0);
seq__6906 = G__6969;
chunk__6907 = G__6970;
count__6908 = G__6971;
i__6909 = G__6972;
continue;
} else {
var role = cljs.core.first.call(null,seq__6906__$1);
var temp__5753__auto___6973__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5753__auto___6973__$2)){
var spec_6974 = temp__5753__auto___6973__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_6974));
} else {
}


var G__6975 = cljs.core.next.call(null,seq__6906__$1);
var G__6976 = null;
var G__6977 = (0);
var G__6978 = (0);
seq__6906 = G__6975;
chunk__6907 = G__6976;
count__6908 = G__6977;
i__6909 = G__6978;
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
var G__6979 = cljs.core.conj.call(null,via,t);
var G__6980 = cljs.core.ex_cause.call(null,t);
via = G__6979;
t = G__6980;
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
var map__6983 = datafied_throwable;
var map__6983__$1 = (((((!((map__6983 == null))))?(((((map__6983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6983):map__6983);
var via = cljs.core.get.call(null,map__6983__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__6983__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__6983__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__6984 = cljs.core.last.call(null,via);
var map__6984__$1 = (((((!((map__6984 == null))))?(((((map__6984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6984):map__6984);
var type = cljs.core.get.call(null,map__6984__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__6984__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__6984__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__6985 = data;
var map__6985__$1 = (((((!((map__6985 == null))))?(((((map__6985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6985):map__6985);
var problems = cljs.core.get.call(null,map__6985__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__6985__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__6985__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__6986 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__6986__$1 = (((((!((map__6986 == null))))?(((((map__6986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6986):map__6986);
var top_data = map__6986__$1;
var source = cljs.core.get.call(null,map__6986__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__6991 = phase;
var G__6991__$1 = (((G__6991 instanceof cljs.core.Keyword))?G__6991.fqn:null);
switch (G__6991__$1) {
case "read-source":
var map__6992 = data;
var map__6992__$1 = (((((!((map__6992 == null))))?(((((map__6992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__6992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6992):map__6992);
var line = cljs.core.get.call(null,map__6992__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__6992__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__6994 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__6994__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__6994,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__6994);
var G__6994__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__6994__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__6994__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__6994__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__6994__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__6995 = top_data;
var G__6995__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__6995,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__6995);
var G__6995__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__6995__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__6995__$1);
var G__6995__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__6995__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__6995__$2);
var G__6995__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__6995__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__6995__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__6995__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__6995__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__6996 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__6996,(0),null);
var method = cljs.core.nth.call(null,vec__6996,(1),null);
var file = cljs.core.nth.call(null,vec__6996,(2),null);
var line = cljs.core.nth.call(null,vec__6996,(3),null);
var G__6999 = top_data;
var G__6999__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__6999,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__6999);
var G__6999__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__6999__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__6999__$1);
var G__6999__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__6999__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__6999__$2);
var G__6999__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__6999__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__6999__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__6999__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__6999__$4;
}

break;
case "execution":
var vec__7000 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__7000,(0),null);
var method = cljs.core.nth.call(null,vec__7000,(1),null);
var file = cljs.core.nth.call(null,vec__7000,(2),null);
var line = cljs.core.nth.call(null,vec__7000,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__6982_SHARP_){
var or__4126__auto__ = (p1__6982_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__6982_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__7003 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__7003__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__7003,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__7003);
var G__7003__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__7003__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__7003__$1);
var G__7003__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__7003__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__7003__$2);
var G__7003__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__7003__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__7003__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__7003__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__7003__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6991__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__7007){
var map__7008 = p__7007;
var map__7008__$1 = (((((!((map__7008 == null))))?(((((map__7008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7008):map__7008);
var triage_data = map__7008__$1;
var phase = cljs.core.get.call(null,map__7008__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__7008__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__7008__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__7008__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__7008__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__7008__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__7008__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__7008__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__7010 = phase;
var G__7010__$1 = (((G__7010 instanceof cljs.core.Keyword))?G__7010.fqn:null);
switch (G__7010__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__7011_7020 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7012_7021 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7013_7022 = true;
var _STAR_print_fn_STAR__temp_val__7014_7023 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7013_7022);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7014_7023);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__7005_SHARP_){
return cljs.core.dissoc.call(null,p1__7005_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7012_7021);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7011_7020);
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
var _STAR_print_newline_STAR__orig_val__7015_7024 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__7016_7025 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__7017_7026 = true;
var _STAR_print_fn_STAR__temp_val__7018_7027 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__7017_7026);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7018_7027);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__7006_SHARP_){
return cljs.core.dissoc.call(null,p1__7006_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7016_7025);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__7015_7024);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7010__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
