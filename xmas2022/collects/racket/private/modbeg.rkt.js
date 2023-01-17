import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
var print_values = $rjs_core.attachProcedureArity(function(...vs8641366) {
    var vs864 = $rjs_core.Pair.listFromArray(vs8641366);
    M0.for_each(M0.current_print(), vs864);
    return M0.apply(M0.values, vs864);
});
var __rjs_quoted__ = {};
__rjs_quoted__.print_values = print_values;
export {
    __rjs_quoted__
};