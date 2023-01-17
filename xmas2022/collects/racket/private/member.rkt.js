import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
var bad_list = function(who4020, orig_l4021) {
    return M0.raise_arguments_error(who4020, $rjs_core.UString.make("not a proper list"), $rjs_core.UString.make("in"), orig_l4021);
};
var member4022 = function(v4023, orig_l4024, eql_p4025) {
    var loop4026 = function(_ls40275925, _turtle40285926) {
        lambda_start5924: while (true) {
            let ls4027 = _ls40275925;
            let turtle4028 = _turtle40285926;
            if (M0.null_p(ls4027) !== false) {
                return false;
            } else {
                if (M0.not(M0.pair_p(ls4027)) !== false) {
                    return bad_list($rjs_core.PrimitiveSymbol.make("member"), orig_l4024);
                } else {
                    if (eql_p4025(v4023, M0.car(ls4027)) !== false) {
                        return ls4027;
                    } else {
                        var ls4029 = M0.cdr(ls4027);
                        if (M0.null_p(ls4029) !== false) {
                            return false;
                        } else {
                            var or_part4030 = M0.not(M0.pair_p(ls4029));
                            if (or_part4030 !== false) {
                                var if_res5910 = or_part4030;
                            } else {
                                var if_res5910 = M0.eq_p(ls4029, turtle4028);
                            }
                            if (if_res5910 !== false) {
                                return bad_list($rjs_core.PrimitiveSymbol.make("member"), orig_l4024);
                            } else {
                                if (eql_p4025(v4023, M0.car(ls4029)) !== false) {
                                    return ls4029;
                                } else {
                                    _ls40275925 = M0.cdr(ls4029);
                                    _turtle40285926 = M0.cdr(turtle4028);
                                    continue lambda_start5924;
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    return loop4026(orig_l4024, orig_l4024);
};
var cl5917 = function(v4031, ls4032) {
    return member4022(v4031, ls4032, M0.equal_p);
};
var cl5918 = function(v4033, ls4034, eql_p4035) {
    if (M0.procedure_p(eql_p4035) !== false) {
        var if_res5920 = M0.procedure_arity_includes_p(eql_p4035, 2);
    } else {
        var if_res5920 = false;
    }
    if (if_res5920 !== false) {
        var if_res5921 = M0.rvoid();
    } else {
        var if_res5921 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("member"), $rjs_core.UString.make("(procedure-arity-includes/c 2)"), M0.eq_p);
    }
    if_res5921;
    return member4022(v4033, ls4034, eql_p4035);
};
var member = $rjs_core.attachProcedureArity(function() {
    var fixed_lam5919 = {
        '2': cl5917,
        '3': cl5918
    } [arguments.length];
    if (fixed_lam5919 !== undefined) {
        return fixed_lam5919.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var memw = function(v4036, ls4037) {
    return member(v4036, ls4037, M0.__rjs_quoted__.equal_always_p);
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    memw,
    member
};