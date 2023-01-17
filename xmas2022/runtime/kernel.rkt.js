import * as $rjs_core from './core.js';
import * as M1 from "./lib.rkt.js";
import * as M2 from "./unsafe.rkt.js";
var equal_p = M1.Core.isEqual;
var eqv_p = M1.Core.isEqv;
var eq_p = M1.Core.isEq;
var values = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(function() {
    var vals176 = M1.Core.argumentsToArray(arguments);
    if ((vals176.length === 1) !== false) {
        return vals176[0];
    } else {
        return M1.Values.make(vals176);
    }
}, 0), $rjs_core.UString.make("values"));
var call_with_values = function(generator177, receiver178) {
    var vals179 = generator177();
    if (M1.Values.check(vals179) !== false) {
        return receiver178.apply(this, vals179.getAll());
    } else {
        if (not(eq_p(vals179, undefined) || eq_p(vals179, null)) !== false) {
            return receiver178.apply(this, [vals179]);
        } else {
            return rvoid();
        }
    }
};
var immutable_p = function(v180) {
    return M1.Kernel.isImmutable(v180);
};
var rvoid = $rjs_core.attachProcedureArity(function(..._181209) {
    var _181 = $rjs_core.Pair.listFromArray(_181209);
    return null;
});
var void_p = function(v182) {
    return (v182 === null) || (v182 === undefined);
};
var number_p = M1.Core.Number.check;
var real_p = M1.Core.Number.check;
var integer_p = Number.isInteger;
var zero_p = function(v183) {
    if (number_p(v183) !== false) {
        var if_res210 = rvoid();
    } else {
        var if_res210 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("zero?"), $rjs_core.UString.make("number?"), v183));
    }
    if_res210;
    return v183 === 0;
};
var positive_p = function(v184) {
    if (real_p(v184) !== false) {
        var if_res211 = rvoid();
    } else {
        var if_res211 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("positive?"), $rjs_core.UString.make("real?"), v184));
    }
    if_res211;
    return v184 > 0;
};
var negative_p = function(v185) {
    if (real_p(v185) !== false) {
        var if_res212 = rvoid();
    } else {
        var if_res212 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("negative?"), $rjs_core.UString.make("real?"), v185));
    }
    if_res212;
    return v185 < 0;
};
var add1 = function(v186) {
    if (number_p(v186) !== false) {
        var if_res213 = rvoid();
    } else {
        var if_res213 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("add1"), $rjs_core.UString.make("number?"), v186));
    }
    if_res213;
    return v186 + 1;
};
var sub1 = function(v187) {
    if (number_p(v187) !== false) {
        var if_res214 = rvoid();
    } else {
        var if_res214 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sub1"), $rjs_core.UString.make("number?"), v187));
    }
    if_res214;
    return v187 - 1;
};
var quotient = function(dividend188, divisor189) {
    if (integer_p(dividend188) !== false) {
        var if_res215 = rvoid();
    } else {
        var if_res215 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("quotient"), $rjs_core.UString.make("integer?"), dividend188));
    }
    if_res215;
    if (integer_p(divisor189) !== false) {
        var if_res216 = rvoid();
    } else {
        var if_res216 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("quotient"), $rjs_core.UString.make("integer?"), divisor189));
    }
    if_res216;
    return (dividend188 / divisor189) | 0;
};
var even_p = function(v190) {
    if (integer_p(v190) !== false) {
        var if_res217 = rvoid();
    } else {
        var if_res217 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("even?"), $rjs_core.UString.make("integer?"), v190));
    }
    if_res217;
    return (v190 % 2) === 0;
};
var odd_p = function(v191) {
    if (integer_p(v191) !== false) {
        var if_res218 = rvoid();
    } else {
        var if_res218 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("odd?"), $rjs_core.UString.make("integer?"), v191));
    }
    if_res218;
    return not((v191 % 2) === 0);
};
var exact_nonnegative_integer_p = function(v192) {
    return Number.isInteger(v192) && (v192 >= 0);
};
var exact_integer_p = function(v193) {
    return Number.isInteger(v193);
};
var exact_p = function(v194) {
    return Number.isInteger(v194);
};
var single_flonum_available_p = function() {
    return false;
};
var single_flonum_p = function() {
    return false;
};
var real__gt_single_flonum = function(v195) {
    return v195;
};
var __times_ = M1.Core.attachProcedureArity(M1.Core.Number.mul, 0);
var __by_ = M1.Core.attachProcedureArity(M1.Core.Number.div, 1);
var __plus_ = M1.Core.attachProcedureArity(M1.Core.Number.add, 0);
var __ = M1.Core.attachProcedureArity(M1.Core.Number.sub, 1);
var __lt_ = M1.Core.attachProcedureArity(M1.Core.Number.lt, 1);
var __gt_ = M1.Core.attachProcedureArity(M1.Core.Number.gt, 1);
var __lt__eq_ = M1.Core.attachProcedureArity(M1.Core.Number.lte, 1);
var __gt__eq_ = M1.Core.attachProcedureArity(M1.Core.Number.gte, 1);
var __eq_ = M1.Core.attachProcedureArity(M1.Core.Number.equals, 1);
var floor = function(v196) {
    if (real_p(v196) !== false) {
        var if_res219 = rvoid();
    } else {
        var if_res219 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("floor"), $rjs_core.UString.make("real?"), v196));
    }
    if_res219;
    return Math.floor(v196);
};
var abs = function(v197) {
    if (real_p(v197) !== false) {
        var if_res220 = rvoid();
    } else {
        var if_res220 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("abs"), $rjs_core.UString.make("real?"), v197));
    }
    if_res220;
    return Math.abs(v197);
};
var sin = function(v198) {
    if (real_p(v198) !== false) {
        var if_res221 = rvoid();
    } else {
        var if_res221 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sin"), $rjs_core.UString.make("real?"), v198));
    }
    if_res221;
    return Math.sin(v198);
};
var cos = function(v199) {
    if (real_p(v199) !== false) {
        var if_res222 = rvoid();
    } else {
        var if_res222 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cos"), $rjs_core.UString.make("real?"), v199));
    }
    if_res222;
    return Math.cos(v199);
};
var tan = function(v200) {
    if (real_p(v200) !== false) {
        var if_res223 = rvoid();
    } else {
        var if_res223 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("tan"), $rjs_core.UString.make("real?"), v200));
    }
    if_res223;
    return Math.tan(v200);
};
var asin = function(v201) {
    if (real_p(v201) !== false) {
        var if_res224 = rvoid();
    } else {
        var if_res224 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("asin"), $rjs_core.UString.make("real?"), v201));
    }
    if_res224;
    return Math.asin(v201);
};
var acos = function(v202) {
    if (real_p(v202) !== false) {
        var if_res225 = rvoid();
    } else {
        var if_res225 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("acos"), $rjs_core.UString.make("real?"), v202));
    }
    if_res225;
    return Math.acos(v202);
};
var cl226 = function(v203) {
    return Math.atan(v203);
};
var cl227 = function(x204, y205) {
    return Math.atan2(x204, y205);
};
var atan = $rjs_core.attachProcedureArity(function() {
    var fixed_lam228 = {
        '1': cl226,
        '2': cl227
    } [arguments.length];
    if (fixed_lam228 !== undefined) {
        return fixed_lam228.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var ceiling = function(v206) {
    if (real_p(v206) !== false) {
        var if_res229 = rvoid();
    } else {
        var if_res229 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("ceiling"), $rjs_core.UString.make("real?"), v206));
    }
    if_res229;
    return Math.ceil(v206);
};
var round = function(v207) {
    if (real_p(v207) !== false) {
        var if_res230 = rvoid();
    } else {
        var if_res230 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("round"), $rjs_core.UString.make("real?"), v207));
    }
    if_res230;
    return Math.round(v207);
};
var min = function(a208, b209) {
    if (real_p(a208) !== false) {
        var if_res231 = rvoid();
    } else {
        var if_res231 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("min"), $rjs_core.UString.make("real?"), a208));
    }
    if_res231;
    if (real_p(b209) !== false) {
        var if_res232 = rvoid();
    } else {
        var if_res232 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("min"), $rjs_core.UString.make("real?"), b209));
    }
    if_res232;
    return Math.min(a208, b209);
};
var max = function(a210, b211) {
    if (real_p(a210) !== false) {
        var if_res233 = rvoid();
    } else {
        var if_res233 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("max"), $rjs_core.UString.make("real?"), a210));
    }
    if_res233;
    if (real_p(b211) !== false) {
        var if_res234 = rvoid();
    } else {
        var if_res234 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("max"), $rjs_core.UString.make("real?"), b211));
    }
    if_res234;
    return Math.max(a210, b211);
};
var log = function(v212) {
    if (real_p(v212) !== false) {
        var if_res235 = rvoid();
    } else {
        var if_res235 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("log"), $rjs_core.UString.make("real?"), v212));
    }
    if_res235;
    return Math.log(v212);
};
var exp = function(w213) {
    if (number_p(w213) !== false) {
        var if_res236 = rvoid();
    } else {
        var if_res236 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("exp"), $rjs_core.UString.make("number?"), w213));
    }
    if_res236;
    return Math.exp(w213);
};
var expt = function(w214, z215) {
    if (number_p(w214) !== false) {
        var if_res237 = rvoid();
    } else {
        var if_res237 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("expt"), $rjs_core.UString.make("number?"), w214));
    }
    if_res237;
    if (number_p(z215) !== false) {
        var if_res238 = rvoid();
    } else {
        var if_res238 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("expt"), $rjs_core.UString.make("number?"), z215));
    }
    if_res238;
    return Math.pow(w214, z215);
};
var sqrt = function(v216) {
    if (number_p(v216) !== false) {
        var if_res239 = rvoid();
    } else {
        var if_res239 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sqrt"), $rjs_core.UString.make("number?"), v216));
    }
    if_res239;
    return Math.sqrt(v216);
};
var sqr = function(v217) {
    if (number_p(v217) !== false) {
        var if_res240 = rvoid();
    } else {
        var if_res240 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("sqr"), $rjs_core.UString.make("number?"), v217));
    }
    if_res240;
    return __times_(v217, v217);
};
var truncate = function(v218) {
    if (number_p(v218) !== false) {
        var if_res241 = rvoid();
    } else {
        var if_res241 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("truncate"), $rjs_core.UString.make("number?"), v218));
    }
    if_res241;
    return Math.trunc(v218);
};
var remainder = function(a219, b220) {
    if (integer_p(a219) !== false) {
        var if_res242 = rvoid();
    } else {
        var if_res242 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("remainder"), $rjs_core.UString.make("integer?"), a219));
    }
    if_res242;
    if (integer_p(b220) !== false) {
        var if_res243 = rvoid();
    } else {
        var if_res243 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("remainder"), $rjs_core.UString.make("integer?"), b220));
    }
    if_res243;
    return a219 % b220;
};
var number__gt_string = function(n221) {
    if (number_p(n221) !== false) {
        var if_res244 = rvoid();
    } else {
        var if_res244 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("number->string"), $rjs_core.UString.make("number?"), n221));
    }
    if_res244;
    return M1.Core.UString.makeMutable(n221.toString());
};
var arithmetic_shift = function(n222, m223) {
    if (integer_p(n222) !== false) {
        var if_res245 = rvoid();
    } else {
        var if_res245 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("arithmetic-shift"), $rjs_core.UString.make("integer?"), n222));
    }
    if_res245;
    if (integer_p(m223) !== false) {
        var if_res246 = rvoid();
    } else {
        var if_res246 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("arithmetic-shift"), $rjs_core.UString.make("integer?"), m223));
    }
    if_res246;
    if (negative_p(n222) !== false) {
        return n222 >> m223;
    } else {
        return n222 << m223;
    }
};
var inexact__gt_exact = function(x224) {
    return x224;
};
var exact__gt_inexact = function(x225) {
    return x225;
};
var make_rectangular = function(x226, y227) {
    if (real_p(x226) !== false) {
        var if_res248 = rvoid();
    } else {
        var if_res248 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-rectangular"), $rjs_core.UString.make("real?"), x226));
    }
    if_res248;
    if (real_p(y227) !== false) {
        var if_res249 = rvoid();
    } else {
        var if_res249 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-rectangular"), $rjs_core.UString.make("real?"), y227));
    }
    if_res249;
    return M1.Core.Pair.make(x226, y227);
};
var real_part = function(z228) {
    if (pair_p(z228) !== false) {
        var if_res250 = rvoid();
    } else {
        var if_res250 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("real-part"), $rjs_core.UString.make("pair?"), z228));
    }
    if_res250;
    return z228.hd;
};
var imag_part = function(z229) {
    if (pair_p(z229) !== false) {
        var if_res251 = rvoid();
    } else {
        var if_res251 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("imag-part"), $rjs_core.UString.make("pair?"), z229));
    }
    if_res251;
    return z229.tl;
};
var rational_p = Number.isInteger;
var numerator = function(x230) {
    if (number_p(x230) !== false) {
        var if_res252 = rvoid();
    } else {
        var if_res252 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("numerator"), $rjs_core.UString.make("number?"), x230));
    }
    if_res252;
    return x230;
};
var denominator = function(x231) {
    if (number_p(x231) !== false) {
        var if_res253 = rvoid();
    } else {
        var if_res253 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("denominator"), $rjs_core.UString.make("number?"), x231));
    }
    if_res253;
    return 1;
};
var bitwise_and = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Number.bitwiseAnd, 1), $rjs_core.UString.make("bitwise-and"));
var bitwise_ior = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Number.bitwiseOr, 1), $rjs_core.UString.make("bitwise-ior"));
var bitwise_xor = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Number.bitwiseXor, 1), $rjs_core.UString.make("bitwise-xor"));
var bitwise_not = function(v232) {
    if (number_p(v232) !== false) {
        var if_res254 = rvoid();
    } else {
        var if_res254 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bitwise-not"), $rjs_core.UString.make("number?"), v232));
    }
    if_res254;
    return M1.Core.Number.bitwiseNot(v232);
};
var not = function(v233) {
    return equal_p(v233, false) || false;
};
var rfalse = false;
var rtrue = true;
var false_p = function(v234) {
    return v234 === false;
};
var boolean_p = function(v235) {
    return (v235 === true) || (v235 === false);
};
var car = function(pair236) {
    if (pair_p(pair236) !== false) {
        var if_res255 = rvoid();
    } else {
        var if_res255 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("car"), $rjs_core.UString.make("pair?"), pair236));
    }
    if_res255;
    return pair236.hd;
};
var cdr = function(pair237) {
    if (pair_p(pair237) !== false) {
        var if_res256 = rvoid();
    } else {
        var if_res256 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cdr"), $rjs_core.UString.make("pair?"), pair237));
    }
    if_res256;
    return pair237.tl;
};
var cons = M1.Core.attachProcedureName(M1.Core.Pair.make, $rjs_core.UString.make("cons"));
var pair_p = M1.Core.attachProcedureName(M1.Core.Pair.check, $rjs_core.UString.make("pair?"));
var caar = function(v238) {
    if ((function(v239) {
            return M1.Core.Pair.check(v239) && pair_p(v239.hd);
        })(v238) !== false) {
        var if_res257 = rvoid();
    } else {
        var if_res257 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("caar"), $rjs_core.UString.make("(check/pair-of? pair? #t)"), v238));
    }
    if_res257;
    return v238.hd.hd;
};
var cadr = function(v240) {
    if ((function(v241) {
            return M1.Core.Pair.check(v241) && pair_p(v241.tl);
        })(v240) !== false) {
        var if_res258 = rvoid();
    } else {
        var if_res258 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cadr"), $rjs_core.UString.make("(check/pair-of? #t pair?)"), v240));
    }
    if_res258;
    return v240.tl.hd;
};
var cdar = function(v242) {
    if ((function(v243) {
            return M1.Core.Pair.check(v243) && pair_p(v243.hd);
        })(v242) !== false) {
        var if_res259 = rvoid();
    } else {
        var if_res259 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cdar"), $rjs_core.UString.make("(check/pair-of? pair? #t)"), v242));
    }
    if_res259;
    return v242.hd.tl;
};
var cddr = function(v244) {
    if ((function(v245) {
            return M1.Core.Pair.check(v245) && pair_p(v245.tl);
        })(v244) !== false) {
        var if_res260 = rvoid();
    } else {
        var if_res260 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cddr"), $rjs_core.UString.make("(check/pair-of? #t pair?)"), v244));
    }
    if_res260;
    return v244.tl.tl;
};
var cdddr = function(v246) {
    if ((function(v247) {
            return M1.Core.Pair.check(v247) && (function(v248) {
                return M1.Core.Pair.check(v248) && pair_p(v248.tl);
            })(v247.tl);
        })(v246) !== false) {
        var if_res261 = rvoid();
    } else {
        var if_res261 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cdddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t pair?))"), v246));
    }
    if_res261;
    return v246.tl.tl.tl;
};
var caddr = function(v249) {
    if ((function(v250) {
            return M1.Core.Pair.check(v250) && (function(v251) {
                return M1.Core.Pair.check(v251) && pair_p(v251.tl);
            })(v250.tl);
        })(v249) !== false) {
        var if_res262 = rvoid();
    } else {
        var if_res262 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("caddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t pair?))"), v249));
    }
    if_res262;
    return v249.tl.tl.hd;
};
var cadddr = function(v252) {
    if ((function(v253) {
            return M1.Core.Pair.check(v253) && (function(v254) {
                return M1.Core.Pair.check(v254) && (function(v255) {
                    return M1.Core.Pair.check(v255) && pair_p(v255.tl);
                })(v254.tl);
            })(v253.tl);
        })(v252) !== false) {
        var if_res263 = rvoid();
    } else {
        var if_res263 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cadddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t (check/pair-of? #t pair?)))"), v252));
    }
    if_res263;
    return v252.tl.tl.tl.hd;
};
var cddddr = function(v256) {
    if ((function(v257) {
            return M1.Core.Pair.check(v257) && (function(v258) {
                return M1.Core.Pair.check(v258) && (function(v259) {
                    return M1.Core.Pair.check(v259) && pair_p(v259.tl);
                })(v258.tl);
            })(v257.tl);
        })(v256) !== false) {
        var if_res264 = rvoid();
    } else {
        var if_res264 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("cddddr"), $rjs_core.UString.make("(check/pair-of? #t (check/pair-of? #t (check/pair-of? #t pair?)))"), v256));
    }
    if_res264;
    return v256.tl.tl.tl.tl;
};
var rnull = M1.Core.Pair.EMPTY;
var list = M1.Core.attachProcedureName(M1.Core.attachProcedureArity(M1.Core.Pair.makeList, 0), $rjs_core.UString.make("list"));
var null_p = M1.Core.Pair.isEmpty;
var list_p = M1.Core.Pair.isList;
var length = function(v260) {
    if (list_p(v260) !== false) {
        var if_res265 = rvoid();
    } else {
        var if_res265 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("length"), $rjs_core.UString.make("list?"), v260));
    }
    if_res265;
    return v260.length;
};
var reverse = function(lst261) {
    if (list_p(lst261) !== false) {
        var if_res266 = rvoid();
    } else {
        var if_res266 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("reverse"), $rjs_core.UString.make("list?"), lst261));
    }
    if_res266;
    var loop262 = function(_lst263657, _result264658) {
        lambda_start656: while (true) {
            let lst263 = _lst263657;
            let result264 = _result264658;
            if (null_p(lst263) !== false) {
                return result264;
            } else {
                _lst263657 = lst263.tl;
                _result264658 = M1.Core.Pair.make(lst263.hd, result264);
                continue lambda_start656;
            }
        }
    };
    return loop262(lst261, $rjs_core.Pair.makeList());
};
var list_times_ = function() {
    var let_result268 = values();
    var n_args265 = arguments.length;
    var top_arguments266 = arguments;
    var loop267 = function(_ii268661, _result269662) {
        lambda_start660: while (true) {
            let ii268 = _ii268661;
            let result269 = _result269662;
            if ((ii268 === 0) !== false) {
                return result269;
            } else {
                var next_ii270 = ii268 - 1;
                _ii268661 = next_ii270;
                _result269662 = M1.Core.Pair.make(top_arguments266[next_ii270], result269);
                continue lambda_start660;
            }
        }
    };
    return loop267(n_args265 - 1, arguments[n_args265 - 1]);
};
var append = function() {
    var let_result270 = values();
    var result271 = $rjs_core.Pair.makeList();
    var lsts272 = arguments;
    var loop273 = function(_i274665) {
        lambda_start664: while (true) {
            let i274 = _i274665;
            if ((i274 < lsts272.length) !== false) {
                var lst275 = lsts272[i274];
                result271 = foldr(M1.Core.Pair.make, lst275, result271);
                _i274665 = i274 + 1;
                continue lambda_start664;
            } else {
                return rvoid();
            }
        }
    };
    loop273(0);
    return result271;
};
var for_each = function(lam276) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res272 = null;
    } else {
        var if_res272 = rvoid();
    }
    if_res272;
    var let_result273 = values();
    var lsts277 = Array.prototype.slice.call(arguments, 1);
    if (procedure_p(lam276) !== false) {
        var if_res274 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), lam276, $rjs_core.UString.make(", at:"), 0);
        var if_res274 = null;
    }
    if_res274;
    map.apply(null, [lam276].concat(lsts277));
    return null;
};
var mcons = function(hd278, tl279) {
    return M1.Core.MPair.make(hd278, tl279);
};
var mpair_p = function(v280) {
    return M1.Core.MPair.check(v280);
};
var mcar = function(p281) {
    if (mpair_p(p281) !== false) {
        var if_res275 = rvoid();
    } else {
        var if_res275 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("mcar"), $rjs_core.UString.make("mpair?"), p281));
    }
    if_res275;
    return p281.car();
};
var mcdr = function(p282) {
    if (mpair_p(p282) !== false) {
        var if_res276 = rvoid();
    } else {
        var if_res276 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("mcdr"), $rjs_core.UString.make("mpair?"), p282));
    }
    if_res276;
    return p282.cdr();
};
var set_mcar_bang_ = function(p283, v284) {
    if (mpair_p(p283) !== false) {
        var if_res277 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("mpair?"), $rjs_core.UString.make(", given:"), p283, $rjs_core.UString.make(", at:"), 0);
        var if_res277 = null;
    }
    if_res277;
    return p283.setCar(v284);
};
var set_mcdr_bang_ = function(p285, v286) {
    if (mpair_p(p285) !== false) {
        var if_res278 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("mpair?"), $rjs_core.UString.make(", given:"), p285, $rjs_core.UString.make(", at:"), 0);
        var if_res278 = null;
    }
    if_res278;
    return p285.setCdr(v286);
};
var make_struct_type = function(name287, super_type288, init_field_count289, auto_field_count290, auto_v291, props292, inspector293, proc_spec294, immutables295, guard296, constructor_name297) {
    return M1.Core.Struct.makeStructType({
        'name': name287.toString(),
        'superType': super_type288,
        'initFieldCount': init_field_count289,
        'autoFieldCount': auto_field_count290,
        'autoV': auto_v291,
        'props': props292,
        'inspector': inspector293,
        'procSpec': proc_spec294,
        'immutables': immutables295,
        'guard': guard296,
        'constructorName': constructor_name297
    });
};
var make_struct_field_accessor = function(ref298, index299, field_name300) {
    return function(s301) {
        if ((arguments.length !== 1) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
            var if_res279 = null;
        } else {
            var if_res279 = rvoid();
        }
        if_res279;
        return ref298(s301, index299);
    };
};
var make_struct_field_mutator = function(set302, index303, fieldName304) {
    return function(s305, v306) {
        if ((arguments.length !== 2) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
            var if_res280 = null;
        } else {
            var if_res280 = rvoid();
        }
        if_res280;
        return set302(s305, index303, v306);
    };
};
var make_struct_type_property = function(name307, guard308, supers309, can_impersonate_p310) {
    return M1.Core.Struct.makeStructTypeProperty({
        'name': name307,
        'guard': guard308,
        'supers': supers309,
        'canImpersonate': can_impersonate_p310
    });
};
var check_struct_type = function(name311, what312) {
    if (what312 !== false) {
        if (M1.Core.Struct.isStructType(what312) !== false) {
            var if_res281 = rvoid();
        } else {
            throw M1.Core.racketCoreError($rjs_core.UString.make("not a struct type"));
            var if_res281 = null;
        }
        if_res281;
        return what312;
    } else {
        return rvoid();
    }
};
var struct_type_p = function(v313) {
    return M1.Core.Struct.isStructType(v313);
};
var struct_type_info = function(desc314) {
    return M1.Core.Values.make(M1.Core.Struct.structTypeInfo(desc314));
};
var vector = function() {
    return M1.Core.Vector.make(M1.Core.argumentsToArray(arguments), true);
};
var make_vector = function(size315, v316) {
    if (integer_p(size315) !== false) {
        var if_res283 = rvoid();
    } else {
        var if_res283 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("make-vector"), $rjs_core.UString.make("integer?"), size315));
    }
    if_res283;
    if (eq_p(v316, undefined) !== false) {
        var if_res284 = 0;
    } else {
        var if_res284 = v316;
    }
    return M1.Core.Vector.makeInit(size315, if_res284);
};
var vector_p = M1.Core.Vector.check;
var vector_length = function(v317) {
    if (vector_p(v317) !== false) {
        var if_res285 = rvoid();
    } else {
        var if_res285 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-length"), $rjs_core.UString.make("vector?"), v317));
    }
    if_res285;
    return v317.length();
};
var vector_ref = function(vec318, i319) {
    if (vector_p(vec318) !== false) {
        var if_res286 = rvoid();
    } else {
        var if_res286 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-ref"), $rjs_core.UString.make("vector?"), vec318));
    }
    if_res286;
    if (integer_p(i319) !== false) {
        var if_res287 = rvoid();
    } else {
        var if_res287 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-ref"), $rjs_core.UString.make("integer?"), i319));
    }
    if_res287;
    return vec318.ref(i319);
};
var vector_set_bang_ = function(vec320, i321, v322) {
    if (vector(vec320) !== false) {
        var if_res288 = rvoid();
    } else {
        var if_res288 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-set!"), $rjs_core.UString.make("vector"), vec320));
    }
    if_res288;
    if (integer_p(i321) !== false) {
        var if_res289 = rvoid();
    } else {
        var if_res289 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-set!"), $rjs_core.UString.make("integer?"), i321));
    }
    if_res289;
    return vec320.set(i321, v322);
};
var vector__gt_list = function(vec323) {
    if (vector_p(vec323) !== false) {
        var if_res290 = rvoid();
    } else {
        var if_res290 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector->list"), $rjs_core.UString.make("vector?"), vec323));
    }
    if_res290;
    return M1.Core.Pair.listFromArray(vec323.items);
};
var list__gt_vector = function(lst324) {
    if (list_p(lst324) !== false) {
        var if_res291 = rvoid();
    } else {
        var if_res291 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("list->vector"), $rjs_core.UString.make("list?"), lst324));
    }
    if_res291;
    return M1.Core.Vector.make(M1.Core.Pair.listToArray(lst324), true);
};
var vector__gt_immutable_vector = function(vec325) {
    if (vector_p(vec325) !== false) {
        var if_res292 = rvoid();
    } else {
        var if_res292 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector->immutable-vector"), $rjs_core.UString.make("vector?"), vec325));
    }
    if_res292;
    return M1.Core.Vector.copy(vec325, false);
};
var vector_copy = function(vec326) {
    if (vector_p(vec326) !== false) {
        var if_res293 = rvoid();
    } else {
        var if_res293 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy"), $rjs_core.UString.make("vector?"), vec326));
    }
    if_res293;
    return M1.Core.Vector.copy(vec326, true);
};
var vector_copy_bang_ = function(dest327, dest_start328, src329, src_start330, src_end331) {
    if (vector_p(dest327) !== false) {
        var if_res294 = rvoid();
    } else {
        var if_res294 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("vector?"), dest327));
    }
    if_res294;
    if (integer_p(dest_start328) !== false) {
        var if_res295 = rvoid();
    } else {
        var if_res295 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("integer?"), dest_start328));
    }
    if_res295;
    if (vector_p(src329) !== false) {
        var if_res296 = rvoid();
    } else {
        var if_res296 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("vector?"), src329));
    }
    if_res296;
    if (integer_p(src_start330) !== false) {
        var if_res297 = rvoid();
    } else {
        var if_res297 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("integer?"), src_start330));
    }
    if_res297;
    if (integer_p(src_end331) !== false) {
        var if_res298 = rvoid();
    } else {
        var if_res298 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("vector-copy!"), $rjs_core.UString.make("integer?"), src_end331));
    }
    if_res298;
    return dest327.copy(dest_start328, src329, src_start330, src_end331);
};
var hash = function() {
    var let_result299 = values();
    var kv_times_332 = arguments;
    if (((kv_times_332.length % 2) !== 0) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("invalid number of arguments"));
        var if_res300 = null;
    } else {
        var if_res300 = rvoid();
    }
    if_res300;
    var items333 = [];
    var loop334 = function(_i335694) {
        lambda_start693: while (true) {
            let i335 = _i335694;
            if ((i335 < kv_times_332.length) !== false) {
                items333.push([kv_times_332[i335], kv_times_332[__plus_(i335, 1)]]);
                _i335694 = i335 + 2;
                continue lambda_start693;
            } else {
                return rvoid();
            }
        }
    };
    loop334(0);
    return M1.Core.Hash.makeEqual(items333, false);
};
var hasheqv = function() {
    var let_result302 = values();
    var kv_times_336 = arguments;
    if (((kv_times_336.length % 2) !== 0) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("invalid number of arguments"));
        var if_res303 = null;
    } else {
        var if_res303 = rvoid();
    }
    if_res303;
    var items337 = [];
    var loop338 = function(_i339697) {
        lambda_start696: while (true) {
            let i339 = _i339697;
            if ((i339 < kv_times_336.length) !== false) {
                items337.push([kv_times_336[i339], kv_times_336[__plus_(i339, 1)]]);
                _i339697 = i339 + 2;
                continue lambda_start696;
            } else {
                return rvoid();
            }
        }
    };
    loop338(0);
    return M1.Core.Hash.makeEqv(items337, false);
};
var hasheq = function() {
    var let_result305 = values();
    var kv_times_340 = arguments;
    if (((kv_times_340.length % 2) !== 0) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("invalid number of arguments"));
        var if_res306 = null;
    } else {
        var if_res306 = rvoid();
    }
    if_res306;
    var items341 = [];
    var loop342 = function(_i343700) {
        lambda_start699: while (true) {
            let i343 = _i343700;
            if ((i343 < kv_times_340.length) !== false) {
                items341.push([kv_times_340[i343], kv_times_340[__plus_(i343, 1)]]);
                _i343700 = i343 + 2;
                continue lambda_start699;
            } else {
                return rvoid();
            }
        }
    };
    loop342(0);
    return M1.Core.Hash.makeEq(items341, false);
};
var make_hash = function(assocs344) {
    var let_result308 = values();
    var assocs_times_345 = assocs344 || $rjs_core.Pair.makeList();
    return M1.Core.Hash.makeEqualFromAssocs(assocs_times_345, true);
};
var make_hasheqv = function(assocs346) {
    var let_result309 = values();
    var assocs_times_347 = assocs346 || $rjs_core.Pair.makeList();
    return M1.Core.Hash.makeEqvFromAssocs(assocs_times_347, true);
};
var make_hasheq = function(assocs348) {
    var let_result310 = values();
    var assocs_times_349 = assocs348 || $rjs_core.Pair.makeList();
    return M1.Core.Hash.makeEqFromAssocs(assocs_times_349, true);
};
var make_immutable_hash = function(assocs350) {
    var let_result311 = values();
    var assocs_times_351 = assocs350 || $rjs_core.Pair.makeList();
    return M1.Core.Hash.makeEqualFromAssocs(assocs_times_351, false);
};
var make_immutable_hasheqv = function(assocs352) {
    var let_result312 = values();
    var assocs_times_353 = assocs352 || $rjs_core.Pair.makeList();
    return M1.Core.Hash.makeEqvFromAssocs(assocs_times_353, false);
};
var make_immutable_hasheq = function(assocs354) {
    var let_result313 = values();
    var assocs_times_355 = assocs354 || $rjs_core.Pair.makeList();
    return M1.Core.Hash.makeEqFromAssocs(assocs_times_355, false);
};
var hash_p = M1.Core.Hash.check;
var hash_equal_p = M1.Core.Hash.isEqualHash;
var hash_eqv_p = M1.Core.Hash.isEqvHash;
var hash_eq_p = M1.Core.Hash.isEqHash;
var hash_weak_p = M1.Core.Hash.isWeakHash;
var cl314 = function(h356, k357) {
    if (h356.hasKey(k357) !== false) {
        return h356._h.get(k357);
    } else {
        return raise(M1.Core.makeArgumentsError($rjs_core.UString.make("hash-ref"), $rjs_core.UString.make("no value found for key"), $rjs_core.UString.make("key"), k357));
    }
};
var cl315 = function(h358, k359, fail360) {
    return h358.ref(k359, fail360);
};
var hash_ref = $rjs_core.attachProcedureArity(function() {
    var fixed_lam316 = {
        '2': cl314,
        '3': cl315
    } [arguments.length];
    if (fixed_lam316 !== undefined) {
        return fixed_lam316.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var hash_has_key_p = function(h361, k362) {
    return h361.hasKey(k362);
};
var cl318 = function(h363, k364) {
    if (h363.hasKey(k364) !== false) {
        return h363.refKey(k364);
    } else {
        return raise(M1.Core.makeArgumentsError($rjs_core.UString.make("hash-ref-key"), $rjs_core.UString.make("hash does not contain key"), $rjs_core.UString.make("key"), k364));
    }
};
var cl319 = function(h365, k366, fail367) {
    return h365.refKey(k366, fail367);
};
var hash_ref_key = $rjs_core.attachProcedureArity(function() {
    var fixed_lam320 = {
        '2': cl318,
        '3': cl319
    } [arguments.length];
    if (fixed_lam320 !== undefined) {
        return fixed_lam320.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var hash_set = function(h368, k369, v370) {
    if (h368.isImmutable() !== false) {
        return h368.set(k369, v370);
    } else {
        return raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-set"), $rjs_core.UString.make("(and/c hash? immutable?)"), 0, h368, k369, v370));
    }
};
var hash_remove = function(h371, k372) {
    if (h371.isImmutable() !== false) {
        return h371.remove(k372);
    } else {
        return raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-remove"), $rjs_core.UString.make("(and/c hash? immutable?)"), 0, h371, k372));
    }
};
var cl324 = function(h373, proc374) {
    return M1.Core.Hash.map(h373, proc374);
};
var cl325 = function(h375, proc376, try_order_p377) {
    return M1.Core.Hash.map(h375, proc376);
};
var hash_map = $rjs_core.attachProcedureArity(function() {
    var fixed_lam326 = {
        '2': cl324,
        '3': cl325
    } [arguments.length];
    if (fixed_lam326 !== undefined) {
        return fixed_lam326.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var hash_count = function(h378) {
    return h378.size();
};
var hash_remove_bang_ = function(h379, k380) {
    if (h379.isImmutable(h379) !== false) {
        return raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-remove!"), $rjs_core.UString.make("(and/c hash? (not/c immutable?))"), 0, h379, k380));
    } else {
        return h379.doremove(k380);
    }
};
var hash_set_bang_ = function(h381, k382, v383) {
    if (h381.isImmutable(h381) !== false) {
        return raise(M1.Core.makeArgumentError($rjs_core.UString.make("hash-set!"), $rjs_core.UString.make("(and/c hash? (not/c immutable?))"), 0, h381, k382, v383));
    } else {
        return h381.doset(k382, v383);
    }
};
var hash_iterate_first = function(h384) {
    return h384.iterateFirst();
};
var hash_iterate_next = function(h385, i386) {
    return h385.iterateNext(i386);
};
var hash_iterate_key = function(h387, i388) {
    return h387.iterateKey(i388);
};
var hash_iterate_value = function(h389, i390) {
    return h389.iterateValue(i390);
};
var hash_iterate_key_plus_value = function(h391, i392) {
    return h391.iterateKeyValue(i392);
};
var hash_iterate_pair = function(h393, i394) {
    return h393.iteratePair(i394);
};
var hash_keys_subset_p = function(h1395, h2396) {
    if ((M1.Core.Hash.check(h1395) && M1.Core.Hash.check(h2396)) !== false) {
        if (h1395.isSameType(h2396) !== false) {
            return h1395.isKeysSubset(h2396);
        } else {
            return raise(M1.Core.makeArgumentsError($rjs_core.UString.make("hash-keys-subset?"), $rjs_core.UString.make("given hash tables do not use the same key comparison"), $rjs_core.UString.make("first table"), h1395, $rjs_core.UString.make("second table"), h2396));
        }
    } else {
        return false;
    }
};
var hash_union = function(h1397, h2398) {
    return h1397.union(h2398);
};
var hash_strong_p = function(h399) {
    return true;
};
var apply = function(lam400) {
    var let_result331 = values();
    var args401 = Array.prototype.slice.call(arguments, 1);
    if (procedure_p(lam400) !== false) {
        var if_res332 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), lam400, $rjs_core.UString.make(", at:"), 0);
        var if_res332 = null;
    }
    if_res332;
    var let_result333 = values();
    if (zero_p(args401.length) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res337 = null;
    } else {
        if (equal_p(args401.length, 1) !== false) {
            if (null_p(args401[0]) !== false) {
                var if_res335 = rvoid();
            } else {
                if (M1.Core.Pair.check(args401[0]) !== false) {
                    var if_res334 = rvoid();
                } else {
                    throw M1.Core.racketContractError($rjs_core.UString.make("expected a"), M1.Core.Pair, $rjs_core.UString.make(", but given"), args401[0]);
                    var if_res334 = null;
                }
                var if_res335 = if_res334;
            }
            if_res335;
            var if_res336 = M1.Core.Pair.listToArray(args401[0]);
        } else {
            var if_res336 = args401.concat(M1.Core.Pair.listToArray(args401.pop()));
        }
        var if_res337 = if_res336;
    }
    var final_args402 = if_res337;
    return lam400.apply(null, final_args402);
};
var map = function(fn403) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res338 = null;
    } else {
        var if_res338 = rvoid();
    }
    if_res338;
    var let_result339 = values();
    var lists404 = Array.prototype.slice.call(arguments, 1);
    if (procedure_p(fn403) !== false) {
        var if_res340 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), fn403, $rjs_core.UString.make(", at:"), 0);
        var if_res340 = null;
    }
    if_res340;
    var let_result341 = values();
    if (__lt__eq_(lists404.length, 0) !== false) {
        var if_res342 = error($rjs_core.PrimitiveSymbol.make("map"), $rjs_core.UString.make("need at-least two arguments"));
    } else {
        var if_res342 = rvoid();
    }
    if_res342;
    var let_result343 = values();
    var lst_len405 = length(lists404[0]);
    var loop406 = function(_i407734) {
        lambda_start733: while (true) {
            let i407 = _i407734;
            if ((i407 < lists404.length) !== false) {
                var v408 = lists404[i407];
                if (eq_p(length(v408), lst_len405) !== false) {
                    var if_res344 = rvoid();
                } else {
                    var if_res344 = error($rjs_core.PrimitiveSymbol.make("map"), $rjs_core.UString.make("all input lists must have equal length"));
                }
                if_res344;
                _i407734 = i407 + 1;
                continue lambda_start733;
            } else {
                return rvoid();
            }
        }
    };
    loop406(1);
    var let_result346 = values();
    var result409 = Array(lst_len405);
    var args410 = Array(lists404.length);
    var loop411 = function(_result_i412738) {
        lambda_start735: while (true) {
            let result_i412 = _result_i412738;
            if ((result_i412 < lst_len405) !== false) {
                var loop413 = function(_lst_j414737) {
                    lambda_start736: while (true) {
                        let lst_j414 = _lst_j414737;
                        if ((lst_j414 < lists404.length) !== false) {
                            var lst415 = lists404[lst_j414];
                            args410[lst_j414] = lst415.hd;
                            lists404[lst_j414] = lst415.tl;
                            _lst_j414737 = lst_j414 + 1;
                            continue lambda_start736;
                        } else {
                            return rvoid();
                        }
                    }
                };
                loop413(0);
                result409[result_i412] = fn403.apply(null, args410);
                _result_i412738 = result_i412 + 1;
                continue lambda_start735;
            } else {
                return rvoid();
            }
        }
    };
    loop411(0);
    return M1.Core.Pair.listFromArray(result409);
};
var foldl = function(fn416, init417) {
    if ((arguments.length < 2) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res349 = null;
    } else {
        var if_res349 = rvoid();
    }
    if_res349;
    var let_result350 = values();
    var lists418 = Array.prototype.slice.call(arguments, 2);
    if (procedure_p(fn416) !== false) {
        var if_res351 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), fn416, $rjs_core.UString.make(", at:"), 0);
        var if_res351 = null;
    }
    if_res351;
    var let_result352 = values();
    if (__lt__eq_(lists418.length, 0) !== false) {
        var if_res353 = error($rjs_core.PrimitiveSymbol.make("foldl"), $rjs_core.UString.make("need at-least two arguments"));
    } else {
        var if_res353 = rvoid();
    }
    if_res353;
    var let_result354 = values();
    var lst_len419 = length(lists418[0]);
    var loop420 = function(_i421741) {
        lambda_start740: while (true) {
            let i421 = _i421741;
            if ((i421 < lists418.length) !== false) {
                var v422 = lists418[i421];
                if (eq_p(length(v422), lst_len419) !== false) {
                    var if_res355 = rvoid();
                } else {
                    var if_res355 = error($rjs_core.PrimitiveSymbol.make("foldl"), $rjs_core.UString.make("all input lists must have equal length"));
                }
                if_res355;
                _i421741 = i421 + 1;
                continue lambda_start740;
            } else {
                return rvoid();
            }
        }
    };
    loop420(1);
    var let_result357 = values();
    var result423 = init417;
    var args424 = Array(lists418.length + 1);
    var loop425 = function(_result_i426745) {
        lambda_start742: while (true) {
            let result_i426 = _result_i426745;
            if ((result_i426 < lst_len419) !== false) {
                var loop427 = function(_lst_j428744) {
                    lambda_start743: while (true) {
                        let lst_j428 = _lst_j428744;
                        if ((lst_j428 < lists418.length) !== false) {
                            var lst429 = lists418[lst_j428];
                            args424[lst_j428] = lst429.hd;
                            lists418[lst_j428] = lst429.tl;
                            _lst_j428744 = lst_j428 + 1;
                            continue lambda_start743;
                        } else {
                            return rvoid();
                        }
                    }
                };
                loop427(0);
                args424[lists418.length] = result423;
                result423 = fn416.apply(null, args424);
                _result_i426745 = result_i426 + 1;
                continue lambda_start742;
            } else {
                return rvoid();
            }
        }
    };
    loop425(0);
    return result423;
};
var _foldr = function(fn430, init431, lists432) {
    if (null_p(lists432[0]) !== false) {
        return init431;
    } else {
        var args433 = Array(add1(lists432.length));
        var loop434 = function(_ii435748) {
            lambda_start747: while (true) {
                let ii435 = _ii435748;
                if ((ii435 < lists432.length) !== false) {
                    var lst436 = lists432[ii435];
                    args433[ii435] = lst436.hd;
                    lists432[ii435] = lst436.tl;
                    _ii435748 = ii435 + 1;
                    continue lambda_start747;
                } else {
                    return rvoid();
                }
            }
        };
        loop434(0);
        args433[lists432.length] = _foldr(fn430, init431, lists432);
        return fn430.apply(null, args433);
    }
};
var foldr = function(fn437, init438) {
    if ((arguments.length < 2) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res362 = null;
    } else {
        var if_res362 = rvoid();
    }
    if_res362;
    var let_result363 = values();
    var lists439 = Array.prototype.slice.call(arguments, 2);
    if (procedure_p(fn437) !== false) {
        var if_res364 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("procedure?"), $rjs_core.UString.make(", given:"), fn437, $rjs_core.UString.make(", at:"), 0);
        var if_res364 = null;
    }
    if_res364;
    var let_result365 = values();
    if (__lt__eq_(lists439.length, 0) !== false) {
        var if_res366 = error($rjs_core.PrimitiveSymbol.make("foldr"), $rjs_core.UString.make("need at-least two arguments"));
    } else {
        var if_res366 = rvoid();
    }
    if_res366;
    var let_result367 = values();
    var lst_len440 = length(lists439[0]);
    var loop441 = function(_i442751) {
        lambda_start750: while (true) {
            let i442 = _i442751;
            if ((i442 < lists439.length) !== false) {
                var v443 = lists439[i442];
                if (eq_p(length(v443), lst_len440) !== false) {
                    var if_res368 = rvoid();
                } else {
                    var if_res368 = error($rjs_core.PrimitiveSymbol.make("foldr"), $rjs_core.UString.make("all input lists must have equal length"));
                }
                if_res368;
                _i442751 = i442 + 1;
                continue lambda_start750;
            } else {
                return rvoid();
            }
        }
    };
    loop441(1);
    return _foldr(fn437, init438, lists439);
};
var cl370 = function(end444) {
    return range(0, end444, 1);
};
var cl371 = function(start445, end446) {
    if (__lt_(start445, end446) !== false) {
        var if_res374 = 1;
    } else {
        var if_res374 = -1;
    }
    return range(start445, end446, if_res374);
};
var cl372 = function(start447, end448, step449) {
    var result450 = [];
    if ((__gt__eq_(step449, 0) && __lt_(step449, end448)) !== false) {
        var loop451 = function(_i452756) {
            lambda_start755: while (true) {
                let i452 = _i452756;
                if ((i452 < end448) !== false) {
                    result450.push(i452);
                    _i452756 = i452 + step449;
                    continue lambda_start755;
                } else {
                    return rvoid();
                }
            }
        };
        var if_res378 = loop451(start447);
    } else {
        if ((__lt__eq_(step449, 0) && __lt_(end448, start447)) !== false) {
            var loop453 = function(_i454758) {
                lambda_start757: while (true) {
                    let i454 = _i454758;
                    if ((i454 < __(end448)) !== false) {
                        result450.push(__(i454));
                        _i454758 = i454 + __(step449);
                        continue lambda_start757;
                    } else {
                        return rvoid();
                    }
                }
            };
            var if_res377 = loop453(__(start447));
        } else {
            var if_res377 = rvoid();
        }
        var if_res378 = if_res377;
    }
    if_res378;
    return M1.Core.Pair.listFromArray(result450);
};
var range = $rjs_core.attachProcedureArity(function() {
    var fixed_lam373 = {
        '1': cl370,
        '2': cl371,
        '3': cl372
    } [arguments.length];
    if (fixed_lam373 !== undefined) {
        return fixed_lam373.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2, 3]);
var remove = function(v455, lst456, proc457) {
    if (eq_p(proc457, undefined) !== false) {
        proc457 = M1.Core.isEqual;
        var if_res379 = null;
    } else {
        var if_res379 = rvoid();
    }
    if_res379;
    var loop458 = function(_result459762, _lst460763) {
        lambda_start761: while (true) {
            let result459 = _result459762;
            let lst460 = _lst460763;
            if (null_p(lst460) !== false) {
                return reverse(result459);
            } else {
                if (proc457(v455, car(lst460)) !== false) {
                    var if_res380 = append(reverse(result459), cdr(lst460));
                } else {
                    var if_res380 = rvoid();
                }
                if_res380;
                _result459762 = cons(car(lst460), result459);
                _lst460763 = cdr(lst460);
                continue lambda_start761;
            }
        }
    };
    return loop458($rjs_core.Pair.makeList(), lst456);
};
var filter = function(fn461, lst462) {
    var loop463 = function(_result464766, _lst465767) {
        lambda_start765: while (true) {
            let result464 = _result464766;
            let lst465 = _lst465767;
            if (null_p(lst465) !== false) {
                return reverse(result464);
            } else {
                if (fn461(lst465.hd) !== false) {
                    _result464766 = M1.Core.Pair.make(lst465.hd, result464);
                    _lst465767 = lst465.tl;
                    continue lambda_start765;
                } else {
                    _result464766 = result464;
                    _lst465767 = lst465.tl;
                    continue lambda_start765;
                }
            }
        }
    };
    return loop463($rjs_core.Pair.makeList(), lst462);
};
var ormap = function(fn466) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res384 = null;
    } else {
        var if_res384 = rvoid();
    }
    if_res384;
    var let_result385 = values();
    var lists467 = Array.prototype.slice.call(arguments, 1);
    return foldl.apply(this, [function() {
        var args468 = M1.Core.argumentsToArray(arguments);
        var final_arg469 = args468.pop();
        return (final_arg469 || fn466.apply(null, args468)) && true;
    }, false].concat(lists467));
};
var andmap = function(fn470) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res386 = null;
    } else {
        var if_res386 = rvoid();
    }
    if_res386;
    var let_result387 = values();
    var lists471 = Array.prototype.slice.call(arguments, 1);
    return foldl.apply(this, [function() {
        var args472 = M1.Core.argumentsToArray(arguments);
        var final_arg473 = args472.pop();
        return (final_arg473 && fn470.apply(null, args472)) && true;
    }, true].concat(lists471));
};
var member = function(v474, lst475) {
    var loop476 = function(_lst477772) {
        lambda_start771: while (true) {
            let lst477 = _lst477772;
            if (null_p(lst477) !== false) {
                return false;
            } else {
                if (M1.Core.isEqual(v474, lst477.hd) !== false) {
                    return lst477;
                } else {
                    _lst477772 = lst477.tl;
                    continue lambda_start771;
                }
            }
        }
    };
    return loop476(lst475);
};
var compose = function() {
    var procs478 = M1.Core.argumentsToArray(arguments);
    return function() {
        var let_result390 = values();
        var result479 = M1.Core.argumentsToArray(arguments);
        var procs_times_480 = procs478.reverse();
        var loop481 = function(_i482776) {
            lambda_start775: while (true) {
                let i482 = _i482776;
                if ((i482 < procs_times_480.length) !== false) {
                    var p483 = procs_times_480[i482];
                    result479 = p483.apply(null, result479);
                    if (M1.Core.Values.check(result479) !== false) {
                        result479 = result479.getAll();
                        var if_res391 = null;
                    } else {
                        result479 = [result479];
                        var if_res391 = null;
                    }
                    if_res391;
                    _i482776 = i482 + 1;
                    continue lambda_start775;
                } else {
                    return rvoid();
                }
            }
        };
        loop481(0);
        if ((result479.length === 1) !== false) {
            return result479[0];
        } else {
            return M1.Core.Values.make(result479);
        }
    };
};
var compose1 = function() {
    var procs484 = M1.Core.argumentsToArray(arguments);
    return function(v485) {
        var let_result394 = values();
        var result486 = v485;
        var procs_times_487 = procs484.reverse();
        var loop488 = function(_i489780) {
            lambda_start779: while (true) {
                let i489 = _i489780;
                if ((i489 < procs_times_487.length) !== false) {
                    var p490 = procs_times_487[i489];
                    result486 = p490(result486);
                    _i489780 = i489 + 1;
                    continue lambda_start779;
                } else {
                    return rvoid();
                }
            }
        };
        loop488(0);
        return result486;
    };
};
var list_ref = function(lst491, pos492) {
    var loop493 = function(_i494783, _lst495784) {
        lambda_start782: while (true) {
            let i494 = _i494783;
            let lst495 = _lst495784;
            if (null_p(lst495) !== false) {
                return error($rjs_core.PrimitiveSymbol.make("list-ref?"), $rjs_core.UString.make("insufficient elements"));
            } else {
                if ((i494 === pos492) !== false) {
                    return lst495.hd;
                } else {
                    _i494783 = i494 + 1;
                    _lst495784 = lst495.tl;
                    continue lambda_start782;
                }
            }
        }
    };
    return loop493(0, lst491);
};
var build_list = function(n496, proc497) {
    var arr498 = Array(n496);
    var loop499 = function(_i500787) {
        lambda_start786: while (true) {
            let i500 = _i500787;
            if ((i500 < n496) !== false) {
                arr498[i500] = proc497(i500);
                _i500787 = i500 + 1;
                continue lambda_start786;
            } else {
                return rvoid();
            }
        }
    };
    loop499(0);
    return M1.Core.Pair.listFromArray(arr498);
};
var make_list = function(n501, v502) {
    var loop503 = function(_result504790, _i505791) {
        lambda_start789: while (true) {
            let result504 = _result504790;
            let i505 = _i505791;
            if ((i505 === n501) !== false) {
                return result504;
            } else {
                _result504790 = M1.Core.Pair.make(v502, result504);
                _i505791 = i505 + 1;
                continue lambda_start789;
            }
        }
    };
    return loop503($rjs_core.Pair.makeList(), 0);
};
var flatten = function(lst506) {
    if (null_p(lst506) !== false) {
        return lst506;
    } else {
        if (pair_p(lst506) !== false) {
            return append(flatten(lst506.hd), flatten(lst506.tl));
        } else {
            return list(lst506);
        }
    }
};
var assoc = function(k507, lst508) {
    var loop509 = function(_lst510795) {
        lambda_start794: while (true) {
            let lst510 = _lst510795;
            if (null_p(lst510) !== false) {
                return false;
            } else {
                if (M1.Core.isEqual(k507, lst510.hd.hd) !== false) {
                    return lst510.hd;
                } else {
                    _lst510795 = lst510.tl;
                    continue lambda_start794;
                }
            }
        }
    };
    return loop509(lst508);
};
var memv = M1.Kernel.memv;
var memq = M1.Kernel.memq;
var memf = M1.Kernel.memf;
var findf = M1.Kernel.findf;
var assv = M1.Kernel.assv;
var assq = M1.Kernel.assq;
var assf = M1.Kernel.assf;
var alt_reverse = reverse;
var string = M1.Core.attachProcedureName(M1.Core.UString.makeMutableFromCharsVarArgs, $rjs_core.UString.make("string"));
var string_append = M1.Core.attachProcedureName(M1.Core.UString.stringAppend, $rjs_core.UString.make("string-append"));
var string_ref = function(s511, i512) {
    if (string_p(s511) !== false) {
        var if_res404 = rvoid();
    } else {
        var if_res404 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-ref"), $rjs_core.UString.make("string?"), s511));
    }
    if_res404;
    if (exact_nonnegative_integer_p(i512) !== false) {
        var if_res405 = rvoid();
    } else {
        var if_res405 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-ref"), $rjs_core.UString.make("exact-nonnegative-integer?"), i512));
    }
    if_res405;
    if (s511.isValidIndex(i512) !== false) {
        return s511.charAt(i512);
    } else {
        return raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("string-ref"), $rjs_core.UString.make("string"), s511, s511.length, i512));
    }
};
var string_eq__p = function(sa513, sb514) {
    if (string_p(sa513) !== false) {
        var if_res407 = rvoid();
    } else {
        var if_res407 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string=?"), $rjs_core.UString.make("string?"), sa513));
    }
    if_res407;
    if (string_p(sb514) !== false) {
        var if_res408 = rvoid();
    } else {
        var if_res408 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string=?"), $rjs_core.UString.make("string?"), sb514));
    }
    if_res408;
    return M1.Core.UString.eq(sa513, sb514);
};
var string_lt__p = function(sa515, sb516) {
    if (string_p(sa515) !== false) {
        var if_res409 = rvoid();
    } else {
        var if_res409 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<?"), $rjs_core.UString.make("string?"), sa515));
    }
    if_res409;
    if (string_p(sb516) !== false) {
        var if_res410 = rvoid();
    } else {
        var if_res410 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<?"), $rjs_core.UString.make("string?"), sb516));
    }
    if_res410;
    return M1.Core.UString.lt(sa515, sb516);
};
var string_lt__eq__p = function(sa517, sb518) {
    if (string_p(sa517) !== false) {
        var if_res411 = rvoid();
    } else {
        var if_res411 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<=?"), $rjs_core.UString.make("string?"), sa517));
    }
    if_res411;
    if (string_p(sb518) !== false) {
        var if_res412 = rvoid();
    } else {
        var if_res412 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string<=?"), $rjs_core.UString.make("string?"), sb518));
    }
    if_res412;
    return M1.Core.UString.lte(sa517, sb518);
};
var string_gt__p = function(sa519, sb520) {
    if (string_p(sa519) !== false) {
        var if_res413 = rvoid();
    } else {
        var if_res413 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>?"), $rjs_core.UString.make("string?"), sa519));
    }
    if_res413;
    if (string_p(sb520) !== false) {
        var if_res414 = rvoid();
    } else {
        var if_res414 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>?"), $rjs_core.UString.make("string?"), sb520));
    }
    if_res414;
    return M1.Core.UString.gt(sa519, sb520);
};
var string_gt__eq__p = function(sa521, sb522) {
    if (string_p(sa521) !== false) {
        var if_res415 = rvoid();
    } else {
        var if_res415 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>=?"), $rjs_core.UString.make("string?"), sa521));
    }
    if_res415;
    if (string_p(sb522) !== false) {
        var if_res416 = rvoid();
    } else {
        var if_res416 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string>=?"), $rjs_core.UString.make("string?"), sb522));
    }
    if_res416;
    return M1.Core.UString.gte(sa521, sb522);
};
var string_p = M1.Core.attachProcedureName(M1.Core.UString.check, $rjs_core.UString.make("string?"));
var fprintf = $rjs_core.attachProcedureArity(function(out523, form524, ...args525417) {
    var args525 = $rjs_core.Pair.listFromArray(args525417);
    return apply(M1.Kernel.fprintf, print_as_expression(), out523, form524, args525);
});
var eprintf = $rjs_core.attachProcedureArity(function(form526, ...args527418) {
    var args527 = $rjs_core.Pair.listFromArray(args527418);
    return apply(M1.Kernel.fprintf, print_as_expression(), current_error_port(), form526, args527);
});
var printf = $rjs_core.attachProcedureArity(function(form528, ...args529419) {
    var args529 = $rjs_core.Pair.listFromArray(args529419);
    return apply(M1.Kernel.fprintf, print_as_expression(), current_output_port(), form528, args529);
});
var format = $rjs_core.attachProcedureArity(function(form530, ...args531420) {
    var args531 = $rjs_core.Pair.listFromArray(args531420);
    var out532 = open_output_string();
    apply(fprintf, out532, form530, args531);
    return get_output_string(out532);
});
var symbol_p = M1.Core.PrimitiveSymbol.check;
var keyword_p = M1.Core.Keyword.check;
var make_string533 = function(k2534, c1535) {
    var k536 = k2534;
    if (false !== false) {
        var if_res421 = $rjs_core.Char.charFromCodepoint(0);
    } else {
        var if_res421 = c1535;
    }
    var c537 = if_res421;
    return M1.Core.UString.repeatChar(k536, c537);
};
var cl422 = function(k538) {
    return make_string533(k538, $rjs_core.Char.charFromCodepoint(0));
};
var cl423 = function(k539, c1540) {
    return make_string533(k539, c1540);
};
var make_string = $rjs_core.attachProcedureArity(function() {
    var fixed_lam424 = {
        '1': cl422,
        '2': cl423
    } [arguments.length];
    if (fixed_lam424 !== undefined) {
        return fixed_lam424.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var list__gt_string = function(lst541) {
    return M1.Kernel.listToString(lst541);
};
var string__gt_list542 = function(str3543) {
    if (eq_p(str3543, M2.unsafe_undefined) !== false) {
        var if_res425 = string_p;
    } else {
        var if_res425 = str3543;
    }
    var str544 = if_res425;
    return M1.Core.Pair.listFromArray(M1.Core.UString.toArray(str544));
};
var cl426 = function() {
    return string__gt_list542(M2.unsafe_undefined);
};
var cl427 = function(str3545) {
    return string__gt_list542(str3545);
};
var string__gt_list = $rjs_core.attachProcedureArity(function() {
    var fixed_lam428 = {
        '0': cl426,
        '1': cl427
    } [arguments.length];
    if (fixed_lam428 !== undefined) {
        return fixed_lam428.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1]);
var string__gt_immutable_string546 = function(s4547) {
    if (eq_p(s4547, M2.unsafe_undefined) !== false) {
        var if_res429 = string_p;
    } else {
        var if_res429 = s4547;
    }
    var s548 = if_res429;
    return M1.Core.UString.stringToImmutableString(s548);
};
var cl430 = function() {
    return string__gt_immutable_string546(M2.unsafe_undefined);
};
var cl431 = function(s4549) {
    return string__gt_immutable_string546(s4549);
};
var string__gt_immutable_string = $rjs_core.attachProcedureArity(function() {
    var fixed_lam432 = {
        '0': cl430,
        '1': cl431
    } [arguments.length];
    if (fixed_lam432 !== undefined) {
        return fixed_lam432.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1]);
var symbol__gt_string = function(v550) {
    if (symbol_p(v550) !== false) {
        var if_res433 = rvoid();
    } else {
        var if_res433 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("symbol->string"), $rjs_core.UString.make("symbol?"), v550));
    }
    if_res433;
    return M1.Core.UString.makeMutable(v550.toString());
};
var string__gt_symbol = function(s551) {
    if (string_p(s551) !== false) {
        var if_res434 = rvoid();
    } else {
        var if_res434 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->symbol"), $rjs_core.UString.make("string?"), s551));
    }
    if_res434;
    return M1.Core.PrimitiveSymbol.make(s551);
};
var string__gt_uninterned_symbol = function(s552) {
    if (string_p(s552) !== false) {
        var if_res435 = rvoid();
    } else {
        var if_res435 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->uninterned-symbol"), $rjs_core.UString.make("string?"), s552));
    }
    if_res435;
    return M1.Core.PrimitiveSymbol.makeUninterned(s552);
};
var string__gt_unreadable_symbol = function(s553) {
    if (string_p(s553) !== false) {
        var if_res436 = rvoid();
    } else {
        var if_res436 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->unreadable-symbol"), $rjs_core.UString.make("string?"), s553));
    }
    if_res436;
    return M1.Core.PrimitiveSymbol.make(s553);
};
var string__gt_number554 = function(s6555, radix5556) {
    var s557 = s6555;
    if (false !== false) {
        var if_res437 = 10;
    } else {
        var if_res437 = radix5556;
    }
    var radix558 = if_res437;
    var integer_in559 = function(lo560, hi561) {
        return function(v562) {
            return (exact_integer_p(v562) && __gt__eq_(v562, lo560)) && __lt__eq_(v562, hi561);
        };
    };
    if (string_p(s557) !== false) {
        var if_res438 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("string?"), $rjs_core.UString.make(", given:"), s557, $rjs_core.UString.make(", at:"), 0);
        var if_res438 = null;
    }
    if_res438;
    if (integer_in559(2, 16)(radix558) !== false) {
        var if_res439 = rvoid();
    } else {
        throw M1.Core.racketContractError($rjs_core.UString.make("Expected:"), $rjs_core.UString.make("(integer-in 2 16)"), $rjs_core.UString.make(", given:"), radix558, $rjs_core.UString.make(", at:"), 1);
        var if_res439 = null;
    }
    if_res439;
    var result563 = parseInt(s557, radix558);
    if ((isNaN(result563) || not(s557.isValidInteger(radix558))) !== false) {
        return false;
    } else {
        return result563;
    }
};
var cl441 = function(s564) {
    return string__gt_number554(s564, 10);
};
var cl442 = function(s565, radix5566) {
    return string__gt_number554(s565, radix5566);
};
var string__gt_number = $rjs_core.attachProcedureArity(function() {
    var fixed_lam443 = {
        '1': cl441,
        '2': cl442
    } [arguments.length];
    if (fixed_lam443 !== undefined) {
        return fixed_lam443.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var symbol_interned_p = function(sym567) {
    if (symbol_p(sym567) !== false) {
        var if_res444 = rvoid();
    } else {
        var if_res444 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("symbol-interned?"), $rjs_core.UString.make("symbol?"), sym567));
    }
    if_res444;
    return M1.Core.PrimitiveSymbol.isInterned(sym567);
};
var symbol_eq__p = function(s568, v569) {
    return s568.equals(v569);
};
var symbol_lt__p = function(s570, v571) {
    return s570.lt(v571);
};
var keyword_lt__p = function(s572, v573) {
    return s572.lt(v573);
};
var string_length = function(s574) {
    if (string_p(s574) !== false) {
        var if_res445 = rvoid();
    } else {
        var if_res445 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-length"), $rjs_core.UString.make("string?"), s574));
    }
    if_res445;
    return s574.length;
};
var string_downcase = function(s575) {
    if (string_p(s575) !== false) {
        var if_res446 = rvoid();
    } else {
        var if_res446 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-downcase"), $rjs_core.UString.make("string?"), s575));
    }
    if_res446;
    return s575.toLowerCase();
};
var string_upcase = function(s576) {
    if (string_p(s576) !== false) {
        var if_res447 = rvoid();
    } else {
        var if_res447 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-upcase"), $rjs_core.UString.make("string?"), s576));
    }
    if_res447;
    return s576.toUpperCase();
};
var substring577 = function(str8578, start9579, end7580) {
    var str581 = str8578;
    var start582 = start9579;
    if (false !== false) {
        var if_res448 = false;
    } else {
        var if_res448 = end7580;
    }
    var end583 = if_res448;
    if (not(M1.Core.UString.check(str581)) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("expected a string"));
        var if_res452 = null;
    } else {
        if ((start582 < 0) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("invalid start index"));
            var if_res451 = null;
        } else {
            if (((end583 !== false) && (((end583 < 0) || (end583 > str581.length)) || (end583 < start582))) !== false) {
                throw M1.Core.racketContractError($rjs_core.UString.make("invalid end index"));
                var if_res450 = null;
            } else {
                if ((end583 === false) !== false) {
                    end583 = str581.length;
                    var if_res449 = null;
                } else {
                    var if_res449 = rvoid();
                }
                var if_res450 = if_res449;
            }
            var if_res451 = if_res450;
        }
        var if_res452 = if_res451;
    }
    if_res452;
    return str581.substring(start582, end583);
};
var cl453 = function(str584, start585) {
    return substring577(str584, start585, false);
};
var cl454 = function(str586, start587, end7588) {
    return substring577(str586, start587, end7588);
};
var substring = $rjs_core.attachProcedureArity(function() {
    var fixed_lam455 = {
        '2': cl453,
        '3': cl454
    } [arguments.length];
    if (fixed_lam455 !== undefined) {
        return fixed_lam455.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var string_split = function(str589, sep590) {
    if (string_p(str589) !== false) {
        var if_res456 = rvoid();
    } else {
        var if_res456 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-split"), $rjs_core.UString.make("string?"), str589));
    }
    if_res456;
    if ((function(v591) {
            return string_p(v591) || regexp_p(v591);
        })(sep590) !== false) {
        var if_res457 = rvoid();
    } else {
        var if_res457 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-split"), $rjs_core.UString.make("(check/or string? regexp?)"), sep590));
    }
    if_res457;
    return M1.Core.Pair.listFromArray(str589.split(sep590));
};
var string_set_bang_ = function(str592, k593, char594) {
    if ((function(v595) {
            return string_p(v595) && (function(v596) {
                return not(immutable_p(v596));
            })(v595);
        })(str592) !== false) {
        var if_res458 = rvoid();
    } else {
        var if_res458 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-set!"), $rjs_core.UString.make("(check/and string? (check/not immutable?))"), str592));
    }
    if_res458;
    if (exact_nonnegative_integer_p(k593) !== false) {
        var if_res459 = rvoid();
    } else {
        var if_res459 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-set!"), $rjs_core.UString.make("exact-nonnegative-integer?"), k593));
    }
    if_res459;
    if (char_p(char594) !== false) {
        var if_res460 = rvoid();
    } else {
        var if_res460 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string-set!"), $rjs_core.UString.make("char?"), char594));
    }
    if_res460;
    if (str592.isValidIndex(k593) !== false) {
        return str592.setCharAt(k593, char594);
    } else {
        return raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("string-set!"), $rjs_core.UString.make("string"), str592, str592.length, k593));
    }
};
var char_p = function(c597) {
    return M1.Core.Char.check(c597);
};
var char__gt_integer = function(c598) {
    if (char_p(c598) !== false) {
        var if_res462 = rvoid();
    } else {
        var if_res462 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char->integer"), $rjs_core.UString.make("char?"), c598));
    }
    if_res462;
    return M1.Core.Char.charToInteger(c598);
};
var integer__gt_char = function(k599) {
    if (exact_nonnegative_integer_p(k599) !== false) {
        var if_res463 = rvoid();
    } else {
        var if_res463 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("integer->char"), $rjs_core.UString.make("exact-nonnegative-integer?"), k599));
    }
    if_res463;
    return M1.Core.Char.integerToChar(k599);
};
var char_utf_8_length = function(c600) {
    if (char_p(c600) !== false) {
        var if_res464 = rvoid();
    } else {
        var if_res464 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-utf-8-length"), $rjs_core.UString.make("char?"), c600));
    }
    if_res464;
    return M1.Core.Char.charUtf8Length(c600);
};
var char_upcase = function(c601) {
    if (char_p(c601) !== false) {
        var if_res465 = rvoid();
    } else {
        var if_res465 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-upcase"), $rjs_core.UString.make("char?"), c601));
    }
    if_res465;
    return M1.Core.Char.upcase(c601);
};
var char_downcase = function(c602) {
    if (char_p(c602) !== false) {
        var if_res466 = rvoid();
    } else {
        var if_res466 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-downcase"), $rjs_core.UString.make("char?"), c602));
    }
    if_res466;
    return M1.Core.Char.downcase(c602);
};
var char_alphabetic_p = function(c603) {
    if (char_p(c603) !== false) {
        var if_res467 = rvoid();
    } else {
        var if_res467 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-alphabetic?"), $rjs_core.UString.make("char?"), c603));
    }
    if_res467;
    return M1.Core.Char.isAlphabetic(c603);
};
var char_lower_case_p = function(c604) {
    if (char_p(c604) !== false) {
        var if_res468 = rvoid();
    } else {
        var if_res468 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-lower-case?"), $rjs_core.UString.make("char?"), c604));
    }
    if_res468;
    return M1.Core.Char.isLowerCase(c604);
};
var char_upper_case_p = function(c605) {
    if (char_p(c605) !== false) {
        var if_res469 = rvoid();
    } else {
        var if_res469 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-upper-case?"), $rjs_core.UString.make("char?"), c605));
    }
    if_res469;
    return M1.Core.Char.isUpperCase(c605);
};
var char_title_case_p = function(c606) {
    if (char_p(c606) !== false) {
        var if_res470 = rvoid();
    } else {
        var if_res470 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-title-case?"), $rjs_core.UString.make("char?"), c606));
    }
    if_res470;
    return M1.Core.Char.isTitleCase(c606);
};
var char_numeric_p = function(c607) {
    if (char_p(c607) !== false) {
        var if_res471 = rvoid();
    } else {
        var if_res471 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-numeric?"), $rjs_core.UString.make("char?"), c607));
    }
    if_res471;
    return M1.Core.Char.isNumeric(c607);
};
var char_symbolic_p = function(c608) {
    if (char_p(c608) !== false) {
        var if_res472 = rvoid();
    } else {
        var if_res472 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-symbolic?"), $rjs_core.UString.make("char?"), c608));
    }
    if_res472;
    return M1.Core.Char.isSymbolic(c608);
};
var char_punctuation_p = function(c609) {
    if (char_p(c609) !== false) {
        var if_res473 = rvoid();
    } else {
        var if_res473 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-punctuation?"), $rjs_core.UString.make("char?"), c609));
    }
    if_res473;
    return M1.Core.Char.isPunctuation(c609);
};
var char_graphic_p = function(c610) {
    if (char_p(c610) !== false) {
        var if_res474 = rvoid();
    } else {
        var if_res474 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-graphic?"), $rjs_core.UString.make("char?"), c610));
    }
    if_res474;
    return M1.Core.Char.isGraphic(c610);
};
var char_whitespace_p = function(c611) {
    if (char_p(c611) !== false) {
        var if_res475 = rvoid();
    } else {
        var if_res475 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-whitespace?"), $rjs_core.UString.make("char?"), c611));
    }
    if_res475;
    return M1.Core.Char.isWhitespace(c611);
};
var char_blank_p = function(c612) {
    if (char_p(c612) !== false) {
        var if_res476 = rvoid();
    } else {
        var if_res476 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-blank?"), $rjs_core.UString.make("char?"), c612));
    }
    if_res476;
    return M1.Core.Char.isBlank(c612);
};
var char_iso_control_p = function(c613) {
    if (char_p(c613) !== false) {
        var if_res477 = rvoid();
    } else {
        var if_res477 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char-iso-control?"), $rjs_core.UString.make("char?"), c613));
    }
    if_res477;
    return M1.Core.Char.isIsoControl(c613);
};
var char_lt__p = function(a614, b615) {
    if (char_p(a614) !== false) {
        var if_res478 = rvoid();
    } else {
        var if_res478 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<?"), $rjs_core.UString.make("char?"), a614));
    }
    if_res478;
    if (char_p(b615) !== false) {
        var if_res479 = rvoid();
    } else {
        var if_res479 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<?"), $rjs_core.UString.make("char?"), b615));
    }
    if_res479;
    return a614 < b615;
};
var char_lt__eq__p = function(a616, b617) {
    if (char_p(a616) !== false) {
        var if_res480 = rvoid();
    } else {
        var if_res480 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<=?"), $rjs_core.UString.make("char?"), a616));
    }
    if_res480;
    if (char_p(b617) !== false) {
        var if_res481 = rvoid();
    } else {
        var if_res481 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char<=?"), $rjs_core.UString.make("char?"), b617));
    }
    if_res481;
    return a616 <= b617;
};
var char_gt__p = function(a618, b619) {
    if (char_p(a618) !== false) {
        var if_res482 = rvoid();
    } else {
        var if_res482 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>?"), $rjs_core.UString.make("char?"), a618));
    }
    if_res482;
    if (char_p(b619) !== false) {
        var if_res483 = rvoid();
    } else {
        var if_res483 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>?"), $rjs_core.UString.make("char?"), b619));
    }
    if_res483;
    return a618 > b619;
};
var char_gt__eq__p = function(a620, b621) {
    if (char_p(a620) !== false) {
        var if_res484 = rvoid();
    } else {
        var if_res484 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>=?"), $rjs_core.UString.make("char?"), a620));
    }
    if_res484;
    if (char_p(b621) !== false) {
        var if_res485 = rvoid();
    } else {
        var if_res485 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char>=?"), $rjs_core.UString.make("char?"), b621));
    }
    if_res485;
    return a620 >= b621;
};
var char_eq__p = function(a622, b623) {
    if (char_p(a622) !== false) {
        var if_res486 = rvoid();
    } else {
        var if_res486 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char=?"), $rjs_core.UString.make("char?"), a622));
    }
    if_res486;
    if (char_p(b623) !== false) {
        var if_res487 = rvoid();
    } else {
        var if_res487 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("char=?"), $rjs_core.UString.make("char?"), b623));
    }
    if_res487;
    return M1.Core.Char.eq(a622, b623);
};
var box = M1.Core.Box.make;
var unbox = function(v624) {
    return v624.get();
};
var set_box_bang_ = function(b625, v626) {
    return b625.set(v626);
};
var box_p = M1.Core.Box.check;
var box_cas_bang_ = function(loc627, old628, new629) {
    return (eq_p(old628, unbox(loc627)) && set_box_bang_(loc627, new629)) && true;
};
var box_immutable = M1.Core.Box.make;
var make_weak_box = M1.Core.Box.make;
var weak_box_value = function(v630) {
    return v630.get();
};
var set_box_times__bang_ = function(b631, v632) {
    return b631.set(v632);
};
var unbox_times_ = function(v633) {
    return v633.get();
};
var let_result488 = M1.Core.Struct.makeStructTypeProperty({
    'name': $rjs_core.UString.make("prop:evt")
});
var prop_evt = let_result488.getAt(0);
var evt_p = let_result488.getAt(1);
var prop_checked_procedure = make_struct_type_property($rjs_core.UString.make("prop:checked-procedure")).getAt(0);
var prop_impersonator_of = make_struct_type_property($rjs_core.UString.make("prop:impersonator-of")).getAt(0);
var prop_arity_string = make_struct_type_property($rjs_core.UString.make("prop:arity-string")).getAt(0);
var prop_incomplete_arity = make_struct_type_property($rjs_core.UString.make("prop:incomplete-arity")).getAt(0);
var prop_method_arity_error = make_struct_type_property($rjs_core.UString.make("prop:method-arity-error")).getAt(0);
var prop_exn_srclocs = make_struct_type_property($rjs_core.UString.make("prop:exn:srclocs")).getAt(0);
var prop_authentic = make_struct_type_property($rjs_core.UString.make("prop:authentic")).getAt(0);
var prop_serialize = make_struct_type_property($rjs_core.UString.make("prop:serialize")).getAt(0);
var prop_custom_write = make_struct_type_property($rjs_core.UString.make("prop:custom-write")).getAt(0);
var prop_sealed = make_struct_type_property($rjs_core.UString.make("prop:sealed")).getAt(0);
var prop_procedure = M1.Core.Struct.propProcedure;
var prop_equal_plus_hash = M1.Core.Struct.propEqualHash;
var equal_hash_code = function(v634) {
    return 0;
};
var equal_secondary_hash_code = function(v635) {
    return 1;
};
var error = M1.Kernel.error;
var raise_argument_error = M1.Kernel.argerror;
var raise_arguments_error = M1.Kernel.argserror;
var raise_result_error = M1.Kernel.resulterror;
var raise_mismatch_error = M1.Kernel.mismatcherror;
var bytes_p = function(bs636) {
    return M1.Core.Bytes.check(bs636);
};
var make_bytes637 = function(len11638, b10639) {
    var len640 = len11638;
    if (false !== false) {
        var if_res489 = 0;
    } else {
        var if_res489 = b10639;
    }
    var b641 = if_res489;
    return M1.Core.Bytes.make(len640, b641);
};
var cl490 = function(len642) {
    return make_bytes637(len642, 0);
};
var cl491 = function(len643, b10644) {
    return make_bytes637(len643, b10644);
};
var make_bytes = $rjs_core.attachProcedureArity(function() {
    var fixed_lam492 = {
        '1': cl490,
        '2': cl491
    } [arguments.length];
    if (fixed_lam492 !== undefined) {
        return fixed_lam492.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var bytes_ref = function(bs645, i646) {
    if (bytes_p(bs645) !== false) {
        var if_res493 = rvoid();
    } else {
        var if_res493 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-ref"), $rjs_core.UString.make("bytes?"), bs645));
    }
    if_res493;
    if (integer_p(i646) !== false) {
        var if_res494 = rvoid();
    } else {
        var if_res494 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-ref"), $rjs_core.UString.make("integer?"), i646));
    }
    if_res494;
    if ((__lt_(i646, 0) || __gt_(i646, bs645.length)) !== false) {
        return raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("bytes-ref"), $rjs_core.UString.make("byte string"), bs645, bs645.length, i646));
    } else {
        return M1.Core.Bytes.ref(bs645, i646);
    }
};
var bytes_set_bang_ = function(bs647, i648, b649) {
    if (bytes_p(bs647) !== false) {
        var if_res496 = rvoid();
    } else {
        var if_res496 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-set!"), $rjs_core.UString.make("bytes?"), bs647));
    }
    if_res496;
    if (integer_p(i648) !== false) {
        var if_res497 = rvoid();
    } else {
        var if_res497 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-set!"), $rjs_core.UString.make("integer?"), i648));
    }
    if_res497;
    if (integer_p(b649) !== false) {
        var if_res498 = rvoid();
    } else {
        var if_res498 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-set!"), $rjs_core.UString.make("integer?"), b649));
    }
    if_res498;
    if ((__lt_(i648, 0) || __gt_(i648, bs647.length)) !== false) {
        return raise(M1.Core.makeOutOfRangeError($rjs_core.UString.make("bytes-set!"), $rjs_core.UString.make("byte string"), bs647, bs647.length, i648));
    } else {
        return M1.Core.Bytes.set(bs647, i648, b649);
    }
};
var bytes_append = function() {
    var bss650 = M1.Core.argumentsToArray(arguments);
    return M1.Core.Bytes.append(bss650);
};
var bytes__gt_string_by_utf_8 = function(bs651) {
    if (bytes_p(bs651) !== false) {
        var if_res500 = rvoid();
    } else {
        var if_res500 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes->string/utf-8"), $rjs_core.UString.make("bytes?"), bs651));
    }
    if_res500;
    return M1.Core.UString.fromBytesUtf8(bs651);
};
var bytes__gt_string_by_latin_1 = function(bs652) {
    if (bytes_p(bs652) !== false) {
        var if_res501 = rvoid();
    } else {
        var if_res501 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes->string/latin-1"), $rjs_core.UString.make("bytes?"), bs652));
    }
    if_res501;
    return M1.Core.UString.fromBytesLatin1(bs652);
};
var string__gt_bytes_by_utf_8 = function(str653) {
    if (string_p(str653) !== false) {
        var if_res502 = rvoid();
    } else {
        var if_res502 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("string->bytes/utf-8"), $rjs_core.UString.make("string?"), str653));
    }
    if_res502;
    return M1.Core.UString.toBytesUtf8(str653);
};
var string__gt_bytes_by_locale654 = function(str15655, err_byte12656, start13657, end14658) {
    var str659 = str15655;
    if (false !== false) {
        var if_res503 = true;
    } else {
        var if_res503 = err_byte12656;
    }
    var err_byte660 = if_res503;
    if (false !== false) {
        var if_res504 = 0;
    } else {
        var if_res504 = start13657;
    }
    var start661 = if_res504;
    if (false !== false) {
        var if_res505 = 0;
    } else {
        var if_res505 = end14658;
    }
    var end662 = if_res505;
    return M1.Core.UString.toBytesUtf8(str659);
};
var cl506 = function(str663) {
    return string__gt_bytes_by_locale654(str663, true, 0, 0);
};
var cl507 = function(str664, err_byte665, start666, end14667) {
    return string__gt_bytes_by_locale654(str664, err_byte665, start666, end14667);
};
var cl508 = function(str668, err_byte669, start13670) {
    return string__gt_bytes_by_locale654(str668, err_byte669, start13670, 0);
};
var cl509 = function(str671, err_byte12672) {
    return string__gt_bytes_by_locale654(str671, err_byte12672, 0, 0);
};
var string__gt_bytes_by_locale = $rjs_core.attachProcedureArity(function() {
    var fixed_lam510 = {
        '1': cl506,
        '4': cl507,
        '3': cl508,
        '2': cl509
    } [arguments.length];
    if (fixed_lam510 !== undefined) {
        return fixed_lam510.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2, 3, 4]);
var bytes_eq__p = function(bstr1673, bstr2674) {
    if (bytes_p(bstr1673) !== false) {
        var if_res511 = rvoid();
    } else {
        var if_res511 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes=?"), $rjs_core.UString.make("bytes?"), bstr1673));
    }
    if_res511;
    if (bytes_p(bstr2674) !== false) {
        var if_res512 = rvoid();
    } else {
        var if_res512 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes=?"), $rjs_core.UString.make("bytes?"), bstr2674));
    }
    if_res512;
    return M1.Core.Bytes.eq(bstr1673, bstr2674);
};
var bytes_lt__p = function(bstr1675, bstr2676) {
    if (bytes_p(bstr1675) !== false) {
        var if_res513 = rvoid();
    } else {
        var if_res513 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes<?"), $rjs_core.UString.make("bytes?"), bstr1675));
    }
    if_res513;
    if (bytes_p(bstr2676) !== false) {
        var if_res514 = rvoid();
    } else {
        var if_res514 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes<?"), $rjs_core.UString.make("bytes?"), bstr2676));
    }
    if_res514;
    return M1.Core.Bytes.lt(bstr1675, bstr2676);
};
var bytes_gt__p = function(bstr1677, bstr2678) {
    if (bytes_p(bstr1677) !== false) {
        var if_res515 = rvoid();
    } else {
        var if_res515 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes>?"), $rjs_core.UString.make("bytes?"), bstr1677));
    }
    if_res515;
    if (bytes_p(bstr2678) !== false) {
        var if_res516 = rvoid();
    } else {
        var if_res516 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes>?"), $rjs_core.UString.make("bytes?"), bstr2678));
    }
    if_res516;
    return M1.Core.Bytes.gt(bstr1677, bstr2678);
};
var bytes_length = function(bs679) {
    if (bytes_p(bs679) !== false) {
        var if_res517 = rvoid();
    } else {
        var if_res517 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("bytes-length"), $rjs_core.UString.make("bytes?"), bs679));
    }
    if_res517;
    return bs679.length;
};
var current_continuation_marks = M1.Core.Marks.getContinuationMarks;
var continuation_mark_set__gt_list = M1.Core.Marks.getMarks;
var continuation_mark_set_first = function(mark_set680, key_v681, none_v682, prompt_tag683) {
    var let_result518 = values();
    var mark_set684 = mark_set684 || M1.Core.Marks.getContinuationMarks(prompt_tag683);
    var marks685 = M1.Core.Marks.getMarks(mark_set684, key_v681, prompt_tag683);
    if (null_p(marks685) !== false) {
        return none_v682;
    } else {
        return marks685.hd;
    }
};
var make_parameter = M1.Paramz.makeParameter;
var call_with_continuation_prompt = M1.Core.Marks.callWithContinuationPrompt;
var abort_current_continuation = function(prompt_tag686) {
    if ((arguments.length < 1) !== false) {
        throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
        var if_res520 = null;
    } else {
        var if_res520 = rvoid();
    }
    if_res520;
    var let_result521 = values();
    var args687 = Array.prototype.slice.call(arguments, 1);
    throw new M1.Core.Marks.AbortCurrentContinuation(prompt_tag686, args687);
    return null;
};
var make_continuation_prompt_tag = M1.Core.Marks.makeContinuationPromptTag;
var default_continuation_prompt_tag = M1.Core.Marks.defaultContinuationPromptTag;
var raise = M1.Kernel.doraise;
var exn_fail_p = M1.Core.isErr;
var exn_fail_contract_p = M1.Core.isContractErr;
var exn_fail_contract_arity_p = M1.Core.isContractErr;
var exn_message = function(e688) {
    return M1.Core.UString.makeMutable(M1.Core.errMsg(e688));
};
var current_output_port = make_parameter(M1.Core.Ports.standardOutputPort);
var current_input_port = make_parameter(M1.Core.Ports.standardInputPort);
var current_error_port = make_parameter(M1.Core.Ports.standardErrorPort);
var current_print = make_parameter(function(p689) {
    if (void_p(p689) !== false) {
        return rvoid();
    } else {
        print(p689);
        return newline();
    }
});
var port_p = function(p690) {
    return M1.Core.Ports.check(p690);
};
var input_port_p = function(p691) {
    return M1.Core.Ports.isInputPort(p691);
};
var output_port_p = function(p692) {
    return M1.Core.Ports.isOutputPort(p692);
};
var string_port_p = function(p693) {
    return M1.Core.Ports.isStringPort(p693);
};
var open_output_string = function() {
    return M1.Core.Ports.openOutputString();
};
var get_output_string = function(p694) {
    return M1.Core.Ports.getOutputString(p694);
};
var print_as_expression = make_parameter(true);
var display695 = function(datum17696, out16697) {
    var datum698 = datum17696;
    if (eq_p(out16697, M2.unsafe_undefined) !== false) {
        var if_res523 = current_output_port();
    } else {
        var if_res523 = out16697;
    }
    var out699 = if_res523;
    return M1.Core.display(out699, datum698);
};
var cl524 = function(datum700) {
    return display695(datum700, M2.unsafe_undefined);
};
var cl525 = function(datum701, out16702) {
    return display695(datum701, out16702);
};
var display = $rjs_core.attachProcedureArity(function() {
    var fixed_lam526 = {
        '1': cl524,
        '2': cl525
    } [arguments.length];
    if (fixed_lam526 !== undefined) {
        return fixed_lam526.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var displayln703 = function(datum19704, out18705) {
    var datum706 = datum19704;
    if (eq_p(out18705, M2.unsafe_undefined) !== false) {
        var if_res527 = current_output_port();
    } else {
        var if_res527 = out18705;
    }
    var out707 = if_res527;
    display(datum706, out707);
    return newline(out707);
};
var cl528 = function(datum708) {
    return displayln703(datum708, M2.unsafe_undefined);
};
var cl529 = function(datum709, out18710) {
    return displayln703(datum709, out18710);
};
var displayln = $rjs_core.attachProcedureArity(function() {
    var fixed_lam530 = {
        '1': cl528,
        '2': cl529
    } [arguments.length];
    if (fixed_lam530 !== undefined) {
        return fixed_lam530.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var write711 = function(datum21712, out20713) {
    var datum714 = datum21712;
    if (eq_p(out20713, M2.unsafe_undefined) !== false) {
        var if_res531 = current_output_port();
    } else {
        var if_res531 = out20713;
    }
    var out715 = if_res531;
    return M1.Core.write(out715, datum714);
};
var cl532 = function(datum716) {
    return write711(datum716, M2.unsafe_undefined);
};
var cl533 = function(datum717, out20718) {
    return write711(datum717, out20718);
};
var write = $rjs_core.attachProcedureArity(function() {
    var fixed_lam534 = {
        '1': cl532,
        '2': cl533
    } [arguments.length];
    if (fixed_lam534 !== undefined) {
        return fixed_lam534.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var writeln719 = function(datum23720, out22721) {
    var datum722 = datum23720;
    if (eq_p(out22721, M2.unsafe_undefined) !== false) {
        var if_res535 = current_output_port();
    } else {
        var if_res535 = out22721;
    }
    var out723 = if_res535;
    write(datum722, out723);
    return newline(out723);
};
var cl536 = function(datum724) {
    return writeln719(datum724, M2.unsafe_undefined);
};
var cl537 = function(datum725, out22726) {
    return writeln719(datum725, out22726);
};
var writeln = $rjs_core.attachProcedureArity(function() {
    var fixed_lam538 = {
        '1': cl536,
        '2': cl537
    } [arguments.length];
    if (fixed_lam538 !== undefined) {
        return fixed_lam538.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var print727 = function(datum26728, out24729, quote_depth25730) {
    var datum731 = datum26728;
    if (eq_p(out24729, M2.unsafe_undefined) !== false) {
        var if_res539 = current_output_port();
    } else {
        var if_res539 = out24729;
    }
    var out732 = if_res539;
    if (false !== false) {
        var if_res540 = 0;
    } else {
        var if_res540 = quote_depth25730;
    }
    var quote_depth733 = if_res540;
    return M1.Core.print(out732, datum731, print_as_expression(), quote_depth733);
};
var cl541 = function(datum734) {
    return print727(datum734, M2.unsafe_undefined, 0);
};
var cl542 = function(datum735, out736, quote_depth25737) {
    return print727(datum735, out736, quote_depth25737);
};
var cl543 = function(datum738, out24739) {
    return print727(datum738, out24739, 0);
};
var print = $rjs_core.attachProcedureArity(function() {
    var fixed_lam544 = {
        '1': cl541,
        '3': cl542,
        '2': cl543
    } [arguments.length];
    if (fixed_lam544 !== undefined) {
        return fixed_lam544.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2, 3]);
var println740 = function(datum28741, out27742) {
    var datum743 = datum28741;
    if (eq_p(out27742, M2.unsafe_undefined) !== false) {
        var if_res545 = current_output_port();
    } else {
        var if_res545 = out27742;
    }
    var out744 = if_res545;
    print(datum743, out744);
    return newline(out744);
};
var cl546 = function(datum745) {
    return println740(datum745, M2.unsafe_undefined);
};
var cl547 = function(datum746, out27747) {
    return println740(datum746, out27747);
};
var println = $rjs_core.attachProcedureArity(function() {
    var fixed_lam548 = {
        '1': cl546,
        '2': cl547
    } [arguments.length];
    if (fixed_lam548 !== undefined) {
        return fixed_lam548.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var newline748 = function(out29749) {
    if (eq_p(out29749, M2.unsafe_undefined) !== false) {
        var if_res549 = current_output_port();
    } else {
        var if_res549 = out29749;
    }
    var out750 = if_res549;
    return display($rjs_core.UString.make("\n"), out750);
};
var cl550 = function() {
    return newline748(M2.unsafe_undefined);
};
var cl551 = function(out29751) {
    return newline748(out29751);
};
var newline = $rjs_core.attachProcedureArity(function() {
    var fixed_lam552 = {
        '0': cl550,
        '1': cl551
    } [arguments.length];
    if (fixed_lam552 !== undefined) {
        return fixed_lam552.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1]);
var current_inspector = function() {
    return true;
};
var current_code_inspector = function() {
    return true;
};
var make_inspector = $rjs_core.attachProcedureArity(function(..._752553) {
    var _752 = $rjs_core.Pair.listFromArray(_752553);
    return false;
});
var check_method = function() {
    return false;
};
var random = M1.Kernel.random;
var current_seconds = function() {
    return Math.floor(Date.now() / 1000);
};
var object_name = function(fn753) {
    return fn753.name;
};
var unquoted_printing_string = function(s754) {
    return s754;
};
var error_print_width = function() {
    return 42;
};
var error_value__gt_string_handler = function() {
    return function(x755, n756) {
        if ((arguments.length !== 2) !== false) {
            throw M1.Core.racketContractError($rjs_core.UString.make("arity mismatch"));
            var if_res554 = null;
        } else {
            var if_res554 = rvoid();
        }
        if_res554;
        return $rjs_core.UString.make("str");
    };
};
var procedure_arity_mask = function(fn757) {
    return procedure_arity(fn757);
};
var bitwise_bit_set_p = function(mask758, n759) {
    return true;
};
var procedure_extract_target = function(f760) {
    return false;
};
var regexp_p = function(v761) {
    return M1.Core.Regexp.check(v761);
};
var pregexp_p = regexp_p;
var byte_regexp_p = regexp_p;
var byte_pregexp_p = regexp_p;
var regexp = function(str762) {
    if (string_p(str762) !== false) {
        var if_res555 = rvoid();
    } else {
        var if_res555 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("regexp"), $rjs_core.UString.make("string?"), str762));
    }
    if_res555;
    return M1.Core.Regexp.fromString(str762);
};
var pregexp = regexp;
var byte_regexp = function(bs763) {
    if (bytes_p(bs763) !== false) {
        var if_res556 = rvoid();
    } else {
        var if_res556 = M1.Kernel.doraise(M1.Core.makeArgumentError($rjs_core.PrimitiveSymbol.make("byte-regexp"), $rjs_core.UString.make("bytes?"), bs763));
    }
    if_res556;
    return M1.Core.Regexp.fromString(bytes__gt_string_by_utf_8(bs763));
};
var byte_pregexp = byte_regexp;
var regexp_match764 = function(pattern32765, input33766, start_pos30767, end_pos31768) {
    var pattern769 = pattern32765;
    var input770 = input33766;
    if (false !== false) {
        var if_res557 = 0;
    } else {
        var if_res557 = start_pos30767;
    }
    var start_pos771 = if_res557;
    if (false !== false) {
        var if_res558 = false;
    } else {
        var if_res558 = end_pos31768;
    }
    var end_pos772 = if_res558;
    return M1.Core.Regexp.match(pattern769, input770, start_pos771, end_pos772);
};
var cl559 = function(pattern773, input774) {
    return regexp_match764(pattern773, input774, 0, false);
};
var cl560 = function(pattern775, input776, start_pos777, end_pos31778) {
    return regexp_match764(pattern775, input776, start_pos777, end_pos31778);
};
var cl561 = function(pattern779, input780, start_pos30781) {
    return regexp_match764(pattern779, input780, start_pos30781, false);
};
var regexp_match = $rjs_core.attachProcedureArity(function() {
    var fixed_lam562 = {
        '2': cl559,
        '4': cl560,
        '3': cl561
    } [arguments.length];
    if (fixed_lam562 !== undefined) {
        return fixed_lam562.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var regexp_match_p782 = function(pattern36783, input37784, start_pos34785, end_pos35786) {
    var pattern787 = pattern36783;
    var input788 = input37784;
    if (false !== false) {
        var if_res563 = 0;
    } else {
        var if_res563 = start_pos34785;
    }
    var start_pos789 = if_res563;
    if (false !== false) {
        var if_res564 = false;
    } else {
        var if_res564 = end_pos35786;
    }
    var end_pos790 = if_res564;
    if (M1.Core.Regexp.match(pattern787, input788, start_pos789, end_pos790) !== false) {
        return true;
    } else {
        return false;
    }
};
var cl566 = function(pattern791, input792) {
    return regexp_match_p782(pattern791, input792, 0, false);
};
var cl567 = function(pattern793, input794, start_pos795, end_pos35796) {
    return regexp_match_p782(pattern793, input794, start_pos795, end_pos35796);
};
var cl568 = function(pattern797, input798, start_pos34799) {
    return regexp_match_p782(pattern797, input798, start_pos34799, false);
};
var regexp_match_p = $rjs_core.attachProcedureArity(function() {
    var fixed_lam569 = {
        '2': cl566,
        '4': cl567,
        '3': cl568
    } [arguments.length];
    if (fixed_lam569 !== undefined) {
        return fixed_lam569.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var let_result570 = make_struct_type($rjs_core.PrimitiveSymbol.make("kernel:arity-at-least"), false, 1, 0, false, rnull, false, false, $rjs_core.Pair.makeList(0), false, $rjs_core.PrimitiveSymbol.make("kernel:arity-at-least"));
var struct_800 = let_result570.getAt(0);
var make_801 = let_result570.getAt(1);
var __p802 = let_result570.getAt(2);
var __ref803 = let_result570.getAt(3);
var __set_bang_804 = let_result570.getAt(4);
var let_result571 = values(struct_800, make_801, __p802, make_struct_field_accessor(__ref803, 0, $rjs_core.PrimitiveSymbol.make("value")));
var struct_kernel_arity_at_least = let_result571.getAt(0);
var make_arity_at_least = let_result571.getAt(1);
var kernel_arity_at_least_p = let_result571.getAt(2);
var kernel_arity_at_least_value = let_result571.getAt(3);
var procedure_p = function(f805) {
    return typeof(f805) === "function";
};
var arity_at_least = make_arity_at_least;
var arity_at_least_p = function(p806) {
    return kernel_arity_at_least_p(p806);
};
var arity_at_least_value = function(p807) {
    return kernel_arity_at_least_value(p807);
};
var procedure_arity_includes_p = function(fn808, n809) {
    var ar810 = procedure_arity(fn808);
    if (kernel_arity_at_least_p(ar810) !== false) {
        return __lt__eq_(kernel_arity_at_least_value(ar810), n809);
    } else {
        if (list_p(ar810) !== false) {
            return member(n809, ar810);
        } else {
            return n809 === ar810;
        }
    }
};
var procedure_arity = function(fn811) {
    if (Array.isArray(fn811.__rjs_arityValue) !== false) {
        if ((fn811.__rjs_arityValue.length === 1) !== false) {
            return fn811.__rjs_arityValue[0];
        } else {
            return M1.Core.Pair.listFromArray(fn811.__rjs_arityValue);
        }
    } else {
        if ((fn811.__rjs_arityValue === undefined) !== false) {
            return fn811.length;
        } else {
            return make_arity_at_least(fn811.__rjs_arityValue || fn811.length);
        }
    }
};
var procedure_arity_p = function(v812) {
    return (exact_nonnegative_integer_p(v812) || kernel_arity_at_least_p(v812)) || ormap(function(v813) {
        return exact_nonnegative_integer_p(v813) || kernel_arity_at_least_p(v813);
    }, v812);
};
var checked_procedure_check_and_extract = function(type814, v815, proc816, v1817, v2818) {
    if ((M1.Core.Struct.check(v815, type814) && type814._findProperty(prop_checked_procedure)) !== false) {
        var fn819 = v815.getField(0);
        var r1820 = fn819(v1817, v2818);
        if (r1820 !== false) {
            return v815.getField(1);
        } else {
            return proc816(v815, v1817, v2818);
        }
    } else {
        return proc816(v815, v1817, v2818);
    }
};
var gensym = function(sym821) {
    var s822 = (sym821 && sym821.v) || $rjs_core.UString.make("");
    __count = __count + 1;
    return M1.Core.PrimitiveSymbol.makeUninterned(s822 + __count);
};
var eval_jit_enabled = function() {
    return false;
};
var variable_reference_constant_p = function(x823) {
    return false;
};
var variable_reference_from_unsafe_p = function(x824) {
    return false;
};
var variable_reference__gt_module_source = function(x825) {
    return false;
};
var variable_reference__gt_resolved_module_path = function(x826) {
    return false;
};
var module_name_fixup = function(x827) {
    return false;
};
var inspector_p = function(p828) {
    return true;
};
var make_thread_cell = function(p829) {
    return p829;
};
var __count = 1000;
var system_type830 = function(mode38831) {
    if (false !== false) {
        var if_res579 = $rjs_core.PrimitiveSymbol.make("os");
    } else {
        var if_res579 = mode38831;
    }
    var mode832 = if_res579;
    var tmp833 = mode832;
    if (equal_p(tmp833, $rjs_core.PrimitiveSymbol.make("os")) !== false) {
        return $rjs_core.PrimitiveSymbol.make("unix");
    } else {
        if (equal_p(tmp833, $rjs_core.PrimitiveSymbol.make("vm")) !== false) {
            return $rjs_core.PrimitiveSymbol.make("javascript");
        } else {
            if (equal_p(tmp833, $rjs_core.PrimitiveSymbol.make("gc")) !== false) {
                return $rjs_core.PrimitiveSymbol.make("javascript");
            } else {
                if (equal_p(tmp833, $rjs_core.PrimitiveSymbol.make("fs-change")) !== false) {
                    return M1.Core.Vector.make([false, false, false, false], false);
                } else {
                    return false;
                }
            }
        }
    }
};
var cl584 = function() {
    return system_type830($rjs_core.PrimitiveSymbol.make("os"));
};
var cl585 = function(mode38834) {
    return system_type830(mode38834);
};
var system_type = $rjs_core.attachProcedureArity(function() {
    var fixed_lam586 = {
        '0': cl584,
        '1': cl585
    } [arguments.length];
    if (fixed_lam586 !== undefined) {
        return fixed_lam586.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1]);
var find_system_path = function(kind835) {
    return $rjs_core.UString.make("");
};
var build_path = function(base836) {
    return base836;
};
var make_weak_hash = make_hash;
var make_weak_hasheqv = make_hasheqv;
var make_weak_hasheq = make_hasheq;
var current_environment_variables = function() {
    return rnull;
};
var environment_variables_ref = function(e837, n838) {
    return false;
};
var environment_variables_set_bang_839 = function(e40840, n41841, v42842, fail39843) {
    var e844 = e40840;
    var n845 = n41841;
    var v846 = v42842;
    if (false !== false) {
        var if_res587 = false;
    } else {
        var if_res587 = fail39843;
    }
    var fail847 = if_res587;
    return rvoid();
};
var cl588 = function(e848, n849, v850) {
    return environment_variables_set_bang_839(e848, n849, v850, false);
};
var cl589 = function(e851, n852, v853, fail39854) {
    return environment_variables_set_bang_839(e851, n852, v853, fail39854);
};
var environment_variables_set_bang_ = $rjs_core.attachProcedureArity(function() {
    var fixed_lam590 = {
        '3': cl588,
        '4': cl589
    } [arguments.length];
    if (fixed_lam590 !== undefined) {
        return fixed_lam590.apply(null, arguments);
    } else {
        return error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [3, 4]);
var prefab_struct_key = function(v855) {
    return false;
};
var path_p = M1.Core.Path.check;
var version = function() {
    return $rjs_core.UString.make("99.0");
};
var string__gt_path = M1.Core.Path.fromString;
var dynamic_wind = function(f856, g857, h858) {
    f856();
    g857();
    return h858();
};
var datum_intern_literal = function(v859) {
    return v859;
};
var make_semaphore = function(x860) {
    return x860;
};
var semaphore_peek_evt = function(x861) {
    return x861;
};
var call_with_semaphore = function(s862, f863) {
    return false;
};
var syntax_source = M1.Core.Correlated.syntaxSource;
var syntax_line = M1.Core.Correlated.syntaxLine;
var syntax_column = M1.Core.Correlated.syntaxColumn;
var syntax_position = M1.Core.Correlated.syntaxPosition;
var syntax_span = M1.Core.Correlated.syntaxSpan;
var __rjs_quoted__ = {};
__rjs_quoted__.length = length;
__rjs_quoted__.kernel_arity_at_least_value = kernel_arity_at_least_value;
__rjs_quoted__.struct_kernel_arity_at_least = struct_kernel_arity_at_least;
__rjs_quoted__.make_struct_type_property = make_struct_type_property;
__rjs_quoted__.__plus_ = __plus_;
__rjs_quoted__.kernel_arity_at_least_p = kernel_arity_at_least_p;
__rjs_quoted__.make_arity_at_least = make_arity_at_least;
export {
    __rjs_quoted__,
    equal_p,
    eqv_p,
    eq_p,
    values,
    call_with_values,
    immutable_p,
    rvoid,
    void_p,
    number_p,
    real_p,
    integer_p,
    zero_p,
    positive_p,
    negative_p,
    add1,
    sub1,
    quotient,
    even_p,
    odd_p,
    exact_nonnegative_integer_p,
    exact_integer_p,
    exact_p,
    single_flonum_available_p,
    single_flonum_p,
    real__gt_single_flonum,
    __times_,
    __by_,
    __plus_,
    __,
    __lt_,
    __gt_,
    __lt__eq_,
    __gt__eq_,
    __eq_,
    floor,
    abs,
    sin,
    cos,
    tan,
    asin,
    acos,
    atan,
    ceiling,
    round,
    min,
    max,
    log,
    exp,
    expt,
    sqrt,
    sqr,
    truncate,
    remainder,
    number__gt_string,
    arithmetic_shift,
    inexact__gt_exact,
    exact__gt_inexact,
    make_rectangular,
    real_part,
    imag_part,
    rational_p,
    numerator,
    denominator,
    bitwise_and,
    bitwise_ior,
    bitwise_xor,
    bitwise_not,
    not,
    rfalse,
    rtrue,
    false_p,
    boolean_p,
    car,
    cdr,
    cons,
    pair_p,
    caar,
    cadr,
    cdar,
    cddr,
    cdddr,
    caddr,
    cadddr,
    cddddr,
    rnull,
    list,
    null_p,
    list_p,
    length,
    reverse,
    list_times_,
    append,
    for_each,
    mcons,
    mpair_p,
    mcar,
    mcdr,
    set_mcar_bang_,
    set_mcdr_bang_,
    make_struct_type,
    make_struct_field_accessor,
    make_struct_field_mutator,
    make_struct_type_property,
    check_struct_type,
    struct_type_p,
    struct_type_info,
    vector,
    make_vector,
    vector_p,
    vector_length,
    vector_ref,
    vector_set_bang_,
    vector__gt_list,
    list__gt_vector,
    vector__gt_immutable_vector,
    vector_copy,
    vector_copy_bang_,
    hash,
    hasheqv,
    hasheq,
    make_hash,
    make_hasheqv,
    make_hasheq,
    make_immutable_hash,
    make_immutable_hasheqv,
    make_immutable_hasheq,
    hash_p,
    hash_equal_p,
    hash_eqv_p,
    hash_eq_p,
    hash_weak_p,
    hash_ref,
    hash_has_key_p,
    hash_ref_key,
    hash_set,
    hash_remove,
    hash_map,
    hash_count,
    hash_remove_bang_,
    hash_set_bang_,
    hash_iterate_first,
    hash_iterate_next,
    hash_iterate_key,
    hash_iterate_value,
    hash_iterate_key_plus_value,
    hash_iterate_pair,
    hash_keys_subset_p,
    hash_union,
    hash_strong_p,
    apply,
    map,
    foldl,
    _foldr,
    foldr,
    range,
    remove,
    filter,
    ormap,
    andmap,
    member,
    compose,
    compose1,
    list_ref,
    build_list,
    make_list,
    flatten,
    assoc,
    memv,
    memq,
    memf,
    findf,
    assv,
    assq,
    assf,
    alt_reverse,
    string,
    string_append,
    string_ref,
    string_eq__p,
    string_lt__p,
    string_lt__eq__p,
    string_gt__p,
    string_gt__eq__p,
    string_p,
    fprintf,
    eprintf,
    printf,
    format,
    symbol_p,
    keyword_p,
    make_string,
    list__gt_string,
    string__gt_list,
    string__gt_immutable_string,
    symbol__gt_string,
    string__gt_symbol,
    string__gt_uninterned_symbol,
    string__gt_unreadable_symbol,
    string__gt_number,
    symbol_interned_p,
    symbol_eq__p,
    symbol_lt__p,
    keyword_lt__p,
    string_length,
    string_downcase,
    string_upcase,
    substring,
    string_split,
    string_set_bang_,
    char_p,
    char__gt_integer,
    integer__gt_char,
    char_utf_8_length,
    char_upcase,
    char_downcase,
    char_alphabetic_p,
    char_lower_case_p,
    char_upper_case_p,
    char_title_case_p,
    char_numeric_p,
    char_symbolic_p,
    char_punctuation_p,
    char_graphic_p,
    char_whitespace_p,
    char_blank_p,
    char_iso_control_p,
    char_lt__p,
    char_lt__eq__p,
    char_gt__p,
    char_gt__eq__p,
    char_eq__p,
    box,
    unbox,
    set_box_bang_,
    box_p,
    box_cas_bang_,
    box_immutable,
    make_weak_box,
    weak_box_value,
    set_box_times__bang_,
    unbox_times_,
    evt_p,
    prop_evt,
    prop_checked_procedure,
    prop_impersonator_of,
    prop_arity_string,
    prop_incomplete_arity,
    prop_method_arity_error,
    prop_exn_srclocs,
    prop_authentic,
    prop_serialize,
    prop_custom_write,
    prop_sealed,
    prop_procedure,
    prop_equal_plus_hash,
    equal_hash_code,
    equal_secondary_hash_code,
    error,
    raise_argument_error,
    raise_arguments_error,
    raise_result_error,
    raise_mismatch_error,
    bytes_p,
    make_bytes,
    bytes_ref,
    bytes_set_bang_,
    bytes_append,
    bytes__gt_string_by_utf_8,
    bytes__gt_string_by_latin_1,
    string__gt_bytes_by_utf_8,
    string__gt_bytes_by_locale,
    bytes_eq__p,
    bytes_lt__p,
    bytes_gt__p,
    bytes_length,
    current_continuation_marks,
    continuation_mark_set__gt_list,
    continuation_mark_set_first,
    make_parameter,
    call_with_continuation_prompt,
    abort_current_continuation,
    make_continuation_prompt_tag,
    default_continuation_prompt_tag,
    raise,
    exn_fail_p,
    exn_fail_contract_p,
    exn_fail_contract_arity_p,
    exn_message,
    current_output_port,
    current_input_port,
    current_error_port,
    current_print,
    port_p,
    input_port_p,
    output_port_p,
    string_port_p,
    open_output_string,
    get_output_string,
    print_as_expression,
    display,
    displayln,
    write,
    writeln,
    print,
    println,
    newline,
    current_inspector,
    current_code_inspector,
    make_inspector,
    check_method,
    random,
    current_seconds,
    object_name,
    unquoted_printing_string,
    error_print_width,
    error_value__gt_string_handler,
    procedure_arity_mask,
    bitwise_bit_set_p,
    procedure_extract_target,
    regexp_p,
    pregexp_p,
    byte_regexp_p,
    byte_pregexp_p,
    regexp,
    pregexp,
    byte_regexp,
    byte_pregexp,
    regexp_match,
    regexp_match_p,
    kernel_arity_at_least_value,
    kernel_arity_at_least_p,
    make_arity_at_least,
    struct_kernel_arity_at_least,
    procedure_p,
    arity_at_least,
    arity_at_least_p,
    arity_at_least_value,
    procedure_arity_includes_p,
    procedure_arity,
    procedure_arity_p,
    checked_procedure_check_and_extract,
    gensym,
    eval_jit_enabled,
    variable_reference_constant_p,
    variable_reference_from_unsafe_p,
    variable_reference__gt_module_source,
    variable_reference__gt_resolved_module_path,
    module_name_fixup,
    inspector_p,
    make_thread_cell,
    system_type,
    find_system_path,
    build_path,
    make_weak_hash,
    make_weak_hasheqv,
    make_weak_hasheq,
    current_environment_variables,
    environment_variables_ref,
    environment_variables_set_bang_,
    prefab_struct_key,
    path_p,
    version,
    string__gt_path,
    dynamic_wind,
    datum_intern_literal,
    make_semaphore,
    semaphore_peek_evt,
    call_with_semaphore,
    syntax_source,
    syntax_line,
    syntax_column,
    syntax_position,
    syntax_span
};