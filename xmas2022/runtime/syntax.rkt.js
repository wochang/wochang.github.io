import * as $rjs_core from './core.js';
import * as M0 from "./lib.rkt.js";
import * as M1 from "../links/racketscript-compiler/racketscript/private/interop.rkt.js";
var __syntax_p = function(v3161) {
    return M0.Core.Correlated.syntaxP(v3161);
};
var __datum__gt_syntax = function(v3162) {
    return M0.Core.Correlated.datumToSyntax(v3162);
};
var __syntax_e = function(v3163) {
    return v3163.get();
};
var __syntax__gt_datum = function(v3164) {
    return v3164.get();
};
var __syntax_source = function(v3165) {
    return false;
};
var __syntax_line = function(v3166) {
    return false;
};
var __syntax_column = function(v3167) {
    return false;
};
var __syntax_position = function(v3168) {
    return false;
};
var __syntax_span = function(v3169) {
    return false;
};
var __syntax_property3170 = function(s23171, k33172, val13173) {
    var s3174 = s23171;
    var k3175 = k33172;
    if (false !== false) {
        var if_res4646 = false;
    } else {
        var if_res4646 = val13173;
    }
    var val3176 = if_res4646;
    if (val3176 !== false) {
        return s3174;
    } else {
        return false;
    }
};
var cl4648 = function(s3177, k3178) {
    return __syntax_property3170(s3177, k3178, false);
};
var cl4649 = function(s3179, k3180, val13181) {
    return __syntax_property3170(s3179, k3180, val13181);
};
var __syntax_property = $rjs_core.attachProcedureArity(function() {
    var fixed_lam4650 = {
        '2': cl4648,
        '3': cl4649
    } [arguments.length];
    if (fixed_lam4650 !== undefined) {
        return fixed_lam4650.apply(null, arguments);
    } else {
        return ___kernel.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var __syntax_property_symbol_keys = function(v3182) {
    return M0.Core.Pair.EMPTY;
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    __syntax_property_symbol_keys as syntax_property_symbol_keys,
    __syntax_property as syntax_property,
    __syntax_span as syntax_span,
    __syntax_position as syntax_position,
    __syntax_column as syntax_column,
    __syntax_line as syntax_line,
    __syntax_source as syntax_source,
    __syntax_e as syntax_e,
    __syntax__gt_datum as syntax__gt_datum,
    __datum__gt_syntax as datum__gt_syntax,
    __syntax_p as syntax_p
};