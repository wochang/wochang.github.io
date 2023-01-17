import * as $rjs_core from './core.js';
import * as M0 from "./lib.rkt.js";
var values = function() {
    var vals30 = M0.Core.argumentsToArray(arguments);
    if ((vals30.length === 1) !== false) {
        return vals30[0];
    } else {
        return M0.Values.make(vals30);
    }
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    values
};