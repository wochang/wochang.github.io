import * as $rjs_core from './core.js';
import * as M0 from "./lib.rkt.js";
var fl_times_ = M0.Core.attachProcedureArity(M0.Core.Number.mul, 0);
var fl_by_ = M0.Core.attachProcedureArity(M0.Core.Number.div, 1);
var fl_plus_ = M0.Core.attachProcedureArity(M0.Core.Number.add, 0);
var fl_ = M0.Core.attachProcedureArity(M0.Core.Number.sub, 1);
var fl_lt_ = M0.Core.attachProcedureArity(M0.Core.Number.lt, 1);
var fl_gt_ = M0.Core.attachProcedureArity(M0.Core.Number.gt, 1);
var fl_lt__eq_ = M0.Core.attachProcedureArity(M0.Core.Number.lte, 1);
var fl_gt__eq_ = M0.Core.attachProcedureArity(M0.Core.Number.gte, 1);
var fl_eq_ = M0.Core.attachProcedureArity(M0.Core.Number.equals, 1);
var flabs = Math.abs;
var flmin = Math.min;
var flmax = Math.max;
var flround = Math.round;
var flfloor = Math.floor;
var flceiling = Math.ceil;
var fltruncate = Math.trunc;
var flsin = Math.sin;
var flcos = Math.cos;
var fltan = Math.tan;
var flasin = Math.asin;
var flacos = Math.acos;
var flatan = Math.atan;
var fllog = Math.log;
var flexp = Math.exp;
var flsqrt = Math.sqrt;
var flexpt = Math.pow;
var fx_plus_ = function(a134, b135) {
    return (a134 + b135) | 0;
};
var fx_ = function(a136, b137) {
    return (a136 - b137) | 0;
};
var fx_times_ = function(a138, b139) {
    return (a138 * b139) | 0;
};
var fxquotient = function(a140, b141) {
    return (a140 / b141) | 0;
};
var fxremainder = function(a142, b143) {
    return (a142 % b143) | 0;
};
var fxmodulo = function(a144, b145) {
    var remainder146 = a144 % b145;
    if ((remainder146 >= 0) !== false) {
        var if_res159 = remainder146;
    } else {
        var if_res159 = remainder146 + b145;
    }
    return Math.floor(if_res159);
};
var fxabs = function(a147) {
    return Math.abs(a147);
};
var fx_eq_ = function(a148, b149) {
    return a148 === b149;
};
var fx_lt_ = function(a150, b151) {
    return a150 < b151;
};
var fx_lt__eq_ = function(a152, b153) {
    return a152 <= b153;
};
var fx_gt_ = function(a154, b155) {
    return a154 > b155;
};
var fx_gt__eq_ = function(a156, b157) {
    return a156 >= b157;
};
var fxmin = function(a158, b159) {
    if ((a158 < b159) !== false) {
        return a158;
    } else {
        return b159;
    }
};
var fxmax = function(a160, b161) {
    if ((a160 > b161) !== false) {
        return b161;
    } else {
        return a160;
    }
};
var fxrshift = function(a162, b163) {
    return (a162 >> b163) | 0;
};
var fxlshift = function(a164, b165) {
    return (a164 << b165) | 0;
};
var fxand = function(a166, b167) {
    return (a166 && b167) | 0;
};
var fxior = function(a168, b169) {
    return (a168 || b169) | 0;
};
var fxxor = function(a170, b171) {
    return (a170 ^ b171) | 0;
};
var fxnot = M0.Core.bitwiseNot;
var flvector = Array.from;
var flvector_p = Array.isArray;
var fxvector = Array.from;
var fxvector_p = Array.isArray;
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    fl_times_,
    fl_by_,
    fl_plus_,
    fl_,
    fl_lt_,
    fl_gt_,
    fl_lt__eq_,
    fl_gt__eq_,
    fl_eq_,
    flabs,
    flmin,
    flmax,
    flround,
    flfloor,
    flceiling,
    fltruncate,
    flsin,
    flcos,
    fltan,
    flasin,
    flacos,
    flatan,
    fllog,
    flexp,
    flsqrt,
    flexpt,
    fx_plus_,
    fx_,
    fx_times_,
    fxquotient,
    fxremainder,
    fxmodulo,
    fxabs,
    fx_eq_,
    fx_lt_,
    fx_lt__eq_,
    fx_gt_,
    fx_gt__eq_,
    fxmin,
    fxmax,
    fxrshift,
    fxlshift,
    fxand,
    fxior,
    fxxor,
    fxnot,
    flvector,
    flvector_p,
    fxvector,
    fxvector_p
};