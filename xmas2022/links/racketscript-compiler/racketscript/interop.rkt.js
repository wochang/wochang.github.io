import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
import * as M1 from "../../../collects/racket/private/reverse.rkt.js";
import * as M2 from "./private/interop.rkt.js";
var __eq__gt_$ = function(lam_expr3184) {
    return $rjs_core.Marks.wrapWithContext(lam_expr3184);
};
var js_string = function(e3185) {
    return e3185.toString();
};
var js_string__gt_string = function(e3186) {
    return $rjs_core.UString.makeImmutable(e3186);
};
var js_array__gt_list = function(e3187) {
    return $rjs_core.Pair.listFromArray(e3187);
};
var assoc__gt_object = function(pairs3188) {
    var result3189 = {};
    var loop3190 = function(_pairs31914702) {
        lambda_start4701: while (true) {
            let pairs3191 = _pairs31914702;
            if (M0.null_p(pairs3191) !== false) {
                return result3189;
            } else {
                var p3192 = M0.car(pairs3191);
                var k3194 = M0.car(p3192);
                var or_part3195 = typeof(k3194) === "string";
                if (or_part3195 !== false) {
                    var if_res4680 = or_part3195;
                } else {
                    var if_res4680 = M0.string_p(k3194);
                }
                if (if_res4680 !== false) {
                    var if_res4682 = k3194;
                } else {
                    if (M0.symbol_p(k3194) !== false) {
                        var if_res4681 = M0.symbol__gt_string(k3194);
                    } else {
                        var if_res4681 = M0.error($rjs_core.PrimitiveSymbol.make("assoc->object"), $rjs_core.UString.make("invalid key value"));
                    }
                    var if_res4682 = if_res4681;
                }
                var key3193 = if_res4682;
                result3189[key3193] = M0.car(M0.cdr(p3192));
                _pairs31914702 = M0.cdr(pairs3191);
                continue lambda_start4701;
            }
        }
    };
    return loop3190(pairs3188);
};
var js_array_p = function(v3196) {
    return Array.isArray(v3196);
};
var in_js_array = function(arr3197) {
    check_array(arr3197);
    var arr3198 = arr3197;
    if (js_array_p(arr3198) !== false) {
        var if_res4684 = M0.rvoid();
    } else {
        var if_res4684 = in_js_array(arr3198);
    }
    if_res4684;
    var for_loop3199 = function(_fold_var32004706, _i32014707) {
        lambda_start4705: while (true) {
            let fold_var3200 = _fold_var32004706;
            let i3201 = _i32014707;
            if (M0.__lt_(i3201, arr3198.length) !== false) {
                var v3202 = arr3198[i3201];
                if (true !== false) {
                    var fold_var3204 = fold_var3200;
                    var fold_var3205 = M0.cons(v3202, fold_var3204);
                    var fold_var3203 = M0.values(fold_var3205);
                    if (true !== false) {
                        var if_res4685 = M0.not(false);
                    } else {
                        var if_res4685 = false;
                    }
                    if (if_res4685 !== false) {
                        _fold_var32004706 = fold_var3203;
                        _i32014707 = i3201 + 1;
                        continue lambda_start4705;
                    } else {
                        return fold_var3203;
                    }
                } else {
                    return fold_var3200;
                }
            } else {
                return fold_var3200;
            }
        }
    };
    return M1.alt_reverse(for_loop3199(M0.rnull, 0));
};
var check_array = function(v3206) {
    if (js_array_p(v3206) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-js-array"), $rjs_core.UString.make("js-array?"), v3206);
    }
};
var in_js_obect = function(obj3207) {
    check_object(obj3207);
    var obj3208 = obj3207;
    var keys3209 = Object.keys(obj3207);
    if (js_object_p(obj3208) !== false) {
        var if_res4690 = M0.rvoid();
    } else {
        var if_res4690 = in_js_array(obj3208);
    }
    if_res4690;
    var for_loop3210 = function(_fold_var32114711, _i32124712) {
        lambda_start4710: while (true) {
            let fold_var3211 = _fold_var32114711;
            let i3212 = _i32124712;
            if (M0.__lt_(i3212, keys3209.length) !== false) {
                var k3213 = keys3209[i3212];
                var v3214 = obj3208[keys3209[i3212]];
                if (true !== false) {
                    var fold_var3216 = fold_var3211;
                    var fold_var3217 = M0.cons(M0.values(k3213, v3214), fold_var3216);
                    var fold_var3215 = M0.values(fold_var3217);
                    if (true !== false) {
                        var if_res4691 = M0.not(false);
                    } else {
                        var if_res4691 = false;
                    }
                    if (if_res4691 !== false) {
                        _fold_var32114711 = fold_var3215;
                        _i32124712 = i3212 + 1;
                        continue lambda_start4710;
                    } else {
                        return fold_var3215;
                    }
                } else {
                    return fold_var3211;
                }
            } else {
                return fold_var3211;
            }
        }
    };
    return M1.alt_reverse(for_loop3210(M0.rnull, 0));
};
var js_object_p = function(v3218) {
    return ((typeof(v3218) === "object") && (v3218 !== null)) && M0.not($rjs_core.Primitive.check(v3218));
};
var check_object = function(v3219) {
    if (js_object_p(v3219) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-js-object"), $rjs_core.UString.make("js-object?"), v3219);
    }
};
var __rjs_quoted__ = {};
__rjs_quoted__.js_object_p = js_object_p;
__rjs_quoted__.js_array_p = js_array_p;
__rjs_quoted__.in_js_array = in_js_array;
__rjs_quoted__.js_string = js_string;
export {
    __rjs_quoted__,
    js_object_p,
    js_array_p,
    assoc__gt_object,
    js_array__gt_list,
    js_string__gt_string,
    js_string,
    __eq__gt_$
};