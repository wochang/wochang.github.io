import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
import * as M1 from "../../../runtime/paramz.rkt.js";
var current_parameterization = function() {
    return M0.continuation_mark_set_first(false, M1.parameterization_key);
};
var call_with_parameterization = function(paramz4038, thunk4039) {
    if (M0.__rjs_quoted__.parameterization_p(paramz4038) !== false) {
        var if_res5938 = M0.rvoid();
    } else {
        var if_res5938 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("call-with-parameterization"), $rjs_core.UString.make("parameterization?"), 0, paramz4038, thunk4039);
    }
    if_res5938;
    if (M0.procedure_p(thunk4039) !== false) {
        var if_res5939 = M0.procedure_arity_includes_p(thunk4039, 0);
    } else {
        var if_res5939 = false;
    }
    if (if_res5939 !== false) {
        var if_res5940 = M0.rvoid();
    } else {
        var if_res5940 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("call-with-parameterization"), $rjs_core.UString.make("(-> any)"), 1, paramz4038, thunk4039);
    }
    if_res5940;
    var __context5941 = $rjs_core.Marks.getFrames();
    var __context5942;
    try {
        __context5942 = $rjs_core.Marks.enterFrame();
        $rjs_core.Marks.setMark(M1.parameterization_key, paramz4038);
        var __wcm_result5943 = thunk4039();
    } finally {
        $rjs_core.Marks.updateFrame(__context5941, __context5942);
    }
    return __wcm_result5943;
};
var let_result5945 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("break-parameterization"), false, 1, 0, false);
var struct_break_paramz = let_result5945.getAt(0);
var make_break_paramz = let_result5945.getAt(1);
var break_paramz_p = let_result5945.getAt(2);
var break_paramz_ref = let_result5945.getAt(3);
var break_paramz_set_bang_ = let_result5945.getAt(4);
var let_result5946 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("break-parameterization"), false, 1, 0, false, M0.rnull, M0.current_inspector());
var type4040 = let_result5946.getAt(0);
var maker4041 = let_result5946.getAt(1);
var pred4042 = let_result5946.getAt(2);
var access4043 = let_result5946.getAt(3);
var mutate4044 = let_result5946.getAt(4);
var let_result5947 = M0.values(type4040, maker4041, pred4042, M0.make_struct_field_accessor(access4043, 0, $rjs_core.PrimitiveSymbol.make("cell")), M0.make_struct_field_mutator(mutate4044, 0, $rjs_core.PrimitiveSymbol.make("cell")));
var struct_break_parameterization = let_result5947.getAt(0);
var make_break_parameterization = let_result5947.getAt(1);
var break_parameterization_p = let_result5947.getAt(2);
var break_parameterization_cell = let_result5947.getAt(3);
var set_break_parameterization_cell_bang_ = let_result5947.getAt(4);
var current_break_parameterization = function() {
    return make_break_paramz(M0.continuation_mark_set_first(false, M1.break_enabled_key));
};
var call_with_break_parameterization = function(paramz4045, thunk4046) {
    if (break_paramz_p(paramz4045) !== false) {
        var if_res5948 = M0.rvoid();
    } else {
        var if_res5948 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("call-with-break-parameterization"), $rjs_core.UString.make("break-parameterization?"), 0, paramz4045, thunk4046);
    }
    if_res5948;
    if (M0.procedure_p(thunk4046) !== false) {
        var if_res5949 = M0.procedure_arity_includes_p(thunk4046, 0);
    } else {
        var if_res5949 = false;
    }
    if (if_res5949 !== false) {
        var if_res5950 = M0.rvoid();
    } else {
        var if_res5950 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("call-with-parameterization"), $rjs_core.UString.make("(-> any)"), 1, paramz4045, thunk4046);
    }
    if_res5950;
    var __context5952 = $rjs_core.Marks.getFrames();
    var __context5953;
    try {
        __context5953 = $rjs_core.Marks.enterFrame();
        $rjs_core.Marks.setMark(M1.break_enabled_key, break_paramz_ref(paramz4045, 0));
        M1.check_for_break();
        var __wcm_result5954 = thunk4046();
    } finally {
        $rjs_core.Marks.updateFrame(__context5952, __context5953);
    }
    var begin_res5951 = __wcm_result5954;
    M1.check_for_break();
    return begin_res5951;
};
var select_handler_by_no_breaks = function(e4047, bpz4048, l4049) {
    var __context5963 = $rjs_core.Marks.getFrames();
    var __context5964;
    try {
        __context5964 = $rjs_core.Marks.enterFrame();
        $rjs_core.Marks.setMark(M1.break_enabled_key, M0.make_thread_cell(false));
        var loop4050 = function(l4051) {
            if (M0.null_p(l4051) !== false) {
                var if_res5962 = M0.raise(e4047);
            } else {
                if (M0.caar(l4051)(e4047) !== false) {
                    var begin_res5956 = M0.cdar(l4051)(e4047);
                    var __context5957 = $rjs_core.Marks.getFrames();
                    var __context5958;
                    try {
                        __context5958 = $rjs_core.Marks.enterFrame();
                        $rjs_core.Marks.setMark(M1.break_enabled_key, bpz4048);
                        var __wcm_result5959 = M1.check_for_break();
                    } finally {
                        $rjs_core.Marks.updateFrame(__context5957, __context5958);
                    }
                    __wcm_result5959;
                    var if_res5961 = begin_res5956;
                } else {
                    var if_res5961 = loop4050(M0.cdr(l4051));
                }
                var if_res5962 = if_res5961;
            }
            return if_res5962;
        };
        var __wcm_result5965 = loop4050(l4049);
    } finally {
        $rjs_core.Marks.updateFrame(__context5963, __context5964);
    }
    return __wcm_result5965;
};
var select_handler_by_breaks_as_is = function(_e40526017, _bpz40536018, _l40546019) {
    lambda_start6016: while (true) {
        let e4052 = _e40526017;
        let bpz4053 = _bpz40536018;
        let l4054 = _l40546019;
        if (M0.null_p(l4054) !== false) {
            return M0.raise(e4052);
        } else {
            if (M0.caar(l4054)(e4052) !== false) {
                var __context5967 = $rjs_core.Marks.getFrames();
                var __context5968;
                try {
                    __context5968 = $rjs_core.Marks.enterFrame();
                    $rjs_core.Marks.setMark(M1.break_enabled_key, bpz4053);
                    M1.check_for_break();
                    var __wcm_result5969 = M0.cdar(l4054)(e4052);
                } finally {
                    $rjs_core.Marks.updateFrame(__context5967, __context5968);
                }
                return __wcm_result5969;
            } else {
                _e40526017 = e4052;
                _bpz40536018 = bpz4053;
                _l40546019 = M0.cdr(l4054);
                continue lambda_start6016;
            }
        }
    }
};
var false_thread_cell = M0.make_thread_cell(false);
var check_with_handlers_in_context = function(handler_prompt_key4055) {
    if (M0.__rjs_quoted__.continuation_prompt_available_p(handler_prompt_key4055) !== false) {
        return M0.rvoid();
    } else {
        return M0.error($rjs_core.PrimitiveSymbol.make("with-handlers"), $rjs_core.UString.make("exception handler used out of context"));
    }
};
var handler_prompt_key = M0.make_continuation_prompt_tag($rjs_core.PrimitiveSymbol.make("handler-prompt-tag"));
var call_handled_body = function(bpz4056, handle_proc4057, body_thunk4058) {
    var __context5982 = $rjs_core.Marks.getFrames();
    var __context5983;
    try {
        __context5983 = $rjs_core.Marks.enterFrame();
        $rjs_core.Marks.setMark(M1.break_enabled_key, false_thread_cell);
        var __wcm_result5984 = M0.call_with_continuation_prompt(function(bpz4059, body_thunk4060) {
            var __context5978 = $rjs_core.Marks.getFrames();
            var __context5979;
            try {
                __context5979 = $rjs_core.Marks.enterFrame();
                $rjs_core.Marks.setMark(M1.break_enabled_key, bpz4059);
                var __context5974 = $rjs_core.Marks.getFrames();
                var __context5975;
                try {
                    __context5975 = __context5974;
                    $rjs_core.Marks.setMark(M1.exception_handler_key, function(e4061) {
                        return M0.abort_current_continuation(handler_prompt_key, e4061);
                    });
                    var __wcm_result5976 = body_thunk4060();
                } finally {
                    $rjs_core.Marks.updateFrame(__context5974, __context5975);
                }
                var __wcm_result5980 = __wcm_result5976;
            } finally {
                $rjs_core.Marks.updateFrame(__context5978, __context5979);
            }
            return __wcm_result5980;
        }, handler_prompt_key, handle_proc4057, bpz4056, body_thunk4058);
    } finally {
        $rjs_core.Marks.updateFrame(__context5982, __context5983);
    }
    return __wcm_result5984;
};
var call_with_exception_handler = function(exnh4062, thunk4063) {
    var __context5987 = $rjs_core.Marks.getFrames();
    var __context5988;
    try {
        __context5988 = $rjs_core.Marks.enterFrame();
        $rjs_core.Marks.setMark(M1.exception_handler_key, exnh4062);
        var __wcm_result5989 = thunk4063();
    } finally {
        $rjs_core.Marks.updateFrame(__context5987, __context5988);
    }
    var begin_res5986 = __wcm_result5989;
    M0.rvoid();
    return begin_res5986;
};
var call_by_cc = M0.__rjs_quoted__.call_with_current_continuation;
var not_there = M0.gensym();
var do_hash_update = function(who4064, mut_p4065, set4066, ht4067, key4068, xform4069, default4070) {
    if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res5997 = M0.rvoid();
    } else {
        if (M0.hash_p(ht4067) !== false) {
            if (mut_p4065 !== false) {
                var if_res5991 = M0.not(M0.immutable_p(ht4067));
            } else {
                var if_res5991 = M0.immutable_p(ht4067);
            }
            var if_res5992 = if_res5991;
        } else {
            var if_res5992 = false;
        }
        if (if_res5992 !== false) {
            var if_res5994 = M0.rvoid();
        } else {
            if (mut_p4065 !== false) {
                var if_res5993 = $rjs_core.UString.make("(and/c hash? (not/c immutable?))");
            } else {
                var if_res5993 = $rjs_core.UString.make("(and/c hash? immutable?)");
            }
            var if_res5994 = M0.raise_argument_error(who4064, if_res5993, ht4067);
        }
        if_res5994;
        if (M0.procedure_p(xform4069) !== false) {
            var if_res5995 = M0.procedure_arity_includes_p(xform4069, 1);
        } else {
            var if_res5995 = false;
        }
        if (if_res5995 !== false) {
            var if_res5996 = M0.rvoid();
        } else {
            var if_res5996 = M0.raise_argument_error(who4064, $rjs_core.UString.make("(any/c . -> . any/c)"), xform4069);
        }
        var if_res5997 = if_res5996;
    }
    if_res5997;
    var v4071 = M0.hash_ref(ht4067, key4068, default4070);
    if (M0.eq_p(v4071, not_there) !== false) {
        return M0.raise_mismatch_error(who4064, $rjs_core.UString.make("no value found for key: "), key4068);
    } else {
        return set4066(ht4067, key4068, xform4069(v4071));
    }
};
var cl5999 = function(ht4072, key4073, xform4074, default4075) {
    return do_hash_update($rjs_core.PrimitiveSymbol.make("hash-update"), false, M0.hash_set, ht4072, key4073, xform4074, default4075);
};
var cl6000 = function(ht4076, key4077, xform4078) {
    return hash_update(ht4076, key4077, xform4078, not_there);
};
var hash_update = $rjs_core.attachProcedureArity(function() {
    var fixed_lam6001 = {
        '4': cl5999,
        '3': cl6000
    } [arguments.length];
    if (fixed_lam6001 !== undefined) {
        return fixed_lam6001.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [3, 4]);
var cl6002 = function(ht4079, key4080, xform4081, default4082) {
    return do_hash_update($rjs_core.PrimitiveSymbol.make("hash-update!"), true, M0.hash_set_bang_, ht4079, key4080, xform4081, default4082);
};
var cl6003 = function(ht4083, key4084, xform4085) {
    return hash_update_bang_(ht4083, key4084, xform4085, not_there);
};
var hash_update_bang_ = $rjs_core.attachProcedureArity(function() {
    var fixed_lam6004 = {
        '4': cl6002,
        '3': cl6003
    } [arguments.length];
    if (fixed_lam6004 !== undefined) {
        return fixed_lam6004.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [3, 4]);
var hash_has_key_p = function(ht4086, key4087) {
    if (M0.hash_p(ht4086) !== false) {
        var if_res6005 = M0.rvoid();
    } else {
        var if_res6005 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("hash-has-key?"), $rjs_core.UString.make("hash?"), 0, ht4086, key4087);
    }
    if_res6005;
    return M0.not(M0.eq_p(not_there, M0.hash_ref(ht4086, key4087, not_there)));
};
var hash_ref_bang_ = function(ht4088, key4089, new4090) {
    if (M0.hash_p(ht4088) !== false) {
        var if_res6006 = M0.not(M0.immutable_p(ht4088));
    } else {
        var if_res6006 = false;
    }
    if (if_res6006 !== false) {
        var if_res6007 = M0.rvoid();
    } else {
        var if_res6007 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("hash-ref!"), $rjs_core.UString.make("(and/c hash? (not/c immutable?))"), 0, ht4088, key4089, new4090);
    }
    if_res6007;
    var v4091 = M0.hash_ref(ht4088, key4089, not_there);
    if (M0.eq_p(not_there, v4091) !== false) {
        if (M0.procedure_p(new4090) !== false) {
            var if_res6008 = new4090();
        } else {
            var if_res6008 = new4090;
        }
        var n4092 = if_res6008;
        M0.hash_set_bang_(ht4088, key4089, n4092);
        return n4092;
    } else {
        return v4091;
    }
};
var __rjs_quoted__ = {};
__rjs_quoted__.call_by_cc = call_by_cc;
__rjs_quoted__.select_handler_by_no_breaks = select_handler_by_no_breaks;
__rjs_quoted__.call_handled_body = call_handled_body;
__rjs_quoted__.select_handler_by_breaks_as_is = select_handler_by_breaks_as_is;
export {
    __rjs_quoted__,
    hash_update_bang_,
    hash_update,
    hash_has_key_p,
    hash_ref_bang_,
    call_by_cc,
    call_with_exception_handler,
    break_paramz_p as break_parameterization_p,
    call_with_break_parameterization,
    current_break_parameterization,
    call_with_parameterization,
    current_parameterization
};