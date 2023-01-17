import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
import * as M1 from "../../../runtime/core.rkt.js";
M1.__rjs_quoted__.___declare;
$rjs_core.Keyword.make("cross-phase-persistent");
var reverse = function(l3124) {
    if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res4587 = M0.rvoid();
    } else {
        if (M0.list_p(l3124) !== false) {
            var if_res4586 = M0.rvoid();
        } else {
            var if_res4586 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("reverse"), $rjs_core.UString.make("list?"), l3124);
        }
        var if_res4587 = if_res4586;
    }
    if_res4587;
    var loop3125 = function(_a31264591, _l31274592) {
        lambda_start4590: while (true) {
            let a3126 = _a31264591;
            let l3127 = _l31274592;
            if (M0.null_p(l3127) !== false) {
                return a3126;
            } else {
                _a31264591 = M0.cons(M0.car(l3127), a3126);
                _l31274592 = M0.cdr(l3127);
                continue lambda_start4590;
            }
        }
    };
    return loop3125(M0.rnull, l3124);
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    reverse as alt_reverse
};