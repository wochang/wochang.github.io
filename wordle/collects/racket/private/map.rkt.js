import * as $rjs_core from '../../../runtime/core.js';import * as M0 from "../../../runtime/kernel.rkt.js";import * as M1 from "./kw.rkt.js";var cl1954 = function(f3435, l3436) {if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference"))!==false) {var if_res1961 = true;} else {if (M0.procedure_p(f3435)!==false) {if (M0.procedure_arity_includes_p(f3435,1)!==false) {var if_res1959 = M0.list_p(l3436);} else {var if_res1959 = false;}var if_res1960 = if_res1959;} else {var if_res1960 = false;}var if_res1961 = if_res1960;}if (if_res1961!==false) {var loop3437 = function(l3438) {if (M0.null_p(l3438)!==false) {var if_res1962 = M0.rnull;} else {var r3439 = M0.cdr(l3438);var if_res1962 = M0.cons(f3435(M0.car(l3438)),loop3437(r3439));}return if_res1962;};var if_res1963 = loop3437(l3436);} else {var if_res1963 = gen_map(f3435,M0.list(l3436));}return if_res1963;};var cl1955 = function(f3440, l13441, l23442) {if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference"))!==false) {var if_res1968 = true;} else {if (M0.procedure_p(f3440)!==false) {if (M0.procedure_arity_includes_p(f3440,2)!==false) {if (M0.list_p(l13441)!==false) {if (M0.list_p(l23442)!==false) {var if_res1964 = M0.__eq_(M0.length(l13441),M0.length(l23442));} else {var if_res1964 = false;}var if_res1965 = if_res1964;} else {var if_res1965 = false;}var if_res1966 = if_res1965;} else {var if_res1966 = false;}var if_res1967 = if_res1966;} else {var if_res1967 = false;}var if_res1968 = if_res1967;}if (if_res1968!==false) {var loop3443 = function(l13444, l23445) {if (M0.null_p(l13444)!==false) {var if_res1969 = M0.rnull;} else {var r13446 = M0.cdr(l13444);var r23447 = M0.cdr(l23445);var if_res1969 = M0.cons(f3440(M0.car(l13444),M0.car(l23445)),loop3443(r13446,r23447));}return if_res1969;};var if_res1970 = loop3443(l13441,l23442);} else {var if_res1970 = gen_map(f3440,M0.list(l13441,l23442));}return if_res1970;};var cl1956 = $rjs_core.attachProcedureArity(function(f3448, l3449, ...args34501971) {var args3450 = $rjs_core.Pair.listFromArray(args34501971);return gen_map(f3448,M0.cons(l3449,args3450));});var map3434 = $rjs_core.attachProcedureArity(function() {var fixed_lam1957 = {'2':cl1954,'3':cl1955}[arguments.length];if (fixed_lam1957!==undefined) {return fixed_lam1957.apply(null,arguments);} else {if (M0.__gt__eq_(cl1956.length,1)!==false) {var if_res1958 = cl1956.apply(null,arguments);} else {var if_res1958 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));}return if_res1958;}},[M0.make_arity_at_least(2)]);var map2 = map3434;var cl1972 = function(f3452, l3453) {if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference"))!==false) {var if_res1979 = true;} else {if (M0.procedure_p(f3452)!==false) {if (M0.procedure_arity_includes_p(f3452,1)!==false) {var if_res1977 = M0.list_p(l3453);} else {var if_res1977 = false;}var if_res1978 = if_res1977;} else {var if_res1978 = false;}var if_res1979 = if_res1978;}if (if_res1979!==false) {var loop3454 = function(l3455) {if (M0.null_p(l3455)!==false) {var if_res1980 = M0.rvoid();} else {var r3456 = M0.cdr(l3455);f3452(M0.car(l3455));var if_res1980 = loop3454(r3456);}return if_res1980;};var if_res1981 = loop3454(l3453);} else {var if_res1981 = gen_for_each(f3452,M0.list(l3453));}return if_res1981;};var cl1973 = function(f3457, l13458, l23459) {if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference"))!==false) {var if_res1986 = true;} else {if (M0.procedure_p(f3457)!==false) {if (M0.procedure_arity_includes_p(f3457,2)!==false) {if (M0.list_p(l13458)!==false) {if (M0.list_p(l23459)!==false) {var if_res1982 = M0.__eq_(M0.length(l13458),M0.length(l23459));} else {var if_res1982 = false;}var if_res1983 = if_res1982;} else {var if_res1983 = false;}var if_res1984 = if_res1983;} else {var if_res1984 = false;}var if_res1985 = if_res1984;} else {var if_res1985 = false;}var if_res1986 = if_res1985;}if (if_res1986!==false) {var loop3460 = function(l13461, l23462) {if (M0.null_p(l13461)!==false) {var if_res1987 = M0.rvoid();} else {var r13463 = M0.cdr(l13461);var r23464 = M0.cdr(l23462);f3457(M0.car(l13461),M0.car(l23462));var if_res1987 = loop3460(r13463,r23464);}return if_res1987;};var if_res1988 = loop3460(l13458,l23459);} else {var if_res1988 = gen_for_each(f3457,M0.list(l13458,l23459));}return if_res1988;};var cl1974 = $rjs_core.attachProcedureArity(function(f3465, l3466, ...args34671989) {var args3467 = $rjs_core.Pair.listFromArray(args34671989);return gen_for_each(f3465,M0.cons(l3466,args3467));});var for_each3451 = $rjs_core.attachProcedureArity(function() {var fixed_lam1975 = {'2':cl1972,'3':cl1973}[arguments.length];if (fixed_lam1975!==undefined) {return fixed_lam1975.apply(null,arguments);} else {if (M0.__gt__eq_(cl1974.length,1)!==false) {var if_res1976 = cl1974.apply(null,arguments);} else {var if_res1976 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));}return if_res1976;}},[M0.make_arity_at_least(2)]);var for_each2 = for_each3451;var cl1990 = function(f3469, l3470) {if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference"))!==false) {var if_res1997 = true;} else {if (M0.procedure_p(f3469)!==false) {if (M0.procedure_arity_includes_p(f3469,1)!==false) {var if_res1995 = M0.list_p(l3470);} else {var if_res1995 = false;}var if_res1996 = if_res1995;} else {var if_res1996 = false;}var if_res1997 = if_res1996;}if (if_res1997!==false) {if (M0.null_p(l3470)!==false) {var if_res2000 = true;} else {var loop3471 = function(l3472) {if (M0.null_p(M0.cdr(l3472))!==false) {var if_res1999 = f3469(M0.car(l3472));} else {var r3473 = M0.cdr(l3472);if (f3469(M0.car(l3472))!==false) {var if_res1998 = loop3471(r3473);} else {var if_res1998 = false;}var if_res1999 = if_res1998;}return if_res1999;};var if_res2000 = loop3471(l3470);}var if_res2001 = if_res2000;} else {var if_res2001 = gen_andmap(f3469,M0.list(l3470));}return if_res2001;};var cl1991 = function(f3474, l13475, l23476) {if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference"))!==false) {var if_res2006 = true;} else {if (M0.procedure_p(f3474)!==false) {if (M0.procedure_arity_includes_p(f3474,2)!==false) {if (M0.list_p(l13475)!==false) {if (M0.list_p(l23476)!==false) {var if_res2002 = M0.__eq_(M0.length(l13475),M0.length(l23476));} else {var if_res2002 = false;}var if_res2003 = if_res2002;} else {var if_res2003 = false;}var if_res2004 = if_res2003;} else {var if_res2004 = false;}var if_res2005 = if_res2004;} else {var if_res2005 = false;}var if_res2006 = if_res2005;}if (if_res2006!==false) {if (M0.null_p(l13475)!==false) {var if_res2009 = true;} else {var loop3477 = function(l13478, l23479) {if (M0.null_p(M0.cdr(l13478))!==false) {var if_res2008 = f3474(M0.car(l13478),M0.car(l23479));} else {var r13480 = M0.cdr(l13478);var r23481 = M0.cdr(l23479);if (f3474(M0.car(l13478),M0.car(l23479))!==false) {var if_res2007 = loop3477(r13480,r23481);} else {var if_res2007 = false;}var if_res2008 = if_res2007;}return if_res2008;};var if_res2009 = loop3477(l13475,l23476);}var if_res2010 = if_res2009;} else {var if_res2010 = gen_andmap(f3474,M0.list(l13475,l23476));}return if_res2010;};var cl1992 = $rjs_core.attachProcedureArity(function(f3482, l3483, ...args34842011) {var args3484 = $rjs_core.Pair.listFromArray(args34842011);return gen_andmap(f3482,M0.cons(l3483,args3484));});var andmap3468 = $rjs_core.attachProcedureArity(function() {var fixed_lam1993 = {'2':cl1990,'3':cl1991}[arguments.length];if (fixed_lam1993!==undefined) {return fixed_lam1993.apply(null,arguments);} else {if (M0.__gt__eq_(cl1992.length,1)!==false) {var if_res1994 = cl1992.apply(null,arguments);} else {var if_res1994 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));}return if_res1994;}},[M0.make_arity_at_least(2)]);var andmap2 = andmap3468;var cl2012 = function(f3486, l3487) {if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference"))!==false) {var if_res2019 = true;} else {if (M0.procedure_p(f3486)!==false) {if (M0.procedure_arity_includes_p(f3486,1)!==false) {var if_res2017 = M0.list_p(l3487);} else {var if_res2017 = false;}var if_res2018 = if_res2017;} else {var if_res2018 = false;}var if_res2019 = if_res2018;}if (if_res2019!==false) {if (M0.null_p(l3487)!==false) {var if_res2022 = false;} else {var loop3488 = function(l3489) {if (M0.null_p(M0.cdr(l3489))!==false) {var if_res2021 = f3486(M0.car(l3489));} else {var r3490 = M0.cdr(l3489);var or_part3491 = f3486(M0.car(l3489));if (or_part3491!==false) {var if_res2020 = or_part3491;} else {var if_res2020 = loop3488(r3490);}var if_res2021 = if_res2020;}return if_res2021;};var if_res2022 = loop3488(l3487);}var if_res2023 = if_res2022;} else {var if_res2023 = gen_ormap(f3486,M0.list(l3487));}return if_res2023;};var cl2013 = function(f3492, l13493, l23494) {if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference"))!==false) {var if_res2028 = true;} else {if (M0.procedure_p(f3492)!==false) {if (M0.procedure_arity_includes_p(f3492,2)!==false) {if (M0.list_p(l13493)!==false) {if (M0.list_p(l23494)!==false) {var if_res2024 = M0.__eq_(M0.length(l13493),M0.length(l23494));} else {var if_res2024 = false;}var if_res2025 = if_res2024;} else {var if_res2025 = false;}var if_res2026 = if_res2025;} else {var if_res2026 = false;}var if_res2027 = if_res2026;} else {var if_res2027 = false;}var if_res2028 = if_res2027;}if (if_res2028!==false) {if (M0.null_p(l13493)!==false) {var if_res2031 = false;} else {var loop3495 = function(l13496, l23497) {if (M0.null_p(M0.cdr(l13496))!==false) {var if_res2030 = f3492(M0.car(l13496),M0.car(l23497));} else {var r13498 = M0.cdr(l13496);var r23499 = M0.cdr(l23497);var or_part3500 = f3492(M0.car(l13496),M0.car(l23497));if (or_part3500!==false) {var if_res2029 = or_part3500;} else {var if_res2029 = loop3495(r13498,r23499);}var if_res2030 = if_res2029;}return if_res2030;};var if_res2031 = loop3495(l13493,l23494);}var if_res2032 = if_res2031;} else {var if_res2032 = gen_ormap(f3492,M0.list(l13493,l23494));}return if_res2032;};var cl2014 = $rjs_core.attachProcedureArity(function(f3501, l3502, ...args35032033) {var args3503 = $rjs_core.Pair.listFromArray(args35032033);return gen_ormap(f3501,M0.cons(l3502,args3503));});var ormap3485 = $rjs_core.attachProcedureArity(function() {var fixed_lam2015 = {'2':cl2012,'3':cl2013}[arguments.length];if (fixed_lam2015!==undefined) {return fixed_lam2015.apply(null,arguments);} else {if (M0.__gt__eq_(cl2014.length,1)!==false) {var if_res2016 = cl2014.apply(null,arguments);} else {var if_res2016 = M0.error($rjs_core.UString.make("case-lambda: invalid case"));}return if_res2016;}},[M0.make_arity_at_least(2)]);var ormap2 = ormap3485;var check_args = function(who3504, f3505, ls3506) {if (M0.procedure_p(f3505)!==false) {var if_res2034 = M0.rvoid();} else {var if_res2034 = M0.raise_argument_error(who3504,$rjs_core.UString.make("procedure?"),f3505);}if_res2034;var loop3507 = function(prev_len3508, ls3509, i3510) {if (M0.null_p(ls3509)!==false) {var if_res2038 = M0.rvoid();} else {var l3511 = M0.car(ls3509);if (M0.list_p(l3511)!==false) {var if_res2035 = M0.rvoid();} else {var if_res2035 = M0.raise_argument_error(who3504,$rjs_core.UString.make("list?"),l3511);}if_res2035;var len3512 = M0.length(l3511);if (prev_len3508!==false) {var if_res2036 = M0.not(M0.__eq_(len3512,prev_len3508));} else {var if_res2036 = false;}if (if_res2036!==false) {var if_res2037 = M0.raise_arguments_error(who3504,$rjs_core.UString.make("all lists must have same size"),$rjs_core.UString.make("first list length"),prev_len3508,$rjs_core.UString.make("other list length"),len3512,$rjs_core.UString.make("procedure"),f3505);} else {var if_res2037 = M0.rvoid();}if_res2037;var if_res2038 = loop3507(len3512,M0.cdr(ls3509),M0.add1(i3510));}return if_res2038;};loop3507(false,ls3506,1);if (M0.procedure_arity_includes_p(f3505,M0.length(ls3506))!==false) {var if_res2055 = M0.rvoid();} else {var let_result2039 = M1.procedure_keywords(f3505);var required_keywords3513 = let_result2039.getAt(0);var optional_keywords3514 = let_result2039.getAt(1);if (M0.pair_p(required_keywords3513)!==false) {var if_res2054 = M0.string_append($rjs_core.UString.make("argument mismatch;\n"),$rjs_core.UString.make(" the given procedure expects keyword arguments"));} else {var if_res2054 = M0.string_append($rjs_core.UString.make("argument mismatch;\n"),$rjs_core.UString.make(" the given procedure's expected number of arguments does not match"),$rjs_core.UString.make(" the given number of lists"));}var temp2053 = $rjs_core.UString.make("given procedure");var n3516 = M0.object_name(f3505);if (M0.symbol_p(n3516)!==false) {var if_res2050 = M0.symbol__gt_string(n3516);} else {var if_res2050 = false;}var or_part3515 = if_res2050;if (or_part3515!==false) {var if_res2051 = or_part3515;} else {var if_res2051 = $rjs_core.UString.make("#<procedure>");}var temp2052 = M0.unquoted_printing_string(if_res2051);var a3517 = M0.procedure_arity(f3505);if (M0.pair_p(required_keywords3513)!==false) {var if_res2049 = M0.rnull;} else {if (M0.integer_p(a3517)!==false) {var if_res2048 = M0.list($rjs_core.UString.make("expected"),a3517);} else {if (M0.arity_at_least_p(a3517)!==false) {var if_res2047 = M0.list($rjs_core.UString.make("expected"),M0.unquoted_printing_string(M0.string_append($rjs_core.UString.make("at least "),M0.number__gt_string(M0.arity_at_least_value(a3517)))));} else {var if_res2047 = M0.rnull;}var if_res2048 = if_res2047;}var if_res2049 = if_res2048;}if (M0.pair_p(required_keywords3513)!==false) {var if_res2046 = M0.rnull;} else {var if_res2046 = M0.list($rjs_core.UString.make("given"),M0.length(ls3506));}if (M0.pair_p(required_keywords3513)!==false) {var temp2044 = $rjs_core.UString.make("required keywords");var loop3518 = function(kws3519) {if (M0.null_p(kws3519)!==false) {var if_res2043 = M0.rnull;} else {var if_res2043 = M0.list_times_($rjs_core.UString.make(" "),M0.string_append($rjs_core.UString.make("#:"),M0.__rjs_quoted__.keyword__gt_string(M0.car(kws3519))),loop3518(M0.cdr(kws3519)));}return if_res2043;};var if_res2045 = M0.list(temp2044,M0.unquoted_printing_string(M0.apply(M0.string_append,M0.cdr(loop3518(required_keywords3513)))));} else {var if_res2045 = M0.rnull;}var w3520 = M0.quotient(M0.error_print_width(),M0.length(ls3506));if (M0.__gt_(w3520,10)!==false) {var temp2041 = $rjs_core.UString.make("argument lists...");var loop3521 = function(ls3522) {if (M0.null_p(ls3522)!==false) {var if_res2040 = M0.rnull;} else {var if_res2040 = M0.cons(M0.string_append($rjs_core.UString.make("\n   "),M0.error_value__gt_string_handler()(M0.car(ls3522),w3520)),loop3521(M0.cdr(ls3522)));}return if_res2040;};var if_res2042 = M0.list(temp2041,M0.unquoted_printing_string(M0.apply(M0.string_append,loop3521(ls3506))));} else {var if_res2042 = M0.rnull;}var if_res2055 = M0.apply(M0.raise_arguments_error,who3504,if_res2054,temp2053,temp2052,M0.append(if_res2049,if_res2046,if_res2045,if_res2042));}return if_res2055;};var gen_map = function(f3523, ls3524) {if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference"))!==false) {var if_res2056 = true;} else {var if_res2056 = check_args($rjs_core.PrimitiveSymbol.make("map"),f3523,ls3524);}if_res2056;var loop3525 = function(ls3526) {if (M0.null_p(M0.car(ls3526))!==false) {var if_res2057 = M0.rnull;} else {var next_ls3527 = map2(M0.cdr,ls3526);var if_res2057 = M0.cons(M0.apply(f3523,map2(M0.car,ls3526)),loop3525(next_ls3527));}return if_res2057;};return loop3525(ls3524);};var gen_for_each = function(f3528, ls3529) {if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference"))!==false) {var if_res2058 = true;} else {var if_res2058 = check_args($rjs_core.PrimitiveSymbol.make("for-each"),f3528,ls3529);}if_res2058;var loop3530 = function(ls3531) {if (M0.null_p(M0.car(ls3531))!==false) {var if_res2059 = M0.rvoid();} else {var next_ls3532 = map2(M0.cdr,ls3531);M0.apply(f3528,map2(M0.car,ls3531));var if_res2059 = loop3530(next_ls3532);}return if_res2059;};return loop3530(ls3529);};var gen_andmap = function(f3533, ls3534) {if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference"))!==false) {var if_res2060 = true;} else {var if_res2060 = check_args($rjs_core.PrimitiveSymbol.make("andmap"),f3533,ls3534);}if_res2060;var loop3535 = function(ls3536) {if (M0.null_p(M0.car(ls3536))!==false) {var if_res2063 = true;} else {if (M0.null_p(M0.cdar(ls3536))!==false) {var if_res2062 = M0.apply(f3533,map2(M0.car,ls3536));} else {var next_ls3537 = map2(M0.cdr,ls3536);if (M0.apply(f3533,map2(M0.car,ls3536))!==false) {var if_res2061 = loop3535(next_ls3537);} else {var if_res2061 = false;}var if_res2062 = if_res2061;}var if_res2063 = if_res2062;}return if_res2063;};return loop3535(ls3534);};var gen_ormap = function(f3538, ls3539) {if (M0.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference"))!==false) {var if_res2064 = true;} else {var if_res2064 = check_args($rjs_core.PrimitiveSymbol.make("ormap"),f3538,ls3539);}if_res2064;var loop3540 = function(ls3541) {if (M0.null_p(M0.car(ls3541))!==false) {var if_res2067 = false;} else {if (M0.null_p(M0.cdar(ls3541))!==false) {var if_res2066 = M0.apply(f3538,map2(M0.car,ls3541));} else {var next_ls3542 = map2(M0.cdr,ls3541);var or_part3543 = M0.apply(f3538,map2(M0.car,ls3541));if (or_part3543!==false) {var if_res2065 = or_part3543;} else {var if_res2065 = loop3540(next_ls3542);}var if_res2066 = if_res2065;}var if_res2067 = if_res2066;}return if_res2067;};return loop3540(ls3539);};M0.rvoid();var __rjs_quoted__ = {};export { __rjs_quoted__,ormap2 as ormap,andmap2 as andmap,for_each2 as for_each,map2 as map };