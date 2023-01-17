import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
import * as M1 from "./kw.rkt.js";
var new_apply_proc = M1.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws3128, kw_args3129, proc3130, args3131, ...rest31324595) {
    var rest3132 = $rjs_core.Pair.listFromArray(rest31324595);
    return M1.keyword_apply(proc3130, kws3128, kw_args3129, M0.apply(M0.list_times_, args3131, rest3132));
}), M0.apply);
var new_keyword_apply = M1.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws3133, kw_args3134, proc3135, orig_kws3136, orig_kw_args3137, args3138, ...rest31394596) {
    var rest3139 = $rjs_core.Pair.listFromArray(rest31394596);
    var loop3142 = function(_kws31434624, _kw_args31444625, _kws231454626, _kw_args231464627, _swapped_p31474628) {
        lambda_start4623: while (true) {
            let kws3143 = _kws31434624;
            let kw_args3144 = _kw_args31444625;
            let kws23145 = _kws231454626;
            let kw_args23146 = _kw_args231464627;
            let swapped_p3147 = _swapped_p31474628;
            if (M0.null_p(kws3143) !== false) {
                return M0.values(kws23145, kw_args23146);
            } else {
                if (M0.null_p(kws23145) !== false) {
                    return M0.values(kws3143, kw_args3144);
                } else {
                    if (M0.keyword_lt__p(M0.car(kws3143), M0.car(kws23145)) !== false) {
                        var let_result4597 = loop3142(M0.cdr(kws3143), M0.cdr(kw_args3144), kws23145, kw_args23146, false);
                        var res_kws3148 = let_result4597.getAt(0);
                        var res_kw_args3149 = let_result4597.getAt(1);
                        return M0.values(M0.cons(M0.car(kws3143), res_kws3148), M0.cons(M0.car(kw_args3144), res_kw_args3149));
                    } else {
                        if (swapped_p3147 !== false) {
                            return M0.raise_mismatch_error($rjs_core.PrimitiveSymbol.make("keyword-apply"), $rjs_core.UString.make("keyword duplicated in list and direct keyword arguments: "), M0.car(kws3143));
                        } else {
                            _kws31434624 = kws23145;
                            _kw_args31444625 = kw_args23146;
                            _kws231454626 = kws3143;
                            _kw_args231464627 = kw_args3144;
                            _swapped_p31474628 = true;
                            continue lambda_start4623;
                        }
                    }
                }
            }
        }
    };
    var let_result4602 = loop3142(kws3133, kw_args3134, orig_kws3136, orig_kw_args3137, false);
    var kws3140 = let_result4602.getAt(0);
    var kw_args3141 = let_result4602.getAt(1);
    return M1.keyword_apply(proc3135, kws3140, kw_args3141, M0.apply(M0.list_times_, args3138, rest3139));
}), M1.keyword_apply);
var double_flonum_p = function(x3150) {
    return M0.__rjs_quoted__.flonum_p(x3150);
};
var cl4603 = function() {
    return M0.random();
};
var cl4604 = function(x3152) {
    return M0.random(x3152);
};
var cl4605 = function(x3153, y3154) {
    if (M0.exact_integer_p(y3154) !== false) {
        if (M0.exact_integer_p(x3153) !== false) {
            var if_res4608 = M0.rvoid();
        } else {
            var if_res4608 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 0, x3153, y3154);
        }
        if_res4608;
        if (M0.__lt_(x3153, y3154) !== false) {
            var if_res4609 = M0.rvoid();
        } else {
            var if_res4609 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), M0.string_append($rjs_core.UString.make("(>/c "), M0.number__gt_string(x3153), $rjs_core.UString.make(")")), 1, x3153, y3154);
        }
        if_res4609;
        var d3155 = y3154 - x3153;
        if (M0.__lt__eq_(d3155, 4294967087) !== false) {
            var if_res4610 = M0.rvoid();
        } else {
            var if_res4610 = M0.raise_arguments_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("difference between arguments is greater than 4294967087"), $rjs_core.UString.make("min"), x3153, $rjs_core.UString.make("max"), y3154);
        }
        if_res4610;
        return x3153 + M0.random(d3155);
    } else {
        if (M0.__rjs_quoted__.pseudo_random_generator_p(y3154) !== false) {
            if (M0.exact_integer_p(x3153) !== false) {
                var if_res4611 = M0.__lt__eq_(1, x3153, 4294967087);
            } else {
                var if_res4611 = false;
            }
            if (if_res4611 !== false) {
                var if_res4612 = M0.rvoid();
            } else {
                var if_res4612 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("(integer-in 1 4294967087)"), 0, x3153, y3154);
            }
            if_res4612;
            return M0.random(x3153, y3154);
        } else {
            if (M0.exact_integer_p(x3153) !== false) {
                var if_res4613 = M0.rvoid();
            } else {
                var if_res4613 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 0, x3153, y3154);
            }
            if_res4613;
            return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("(or/c exact-integer? pseudo-random-generator?)"), 1, x3153, y3154);
        }
    }
};
var cl4606 = function(min3156, max3157, prng3158) {
    if (M0.exact_integer_p(min3156) !== false) {
        var if_res4616 = M0.rvoid();
    } else {
        var if_res4616 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 0, min3156, max3157, prng3158);
    }
    if_res4616;
    if (M0.exact_integer_p(max3157) !== false) {
        var if_res4617 = M0.rvoid();
    } else {
        var if_res4617 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("exact-integer?"), 1, min3156, max3157, prng3158);
    }
    if_res4617;
    if (M0.__lt_(min3156, max3157) !== false) {
        var if_res4618 = M0.rvoid();
    } else {
        var if_res4618 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), M0.string_append($rjs_core.UString.make("(>/c "), M0.number__gt_string(min3156), $rjs_core.UString.make(")")), 1, min3156, max3157, prng3158);
    }
    if_res4618;
    var d3159 = max3157 - min3156;
    if (M0.__lt__eq_(d3159, 4294967087) !== false) {
        var if_res4619 = M0.rvoid();
    } else {
        var if_res4619 = M0.raise_arguments_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("difference between first and second arguments is greater than 4294967087"), $rjs_core.UString.make("min"), min3156, $rjs_core.UString.make("max"), max3157, $rjs_core.UString.make("rand-gen"), prng3158);
    }
    if_res4619;
    if (M0.__rjs_quoted__.pseudo_random_generator_p(prng3158) !== false) {
        var if_res4620 = M0.rvoid();
    } else {
        var if_res4620 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"), $rjs_core.UString.make("pseudo-random-generator?"), 2, min3156, max3157, prng3158);
    }
    if_res4620;
    return min3156 + M0.random(d3159, prng3158);
};
var random3151 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam4607 = {
        '0': cl4603,
        '1': cl4604,
        '2': cl4605,
        '3': cl4606
    } [arguments.length];
    if (fixed_lam4607 !== undefined) {
        return fixed_lam4607.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1, 2, 3]);
var __random = random3151;
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    __random as random,
    double_flonum_p,
    new_keyword_apply as keyword_apply,
    new_apply_proc
};