import * as $rjs_core from './core.js';import * as M1 from "./lib.rkt.js";var fl_times_ = M1.Core.attachProcedureArity(M1.Core.Number.mul,0);var fl_by_ = M1.Core.attachProcedureArity(M1.Core.Number.div,1);var fl_plus_ = M1.Core.attachProcedureArity(M1.Core.Number.add,0);var fl_ = M1.Core.attachProcedureArity(M1.Core.Number.sub,1);var fl_lt_ = M1.Core.attachProcedureArity(M1.Core.Number.lt,1);var fl_gt_ = M1.Core.attachProcedureArity(M1.Core.Number.gt,1);var fl_lt__eq_ = M1.Core.attachProcedureArity(M1.Core.Number.lte,1);var fl_gt__eq_ = M1.Core.attachProcedureArity(M1.Core.Number.gte,1);var fl_eq_ = M1.Core.attachProcedureArity(M1.Core.Number.equals,1);var flabs = Math.abs;var flmin = Math.min;var flmax = Math.max;var flround = Math.round;var flfloor = Math.floor;var flceiling = Math.ceil;var fltruncate = Math.trunc;var flsin = Math.sin;var flcos = Math.cos;var fltan = Math.tan;var flasin = Math.asin;var flacos = Math.acos;var flatan = Math.atan;var fllog = Math.log;var flexp = Math.exp;var flsqrt = Math.sqrt;var flexpt = Math.pow;var fx_plus_ = function(a513, b514) {return (a513+b514)|0;};var fx_ = function(a515, b516) {return (a515-b516)|0;};var fx_times_ = function(a517, b518) {return (a517*b518)|0;};var fxquotient = function(a519, b520) {return (a519/b520)|0;};var fxremainder = function(a521, b522) {return (a521%b522)|0;};var fxmodulo = function(a523, b524) {var remainder525 = a523%b524;if ((remainder525>=0)!==false) {var if_res267 = remainder525;} else {var if_res267 = remainder525+b524;}return Math.floor(if_res267);};var fxabs = function(a526) {return Math.abs(a526);};var fx_eq_ = function(a527, b528) {return a527===b528;};var fx_lt_ = function(a529, b530) {return a529<b530;};var fx_lt__eq_ = function(a531, b532) {return a531<=b532;};var fx_gt_ = function(a533, b534) {return a533>b534;};var fx_gt__eq_ = function(a535, b536) {return a535>=b536;};var fxmin = function(a537, b538) {if ((a537<b538)!==false) {var if_res268 = a537;} else {var if_res268 = b538;}return if_res268;};var fxmax = function(a539, b540) {if ((a539>b540)!==false) {var if_res269 = b540;} else {var if_res269 = a539;}return if_res269;};var fxrshift = function(a541, b542) {return (a541>>b542)|0;};var fxlshift = function(a543, b544) {return (a543<<b544)|0;};var fxand = function(a545, b546) {return (a545&&b546)|0;};var fxior = function(a547, b548) {return (a547||b548)|0;};var fxxor = function(a549, b550) {return (a549^b550)|0;};var fxnot = M1.Core.bitwiseNot;var flvector = Array.from;var flvector_p = Array.isArray;var fxvector = Array.from;var fxvector_p = Array.isArray;var __rjs_quoted__ = {};export { __rjs_quoted__,fl_times_,fl_by_,fl_plus_,fl_,fl_lt_,fl_gt_,fl_lt__eq_,fl_gt__eq_,fl_eq_,flabs,flmin,flmax,flround,flfloor,flceiling,fltruncate,flsin,flcos,fltan,flasin,flacos,flatan,fllog,flexp,flsqrt,flexpt,fx_plus_,fx_,fx_times_,fxquotient,fxremainder,fxmodulo,fxabs,fx_eq_,fx_lt_,fx_lt__eq_,fx_gt_,fx_gt__eq_,fxmin,fxmax,fxrshift,fxlshift,fxand,fxior,fxxor,fxnot,flvector,flvector_p,fxvector,fxvector_p };