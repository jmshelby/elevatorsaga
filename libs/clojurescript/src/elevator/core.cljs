(ns elevator.core
  (:require [sci.core :as sci]))


(defn inject
  [string]
  (println "Eval'ing clojurescript")
  (-> string
      sci/eval-string
      clj->js))


;; Inject ourselves by overriding the main eval fn
(set! js/getCodeObjFromCode inject)

