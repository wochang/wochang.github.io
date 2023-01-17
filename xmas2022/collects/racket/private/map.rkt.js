import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
import * as M1 from "./kw.rkt.js";
var cl4740 = function(f3236, l3237) {
    if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res4747 = true;
    } else {
        if (M0.procedure_p(f3236) !== false) {
            if (M0.procedure_arity_includes_p(f3236, 1) !== false) {
                var if_res4745 = M0.list_p(l3237);
            } else {
                var if_res4745 = false;
            }
            var if_res4746 = if_res4745;
        } else {
            var if_res4746 = false;
        }
        var if_res4747 = if_res4746;
    }
    if (if_res4747 !== false) {
        var loop3238 = function(l3239) {
            if (M0.null_p(l3239) !== false) {
                return M0.rnull;
            } else {
                var r3240 = M0.cdr(l3239);
                return M0.cons(f3236(M0.car(l3239)), loop3238(r3240));
            }
        };
        return loop3238(l3237);
    } else {
        return gen_map(f3236, M0.list(l3237));
    }
};
var cl4741 = function(f3241, l13242, l23243) {
    if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res4754 = true;
    } else {
        if (M0.procedure_p(f3241) !== false) {
            if (M0.procedure_arity_includes_p(f3241, 2) !== false) {
                if (M0.list_p(l13242) !== false) {
                    if (M0.list_p(l23243) !== false) {
                        var if_res4750 = M0.__eq_(M0.length(l13242), M0.length(l23243));
                    } else {
                        var if_res4750 = false;
                    }
                    var if_res4751 = if_res4750;
                } else {
                    var if_res4751 = false;
                }
                var if_res4752 = if_res4751;
            } else {
                var if_res4752 = false;
            }
            var if_res4753 = if_res4752;
        } else {
            var if_res4753 = false;
        }
        var if_res4754 = if_res4753;
    }
    if (if_res4754 !== false) {
        var loop3244 = function(l13245, l23246) {
            if (M0.null_p(l13245) !== false) {
                return M0.rnull;
            } else {
                var r13247 = M0.cdr(l13245);
                var r23248 = M0.cdr(l23246);
                return M0.cons(f3241(M0.car(l13245), M0.car(l23246)), loop3244(r13247, r23248));
            }
        };
        return loop3244(l13242, l23243);
    } else {
        return gen_map(f3241, M0.list(l13242, l23243));
    }
};
var cl4742 = $rjs_core.attachProcedureArity(function(f3249, l3250, ...args32514757) {
    var args3251 = $rjs_core.Pair.listFromArray(args32514757);
    return gen_map(f3249, M0.cons(l3250, args3251));
});
var map3235 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam4743 = {
        '2': cl4740,
        '3': cl4741
    } [arguments.length];
    if (fixed_lam4743 !== undefined) {
        return fixed_lam4743.apply(null, arguments);
    } else {
        if (M0.__gt__eq_(cl4742.length, 1) !== false) {
            return cl4742.apply(null, arguments);
        } else {
            return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
    }
}, [M0.make_arity_at_least(2)]);
var map2 = map3235;
var cl4758 = function(f3253, l3254) {
    if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res4765 = true;
    } else {
        if (M0.procedure_p(f3253) !== false) {
            if (M0.procedure_arity_includes_p(f3253, 1) !== false) {
                var if_res4763 = M0.list_p(l3254);
            } else {
                var if_res4763 = false;
            }
            var if_res4764 = if_res4763;
        } else {
            var if_res4764 = false;
        }
        var if_res4765 = if_res4764;
    }
    if (if_res4765 !== false) {
        var loop3255 = function(_l32564862) {
            lambda_start4861: while (true) {
                let l3256 = _l32564862;
                if (M0.null_p(l3256) !== false) {
                    return M0.rvoid();
                } else {
                    var r3257 = M0.cdr(l3256);
                    f3253(M0.car(l3256));
                    _l32564862 = r3257;
                    continue lambda_start4861;
                }
            }
        };
        return loop3255(l3254);
    } else {
        return gen_for_each(f3253, M0.list(l3254));
    }
};
var cl4759 = function(f3258, l13259, l23260) {
    if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res4772 = true;
    } else {
        if (M0.procedure_p(f3258) !== false) {
            if (M0.procedure_arity_includes_p(f3258, 2) !== false) {
                if (M0.list_p(l13259) !== false) {
                    if (M0.list_p(l23260) !== false) {
                        var if_res4768 = M0.__eq_(M0.length(l13259), M0.length(l23260));
                    } else {
                        var if_res4768 = false;
                    }
                    var if_res4769 = if_res4768;
                } else {
                    var if_res4769 = false;
                }
                var if_res4770 = if_res4769;
            } else {
                var if_res4770 = false;
            }
            var if_res4771 = if_res4770;
        } else {
            var if_res4771 = false;
        }
        var if_res4772 = if_res4771;
    }
    if (if_res4772 !== false) {
        var loop3261 = function(_l132624865, _l232634866) {
            lambda_start4864: while (true) {
                let l13262 = _l132624865;
                let l23263 = _l232634866;
                if (M0.null_p(l13262) !== false) {
                    return M0.rvoid();
                } else {
                    var r13264 = M0.cdr(l13262);
                    var r23265 = M0.cdr(l23263);
                    f3258(M0.car(l13262), M0.car(l23263));
                    _l132624865 = r13264;
                    _l232634866 = r23265;
                    continue lambda_start4864;
                }
            }
        };
        return loop3261(l13259, l23260);
    } else {
        return gen_for_each(f3258, M0.list(l13259, l23260));
    }
};
var cl4760 = $rjs_core.attachProcedureArity(function(f3266, l3267, ...args32684775) {
    var args3268 = $rjs_core.Pair.listFromArray(args32684775);
    return gen_for_each(f3266, M0.cons(l3267, args3268));
});
var for_each3252 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam4761 = {
        '2': cl4758,
        '3': cl4759
    } [arguments.length];
    if (fixed_lam4761 !== undefined) {
        return fixed_lam4761.apply(null, arguments);
    } else {
        if (M0.__gt__eq_(cl4760.length, 1) !== false) {
            return cl4760.apply(null, arguments);
        } else {
            return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
    }
}, [M0.make_arity_at_least(2)]);
var for_each2 = for_each3252;
var cl4776 = function(f3270, l3271) {
    if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res4783 = true;
    } else {
        if (M0.procedure_p(f3270) !== false) {
            if (M0.procedure_arity_includes_p(f3270, 1) !== false) {
                var if_res4781 = M0.list_p(l3271);
            } else {
                var if_res4781 = false;
            }
            var if_res4782 = if_res4781;
        } else {
            var if_res4782 = false;
        }
        var if_res4783 = if_res4782;
    }
    if (if_res4783 !== false) {
        if (M0.null_p(l3271) !== false) {
            return true;
        } else {
            var loop3272 = function(_l32734871) {
                lambda_start4870: while (true) {
                    let l3273 = _l32734871;
                    if (M0.null_p(M0.cdr(l3273)) !== false) {
                        return f3270(M0.car(l3273));
                    } else {
                        var r3274 = M0.cdr(l3273);
                        if (f3270(M0.car(l3273)) !== false) {
                            _l32734871 = r3274;
                            continue lambda_start4870;
                        } else {
                            return false;
                        }
                    }
                }
            };
            return loop3272(l3271);
        }
    } else {
        return gen_andmap(f3270, M0.list(l3271));
    }
};
var cl4777 = function(f3275, l13276, l23277) {
    if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res4792 = true;
    } else {
        if (M0.procedure_p(f3275) !== false) {
            if (M0.procedure_arity_includes_p(f3275, 2) !== false) {
                if (M0.list_p(l13276) !== false) {
                    if (M0.list_p(l23277) !== false) {
                        var if_res4788 = M0.__eq_(M0.length(l13276), M0.length(l23277));
                    } else {
                        var if_res4788 = false;
                    }
                    var if_res4789 = if_res4788;
                } else {
                    var if_res4789 = false;
                }
                var if_res4790 = if_res4789;
            } else {
                var if_res4790 = false;
            }
            var if_res4791 = if_res4790;
        } else {
            var if_res4791 = false;
        }
        var if_res4792 = if_res4791;
    }
    if (if_res4792 !== false) {
        if (M0.null_p(l13276) !== false) {
            return true;
        } else {
            var loop3278 = function(_l132794874, _l232804875) {
                lambda_start4873: while (true) {
                    let l13279 = _l132794874;
                    let l23280 = _l232804875;
                    if (M0.null_p(M0.cdr(l13279)) !== false) {
                        return f3275(M0.car(l13279), M0.car(l23280));
                    } else {
                        var r13281 = M0.cdr(l13279);
                        var r23282 = M0.cdr(l23280);
                        if (f3275(M0.car(l13279), M0.car(l23280)) !== false) {
                            _l132794874 = r13281;
                            _l232804875 = r23282;
                            continue lambda_start4873;
                        } else {
                            return false;
                        }
                    }
                }
            };
            return loop3278(l13276, l23277);
        }
    } else {
        return gen_andmap(f3275, M0.list(l13276, l23277));
    }
};
var cl4778 = $rjs_core.attachProcedureArity(function(f3283, l3284, ...args32854797) {
    var args3285 = $rjs_core.Pair.listFromArray(args32854797);
    return gen_andmap(f3283, M0.cons(l3284, args3285));
});
var andmap3269 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam4779 = {
        '2': cl4776,
        '3': cl4777
    } [arguments.length];
    if (fixed_lam4779 !== undefined) {
        return fixed_lam4779.apply(null, arguments);
    } else {
        if (M0.__gt__eq_(cl4778.length, 1) !== false) {
            return cl4778.apply(null, arguments);
        } else {
            return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
    }
}, [M0.make_arity_at_least(2)]);
var andmap2 = andmap3269;
var cl4798 = function(f3287, l3288) {
    if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res4805 = true;
    } else {
        if (M0.procedure_p(f3287) !== false) {
            if (M0.procedure_arity_includes_p(f3287, 1) !== false) {
                var if_res4803 = M0.list_p(l3288);
            } else {
                var if_res4803 = false;
            }
            var if_res4804 = if_res4803;
        } else {
            var if_res4804 = false;
        }
        var if_res4805 = if_res4804;
    }
    if (if_res4805 !== false) {
        if (M0.null_p(l3288) !== false) {
            return false;
        } else {
            var loop3289 = function(_l32904880) {
                lambda_start4879: while (true) {
                    let l3290 = _l32904880;
                    if (M0.null_p(M0.cdr(l3290)) !== false) {
                        return f3287(M0.car(l3290));
                    } else {
                        var r3291 = M0.cdr(l3290);
                        var or_part3292 = f3287(M0.car(l3290));
                        if (or_part3292 !== false) {
                            return or_part3292;
                        } else {
                            _l32904880 = r3291;
                            continue lambda_start4879;
                        }
                    }
                }
            };
            return loop3289(l3288);
        }
    } else {
        return gen_ormap(f3287, M0.list(l3288));
    }
};
var cl4799 = function(f3293, l13294, l23295) {
    if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res4814 = true;
    } else {
        if (M0.procedure_p(f3293) !== false) {
            if (M0.procedure_arity_includes_p(f3293, 2) !== false) {
                if (M0.list_p(l13294) !== false) {
                    if (M0.list_p(l23295) !== false) {
                        var if_res4810 = M0.__eq_(M0.length(l13294), M0.length(l23295));
                    } else {
                        var if_res4810 = false;
                    }
                    var if_res4811 = if_res4810;
                } else {
                    var if_res4811 = false;
                }
                var if_res4812 = if_res4811;
            } else {
                var if_res4812 = false;
            }
            var if_res4813 = if_res4812;
        } else {
            var if_res4813 = false;
        }
        var if_res4814 = if_res4813;
    }
    if (if_res4814 !== false) {
        if (M0.null_p(l13294) !== false) {
            return false;
        } else {
            var loop3296 = function(_l132974883, _l232984884) {
                lambda_start4882: while (true) {
                    let l13297 = _l132974883;
                    let l23298 = _l232984884;
                    if (M0.null_p(M0.cdr(l13297)) !== false) {
                        return f3293(M0.car(l13297), M0.car(l23298));
                    } else {
                        var r13299 = M0.cdr(l13297);
                        var r23300 = M0.cdr(l23298);
                        var or_part3301 = f3293(M0.car(l13297), M0.car(l23298));
                        if (or_part3301 !== false) {
                            return or_part3301;
                        } else {
                            _l132974883 = r13299;
                            _l232984884 = r23300;
                            continue lambda_start4882;
                        }
                    }
                }
            };
            return loop3296(l13294, l23295);
        }
    } else {
        return gen_ormap(f3293, M0.list(l13294, l23295));
    }
};
var cl4800 = $rjs_core.attachProcedureArity(function(f3302, l3303, ...args33044819) {
    var args3304 = $rjs_core.Pair.listFromArray(args33044819);
    return gen_ormap(f3302, M0.cons(l3303, args3304));
});
var ormap3286 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam4801 = {
        '2': cl4798,
        '3': cl4799
    } [arguments.length];
    if (fixed_lam4801 !== undefined) {
        return fixed_lam4801.apply(null, arguments);
    } else {
        if (M0.__gt__eq_(cl4800.length, 1) !== false) {
            return cl4800.apply(null, arguments);
        } else {
            return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
    }
}, [M0.make_arity_at_least(2)]);
var ormap2 = ormap3286;
var check_args = function(who3305, f3306, ls3307) {
    if (M0.procedure_p(f3306) !== false) {
        var if_res4820 = M0.rvoid();
    } else {
        var if_res4820 = M0.raise_argument_error(who3305, $rjs_core.UString.make("procedure?"), f3306);
    }
    if_res4820;
    var loop3308 = function(_prev_len33094889, _ls33104890, _i33114891) {
        lambda_start4888: while (true) {
            let prev_len3309 = _prev_len33094889;
            let ls3310 = _ls33104890;
            let i3311 = _i33114891;
            if (M0.null_p(ls3310) !== false) {
                return M0.rvoid();
            } else {
                var l3312 = M0.car(ls3310);
                if (M0.list_p(l3312) !== false) {
                    var if_res4821 = M0.rvoid();
                } else {
                    var if_res4821 = M0.raise_argument_error(who3305, $rjs_core.UString.make("list?"), l3312);
                }
                if_res4821;
                var len3313 = M0.length(l3312);
                if (prev_len3309 !== false) {
                    var if_res4822 = M0.not(M0.__eq_(len3313, prev_len3309));
                } else {
                    var if_res4822 = false;
                }
                if (if_res4822 !== false) {
                    var if_res4823 = M0.raise_arguments_error(who3305, $rjs_core.UString.make("all lists must have same size"), $rjs_core.UString.make("first list length"), prev_len3309, $rjs_core.UString.make("other list length"), len3313, $rjs_core.UString.make("procedure"), f3306);
                } else {
                    var if_res4823 = M0.rvoid();
                }
                if_res4823;
                _prev_len33094889 = len3313;
                _ls33104890 = M0.cdr(ls3310);
                _i33114891 = M0.add1(i3311);
                continue lambda_start4888;
            }
        }
    };
    loop3308(false, ls3307, 1);
    if (M0.procedure_arity_includes_p(f3306, M0.length(ls3307)) !== false) {
        return M0.rvoid();
    } else {
        var let_result4825 = M1.procedure_keywords(f3306);
        var required_keywords3314 = let_result4825.getAt(0);
        var optional_keywords3315 = let_result4825.getAt(1);
        if (M0.pair_p(required_keywords3314) !== false) {
            var if_res4840 = M0.string_append($rjs_core.UString.make("argument mismatch;\n"), $rjs_core.UString.make(" the given procedure expects keyword arguments"));
        } else {
            var if_res4840 = M0.string_append($rjs_core.UString.make("argument mismatch;\n"), $rjs_core.UString.make(" the given procedure's expected number of arguments does not match"), $rjs_core.UString.make(" the given number of lists"));
        }
        var temp4839 = $rjs_core.UString.make("given procedure");
        var n3317 = M0.object_name(f3306);
        if (M0.symbol_p(n3317) !== false) {
            var if_res4836 = M0.symbol__gt_string(n3317);
        } else {
            var if_res4836 = false;
        }
        var or_part3316 = if_res4836;
        if (or_part3316 !== false) {
            var if_res4837 = or_part3316;
        } else {
            var if_res4837 = $rjs_core.UString.make("#<procedure>");
        }
        var temp4838 = M0.unquoted_printing_string(if_res4837);
        var a3318 = M0.procedure_arity(f3306);
        if (M0.pair_p(required_keywords3314) !== false) {
            var if_res4835 = M0.rnull;
        } else {
            if (M0.integer_p(a3318) !== false) {
                var if_res4834 = M0.list($rjs_core.UString.make("expected"), a3318);
            } else {
                if (M0.arity_at_least_p(a3318) !== false) {
                    var if_res4833 = M0.list($rjs_core.UString.make("expected"), M0.unquoted_printing_string(M0.string_append($rjs_core.UString.make("at least "), M0.number__gt_string(M0.arity_at_least_value(a3318)))));
                } else {
                    var if_res4833 = M0.rnull;
                }
                var if_res4834 = if_res4833;
            }
            var if_res4835 = if_res4834;
        }
        if (M0.pair_p(required_keywords3314) !== false) {
            var if_res4832 = M0.rnull;
        } else {
            var if_res4832 = M0.list($rjs_core.UString.make("given"), M0.length(ls3307));
        }
        if (M0.pair_p(required_keywords3314) !== false) {
            var temp4830 = $rjs_core.UString.make("required keywords");
            var loop3319 = function(kws3320) {
                if (M0.null_p(kws3320) !== false) {
                    return M0.rnull;
                } else {
                    return M0.list_times_($rjs_core.UString.make(" "), M0.string_append($rjs_core.UString.make("#:"), M0.__rjs_quoted__.keyword__gt_string(M0.car(kws3320))), loop3319(M0.cdr(kws3320)));
                }
            };
            var if_res4831 = M0.list(temp4830, M0.unquoted_printing_string(M0.apply(M0.string_append, M0.cdr(loop3319(required_keywords3314)))));
        } else {
            var if_res4831 = M0.rnull;
        }
        var w3321 = M0.quotient(M0.error_print_width(), M0.length(ls3307));
        if (M0.__gt_(w3321, 10) !== false) {
            var temp4827 = $rjs_core.UString.make("argument lists...");
            var loop3322 = function(ls3323) {
                if (M0.null_p(ls3323) !== false) {
                    return M0.rnull;
                } else {
                    return M0.cons(M0.string_append($rjs_core.UString.make("\n   "), M0.error_value__gt_string_handler()(M0.car(ls3323), w3321)), loop3322(M0.cdr(ls3323)));
                }
            };
            var if_res4828 = M0.list(temp4827, M0.unquoted_printing_string(M0.apply(M0.string_append, loop3322(ls3307))));
        } else {
            var if_res4828 = M0.rnull;
        }
        return M0.apply(M0.raise_arguments_error, who3305, if_res4840, temp4839, temp4838, M0.append(if_res4835, if_res4832, if_res4831, if_res4828));
    }
};
var gen_map = function(f3324, ls3325) {
    if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res4842 = true;
    } else {
        var if_res4842 = check_args($rjs_core.PrimitiveSymbol.make("map"), f3324, ls3325);
    }
    if_res4842;
    var loop3326 = function(ls3327) {
        if (M0.null_p(M0.car(ls3327)) !== false) {
            return M0.rnull;
        } else {
            var next_ls3328 = map2(M0.cdr, ls3327);
            return M0.cons(M0.apply(f3324, map2(M0.car, ls3327)), loop3326(next_ls3328));
        }
    };
    return loop3326(ls3325);
};
var gen_for_each = function(f3329, ls3330) {
    if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res4844 = true;
    } else {
        var if_res4844 = check_args($rjs_core.PrimitiveSymbol.make("for-each"), f3329, ls3330);
    }
    if_res4844;
    var loop3331 = function(_ls33324898) {
        lambda_start4897: while (true) {
            let ls3332 = _ls33324898;
            if (M0.null_p(M0.car(ls3332)) !== false) {
                return M0.rvoid();
            } else {
                var next_ls3333 = map2(M0.cdr, ls3332);
                M0.apply(f3329, map2(M0.car, ls3332));
                _ls33324898 = next_ls3333;
                continue lambda_start4897;
            }
        }
    };
    return loop3331(ls3330);
};
var gen_andmap = function(f3334, ls3335) {
    if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res4846 = true;
    } else {
        var if_res4846 = check_args($rjs_core.PrimitiveSymbol.make("andmap"), f3334, ls3335);
    }
    if_res4846;
    var loop3336 = function(_ls33374901) {
        lambda_start4900: while (true) {
            let ls3337 = _ls33374901;
            if (M0.null_p(M0.car(ls3337)) !== false) {
                return true;
            } else {
                if (M0.null_p(M0.cdar(ls3337)) !== false) {
                    return M0.apply(f3334, map2(M0.car, ls3337));
                } else {
                    var next_ls3338 = map2(M0.cdr, ls3337);
                    if (M0.apply(f3334, map2(M0.car, ls3337)) !== false) {
                        _ls33374901 = next_ls3338;
                        continue lambda_start4900;
                    } else {
                        return false;
                    }
                }
            }
        }
    };
    return loop3336(ls3335);
};
var gen_ormap = function(f3339, ls3340) {
    if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res4850 = true;
    } else {
        var if_res4850 = check_args($rjs_core.PrimitiveSymbol.make("ormap"), f3339, ls3340);
    }
    if_res4850;
    var loop3341 = function(_ls33424904) {
        lambda_start4903: while (true) {
            let ls3342 = _ls33424904;
            if (M0.null_p(M0.car(ls3342)) !== false) {
                return false;
            } else {
                if (M0.null_p(M0.cdar(ls3342)) !== false) {
                    return M0.apply(f3339, map2(M0.car, ls3342));
                } else {
                    var next_ls3343 = map2(M0.cdr, ls3342);
                    var or_part3344 = M0.apply(f3339, map2(M0.car, ls3342));
                    if (or_part3344 !== false) {
                        return or_part3344;
                    } else {
                        _ls33424904 = next_ls3343;
                        continue lambda_start4903;
                    }
                }
            }
        }
    };
    return loop3341(ls3340);
};
M0.rvoid();
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    ormap2 as ormap,
    andmap2 as andmap,
    for_each2 as for_each,
    map2 as map
};