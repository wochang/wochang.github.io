import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
import * as M1 from "../../../runtime/unsafe.rkt.js";
var let_result4941 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("keyword-impersonator"));
var prop_keyword_impersonator = let_result4941.getAt(0);
var keyword_impersonator_p = let_result4941.getAt(1);
var keyword_impersonator_ref = let_result4941.getAt(2);
var keyword_procedure_impersonator_of = function(v3345) {
    if (keyword_impersonator_p(v3345) !== false) {
        return keyword_impersonator_ref(v3345)(v3345);
    } else {
        return false;
    }
};
var let_result4943 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("keyword-procedure"), false, 4, 0, false, M0.list(M0.cons(M0.prop_checked_procedure, true), M0.cons(M0.prop_impersonator_of, keyword_procedure_impersonator_of)), M0.current_inspector(), false, $rjs_core.Pair.makeList(0, 1, 2, 3));
var struct_keyword_procedure = let_result4943.getAt(0);
var mk_kw_proc = let_result4943.getAt(1);
var keyword_procedure_p = let_result4943.getAt(2);
var keyword_procedure_ref = let_result4943.getAt(3);
var keyword_procedure_set_bang_ = let_result4943.getAt(4);
var keyword_procedure_checker = M0.make_struct_field_accessor(keyword_procedure_ref, 0);
var keyword_procedure_proc = M0.make_struct_field_accessor(keyword_procedure_ref, 1);
var keyword_procedure_required = M0.make_struct_field_accessor(keyword_procedure_ref, 2);
var keyword_procedure_allowed = M0.make_struct_field_accessor(keyword_procedure_ref, 3);
var let_result4944 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 0, 0, false, M0.list(M0.cons(M0.prop_method_arity_error, true)));
var struct_keyword_method = let_result4944.getAt(0);
var make_km = let_result4944.getAt(1);
var keyword_method_p = let_result4944.getAt(2);
var km_ref = let_result4944.getAt(3);
var km_set_bang_ = let_result4944.getAt(4);
var generate_arity_string = function(proc3346) {
    var let_result4945 = procedure_keywords(proc3346);
    var req3347 = let_result4945.getAt(0);
    var allowed3348 = let_result4945.getAt(1);
    var a3349 = M0.procedure_arity(proc3346);
    var keywords_desc3350 = function(opt3352, req3353) {
        var temp4951 = $rjs_core.UString.make("~a with keyword~a~a");
        if (M0.null_p(M0.cdr(req3353)) !== false) {
            var if_res4950 = M0.format($rjs_core.UString.make("an ~aargument"), opt3352);
        } else {
            var if_res4950 = M0.format($rjs_core.UString.make("~aarguments"), opt3352);
        }
        if (M0.null_p(M0.cdr(req3353)) !== false) {
            var if_res4949 = $rjs_core.UString.make("");
        } else {
            var if_res4949 = $rjs_core.UString.make("s");
        }
        var tmp3354 = M0.length(req3353);
        if (M0.equal_p(tmp3354, 1) !== false) {
            var if_res4948 = M0.format($rjs_core.UString.make(" ~a"), M0.car(req3353));
        } else {
            if (M0.equal_p(tmp3354, 2) !== false) {
                var if_res4947 = M0.format($rjs_core.UString.make(" ~a and ~a"), M0.car(req3353), M0.cadr(req3353));
            } else {
                var loop3355 = function(req3356) {
                    if (M0.null_p(M0.cdr(req3356)) !== false) {
                        return M0.format($rjs_core.UString.make(" and ~a"), M0.car(req3356));
                    } else {
                        return M0.format($rjs_core.UString.make(" ~a,~a"), M0.car(req3356), loop3355(M0.cdr(req3356)));
                    }
                };
                var if_res4947 = loop3355(req3353);
            }
            var if_res4948 = if_res4947;
        }
        return M0.format(temp4951, if_res4950, if_res4949, if_res4948);
    };
    var method_adjust3351 = function(a3357) {
        var or_part3358 = okm_p(proc3346);
        if (or_part3358 !== false) {
            var if_res4952 = or_part3358;
        } else {
            var if_res4952 = keyword_method_p(proc3346);
        }
        if (if_res4952 !== false) {
            if (M0.zero_p(a3357) !== false) {
                return 0;
            } else {
                return M0.sub1(a3357);
            }
        } else {
            return a3357;
        }
    };
    if (M0.number_p(a3349) !== false) {
        var a3359 = method_adjust3351(a3349);
        var if_res4961 = M0.format($rjs_core.UString.make("~a"), a3359);
    } else {
        if (M0.arity_at_least_p(a3349) !== false) {
            var a3360 = method_adjust3351(M0.arity_at_least_value(a3349));
            var if_res4960 = M0.format($rjs_core.UString.make("at least ~a"), a3360);
        } else {
            var if_res4960 = $rjs_core.UString.make("a different number");
        }
        var if_res4961 = if_res4960;
    }
    if (M0.null_p(req3347) !== false) {
        var if_res4959 = $rjs_core.UString.make("");
    } else {
        var if_res4959 = M0.format($rjs_core.UString.make(" plus ~a"), keywords_desc3350($rjs_core.UString.make(""), req3347));
    }
    if (allowed3348 !== false) {
        var loop3362 = function(_req33635289, _allowed33645290) {
            lambda_start5288: while (true) {
                let req3363 = _req33635289;
                let allowed3364 = _allowed33645290;
                if (M0.null_p(req3363) !== false) {
                    return allowed3364;
                } else {
                    if (M0.eq_p(M0.car(req3363), M0.car(allowed3364)) !== false) {
                        _req33635289 = M0.cdr(req3363);
                        _allowed33645290 = M0.cdr(allowed3364);
                        continue lambda_start5288;
                    } else {
                        return M0.cons(M0.car(allowed3364), loop3362(req3363, M0.cdr(allowed3364)));
                    }
                }
            }
        };
        var others3361 = loop3362(req3347, allowed3348);
        if (M0.null_p(others3361) !== false) {
            var if_res4957 = $rjs_core.UString.make("");
        } else {
            var if_res4957 = M0.format($rjs_core.UString.make(" plus ~a"), keywords_desc3350($rjs_core.UString.make("optional "), others3361));
        }
        var if_res4958 = if_res4957;
    } else {
        var if_res4958 = $rjs_core.UString.make(" plus arbitrary keyword arguments");
    }
    return M0.string_append(if_res4961, if_res4959, if_res4958);
};
var let_result4962 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 1, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string)), M0.current_inspector(), 0);
var struct_okp = let_result4962.getAt(0);
var make_optional_keyword_procedure = let_result4962.getAt(1);
var okp_p = let_result4962.getAt(2);
var okp_ref = let_result4962.getAt(3);
var okp_set_bang_ = let_result4962.getAt(4);
var let_result4963 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_okp, 0, 0, false, M0.list(M0.cons(M0.prop_method_arity_error, true)));
var struct_okm = let_result4963.getAt(0);
var make_optional_keyword_method = let_result4963.getAt(1);
var okm_p = let_result4963.getAt(2);
var okm_ref = let_result4963.getAt(3);
var okm_set_bang_ = let_result4963.getAt(4);
var let_result4964 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("named-keyword-procedure"));
var prop_named_keyword_procedure = let_result4964.getAt(0);
var named_keyword_procedure_p = let_result4964.getAt(1);
var keyword_procedure_name_plus_fail = let_result4964.getAt(2);
var let_result4966 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("procedure"), function(v3365, info_l3366) {
    if (M0.exact_integer_p(v3365) !== false) {
        return M0.make_struct_field_accessor(M0.list_ref(info_l3366, 3), v3365);
    } else {
        return false;
    }
});
var prop_procedure_accessor = let_result4966.getAt(0);
var procedure_accessor_p = let_result4966.getAt(1);
var procedure_accessor_ref = let_result4966.getAt(2);
var let_result4967 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("procedure"), false, M0.list(M0.cons(M0.prop_procedure, M0.values), M0.cons(prop_procedure_accessor, M0.values)), true);
var new_prop_procedure = let_result4967.getAt(0);
var new_procedure_p = let_result4967.getAt(1);
var new_procedure_ref = let_result4967.getAt(2);
var let_result4968 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v3367) {
    return kpp_ref(v3367, 0);
})));
var struct_keyword_procedure_impersonator = let_result4968.getAt(0);
var make_kpp = let_result4968.getAt(1);
var keyword_procedure_impersonator_p = let_result4968.getAt(2);
var kpp_ref = let_result4968.getAt(3);
var kpp_set_bang_ = let_result4968.getAt(4);
var let_result4969 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v3368) {
    return kmp_ref(v3368, 0);
})));
var struct_keyword_method_impersonator = let_result4969.getAt(0);
var make_kmp = let_result4969.getAt(1);
var keyword_method_impersonator_p = let_result4969.getAt(2);
var kmp_ref = let_result4969.getAt(3);
var kmp_set_bang_ = let_result4969.getAt(4);
var let_result4970 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_okp, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v3369) {
    return okpp_ref(v3369, 0);
})));
var struct_okpp = let_result4970.getAt(0);
var make_optional_keyword_procedure_impersonator = let_result4970.getAt(1);
var okpp_p = let_result4970.getAt(2);
var okpp_ref = let_result4970.getAt(3);
var okpp_set_bang_ = let_result4970.getAt(4);
var let_result4971 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_okp, 1, 0, false, M0.list(M0.cons(prop_keyword_impersonator, function(v3370) {
    return okmp_ref(v3370, 0);
})));
var struct_okmp = let_result4971.getAt(0);
var make_optional_keyword_method_impersonator = let_result4971.getAt(1);
var okmp_p = let_result4971.getAt(2);
var okmp_ref = let_result4971.getAt(3);
var okmp_set_bang_ = let_result4971.getAt(4);
var let_result4972 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_procedure_by_arity_error = let_result4972.getAt(0);
var make_kp_by_ae = let_result4972.getAt(1);
var kp_by_ae_p = let_result4972.getAt(2);
var kp_by_ae_ref = let_result4972.getAt(3);
var kp_by_ae_set_bang_ = let_result4972.getAt(4);
var let_result4973 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_method_by_arity_error = let_result4973.getAt(0);
var make_km_by_ae = let_result4973.getAt(1);
var km_by_ae_p = let_result4973.getAt(2);
var km_by_ae_ref = let_result4973.getAt(3);
var km_by_ae_set_bang_ = let_result4973.getAt(4);
var let_result4974 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_procedure_impersonator, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_procedure_impersonator_by_arity_error = let_result4974.getAt(0);
var make_kpi_by_ae = let_result4974.getAt(1);
var kpi_by_ae_p = let_result4974.getAt(2);
var kpi_by_ae_ref = let_result4974.getAt(3);
var kpi_by_ae_set_bang_ = let_result4974.getAt(4);
var let_result4975 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("procedure"), struct_keyword_method_impersonator, 0, 0, false, M0.list(M0.cons(M0.prop_arity_string, generate_arity_string), M0.cons(M0.prop_incomplete_arity, true)));
var struct_keyword_method_impersonator_by_arity_error = let_result4975.getAt(0);
var make_kmi_by_ae = let_result4975.getAt(1);
var kmi_by_ae_p = let_result4975.getAt(2);
var kmi_by_ae_ref = let_result4975.getAt(3);
var kmi_by_ae_set_bang_ = let_result4975.getAt(4);
var make_required = function(name3371, realm3372, fail_proc3373, method_p3374, impersonator_p3375) {
    var or_part3381 = name3371;
    if (or_part3381 !== false) {
        var if_res4979 = or_part3381;
    } else {
        var if_res4979 = $rjs_core.PrimitiveSymbol.make("unknown");
    }
    if (impersonator_p3375 !== false) {
        if (method_p3374 !== false) {
            var if_res4976 = struct_keyword_method_impersonator_by_arity_error;
        } else {
            var if_res4976 = struct_keyword_procedure_impersonator_by_arity_error;
        }
        var if_res4978 = if_res4976;
    } else {
        if (method_p3374 !== false) {
            var if_res4977 = struct_keyword_method_by_arity_error;
        } else {
            var if_res4977 = struct_keyword_procedure_by_arity_error;
        }
        var if_res4978 = if_res4977;
    }
    var let_result4980 = M0.make_struct_type(if_res4979, if_res4978, 0, 0, false, M0.list(M0.cons(prop_named_keyword_procedure, M0.vector(name3371, realm3372, fail_proc3373))), M0.current_inspector(), fail_proc3373);
    var s_3376 = let_result4980.getAt(0);
    var mk3377 = let_result4980.getAt(1);
    var __p3378 = let_result4980.getAt(2);
    var __ref3379 = let_result4980.getAt(3);
    var __set_bang_3380 = let_result4980.getAt(4);
    return mk3377;
};
var cl4981 = function(proc3382) {
    var proc_name3383 = M0.object_name(proc3382);
    if (M0.procedure_p(proc3382) !== false) {
        var if_res4984 = M0.__rjs_quoted__.procedure_realm(proc3382);
    } else {
        var if_res4984 = false;
    }
    var proc_realm3384 = if_res4984;
    var plain_proc3385 = $rjs_core.attachProcedureArity(function(...args33864985) {
        var args3386 = $rjs_core.Pair.listFromArray(args33864985);
        return M0.apply(proc3382, M0.rnull, M0.rnull, args3386);
    });
    if (M0.procedure_p(proc3382) !== false) {
        var if_res4986 = M0.arithmetic_shift(M0.procedure_arity_mask(proc3382), -2);
    } else {
        var if_res4986 = false;
    }
    var mask3387 = if_res4986;
    if (M0.procedure_p(plain_proc3385) !== false) {
        if (M0.exact_integer_p(mask3387) !== false) {
            if (M0.symbol_p(proc_name3383) !== false) {
                if (M0.symbol_p(proc_realm3384) !== false) {
                    var if_res4987 = M0.__rjs_quoted__.procedure_reduce_arity_mask(plain_proc3385, mask3387, proc_name3383, proc_realm3384);
                } else {
                    var if_res4987 = M0.__rjs_quoted__.procedure_reduce_arity_mask(plain_proc3385, mask3387, false, $rjs_core.PrimitiveSymbol.make("ignored"));
                }
                var if_res4988 = if_res4987;
            } else {
                var if_res4988 = M0.__rjs_quoted__.procedure_reduce_arity_mask(plain_proc3385, mask3387, false, $rjs_core.PrimitiveSymbol.make("ignored"));
            }
            var if_res4989 = if_res4988;
        } else {
            var if_res4989 = plain_proc3385;
        }
        var if_res4990 = if_res4989;
    } else {
        var if_res4990 = plain_proc3385;
    }
    return make_keyword_procedure(proc3382, if_res4990);
};
var cl4982 = function(proc3388, plain_proc3389) {
    if (M0.procedure_p(proc3388) !== false) {
        var if_res4991 = M0.procedure_arity_mask(proc3388);
    } else {
        var if_res4991 = false;
    }
    return make_optional_keyword_procedure(make_keyword_checker(M0.rnull, false, if_res4991), proc3388, M0.rnull, false, plain_proc3389);
};
var make_keyword_procedure = $rjs_core.attachProcedureArity(function() {
    var fixed_lam4983 = {
        '1': cl4981,
        '2': cl4982
    } [arguments.length];
    if (fixed_lam4983 !== undefined) {
        return fixed_lam4983.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var keyword_apply = $rjs_core.attachProcedureArity(function(proc3390, kws3391, kw_vals3392, normal_args3393, ...normal_argss33944992) {
    var normal_argss3394 = $rjs_core.Pair.listFromArray(normal_argss33944992);
    var type_error3395 = function(what3396, which3397) {
        return M0.apply(M0.raise_argument_error, $rjs_core.PrimitiveSymbol.make("keyword-apply"), what3396, which3397, proc3390, kws3391, kw_vals3392, normal_args3393, normal_argss3394);
    };
    if (M0.procedure_p(proc3390) !== false) {
        var if_res4993 = M0.rvoid();
    } else {
        var if_res4993 = type_error3395($rjs_core.UString.make("procedure?"), 0);
    }
    if_res4993;
    var loop3398 = function(_ks33995304) {
        lambda_start5303: while (true) {
            let ks3399 = _ks33995304;
            if (M0.null_p(ks3399) !== false) {
                return M0.rvoid();
            } else {
                var or_part3400 = M0.not(M0.pair_p(ks3399));
                if (or_part3400 !== false) {
                    var if_res4994 = or_part3400;
                } else {
                    var if_res4994 = M0.not(M0.keyword_p(M0.car(ks3399)));
                }
                if (if_res4994 !== false) {
                    return type_error3395($rjs_core.UString.make("(listof keyword?)"), 1);
                } else {
                    if (M0.null_p(M0.cdr(ks3399)) !== false) {
                        return M0.rvoid();
                    } else {
                        var or_part3401 = M0.not(M0.pair_p(M0.cdr(ks3399)));
                        if (or_part3401 !== false) {
                            var if_res4995 = or_part3401;
                        } else {
                            var if_res4995 = M0.not(M0.keyword_p(M0.cadr(ks3399)));
                        }
                        if (if_res4995 !== false) {
                            _ks33995304 = M0.cdr(ks3399);
                            continue lambda_start5303;
                        } else {
                            if (M0.keyword_lt__p(M0.car(ks3399), M0.cadr(ks3399)) !== false) {
                                _ks33995304 = M0.cdr(ks3399);
                                continue lambda_start5303;
                            } else {
                                return type_error3395($rjs_core.UString.make("(and/c (listof? keyword?) sorted? distinct?)"), 1);
                            }
                        }
                    }
                }
            }
        }
    };
    loop3398(kws3391);
    if (M0.list_p(kw_vals3392) !== false) {
        var if_res5001 = M0.rvoid();
    } else {
        var if_res5001 = type_error3395($rjs_core.UString.make("list?"), 2);
    }
    if_res5001;
    if (M0.__eq_(M0.length(kws3391), M0.length(kw_vals3392)) !== false) {
        var if_res5002 = M0.rvoid();
    } else {
        var if_res5002 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword-apply"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("keyword list length does not match value list length"), $rjs_core.UString.make("keyword list length"), M0.length(kws3391), $rjs_core.UString.make("value list length"), M0.length(kw_vals3392), $rjs_core.UString.make("keyword list"), kws3391, $rjs_core.UString.make("value list"), kw_vals3392);
    }
    if_res5002;
    var loop3403 = function(normal_argss3404, pos3405) {
        if (M0.null_p(M0.cdr(normal_argss3404)) !== false) {
            var l3406 = M0.car(normal_argss3404);
            if (M0.list_p(l3406) !== false) {
                return l3406;
            } else {
                return type_error3395($rjs_core.UString.make("list?"), pos3405);
            }
        } else {
            return M0.cons(M0.car(normal_argss3404), loop3403(M0.cdr(normal_argss3404), M0.add1(pos3405)));
        }
    };
    var normal_args3402 = loop3403(M0.cons(normal_args3393, normal_argss3394), 3);
    if (M0.null_p(kws3391) !== false) {
        return M0.apply(proc3390, normal_args3402);
    } else {
        return M0.apply(keyword_procedure_extract_by_method(kws3391, 2 + M0.length(normal_args3402), proc3390, 0), kws3391, kw_vals3392, normal_args3402);
    }
});
var procedure_keywords = function(_p34075307) {
    lambda_start5306: while (true) {
        let p3407 = _p34075307;
        if (keyword_procedure_p(p3407) !== false) {
            return M0.values(keyword_procedure_required(p3407), keyword_procedure_allowed(p3407));
        } else {
            if (M0.procedure_p(p3407) !== false) {
                if (new_procedure_p(p3407) !== false) {
                    var v3408 = new_procedure_ref(p3407);
                    if (M0.procedure_p(v3408) !== false) {
                        _p34075307 = v3408;
                        continue lambda_start5306;
                    } else {
                        var a3409 = procedure_accessor_ref(p3407);
                        if (a3409 !== false) {
                            _p34075307 = a3409(p3407);
                            continue lambda_start5306;
                        } else {
                            return M0.values(M0.rnull, M0.rnull);
                        }
                    }
                } else {
                    return M0.values(M0.rnull, M0.rnull);
                }
            } else {
                return M0.__rjs_quoted__.raise_argument_error_times_($rjs_core.PrimitiveSymbol.make("procedure-keywords"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("procedure?"), p3407);
            }
        }
    }
};
var extract_keyword_root = function(_p34105309) {
    lambda_start5308: while (true) {
        let p3410 = _p34105309;
        if (keyword_procedure_p(p3410) !== false) {
            return p3410;
        } else {
            if (M0.procedure_p(p3410) !== false) {
                var v3411 = new_procedure_ref(p3410, false);
                if (M0.procedure_p(v3411) !== false) {
                    _p34105309 = v3411;
                    continue lambda_start5308;
                } else {
                    var a3412 = procedure_accessor_ref(p3410, false);
                    if (a3412 !== false) {
                        _p34105309 = a3412(p3410);
                        continue lambda_start5308;
                    } else {
                        return false;
                    }
                }
            } else {
                return false;
            }
        }
    }
};
var missing_kw = $rjs_core.attachProcedureArity(function(proc3413, ...args34145015) {
    var args3414 = $rjs_core.Pair.listFromArray(args34145015);
    return M0.apply(keyword_procedure_extract_by_method(M0.rnull, 0, proc3413, 0), M0.rnull, M0.rnull, args3414);
});
var check_kw_args = function(p3415, kws3416) {
    var loop3417 = function(_kws34185313, _required34195314, _allowed34205315) {
        lambda_start5312: while (true) {
            let kws3418 = _kws34185313;
            let required3419 = _required34195314;
            let allowed3420 = _allowed34205315;
            if (M0.null_p(kws3418) !== false) {
                if (M0.null_p(required3419) !== false) {
                    return M0.values(false, false);
                } else {
                    return M0.values(M0.car(required3419), false);
                }
            } else {
                if (M0.pair_p(required3419) !== false) {
                    var if_res5017 = M0.eq_p(M0.car(required3419), M0.car(kws3418));
                } else {
                    var if_res5017 = false;
                }
                if (if_res5017 !== false) {
                    var temp5020 = M0.cdr(kws3418);
                    var temp5019 = M0.cdr(required3419);
                    if (allowed3420 !== false) {
                        var if_res5018 = M0.cdr(allowed3420);
                    } else {
                        var if_res5018 = false;
                    }
                    _kws34185313 = temp5020;
                    _required34195314 = temp5019;
                    _allowed34205315 = if_res5018;
                    continue lambda_start5312;
                } else {
                    if (M0.not(allowed3420) !== false) {
                        _kws34185313 = M0.cdr(kws3418);
                        _required34195314 = required3419;
                        _allowed34205315 = false;
                        continue lambda_start5312;
                    } else {
                        if (M0.pair_p(allowed3420) !== false) {
                            if (M0.eq_p(M0.car(allowed3420), M0.car(kws3418)) !== false) {
                                _kws34185313 = M0.cdr(kws3418);
                                _required34195314 = required3419;
                                _allowed34205315 = M0.cdr(allowed3420);
                                continue lambda_start5312;
                            } else {
                                _kws34185313 = kws3418;
                                _required34195314 = required3419;
                                _allowed34205315 = M0.cdr(allowed3420);
                                continue lambda_start5312;
                            }
                        } else {
                            return M0.values(false, M0.car(kws3418));
                        }
                    }
                }
            }
        }
    };
    return loop3417(kws3416, keyword_procedure_required(p3415), keyword_procedure_allowed(p3415));
};
var make_keyword_checker = function(req_kws3421, allowed_kws3422, arity_mask3423) {
    if (M0.not(allowed_kws3422) !== false) {
        if (M0.null_p(req_kws3421) !== false) {
            return function(kws3424, a3425) {
                if (true !== false) {
                    return M0.bitwise_bit_set_p(arity_mask3423, a3425);
                } else {
                    return false;
                }
            };
        } else {
            return function(kws3426, a3427) {
                if (subset_p(req_kws3421, kws3426) !== false) {
                    return M0.bitwise_bit_set_p(arity_mask3423, a3427);
                } else {
                    return false;
                }
            };
        }
    } else {
        if (M0.null_p(allowed_kws3422) !== false) {
            return function(kws3428, a3429) {
                if (M0.null_p(kws3428) !== false) {
                    return M0.bitwise_bit_set_p(arity_mask3423, a3429);
                } else {
                    return false;
                }
            };
        } else {
            if (M0.null_p(req_kws3421) !== false) {
                return function(kws3430, a3431) {
                    if (subset_p(kws3430, allowed_kws3422) !== false) {
                        return M0.bitwise_bit_set_p(arity_mask3423, a3431);
                    } else {
                        return false;
                    }
                };
            } else {
                if (M0.list_p(req_kws3421) !== false) {
                    if (M0.list_p(allowed_kws3422) !== false) {
                        var if_res5031 = M0.eq_p(M0.length(req_kws3421), M0.length(allowed_kws3422));
                    } else {
                        var if_res5031 = false;
                    }
                    var if_res5032 = if_res5031;
                } else {
                    var if_res5032 = false;
                }
                if (if_res5032 !== false) {
                    return function(kws3432, a3433) {
                        var loop3434 = function(_kws34355323, _req_kws34365324) {
                            lambda_start5322: while (true) {
                                let kws3435 = _kws34355323;
                                let req_kws3436 = _req_kws34365324;
                                if (M0.null_p(req_kws3436) !== false) {
                                    return M0.null_p(kws3435);
                                } else {
                                    if (M0.null_p(kws3435) !== false) {
                                        return false;
                                    } else {
                                        if (M0.eq_p(M0.car(kws3435), M0.car(req_kws3436)) !== false) {
                                            _kws34355323 = M0.cdr(kws3435);
                                            _req_kws34365324 = M0.cdr(req_kws3436);
                                            continue lambda_start5322;
                                        } else {
                                            return false;
                                        }
                                    }
                                }
                            }
                        };
                        if (loop3434(kws3432, req_kws3421) !== false) {
                            return M0.bitwise_bit_set_p(arity_mask3423, a3433);
                        } else {
                            return false;
                        }
                    };
                } else {
                    return function(kws3437, a3438) {
                        if (subsets_p(req_kws3421, kws3437, allowed_kws3422) !== false) {
                            return M0.bitwise_bit_set_p(arity_mask3423, a3438);
                        } else {
                            return false;
                        }
                    };
                }
            }
        }
    }
};
var subset_p = function(_l134395327, _l234405328) {
    lambda_start5326: while (true) {
        let l13439 = _l134395327;
        let l23440 = _l234405328;
        if (M0.null_p(l13439) !== false) {
            return true;
        } else {
            if (M0.null_p(l23440) !== false) {
                return false;
            } else {
                if (M0.eq_p(M0.car(l13439), M0.car(l23440)) !== false) {
                    _l134395327 = M0.cdr(l13439);
                    _l234405328 = M0.cdr(l23440);
                    continue lambda_start5326;
                } else {
                    _l134395327 = l13439;
                    _l234405328 = M0.cdr(l23440);
                    continue lambda_start5326;
                }
            }
        }
    }
};
var subsets_p = function(_l134415330, _l234425331, _l334435332) {
    lambda_start5329: while (true) {
        let l13441 = _l134415330;
        let l23442 = _l234425331;
        let l33443 = _l334435332;
        if (M0.null_p(l13441) !== false) {
            return subset_p(l23442, l33443);
        } else {
            if (M0.null_p(l23442) !== false) {
                return false;
            } else {
                if (M0.null_p(l33443) !== false) {
                    return false;
                } else {
                    var v23444 = M0.car(l23442);
                    if (M0.eq_p(M0.car(l13441), v23444) !== false) {
                        _l134415330 = M0.cdr(l13441);
                        _l234425331 = M0.cdr(l23442);
                        _l334435332 = M0.cdr(l33443);
                        continue lambda_start5329;
                    } else {
                        if (M0.eq_p(v23444, M0.car(l33443)) !== false) {
                            _l134415330 = l13441;
                            _l234425331 = M0.cdr(l23442);
                            _l334435332 = M0.cdr(l33443);
                            continue lambda_start5329;
                        } else {
                            _l134415330 = l13441;
                            _l234425331 = l23442;
                            _l334435332 = M0.cdr(l33443);
                            continue lambda_start5329;
                        }
                    }
                }
            }
        }
    }
};
var keyword_procedure_extract_by_method = function(_kws34455335, _n34465336, _p34475337, _method_n34485338) {
    lambda_start5333: while (true) {
        let kws3445 = _kws34455335;
        let n3446 = _n34465336;
        let p3447 = _p34475337;
        let method_n3448 = _method_n34485338;
        if (keyword_procedure_p(p3447) !== false) {
            var if_res5050 = keyword_procedure_checker(p3447)(kws3445, n3446);
        } else {
            var if_res5050 = false;
        }
        if (if_res5050 !== false) {
            return keyword_procedure_proc(p3447);
        } else {
            if (M0.not(keyword_procedure_p(p3447)) !== false) {
                if (M0.procedure_p(p3447) !== false) {
                    if (new_procedure_p(p3447) !== false) {
                        var a3451 = procedure_accessor_ref(p3447);
                        if (a3451 !== false) {
                            var if_res5051 = a3451(p3447);
                        } else {
                            var if_res5051 = false;
                        }
                        var if_res5052 = if_res5051;
                    } else {
                        var if_res5052 = false;
                    }
                    var or_part3450 = if_res5052;
                    if (or_part3450 !== false) {
                        var if_res5055 = or_part3450;
                    } else {
                        var or_part3452 = M0.procedure_extract_target(p3447);
                        if (or_part3452 !== false) {
                            var if_res5054 = or_part3452;
                        } else {
                            if (new_procedure_p(p3447) !== false) {
                                var if_res5053 = $rjs_core.PrimitiveSymbol.make("method");
                            } else {
                                var if_res5053 = false;
                            }
                            var if_res5054 = if_res5053;
                        }
                        var if_res5055 = if_res5054;
                    }
                    var if_res5056 = if_res5055;
                } else {
                    var if_res5056 = false;
                }
                var if_res5057 = if_res5056;
            } else {
                var if_res5057 = false;
            }
            var p23449 = if_res5057;
            if (p23449 !== false) {
                if (M0.eq_p(p23449, $rjs_core.PrimitiveSymbol.make("method")) !== false) {
                    var p33453 = keyword_procedure_extract_by_method(kws3445, M0.add1(n3446), new_procedure_ref(p3447), M0.add1(method_n3448));
                    return $rjs_core.attachProcedureArity(function(kws3454, kw_args3455, ...args34565058) {
                        var args3456 = $rjs_core.Pair.listFromArray(args34565058);
                        return M0.apply(p33453, kws3454, kw_args3455, M0.cons(p3447, args3456));
                    });
                } else {
                    _kws34455335 = kws3445;
                    _n34465336 = n3446;
                    _p34475337 = p23449;
                    _method_n34485338 = method_n3448;
                    continue lambda_start5333;
                }
            } else {
                return $rjs_core.attachProcedureArity(function(kws3457, kw_args3458, ...args34595060) {
                    var args3459 = $rjs_core.Pair.listFromArray(args34595060);
                    if (keyword_procedure_p(p3447) !== false) {
                        var if_res5061 = check_kw_args(p3447, kws3457);
                    } else {
                        var if_res5061 = M0.values(false, M0.car(kws3457));
                    }
                    var let_result5062 = if_res5061;
                    var missing_kw3460 = let_result5062.getAt(0);
                    var extra_kw3461 = let_result5062.getAt(1);
                    var or_part3466 = keyword_method_p(p3447);
                    if (or_part3466 !== false) {
                        var if_res5063 = or_part3466;
                    } else {
                        var if_res5063 = okm_p(p3447);
                    }
                    if (if_res5063 !== false) {
                        var if_res5064 = 1;
                    } else {
                        var if_res5064 = 0;
                    }
                    var method_n3465 = method_n3448 + if_res5064;
                    if (M0.__gt__eq_(n3446, method_n3465) !== false) {
                        var if_res5065 = n3446 - method_n3465;
                    } else {
                        var if_res5065 = n3446;
                    }
                    var n3462 = if_res5065;
                    if (M0.null_p(args3459) !== false) {
                        var if_res5066 = M0.null_p(kws3457);
                    } else {
                        var if_res5066 = false;
                    }
                    if (if_res5066 !== false) {
                        var if_res5067 = $rjs_core.UString.make("");
                    } else {
                        var if_res5067 = M0.apply(M0.string_append, $rjs_core.UString.make("\n  arguments...:"), M0.append(M0.map(function(v3467) {
                            return M0.format($rjs_core.UString.make("\n   ~e"), v3467);
                        }, args3459), M0.map(function(kw3468, kw_arg3469) {
                            return M0.format($rjs_core.UString.make("\n   ~a ~e"), kw3468, kw_arg3469);
                        }, kws3457, kw_args3458)));
                    }
                    var args_str3463 = if_res5067;
                    var proc_name3464 = function(p3470) {
                        if (named_keyword_procedure_p(p3470) !== false) {
                            var if_res5068 = M0.vector_ref(keyword_procedure_name_plus_fail(p3470), 0);
                        } else {
                            var if_res5068 = false;
                        }
                        var or_part3471 = if_res5068;
                        if (or_part3471 !== false) {
                            return or_part3471;
                        } else {
                            var or_part3472 = M0.object_name(p3470);
                            if (or_part3472 !== false) {
                                return or_part3472;
                            } else {
                                return p3470;
                            }
                        }
                    };
                    var application_message3473 = function(str3474) {
                        return M0.__rjs_quoted__.error_message__gt_adjusted_string($rjs_core.PrimitiveSymbol.make("application"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), str3474, $rjs_core.PrimitiveSymbol.make("racket/primitive"));
                    };
                    var or_part3475 = extra_kw3461;
                    if (or_part3475 !== false) {
                        var if_res5077 = or_part3475;
                    } else {
                        var if_res5077 = missing_kw3460;
                    }
                    if (if_res5077 !== false) {
                        var if_res5078 = M0.__rjs_quoted__.exn_fail_contract;
                    } else {
                        var if_res5078 = M0.__rjs_quoted__.exn_fail_contract_arity;
                    }
                    if (extra_kw3461 !== false) {
                        if (keyword_procedure_p(p3447) !== false) {
                            var if_res5072 = application_message3473(M0.format(M0.string_append($rjs_core.UString.make("procedure does not expect an argument with given keyword\n"), $rjs_core.UString.make("  procedure: ~a\n"), $rjs_core.UString.make("  given keyword: ~a"), $rjs_core.UString.make("~a")), proc_name3464(p3447), extra_kw3461, args_str3463));
                        } else {
                            if (M0.procedure_p(p3447) !== false) {
                                var if_res5071 = application_message3473(M0.format(M0.string_append($rjs_core.UString.make("procedure does not accept keyword arguments\n"), $rjs_core.UString.make("  procedure: ~a"), $rjs_core.UString.make("~a")), proc_name3464(p3447), args_str3463));
                            } else {
                                var if_res5071 = application_message3473(M0.format(M0.string_append($rjs_core.UString.make("not a procedure;\n"), $rjs_core.UString.make(" expected a procedure that can be applied to arguments\n"), $rjs_core.UString.make("  given: ~e"), $rjs_core.UString.make("~a")), p3447, args_str3463));
                            }
                            var if_res5072 = if_res5071;
                        }
                        var if_res5076 = if_res5072;
                    } else {
                        if (missing_kw3460 !== false) {
                            var if_res5075 = application_message3473(M0.format(M0.string_append($rjs_core.UString.make("required keyword argument not supplied\n"), $rjs_core.UString.make("  procedure: ~a\n"), $rjs_core.UString.make("  required keyword: ~a"), $rjs_core.UString.make("~a")), proc_name3464(p3447), missing_kw3460, args_str3463));
                        } else {
                            var temp5074 = M0.string_append($rjs_core.UString.make("no case matching ~a non-keyword argument~a\n"), $rjs_core.UString.make("  procedure: ~a"), $rjs_core.UString.make("~a"));
                            if (M0.__eq_(1, n3462 - 2) !== false) {
                                var if_res5073 = $rjs_core.UString.make("");
                            } else {
                                var if_res5073 = $rjs_core.UString.make("s");
                            }
                            var if_res5075 = application_message3473(M0.format(temp5074, n3462 - 2, if_res5073, proc_name3464(p3447), args_str3463));
                        }
                        var if_res5076 = if_res5075;
                    }
                    return M0.raise(if_res5078(if_res5076, M0.current_continuation_marks()));
                });
            }
        }
    }
};
var keyword_procedure_extract = function(p3476, kws3477, n3478) {
    return keyword_procedure_extract_by_method(kws3477, n3478, p3476, 0);
};
var cl5081 = function(proc3479, arity3480, req_kw3481, allowed_kw3482, name3483, realm3484) {
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity"), proc3479, arity3480, false, name3483, realm3484, req_kw3481, allowed_kw3482);
};
var cl5082 = function(proc3485, arity3486, req_kw3487, allowed_kw3488, name3489) {
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity"), proc3485, arity3486, false, name3489, $rjs_core.PrimitiveSymbol.make("racket"), req_kw3487, allowed_kw3488);
};
var cl5083 = function(proc3490, arity3491, req_kw3492, allowed_kw3493) {
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity"), proc3490, arity3491, false, false, $rjs_core.PrimitiveSymbol.make("racket"), req_kw3492, allowed_kw3493);
};
var procedure_reduce_keyword_arity = $rjs_core.attachProcedureArity(function() {
    var fixed_lam5084 = {
        '6': cl5081,
        '5': cl5082,
        '4': cl5083
    } [arguments.length];
    if (fixed_lam5084 !== undefined) {
        return fixed_lam5084.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 5, 6]);
var cl5085 = function(proc3494, mask3495, req_kw3496, allowed_kw3497, name3498, realm3499) {
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity-mask"), proc3494, false, mask3495, name3498, realm3499, req_kw3496, allowed_kw3497);
};
var cl5086 = function(proc3500, mask3501, req_kw3502, allowed_kw3503, name3504) {
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity-mask"), proc3500, false, mask3501, name3504, $rjs_core.PrimitiveSymbol.make("racket"), req_kw3502, allowed_kw3503);
};
var cl5087 = function(proc3505, mask3506, req_kw3507, allowed_kw3508) {
    return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-reduce-keyword-arity-mask"), proc3505, false, mask3506, false, $rjs_core.PrimitiveSymbol.make("racket"), req_kw3507, allowed_kw3508);
};
var procedure_reduce_keyword_arity_mask = $rjs_core.attachProcedureArity(function() {
    var fixed_lam5088 = {
        '6': cl5085,
        '5': cl5086,
        '4': cl5087
    } [arguments.length];
    if (fixed_lam5088 !== undefined) {
        return fixed_lam5088.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 5, 6]);
var do_procedure_reduce_keyword_arity = function(who3509, proc3510, arity3511, mask3512, name3513, realm3514, req_kw3515, allowed_kw3516) {
    if (okp_p(proc3510) !== false) {
        var if_res5089 = okp_ref(proc3510, 0);
    } else {
        var if_res5089 = proc3510;
    }
    var p3518 = if_res5089;
    if (arity3511 !== false) {
        var if_res5090 = M0.__rjs_quoted__.procedure_reduce_arity(p3518, arity3511, name3513, realm3514);
    } else {
        var if_res5090 = M0.__rjs_quoted__.procedure_reduce_arity_mask(p3518, mask3512, name3513, realm3514);
    }
    var plain_proc3517 = if_res5090;
    var sorted_p3519 = function(kws3520) {
        var loop3521 = function(_kws35225356) {
            lambda_start5355: while (true) {
                let kws3522 = _kws35225356;
                if (M0.null_p(kws3522) !== false) {
                    return true;
                } else {
                    if (M0.null_p(M0.cdr(kws3522)) !== false) {
                        return true;
                    } else {
                        if (M0.keyword_lt__p(M0.car(kws3522), M0.cadr(kws3522)) !== false) {
                            _kws35225356 = M0.cdr(kws3522);
                            continue lambda_start5355;
                        } else {
                            return false;
                        }
                    }
                }
            }
        };
        return loop3521(kws3520);
    };
    if (M0.list_p(req_kw3515) !== false) {
        if (M0.andmap(M0.keyword_p, req_kw3515) !== false) {
            var if_res5094 = sorted_p3519(req_kw3515);
        } else {
            var if_res5094 = false;
        }
        var if_res5095 = if_res5094;
    } else {
        var if_res5095 = false;
    }
    if (if_res5095 !== false) {
        var if_res5099 = M0.rvoid();
    } else {
        var temp5098 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
        var temp5097 = $rjs_core.UString.make("(and/c (listof? keyword?) sorted? distinct?)");
        var or_part3523 = arity3511;
        if (or_part3523 !== false) {
            var if_res5096 = or_part3523;
        } else {
            var if_res5096 = mask3512;
        }
        var if_res5099 = M0.__rjs_quoted__.raise_argument_error_times_(who3509, temp5098, temp5097, 2, proc3510, if_res5096, req_kw3515, allowed_kw3516);
    }
    if_res5099;
    if (allowed_kw3516 !== false) {
        if (M0.list_p(allowed_kw3516) !== false) {
            if (M0.andmap(M0.keyword_p, allowed_kw3516) !== false) {
                var if_res5100 = sorted_p3519(allowed_kw3516);
            } else {
                var if_res5100 = false;
            }
            var if_res5101 = if_res5100;
        } else {
            var if_res5101 = false;
        }
        if (if_res5101 !== false) {
            var if_res5105 = M0.rvoid();
        } else {
            var temp5104 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
            var temp5103 = $rjs_core.UString.make("(or/c (and/c (listof? keyword?) sorted? distinct?) #f)");
            var or_part3524 = arity3511;
            if (or_part3524 !== false) {
                var if_res5102 = or_part3524;
            } else {
                var if_res5102 = mask3512;
            }
            var if_res5105 = M0.__rjs_quoted__.raise_argument_error_times_(who3509, temp5104, temp5103, 3, proc3510, if_res5102, req_kw3515, allowed_kw3516);
        }
        if_res5105;
        if (subset_p(req_kw3515, allowed_kw3516) !== false) {
            var if_res5106 = M0.rvoid();
        } else {
            var if_res5106 = M0.__rjs_quoted__.raise_arguments_error_times_(who3509, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("allowed-keyword list does not include all required keywords"), $rjs_core.UString.make("allowed-keyword list"), allowed_kw3516, $rjs_core.UString.make("required keywords"), req_kw3515);
        }
        var if_res5107 = if_res5106;
    } else {
        var if_res5107 = M0.rvoid();
    }
    if_res5107;
    var let_result5108 = procedure_keywords(proc3510);
    var old_req3525 = let_result5108.getAt(0);
    var old_allowed3526 = let_result5108.getAt(1);
    if (subset_p(old_req3525, req_kw3515) !== false) {
        var if_res5109 = M0.rvoid();
    } else {
        var if_res5109 = M0.__rjs_quoted__.raise_arguments_error_times_(who3509, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("cannot reduce required keyword set"), $rjs_core.UString.make("required keywords"), old_req3525, $rjs_core.UString.make("requested required keywords"), req_kw3515);
    }
    if_res5109;
    if (old_allowed3526 !== false) {
        if (subset_p(req_kw3515, old_allowed3526) !== false) {
            var if_res5110 = M0.rvoid();
        } else {
            var if_res5110 = M0.__rjs_quoted__.raise_arguments_error_times_(who3509, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("cannot require keywords not in original allowed set"), $rjs_core.UString.make("original allowed keywords"), old_allowed3526, $rjs_core.UString.make("requested required keywords"), req_kw3515);
        }
        if_res5110;
        var or_part3527 = M0.not(allowed_kw3516);
        if (or_part3527 !== false) {
            var if_res5111 = or_part3527;
        } else {
            var if_res5111 = subset_p(allowed_kw3516, old_allowed3526);
        }
        if (if_res5111 !== false) {
            var if_res5112 = M0.rvoid();
        } else {
            var if_res5112 = M0.__rjs_quoted__.raise_arguments_error_times_(who3509, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("cannot allow keywords not in original allowed set"), $rjs_core.UString.make("original allowed keywords"), old_allowed3526, $rjs_core.UString.make("requested allowed keywords"), allowed_kw3516);
        }
        var if_res5113 = if_res5112;
    } else {
        var if_res5113 = M0.rvoid();
    }
    if_res5113;
    if (M0.null_p(allowed_kw3516) !== false) {
        return plain_proc3517;
    } else {
        var or_part3529 = mask3512;
        if (or_part3529 !== false) {
            var if_res5114 = or_part3529;
        } else {
            var if_res5114 = arity__gt_mask(arity3511);
        }
        var mask3528 = if_res5114;
        var new_mask3530 = M0.arithmetic_shift(mask3528, 2);
        var kw_checker3531 = make_keyword_checker(req_kw3515, allowed_kw3516, new_mask3530);
        var proc3532 = normalize_proc(proc3510);
        var new_kw_proc3533 = M0.__rjs_quoted__.procedure_reduce_arity_mask(keyword_procedure_proc(proc3532), new_mask3530);
        if (M0.null_p(req_kw3515) !== false) {
            if (okm_p(proc3532) !== false) {
                var if_res5115 = make_optional_keyword_method;
            } else {
                var if_res5115 = make_optional_keyword_procedure;
            }
            return if_res5115(kw_checker3531, new_kw_proc3533, req_kw3515, allowed_kw3516, plain_proc3517);
        } else {
            var or_part3534 = name3513;
            if (or_part3534 !== false) {
                var if_res5125 = or_part3534;
            } else {
                if (named_keyword_procedure_p(proc3532) !== false) {
                    var if_res5123 = M0.vector_ref(keyword_procedure_name_plus_fail(proc3532), 0);
                } else {
                    var if_res5123 = false;
                }
                var or_part3535 = if_res5123;
                if (or_part3535 !== false) {
                    var if_res5124 = or_part3535;
                } else {
                    var if_res5124 = M0.object_name(proc3532);
                }
                var if_res5125 = if_res5124;
            }
            if (name3513 !== false) {
                var if_res5118 = realm3514;
            } else {
                var if_res5118 = false;
            }
            var or_part3536 = if_res5118;
            if (or_part3536 !== false) {
                var if_res5122 = or_part3536;
            } else {
                if (named_keyword_procedure_p(proc3532) !== false) {
                    var or_part3538 = M0.vector_ref(keyword_procedure_name_plus_fail(proc3532), 1);
                    if (or_part3538 !== false) {
                        var if_res5119 = or_part3538;
                    } else {
                        var if_res5119 = M0.__rjs_quoted__.procedure_realm(M0.vector_ref(keyword_procedure_name_plus_fail(proc3532), 2));
                    }
                    var if_res5120 = if_res5119;
                } else {
                    var if_res5120 = false;
                }
                var or_part3537 = if_res5120;
                if (or_part3537 !== false) {
                    var if_res5121 = or_part3537;
                } else {
                    var if_res5121 = M0.__rjs_quoted__.procedure_realm(proc3532);
                }
                var if_res5122 = if_res5121;
            }
            var temp5117 = M0.__rjs_quoted__.procedure_reduce_arity_mask(missing_kw, M0.arithmetic_shift(mask3528, 1));
            var or_part3539 = okm_p(proc3532);
            if (or_part3539 !== false) {
                var if_res5116 = or_part3539;
            } else {
                var if_res5116 = keyword_method_p(proc3532);
            }
            return make_required(if_res5125, if_res5122, temp5117, if_res5116, false)(kw_checker3531, new_kw_proc3533, req_kw3515, allowed_kw3516);
        }
    }
};
var arity__gt_mask = function(a3540) {
    if (M0.exact_nonnegative_integer_p(a3540) !== false) {
        return M0.arithmetic_shift(1, a3540);
    } else {
        if (M0.arity_at_least_p(a3540) !== false) {
            return M0.bitwise_xor(-1, M0.sub1(M0.arithmetic_shift(1, M0.arity_at_least_value(a3540))));
        } else {
            if (M0.list_p(a3540) !== false) {
                var loop3541 = function(_mask35425359, _l35435360) {
                    lambda_start5358: while (true) {
                        let mask3542 = _mask35425359;
                        let l3543 = _l35435360;
                        if (M0.null_p(l3543) !== false) {
                            return mask3542;
                        } else {
                            var a3544 = M0.car(l3543);
                            var or_part3545 = M0.exact_nonnegative_integer_p(a3544);
                            if (or_part3545 !== false) {
                                var if_res5128 = or_part3545;
                            } else {
                                var if_res5128 = M0.arity_at_least_p(a3544);
                            }
                            if (if_res5128 !== false) {
                                _mask35425359 = M0.bitwise_ior(mask3542, arity__gt_mask(a3544));
                                _l35435360 = M0.cdr(l3543);
                                continue lambda_start5358;
                            } else {
                                return false;
                            }
                        }
                    }
                };
                return loop3541(0, a3540);
            } else {
                return false;
            }
        }
    }
};
var cl5134 = function(proc3547, arity3548, name3549, realm3550) {
    if (M0.procedure_p(proc3547) !== false) {
        var let_result5138 = procedure_keywords(proc3547);
        var req3551 = let_result5138.getAt(0);
        var allows3552 = let_result5138.getAt(1);
        if (M0.pair_p(req3551) !== false) {
            var if_res5139 = M0.not(M0.null_p(arity3548));
        } else {
            var if_res5139 = false;
        }
        var if_res5140 = if_res5139;
    } else {
        var if_res5140 = false;
    }
    if (if_res5140 !== false) {
        return M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("procedure-reduce-arity"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("procedure has required keyword arguments"), $rjs_core.UString.make("procedure"), proc3547);
    } else {
        if (okm_p(proc3547) !== false) {
            var if_res5141 = M0.__rjs_quoted__.procedure__gt_method(proc3547);
        } else {
            var if_res5141 = proc3547;
        }
        return M0.__rjs_quoted__.procedure_reduce_arity(if_res5141, arity3548, name3549, realm3550);
    }
};
var cl5135 = function(proc3553, arity3554, name3555) {
    return new_procedure_reduce_arity(proc3553, arity3554, name3555, $rjs_core.PrimitiveSymbol.make("racket"));
};
var cl5136 = function(proc3556, arity3557) {
    return new_procedure_reduce_arity(proc3556, arity3557, false, $rjs_core.PrimitiveSymbol.make("racket"));
};
var procedure_reduce_arity3546 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam5137 = {
        '4': cl5134,
        '3': cl5135,
        '2': cl5136
    } [arguments.length];
    if (fixed_lam5137 !== undefined) {
        return fixed_lam5137.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var new_procedure_reduce_arity = procedure_reduce_arity3546;
var cl5143 = function(proc3559, mask3560, name3561, realm3562) {
    if (M0.procedure_p(proc3559) !== false) {
        var let_result5147 = procedure_keywords(proc3559);
        var req3563 = let_result5147.getAt(0);
        var allows3564 = let_result5147.getAt(1);
        if (M0.pair_p(req3563) !== false) {
            var if_res5148 = M0.not(M0.eqv_p(mask3560, 0));
        } else {
            var if_res5148 = false;
        }
        var if_res5149 = if_res5148;
    } else {
        var if_res5149 = false;
    }
    if (if_res5149 !== false) {
        return M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("procedure-reduce-arity"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("procedure has required keyword arguments"), $rjs_core.UString.make("procedure"), proc3559);
    } else {
        if (okm_p(proc3559) !== false) {
            var if_res5150 = M0.__rjs_quoted__.procedure__gt_method(proc3559);
        } else {
            var if_res5150 = proc3559;
        }
        return M0.__rjs_quoted__.procedure_reduce_arity_mask(if_res5150, mask3560, name3561, realm3562);
    }
};
var cl5144 = function(proc3565, mask3566, name3567) {
    return new_procedure_reduce_arity_mask(proc3565, mask3566, name3567, $rjs_core.PrimitiveSymbol.make("racket"));
};
var cl5145 = function(proc3568, mask3569) {
    return new_procedure_reduce_arity_mask(proc3568, mask3569, false, $rjs_core.PrimitiveSymbol.make("racket"));
};
var procedure_reduce_arity3558 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam5146 = {
        '4': cl5143,
        '3': cl5144,
        '2': cl5145
    } [arguments.length];
    if (fixed_lam5146 !== undefined) {
        return fixed_lam5146.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var new_procedure_reduce_arity_mask = procedure_reduce_arity3558;
var procedure__gt_method3570 = function(proc3571) {
    var proc3572 = normalize_proc(proc3571);
    if (keyword_procedure_p(proc3572) !== false) {
        if (okm_p(proc3572) !== false) {
            return proc3572;
        } else {
            if (keyword_method_p(proc3572) !== false) {
                return proc3572;
            } else {
                if (okp_p(proc3572) !== false) {
                    return make_optional_keyword_method(keyword_procedure_checker(proc3572), keyword_procedure_proc(proc3572), keyword_procedure_required(proc3572), keyword_procedure_allowed(proc3572), okp_ref(proc3572, 0));
                } else {
                    var name_plus_fail3573 = keyword_procedure_name_plus_fail(proc3572);
                    var mk3574 = make_required(M0.vector_ref(name_plus_fail3573, 0), M0.vector_ref(name_plus_fail3573, 1), M0.vector_ref(name_plus_fail3573, 2), true, false);
                    return mk3574(keyword_procedure_checker(proc3572), keyword_procedure_proc(proc3572), keyword_procedure_required(proc3572), keyword_procedure_allowed(proc3572));
                }
            }
        }
    } else {
        return M0.__rjs_quoted__.procedure__gt_method(proc3572);
    }
};
var new_procedure__gt_method = procedure__gt_method3570;
var cl5156 = function(proc3576, name3577, realm3578) {
    if (M0.symbol_p(name3577) !== false) {
        var if_res5159 = M0.symbol_p(realm3578);
    } else {
        var if_res5159 = false;
    }
    if (M0.not(if_res5159) !== false) {
        return M0.__rjs_quoted__.procedure_rename(proc3576, name3577, realm3578);
    } else {
        var c13579 = extract_keyword_root(proc3576);
        if (c13579 !== false) {
            return (function(kw_p3580) {
                return do_procedure_reduce_keyword_arity($rjs_core.PrimitiveSymbol.make("procedure-rename"), proc3576, false, M0.procedure_arity_mask(proc3576), name3577, realm3578, keyword_procedure_required(kw_p3580), keyword_procedure_allowed(kw_p3580));
            })(c13579);
        } else {
            return M0.__rjs_quoted__.procedure_rename(proc3576, name3577, realm3578);
        }
    }
};
var cl5157 = function(proc3581, name3582) {
    return new_procedure_rename(proc3581, name3582, $rjs_core.PrimitiveSymbol.make("racket"));
};
var procedure_rename3575 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam5158 = {
        '3': cl5156,
        '2': cl5157
    } [arguments.length];
    if (fixed_lam5158 !== undefined) {
        return fixed_lam5158.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var new_procedure_rename = procedure_rename3575;
var procedure_realm3583 = function(proc3584) {
    if (keyword_procedure_p(proc3584) !== false) {
        if (named_keyword_procedure_p(proc3584) !== false) {
            var name_plus_fail3585 = keyword_procedure_name_plus_fail(proc3584);
            var or_part3586 = M0.vector_ref(name_plus_fail3585, 1);
            if (or_part3586 !== false) {
                return or_part3586;
            } else {
                return M0.__rjs_quoted__.procedure_realm(M0.vector_ref(name_plus_fail3585, 2));
            }
        } else {
            if (okp_p(proc3584) !== false) {
                return M0.__rjs_quoted__.procedure_realm(okp_ref(proc3584, 0));
            } else {
                return M0.__rjs_quoted__.procedure_realm(keyword_procedure_proc(proc3584));
            }
        }
    } else {
        return M0.__rjs_quoted__.procedure_realm(proc3584);
    }
};
var new_procedure_realm = procedure_realm3583;
var chaperone_procedure3587 = $rjs_core.attachProcedureArity(function(proc3588, wrap_proc3589, ...props35905166) {
    var props3590 = $rjs_core.Pair.listFromArray(props35905166);
    return do_chaperone_procedure(false, false, M0.__rjs_quoted__.chaperone_procedure, $rjs_core.PrimitiveSymbol.make("chaperone-procedure"), proc3588, wrap_proc3589, props3590);
});
var new_chaperone_procedure = chaperone_procedure3587;
var unsafe_chaperone_procedure3591 = $rjs_core.attachProcedureArity(function(proc3592, wrap_proc3593, ...props35945167) {
    var props3594 = $rjs_core.Pair.listFromArray(props35945167);
    return do_unsafe_chaperone_procedure(M1.__rjs_quoted__.unsafe_chaperone_procedure, $rjs_core.PrimitiveSymbol.make("unsafe-chaperone-procedure"), proc3592, wrap_proc3593, props3594);
});
var new_unsafe_chaperone_procedure = unsafe_chaperone_procedure3591;
var impersonate_procedure3595 = $rjs_core.attachProcedureArity(function(proc3596, wrap_proc3597, ...props35985168) {
    var props3598 = $rjs_core.Pair.listFromArray(props35985168);
    return do_chaperone_procedure(true, false, M0.__rjs_quoted__.impersonate_procedure, $rjs_core.PrimitiveSymbol.make("impersonate-procedure"), proc3596, wrap_proc3597, props3598);
});
var new_impersonate_procedure = impersonate_procedure3595;
var unsafe_impersonate_procedure3599 = $rjs_core.attachProcedureArity(function(proc3600, wrap_proc3601, ...props36025169) {
    var props3602 = $rjs_core.Pair.listFromArray(props36025169);
    return do_unsafe_chaperone_procedure(M1.__rjs_quoted__.unsafe_impersonate_procedure, $rjs_core.PrimitiveSymbol.make("unsafe-impersonate-procedure"), proc3600, wrap_proc3601, props3602);
});
var new_unsafe_impersonate_procedure = unsafe_impersonate_procedure3599;
var chaperone_procedure_times_3603 = $rjs_core.attachProcedureArity(function(proc3604, wrap_proc3605, ...props36065170) {
    var props3606 = $rjs_core.Pair.listFromArray(props36065170);
    return do_chaperone_procedure(false, true, M0.__rjs_quoted__.chaperone_procedure_times_, $rjs_core.PrimitiveSymbol.make("chaperone-procedure"), proc3604, wrap_proc3605, props3606);
});
var new_chaperone_procedure_times_ = chaperone_procedure_times_3603;
var impersonate_procedure_times_3607 = $rjs_core.attachProcedureArity(function(proc3608, wrap_proc3609, ...props36105171) {
    var props3610 = $rjs_core.Pair.listFromArray(props36105171);
    return do_chaperone_procedure(true, true, M0.__rjs_quoted__.impersonate_procedure_times_, $rjs_core.PrimitiveSymbol.make("impersonate-procedure"), proc3608, wrap_proc3609, props3610);
});
var new_impersonate_procedure_times_ = impersonate_procedure_times_3607;
var do_chaperone_procedure = function(is_impersonator_p3611, self_arg_p3612, chaperone_procedure3613, name3614, proc3615, wrap_proc3616, props3617) {
    var n_proc3618 = normalize_proc(proc3615);
    var n_wrap_proc3619 = normalize_proc(wrap_proc3616);
    var or_part3620 = M0.not(keyword_procedure_p(n_proc3618));
    if (or_part3620 !== false) {
        var if_res5173 = or_part3620;
    } else {
        var or_part3621 = M0.not(M0.procedure_p(wrap_proc3616));
        if (or_part3621 !== false) {
            var if_res5172 = or_part3621;
        } else {
            var if_res5172 = bad_props_p(props3617);
        }
        var if_res5173 = if_res5172;
    }
    if (if_res5173 !== false) {
        return M0.apply(chaperone_procedure3613, proc3615, wrap_proc3616, props3617);
    } else {
        chaperone_arity_match_checking(self_arg_p3612, name3614, proc3615, wrap_proc3616, props3617);
        var loop3623 = function(_props36245382) {
            lambda_start5381: while (true) {
                let props3624 = _props36245382;
                if (M0.null_p(props3624) !== false) {
                    return false;
                } else {
                    if (M0.eq_p(M0.car(props3624), M0.__rjs_quoted__.impersonator_prop_application_mark) !== false) {
                        return M0.cadr(props3624);
                    } else {
                        _props36245382 = M0.cddr(props3624);
                        continue lambda_start5381;
                    }
                }
            }
        };
        var mark_prop3622 = loop3623(props3617);
        var chaperone_procedure_by_add_mark3625 = function(proc3626, wrap_proc3627) {
            if (mark_prop3622 !== false) {
                return chaperone_procedure3613(proc3626, wrap_proc3627, M0.__rjs_quoted__.impersonator_prop_application_mark, mark_prop3622);
            } else {
                return chaperone_procedure3613(proc3626, wrap_proc3627);
            }
        };
        var p3629 = keyword_procedure_proc(n_wrap_proc3619);
        if (self_arg_p3612 !== false) {
            var cl5177 = $rjs_core.attachProcedureArity(function(self_proc3630, kws3631, args3632, ...rest36335182) {
                var rest3633 = $rjs_core.Pair.listFromArray(rest36335182);
                return M0.call_with_values(function() {
                    return M0.apply(p3629, kws3631, args3632, self_proc3630, rest3633);
                }, $rjs_core.attachProcedureArity(function(...results36345183) {
                    var results3634 = $rjs_core.Pair.listFromArray(results36345183);
                    var len3635 = M0.length(results3634);
                    var alen3636 = M0.length(rest3633);
                    if (M0.__lt_(len3635, alen3636 + 1) !== false) {
                        var if_res5184 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrong number of results from wrapper procedure"), $rjs_core.UString.make("expected minimum number of results"), alen3636 + 1, $rjs_core.UString.make("received number of results"), len3635, $rjs_core.UString.make("wrapper procedure"), wrap_proc3616);
                    } else {
                        var if_res5184 = M0.rvoid();
                    }
                    if_res5184;
                    var num_extra3637 = len3635 - (alen3636 + 1);
                    var new_args3638 = M0.list_ref(results3634, num_extra3637);
                    if (M0.list_p(new_args3638) !== false) {
                        var if_res5185 = M0.__eq_(M0.length(new_args3638), M0.length(args3632));
                    } else {
                        var if_res5185 = false;
                    }
                    if (if_res5185 !== false) {
                        var if_res5190 = M0.rvoid();
                    } else {
                        var temp5189 = $rjs_core.PrimitiveSymbol.make("keyword procedure chaperone");
                        var temp5188 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
                        var temp5187 = $rjs_core.UString.make("expected a list of keyword-argument values as first result~a from wrapper procedure");
                        if (M0.__eq_(len3635, alen3636) !== false) {
                            var if_res5186 = $rjs_core.UString.make("");
                        } else {
                            var if_res5186 = $rjs_core.UString.make(" (after the result-wrapper procedure or mark specifications)");
                        }
                        var if_res5190 = M0.__rjs_quoted__.raise_arguments_error_times_(temp5189, temp5188, M0.format(temp5187, if_res5186), $rjs_core.UString.make("first result"), new_args3638, $rjs_core.UString.make("wrapper procedure"), wrap_proc3616);
                    }
                    if_res5190;
                    M0.for_each(function(kw3639, new_arg3640, arg3641) {
                        if (is_impersonator_p3611 !== false) {
                            return M0.rvoid();
                        } else {
                            if (M0.__rjs_quoted__.chaperone_of_p(new_arg3640, arg3641) !== false) {
                                return M0.rvoid();
                            } else {
                                return M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), M0.format($rjs_core.UString.make("~a keyword result is not a chaperone of original argument from chaperoning procedure"), kw3639), $rjs_core.UString.make("result"), new_arg3640, $rjs_core.UString.make("wrapper procedure"), wrap_proc3616);
                            }
                        }
                    }, kws3631, new_args3638, args3632);
                    var tmp3642 = num_extra3637;
                    if (M0.equal_p(tmp3642, 0) !== false) {
                        return M0.apply(M0.values, kws3631, results3634);
                    } else {
                        if (M0.equal_p(tmp3642, 1) !== false) {
                            return M0.apply(M0.values, M0.car(results3634), kws3631, M0.cdr(results3634));
                        } else {
                            var loop3643 = function(results3644, c3645) {
                                if (M0.zero_p(c3645) !== false) {
                                    return M0.cons(kws3631, results3644);
                                } else {
                                    return M0.cons(M0.car(results3644), loop3643(M0.cdr(results3644), M0.sub1(c3645)));
                                }
                            };
                            return M0.apply(M0.values, loop3643(results3634, num_extra3637));
                        }
                    }
                }));
            });
            var cl5178 = $rjs_core.attachProcedureArity(function(...other36465196) {
                var other3646 = $rjs_core.Pair.listFromArray(other36465196);
                return M0.error($rjs_core.UString.make("shouldn't get here"));
            });
            var if_res5217 = $rjs_core.attachProcedureArity(function() {
                var fixed_lam5179 = {} [arguments.length];
                if (fixed_lam5179 !== undefined) {
                    return fixed_lam5179.apply(null, arguments);
                } else {
                    if (M0.__gt__eq_(cl5177.length, 1) !== false) {
                        return cl5177.apply(null, arguments);
                    } else {
                        if (true !== false) {
                            return cl5178.apply(null, arguments);
                        } else {
                            return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                        }
                    }
                }
            }, [M0.make_arity_at_least(0)]);
        } else {
            var cl5197 = $rjs_core.attachProcedureArity(function(kws3647, args3648, ...rest36495202) {
                var rest3649 = $rjs_core.Pair.listFromArray(rest36495202);
                return M0.call_with_values(function() {
                    return M0.apply(p3629, kws3647, args3648, rest3649);
                }, $rjs_core.attachProcedureArity(function(...results36505203) {
                    var results3650 = $rjs_core.Pair.listFromArray(results36505203);
                    var len3651 = M0.length(results3650);
                    var alen3652 = M0.length(rest3649);
                    if (M0.__lt_(len3651, alen3652 + 1) !== false) {
                        var if_res5204 = M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrong number of results from wrapper procedure"), $rjs_core.UString.make("expected minimum number of results"), alen3652 + 1, $rjs_core.UString.make("received number of results"), len3651, $rjs_core.UString.make("wrapper procedure"), wrap_proc3616);
                    } else {
                        var if_res5204 = M0.rvoid();
                    }
                    if_res5204;
                    var num_extra3653 = len3651 - (alen3652 + 1);
                    var new_args3654 = M0.list_ref(results3650, num_extra3653);
                    if (M0.list_p(new_args3654) !== false) {
                        var if_res5205 = M0.__eq_(M0.length(new_args3654), M0.length(args3648));
                    } else {
                        var if_res5205 = false;
                    }
                    if (if_res5205 !== false) {
                        var if_res5210 = M0.rvoid();
                    } else {
                        var temp5209 = $rjs_core.PrimitiveSymbol.make("keyword procedure chaperone");
                        var temp5208 = $rjs_core.PrimitiveSymbol.make("racket/primitive");
                        var temp5207 = $rjs_core.UString.make("expected a list of keyword-argument values as first result~a from wrapper procedure");
                        if (M0.__eq_(len3651, alen3652) !== false) {
                            var if_res5206 = $rjs_core.UString.make("");
                        } else {
                            var if_res5206 = $rjs_core.UString.make(" (after the result-wrapper procedure or mark specifications)");
                        }
                        var if_res5210 = M0.__rjs_quoted__.raise_arguments_error_times_(temp5209, temp5208, M0.format(temp5207, if_res5206), $rjs_core.UString.make("first result"), new_args3654, $rjs_core.UString.make("wrapper procedure"), wrap_proc3616);
                    }
                    if_res5210;
                    M0.for_each(function(kw3655, new_arg3656, arg3657) {
                        if (is_impersonator_p3611 !== false) {
                            return M0.rvoid();
                        } else {
                            if (M0.__rjs_quoted__.chaperone_of_p(new_arg3656, arg3657) !== false) {
                                return M0.rvoid();
                            } else {
                                return M0.__rjs_quoted__.raise_arguments_error_times_($rjs_core.PrimitiveSymbol.make("keyword procedure chaperone"), $rjs_core.PrimitiveSymbol.make("racket/primitive"), M0.format($rjs_core.UString.make("~a keyword result is not a chaperone of original argument from chaperoning procedure"), kw3655), $rjs_core.UString.make("result"), new_arg3656, $rjs_core.UString.make("wrapper procedure"), wrap_proc3616);
                            }
                        }
                    }, kws3647, new_args3654, args3648);
                    var tmp3658 = num_extra3653;
                    if (M0.equal_p(tmp3658, 0) !== false) {
                        return M0.apply(M0.values, kws3647, results3650);
                    } else {
                        if (M0.equal_p(tmp3658, 1) !== false) {
                            return M0.apply(M0.values, M0.car(results3650), kws3647, M0.cdr(results3650));
                        } else {
                            var loop3659 = function(results3660, c3661) {
                                if (M0.zero_p(c3661) !== false) {
                                    return M0.cons(kws3647, results3660);
                                } else {
                                    return M0.cons(M0.car(results3660), loop3659(M0.cdr(results3660), M0.sub1(c3661)));
                                }
                            };
                            return M0.apply(M0.values, loop3659(results3650, num_extra3653));
                        }
                    }
                }));
            });
            var cl5198 = $rjs_core.attachProcedureArity(function(...other36625216) {
                var other3662 = $rjs_core.Pair.listFromArray(other36625216);
                return M0.error($rjs_core.UString.make("shouldn't get here"));
            });
            var if_res5217 = $rjs_core.attachProcedureArity(function() {
                var fixed_lam5199 = {} [arguments.length];
                if (fixed_lam5199 !== undefined) {
                    return fixed_lam5199.apply(null, arguments);
                } else {
                    if (M0.__gt__eq_(cl5197.length, 1) !== false) {
                        return cl5197.apply(null, arguments);
                    } else {
                        if (true !== false) {
                            return cl5198.apply(null, arguments);
                        } else {
                            return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                        }
                    }
                }
            }, [M0.make_arity_at_least(0)]);
        }
        var kw_chaperone3628 = if_res5217;
        var wrap3665 = function(proc3666, n_proc3667) {
            if (M0.not(M0.eq_p(n_proc3667, proc3666)) !== false) {
                var if_res5218 = new_procedure_p(proc3666);
            } else {
                var if_res5218 = false;
            }
            if (if_res5218 !== false) {
                var v3668 = new_procedure_ref(proc3666);
                if (M0.exact_integer_p(v3668) !== false) {
                    var acc3669 = procedure_accessor_ref(proc3666);
                    return M0.values(M0.__rjs_quoted__.chaperone_struct(proc3666, acc3669, function(self3670, sub_proc3671) {
                        var let_result5219 = wrap3665(sub_proc3671, normalize_proc(sub_proc3671));
                        var f3672 = let_result5219.getAt(0);
                        var acc3673 = let_result5219.getAt(1);
                        return f3672;
                    }), acc3669);
                } else {
                    if (is_impersonator_p3611 !== false) {
                        var if_res5245 = M0.__rjs_quoted__.impersonate_struct;
                    } else {
                        var if_res5245 = M0.__rjs_quoted__.chaperone_struct;
                    }
                    if (okp_p(n_proc3667) !== false) {
                        var if_res5244 = chaperone_procedure_by_add_mark3625(proc3666, wrap_proc3616);
                    } else {
                        var if_res5244 = proc3666;
                    }
                    var new_kw_proc3674 = if_res5245(if_res5244, new_procedure_ref, function(self3675, proc3676) {
                        if (is_impersonator_p3611 !== false) {
                            var if_res5243 = new_impersonate_procedure;
                        } else {
                            var if_res5243 = new_chaperone_procedure;
                        }
                        if (self_arg_p3612 !== false) {
                            var cl5220 = $rjs_core.attachProcedureArity(function(proc_self3677, kws3678, kw_args3679, self3680, ...args36815225) {
                                var args3681 = $rjs_core.Pair.listFromArray(args36815225);
                                var len3682 = M0.length(args3681);
                                return M0.call_with_values(function() {
                                    return M0.apply(kw_chaperone3628, proc_self3677, kws3678, kw_args3679, args3681);
                                }, $rjs_core.attachProcedureArity(function(...results36835226) {
                                    var results3683 = $rjs_core.Pair.listFromArray(results36835226);
                                    var r_len3684 = M0.length(results3683);
                                    var list_take3685 = function(l3686, n3687) {
                                        if (M0.zero_p(n3687) !== false) {
                                            return M0.rnull;
                                        } else {
                                            return M0.cons(M0.car(l3686), list_take3685(M0.cdr(l3686), M0.sub1(n3687)));
                                        }
                                    };
                                    if (M0.null_p($rjs_core.Pair.makeList($rjs_core.PrimitiveSymbol.make("proc-self"))) !== false) {
                                        var if_res5228 = M0.__eq_(r_len3684, 2 + len3682);
                                    } else {
                                        var if_res5228 = false;
                                    }
                                    if (if_res5228 !== false) {
                                        return M0.apply(M0.values, M0.cadr(results3683), self3680, M0.cddr(results3683));
                                    } else {
                                        var skip3688 = r_len3684 - len3682;
                                        return M0.apply(M0.values, M0.append(list_take3685(results3683, skip3688 - 2), M0.list(M0.list_ref(results3683, M0.sub1(skip3688)), self3680), M0.__rjs_quoted__.list_tail(results3683, skip3688)));
                                    }
                                }));
                            });
                            var cl5221 = $rjs_core.attachProcedureArity(function(...args36895230) {
                                var args3689 = $rjs_core.Pair.listFromArray(args36895230);
                                return M0.rvoid();
                            });
                            var if_res5242 = $rjs_core.attachProcedureArity(function() {
                                var fixed_lam5222 = {} [arguments.length];
                                if (fixed_lam5222 !== undefined) {
                                    return fixed_lam5222.apply(null, arguments);
                                } else {
                                    if (M0.__gt__eq_(cl5220.length, 1) !== false) {
                                        return cl5220.apply(null, arguments);
                                    } else {
                                        if (true !== false) {
                                            return cl5221.apply(null, arguments);
                                        } else {
                                            return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                                        }
                                    }
                                }
                            }, [M0.make_arity_at_least(0)]);
                        } else {
                            var cl5231 = $rjs_core.attachProcedureArity(function(kws3690, kw_args3691, self3692, ...args36935236) {
                                var args3693 = $rjs_core.Pair.listFromArray(args36935236);
                                var len3694 = M0.length(args3693);
                                return M0.call_with_values(function() {
                                    return M0.apply(kw_chaperone3628, kws3690, kw_args3691, args3693);
                                }, $rjs_core.attachProcedureArity(function(...results36955237) {
                                    var results3695 = $rjs_core.Pair.listFromArray(results36955237);
                                    var r_len3696 = M0.length(results3695);
                                    var list_take3697 = function(l3698, n3699) {
                                        if (M0.zero_p(n3699) !== false) {
                                            return M0.rnull;
                                        } else {
                                            return M0.cons(M0.car(l3698), list_take3697(M0.cdr(l3698), M0.sub1(n3699)));
                                        }
                                    };
                                    if (M0.null_p($rjs_core.Pair.makeList()) !== false) {
                                        var if_res5239 = M0.__eq_(r_len3696, 2 + len3694);
                                    } else {
                                        var if_res5239 = false;
                                    }
                                    if (if_res5239 !== false) {
                                        return M0.apply(M0.values, M0.cadr(results3695), self3692, M0.cddr(results3695));
                                    } else {
                                        var skip3700 = r_len3696 - len3694;
                                        return M0.apply(M0.values, M0.append(list_take3697(results3695, skip3700 - 2), M0.list(M0.list_ref(results3695, M0.sub1(skip3700)), self3692), M0.__rjs_quoted__.list_tail(results3695, skip3700)));
                                    }
                                }));
                            });
                            var cl5232 = $rjs_core.attachProcedureArity(function(...args37015241) {
                                var args3701 = $rjs_core.Pair.listFromArray(args37015241);
                                return M0.rvoid();
                            });
                            var if_res5242 = $rjs_core.attachProcedureArity(function() {
                                var fixed_lam5233 = {} [arguments.length];
                                if (fixed_lam5233 !== undefined) {
                                    return fixed_lam5233.apply(null, arguments);
                                } else {
                                    if (M0.__gt__eq_(cl5231.length, 1) !== false) {
                                        return cl5231.apply(null, arguments);
                                    } else {
                                        if (true !== false) {
                                            return cl5232.apply(null, arguments);
                                        } else {
                                            return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                                        }
                                    }
                                }
                            }, [M0.make_arity_at_least(0)]);
                        }
                        return if_res5243(proc3676, make_keyword_procedure(if_res5242));
                    });
                    return M0.values(new_kw_proc3674, new_procedure_ref);
                }
            } else {
                if (okp_p(n_proc3667) !== false) {
                    if (is_impersonator_p3611 !== false) {
                        if (okm_p(n_proc3667) !== false) {
                            var if_res5247 = make_optional_keyword_method_impersonator;
                        } else {
                            var if_res5247 = make_optional_keyword_procedure_impersonator;
                        }
                        var if_res5248 = if_res5247(keyword_procedure_checker(n_proc3667), chaperone_procedure_by_add_mark3625(keyword_procedure_proc(n_proc3667), kw_chaperone3628), keyword_procedure_required(n_proc3667), keyword_procedure_allowed(n_proc3667), chaperone_procedure_by_add_mark3625(okp_ref(n_proc3667, 0), okp_ref(n_wrap_proc3619, 0)), n_proc3667);
                    } else {
                        var if_res5248 = M0.__rjs_quoted__.chaperone_struct(proc3666, keyword_procedure_proc, function(self3702, proc3703) {
                            return chaperone_procedure_by_add_mark3625(proc3703, kw_chaperone3628);
                        }, M0.make_struct_field_accessor(okp_ref, 0), function(self3704, proc3705) {
                            return chaperone_procedure_by_add_mark3625(proc3705, okp_ref(n_wrap_proc3619, 0));
                        });
                    }
                    return M0.values(if_res5248, keyword_procedure_proc);
                } else {
                    if (is_impersonator_p3611 !== false) {
                        var name_plus_fail3706 = keyword_procedure_name_plus_fail(n_proc3667);
                        var mk3707 = make_required(M0.vector_ref(name_plus_fail3706, 0), M0.vector_ref(name_plus_fail3706, 1), M0.vector_ref(name_plus_fail3706, 2), keyword_method_p(n_proc3667), true);
                        var if_res5249 = mk3707(keyword_procedure_checker(n_proc3667), chaperone_procedure_by_add_mark3625(keyword_procedure_proc(n_proc3667), kw_chaperone3628), keyword_procedure_required(n_proc3667), keyword_procedure_allowed(n_proc3667), n_proc3667);
                    } else {
                        var if_res5249 = M0.__rjs_quoted__.chaperone_struct(n_proc3667, keyword_procedure_proc, function(self3708, proc3709) {
                            return chaperone_procedure_by_add_mark3625(proc3709, kw_chaperone3628);
                        });
                    }
                    return M0.values(if_res5249, keyword_procedure_proc);
                }
            }
        };
        var let_result5252 = wrap3665(proc3615, n_proc3618);
        var new_proc3663 = let_result5252.getAt(0);
        var chap_accessor3664 = let_result5252.getAt(1);
        if (M0.null_p(props3617) !== false) {
            return new_proc3663;
        } else {
            return M0.apply(M0.__rjs_quoted__.chaperone_struct, new_proc3663, chap_accessor3664, false, props3617);
        }
    }
};
var do_unsafe_chaperone_procedure = function(unsafe_chaperone_procedure3710, name3711, proc3712, wrap_proc3713, props3714) {
    var n_proc3715 = normalize_proc(proc3712);
    var n_wrap_proc3716 = normalize_proc(wrap_proc3713);
    var or_part3717 = M0.not(keyword_procedure_p(n_proc3715));
    if (or_part3717 !== false) {
        var if_res5256 = or_part3717;
    } else {
        var or_part3718 = M0.not(M0.procedure_p(wrap_proc3713));
        if (or_part3718 !== false) {
            var if_res5255 = or_part3718;
        } else {
            var if_res5255 = bad_props_p(props3714);
        }
        var if_res5256 = if_res5255;
    }
    if (if_res5256 !== false) {
        return M0.apply(unsafe_chaperone_procedure3710, proc3712, wrap_proc3713, props3714);
    } else {
        chaperone_arity_match_checking(false, name3711, proc3712, wrap_proc3713, props3714);
        return M0.apply(unsafe_chaperone_procedure3710, proc3712, wrap_proc3713, props3714);
    }
};
var bad_props_p = function(props3719) {
    var loop3720 = function(_props37215419) {
        lambda_start5418: while (true) {
            let props3721 = _props37215419;
            if (M0.null_p(props3721) !== false) {
                return false;
            } else {
                if (M0.__rjs_quoted__.impersonator_property_p(M0.car(props3721)) !== false) {
                    var props3722 = M0.cdr(props3721);
                    var or_part3723 = M0.null_p(props3722);
                    if (or_part3723 !== false) {
                        return or_part3723;
                    } else {
                        _props37215419 = M0.cdr(props3722);
                        continue lambda_start5418;
                    }
                } else {
                    return true;
                }
            }
        }
    };
    return loop3720(props3719);
};
var chaperone_arity_match_checking = function(self_arg_p3724, name3725, proc3726, wrap_proc3727, props3728) {
    var a3729 = M0.procedure_arity(proc3726);
    var b3730 = M0.procedure_arity(wrap_proc3727);
    if (self_arg_p3724 !== false) {
        var if_res5261 = 1;
    } else {
        var if_res5261 = 0;
    }
    var d3731 = if_res5261;
    var let_result5262 = procedure_keywords(proc3726);
    var a_req3732 = let_result5262.getAt(0);
    var a_allow3733 = let_result5262.getAt(1);
    var let_result5263 = procedure_keywords(wrap_proc3727);
    var b_req3734 = let_result5263.getAt(0);
    var b_allow3735 = let_result5263.getAt(1);
    var includes_p3736 = function(a3737, b3738) {
        if (M0.number_p(b3738) !== false) {
            if (M0.number_p(a3737) !== false) {
                return M0.__eq_(b3738, a3737 + d3731);
            } else {
                if (M0.arity_at_least_p(a3737) !== false) {
                    return M0.__gt__eq_(b3738, M0.arity_at_least_value(a3737) + d3731);
                } else {
                    return M0.ormap(function(a3739) {
                        return includes_p3736(a3739, b3738);
                    }, a3737);
                }
            }
        } else {
            if (M0.arity_at_least_p(b3738) !== false) {
                if (M0.number_p(a3737) !== false) {
                    return false;
                } else {
                    if (M0.arity_at_least_p(a3737) !== false) {
                        return M0.__gt__eq_(M0.arity_at_least_value(b3738), M0.arity_at_least_value(a3737) + d3731);
                    } else {
                        return M0.ormap(function(a3740) {
                            return includes_p3736(b3738, a3740);
                        }, a3737);
                    }
                }
            } else {
                return M0.andmap(function(b3741) {
                    return includes_p3736(a3737, b3741);
                }, b3738);
            }
        }
    };
    if (includes_p3736(b3730, a3729) !== false) {
        var if_res5270 = M0.rvoid();
    } else {
        var if_res5270 = M0.apply(M0.__rjs_quoted__.chaperone_procedure, proc3726, wrap_proc3727, props3728);
    }
    if_res5270;
    if (subset_p(b_req3734, a_req3732) !== false) {
        var if_res5271 = M0.rvoid();
    } else {
        var if_res5271 = M0.__rjs_quoted__.raise_arguments_error_times_(name3725, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrapper procedure requires more keywords than original procedure"), $rjs_core.UString.make("wrapper procedure"), wrap_proc3727, $rjs_core.UString.make("original procedure"), proc3726);
    }
    if_res5271;
    var or_part3742 = M0.not(b_allow3735);
    if (or_part3742 !== false) {
        var if_res5273 = or_part3742;
    } else {
        if (a_allow3733 !== false) {
            var if_res5272 = subset_p(a_allow3733, b_allow3735);
        } else {
            var if_res5272 = false;
        }
        var if_res5273 = if_res5272;
    }
    if (if_res5273 !== false) {
        var if_res5274 = M0.rvoid();
    } else {
        var if_res5274 = M0.__rjs_quoted__.raise_arguments_error_times_(name3725, $rjs_core.PrimitiveSymbol.make("racket/primitive"), $rjs_core.UString.make("wrapper procedure does not accept all keywords of original procedure"), $rjs_core.UString.make("wrapper procedure"), wrap_proc3727, $rjs_core.UString.make("original procedure"), proc3726);
    }
    if_res5274;
    return M0.rvoid();
};
var normalize_proc = function(proc3743) {
    if (keyword_procedure_p(proc3743) !== false) {
        return proc3743;
    } else {
        if (new_procedure_p(proc3743) !== false) {
            var let_result5275 = procedure_keywords(proc3743);
            var req_kws3744 = let_result5275.getAt(0);
            var allowed_kws3745 = let_result5275.getAt(1);
            if (M0.null_p(allowed_kws3745) !== false) {
                return proc3743;
            } else {
                return make_optional_keyword_procedure(function(given_kws3746, given_argc3747) {
                    if (M0.procedure_arity_includes_p(proc3743, given_argc3747 - 2, true) !== false) {
                        var or_part3748 = M0.not(allowed_kws3745);
                        if (or_part3748 !== false) {
                            var if_res5277 = or_part3748;
                        } else {
                            var if_res5277 = subset_p(given_kws3746, allowed_kws3745);
                        }
                        if (if_res5277 !== false) {
                            return subset_p(req_kws3744, given_kws3746);
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                }, $rjs_core.attachProcedureArity(function(kws3749, kw_args3750, ...vals37515276) {
                    var vals3751 = $rjs_core.Pair.listFromArray(vals37515276);
                    return keyword_apply(proc3743, kws3749, kw_args3750, vals3751);
                }), req_kws3744, allowed_kws3745, proc3743);
            }
        } else {
            return proc3743;
        }
    }
};
var __rjs_quoted__ = {};
__rjs_quoted__.make_optional_keyword_method = make_optional_keyword_method;
__rjs_quoted__.struct_keyword_procedure_by_arity_error = struct_keyword_procedure_by_arity_error;
__rjs_quoted__.prop_named_keyword_procedure = prop_named_keyword_procedure;
__rjs_quoted__.make_optional_keyword_procedure = make_optional_keyword_procedure;
__rjs_quoted__.struct_keyword_procedure = struct_keyword_procedure;
__rjs_quoted__.struct_keyword_method_by_arity_error = struct_keyword_method_by_arity_error;
__rjs_quoted__.subset_p = subset_p;
__rjs_quoted__.missing_kw = missing_kw;
__rjs_quoted__.subsets_p = subsets_p;
__rjs_quoted__.keyword_procedure_extract = keyword_procedure_extract;
export {
    __rjs_quoted__,
    new_impersonate_procedure_times_,
    new_chaperone_procedure_times_,
    new_unsafe_impersonate_procedure,
    new_impersonate_procedure,
    new_unsafe_chaperone_procedure,
    new_chaperone_procedure,
    new_procedure_realm,
    new_procedure_rename,
    new_procedure__gt_method,
    new_prop_procedure,
    procedure_reduce_keyword_arity_mask,
    procedure_reduce_keyword_arity,
    new_procedure_reduce_arity_mask,
    new_procedure_reduce_arity,
    procedure_keywords,
    keyword_apply,
    make_keyword_procedure
};