(ns sci-npm.core
  (:require [sci.core :as sci]
            [sci.ctx-store :as store]))

(def namespaces
  {'clojure.core {}
   'goog.object {}
   'sci.core {'stacktrace sci/stacktrace
              'format-stacktrace sci/format-stacktrace}})

(store/reset-ctx!
  (sci/init {:namespaces namespaces
             :classes {'js js/globalThis
                      :allow :all
                      'Math js/Math}
             :features #{:cljs}}))

(def !last-ns (volatile! @sci/ns))

(defn ^:export eval-string [s]
  (sci/binding [sci/ns @!last-ns]
    (let [rdr (sci/reader s)]
      (loop [res nil]
        (let [form (sci/parse-next (store/get-ctx) rdr)]
          (if (= :sci.core/eof form)
            (do
              (vreset! !last-ns @sci/ns)
              res)
            (recur (sci/eval-form (store/get-ctx) form))))))))
