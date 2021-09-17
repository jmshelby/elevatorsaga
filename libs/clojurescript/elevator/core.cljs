(ns elevator.core
  (:require [cljs.js]))

;; For later
(def state (cljs.js/empty-state))

(defn evaluate [source cb]
  (cljs.js/eval-str state source nil {:eval cljs.js/js-eval :context :expr} cb))

(defn inject
  [string]

  (js/console.log "eval'ing clojure...")

  (let [holder (atom nil)
        ;; Start the eval
        _      (evaluate string
                         (fn [result]
                           (reset! holder (:value result))))
        ;; Wait for eval result
        result (loop []
                 (if @holder
                   (clj->js @holder)
                   (recur)))]
    (js/console.log "eval'd result: " result)
    result))


;; Inject ourselves by overriding the main eval fn
(set! js/getCodeObjFromCode inject)
