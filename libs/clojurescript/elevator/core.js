// Compiled by ClojureScript 1.10.758 {}
goog.provide('elevator.core');
goog.require('cljs.core');
goog.require('cljs.js');
elevator.core.state = cljs.js.empty_state.call(null);
elevator.core.evaluate = (function elevator$core$evaluate(source,cb){
return cljs.js.eval_str.call(null,elevator.core.state,source,null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], null),cb);
});
elevator.core.inject = (function elevator$core$inject(string){
console.log("eval'ing clojure...");

var holder = cljs.core.atom.call(null,null);
var _ = elevator.core.evaluate.call(null,string,(function (result){
return cljs.core.reset_BANG_.call(null,holder,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(result));
}));
var result = (function (){while(true){
if(cljs.core.truth_(cljs.core.deref.call(null,holder))){
return cljs.core.clj__GT_js.call(null,cljs.core.deref.call(null,holder));
} else {
continue;
}
break;
}
})();
console.log("eval'd result: ",result);

return result;
});
(getCodeObjFromCode = elevator.core.inject);

//# sourceMappingURL=core.js.map
