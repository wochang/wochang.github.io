import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
var qq_append = function(a4093, b4094) {
    if (M0.list_p(a4093) !== false) {
        return M0.append(a4093, b4094);
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("unquote-splicing"), $rjs_core.UString.make("list?"), a4093);
    }
};
var __rjs_quoted__ = {};
__rjs_quoted__.qq_append = qq_append;
export {
    __rjs_quoted__
};