import * as $rjs_core from '../../runtime/core.js';
import * as M0 from "./private/pre-base.rkt.js";
import * as M1 from "./private/reverse.rkt.js";
import * as M2 from "./private/map.rkt.js";
import * as M3 from "./private/qq-and-or.rkt.js";
import * as M4 from "../../runtime/kernel.rkt.js";
import * as M5 from "./private/more-scheme.rkt.js";
import * as M6 from "./private/member.rkt.js";
import * as M7 from "./private/for.rkt.js";
import * as M8 from "./private/list.rkt.js";
import * as M9 from "./private/kw.rkt.js";
import * as M10 from "../../runtime/unsafe.rkt.js";
var first = function(x2284) {
    if (M4.pair_p(x2284) !== false) {
        var if_res3445 = M4.list_p(x2284);
    } else {
        var if_res3445 = false;
    }
    if (if_res3445 !== false) {
        return M4.car(x2284);
    } else {
        return M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("first"), $rjs_core.UString.make("(and/c list? (not/c empty?))"), x2284);
    }
};
var second = function(l02285) {
    if (M4.list_p(l02285) !== false) {
        var loop2286 = function(_l22874013, _pos22884014) {
            lambda_start4012: while (true) {
                let l2287 = _l22874013;
                let pos2288 = _pos22884014;
                if (M4.pair_p(l2287) !== false) {
                    if (M4.eq_p(pos2288, 1) !== false) {
                        return M4.car(l2287);
                    } else {
                        _l22874013 = M4.cdr(l2287);
                        _pos22884014 = M4.sub1(pos2288);
                        continue lambda_start4012;
                    }
                } else {
                    return M4.raise_arguments_error($rjs_core.PrimitiveSymbol.make("second"), $rjs_core.UString.make("list contains too few elements"), $rjs_core.UString.make("list"), l02285);
                }
            }
        };
        return loop2286(l02285, 2);
    } else {
        return M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("second"), $rjs_core.UString.make("list?"), l02285);
    }
};
var third = function(l02289) {
    if (M4.list_p(l02289) !== false) {
        var loop2290 = function(_l22914017, _pos22924018) {
            lambda_start4016: while (true) {
                let l2291 = _l22914017;
                let pos2292 = _pos22924018;
                if (M4.pair_p(l2291) !== false) {
                    if (M4.eq_p(pos2292, 1) !== false) {
                        return M4.car(l2291);
                    } else {
                        _l22914017 = M4.cdr(l2291);
                        _pos22924018 = M4.sub1(pos2292);
                        continue lambda_start4016;
                    }
                } else {
                    return M4.raise_arguments_error($rjs_core.PrimitiveSymbol.make("third"), $rjs_core.UString.make("list contains too few elements"), $rjs_core.UString.make("list"), l02289);
                }
            }
        };
        return loop2290(l02289, 3);
    } else {
        return M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("third"), $rjs_core.UString.make("list?"), l02289);
    }
};
var fourth = function(l02293) {
    if (M4.list_p(l02293) !== false) {
        var loop2294 = function(_l22954021, _pos22964022) {
            lambda_start4020: while (true) {
                let l2295 = _l22954021;
                let pos2296 = _pos22964022;
                if (M4.pair_p(l2295) !== false) {
                    if (M4.eq_p(pos2296, 1) !== false) {
                        return M4.car(l2295);
                    } else {
                        _l22954021 = M4.cdr(l2295);
                        _pos22964022 = M4.sub1(pos2296);
                        continue lambda_start4020;
                    }
                } else {
                    return M4.raise_arguments_error($rjs_core.PrimitiveSymbol.make("fourth"), $rjs_core.UString.make("list contains too few elements"), $rjs_core.UString.make("list"), l02293);
                }
            }
        };
        return loop2294(l02293, 4);
    } else {
        return M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("fourth"), $rjs_core.UString.make("list?"), l02293);
    }
};
var fifth = function(l02297) {
    if (M4.list_p(l02297) !== false) {
        var loop2298 = function(_l22994025, _pos23004026) {
            lambda_start4024: while (true) {
                let l2299 = _l22994025;
                let pos2300 = _pos23004026;
                if (M4.pair_p(l2299) !== false) {
                    if (M4.eq_p(pos2300, 1) !== false) {
                        return M4.car(l2299);
                    } else {
                        _l22994025 = M4.cdr(l2299);
                        _pos23004026 = M4.sub1(pos2300);
                        continue lambda_start4024;
                    }
                } else {
                    return M4.raise_arguments_error($rjs_core.PrimitiveSymbol.make("fifth"), $rjs_core.UString.make("list contains too few elements"), $rjs_core.UString.make("list"), l02297);
                }
            }
        };
        return loop2298(l02297, 5);
    } else {
        return M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("fifth"), $rjs_core.UString.make("list?"), l02297);
    }
};
var sixth = function(l02301) {
    if (M4.list_p(l02301) !== false) {
        var loop2302 = function(_l23034029, _pos23044030) {
            lambda_start4028: while (true) {
                let l2303 = _l23034029;
                let pos2304 = _pos23044030;
                if (M4.pair_p(l2303) !== false) {
                    if (M4.eq_p(pos2304, 1) !== false) {
                        return M4.car(l2303);
                    } else {
                        _l23034029 = M4.cdr(l2303);
                        _pos23044030 = M4.sub1(pos2304);
                        continue lambda_start4028;
                    }
                } else {
                    return M4.raise_arguments_error($rjs_core.PrimitiveSymbol.make("sixth"), $rjs_core.UString.make("list contains too few elements"), $rjs_core.UString.make("list"), l02301);
                }
            }
        };
        return loop2302(l02301, 6);
    } else {
        return M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("sixth"), $rjs_core.UString.make("list?"), l02301);
    }
};
var seventh = function(l02305) {
    if (M4.list_p(l02305) !== false) {
        var loop2306 = function(_l23074033, _pos23084034) {
            lambda_start4032: while (true) {
                let l2307 = _l23074033;
                let pos2308 = _pos23084034;
                if (M4.pair_p(l2307) !== false) {
                    if (M4.eq_p(pos2308, 1) !== false) {
                        return M4.car(l2307);
                    } else {
                        _l23074033 = M4.cdr(l2307);
                        _pos23084034 = M4.sub1(pos2308);
                        continue lambda_start4032;
                    }
                } else {
                    return M4.raise_arguments_error($rjs_core.PrimitiveSymbol.make("seventh"), $rjs_core.UString.make("list contains too few elements"), $rjs_core.UString.make("list"), l02305);
                }
            }
        };
        return loop2306(l02305, 7);
    } else {
        return M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("seventh"), $rjs_core.UString.make("list?"), l02305);
    }
};
var eighth = function(l02309) {
    if (M4.list_p(l02309) !== false) {
        var loop2310 = function(_l23114037, _pos23124038) {
            lambda_start4036: while (true) {
                let l2311 = _l23114037;
                let pos2312 = _pos23124038;
                if (M4.pair_p(l2311) !== false) {
                    if (M4.eq_p(pos2312, 1) !== false) {
                        return M4.car(l2311);
                    } else {
                        _l23114037 = M4.cdr(l2311);
                        _pos23124038 = M4.sub1(pos2312);
                        continue lambda_start4036;
                    }
                } else {
                    return M4.raise_arguments_error($rjs_core.PrimitiveSymbol.make("eighth"), $rjs_core.UString.make("list contains too few elements"), $rjs_core.UString.make("list"), l02309);
                }
            }
        };
        return loop2310(l02309, 8);
    } else {
        return M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("eighth"), $rjs_core.UString.make("list?"), l02309);
    }
};
var ninth = function(l02313) {
    if (M4.list_p(l02313) !== false) {
        var loop2314 = function(_l23154041, _pos23164042) {
            lambda_start4040: while (true) {
                let l2315 = _l23154041;
                let pos2316 = _pos23164042;
                if (M4.pair_p(l2315) !== false) {
                    if (M4.eq_p(pos2316, 1) !== false) {
                        return M4.car(l2315);
                    } else {
                        _l23154041 = M4.cdr(l2315);
                        _pos23164042 = M4.sub1(pos2316);
                        continue lambda_start4040;
                    }
                } else {
                    return M4.raise_arguments_error($rjs_core.PrimitiveSymbol.make("ninth"), $rjs_core.UString.make("list contains too few elements"), $rjs_core.UString.make("list"), l02313);
                }
            }
        };
        return loop2314(l02313, 9);
    } else {
        return M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("ninth"), $rjs_core.UString.make("list?"), l02313);
    }
};
var tenth = function(l02317) {
    if (M4.list_p(l02317) !== false) {
        var loop2318 = function(_l23194045, _pos23204046) {
            lambda_start4044: while (true) {
                let l2319 = _l23194045;
                let pos2320 = _pos23204046;
                if (M4.pair_p(l2319) !== false) {
                    if (M4.eq_p(pos2320, 1) !== false) {
                        return M4.car(l2319);
                    } else {
                        _l23194045 = M4.cdr(l2319);
                        _pos23204046 = M4.sub1(pos2320);
                        continue lambda_start4044;
                    }
                } else {
                    return M4.raise_arguments_error($rjs_core.PrimitiveSymbol.make("tenth"), $rjs_core.UString.make("list contains too few elements"), $rjs_core.UString.make("list"), l02317);
                }
            }
        };
        return loop2318(l02317, 10);
    } else {
        return M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("tenth"), $rjs_core.UString.make("list?"), l02317);
    }
};
var last_pair = function(l2321) {
    if (M4.pair_p(l2321) !== false) {
        var loop2322 = function(_l23234049, _x23244050) {
            lambda_start4048: while (true) {
                let l2323 = _l23234049;
                let x2324 = _x23244050;
                if (M4.pair_p(x2324) !== false) {
                    _l23234049 = x2324;
                    _x23244050 = M4.cdr(x2324);
                    continue lambda_start4048;
                } else {
                    return l2323;
                }
            }
        };
        return loop2322(l2321, M4.cdr(l2321));
    } else {
        return M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("last-pair"), $rjs_core.UString.make("pair?"), l2321);
    }
};
var last = function(l2325) {
    if (M4.pair_p(l2325) !== false) {
        var if_res3476 = M4.list_p(l2325);
    } else {
        var if_res3476 = false;
    }
    if (if_res3476 !== false) {
        var loop2326 = function(_l23274053, _x23284054) {
            lambda_start4052: while (true) {
                let l2327 = _l23274053;
                let x2328 = _x23284054;
                if (M4.pair_p(x2328) !== false) {
                    _l23274053 = x2328;
                    _x23284054 = M4.cdr(x2328);
                    continue lambda_start4052;
                } else {
                    return M4.car(l2327);
                }
            }
        };
        return loop2326(l2325, M4.cdr(l2325));
    } else {
        return M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("last"), $rjs_core.UString.make("(and/c list? (not/c empty?))"), l2325);
    }
};
var rest = function(l2329) {
    if (M4.pair_p(l2329) !== false) {
        var if_res3479 = M4.list_p(l2329);
    } else {
        var if_res3479 = false;
    }
    if (if_res3479 !== false) {
        return M4.cdr(l2329);
    } else {
        return M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("rest"), $rjs_core.UString.make("(and/c list? (not/c empty?))"), l2329);
    }
};
var empty = $rjs_core.Pair.makeList();
var make_list = function(n2330, x2331) {
    if (M4.exact_nonnegative_integer_p(n2330) !== false) {
        var if_res3481 = M4.rvoid();
    } else {
        var if_res3481 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("make-list"), $rjs_core.UString.make("exact-nonnegative-integer?"), 0, n2330, x2331);
    }
    if_res3481;
    var loop2332 = function(_n23334058, _r23344059) {
        lambda_start4057: while (true) {
            let n2333 = _n23334058;
            let r2334 = _r23344059;
            if (M4.zero_p(n2333) !== false) {
                return r2334;
            } else {
                _n23334058 = M4.sub1(n2333);
                _r23344059 = M4.cons(x2331, r2334);
                continue lambda_start4057;
            }
        }
    };
    return loop2332(n2330, $rjs_core.Pair.makeList());
};
var list_update = function(l2335, i2336, f2337) {
    if (M4.list_p(l2335) !== false) {
        var if_res3483 = M4.rvoid();
    } else {
        var if_res3483 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("list-update"), $rjs_core.UString.make("list?"), 0, l2335, i2336, f2337);
    }
    if_res3483;
    if (M4.exact_nonnegative_integer_p(i2336) !== false) {
        var if_res3484 = M4.rvoid();
    } else {
        var if_res3484 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("list-update"), $rjs_core.UString.make("exact-nonnegative-integer?"), 1, l2335, i2336, f2337);
    }
    if_res3484;
    if (M4.procedure_p(f2337) !== false) {
        var if_res3485 = M4.procedure_arity_includes_p(f2337, 1);
    } else {
        var if_res3485 = false;
    }
    if (if_res3485 !== false) {
        var if_res3486 = M4.rvoid();
    } else {
        var if_res3486 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("list-update"), $rjs_core.UString.make("(-> any/c any/c)"), 2, l2335, i2336, f2337);
    }
    if_res3486;
    if (M4.zero_p(i2336) !== false) {
        return M4.cons(f2337(M4.car(l2335)), M4.cdr(l2335));
    } else {
        return M4.cons(M4.car(l2335), list_update(M4.cdr(l2335), M4.sub1(i2336), f2337));
    }
};
var list_set = function(l2338, k2339, v2340) {
    if (M4.list_p(l2338) !== false) {
        var if_res3488 = M4.rvoid();
    } else {
        var if_res3488 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("list-set"), $rjs_core.UString.make("list?"), 0, l2338, k2339, v2340);
    }
    if_res3488;
    if (M4.exact_nonnegative_integer_p(k2339) !== false) {
        var if_res3489 = M4.rvoid();
    } else {
        var if_res3489 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("list-set"), $rjs_core.UString.make("exact-nonnegative-integer?"), 1, l2338, k2339, v2340);
    }
    if_res3489;
    return list_update(l2338, k2339, function(_2341) {
        return v2340;
    });
};
var drop_times_ = function(_list23424064, _n23434065) {
    lambda_start4063: while (true) {
        let list2342 = _list23424064;
        let n2343 = _n23434065;
        if (M4.zero_p(n2343) !== false) {
            return list2342;
        } else {
            if (M4.pair_p(list2342) !== false) {
                _list23424064 = M4.cdr(list2342);
                _n23434065 = M4.sub1(n2343);
                continue lambda_start4063;
            } else {
                return false;
            }
        }
    }
};
var too_large = function(who2344, list2345, n2346) {
    var proper_p2347 = M4.list_p(list2345);
    var temp3494 = $rjs_core.UString.make("a ~alist with at least ~a ~a");
    if (proper_p2347 !== false) {
        var if_res3493 = $rjs_core.UString.make("");
    } else {
        var if_res3493 = $rjs_core.UString.make("(possibly improper) ");
    }
    if (proper_p2347 !== false) {
        var if_res3492 = $rjs_core.UString.make("elements");
    } else {
        var if_res3492 = $rjs_core.UString.make("pairs");
    }
    return M4.raise_argument_error(who2344, M4.format(temp3494, if_res3493, n2346, if_res3492), list2345);
};
var take = function(list02348, n02349) {
    if (M4.exact_nonnegative_integer_p(n02349) !== false) {
        var if_res3495 = M4.rvoid();
    } else {
        var if_res3495 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("take"), $rjs_core.UString.make("exact-nonnegative-integer?"), 1, list02348, n02349);
    }
    if_res3495;
    var loop2350 = function(list2351, n2352) {
        if (M4.zero_p(n2352) !== false) {
            return $rjs_core.Pair.makeList();
        } else {
            if (M4.pair_p(list2351) !== false) {
                return M4.cons(M4.car(list2351), loop2350(M4.cdr(list2351), M4.sub1(n2352)));
            } else {
                return too_large($rjs_core.PrimitiveSymbol.make("take"), list02348, n02349);
            }
        }
    };
    return loop2350(list02348, n02349);
};
var drop = function(list2353, n2354) {
    if (M4.exact_nonnegative_integer_p(n2354) !== false) {
        var if_res3498 = M4.rvoid();
    } else {
        var if_res3498 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("drop"), $rjs_core.UString.make("exact-nonnegative-integer?"), 1, list2353, n2354);
    }
    if_res3498;
    var or_part2355 = drop_times_(list2353, n2354);
    if (or_part2355 !== false) {
        return or_part2355;
    } else {
        return too_large($rjs_core.PrimitiveSymbol.make("drop"), list2353, n2354);
    }
};
var split_at = function(list02356, n02357) {
    if (M4.exact_nonnegative_integer_p(n02357) !== false) {
        var if_res3500 = M4.rvoid();
    } else {
        var if_res3500 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("split-at"), $rjs_core.UString.make("exact-nonnegative-integer?"), 1, list02356, n02357);
    }
    if_res3500;
    var loop2358 = function(_list23594072, _n23604073, _pfx23614074) {
        lambda_start4071: while (true) {
            let list2359 = _list23594072;
            let n2360 = _n23604073;
            let pfx2361 = _pfx23614074;
            if (M4.zero_p(n2360) !== false) {
                return M4.values(M1.alt_reverse(pfx2361), list2359);
            } else {
                if (M4.pair_p(list2359) !== false) {
                    _list23594072 = M4.cdr(list2359);
                    _n23604073 = M4.sub1(n2360);
                    _pfx23614074 = M4.cons(M4.car(list2359), pfx2361);
                    continue lambda_start4071;
                } else {
                    return too_large($rjs_core.PrimitiveSymbol.make("split-at"), list02356, n02357);
                }
            }
        }
    };
    return loop2358(list02356, n02357, $rjs_core.Pair.makeList());
};
var takef = function(list2362, pred2363) {
    if (M4.procedure_p(pred2363) !== false) {
        var if_res3503 = M4.rvoid();
    } else {
        var if_res3503 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("takef"), $rjs_core.UString.make("procedure?"), 1, list2362, pred2363);
    }
    if_res3503;
    var loop2364 = function(list2365) {
        if (M4.pair_p(list2365) !== false) {
            var x2366 = M4.car(list2365);
            if (pred2363(x2366) !== false) {
                return M4.cons(x2366, loop2364(M4.cdr(list2365)));
            } else {
                return $rjs_core.Pair.makeList();
            }
        } else {
            return $rjs_core.Pair.makeList();
        }
    };
    return loop2364(list2362);
};
var dropf = function(list2367, pred2368) {
    if (M4.procedure_p(pred2368) !== false) {
        var if_res3506 = M4.rvoid();
    } else {
        var if_res3506 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("dropf"), $rjs_core.UString.make("procedure?"), 1, list2367, pred2368);
    }
    if_res3506;
    var loop2369 = function(_list23704079) {
        lambda_start4078: while (true) {
            let list2370 = _list23704079;
            if (M4.pair_p(list2370) !== false) {
                var if_res3507 = pred2368(M4.car(list2370));
            } else {
                var if_res3507 = false;
            }
            if (if_res3507 !== false) {
                _list23704079 = M4.cdr(list2370);
                continue lambda_start4078;
            } else {
                return list2370;
            }
        }
    };
    return loop2369(list2367);
};
var splitf_at = function(list2371, pred2372) {
    if (M4.procedure_p(pred2372) !== false) {
        var if_res3509 = M4.rvoid();
    } else {
        var if_res3509 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("splitf-at"), $rjs_core.UString.make("procedure?"), 1, list2371, pred2372);
    }
    if_res3509;
    var loop2373 = function(_list23744082, _pfx23754083) {
        lambda_start4081: while (true) {
            let list2374 = _list23744082;
            let pfx2375 = _pfx23754083;
            if (M4.pair_p(list2374) !== false) {
                var if_res3510 = pred2372(M4.car(list2374));
            } else {
                var if_res3510 = false;
            }
            if (if_res3510 !== false) {
                _list23744082 = M4.cdr(list2374);
                _pfx23754083 = M4.cons(M4.car(list2374), pfx2375);
                continue lambda_start4081;
            } else {
                return M4.values(M1.alt_reverse(pfx2375), list2374);
            }
        }
    };
    return loop2373(list2371, $rjs_core.Pair.makeList());
};
var take_right = function(list2376, n2377) {
    if (M4.exact_nonnegative_integer_p(n2377) !== false) {
        var if_res3512 = M4.rvoid();
    } else {
        var if_res3512 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("take-right"), $rjs_core.UString.make("exact-nonnegative-integer?"), 1, list2376, n2377);
    }
    if_res3512;
    var loop2378 = function(_list23794086, _lead23804087) {
        lambda_start4085: while (true) {
            let list2379 = _list23794086;
            let lead2380 = _lead23804087;
            if (M4.pair_p(lead2380) !== false) {
                _list23794086 = M4.cdr(list2379);
                _lead23804087 = M4.cdr(lead2380);
                continue lambda_start4085;
            } else {
                return list2379;
            }
        }
    };
    var or_part2381 = drop_times_(list2376, n2377);
    if (or_part2381 !== false) {
        var if_res3513 = or_part2381;
    } else {
        var if_res3513 = too_large($rjs_core.PrimitiveSymbol.make("take-right"), list2376, n2377);
    }
    return loop2378(list2376, if_res3513);
};
var drop_right = function(list2382, n2383) {
    if (M4.exact_nonnegative_integer_p(n2383) !== false) {
        var if_res3515 = M4.rvoid();
    } else {
        var if_res3515 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("drop-right"), $rjs_core.UString.make("exact-nonnegative-integer?"), 1, list2382, n2383);
    }
    if_res3515;
    var loop2384 = function(list2385, lead2386) {
        if (M4.pair_p(lead2386) !== false) {
            return M4.cons(M4.car(list2385), loop2384(M4.cdr(list2385), M4.cdr(lead2386)));
        } else {
            return $rjs_core.Pair.makeList();
        }
    };
    var or_part2387 = drop_times_(list2382, n2383);
    if (or_part2387 !== false) {
        var if_res3516 = or_part2387;
    } else {
        var if_res3516 = too_large($rjs_core.PrimitiveSymbol.make("drop-right"), list2382, n2383);
    }
    return loop2384(list2382, if_res3516);
};
var split_at_right = function(list2388, n2389) {
    if (M4.exact_nonnegative_integer_p(n2389) !== false) {
        var if_res3518 = M4.rvoid();
    } else {
        var if_res3518 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("split-at-right"), $rjs_core.UString.make("exact-nonnegative-integer?"), 1, list2388, n2389);
    }
    if_res3518;
    var loop2390 = function(_list23914092, _lead23924093, _pfx23934094) {
        lambda_start4091: while (true) {
            let list2391 = _list23914092;
            let lead2392 = _lead23924093;
            let pfx2393 = _pfx23934094;
            if (M4.pair_p(lead2392) !== false) {
                _list23914092 = M4.cdr(list2391);
                _lead23924093 = M4.cdr(lead2392);
                _pfx23934094 = M4.cons(M4.car(list2391), pfx2393);
                continue lambda_start4091;
            } else {
                return M4.values(M1.alt_reverse(pfx2393), list2391);
            }
        }
    };
    var or_part2394 = drop_times_(list2388, n2389);
    if (or_part2394 !== false) {
        var if_res3519 = or_part2394;
    } else {
        var if_res3519 = too_large($rjs_core.PrimitiveSymbol.make("split-at-right"), list2388, n2389);
    }
    return loop2390(list2388, if_res3519, $rjs_core.Pair.makeList());
};
var count_from_right = function(who2395, list2396, pred2397) {
    if (M4.procedure_p(pred2397) !== false) {
        var if_res3521 = M4.rvoid();
    } else {
        var if_res3521 = M4.raise_argument_error(who2395, $rjs_core.UString.make("procedure?"), 1, list2396, pred2397);
    }
    if_res3521;
    var loop2398 = function(_list23994097, _rev24004098, _n24014099) {
        lambda_start4096: while (true) {
            let list2399 = _list23994097;
            let rev2400 = _rev24004098;
            let n2401 = _n24014099;
            if (M4.pair_p(list2399) !== false) {
                _list23994097 = M4.cdr(list2399);
                _rev24004098 = M4.cons(M4.car(list2399), rev2400);
                _n24014099 = M4.add1(n2401);
                continue lambda_start4096;
            } else {
                var loop2402 = function(_n24034101, _list24044102) {
                    lambda_start4100: while (true) {
                        let n2403 = _n24034101;
                        let list2404 = _list24044102;
                        if (M4.pair_p(list2404) !== false) {
                            var if_res3522 = pred2397(M4.car(list2404));
                        } else {
                            var if_res3522 = false;
                        }
                        if (if_res3522 !== false) {
                            _n24034101 = M4.sub1(n2403);
                            _list24044102 = M4.cdr(list2404);
                            continue lambda_start4100;
                        } else {
                            return n2403;
                        }
                    }
                };
                return loop2402(n2401, rev2400);
            }
        }
    };
    return loop2398(list2396, $rjs_core.Pair.makeList(), 0);
};
var takef_right = function(list2405, pred2406) {
    return drop(list2405, count_from_right($rjs_core.PrimitiveSymbol.make("takef-right"), list2405, pred2406));
};
var dropf_right = function(list2407, pred2408) {
    return take(list2407, count_from_right($rjs_core.PrimitiveSymbol.make("dropf-right"), list2407, pred2408));
};
var splitf_at_right = function(list2409, pred2410) {
    return split_at(list2409, count_from_right($rjs_core.PrimitiveSymbol.make("splitf-at-right"), list2409, pred2410));
};
var list_prefix_p2411 = function(ls22412, rs32413, same_p12414) {
    var ls2415 = ls22412;
    var rs2416 = rs32413;
    if (M4.eq_p(same_p12414, M10.unsafe_undefined) !== false) {
        var if_res3525 = M4.equal_p;
    } else {
        var if_res3525 = same_p12414;
    }
    var same_p2417 = if_res3525;
    if (M4.list_p(ls2415) !== false) {
        var if_res3526 = M4.rvoid();
    } else {
        var if_res3526 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("list-prefix?"), $rjs_core.UString.make("list?"), 0, ls2415, rs2416);
    }
    if_res3526;
    if (M4.list_p(rs2416) !== false) {
        var if_res3527 = M4.rvoid();
    } else {
        var if_res3527 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("list-prefix?"), $rjs_core.UString.make("list?"), 1, ls2415, rs2416);
    }
    if_res3527;
    if (M4.procedure_p(same_p2417) !== false) {
        var if_res3528 = M4.procedure_arity_includes_p(same_p2417, 2);
    } else {
        var if_res3528 = false;
    }
    if (if_res3528 !== false) {
        var if_res3529 = M4.rvoid();
    } else {
        var if_res3529 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("list-prefix?"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), 2, ls2415, rs2416, same_p2417);
    }
    if_res3529;
    var or_part2418 = M4.null_p(ls2415);
    if (or_part2418 !== false) {
        return or_part2418;
    } else {
        if (M4.pair_p(rs2416) !== false) {
            if (same_p2417(M4.car(ls2415), M4.car(rs2416)) !== false) {
                return list_prefix_p(M4.cdr(ls2415), M4.cdr(rs2416));
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
};
var cl3533 = function(ls2419, rs2420) {
    return list_prefix_p2411(ls2419, rs2420, M10.unsafe_undefined);
};
var cl3534 = function(ls2421, rs2422, same_p12423) {
    return list_prefix_p2411(ls2421, rs2422, same_p12423);
};
var list_prefix_p = $rjs_core.attachProcedureArity(function() {
    var fixed_lam3535 = {
        '2': cl3533,
        '3': cl3534
    } [arguments.length];
    if (fixed_lam3535 !== undefined) {
        return fixed_lam3535.apply(null, arguments);
    } else {
        return M4.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var internal_split_common_prefix = function(as2424, bs2425, same_p2426, keep_prefix_p2427, name2428) {
    if (M4.list_p(as2424) !== false) {
        var if_res3536 = M4.rvoid();
    } else {
        var if_res3536 = M4.raise_argument_error(name2428, $rjs_core.UString.make("list?"), 0, as2424, bs2425);
    }
    if_res3536;
    if (M4.list_p(bs2425) !== false) {
        var if_res3537 = M4.rvoid();
    } else {
        var if_res3537 = M4.raise_argument_error(name2428, $rjs_core.UString.make("list?"), 1, as2424, bs2425);
    }
    if_res3537;
    if (M4.procedure_p(same_p2426) !== false) {
        var if_res3538 = M4.procedure_arity_includes_p(same_p2426, 2);
    } else {
        var if_res3538 = false;
    }
    if (if_res3538 !== false) {
        var if_res3539 = M4.rvoid();
    } else {
        var if_res3539 = M4.raise_argument_error(name2428, $rjs_core.UString.make("(any/c any/c . -> . any/c)"), 2, as2424, bs2425, same_p2426);
    }
    if_res3539;
    var loop2429 = function(as2430, bs2431) {
        if (M4.pair_p(as2430) !== false) {
            if (M4.pair_p(bs2431) !== false) {
                var if_res3540 = same_p2426(M4.car(as2430), M4.car(bs2431));
            } else {
                var if_res3540 = false;
            }
            var if_res3541 = if_res3540;
        } else {
            var if_res3541 = false;
        }
        if (if_res3541 !== false) {
            var let_result3542 = loop2429(M4.cdr(as2430), M4.cdr(bs2431));
            var prefix2432 = let_result3542.getAt(0);
            var atail2433 = let_result3542.getAt(1);
            var btail2434 = let_result3542.getAt(2);
            if (keep_prefix_p2427 !== false) {
                var if_res3543 = M4.cons(M4.car(as2430), prefix2432);
            } else {
                var if_res3543 = false;
            }
            return M4.values(if_res3543, atail2433, btail2434);
        } else {
            return M4.values(M4.rnull, as2430, bs2431);
        }
    };
    return loop2429(as2424, bs2425);
};
var split_common_prefix2435 = function(as52436, bs62437, same_p42438) {
    var as2439 = as52436;
    var bs2440 = bs62437;
    if (M4.eq_p(same_p42438, M10.unsafe_undefined) !== false) {
        var if_res3545 = M4.equal_p;
    } else {
        var if_res3545 = same_p42438;
    }
    var same_p2441 = if_res3545;
    return internal_split_common_prefix(as2439, bs2440, same_p2441, true, $rjs_core.PrimitiveSymbol.make("split-common-prefix"));
};
var cl3546 = function(as2442, bs2443) {
    return split_common_prefix2435(as2442, bs2443, M10.unsafe_undefined);
};
var cl3547 = function(as2444, bs2445, same_p42446) {
    return split_common_prefix2435(as2444, bs2445, same_p42446);
};
var split_common_prefix = $rjs_core.attachProcedureArity(function() {
    var fixed_lam3548 = {
        '2': cl3546,
        '3': cl3547
    } [arguments.length];
    if (fixed_lam3548 !== undefined) {
        return fixed_lam3548.apply(null, arguments);
    } else {
        return M4.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var take_common_prefix2447 = function(as82448, bs92449, same_p72450) {
    var as2451 = as82448;
    var bs2452 = bs92449;
    if (M4.eq_p(same_p72450, M10.unsafe_undefined) !== false) {
        var if_res3549 = M4.equal_p;
    } else {
        var if_res3549 = same_p72450;
    }
    var same_p2453 = if_res3549;
    var let_result3550 = internal_split_common_prefix(as2451, bs2452, same_p2453, true, $rjs_core.PrimitiveSymbol.make("take-common-prefix"));
    var prefix2454 = let_result3550.getAt(0);
    var atail2455 = let_result3550.getAt(1);
    var btail2456 = let_result3550.getAt(2);
    return prefix2454;
};
var cl3551 = function(as2457, bs2458) {
    return take_common_prefix2447(as2457, bs2458, M10.unsafe_undefined);
};
var cl3552 = function(as2459, bs2460, same_p72461) {
    return take_common_prefix2447(as2459, bs2460, same_p72461);
};
var take_common_prefix = $rjs_core.attachProcedureArity(function() {
    var fixed_lam3553 = {
        '2': cl3551,
        '3': cl3552
    } [arguments.length];
    if (fixed_lam3553 !== undefined) {
        return fixed_lam3553.apply(null, arguments);
    } else {
        return M4.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var drop_common_prefix2462 = function(as112463, bs122464, same_p102465) {
    var as2466 = as112463;
    var bs2467 = bs122464;
    if (M4.eq_p(same_p102465, M10.unsafe_undefined) !== false) {
        var if_res3554 = M4.equal_p;
    } else {
        var if_res3554 = same_p102465;
    }
    var same_p2468 = if_res3554;
    var let_result3555 = internal_split_common_prefix(as2466, bs2467, same_p2468, false, $rjs_core.PrimitiveSymbol.make("drop-common-prefix"));
    var prefix2469 = let_result3555.getAt(0);
    var atail2470 = let_result3555.getAt(1);
    var btail2471 = let_result3555.getAt(2);
    return M4.values(atail2470, btail2471);
};
var cl3556 = function(as2472, bs2473) {
    return drop_common_prefix2462(as2472, bs2473, M10.unsafe_undefined);
};
var cl3557 = function(as2474, bs2475, same_p102476) {
    return drop_common_prefix2462(as2474, bs2475, same_p102476);
};
var drop_common_prefix = $rjs_core.attachProcedureArity(function() {
    var fixed_lam3558 = {
        '2': cl3556,
        '3': cl3557
    } [arguments.length];
    if (fixed_lam3558 !== undefined) {
        return fixed_lam3558.apply(null, arguments);
    } else {
        return M4.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var cl3559 = function(ls2477) {
    return M4.apply(M4.append, ls2477);
};
var cl3560 = function(l12478, l22479) {
    return M4.apply(M4.append, l12478, l22479);
};
var cl3561 = function(l12480, l22481, l32482) {
    return M4.apply(M4.append, l12480, l22481, l32482);
};
var cl3562 = function(l12483, l22484, l32485, l42486) {
    return M4.apply(M4.append, l12483, l22484, l32485, l42486);
};
var cl3563 = $rjs_core.attachProcedureArity(function(l2487, ...lss24883566) {
    var lss2488 = $rjs_core.Pair.listFromArray(lss24883566);
    return M4.apply(M0.new_apply_proc, M4.append, l2487, lss2488);
});
var append_times_ = $rjs_core.attachProcedureArity(function() {
    var fixed_lam3564 = {
        '1': cl3559,
        '2': cl3560,
        '3': cl3561,
        '4': cl3562
    } [arguments.length];
    if (fixed_lam3564 !== undefined) {
        return fixed_lam3564.apply(null, arguments);
    } else {
        if (M4.__gt__eq_(cl3563.length, 1) !== false) {
            return cl3563.apply(null, arguments);
        } else {
            return M4.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
    }
}, [M4.make_arity_at_least(1)]);
var flatten = function(orig_sexp2489) {
    var loop2490 = function(_sexp24914132, _acc24924133) {
        lambda_start4131: while (true) {
            let sexp2491 = _sexp24914132;
            let acc2492 = _acc24924133;
            if (M4.null_p(sexp2491) !== false) {
                return acc2492;
            } else {
                if (M4.pair_p(sexp2491) !== false) {
                    _sexp24914132 = M4.car(sexp2491);
                    _acc24924133 = loop2490(M4.cdr(sexp2491), acc2492);
                    continue lambda_start4131;
                } else {
                    return M4.cons(sexp2491, acc2492);
                }
            }
        }
    };
    return loop2490(orig_sexp2489, M4.rnull);
};
var add_between = function(after_last162493, before_first142494, before_last152495, splice_p132496, l212497, x222498) {
    var l2499 = l212497;
    var x2500 = x222498;
    if (false !== false) {
        var if_res3569 = false;
    } else {
        var if_res3569 = splice_p132496;
    }
    var splice_p2501 = if_res3569;
    if (false !== false) {
        var if_res3570 = $rjs_core.Pair.makeList();
    } else {
        var if_res3570 = before_first142494;
    }
    var before_first2502 = if_res3570;
    if (M4.eq_p(before_last152495, M10.unsafe_undefined) !== false) {
        var if_res3571 = x2500;
    } else {
        var if_res3571 = before_last152495;
    }
    var before_last2503 = if_res3571;
    if (false !== false) {
        var if_res3572 = $rjs_core.Pair.makeList();
    } else {
        var if_res3572 = after_last162493;
    }
    var after_last2504 = if_res3572;
    if (M4.list_p(l2499) !== false) {
        var if_res3573 = M4.rvoid();
    } else {
        var if_res3573 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("add-between"), $rjs_core.UString.make("list?"), 0, l2499, x2500);
    }
    if_res3573;
    if (splice_p2501 !== false) {
        var check_list2505 = function(x2506, which2507) {
            if (M4.list_p(x2506) !== false) {
                return M4.rvoid();
            } else {
                return M4.raise_arguments_error($rjs_core.PrimitiveSymbol.make("add-between"), M4.string_append($rjs_core.UString.make("list needed in splicing mode"), which2507), $rjs_core.UString.make("given"), x2506, $rjs_core.UString.make("given list..."), l2499);
            }
        };
        check_list2505(x2500, $rjs_core.UString.make(""));
        check_list2505(before_first2502, $rjs_core.UString.make(" for #:before-first"));
        check_list2505(before_last2503, $rjs_core.UString.make(" for #:before-last"));
        var if_res3576 = check_list2505(after_last2504, $rjs_core.UString.make(" for #:after-last"));
    } else {
        var check_not_given2508 = function(x2509, which2510) {
            if (M4.eq_p($rjs_core.Pair.makeList(), x2509) !== false) {
                return M4.rvoid();
            } else {
                return M4.raise_arguments_error($rjs_core.PrimitiveSymbol.make("add-between"), M4.string_append(which2510, $rjs_core.UString.make(" can only be used in splicing mode")), $rjs_core.UString.make("given"), x2509, $rjs_core.UString.make("given list..."), l2499);
            }
        };
        check_not_given2508(before_first2502, $rjs_core.UString.make("#:before-first"));
        var if_res3576 = check_not_given2508(after_last2504, $rjs_core.UString.make("#:after-last"));
    }
    if_res3576;
    var or_part2511 = M4.null_p(l2499);
    if (or_part2511 !== false) {
        var if_res3577 = or_part2511;
    } else {
        var if_res3577 = M4.null_p(M4.cdr(l2499));
    }
    if (if_res3577 !== false) {
        if (splice_p2501 !== false) {
            return M4.append(before_first2502, l2499, after_last2504);
        } else {
            return l2499;
        }
    } else {
        if (splice_p2501 !== false) {
            var x2512 = M1.alt_reverse(x2500);
            var loop2514 = function(_i25154138, _l25164139, _r25174140) {
                lambda_start4137: while (true) {
                    let i2515 = _i25154138;
                    let l2516 = _l25164139;
                    let r2517 = _r25174140;
                    if (M4.pair_p(l2516) !== false) {
                        _i25154138 = M4.car(l2516);
                        _l25164139 = M4.cdr(l2516);
                        _r25174140 = M4.cons(i2515, M4.append(x2512, r2517));
                        continue lambda_start4137;
                    } else {
                        return M4.cons(i2515, M4.append(M1.alt_reverse(before_last2503), r2517));
                    }
                }
            };
            var r2513 = loop2514(M4.cadr(l2499), M4.cddr(l2499), $rjs_core.Pair.makeList());
            var r2518 = M1.alt_reverse(M4.append(M1.alt_reverse(after_last2504), r2513));
            return M3.__rjs_quoted__.qq_append(before_first2502, M4.list_times_(M4.car(l2499), r2518));
        } else {
            var temp3581 = M4.car(l2499);
            var loop2520 = function(_i25214142, _l25224143, _r25234144) {
                lambda_start4141: while (true) {
                    let i2521 = _i25214142;
                    let l2522 = _l25224143;
                    let r2523 = _r25234144;
                    if (M4.pair_p(l2522) !== false) {
                        _i25214142 = M4.car(l2522);
                        _l25224143 = M4.cdr(l2522);
                        _r25234144 = M4.cons(i2521, M4.cons(x2500, r2523));
                        continue lambda_start4141;
                    } else {
                        return M4.cons(i2521, M4.cons(before_last2503, r2523));
                    }
                }
            };
            return M4.cons(temp3581, M1.alt_reverse(loop2520(M4.cadr(l2499), M4.cddr(l2499), $rjs_core.Pair.makeList())));
        }
    }
};
var add_between2281 = function(given_kws2524, given_args2525, l212526, x222527) {
    if (M4.pair_p(given_kws2524) !== false) {
        var if_res3584 = M4.eq_p($rjs_core.Keyword.make("after-last"), M4.car(given_kws2524));
    } else {
        var if_res3584 = false;
    }
    var after_last202528 = if_res3584;
    if (after_last202528 !== false) {
        var if_res3585 = M4.car(given_args2525);
    } else {
        var if_res3585 = $rjs_core.Pair.makeList();
    }
    var after_last162529 = if_res3585;
    if (after_last202528 !== false) {
        var if_res3586 = M4.cdr(given_kws2524);
    } else {
        var if_res3586 = given_kws2524;
    }
    var kws1188502530 = if_res3586;
    if (after_last202528 !== false) {
        var if_res3587 = M4.cdr(given_args2525);
    } else {
        var if_res3587 = given_args2525;
    }
    var kw_args1188512531 = if_res3587;
    if (M4.pair_p(kws1188502530) !== false) {
        var if_res3588 = M4.eq_p($rjs_core.Keyword.make("before-first"), M4.car(kws1188502530));
    } else {
        var if_res3588 = false;
    }
    var before_first182532 = if_res3588;
    if (before_first182532 !== false) {
        var if_res3589 = M4.car(kw_args1188512531);
    } else {
        var if_res3589 = $rjs_core.Pair.makeList();
    }
    var before_first142533 = if_res3589;
    if (before_first182532 !== false) {
        var if_res3590 = M4.cdr(kws1188502530);
    } else {
        var if_res3590 = kws1188502530;
    }
    var kws1188522534 = if_res3590;
    if (before_first182532 !== false) {
        var if_res3591 = M4.cdr(kw_args1188512531);
    } else {
        var if_res3591 = kw_args1188512531;
    }
    var kw_args1188532535 = if_res3591;
    if (M4.pair_p(kws1188522534) !== false) {
        var if_res3592 = M4.eq_p($rjs_core.Keyword.make("before-last"), M4.car(kws1188522534));
    } else {
        var if_res3592 = false;
    }
    var before_last192536 = if_res3592;
    if (before_last192536 !== false) {
        var if_res3593 = M4.car(kw_args1188532535);
    } else {
        var if_res3593 = M10.unsafe_undefined;
    }
    var before_last152537 = if_res3593;
    if (before_last192536 !== false) {
        var if_res3594 = M4.cdr(kws1188522534);
    } else {
        var if_res3594 = kws1188522534;
    }
    var kws1188542538 = if_res3594;
    if (before_last192536 !== false) {
        var if_res3595 = M4.cdr(kw_args1188532535);
    } else {
        var if_res3595 = kw_args1188532535;
    }
    var kw_args1188552539 = if_res3595;
    var splice_p172540 = M4.pair_p(kws1188542538);
    if (splice_p172540 !== false) {
        var if_res3596 = M4.car(kw_args1188552539);
    } else {
        var if_res3596 = false;
    }
    var splice_p132541 = if_res3596;
    return add_between(after_last162529, before_first142533, before_last152537, splice_p132541, l212526, x222527);
};
var cl3600 = function(given_kws2552, given_args2553, l2554, x2555) {
    return add_between2281(given_kws2552, given_args2553, l2554, x2555);
};
var temp3602 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam3601 = {
        '4': cl3600
    } [arguments.length];
    if (fixed_lam3601 !== undefined) {
        return fixed_lam3601.apply(null, arguments);
    } else {
        return M4.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4]);
var temp3599 = $rjs_core.Pair.makeList($rjs_core.Keyword.make("after-last"), $rjs_core.Keyword.make("before-first"), $rjs_core.Keyword.make("before-last"), $rjs_core.Keyword.make("splice?"));
var cl3597 = function(l2556, x2557) {
    return add_between2281(M4.rnull, M4.rnull, l2556, x2557);
};
var add_between23 = M9.__rjs_quoted__.make_optional_keyword_procedure(function(given_kws2542, given_argc2543) {
    if (M4.__eq_(given_argc2543, 4) !== false) {
        var l11188562544 = given_kws2542;
        if (M4.null_p(l11188562544) !== false) {
            var if_res3604 = l11188562544;
        } else {
            if (M4.eq_p(M4.car(l11188562544), $rjs_core.Keyword.make("after-last")) !== false) {
                var if_res3603 = M4.cdr(l11188562544);
            } else {
                var if_res3603 = l11188562544;
            }
            var if_res3604 = if_res3603;
        }
        var l11188562545 = if_res3604;
        var l11188572546 = l11188562545;
        if (M4.null_p(l11188572546) !== false) {
            var if_res3606 = l11188572546;
        } else {
            if (M4.eq_p(M4.car(l11188572546), $rjs_core.Keyword.make("before-first")) !== false) {
                var if_res3605 = M4.cdr(l11188572546);
            } else {
                var if_res3605 = l11188572546;
            }
            var if_res3606 = if_res3605;
        }
        var l11188572547 = if_res3606;
        var l11188582548 = l11188572547;
        if (M4.null_p(l11188582548) !== false) {
            var if_res3608 = l11188582548;
        } else {
            if (M4.eq_p(M4.car(l11188582548), $rjs_core.Keyword.make("before-last")) !== false) {
                var if_res3607 = M4.cdr(l11188582548);
            } else {
                var if_res3607 = l11188582548;
            }
            var if_res3608 = if_res3607;
        }
        var l11188582549 = if_res3608;
        var l11188592550 = l11188582549;
        if (M4.null_p(l11188592550) !== false) {
            var if_res3610 = l11188592550;
        } else {
            if (M4.eq_p(M4.car(l11188592550), $rjs_core.Keyword.make("splice?")) !== false) {
                var if_res3609 = M4.cdr(l11188592550);
            } else {
                var if_res3609 = l11188592550;
            }
            var if_res3610 = if_res3609;
        }
        var l11188592551 = if_res3610;
        return M4.null_p(l11188592551);
    } else {
        return false;
    }
}, temp3602, M4.rnull, temp3599, $rjs_core.attachProcedureArity(function() {
    var fixed_lam3598 = {
        '2': cl3597
    } [arguments.length];
    if (fixed_lam3598 !== undefined) {
        return fixed_lam3598.apply(null, arguments);
    } else {
        return M4.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2]));
var remove_duplicates = function(key242558, l272559, __eq__p262560) {
    var l2561 = l272559;
    if (M4.eq_p(__eq__p262560, M10.unsafe_undefined) !== false) {
        var if_res3612 = M4.equal_p;
    } else {
        var if_res3612 = __eq__p262560;
    }
    var __eq__p2562 = if_res3612;
    if (false !== false) {
        var if_res3613 = false;
    } else {
        var if_res3613 = key242558;
    }
    var key2563 = if_res3613;
    if (M4.list_p(l2561) !== false) {
        var if_res3614 = M4.rvoid();
    } else {
        var if_res3614 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("remove-duplicates"), $rjs_core.UString.make("list?"), l2561);
    }
    if_res3614;
    var len2564 = M4.length(l2561);
    if (M4.__lt__eq_(len2564, 1) !== false) {
        var if_res3618 = true;
    } else {
        if (M4.__lt__eq_(len2564, 40) !== false) {
            var if_res3617 = false;
        } else {
            if (M4.eq_p(__eq__p2562, M4.eq_p) !== false) {
                var if_res3616 = M4.make_hasheq();
            } else {
                if (M4.eq_p(__eq__p2562, M4.equal_p) !== false) {
                    var if_res3615 = M4.make_hash();
                } else {
                    var if_res3615 = false;
                }
                var if_res3616 = if_res3615;
            }
            var if_res3617 = if_res3616;
        }
        var if_res3618 = if_res3617;
    }
    var h2565 = if_res3618;
    var tmp2566 = h2565;
    if (M4.equal_p(tmp2566, true) !== false) {
        return l2561;
    } else {
        if (M4.equal_p(tmp2566, false) !== false) {
            var or_part2568 = key2563;
            if (or_part2568 !== false) {
                var if_res3619 = or_part2568;
            } else {
                var if_res3619 = function(x2569) {
                    return x2569;
                };
            }
            var key2567 = if_res3619;
            if (M4.eq_p(__eq__p2562, M4.equal_p) !== false) {
                var loop2570 = function(_l25714154, _seen25724155) {
                    lambda_start4153: while (true) {
                        let l2571 = _l25714154;
                        let seen2572 = _seen25724155;
                        if (M4.null_p(l2571) !== false) {
                            return l2571;
                        } else {
                            var x2573 = M4.car(l2571);
                            var k2574 = key2567(x2573);
                            var l2575 = M4.cdr(l2571);
                            if (M6.member(k2574, seen2572) !== false) {
                                _l25714154 = l2575;
                                _seen25724155 = seen2572;
                                continue lambda_start4153;
                            } else {
                                return M4.cons(x2573, loop2570(l2575, M4.cons(k2574, seen2572)));
                            }
                        }
                    }
                };
                return loop2570(l2561, M4.rnull);
            } else {
                if (M4.eq_p(__eq__p2562, M4.eq_p) !== false) {
                    var loop2576 = function(_l25774157, _seen25784158) {
                        lambda_start4156: while (true) {
                            let l2577 = _l25774157;
                            let seen2578 = _seen25784158;
                            if (M4.null_p(l2577) !== false) {
                                return l2577;
                            } else {
                                var x2579 = M4.car(l2577);
                                var k2580 = key2567(x2579);
                                var l2581 = M4.cdr(l2577);
                                if (M4.memq(k2580, seen2578) !== false) {
                                    _l25774157 = l2581;
                                    _seen25784158 = seen2578;
                                    continue lambda_start4156;
                                } else {
                                    return M4.cons(x2579, loop2576(l2581, M4.cons(k2580, seen2578)));
                                }
                            }
                        }
                    };
                    return loop2576(l2561, M4.rnull);
                } else {
                    if (M4.eq_p(__eq__p2562, M4.eqv_p) !== false) {
                        var loop2582 = function(_l25834160, _seen25844161) {
                            lambda_start4159: while (true) {
                                let l2583 = _l25834160;
                                let seen2584 = _seen25844161;
                                if (M4.null_p(l2583) !== false) {
                                    return l2583;
                                } else {
                                    var x2585 = M4.car(l2583);
                                    var k2586 = key2567(x2585);
                                    var l2587 = M4.cdr(l2583);
                                    if (M4.memv(k2586, seen2584) !== false) {
                                        _l25834160 = l2587;
                                        _seen25844161 = seen2584;
                                        continue lambda_start4159;
                                    } else {
                                        return M4.cons(x2585, loop2582(l2587, M4.cons(k2586, seen2584)));
                                    }
                                }
                            }
                        };
                        return loop2582(l2561, M4.rnull);
                    } else {
                        var loop2588 = function(_l25894163, _seen25904164) {
                            lambda_start4162: while (true) {
                                let l2589 = _l25894163;
                                let seen2590 = _seen25904164;
                                if (M4.null_p(l2589) !== false) {
                                    return l2589;
                                } else {
                                    var x2591 = M4.car(l2589);
                                    var k2592 = key2567(x2591);
                                    var l2593 = M4.cdr(l2589);
                                    if ((function(x2594, seen2595) {
                                            return M2.ormap(function(y2596) {
                                                return __eq__p2562(x2594, y2596);
                                            }, seen2595);
                                        })(k2592, seen2590) !== false) {
                                        _l25894163 = l2593;
                                        _seen25904164 = seen2590;
                                        continue lambda_start4162;
                                    } else {
                                        return M4.cons(x2591, loop2588(l2593, M4.cons(k2592, seen2590)));
                                    }
                                }
                            }
                        };
                        return loop2588(l2561, M4.rnull);
                    }
                }
            }
        } else {
            if (key2563 !== false) {
                var loop2597 = function(_l25984166) {
                    lambda_start4165: while (true) {
                        let l2598 = _l25984166;
                        if (M4.null_p(l2598) !== false) {
                            return l2598;
                        } else {
                            var x2599 = M4.car(l2598);
                            var k2600 = key2563(x2599);
                            var l2601 = M4.cdr(l2598);
                            if (M4.hash_ref(h2565, k2600, false) !== false) {
                                _l25984166 = l2601;
                                continue lambda_start4165;
                            } else {
                                M4.hash_set_bang_(h2565, k2600, true);
                                return M4.cons(x2599, loop2597(l2601));
                            }
                        }
                    }
                };
                return loop2597(l2561);
            } else {
                var loop2602 = function(_l26034168) {
                    lambda_start4167: while (true) {
                        let l2603 = _l26034168;
                        if (M4.null_p(l2603) !== false) {
                            return l2603;
                        } else {
                            var x2604 = M4.car(l2603);
                            var k2605 = x2604;
                            var l2606 = M4.cdr(l2603);
                            if (M4.hash_ref(h2565, k2605, false) !== false) {
                                _l26034168 = l2606;
                                continue lambda_start4167;
                            } else {
                                M4.hash_set_bang_(h2565, k2605, true);
                                return M4.cons(x2604, loop2602(l2606));
                            }
                        }
                    }
                };
                return loop2602(l2561);
            }
        }
    }
};
var remove_duplicates2282 = function(given_kws2607, given_args2608, l272609, __eq__p262610) {
    var key252611 = M4.pair_p(given_kws2607);
    if (key252611 !== false) {
        var if_res3638 = M4.car(given_args2608);
    } else {
        var if_res3638 = false;
    }
    var key242612 = if_res3638;
    return remove_duplicates(key242612, l272609, __eq__p262610);
};
var cl3643 = function(given_kws2617, given_args2618, l2619) {
    return remove_duplicates2282(given_kws2617, given_args2618, l2619, M10.unsafe_undefined);
};
var cl3644 = function(given_kws2620, given_args2621, l2622, __eq__p262623) {
    return remove_duplicates2282(given_kws2620, given_args2621, l2622, __eq__p262623);
};
var temp3646 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam3645 = {
        '3': cl3643,
        '4': cl3644
    } [arguments.length];
    if (fixed_lam3645 !== undefined) {
        return fixed_lam3645.apply(null, arguments);
    } else {
        return M4.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [3, 4]);
var temp3642 = $rjs_core.Pair.makeList($rjs_core.Keyword.make("key"));
var cl3639 = function(l2624) {
    return remove_duplicates2282(M4.rnull, M4.rnull, l2624, M10.unsafe_undefined);
};
var cl3640 = function(l2625, __eq__p262626) {
    return remove_duplicates2282(M4.rnull, M4.rnull, l2625, __eq__p262626);
};
var remove_duplicates28 = M9.__rjs_quoted__.make_optional_keyword_procedure(function(given_kws2613, given_argc2614) {
    if (M4.__gt__eq_(given_argc2614, 3) !== false) {
        var if_res3647 = M4.__lt__eq_(given_argc2614, 4);
    } else {
        var if_res3647 = false;
    }
    if (if_res3647 !== false) {
        var l11188682615 = given_kws2613;
        if (M4.null_p(l11188682615) !== false) {
            var if_res3649 = l11188682615;
        } else {
            if (M4.eq_p(M4.car(l11188682615), $rjs_core.Keyword.make("key")) !== false) {
                var if_res3648 = M4.cdr(l11188682615);
            } else {
                var if_res3648 = l11188682615;
            }
            var if_res3649 = if_res3648;
        }
        var l11188682616 = if_res3649;
        return M4.null_p(l11188682616);
    } else {
        return false;
    }
}, temp3646, M4.rnull, temp3642, $rjs_core.attachProcedureArity(function() {
    var fixed_lam3641 = {
        '1': cl3639,
        '2': cl3640
    } [arguments.length];
    if (fixed_lam3641 !== undefined) {
        return fixed_lam3641.apply(null, arguments);
    } else {
        return M4.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]));
var check_duplicates = function(default302627, key292628, items342629, same_p332630) {
    var items2631 = items342629;
    if (M4.eq_p(same_p332630, M10.unsafe_undefined) !== false) {
        var if_res3651 = M4.equal_p;
    } else {
        var if_res3651 = same_p332630;
    }
    var same_p2632 = if_res3651;
    if (M4.eq_p(key292628, M10.unsafe_undefined) !== false) {
        var if_res3652 = M4.values;
    } else {
        var if_res3652 = key292628;
    }
    var key2633 = if_res3652;
    if (M4.eq_p(default302627, M10.unsafe_undefined) !== false) {
        var if_res3653 = function() {
            return false;
        };
    } else {
        var if_res3653 = default302627;
    }
    var failure_result2634 = if_res3653;
    if (M4.list_p(items2631) !== false) {
        var if_res3654 = M4.rvoid();
    } else {
        var if_res3654 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("check-duplicates"), $rjs_core.UString.make("list?"), 0, items2631);
    }
    if_res3654;
    if (M4.procedure_p(key2633) !== false) {
        var if_res3655 = M4.procedure_arity_includes_p(key2633, 1);
    } else {
        var if_res3655 = false;
    }
    if (if_res3655 !== false) {
        var if_res3656 = M4.rvoid();
    } else {
        var if_res3656 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("check-duplicates"), $rjs_core.UString.make("(-> any/c any/c)"), key2633);
    }
    if_res3656;
    if (M4.procedure_p(failure_result2634) !== false) {
        var if_res3657 = failure_result2634;
    } else {
        var if_res3657 = function() {
            return failure_result2634;
        };
    }
    var fail_k2635 = if_res3657;
    if (M4.eq_p(same_p2632, M4.equal_p) !== false) {
        return check_duplicates_by_t(items2631, key2633, M4.make_hash(), fail_k2635);
    } else {
        if (M4.eq_p(same_p2632, M4.eq_p) !== false) {
            return check_duplicates_by_t(items2631, key2633, M4.make_hasheq(), fail_k2635);
        } else {
            if (M4.eq_p(same_p2632, M4.eqv_p) !== false) {
                return check_duplicates_by_t(items2631, key2633, M4.make_hasheqv(), fail_k2635);
            } else {
                if (M4.procedure_p(same_p2632) !== false) {
                    var if_res3658 = M4.procedure_arity_includes_p(same_p2632, 2);
                } else {
                    var if_res3658 = false;
                }
                if (if_res3658 !== false) {
                    var if_res3659 = M4.rvoid();
                } else {
                    var if_res3659 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("check-duplicates"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), 1, items2631, same_p2632);
                }
                if_res3659;
                return check_duplicates_by_list(items2631, key2633, same_p2632, fail_k2635);
            }
        }
    }
};
var check_duplicates2283 = function(given_kws2636, given_args2637, items342638, same_p332639) {
    if (M4.pair_p(given_kws2636) !== false) {
        var if_res3663 = M4.eq_p($rjs_core.Keyword.make("default"), M4.car(given_kws2636));
    } else {
        var if_res3663 = false;
    }
    var default322640 = if_res3663;
    if (default322640 !== false) {
        var if_res3664 = M4.car(given_args2637);
    } else {
        var if_res3664 = M10.unsafe_undefined;
    }
    var default302641 = if_res3664;
    if (default322640 !== false) {
        var if_res3665 = M4.cdr(given_kws2636);
    } else {
        var if_res3665 = given_kws2636;
    }
    var kws1188692642 = if_res3665;
    if (default322640 !== false) {
        var if_res3666 = M4.cdr(given_args2637);
    } else {
        var if_res3666 = given_args2637;
    }
    var kw_args1188702643 = if_res3666;
    var key312644 = M4.pair_p(kws1188692642);
    if (key312644 !== false) {
        var if_res3667 = M4.car(kw_args1188702643);
    } else {
        var if_res3667 = M10.unsafe_undefined;
    }
    var key292645 = if_res3667;
    return check_duplicates(default302641, key292645, items342638, same_p332639);
};
var cl3672 = function(given_kws2652, given_args2653, items2654) {
    return check_duplicates2283(given_kws2652, given_args2653, items2654, M10.unsafe_undefined);
};
var cl3673 = function(given_kws2655, given_args2656, items2657, same_p332658) {
    return check_duplicates2283(given_kws2655, given_args2656, items2657, same_p332658);
};
var temp3675 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam3674 = {
        '3': cl3672,
        '4': cl3673
    } [arguments.length];
    if (fixed_lam3674 !== undefined) {
        return fixed_lam3674.apply(null, arguments);
    } else {
        return M4.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [3, 4]);
var temp3671 = $rjs_core.Pair.makeList($rjs_core.Keyword.make("default"), $rjs_core.Keyword.make("key"));
var cl3668 = function(items2659) {
    return check_duplicates2283(M4.rnull, M4.rnull, items2659, M10.unsafe_undefined);
};
var cl3669 = function(items2660, same_p332661) {
    return check_duplicates2283(M4.rnull, M4.rnull, items2660, same_p332661);
};
var check_duplicates35 = M9.__rjs_quoted__.make_optional_keyword_procedure(function(given_kws2646, given_argc2647) {
    if (M4.__gt__eq_(given_argc2647, 3) !== false) {
        var if_res3676 = M4.__lt__eq_(given_argc2647, 4);
    } else {
        var if_res3676 = false;
    }
    if (if_res3676 !== false) {
        var l11188712648 = given_kws2646;
        if (M4.null_p(l11188712648) !== false) {
            var if_res3678 = l11188712648;
        } else {
            if (M4.eq_p(M4.car(l11188712648), $rjs_core.Keyword.make("default")) !== false) {
                var if_res3677 = M4.cdr(l11188712648);
            } else {
                var if_res3677 = l11188712648;
            }
            var if_res3678 = if_res3677;
        }
        var l11188712649 = if_res3678;
        var l11188722650 = l11188712649;
        if (M4.null_p(l11188722650) !== false) {
            var if_res3680 = l11188722650;
        } else {
            if (M4.eq_p(M4.car(l11188722650), $rjs_core.Keyword.make("key")) !== false) {
                var if_res3679 = M4.cdr(l11188722650);
            } else {
                var if_res3679 = l11188722650;
            }
            var if_res3680 = if_res3679;
        }
        var l11188722651 = if_res3680;
        return M4.null_p(l11188722651);
    } else {
        return false;
    }
}, temp3675, M4.rnull, temp3671, $rjs_core.attachProcedureArity(function() {
    var fixed_lam3670 = {
        '1': cl3668,
        '2': cl3669
    } [arguments.length];
    if (fixed_lam3670 !== undefined) {
        return fixed_lam3670.apply(null, arguments);
    } else {
        return M4.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]));
var check_duplicates_by_t = function(items2662, key2663, table2664, fail_k2665) {
    var loop2666 = function(_items26674190) {
        lambda_start4189: while (true) {
            let items2667 = _items26674190;
            if (M4.pair_p(items2667) !== false) {
                var key_item2668 = key2663(M4.car(items2667));
                if (M4.hash_ref(table2664, key_item2668, false) !== false) {
                    return M4.car(items2667);
                } else {
                    M4.hash_set_bang_(table2664, key_item2668, true);
                    _items26674190 = M4.cdr(items2667);
                    continue lambda_start4189;
                }
            } else {
                return fail_k2665();
            }
        }
    };
    return loop2666(items2662);
};
var check_duplicates_by_list = function(items2669, key2670, same_p2671, fail_k2672) {
    var loop2673 = function(_items26744196, _sofar26754197) {
        lambda_start4192: while (true) {
            let items2674 = _items26744196;
            let sofar2675 = _sofar26754197;
            if (M4.pair_p(items2674) !== false) {
                var key_item2676 = key2670(M4.car(items2674));
                var lst2677 = sofar2675;
                if (M4.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
                    var if_res3684 = M4.rvoid();
                } else {
                    var if_res3684 = M7.__rjs_quoted__.check_list(lst2677);
                }
                if_res3684;
                var for_loop2678 = function(_result26794194, _lst26804195) {
                    lambda_start4193: while (true) {
                        let result2679 = _result26794194;
                        let lst2680 = _lst26804195;
                        if (M4.pair_p(lst2680) !== false) {
                            var prev2681 = M10.unsafe_car(lst2680);
                            var rest2682 = M10.unsafe_cdr(lst2680);
                            if (true !== false) {
                                var result2684 = result2679;
                                var result2685 = same_p2671(key_item2676, prev2681);
                                var result2683 = M4.values(result2685);
                                if (true !== false) {
                                    var if_res3686 = M4.not($rjs_core.attachProcedureArity(function(...x26863685) {
                                        var x2686 = $rjs_core.Pair.listFromArray(x26863685);
                                        return result2683;
                                    })(prev2681));
                                } else {
                                    var if_res3686 = false;
                                }
                                if (if_res3686 !== false) {
                                    var if_res3687 = M4.not(false);
                                } else {
                                    var if_res3687 = false;
                                }
                                if (if_res3687 !== false) {
                                    _result26794194 = result2683;
                                    _lst26804195 = rest2682;
                                    continue lambda_start4193;
                                } else {
                                    return result2683;
                                }
                            } else {
                                return result2679;
                            }
                        } else {
                            return result2679;
                        }
                    }
                };
                if (for_loop2678(false, lst2677) !== false) {
                    return M4.car(items2674);
                } else {
                    _items26744196 = M4.cdr(items2674);
                    _sofar26754197 = M4.cons(key_item2676, sofar2675);
                    continue lambda_start4192;
                }
            } else {
                return fail_k2672();
            }
        }
    };
    return loop2673(items2669, M4.rnull);
};
var check_filter_arguments = function(who2687, f2688, l2689, ls2690) {
    if (M4.procedure_p(f2688) !== false) {
        var if_res3693 = M4.rvoid();
    } else {
        var if_res3693 = M4.apply(M4.raise_argument_error, who2687, $rjs_core.UString.make("procedure?"), 0, f2688, l2689, ls2690);
    }
    if_res3693;
    if (M4.procedure_arity_includes_p(f2688, M4.add1(M4.length(ls2690))) !== false) {
        var if_res3694 = M4.rvoid();
    } else {
        var if_res3694 = M4.raise_arguments_error(who2687, $rjs_core.UString.make("mismatch between procedure arity and argument count"), $rjs_core.UString.make("procedure"), f2688, $rjs_core.UString.make("expected arity"), M4.add1(M4.length(ls2690)));
    }
    if_res3694;
    if (M4.list_p(l2689) !== false) {
        var if_res3695 = M2.andmap(M4.list_p, ls2690);
    } else {
        var if_res3695 = false;
    }
    if (if_res3695 !== false) {
        return M4.rvoid();
    } else {
        var let_result3696 = M7.__rjs_quoted__.make_sequence($rjs_core.Pair.makeList($rjs_core.PrimitiveSymbol.make("x")), M4.cons(l2689, ls2690));
        var pos__gt_vals2691 = let_result3696.getAt(0);
        var pos_pre_inc2692 = let_result3696.getAt(1);
        var pos_next2693 = let_result3696.getAt(2);
        var init2694 = let_result3696.getAt(3);
        var pos_cont_p2695 = let_result3696.getAt(4);
        var val_cont_p2696 = let_result3696.getAt(5);
        var all_cont_p2697 = let_result3696.getAt(6);
        var start2698 = 0;
        if (M4.rvoid() !== false) {
            if (M4.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
                var if_res3697 = M4.rvoid();
            } else {
                var if_res3697 = M7.__rjs_quoted__.check_naturals(start2698);
            }
            var if_res3698 = if_res3697;
        } else {
            var if_res3698 = false;
        }
        if_res3698;
        var for_loop2699 = function(_pos27004201, _pos27014202) {
            lambda_start4199: while (true) {
                let pos2700 = _pos27004201;
                let pos2701 = _pos27014202;
                if (pos_cont_p2695 !== false) {
                    var if_res3699 = pos_cont_p2695(pos2700);
                } else {
                    var if_res3699 = true;
                }
                if (if_res3699 !== false) {
                    var if_res3700 = true;
                } else {
                    var if_res3700 = false;
                }
                if (if_res3700 !== false) {
                    var x2706 = pos__gt_vals2691(pos2700);
                    if (all_cont_p2697 !== false) {
                        var if_res3701 = function(pos2707) {
                            return all_cont_p2697(pos2707, x2706);
                        };
                    } else {
                        var if_res3701 = false;
                    }
                    var let_result3702 = M4.values(x2706, if_res3701);
                    var x2702 = let_result3702.getAt(0);
                    var all_cont_p_by_pos2703 = let_result3702.getAt(1);
                    if (pos_pre_inc2692 !== false) {
                        var if_res3703 = pos_pre_inc2692(pos2700);
                    } else {
                        var if_res3703 = pos2700;
                    }
                    var pos2704 = if_res3703;
                    var i2705 = pos2701;
                    if (val_cont_p2696 !== false) {
                        var if_res3704 = val_cont_p2696(x2702);
                    } else {
                        var if_res3704 = true;
                    }
                    if (if_res3704 !== false) {
                        var if_res3705 = true;
                    } else {
                        var if_res3705 = false;
                    }
                    if (if_res3705 !== false) {
                        if (M4.list_p(x2702) !== false) {
                            var if_res3706 = M4.rvoid();
                        } else {
                            var if_res3706 = M4.apply(M4.raise_argument_error, who2687, $rjs_core.UString.make("list?"), M4.add1(i2705), f2688, l2689, ls2690);
                        }
                        if_res3706;
                        var let_result3707 = M4.values();
                        var let_result3708 = M4.values();
                        if (all_cont_p_by_pos2703 !== false) {
                            var if_res3709 = all_cont_p_by_pos2703(pos2704);
                        } else {
                            var if_res3709 = true;
                        }
                        if (if_res3709 !== false) {
                            var if_res3710 = true;
                        } else {
                            var if_res3710 = false;
                        }
                        if (if_res3710 !== false) {
                            var if_res3711 = M4.not(false);
                        } else {
                            var if_res3711 = false;
                        }
                        if (if_res3711 !== false) {
                            _pos27004201 = pos_next2693(pos2704);
                            _pos27014202 = pos2701 + 1;
                            continue lambda_start4199;
                        } else {
                            return M4.values();
                        }
                    } else {
                        return M4.values();
                    }
                } else {
                    return M4.values();
                }
            }
        };
        for_loop2699(init2694, start2698);
        return M4.rvoid();
    }
};
var filter_map = $rjs_core.attachProcedureArity(function(f2708, l2709, ...ls27103716) {
    var ls2710 = $rjs_core.Pair.listFromArray(ls27103716);
    check_filter_arguments($rjs_core.PrimitiveSymbol.make("filter-map"), f2708, l2709, ls2710);
    if (M4.pair_p(ls2710) !== false) {
        var len2711 = M4.length(l2709);
        if (M2.andmap(function(l2712) {
                return M4.__eq_(len2711, M4.length(l2712));
            }, ls2710) !== false) {
            var loop2713 = function(_l27144206, _ls27154207) {
                lambda_start4205: while (true) {
                    let l2714 = _l27144206;
                    let ls2715 = _ls27154207;
                    if (M4.null_p(l2714) !== false) {
                        return M4.rnull;
                    } else {
                        var x2716 = M4.apply(f2708, M4.car(l2714), M2.map(M4.car, ls2715));
                        if (x2716 !== false) {
                            return M4.cons(x2716, loop2713(M4.cdr(l2714), M2.map(M4.cdr, ls2715)));
                        } else {
                            _l27144206 = M4.cdr(l2714);
                            _ls27154207 = M2.map(M4.cdr, ls2715);
                            continue lambda_start4205;
                        }
                    }
                }
            };
            return loop2713(l2709, ls2710);
        } else {
            return M4.raise_arguments_error($rjs_core.PrimitiveSymbol.make("filter-map"), $rjs_core.UString.make("all lists must have same size"));
        }
    } else {
        var loop2717 = function(_l27184209) {
            lambda_start4208: while (true) {
                let l2718 = _l27184209;
                if (M4.null_p(l2718) !== false) {
                    return M4.rnull;
                } else {
                    var x2719 = f2708(M4.car(l2718));
                    if (x2719 !== false) {
                        return M4.cons(x2719, loop2717(M4.cdr(l2718)));
                    } else {
                        _l27184209 = M4.cdr(l2718);
                        continue lambda_start4208;
                    }
                }
            }
        };
        return loop2717(l2709);
    }
});
var count = $rjs_core.attachProcedureArity(function(f2720, l2721, ...ls27223723) {
    var ls2722 = $rjs_core.Pair.listFromArray(ls27223723);
    check_filter_arguments($rjs_core.PrimitiveSymbol.make("count"), f2720, l2721, ls2722);
    if (M4.pair_p(ls2722) !== false) {
        var len2723 = M4.length(l2721);
        if (M2.andmap(function(l2724) {
                return M4.__eq_(len2723, M4.length(l2724));
            }, ls2722) !== false) {
            var loop2725 = function(_l27264213, _ls27274214, _c27284215) {
                lambda_start4212: while (true) {
                    let l2726 = _l27264213;
                    let ls2727 = _ls27274214;
                    let c2728 = _c27284215;
                    if (M4.null_p(l2726) !== false) {
                        return c2728;
                    } else {
                        var temp3726 = M4.cdr(l2726);
                        var temp3725 = M2.map(M4.cdr, ls2727);
                        if (M4.apply(f2720, M4.car(l2726), M2.map(M4.car, ls2727)) !== false) {
                            var if_res3724 = M4.add1(c2728);
                        } else {
                            var if_res3724 = c2728;
                        }
                        _l27264213 = temp3726;
                        _ls27274214 = temp3725;
                        _c27284215 = if_res3724;
                        continue lambda_start4212;
                    }
                }
            };
            return loop2725(l2721, ls2722, 0);
        } else {
            return M4.raise_arguments_error($rjs_core.PrimitiveSymbol.make("count"), $rjs_core.UString.make("all lists must have same size"));
        }
    } else {
        var loop2729 = function(_l27304217, _c27314218) {
            lambda_start4216: while (true) {
                let l2730 = _l27304217;
                let c2731 = _c27314218;
                if (M4.null_p(l2730) !== false) {
                    return c2731;
                } else {
                    var temp3730 = M4.cdr(l2730);
                    if (f2720(M4.car(l2730)) !== false) {
                        var if_res3729 = M4.add1(c2731);
                    } else {
                        var if_res3729 = c2731;
                    }
                    _l27304217 = temp3730;
                    _c27314218 = if_res3729;
                    continue lambda_start4216;
                }
            }
        };
        return loop2729(l2721, 0);
    }
});
var partition = function(pred2732, l2733) {
    if (M4.procedure_p(pred2732) !== false) {
        var if_res3733 = M4.procedure_arity_includes_p(pred2732, 1);
    } else {
        var if_res3733 = false;
    }
    if (if_res3733 !== false) {
        var if_res3734 = M4.rvoid();
    } else {
        var if_res3734 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("partition"), $rjs_core.UString.make("(any/c . -> . any/c)"), 0, pred2732, l2733);
    }
    if_res3734;
    if (M4.list_p(l2733) !== false) {
        var if_res3735 = M4.rvoid();
    } else {
        var if_res3735 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("partition"), $rjs_core.UString.make("list?"), 1, pred2732, l2733);
    }
    if_res3735;
    var loop2734 = function(_l27354221, _i27364222, _o27374223) {
        lambda_start4220: while (true) {
            let l2735 = _l27354221;
            let i2736 = _i27364222;
            let o2737 = _o27374223;
            if (M4.null_p(l2735) !== false) {
                return M4.values(M1.alt_reverse(i2736), M1.alt_reverse(o2737));
            } else {
                var x2738 = M4.car(l2735);
                var l2739 = M4.cdr(l2735);
                if (pred2732(x2738) !== false) {
                    _l27354221 = l2739;
                    _i27364222 = M4.cons(x2738, i2736);
                    _o27374223 = o2737;
                    continue lambda_start4220;
                } else {
                    _l27354221 = l2739;
                    _i27364222 = i2736;
                    _o27374223 = M4.cons(x2738, o2737);
                    continue lambda_start4220;
                }
            }
        }
    };
    return loop2734(l2733, $rjs_core.Pair.makeList(), $rjs_core.Pair.makeList());
};
var cl3738 = function(end2741) {
    var start2742 = 0;
    var end2743 = end2741;
    var inc2744 = 1;
    if (M4.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res3742 = M4.rvoid();
    } else {
        var if_res3742 = M7.__rjs_quoted__.check_range(start2742, end2743, inc2744);
    }
    if_res3742;
    var for_loop2745 = function(_fold_var27464226, _pos27474227) {
        lambda_start4225: while (true) {
            let fold_var2746 = _fold_var27464226;
            let pos2747 = _pos27474227;
            if (M4.__lt_(pos2747, end2743) !== false) {
                var i2748 = pos2747;
                if (true !== false) {
                    var fold_var2750 = fold_var2746;
                    var fold_var2751 = M4.cons(i2748, fold_var2750);
                    var fold_var2749 = M4.values(fold_var2751);
                    if (true !== false) {
                        var if_res3743 = M4.not(false);
                    } else {
                        var if_res3743 = false;
                    }
                    if (if_res3743 !== false) {
                        _fold_var27464226 = fold_var2749;
                        _pos27474227 = pos2747 + inc2744;
                        continue lambda_start4225;
                    } else {
                        return fold_var2749;
                    }
                } else {
                    return fold_var2746;
                }
            } else {
                return fold_var2746;
            }
        }
    };
    return M1.alt_reverse(for_loop2745(M4.rnull, start2742));
};
var cl3739 = function(start2752, end2753) {
    var start2754 = start2752;
    var end2755 = end2753;
    var inc2756 = 1;
    if (M4.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res3747 = M4.rvoid();
    } else {
        var if_res3747 = M7.__rjs_quoted__.check_range(start2754, end2755, inc2756);
    }
    if_res3747;
    var for_loop2757 = function(_fold_var27584230, _pos27594231) {
        lambda_start4229: while (true) {
            let fold_var2758 = _fold_var27584230;
            let pos2759 = _pos27594231;
            if (M4.__lt_(pos2759, end2755) !== false) {
                var i2760 = pos2759;
                if (true !== false) {
                    var fold_var2762 = fold_var2758;
                    var fold_var2763 = M4.cons(i2760, fold_var2762);
                    var fold_var2761 = M4.values(fold_var2763);
                    if (true !== false) {
                        var if_res3748 = M4.not(false);
                    } else {
                        var if_res3748 = false;
                    }
                    if (if_res3748 !== false) {
                        _fold_var27584230 = fold_var2761;
                        _pos27594231 = pos2759 + inc2756;
                        continue lambda_start4229;
                    } else {
                        return fold_var2761;
                    }
                } else {
                    return fold_var2758;
                }
            } else {
                return fold_var2758;
            }
        }
    };
    return M1.alt_reverse(for_loop2757(M4.rnull, start2754));
};
var cl3740 = function(start2764, end2765, step2766) {
    var start2767 = start2764;
    var end2768 = end2765;
    var inc2769 = step2766;
    if (M4.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res3752 = M4.rvoid();
    } else {
        var if_res3752 = M7.__rjs_quoted__.check_range(start2767, end2768, inc2769);
    }
    if_res3752;
    var for_loop2770 = function(_fold_var27714234, _pos27724235) {
        lambda_start4233: while (true) {
            let fold_var2771 = _fold_var27714234;
            let pos2772 = _pos27724235;
            if (M4.__gt__eq_(step2766, 0) !== false) {
                var if_res3753 = M4.__lt_(pos2772, end2768);
            } else {
                var if_res3753 = M4.__gt_(pos2772, end2768);
            }
            if (if_res3753 !== false) {
                var i2773 = pos2772;
                if (true !== false) {
                    var fold_var2775 = fold_var2771;
                    var fold_var2776 = M4.cons(i2773, fold_var2775);
                    var fold_var2774 = M4.values(fold_var2776);
                    if (true !== false) {
                        var if_res3754 = M4.not(false);
                    } else {
                        var if_res3754 = false;
                    }
                    if (if_res3754 !== false) {
                        _fold_var27714234 = fold_var2774;
                        _pos27724235 = pos2772 + inc2769;
                        continue lambda_start4233;
                    } else {
                        return fold_var2774;
                    }
                } else {
                    return fold_var2771;
                }
            } else {
                return fold_var2771;
            }
        }
    };
    return M1.alt_reverse(for_loop2770(M4.rnull, start2767));
};
var range2740 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam3741 = {
        '1': cl3738,
        '2': cl3739,
        '3': cl3740
    } [arguments.length];
    if (fixed_lam3741 !== undefined) {
        return fixed_lam3741.apply(null, arguments);
    } else {
        return M4.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2, 3]);
var range_proc = range2740;
var cl3758 = function(start2778, end2779) {
    var start2780 = start2778;
    var end2781 = end2779;
    var inc2782 = 1;
    if (M4.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res3761 = M4.rvoid();
    } else {
        var if_res3761 = M7.__rjs_quoted__.check_range_generic($rjs_core.PrimitiveSymbol.make("in-inclusive-range"), start2780, end2781, inc2782);
    }
    if_res3761;
    var for_loop2783 = function(_fold_var27844239, _pos27854240) {
        lambda_start4238: while (true) {
            let fold_var2784 = _fold_var27844239;
            let pos2785 = _pos27854240;
            if (M4.__lt__eq_(pos2785, end2781) !== false) {
                var i2786 = pos2785;
                if (true !== false) {
                    var fold_var2788 = fold_var2784;
                    var fold_var2789 = M4.cons(i2786, fold_var2788);
                    var fold_var2787 = M4.values(fold_var2789);
                    if (true !== false) {
                        var if_res3762 = M4.not(false);
                    } else {
                        var if_res3762 = false;
                    }
                    if (if_res3762 !== false) {
                        _fold_var27844239 = fold_var2787;
                        _pos27854240 = pos2785 + inc2782;
                        continue lambda_start4238;
                    } else {
                        return fold_var2787;
                    }
                } else {
                    return fold_var2784;
                }
            } else {
                return fold_var2784;
            }
        }
    };
    return M1.alt_reverse(for_loop2783(M4.rnull, start2780));
};
var cl3759 = function(start2790, end2791, step2792) {
    var start2793 = start2790;
    var end2794 = end2791;
    var inc2795 = step2792;
    if (M4.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res3766 = M4.rvoid();
    } else {
        var if_res3766 = M7.__rjs_quoted__.check_range_generic($rjs_core.PrimitiveSymbol.make("in-inclusive-range"), start2793, end2794, inc2795);
    }
    if_res3766;
    var for_loop2796 = function(_fold_var27974243, _pos27984244) {
        lambda_start4242: while (true) {
            let fold_var2797 = _fold_var27974243;
            let pos2798 = _pos27984244;
            if (M4.__gt__eq_(step2792, 0) !== false) {
                var if_res3767 = M4.__lt__eq_(pos2798, end2794);
            } else {
                var if_res3767 = M4.__gt__eq_(pos2798, end2794);
            }
            if (if_res3767 !== false) {
                var i2799 = pos2798;
                if (true !== false) {
                    var fold_var2801 = fold_var2797;
                    var fold_var2802 = M4.cons(i2799, fold_var2801);
                    var fold_var2800 = M4.values(fold_var2802);
                    if (true !== false) {
                        var if_res3768 = M4.not(false);
                    } else {
                        var if_res3768 = false;
                    }
                    if (if_res3768 !== false) {
                        _fold_var27974243 = fold_var2800;
                        _pos27984244 = pos2798 + inc2795;
                        continue lambda_start4242;
                    } else {
                        return fold_var2800;
                    }
                } else {
                    return fold_var2797;
                }
            } else {
                return fold_var2797;
            }
        }
    };
    return M1.alt_reverse(for_loop2796(M4.rnull, start2793));
};
var inclusive_range2777 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam3760 = {
        '2': cl3758,
        '3': cl3759
    } [arguments.length];
    if (fixed_lam3760 !== undefined) {
        return fixed_lam3760.apply(null, arguments);
    } else {
        return M4.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var inclusive_range_proc = inclusive_range2777;
var cl3772 = function(f2803, l2804) {
    return M4.apply(M4.append, M2.map(f2803, l2804));
};
var cl3773 = function(f2805, l12806, l22807) {
    return M4.apply(M4.append, M2.map(f2805, l12806, l22807));
};
var cl3774 = $rjs_core.attachProcedureArity(function(f2808, l2809, ...ls28103777) {
    var ls2810 = $rjs_core.Pair.listFromArray(ls28103777);
    return M4.apply(M4.append, M4.apply(M2.map, f2808, l2809, ls2810));
});
var append_map = $rjs_core.attachProcedureArity(function() {
    var fixed_lam3775 = {
        '2': cl3772,
        '3': cl3773
    } [arguments.length];
    if (fixed_lam3775 !== undefined) {
        return fixed_lam3775.apply(null, arguments);
    } else {
        if (M4.__gt__eq_(cl3774.length, 1) !== false) {
            return cl3774.apply(null, arguments);
        } else {
            return M4.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
    }
}, [M4.make_arity_at_least(2)]);
var filter_not = function(f2811, list2812) {
    if (M4.procedure_p(f2811) !== false) {
        var if_res3778 = M4.procedure_arity_includes_p(f2811, 1);
    } else {
        var if_res3778 = false;
    }
    if (if_res3778 !== false) {
        var if_res3779 = M4.rvoid();
    } else {
        var if_res3779 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("filter-not"), $rjs_core.UString.make("(any/c . -> . any/c)"), 0, f2811, list2812);
    }
    if_res3779;
    if (M4.list_p(list2812) !== false) {
        var if_res3780 = M4.rvoid();
    } else {
        var if_res3780 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("filter-not"), $rjs_core.UString.make("list?"), 1, f2811, list2812);
    }
    if_res3780;
    var loop2813 = function(_l28144252, _result28154253) {
        lambda_start4251: while (true) {
            let l2814 = _l28144252;
            let result2815 = _result28154253;
            if (M4.null_p(l2814) !== false) {
                return M1.alt_reverse(result2815);
            } else {
                var temp3782 = M4.cdr(l2814);
                if (f2811(M4.car(l2814)) !== false) {
                    var if_res3781 = result2815;
                } else {
                    var if_res3781 = M4.cons(M4.car(l2814), result2815);
                }
                _l28144252 = temp3782;
                _result28154253 = if_res3781;
                continue lambda_start4251;
            }
        }
    };
    return loop2813(list2812, M4.rnull);
};
var shuffle = function(l2816) {
    if (M4.list_p(l2816) !== false) {
        var if_res3784 = M4.rvoid();
    } else {
        var if_res3784 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("shuffle"), $rjs_core.UString.make("list?"), 0, l2816);
    }
    if_res3784;
    var let_result3785 = M4.values();
    var a2817 = M4.make_vector(M4.length(l2816));
    var lst2818 = l2816;
    var start2819 = 0;
    if (M4.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res3786 = M4.rvoid();
    } else {
        var if_res3786 = M7.__rjs_quoted__.check_list(lst2818);
    }
    if_res3786;
    if (M4.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res3787 = M4.rvoid();
    } else {
        var if_res3787 = M7.__rjs_quoted__.check_naturals(start2819);
    }
    if_res3787;
    var for_loop2820 = function(_lst28214256, _pos28224257) {
        lambda_start4255: while (true) {
            let lst2821 = _lst28214256;
            let pos2822 = _pos28224257;
            if (M4.pair_p(lst2821) !== false) {
                var if_res3788 = true;
            } else {
                var if_res3788 = false;
            }
            if (if_res3788 !== false) {
                var x2823 = M10.unsafe_car(lst2821);
                var rest2824 = M10.unsafe_cdr(lst2821);
                var i2825 = pos2822;
                if (true !== false) {
                    var if_res3789 = true;
                } else {
                    var if_res3789 = false;
                }
                if (if_res3789 !== false) {
                    var j2826 = M0.random(M4.add1(i2825));
                    if (M4.__eq_(j2826, i2825) !== false) {
                        var if_res3790 = M4.rvoid();
                    } else {
                        var if_res3790 = M4.vector_set_bang_(a2817, i2825, M4.vector_ref(a2817, j2826));
                    }
                    if_res3790;
                    M4.vector_set_bang_(a2817, j2826, x2823);
                    var let_result3791 = M4.values();
                    var let_result3792 = M4.values();
                    if (true !== false) {
                        if (true !== false) {
                            var if_res3793 = M4.not(false);
                        } else {
                            var if_res3793 = false;
                        }
                        var if_res3794 = if_res3793;
                    } else {
                        var if_res3794 = false;
                    }
                    if (if_res3794 !== false) {
                        _lst28214256 = rest2824;
                        _pos28224257 = pos2822 + 1;
                        continue lambda_start4255;
                    } else {
                        return M4.values();
                    }
                } else {
                    return M4.values();
                }
            } else {
                return M4.values();
            }
        }
    };
    for_loop2820(lst2818, start2819);
    M4.rvoid();
    return M4.vector__gt_list(a2817);
};
var combinations2827 = function(l372828, k362829) {
    var l2830 = l372828;
    if (false !== false) {
        var if_res3798 = false;
    } else {
        var if_res3798 = k362829;
    }
    var k2831 = if_res3798;
    var let_result3799 = M7.__rjs_quoted__.make_sequence($rjs_core.Pair.makeList($rjs_core.PrimitiveSymbol.make("x")), in_combinations(l2830, k2831));
    var pos__gt_vals2832 = let_result3799.getAt(0);
    var pos_pre_inc2833 = let_result3799.getAt(1);
    var pos_next2834 = let_result3799.getAt(2);
    var init2835 = let_result3799.getAt(3);
    var pos_cont_p2836 = let_result3799.getAt(4);
    var val_cont_p2837 = let_result3799.getAt(5);
    var all_cont_p2838 = let_result3799.getAt(6);
    M4.rvoid();
    var for_loop2839 = function(_fold_var28404261, _pos28414262) {
        lambda_start4259: while (true) {
            let fold_var2840 = _fold_var28404261;
            let pos2841 = _pos28414262;
            if (pos_cont_p2836 !== false) {
                var if_res3800 = pos_cont_p2836(pos2841);
            } else {
                var if_res3800 = true;
            }
            if (if_res3800 !== false) {
                var x2845 = pos__gt_vals2832(pos2841);
                if (all_cont_p2838 !== false) {
                    var if_res3801 = function(pos2846) {
                        return all_cont_p2838(pos2846, x2845);
                    };
                } else {
                    var if_res3801 = false;
                }
                var let_result3802 = M4.values(x2845, if_res3801);
                var x2842 = let_result3802.getAt(0);
                var all_cont_p_by_pos2843 = let_result3802.getAt(1);
                if (pos_pre_inc2833 !== false) {
                    var if_res3803 = pos_pre_inc2833(pos2841);
                } else {
                    var if_res3803 = pos2841;
                }
                var pos2844 = if_res3803;
                if (val_cont_p2837 !== false) {
                    var if_res3804 = val_cont_p2837(x2842);
                } else {
                    var if_res3804 = true;
                }
                if (if_res3804 !== false) {
                    var fold_var2848 = fold_var2840;
                    var fold_var2849 = M4.cons(x2842, fold_var2848);
                    var fold_var2847 = M4.values(fold_var2849);
                    if (all_cont_p_by_pos2843 !== false) {
                        var if_res3805 = all_cont_p_by_pos2843(pos2844);
                    } else {
                        var if_res3805 = true;
                    }
                    if (if_res3805 !== false) {
                        var if_res3806 = M4.not(false);
                    } else {
                        var if_res3806 = false;
                    }
                    if (if_res3806 !== false) {
                        _fold_var28404261 = fold_var2847;
                        _pos28414262 = pos_next2834(pos2844);
                        continue lambda_start4259;
                    } else {
                        return fold_var2847;
                    }
                } else {
                    return fold_var2840;
                }
            } else {
                return fold_var2840;
            }
        }
    };
    return M1.alt_reverse(for_loop2839(M4.rnull, init2835));
};
var cl3810 = function(l2850) {
    return combinations2827(l2850, false);
};
var cl3811 = function(l2851, k362852) {
    return combinations2827(l2851, k362852);
};
var combinations = $rjs_core.attachProcedureArity(function() {
    var fixed_lam3812 = {
        '1': cl3810,
        '2': cl3811
    } [arguments.length];
    if (fixed_lam3812 !== undefined) {
        return fixed_lam3812.apply(null, arguments);
    } else {
        return M4.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var in_combinations2853 = function(l392854, k382855) {
    var l2856 = l392854;
    if (false !== false) {
        var if_res3813 = false;
    } else {
        var if_res3813 = k382855;
    }
    var k2857 = if_res3813;
    if (M4.list_p(l2856) !== false) {
        var if_res3814 = M4.rvoid();
    } else {
        var if_res3814 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-combinations"), $rjs_core.UString.make("list?"), 0, l2856);
    }
    if_res3814;
    var let_result3815 = M4.values();
    if (k2857 !== false) {
        var if_res3816 = M4.not(M4.exact_nonnegative_integer_p(k2857));
    } else {
        var if_res3816 = false;
    }
    if (if_res3816 !== false) {
        var if_res3817 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-combinations"), $rjs_core.UString.make("exact-nonnegative-integer?"), 1, l2856, k2857);
    } else {
        var if_res3817 = M4.rvoid();
    }
    if_res3817;
    var let_result3818 = M4.values();
    var v2858 = M4.list__gt_vector(l2856);
    var N2859 = M4.vector_length(v2858);
    var N_12860 = N2859 - 1;
    if (M4.not(k2857) !== false) {
        var limit2862 = M4.expt(2, N2859);
        var curr_box2863 = M4.box(0);
        var if_res3855 = function() {
            var curr2864 = M4.unbox(curr_box2863);
            if (M4.__lt_(curr2864, limit2862) !== false) {
                var start2865 = N_12860;
                var end2866 = -1;
                var inc2867 = -1;
                if (M4.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
                    var if_res3820 = M4.rvoid();
                } else {
                    var if_res3820 = M7.__rjs_quoted__.check_range(start2865, end2866, inc2867);
                }
                if_res3820;
                var for_loop2868 = function(_acc28694269, _pos28704270) {
                    lambda_start4268: while (true) {
                        let acc2869 = _acc28694269;
                        let pos2870 = _pos28704270;
                        if (M4.__gt_(pos2870, end2866) !== false) {
                            var i2871 = pos2870;
                            if (true !== false) {
                                var acc2873 = acc2869;
                                if (M4.bitwise_bit_set_p(curr2864, i2871) !== false) {
                                    var if_res3821 = M4.cons(M4.vector_ref(v2858, i2871), acc2873);
                                } else {
                                    var if_res3821 = acc2873;
                                }
                                var acc2874 = if_res3821;
                                var acc2872 = M4.values(acc2874);
                                if (true !== false) {
                                    var if_res3822 = M4.not(false);
                                } else {
                                    var if_res3822 = false;
                                }
                                if (if_res3822 !== false) {
                                    _acc28694269 = acc2872;
                                    _pos28704270 = pos2870 + inc2867;
                                    continue lambda_start4268;
                                } else {
                                    return acc2872;
                                }
                            } else {
                                return acc2869;
                            }
                        } else {
                            return acc2869;
                        }
                    }
                };
                var begin_res3819 = for_loop2868($rjs_core.Pair.makeList(), start2865);
                M4.set_box_bang_(curr_box2863, curr2864 + 1);
                return begin_res3819;
            } else {
                return false;
            }
        };
    } else {
        if (M4.__lt_(N2859, k2857) !== false) {
            var if_res3854 = function() {
                return false;
            };
        } else {
            var running_p2875 = true;
            var k_times_2876 = M8.build_vector(k2857, function(i2877) {
                return i2877;
            });
            var k_12878 = k2857 - 1;
            var if_res3854 = function() {
                if (running_p2875 !== false) {
                    var vec2881 = k_times_2876;
                    M7.__rjs_quoted__.check_vector(vec2881);
                    var let_result3828 = M4.values(vec2881, M10.unsafe_vector_length(vec2881));
                    var vec2879 = let_result3828.getAt(0);
                    var len2880 = let_result3828.getAt(1);
                    false;
                    var for_loop2882 = function(_fold_var28834275, _pos28844276) {
                        lambda_start4274: while (true) {
                            let fold_var2883 = _fold_var28834275;
                            let pos2884 = _pos28844276;
                            if (M10.unsafe_fx_lt_(pos2884, len2880) !== false) {
                                var i2885 = M10.unsafe_vector_ref(vec2879, pos2884);
                                if (true !== false) {
                                    var fold_var2887 = fold_var2883;
                                    var fold_var2888 = M4.cons(M4.vector_ref(v2858, i2885), fold_var2887);
                                    var fold_var2886 = M4.values(fold_var2888);
                                    if (true !== false) {
                                        var if_res3829 = M4.not(false);
                                    } else {
                                        var if_res3829 = false;
                                    }
                                    if (if_res3829 !== false) {
                                        _fold_var28834275 = fold_var2886;
                                        _pos28844276 = M10.unsafe_fx_plus_(1, pos2884);
                                        continue lambda_start4274;
                                    } else {
                                        return fold_var2886;
                                    }
                                } else {
                                    return fold_var2883;
                                }
                            } else {
                                return fold_var2883;
                            }
                        }
                    };
                    var begin_res3827 = M1.alt_reverse(for_loop2882(M4.rnull, 0));
                    var index_to_change2889 = false;
                    var start2890 = k_12878;
                    var end2891 = -1;
                    var inc2892 = -1;
                    if (M4.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
                        var if_res3833 = M4.rvoid();
                    } else {
                        var if_res3833 = M7.__rjs_quoted__.check_range(start2890, end2891, inc2892);
                    }
                    if_res3833;
                    var for_loop2893 = function(pos2894) {
                        if (M4.__gt_(pos2894, end2891) !== false) {
                            var i2895 = pos2894;
                            if (true !== false) {
                                var next_k_proc2896 = function() {
                                    if (true !== false) {
                                        return for_loop2893(pos2894 + inc2892);
                                    } else {
                                        return M4.values();
                                    }
                                };
                                if (M4.not(M4.eq_p(M4.vector_ref(k_times_2876, i2895), i2895 + N2859 + M4.__(k2857))) !== false) {
                                    index_to_change2889 = i2895;
                                    var if_res3835 = true;
                                } else {
                                    var if_res3835 = false;
                                }
                                if (if_res3835 !== false) {
                                    return M4.values();
                                } else {
                                    M4.rvoid();
                                    var let_result3836 = M4.values();
                                    if (false !== false) {
                                        return M4.values();
                                    } else {
                                        return next_k_proc2896();
                                    }
                                }
                            } else {
                                return M4.values();
                            }
                        } else {
                            return M4.values();
                        }
                    };
                    for_loop2893(start2890);
                    M4.rvoid();
                    if (index_to_change2889 !== false) {
                        var val_to_change2897 = M4.add1(M4.vector_ref(k_times_2876, index_to_change2889));
                        var start2898 = index_to_change2889;
                        var end2899 = k2857;
                        var inc2900 = 1;
                        var start2901 = val_to_change2897;
                        if (M4.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
                            var if_res3841 = M4.rvoid();
                        } else {
                            var if_res3841 = M7.__rjs_quoted__.check_range(start2898, end2899, inc2900);
                        }
                        if_res3841;
                        if (M4.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
                            var if_res3842 = M4.rvoid();
                        } else {
                            var if_res3842 = M7.__rjs_quoted__.check_naturals(start2901);
                        }
                        if_res3842;
                        var for_loop2902 = function(_pos29034280, _pos29044281) {
                            lambda_start4279: while (true) {
                                let pos2903 = _pos29034280;
                                let pos2904 = _pos29044281;
                                if (M4.__lt_(pos2903, end2899) !== false) {
                                    var if_res3843 = true;
                                } else {
                                    var if_res3843 = false;
                                }
                                if (if_res3843 !== false) {
                                    var i2905 = pos2903;
                                    var v2906 = pos2904;
                                    if (true !== false) {
                                        var if_res3844 = true;
                                    } else {
                                        var if_res3844 = false;
                                    }
                                    if (if_res3844 !== false) {
                                        M4.vector_set_bang_(k_times_2876, i2905, v2906);
                                        var let_result3845 = M4.values();
                                        var let_result3846 = M4.values();
                                        if (true !== false) {
                                            if (true !== false) {
                                                var if_res3847 = M4.not(false);
                                            } else {
                                                var if_res3847 = false;
                                            }
                                            var if_res3848 = if_res3847;
                                        } else {
                                            var if_res3848 = false;
                                        }
                                        if (if_res3848 !== false) {
                                            _pos29034280 = pos2903 + inc2900;
                                            _pos29044281 = pos2904 + 1;
                                            continue lambda_start4279;
                                        } else {
                                            return M4.values();
                                        }
                                    } else {
                                        return M4.values();
                                    }
                                } else {
                                    return M4.values();
                                }
                            }
                        };
                        for_loop2902(start2898, start2901);
                        var if_res3852 = M4.rvoid();
                    } else {
                        running_p2875 = false;
                        var if_res3852 = null;
                    }
                    if_res3852;
                    return begin_res3827;
                } else {
                    return false;
                }
            };
        }
        var if_res3855 = if_res3854;
    }
    var gen_combinations2861 = if_res3855;
    return M7.__rjs_quoted__.in_producer(gen_combinations2861, false);
};
var cl3856 = function(l2907) {
    return in_combinations2853(l2907, false);
};
var cl3857 = function(l2908, k382909) {
    return in_combinations2853(l2908, k382909);
};
var in_combinations = $rjs_core.attachProcedureArity(function() {
    var fixed_lam3858 = {
        '1': cl3856,
        '2': cl3857
    } [arguments.length];
    if (fixed_lam3858 !== undefined) {
        return fixed_lam3858.apply(null, arguments);
    } else {
        return M4.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var swap_plus_flip = function(l2910, i2911, j2912) {
    var tmp2913 = j2912;
    if (M4.equal_p(tmp2913, 0) !== false) {
        return M4.list_times_(M4.cadr(l2910), M4.car(l2910), M4.cddr(l2910));
    } else {
        if (M4.equal_p(tmp2913, 1) !== false) {
            var a2914 = M4.car(l2910);
            var b2915 = M4.cadr(l2910);
            var c2916 = M4.caddr(l2910);
            var l2917 = M4.cdddr(l2910);
            var tmp2918 = i2911;
            if (M4.equal_p(tmp2918, 0) !== false) {
                return M4.list_times_(b2915, c2916, a2914, l2917);
            } else {
                return M4.list_times_(c2916, a2914, b2915, l2917);
            }
        } else {
            if (M4.equal_p(tmp2913, 2) !== false) {
                var a2919 = M4.car(l2910);
                var b2920 = M4.cadr(l2910);
                var c2921 = M4.caddr(l2910);
                var d2922 = M4.cadddr(l2910);
                var l2923 = M4.cddddr(l2910);
                var tmp2924 = i2911;
                if (M4.equal_p(tmp2924, 0) !== false) {
                    return M4.list_times_(c2921, b2920, d2922, a2919, l2923);
                } else {
                    if (M4.equal_p(tmp2924, 1) !== false) {
                        return M4.list_times_(c2921, d2922, a2919, b2920, l2923);
                    } else {
                        return M4.list_times_(d2922, b2920, a2919, c2921, l2923);
                    }
                }
            } else {
                var loop2925 = function(_n29264287, _l129274288, _r129284289) {
                    lambda_start4286: while (true) {
                        let n2926 = _n29264287;
                        let l12927 = _l129274288;
                        let r12928 = _r129284289;
                        if (M4.__gt_(n2926, 0) !== false) {
                            _n29264287 = M4.sub1(n2926);
                            _l129274288 = M4.cons(M4.car(r12928), l12927);
                            _r129284289 = M4.cdr(r12928);
                            continue lambda_start4286;
                        } else {
                            var loop2929 = function(_n29304291, _l229314292, _r229324293) {
                                lambda_start4290: while (true) {
                                    let n2930 = _n29304291;
                                    let l22931 = _l229314292;
                                    let r22932 = _r229324293;
                                    if (M4.__gt_(n2930, 0) !== false) {
                                        _n29304291 = M4.sub1(n2930);
                                        _l229314292 = M4.cons(M4.car(r22932), l22931);
                                        _r229324293 = M4.cdr(r22932);
                                        continue lambda_start4290;
                                    } else {
                                        return M3.__rjs_quoted__.qq_append(l22931, M4.list_times_(M4.car(r22932), M3.__rjs_quoted__.qq_append(l12927, M4.list_times_(M4.car(r12928), M4.cdr(r22932)))));
                                    }
                                }
                            };
                            return loop2929(j2912 - i2911, $rjs_core.Pair.makeList(), M4.cdr(r12928));
                        }
                    }
                };
                return loop2925(i2911, $rjs_core.Pair.makeList(), l2910);
            }
        }
    }
};
var permutations = function(l2933) {
    if (M4.not(M4.list_p(l2933)) !== false) {
        return M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("permutations"), $rjs_core.UString.make("list?"), 0, l2933);
    } else {
        var or_part2934 = M4.null_p(l2933);
        if (or_part2934 !== false) {
            var if_res3867 = or_part2934;
        } else {
            var if_res3867 = M4.null_p(M4.cdr(l2933));
        }
        if (if_res3867 !== false) {
            return M4.list(l2933);
        } else {
            var N2935 = M4.length(l2933) - 2;
            if (M4.__gt_(N2935, 254) !== false) {
                var if_res3868 = M4.error($rjs_core.PrimitiveSymbol.make("permutations"), $rjs_core.UString.make("input list too long: ~e"), l2933);
            } else {
                var if_res3868 = M4.rvoid();
            }
            if_res3868;
            var let_result3869 = M4.values();
            var c2936 = M4.make_bytes(M4.add1(N2935), 0);
            var loop2937 = function(_i29384296, _acc29394297) {
                lambda_start4295: while (true) {
                    let i2938 = _i29384296;
                    let acc2939 = _acc29394297;
                    var ci2940 = M4.bytes_ref(c2936, i2938);
                    if (M4.__lt__eq_(ci2940, i2938) !== false) {
                        M4.bytes_set_bang_(c2936, i2938, M4.add1(ci2940));
                        _i29384296 = 0;
                        _acc29394297 = M4.cons(swap_plus_flip(M4.car(acc2939), ci2940, i2938), acc2939);
                        continue lambda_start4295;
                    } else {
                        if (M4.__lt_(i2938, N2935) !== false) {
                            M4.bytes_set_bang_(c2936, i2938, 0);
                            _i29384296 = M4.add1(i2938);
                            _acc29394297 = acc2939;
                            continue lambda_start4295;
                        } else {
                            return acc2939;
                        }
                    }
                }
            };
            return loop2937(0, M4.list(M1.alt_reverse(l2933)));
        }
    }
};
var in_permutations = function(l2941) {
    if (M4.not(M4.list_p(l2941)) !== false) {
        return M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-permutations"), $rjs_core.UString.make("list?"), 0, l2941);
    } else {
        var or_part2942 = M4.null_p(l2941);
        if (or_part2942 !== false) {
            var if_res3874 = or_part2942;
        } else {
            var if_res3874 = M4.null_p(M4.cdr(l2941));
        }
        if (if_res3874 !== false) {
            return M7.__rjs_quoted__.in_value(l2941);
        } else {
            var N2943 = M4.length(l2941) - 2;
            if (M4.__gt_(N2943, 254) !== false) {
                var if_res3875 = M4.error($rjs_core.PrimitiveSymbol.make("permutations"), $rjs_core.UString.make("input list too long: ~e"), l2941);
            } else {
                var if_res3875 = M4.rvoid();
            }
            if_res3875;
            var let_result3876 = M4.values();
            var c2944 = M4.make_bytes(M4.add1(N2943), 0);
            var i2945 = 0;
            var cur2946 = M1.alt_reverse(l2941);
            var next2947 = function() {
                lambda_start4299: while (true) {
                    var r2948 = cur2946;
                    var ci2949 = M4.bytes_ref(c2944, i2945);
                    if (M4.__lt__eq_(ci2949, i2945) !== false) {
                        M4.bytes_set_bang_(c2944, i2945, M4.add1(ci2949));
                        var begin_res3877 = swap_plus_flip(cur2946, ci2949, i2945);
                        i2945 = 0;
                        return begin_res3877;
                    } else {
                        if (M4.__lt_(i2945, N2943) !== false) {
                            M4.bytes_set_bang_(c2944, i2945, 0);
                            i2945 = M4.add1(i2945);
                            continue lambda_start4299;
                        } else {
                            return false;
                        }
                    }
                }
            };
            return M7.__rjs_quoted__.in_producer(function() {
                var begin_res3880 = cur2946;
                cur2946 = next2947();
                return begin_res3880;
            }, false);
        }
    }
};
var mk_min = function(cmp2950, name2951, f2952, xs2953) {
    if (M4.procedure_p(f2952) !== false) {
        var if_res3883 = M4.procedure_arity_includes_p(f2952, 1);
    } else {
        var if_res3883 = false;
    }
    if (if_res3883 !== false) {
        var if_res3884 = M4.rvoid();
    } else {
        var if_res3884 = M4.raise_argument_error(name2951, $rjs_core.UString.make("(any/c . -> . real?)"), 0, f2952, xs2953);
    }
    if_res3884;
    if (M4.list_p(xs2953) !== false) {
        var if_res3885 = M4.pair_p(xs2953);
    } else {
        var if_res3885 = false;
    }
    if (if_res3885 !== false) {
        var if_res3886 = M4.rvoid();
    } else {
        var if_res3886 = M4.raise_argument_error(name2951, $rjs_core.UString.make("(and/c list? (not/c empty?))"), 1, f2952, xs2953);
    }
    if_res3886;
    var init_min_var2954 = f2952(M4.car(xs2953));
    if (M4.real_p(init_min_var2954) !== false) {
        var if_res3887 = M4.rvoid();
    } else {
        var if_res3887 = M4.raise_result_error(name2951, $rjs_core.UString.make("real?"), init_min_var2954);
    }
    if_res3887;
    var loop2955 = function(_min29564303, _min_var29574304, _xs29584305) {
        lambda_start4302: while (true) {
            let min2956 = _min29564303;
            let min_var2957 = _min_var29574304;
            let xs2958 = _xs29584305;
            if (M4.null_p(xs2958) !== false) {
                return min2956;
            } else {
                var new_min2959 = f2952(M4.car(xs2958));
                if (M4.real_p(new_min2959) !== false) {
                    var if_res3888 = M4.rvoid();
                } else {
                    var if_res3888 = M4.raise_result_error(name2951, $rjs_core.UString.make("real?"), new_min2959);
                }
                if_res3888;
                if (cmp2950(new_min2959, min_var2957) !== false) {
                    _min29564303 = M4.car(xs2958);
                    _min_var29574304 = new_min2959;
                    _xs29584305 = M4.cdr(xs2958);
                    continue lambda_start4302;
                } else {
                    _min29564303 = min2956;
                    _min_var29574304 = min_var2957;
                    _xs29584305 = M4.cdr(xs2958);
                    continue lambda_start4302;
                }
            }
        }
    };
    return loop2955(M4.car(xs2953), init_min_var2954, M4.cdr(xs2953));
};
var argmin = function(f2960, xs2961) {
    return mk_min(M4.__lt_, $rjs_core.PrimitiveSymbol.make("argmin"), f2960, xs2961);
};
var argmax = function(f2962, xs2963) {
    return mk_min(M4.__gt_, $rjs_core.PrimitiveSymbol.make("argmax"), f2962, xs2963);
};
var group_by2964 = function(key412965, l422966, __eq__p402967) {
    var key2968 = key412965;
    var l2969 = l422966;
    if (M4.eq_p(__eq__p402967, M10.unsafe_undefined) !== false) {
        var if_res3891 = M4.equal_p;
    } else {
        var if_res3891 = __eq__p402967;
    }
    var __eq__p2970 = if_res3891;
    if (M4.procedure_p(key2968) !== false) {
        var if_res3892 = M4.procedure_arity_includes_p(key2968, 1);
    } else {
        var if_res3892 = false;
    }
    if (if_res3892 !== false) {
        var if_res3893 = M4.rvoid();
    } else {
        var if_res3893 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("group-by"), $rjs_core.UString.make("(-> any/c any/c)"), 0, key2968, l2969);
    }
    if_res3893;
    var let_result3894 = M4.values();
    if (M4.procedure_p(__eq__p2970) !== false) {
        var if_res3895 = M4.procedure_arity_includes_p(__eq__p2970, 2);
    } else {
        var if_res3895 = false;
    }
    if (if_res3895 !== false) {
        var if_res3896 = M4.rvoid();
    } else {
        var if_res3896 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("group-by"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), 2, key2968, l2969, __eq__p2970);
    }
    if_res3896;
    var let_result3897 = M4.values();
    if (M4.list_p(l2969) !== false) {
        var if_res3898 = M4.rvoid();
    } else {
        var if_res3898 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("group-by"), $rjs_core.UString.make("list?"), 1, key2968, l2969);
    }
    if_res3898;
    var let_result3899 = M4.values();
    var alist_update2971 = function(al2972, k2973, up2974, fail2975) {
        var loop2976 = function(al2977) {
            if (M4.null_p(al2977) !== false) {
                return M4.list(M4.cons(k2973, up2974($rjs_core.Pair.makeList())));
            } else {
                if (__eq__p2970(M4.car(M4.car(al2977)), k2973) !== false) {
                    return M4.cons(M4.cons(k2973, up2974(M4.cdr(M4.car(al2977)))), M4.cdr(al2977));
                } else {
                    return M4.cons(M4.car(al2977), loop2976(M4.cdr(al2977)));
                }
            }
        };
        return loop2976(al2972);
    };
    if (M4.equal_p(__eq__p2970, M4.eq_p) !== false) {
        var if_res3904 = M4.values(M4.hasheq(), M5.hash_update);
    } else {
        if (M4.equal_p(__eq__p2970, M4.eqv_p) !== false) {
            var if_res3903 = M4.values(M4.hasheqv(), M5.hash_update);
        } else {
            if (M4.equal_p(__eq__p2970, M4.equal_p) !== false) {
                var if_res3902 = M4.values(M4.hash(), M5.hash_update);
            } else {
                var if_res3902 = M4.values($rjs_core.Pair.makeList(), alist_update2971);
            }
            var if_res3903 = if_res3902;
        }
        var if_res3904 = if_res3903;
    }
    var let_result3905 = if_res3904;
    var base2978 = let_result3905.getAt(0);
    var update2979 = let_result3905.getAt(1);
    var lst2981 = l2969;
    var start2982 = 0;
    if (M4.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res3906 = M4.rvoid();
    } else {
        var if_res3906 = M7.__rjs_quoted__.check_list(lst2981);
    }
    if_res3906;
    if (M4.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res3907 = M4.rvoid();
    } else {
        var if_res3907 = M7.__rjs_quoted__.check_naturals(start2982);
    }
    if_res3907;
    var for_loop2983 = function(_res29844313, _lst29854314, _pos29864315) {
        lambda_start4311: while (true) {
            let res2984 = _res29844313;
            let lst2985 = _lst29854314;
            let pos2986 = _pos29864315;
            if (M4.pair_p(lst2985) !== false) {
                var if_res3908 = true;
            } else {
                var if_res3908 = false;
            }
            if (if_res3908 !== false) {
                var elt2987 = M10.unsafe_car(lst2985);
                var rest2988 = M10.unsafe_cdr(lst2985);
                var idx2989 = pos2986;
                if (true !== false) {
                    var if_res3909 = true;
                } else {
                    var if_res3909 = false;
                }
                if (if_res3909 !== false) {
                    var res2991 = res2984;
                    var k2993 = key2968(elt2987);
                    var v2994 = M4.cons(idx2989, elt2987);
                    var res2992 = update2979(res2991, k2993, function(o2995) {
                        return M4.cons(v2994, o2995);
                    }, $rjs_core.Pair.makeList());
                    var res2990 = M4.values(res2992);
                    if (true !== false) {
                        if (true !== false) {
                            var if_res3910 = M4.not(false);
                        } else {
                            var if_res3910 = false;
                        }
                        var if_res3911 = if_res3910;
                    } else {
                        var if_res3911 = false;
                    }
                    if (if_res3911 !== false) {
                        _res29844313 = res2990;
                        _lst29854314 = rest2988;
                        _pos29864315 = pos2986 + 1;
                        continue lambda_start4311;
                    } else {
                        return res2990;
                    }
                } else {
                    return res2984;
                }
            } else {
                return res2984;
            }
        }
    };
    var classes2980 = for_loop2983(base2978, lst2981, start2982);
    if (M4.list_p(classes2980) !== false) {
        var lst2997 = classes2980;
        if (M4.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
            var if_res3915 = M4.rvoid();
        } else {
            var if_res3915 = M7.__rjs_quoted__.check_list(lst2997);
        }
        if_res3915;
        var for_loop2998 = function(_fold_var29994317, _lst30004318) {
            lambda_start4316: while (true) {
                let fold_var2999 = _fold_var29994317;
                let lst3000 = _lst30004318;
                if (M4.pair_p(lst3000) !== false) {
                    var p3001 = M10.unsafe_car(lst3000);
                    var rest3002 = M10.unsafe_cdr(lst3000);
                    if (true !== false) {
                        var fold_var3004 = fold_var2999;
                        var __dot__dot__dot_ects_by_racket_by_list_dot_rkt__338853006 = M8.__rjs_quoted__.sort7;
                        var temp533007 = M4.cdr(p3001);
                        var __lt_543008 = M4.__lt_;
                        var car553009 = M4.car;
                        if (M4.variable_reference_constant_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
                            var if_res3916 = M8.__rjs_quoted__.sort(false, car553009, temp533007, __lt_543008);
                        } else {
                            var if_res3916 = M4.checked_procedure_check_and_extract(M9.__rjs_quoted__.struct_keyword_procedure, __dot__dot__dot_ects_by_racket_by_list_dot_rkt__338853006, M9.__rjs_quoted__.keyword_procedure_extract, $rjs_core.Pair.makeList($rjs_core.Keyword.make("key")), 4)($rjs_core.Pair.makeList($rjs_core.Keyword.make("key")), M4.list(car553009), temp533007, __lt_543008);
                        }
                        var fold_var3005 = M4.cons(if_res3916, fold_var3004);
                        var fold_var3003 = M4.values(fold_var3005);
                        if (true !== false) {
                            var if_res3917 = M4.not(false);
                        } else {
                            var if_res3917 = false;
                        }
                        if (if_res3917 !== false) {
                            _fold_var29994317 = fold_var3003;
                            _lst30004318 = rest3002;
                            continue lambda_start4316;
                        } else {
                            return fold_var3003;
                        }
                    } else {
                        return fold_var2999;
                    }
                } else {
                    return fold_var2999;
                }
            }
        };
        var if_res3928 = M1.alt_reverse(for_loop2998(M4.rnull, lst2997));
    } else {
        var ht3010 = classes2980;
        if (M4.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
            var if_res3921 = M4.rvoid();
        } else {
            var if_res3921 = M7.__rjs_quoted__.check_in_hash(ht3010);
        }
        if_res3921;
        var for_loop3011 = function(_fold_var30124320, _i30134321) {
            lambda_start4319: while (true) {
                let fold_var3012 = _fold_var30124320;
                let i3013 = _i30134321;
                if (i3013 !== false) {
                    var let_result3922 = M4.hash_iterate_key_plus_value(ht3010, i3013);
                    var _3014 = let_result3922.getAt(0);
                    var c3015 = let_result3922.getAt(1);
                    if (true !== false) {
                        var fold_var3017 = fold_var3012;
                        var __dot__dot__dot_ects_by_racket_by_list_dot_rkt__339693019 = M8.__rjs_quoted__.sort7;
                        var c563020 = c3015;
                        var __lt_573021 = M4.__lt_;
                        var car583022 = M4.car;
                        if (M4.variable_reference_constant_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
                            var if_res3923 = M8.__rjs_quoted__.sort(false, car583022, c563020, __lt_573021);
                        } else {
                            var if_res3923 = M4.checked_procedure_check_and_extract(M9.__rjs_quoted__.struct_keyword_procedure, __dot__dot__dot_ects_by_racket_by_list_dot_rkt__339693019, M9.__rjs_quoted__.keyword_procedure_extract, $rjs_core.Pair.makeList($rjs_core.Keyword.make("key")), 4)($rjs_core.Pair.makeList($rjs_core.Keyword.make("key")), M4.list(car583022), c563020, __lt_573021);
                        }
                        var fold_var3018 = M4.cons(if_res3923, fold_var3017);
                        var fold_var3016 = M4.values(fold_var3018);
                        if (true !== false) {
                            var if_res3924 = M4.not(false);
                        } else {
                            var if_res3924 = false;
                        }
                        if (if_res3924 !== false) {
                            _fold_var30124320 = fold_var3016;
                            _i30134321 = M4.hash_iterate_next(ht3010, i3013);
                            continue lambda_start4319;
                        } else {
                            return fold_var3016;
                        }
                    } else {
                        return fold_var3012;
                    }
                } else {
                    return fold_var3012;
                }
            }
        };
        var if_res3928 = M1.alt_reverse(for_loop3011(M4.rnull, M4.hash_iterate_first(ht3010)));
    }
    var sorted_classes2996 = if_res3928;
    var __dot__dot__dot_ects_by_racket_by_list_dot_rkt__340863024 = M8.__rjs_quoted__.sort7;
    var sorted_classes593025 = sorted_classes2996;
    var __lt_603026 = M4.__lt_;
    var caar613027 = M4.caar;
    if (M4.variable_reference_constant_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res3929 = M8.__rjs_quoted__.sort(false, caar613027, sorted_classes593025, __lt_603026);
    } else {
        var if_res3929 = M4.checked_procedure_check_and_extract(M9.__rjs_quoted__.struct_keyword_procedure, __dot__dot__dot_ects_by_racket_by_list_dot_rkt__340863024, M9.__rjs_quoted__.keyword_procedure_extract, $rjs_core.Pair.makeList($rjs_core.Keyword.make("key")), 4)($rjs_core.Pair.makeList($rjs_core.Keyword.make("key")), M4.list(caar613027), sorted_classes593025, __lt_603026);
    }
    var lst3023 = if_res3929;
    if (M4.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res3930 = M4.rvoid();
    } else {
        var if_res3930 = M7.__rjs_quoted__.check_list(lst3023);
    }
    if_res3930;
    var for_loop3028 = function(_fold_var30294323, _lst30304324) {
        lambda_start4322: while (true) {
            let fold_var3029 = _fold_var30294323;
            let lst3030 = _lst30304324;
            if (M4.pair_p(lst3030) !== false) {
                var c3031 = M10.unsafe_car(lst3030);
                var rest3032 = M10.unsafe_cdr(lst3030);
                if (true !== false) {
                    var fold_var3034 = fold_var3029;
                    var fold_var3035 = M4.cons(M2.map(M4.cdr, c3031), fold_var3034);
                    var fold_var3033 = M4.values(fold_var3035);
                    if (true !== false) {
                        var if_res3931 = M4.not(false);
                    } else {
                        var if_res3931 = false;
                    }
                    if (if_res3931 !== false) {
                        _fold_var30294323 = fold_var3033;
                        _lst30304324 = rest3032;
                        continue lambda_start4322;
                    } else {
                        return fold_var3033;
                    }
                } else {
                    return fold_var3029;
                }
            } else {
                return fold_var3029;
            }
        }
    };
    return M1.alt_reverse(for_loop3028(M4.rnull, lst3023));
};
var cl3935 = function(key3036, l3037) {
    return group_by2964(key3036, l3037, M10.unsafe_undefined);
};
var cl3936 = function(key3038, l3039, __eq__p403040) {
    return group_by2964(key3038, l3039, __eq__p403040);
};
var group_by = $rjs_core.attachProcedureArity(function() {
    var fixed_lam3937 = {
        '2': cl3935,
        '3': cl3936
    } [arguments.length];
    if (fixed_lam3937 !== undefined) {
        return fixed_lam3937.apply(null, arguments);
    } else {
        return M4.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var cartesian_product = $rjs_core.attachProcedureArity(function(...ls30413938) {
    var ls3041 = $rjs_core.Pair.listFromArray(ls30413938);
    var let_result3939 = M7.__rjs_quoted__.make_sequence($rjs_core.Pair.makeList($rjs_core.PrimitiveSymbol.make("l")), ls3041);
    var pos__gt_vals3042 = let_result3939.getAt(0);
    var pos_pre_inc3043 = let_result3939.getAt(1);
    var pos_next3044 = let_result3939.getAt(2);
    var init3045 = let_result3939.getAt(3);
    var pos_cont_p3046 = let_result3939.getAt(4);
    var val_cont_p3047 = let_result3939.getAt(5);
    var all_cont_p3048 = let_result3939.getAt(6);
    var start3049 = 0;
    if (M4.rvoid() !== false) {
        if (M4.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
            var if_res3940 = M4.rvoid();
        } else {
            var if_res3940 = M7.__rjs_quoted__.check_naturals(start3049);
        }
        var if_res3941 = if_res3940;
    } else {
        var if_res3941 = false;
    }
    if_res3941;
    var for_loop3050 = function(_pos30514331, _pos30524332) {
        lambda_start4329: while (true) {
            let pos3051 = _pos30514331;
            let pos3052 = _pos30524332;
            if (pos_cont_p3046 !== false) {
                var if_res3942 = pos_cont_p3046(pos3051);
            } else {
                var if_res3942 = true;
            }
            if (if_res3942 !== false) {
                var if_res3943 = true;
            } else {
                var if_res3943 = false;
            }
            if (if_res3943 !== false) {
                var l3057 = pos__gt_vals3042(pos3051);
                if (all_cont_p3048 !== false) {
                    var if_res3944 = function(pos3058) {
                        return all_cont_p3048(pos3058, l3057);
                    };
                } else {
                    var if_res3944 = false;
                }
                var let_result3945 = M4.values(l3057, if_res3944);
                var l3053 = let_result3945.getAt(0);
                var all_cont_p_by_pos3054 = let_result3945.getAt(1);
                if (pos_pre_inc3043 !== false) {
                    var if_res3946 = pos_pre_inc3043(pos3051);
                } else {
                    var if_res3946 = pos3051;
                }
                var pos3055 = if_res3946;
                var i3056 = pos3052;
                if (val_cont_p3047 !== false) {
                    var if_res3947 = val_cont_p3047(l3053);
                } else {
                    var if_res3947 = true;
                }
                if (if_res3947 !== false) {
                    var if_res3948 = true;
                } else {
                    var if_res3948 = false;
                }
                if (if_res3948 !== false) {
                    if (M4.list_p(l3053) !== false) {
                        var if_res3949 = M4.rvoid();
                    } else {
                        var if_res3949 = M4.apply(M4.raise_argument_error, $rjs_core.PrimitiveSymbol.make("cartesian-product"), $rjs_core.UString.make("list?"), i3056, ls3041);
                    }
                    if_res3949;
                    var let_result3950 = M4.values();
                    var let_result3951 = M4.values();
                    if (all_cont_p_by_pos3054 !== false) {
                        var if_res3952 = all_cont_p_by_pos3054(pos3055);
                    } else {
                        var if_res3952 = true;
                    }
                    if (if_res3952 !== false) {
                        var if_res3953 = true;
                    } else {
                        var if_res3953 = false;
                    }
                    if (if_res3953 !== false) {
                        var if_res3954 = M4.not(false);
                    } else {
                        var if_res3954 = false;
                    }
                    if (if_res3954 !== false) {
                        _pos30514331 = pos_next3044(pos3055);
                        _pos30524332 = pos3052 + 1;
                        continue lambda_start4329;
                    } else {
                        return M4.values();
                    }
                } else {
                    return M4.values();
                }
            } else {
                return M4.values();
            }
        }
    };
    for_loop3050(init3045, start3049);
    var let_result3958 = M4.values();
    M4.rvoid();
    var let_result3959 = M4.values();
    var cp_23059 = function(as3060, bs3061) {
        var lst3062 = as3060;
        if (M4.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
            var if_res3960 = M4.rvoid();
        } else {
            var if_res3960 = M7.__rjs_quoted__.check_list(lst3062);
        }
        if_res3960;
        var for_loop3063 = function(_fold_var30644338, _lst30654339) {
            lambda_start4334: while (true) {
                let fold_var3064 = _fold_var30644338;
                let lst3065 = _lst30654339;
                if (M4.pair_p(lst3065) !== false) {
                    var i3066 = M10.unsafe_car(lst3065);
                    var rest3067 = M10.unsafe_cdr(lst3065);
                    if (true !== false) {
                        var fold_var3069 = fold_var3064;
                        if (true !== false) {
                            var lst3070 = bs3061;
                            if (M4.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
                                var if_res3961 = M4.rvoid();
                            } else {
                                var if_res3961 = M7.__rjs_quoted__.check_list(lst3070);
                            }
                            if_res3961;
                            var for_loop3071 = function(_fold_var30724336, _lst30734337) {
                                lambda_start4335: while (true) {
                                    let fold_var3072 = _fold_var30724336;
                                    let lst3073 = _lst30734337;
                                    if (M4.pair_p(lst3073) !== false) {
                                        var j3074 = M10.unsafe_car(lst3073);
                                        var rest3075 = M10.unsafe_cdr(lst3073);
                                        if (true !== false) {
                                            var fold_var3077 = fold_var3072;
                                            if (true !== false) {
                                                var fold_var3078 = fold_var3077;
                                                var fold_var3079 = M4.cons(M4.cons(i3066, j3074), fold_var3078);
                                                var if_res3962 = M4.values(fold_var3079);
                                            } else {
                                                var if_res3962 = fold_var3077;
                                            }
                                            var fold_var3076 = if_res3962;
                                            if (true !== false) {
                                                var if_res3963 = M4.not(false);
                                            } else {
                                                var if_res3963 = false;
                                            }
                                            if (if_res3963 !== false) {
                                                _fold_var30724336 = fold_var3076;
                                                _lst30734337 = rest3075;
                                                continue lambda_start4335;
                                            } else {
                                                return fold_var3076;
                                            }
                                        } else {
                                            return fold_var3072;
                                        }
                                    } else {
                                        return fold_var3072;
                                    }
                                }
                            };
                            var if_res3967 = for_loop3071(fold_var3069, lst3070);
                        } else {
                            var if_res3967 = fold_var3069;
                        }
                        var fold_var3068 = if_res3967;
                        if (true !== false) {
                            var if_res3968 = M4.not(false);
                        } else {
                            var if_res3968 = false;
                        }
                        if (if_res3968 !== false) {
                            _fold_var30644338 = fold_var3068;
                            _lst30654339 = rest3067;
                            continue lambda_start4334;
                        } else {
                            return fold_var3068;
                        }
                    } else {
                        return fold_var3064;
                    }
                } else {
                    return fold_var3064;
                }
            }
        };
        return M1.alt_reverse(for_loop3063(M4.rnull, lst3062));
    };
    return M8.foldr(cp_23059, M4.list(M4.list()), ls3041);
});
var remf = function(f3080, ls3081) {
    if (M4.list_p(ls3081) !== false) {
        var if_res3972 = M4.rvoid();
    } else {
        var if_res3972 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("remf"), $rjs_core.UString.make("list?"), 1, f3080, ls3081);
    }
    if_res3972;
    if (M4.procedure_p(f3080) !== false) {
        var if_res3973 = M4.procedure_arity_includes_p(f3080, 1);
    } else {
        var if_res3973 = false;
    }
    if (if_res3973 !== false) {
        var if_res3974 = M4.rvoid();
    } else {
        var if_res3974 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("remf"), $rjs_core.UString.make("(-> any/c any/c)"), 0, f3080, ls3081);
    }
    if_res3974;
    if (M4.null_p(ls3081) !== false) {
        return $rjs_core.Pair.makeList();
    } else {
        if (f3080(M4.car(ls3081)) !== false) {
            return M4.cdr(ls3081);
        } else {
            return M4.cons(M4.car(ls3081), remf(f3080, M4.cdr(ls3081)));
        }
    }
};
var remf_times_ = function(_f30824342, _ls30834343) {
    lambda_start4341: while (true) {
        let f3082 = _f30824342;
        let ls3083 = _ls30834343;
        if (M4.list_p(ls3083) !== false) {
            var if_res3977 = M4.rvoid();
        } else {
            var if_res3977 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("remf*"), $rjs_core.UString.make("list?"), 1, f3082, ls3083);
        }
        if_res3977;
        if (M4.procedure_p(f3082) !== false) {
            var if_res3978 = M4.procedure_arity_includes_p(f3082, 1);
        } else {
            var if_res3978 = false;
        }
        if (if_res3978 !== false) {
            var if_res3979 = M4.rvoid();
        } else {
            var if_res3979 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("remf*"), $rjs_core.UString.make("(-> any/c any/c)"), 0, f3082, ls3083);
        }
        if_res3979;
        if (M4.null_p(ls3083) !== false) {
            return $rjs_core.Pair.makeList();
        } else {
            if (f3082(M4.car(ls3083)) !== false) {
                _f30824342 = f3082;
                _ls30834343 = M4.cdr(ls3083);
                continue lambda_start4341;
            } else {
                return M4.cons(M4.car(ls3083), remf_times_(f3082, M4.cdr(ls3083)));
            }
        }
    }
};
var index_of3084 = function(ls443085, v453086, __eq__p433087) {
    var ls3088 = ls443085;
    var v3089 = v453086;
    if (M4.eq_p(__eq__p433087, M10.unsafe_undefined) !== false) {
        var if_res3982 = M4.equal_p;
    } else {
        var if_res3982 = __eq__p433087;
    }
    var __eq__p3090 = if_res3982;
    if (M4.list_p(ls3088) !== false) {
        var if_res3983 = M4.rvoid();
    } else {
        var if_res3983 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("index-of"), $rjs_core.UString.make("list?"), 0, ls3088, v3089);
    }
    if_res3983;
    if (M4.procedure_p(__eq__p3090) !== false) {
        var if_res3984 = M4.procedure_arity_includes_p(__eq__p3090, 2);
    } else {
        var if_res3984 = false;
    }
    if (if_res3984 !== false) {
        var if_res3985 = M4.rvoid();
    } else {
        var if_res3985 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("index-of"), $rjs_core.UString.make("(-> any/c any/c any/c)"), 2, ls3088, v3089, __eq__p3090);
    }
    if_res3985;
    var loop3091 = function(_ls30924346, _i30934347) {
        lambda_start4345: while (true) {
            let ls3092 = _ls30924346;
            let i3093 = _i30934347;
            if (M4.null_p(ls3092) !== false) {
                return false;
            } else {
                if (__eq__p3090(M4.car(ls3092), v3089) !== false) {
                    return i3093;
                } else {
                    _ls30924346 = M4.cdr(ls3092);
                    _i30934347 = M4.add1(i3093);
                    continue lambda_start4345;
                }
            }
        }
    };
    return loop3091(ls3088, 0);
};
var cl3988 = function(ls3094, v3095) {
    return index_of3084(ls3094, v3095, M10.unsafe_undefined);
};
var cl3989 = function(ls3096, v3097, __eq__p433098) {
    return index_of3084(ls3096, v3097, __eq__p433098);
};
var index_of = $rjs_core.attachProcedureArity(function() {
    var fixed_lam3990 = {
        '2': cl3988,
        '3': cl3989
    } [arguments.length];
    if (fixed_lam3990 !== undefined) {
        return fixed_lam3990.apply(null, arguments);
    } else {
        return M4.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var index_where = function(ls3099, f3100) {
    if (M4.list_p(ls3099) !== false) {
        var if_res3991 = M4.rvoid();
    } else {
        var if_res3991 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("index-where"), $rjs_core.UString.make("list?"), 0, ls3099, f3100);
    }
    if_res3991;
    if (M4.procedure_p(f3100) !== false) {
        var if_res3992 = M4.procedure_arity_includes_p(f3100, 1);
    } else {
        var if_res3992 = false;
    }
    if (if_res3992 !== false) {
        var if_res3993 = M4.rvoid();
    } else {
        var if_res3993 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("index-where"), $rjs_core.UString.make("(-> any/c any/c)"), 1, ls3099, f3100);
    }
    if_res3993;
    var loop3101 = function(_ls31024353, _i31034354) {
        lambda_start4352: while (true) {
            let ls3102 = _ls31024353;
            let i3103 = _i31034354;
            if (M4.null_p(ls3102) !== false) {
                return false;
            } else {
                if (f3100(M4.car(ls3102)) !== false) {
                    return i3103;
                } else {
                    _ls31024353 = M4.cdr(ls3102);
                    _i31034354 = M4.add1(i3103);
                    continue lambda_start4352;
                }
            }
        }
    };
    return loop3101(ls3099, 0);
};
var indexes_of3104 = function(ls473105, v483106, __eq__p463107) {
    var ls3108 = ls473105;
    var v3109 = v483106;
    if (M4.eq_p(__eq__p463107, M10.unsafe_undefined) !== false) {
        var if_res3996 = M4.equal_p;
    } else {
        var if_res3996 = __eq__p463107;
    }
    var __eq__p3110 = if_res3996;
    if (M4.list_p(ls3108) !== false) {
        var if_res3997 = M4.rvoid();
    } else {
        var if_res3997 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("indexes-of"), $rjs_core.UString.make("list?"), 0, ls3108, v3109);
    }
    if_res3997;
    if (M4.procedure_p(__eq__p3110) !== false) {
        var if_res3998 = M4.procedure_arity_includes_p(__eq__p3110, 2);
    } else {
        var if_res3998 = false;
    }
    if (if_res3998 !== false) {
        var if_res3999 = M4.rvoid();
    } else {
        var if_res3999 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("indexes-of"), $rjs_core.UString.make("(-> any/c any/c any/c)"), 2, ls3108, v3109, __eq__p3110);
    }
    if_res3999;
    var loop3111 = function(_ls31124357, _i31134358) {
        lambda_start4356: while (true) {
            let ls3112 = _ls31124357;
            let i3113 = _i31134358;
            if (M4.null_p(ls3112) !== false) {
                return $rjs_core.Pair.makeList();
            } else {
                if (__eq__p3110(M4.car(ls3112), v3109) !== false) {
                    return M4.cons(i3113, loop3111(M4.cdr(ls3112), M4.add1(i3113)));
                } else {
                    _ls31124357 = M4.cdr(ls3112);
                    _i31134358 = M4.add1(i3113);
                    continue lambda_start4356;
                }
            }
        }
    };
    return loop3111(ls3108, 0);
};
var cl4002 = function(ls3114, v3115) {
    return indexes_of3104(ls3114, v3115, M10.unsafe_undefined);
};
var cl4003 = function(ls3116, v3117, __eq__p463118) {
    return indexes_of3104(ls3116, v3117, __eq__p463118);
};
var indexes_of = $rjs_core.attachProcedureArity(function() {
    var fixed_lam4004 = {
        '2': cl4002,
        '3': cl4003
    } [arguments.length];
    if (fixed_lam4004 !== undefined) {
        return fixed_lam4004.apply(null, arguments);
    } else {
        return M4.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var indexes_where = function(ls3119, f3120) {
    if (M4.list_p(ls3119) !== false) {
        var if_res4005 = M4.rvoid();
    } else {
        var if_res4005 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("indexes-where"), $rjs_core.UString.make("list?"), 0, ls3119, f3120);
    }
    if_res4005;
    if (M4.procedure_p(f3120) !== false) {
        var if_res4006 = M4.procedure_arity_includes_p(f3120, 1);
    } else {
        var if_res4006 = false;
    }
    if (if_res4006 !== false) {
        var if_res4007 = M4.rvoid();
    } else {
        var if_res4007 = M4.raise_argument_error($rjs_core.PrimitiveSymbol.make("indexes-where"), $rjs_core.UString.make("(-> any/c any/c)"), 1, ls3119, f3120);
    }
    if_res4007;
    var loop3121 = function(_ls31224364, _i31234365) {
        lambda_start4363: while (true) {
            let ls3122 = _ls31224364;
            let i3123 = _i31234365;
            if (M4.null_p(ls3122) !== false) {
                return $rjs_core.Pair.makeList();
            } else {
                if (f3120(M4.car(ls3122)) !== false) {
                    return M4.cons(i3123, loop3121(M4.cdr(ls3122), M4.add1(i3123)));
                } else {
                    _ls31224364 = M4.cdr(ls3122);
                    _i31234365 = M4.add1(i3123);
                    continue lambda_start4363;
                }
            }
        }
    };
    return loop3121(ls3119, 0);
};
var __rjs_quoted__ = {};
__rjs_quoted__.remove_duplicates28 = remove_duplicates28;
__rjs_quoted__.add_between = add_between;
__rjs_quoted__.check_duplicates = check_duplicates;
__rjs_quoted__.range_proc = range_proc;
__rjs_quoted__.remove_duplicates = remove_duplicates;
__rjs_quoted__.inclusive_range_proc = inclusive_range_proc;
__rjs_quoted__.add_between23 = add_between23;
__rjs_quoted__.check_duplicates35 = check_duplicates35;
export {
    __rjs_quoted__,
    remf_times_,
    remf,
    cartesian_product,
    group_by,
    argmax,
    argmin,
    in_permutations,
    permutations,
    in_combinations,
    combinations,
    shuffle,
    filter_not,
    append_map,
    partition,
    count,
    filter_map,
    check_duplicates,
    remove_duplicates,
    add_between,
    flatten,
    append_times_,
    drop_common_prefix,
    take_common_prefix,
    split_common_prefix,
    list_prefix_p,
    splitf_at_right,
    dropf_right,
    takef_right,
    split_at_right,
    take_right,
    drop_right,
    splitf_at,
    dropf,
    takef,
    split_at,
    take,
    drop,
    indexes_where,
    indexes_of,
    index_where,
    index_of,
    list_set,
    list_update,
    make_list,
    empty,
    rest,
    last,
    last_pair,
    tenth,
    ninth,
    eighth,
    seventh,
    sixth,
    fifth,
    fourth,
    third,
    second,
    first
};