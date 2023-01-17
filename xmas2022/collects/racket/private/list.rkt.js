import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "./pre-base.rkt.js";
import * as M1 from "./reverse.rkt.js";
import * as M2 from "./map.rkt.js";
import * as M3 from "../../../runtime/kernel.rkt.js";
import * as M4 from "./sort.rkt.js";
import * as M5 from "./kw.rkt.js";
import * as M6 from "../../../runtime/unsafe.rkt.js";
var sort = function(cache_keys_p21339, key11340, lst51341, less_p61342) {
    var lst1343 = lst51341;
    var less_p1344 = less_p61342;
    if (false !== false) {
        var if_res1760 = false;
    } else {
        var if_res1760 = key11340;
    }
    var getkey1345 = if_res1760;
    if (false !== false) {
        var if_res1761 = false;
    } else {
        var if_res1761 = cache_keys_p21339;
    }
    var cache_keys_p1346 = if_res1761;
    if (M3.list_p(lst1343) !== false) {
        var if_res1762 = M3.rvoid();
    } else {
        var if_res1762 = M3.raise_argument_error($rjs_core.PrimitiveSymbol.make("sort"), $rjs_core.UString.make("list?"), lst1343);
    }
    if_res1762;
    if (M3.procedure_p(less_p1344) !== false) {
        var if_res1763 = M3.procedure_arity_includes_p(less_p1344, 2);
    } else {
        var if_res1763 = false;
    }
    if (if_res1763 !== false) {
        var if_res1764 = M3.rvoid();
    } else {
        var if_res1764 = M3.raise_argument_error($rjs_core.PrimitiveSymbol.make("sort"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), less_p1344);
    }
    if_res1764;
    if (getkey1345 !== false) {
        if (M3.procedure_p(getkey1345) !== false) {
            var if_res1765 = M3.procedure_arity_includes_p(getkey1345, 1);
        } else {
            var if_res1765 = false;
        }
        var if_res1766 = M3.not(if_res1765);
    } else {
        var if_res1766 = false;
    }
    if (if_res1766 !== false) {
        var if_res1767 = M3.raise_argument_error($rjs_core.PrimitiveSymbol.make("sort"), $rjs_core.UString.make("(any/c . -> . any/c)"), getkey1345);
    } else {
        var if_res1767 = M3.rvoid();
    }
    if_res1767;
    if (getkey1345 !== false) {
        return M4.sort(lst1343, less_p1344, getkey1345, cache_keys_p1346);
    } else {
        return M4.sort(lst1343, less_p1344);
    }
};
var sort1338 = function(given_kws1347, given_args1348, lst51349, less_p61350) {
    if (M3.pair_p(given_kws1347) !== false) {
        var if_res1769 = M3.eq_p($rjs_core.Keyword.make("cache-keys?"), M3.car(given_kws1347));
    } else {
        var if_res1769 = false;
    }
    var cache_keys_p41351 = if_res1769;
    if (cache_keys_p41351 !== false) {
        var if_res1770 = M3.car(given_args1348);
    } else {
        var if_res1770 = false;
    }
    var cache_keys_p21352 = if_res1770;
    if (cache_keys_p41351 !== false) {
        var if_res1771 = M3.cdr(given_kws1347);
    } else {
        var if_res1771 = given_kws1347;
    }
    var kws775021353 = if_res1771;
    if (cache_keys_p41351 !== false) {
        var if_res1772 = M3.cdr(given_args1348);
    } else {
        var if_res1772 = given_args1348;
    }
    var kw_args775031354 = if_res1772;
    var key31355 = M3.pair_p(kws775021353);
    if (key31355 !== false) {
        var if_res1773 = M3.car(kw_args775031354);
    } else {
        var if_res1773 = false;
    }
    var key11356 = if_res1773;
    return sort(cache_keys_p21352, key11356, lst51349, less_p61350);
};
var cl1777 = function(given_kws1363, given_args1364, lst1365, less_p1366) {
    return sort1338(given_kws1363, given_args1364, lst1365, less_p1366);
};
var temp1779 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1778 = {
        '4': cl1777
    } [arguments.length];
    if (fixed_lam1778 !== undefined) {
        return fixed_lam1778.apply(null, arguments);
    } else {
        return M3.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4]);
var temp1776 = $rjs_core.Pair.makeList($rjs_core.Keyword.make("cache-keys?"), $rjs_core.Keyword.make("key"));
var cl1774 = function(lst1367, less_p1368) {
    return sort1338(M3.rnull, M3.rnull, lst1367, less_p1368);
};
var sort7 = M5.__rjs_quoted__.make_optional_keyword_procedure(function(given_kws1357, given_argc1358) {
    if (M3.__eq_(given_argc1358, 4) !== false) {
        var l1775041359 = given_kws1357;
        if (M3.null_p(l1775041359) !== false) {
            var if_res1781 = l1775041359;
        } else {
            if (M3.eq_p(M3.car(l1775041359), $rjs_core.Keyword.make("cache-keys?")) !== false) {
                var if_res1780 = M3.cdr(l1775041359);
            } else {
                var if_res1780 = l1775041359;
            }
            var if_res1781 = if_res1780;
        }
        var l1775041360 = if_res1781;
        var l1775051361 = l1775041360;
        if (M3.null_p(l1775051361) !== false) {
            var if_res1783 = l1775051361;
        } else {
            if (M3.eq_p(M3.car(l1775051361), $rjs_core.Keyword.make("key")) !== false) {
                var if_res1782 = M3.cdr(l1775051361);
            } else {
                var if_res1782 = l1775051361;
            }
            var if_res1783 = if_res1782;
        }
        var l1775051362 = if_res1783;
        return M3.null_p(l1775051362);
    } else {
        return false;
    }
}, temp1779, M3.rnull, temp1776, $rjs_core.attachProcedureArity(function() {
    var fixed_lam1775 = {
        '2': cl1774
    } [arguments.length];
    if (fixed_lam1775 !== undefined) {
        return fixed_lam1775.apply(null, arguments);
    } else {
        return M3.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2]));
var do_remove = function(who1369, item1370, list1371, equal_p1372) {
    if (M3.list_p(list1371) !== false) {
        var if_res1785 = M3.rvoid();
    } else {
        var if_res1785 = M3.raise_argument_error(who1369, $rjs_core.UString.make("list?"), list1371);
    }
    if_res1785;
    var loop1373 = function(list1374) {
        if (M3.null_p(list1374) !== false) {
            return list1374;
        } else {
            if (equal_p1372(item1370, M3.car(list1374)) !== false) {
                return M3.cdr(list1374);
            } else {
                var next1375 = loop1373(M3.cdr(list1374));
                if (M3.eq_p(next1375, M3.cdr(list1374)) !== false) {
                    return list1374;
                } else {
                    return M3.cons(M3.car(list1374), next1375);
                }
            }
        }
    };
    return loop1373(list1371);
};
var cl1789 = function(item1376, list1377) {
    return do_remove($rjs_core.PrimitiveSymbol.make("remove"), item1376, list1377, M3.equal_p);
};
var cl1790 = function(item1378, list1379, equal_p1380) {
    if (M3.procedure_p(equal_p1380) !== false) {
        var if_res1792 = M3.procedure_arity_includes_p(equal_p1380, 2);
    } else {
        var if_res1792 = false;
    }
    if (if_res1792 !== false) {
        var if_res1793 = M3.rvoid();
    } else {
        var if_res1793 = M3.raise_argument_error($rjs_core.PrimitiveSymbol.make("remove"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), equal_p1380);
    }
    if_res1793;
    return do_remove($rjs_core.PrimitiveSymbol.make("remove"), item1378, list1379, equal_p1380);
};
var remove = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1791 = {
        '2': cl1789,
        '3': cl1790
    } [arguments.length];
    if (fixed_lam1791 !== undefined) {
        return fixed_lam1791.apply(null, arguments);
    } else {
        return M3.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var remq = function(item1381, list1382) {
    return do_remove($rjs_core.PrimitiveSymbol.make("remq"), item1381, list1382, M3.eq_p);
};
var remv = function(item1383, list1384) {
    return do_remove($rjs_core.PrimitiveSymbol.make("remv"), item1383, list1384, M3.eqv_p);
};
var remw = function(item1385, list1386) {
    return do_remove($rjs_core.PrimitiveSymbol.make("remw"), item1385, list1386, M3.equal_always_p);
};
var do_remove_times_ = function(who1387, l1388, r1389, equal_p1390) {
    if (M3.list_p(l1388) !== false) {
        var if_res1794 = M3.rvoid();
    } else {
        var if_res1794 = M3.raise_argument_error(who1387, $rjs_core.UString.make("list?"), l1388);
    }
    if_res1794;
    if (M3.list_p(r1389) !== false) {
        var if_res1795 = M3.rvoid();
    } else {
        var if_res1795 = M3.raise_argument_error(who1387, $rjs_core.UString.make("list?"), r1389);
    }
    if_res1795;
    var rloop1391 = function(r1392) {
        if (M3.null_p(r1392) !== false) {
            return r1392;
        } else {
            var first_r1393 = M3.car(r1392);
            var loop1394 = function(_l_rest13952012) {
                lambda_start2011: while (true) {
                    let l_rest1395 = _l_rest13952012;
                    if (M3.null_p(l_rest1395) !== false) {
                        var next1396 = rloop1391(M3.cdr(r1392));
                        if (M3.eq_p(next1396, M3.cdr(r1392)) !== false) {
                            return r1392;
                        } else {
                            return M3.cons(first_r1393, next1396);
                        }
                    } else {
                        if (equal_p1390(M3.car(l_rest1395), first_r1393) !== false) {
                            return rloop1391(M3.cdr(r1392));
                        } else {
                            _l_rest13952012 = M3.cdr(l_rest1395);
                            continue lambda_start2011;
                        }
                    }
                }
            };
            return loop1394(l1388);
        }
    };
    return rloop1391(r1389);
};
var cl1800 = function(l1397, r1398) {
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remove*"), l1397, r1398, M3.equal_p);
};
var cl1801 = function(l1399, r1400, equal_p1401) {
    if (M3.procedure_p(equal_p1401) !== false) {
        var if_res1803 = M3.procedure_arity_includes_p(equal_p1401, 2);
    } else {
        var if_res1803 = false;
    }
    if (if_res1803 !== false) {
        var if_res1804 = M3.rvoid();
    } else {
        var if_res1804 = M3.raise_argument_error($rjs_core.PrimitiveSymbol.make("remove*"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), equal_p1401);
    }
    if_res1804;
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remove*"), l1399, r1400, equal_p1401);
};
var remove_times_ = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1802 = {
        '2': cl1800,
        '3': cl1801
    } [arguments.length];
    if (fixed_lam1802 !== undefined) {
        return fixed_lam1802.apply(null, arguments);
    } else {
        return M3.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var remq_times_ = function(l1402, r1403) {
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remq*"), l1402, r1403, M3.eq_p);
};
var remv_times_ = function(l1404, r1405) {
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remv*"), l1404, r1405, M3.eqv_p);
};
var remw_times_ = function(l1406, r1407) {
    return do_remove_times_($rjs_core.PrimitiveSymbol.make("remw*"), l1406, r1407, M3.equal_always_p);
};
var memf = function(f1408, list1409) {
    if (M3.procedure_p(f1408) !== false) {
        var if_res1805 = M3.procedure_arity_includes_p(f1408, 1);
    } else {
        var if_res1805 = false;
    }
    if (if_res1805 !== false) {
        var if_res1806 = M3.rvoid();
    } else {
        var if_res1806 = M3.raise_argument_error($rjs_core.PrimitiveSymbol.make("memf"), $rjs_core.UString.make("(any/c . -> any/c)"), f1408);
    }
    if_res1806;
    var loop1410 = function(_l14112021) {
        lambda_start2020: while (true) {
            let l1411 = _l14112021;
            if (M3.null_p(l1411) !== false) {
                return false;
            } else {
                if (M3.not(M3.pair_p(l1411)) !== false) {
                    return M3.raise_mismatch_error($rjs_core.PrimitiveSymbol.make("memf"), $rjs_core.UString.make("not a proper list: "), list1409);
                } else {
                    if (f1408(M3.car(l1411)) !== false) {
                        return l1411;
                    } else {
                        _l14112021 = M3.cdr(l1411);
                        continue lambda_start2020;
                    }
                }
            }
        }
    };
    return loop1410(list1409);
};
var findf = function(f1412, list1413) {
    if (M3.procedure_p(f1412) !== false) {
        var if_res1810 = M3.procedure_arity_includes_p(f1412, 1);
    } else {
        var if_res1810 = false;
    }
    if (if_res1810 !== false) {
        var if_res1811 = M3.rvoid();
    } else {
        var if_res1811 = M3.raise_argument_error($rjs_core.PrimitiveSymbol.make("findf"), $rjs_core.UString.make("(any/c . -> . any/c)"), f1412);
    }
    if_res1811;
    var loop1414 = function(_l14152024) {
        lambda_start2023: while (true) {
            let l1415 = _l14152024;
            if (M3.null_p(l1415) !== false) {
                return false;
            } else {
                if (M3.not(M3.pair_p(l1415)) !== false) {
                    return M3.raise_mismatch_error($rjs_core.PrimitiveSymbol.make("findf"), $rjs_core.UString.make("not a proper list: "), list1413);
                } else {
                    var a1416 = M3.car(l1415);
                    if (f1412(a1416) !== false) {
                        return a1416;
                    } else {
                        _l14152024 = M3.cdr(l1415);
                        continue lambda_start2023;
                    }
                }
            }
        }
    };
    return loop1414(list1413);
};
var bad_list = function(who1417, orig_l1418) {
    return M3.raise_mismatch_error(who1417, $rjs_core.UString.make("not a proper list: "), orig_l1418);
};
var bad_item = function(who1419, a1420, orig_l1421) {
    return M3.raise_arguments_error(who1419, $rjs_core.UString.make("non-pair found in list"), $rjs_core.UString.make("non-pair"), a1420, $rjs_core.UString.make("list"), orig_l1421);
};
var assq1422 = function(x1427, l1428) {
    var loop1429 = function(_l14302029, _t14312030) {
        lambda_start2028: while (true) {
            let l1430 = _l14302029;
            let t1431 = _t14312030;
            if (M3.pair_p(l1430) !== false) {
                var a1432 = M6.unsafe_car(l1430);
                if (M3.pair_p(a1432) !== false) {
                    if (M3.eq_p(x1427, M6.unsafe_car(a1432)) !== false) {
                        return a1432;
                    } else {
                        var l1433 = M6.unsafe_cdr(l1430);
                        if (M3.pair_p(l1433) !== false) {
                            var a1434 = M6.unsafe_car(l1433);
                            if (M3.pair_p(a1434) !== false) {
                                if (M3.eq_p(x1427, M6.unsafe_car(a1434)) !== false) {
                                    return a1434;
                                } else {
                                    var t1435 = M6.unsafe_cdr(t1431);
                                    var l1436 = M6.unsafe_cdr(l1433);
                                    if (M3.eq_p(l1436, t1435) !== false) {
                                        return bad_list($rjs_core.PrimitiveSymbol.make("assq"), l1428);
                                    } else {
                                        _l14302029 = l1436;
                                        _t14312030 = t1435;
                                        continue lambda_start2028;
                                    }
                                }
                            } else {
                                return bad_item($rjs_core.PrimitiveSymbol.make("assq"), a1434, l1428);
                            }
                        } else {
                            if (M3.null_p(l1433) !== false) {
                                return false;
                            } else {
                                return bad_list($rjs_core.PrimitiveSymbol.make("assq"), l1428);
                            }
                        }
                    }
                } else {
                    return bad_item($rjs_core.PrimitiveSymbol.make("assq"), a1432, l1428);
                }
            } else {
                if (M3.null_p(l1430) !== false) {
                    return false;
                } else {
                    return bad_list($rjs_core.PrimitiveSymbol.make("assq"), l1428);
                }
            }
        }
    };
    return loop1429(l1428, l1428);
};
var assv1423 = function(x1437, l1438) {
    var loop1439 = function(_l14402033, _t14412034) {
        lambda_start2032: while (true) {
            let l1440 = _l14402033;
            let t1441 = _t14412034;
            if (M3.pair_p(l1440) !== false) {
                var a1442 = M6.unsafe_car(l1440);
                if (M3.pair_p(a1442) !== false) {
                    if (M3.eqv_p(x1437, M6.unsafe_car(a1442)) !== false) {
                        return a1442;
                    } else {
                        var l1443 = M6.unsafe_cdr(l1440);
                        if (M3.pair_p(l1443) !== false) {
                            var a1444 = M6.unsafe_car(l1443);
                            if (M3.pair_p(a1444) !== false) {
                                if (M3.eqv_p(x1437, M6.unsafe_car(a1444)) !== false) {
                                    return a1444;
                                } else {
                                    var t1445 = M6.unsafe_cdr(t1441);
                                    var l1446 = M6.unsafe_cdr(l1443);
                                    if (M3.eq_p(l1446, t1445) !== false) {
                                        return bad_list($rjs_core.PrimitiveSymbol.make("assv"), l1438);
                                    } else {
                                        _l14402033 = l1446;
                                        _t14412034 = t1445;
                                        continue lambda_start2032;
                                    }
                                }
                            } else {
                                return bad_item($rjs_core.PrimitiveSymbol.make("assv"), a1444, l1438);
                            }
                        } else {
                            if (M3.null_p(l1443) !== false) {
                                return false;
                            } else {
                                return bad_list($rjs_core.PrimitiveSymbol.make("assv"), l1438);
                            }
                        }
                    }
                } else {
                    return bad_item($rjs_core.PrimitiveSymbol.make("assv"), a1442, l1438);
                }
            } else {
                if (M3.null_p(l1440) !== false) {
                    return false;
                } else {
                    return bad_list($rjs_core.PrimitiveSymbol.make("assv"), l1438);
                }
            }
        }
    };
    return loop1439(l1438, l1438);
};
var assw1424 = function(x1447, l1448) {
    var loop1449 = function(_l14502037, _t14512038) {
        lambda_start2036: while (true) {
            let l1450 = _l14502037;
            let t1451 = _t14512038;
            if (M3.pair_p(l1450) !== false) {
                var a1452 = M6.unsafe_car(l1450);
                if (M3.pair_p(a1452) !== false) {
                    if (M3.equal_always_p(x1447, M6.unsafe_car(a1452)) !== false) {
                        return a1452;
                    } else {
                        var l1453 = M6.unsafe_cdr(l1450);
                        if (M3.pair_p(l1453) !== false) {
                            var a1454 = M6.unsafe_car(l1453);
                            if (M3.pair_p(a1454) !== false) {
                                if (M3.equal_always_p(x1447, M6.unsafe_car(a1454)) !== false) {
                                    return a1454;
                                } else {
                                    var t1455 = M6.unsafe_cdr(t1451);
                                    var l1456 = M6.unsafe_cdr(l1453);
                                    if (M3.eq_p(l1456, t1455) !== false) {
                                        return bad_list($rjs_core.PrimitiveSymbol.make("assw"), l1448);
                                    } else {
                                        _l14502037 = l1456;
                                        _t14512038 = t1455;
                                        continue lambda_start2036;
                                    }
                                }
                            } else {
                                return bad_item($rjs_core.PrimitiveSymbol.make("assw"), a1454, l1448);
                            }
                        } else {
                            if (M3.null_p(l1453) !== false) {
                                return false;
                            } else {
                                return bad_list($rjs_core.PrimitiveSymbol.make("assw"), l1448);
                            }
                        }
                    }
                } else {
                    return bad_item($rjs_core.PrimitiveSymbol.make("assw"), a1452, l1448);
                }
            } else {
                if (M3.null_p(l1450) !== false) {
                    return false;
                } else {
                    return bad_list($rjs_core.PrimitiveSymbol.make("assw"), l1448);
                }
            }
        }
    };
    return loop1449(l1448, l1448);
};
var cl1842 = function(x1457, l1458) {
    var loop1459 = function(_l14602041, _t14612042) {
        lambda_start2040: while (true) {
            let l1460 = _l14602041;
            let t1461 = _t14612042;
            if (M3.pair_p(l1460) !== false) {
                var a1462 = M6.unsafe_car(l1460);
                if (M3.pair_p(a1462) !== false) {
                    if (M3.equal_p(x1457, M6.unsafe_car(a1462)) !== false) {
                        return a1462;
                    } else {
                        var l1463 = M6.unsafe_cdr(l1460);
                        if (M3.pair_p(l1463) !== false) {
                            var a1464 = M6.unsafe_car(l1463);
                            if (M3.pair_p(a1464) !== false) {
                                if (M3.equal_p(x1457, M6.unsafe_car(a1464)) !== false) {
                                    return a1464;
                                } else {
                                    var t1465 = M6.unsafe_cdr(t1461);
                                    var l1466 = M6.unsafe_cdr(l1463);
                                    if (M3.eq_p(l1466, t1465) !== false) {
                                        return bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l1458);
                                    } else {
                                        _l14602041 = l1466;
                                        _t14612042 = t1465;
                                        continue lambda_start2040;
                                    }
                                }
                            } else {
                                return bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a1464, l1458);
                            }
                        } else {
                            if (M3.null_p(l1463) !== false) {
                                return false;
                            } else {
                                return bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l1458);
                            }
                        }
                    }
                } else {
                    return bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a1462, l1458);
                }
            } else {
                if (M3.null_p(l1460) !== false) {
                    return false;
                } else {
                    return bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l1458);
                }
            }
        }
    };
    return loop1459(l1458, l1458);
};
var cl1843 = function(x1467, l1468, is_equal_p1469) {
    if (M3.procedure_p(is_equal_p1469) !== false) {
        var if_res1854 = M3.procedure_arity_includes_p(is_equal_p1469, 2);
    } else {
        var if_res1854 = false;
    }
    if (if_res1854 !== false) {
        var if_res1855 = M3.rvoid();
    } else {
        var if_res1855 = M3.raise_argument_error($rjs_core.PrimitiveSymbol.make("assoc"), $rjs_core.UString.make("(any/c any/c . -> . any/c)"), is_equal_p1469);
    }
    if_res1855;
    var loop1470 = function(_l14712045, _t14722046) {
        lambda_start2044: while (true) {
            let l1471 = _l14712045;
            let t1472 = _t14722046;
            if (M3.pair_p(l1471) !== false) {
                var a1473 = M6.unsafe_car(l1471);
                if (M3.pair_p(a1473) !== false) {
                    if (is_equal_p1469(x1467, M6.unsafe_car(a1473)) !== false) {
                        return a1473;
                    } else {
                        var l1474 = M6.unsafe_cdr(l1471);
                        if (M3.pair_p(l1474) !== false) {
                            var a1475 = M6.unsafe_car(l1474);
                            if (M3.pair_p(a1475) !== false) {
                                if (is_equal_p1469(x1467, M6.unsafe_car(a1475)) !== false) {
                                    return a1475;
                                } else {
                                    var t1476 = M6.unsafe_cdr(t1472);
                                    var l1477 = M6.unsafe_cdr(l1474);
                                    if (M3.eq_p(l1477, t1476) !== false) {
                                        return bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l1468);
                                    } else {
                                        _l14712045 = l1477;
                                        _t14722046 = t1476;
                                        continue lambda_start2044;
                                    }
                                }
                            } else {
                                return bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a1475, l1468);
                            }
                        } else {
                            if (M3.null_p(l1474) !== false) {
                                return false;
                            } else {
                                return bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l1468);
                            }
                        }
                    }
                } else {
                    return bad_item($rjs_core.PrimitiveSymbol.make("assoc"), a1473, l1468);
                }
            } else {
                if (M3.null_p(l1471) !== false) {
                    return false;
                } else {
                    return bad_list($rjs_core.PrimitiveSymbol.make("assoc"), l1468);
                }
            }
        }
    };
    return loop1470(l1468, l1468);
};
var assoc1425 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1844 = {
        '2': cl1842,
        '3': cl1843
    } [arguments.length];
    if (fixed_lam1844 !== undefined) {
        return fixed_lam1844.apply(null, arguments);
    } else {
        return M3.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var assf1426 = function(f1478, l1479) {
    if (M3.procedure_p(f1478) !== false) {
        var if_res1865 = M3.procedure_arity_includes_p(f1478, 1);
    } else {
        var if_res1865 = false;
    }
    if (if_res1865 !== false) {
        var if_res1866 = M3.rvoid();
    } else {
        var if_res1866 = M3.raise_argument_error($rjs_core.PrimitiveSymbol.make("assf"), $rjs_core.UString.make("(any/c . -> . any/c)"), f1478);
    }
    if_res1866;
    var loop1480 = function(_l14812050, _t14822051) {
        lambda_start2049: while (true) {
            let l1481 = _l14812050;
            let t1482 = _t14822051;
            if (M3.pair_p(l1481) !== false) {
                var a1483 = M6.unsafe_car(l1481);
                if (M3.pair_p(a1483) !== false) {
                    if ((function(_1484, a1485) {
                            return f1478(a1485);
                        })(false, M6.unsafe_car(a1483)) !== false) {
                        return a1483;
                    } else {
                        var l1486 = M6.unsafe_cdr(l1481);
                        if (M3.pair_p(l1486) !== false) {
                            var a1487 = M6.unsafe_car(l1486);
                            if (M3.pair_p(a1487) !== false) {
                                if ((function(_1488, a1489) {
                                        return f1478(a1489);
                                    })(false, M6.unsafe_car(a1487)) !== false) {
                                    return a1487;
                                } else {
                                    var t1490 = M6.unsafe_cdr(t1482);
                                    var l1491 = M6.unsafe_cdr(l1486);
                                    if (M3.eq_p(l1491, t1490) !== false) {
                                        return bad_list($rjs_core.PrimitiveSymbol.make("assf"), l1479);
                                    } else {
                                        _l14812050 = l1491;
                                        _t14822051 = t1490;
                                        continue lambda_start2049;
                                    }
                                }
                            } else {
                                return bad_item($rjs_core.PrimitiveSymbol.make("assf"), a1487, l1479);
                            }
                        } else {
                            if (M3.null_p(l1486) !== false) {
                                return false;
                            } else {
                                return bad_list($rjs_core.PrimitiveSymbol.make("assf"), l1479);
                            }
                        }
                    }
                } else {
                    return bad_item($rjs_core.PrimitiveSymbol.make("assf"), a1483, l1479);
                }
            } else {
                if (M3.null_p(l1481) !== false) {
                    return false;
                } else {
                    return bad_list($rjs_core.PrimitiveSymbol.make("assf"), l1479);
                }
            }
        }
    };
    return loop1480(l1479, l1479);
};
var let_result1876 = M3.values(assq1422, assv1423, assw1424, assoc1425, assf1426);
var assq = let_result1876.getAt(0);
var assv = let_result1876.getAt(1);
var assw = let_result1876.getAt(2);
var assoc = let_result1876.getAt(3);
var assf = let_result1876.getAt(4);
var mapadd = function(f1492, l1493, last1494) {
    var loop1495 = function(l1496) {
        if (M3.null_p(l1496) !== false) {
            return M3.list(last1494);
        } else {
            return M3.cons(f1492(M3.car(l1496)), loop1495(M3.cdr(l1496)));
        }
    };
    return loop1495(l1493);
};
var check_fold = function(name1497, proc1498, init1499, l1500, more1501) {
    if (M3.procedure_p(proc1498) !== false) {
        var if_res1878 = M3.rvoid();
    } else {
        var if_res1878 = M3.apply(M3.raise_argument_error, name1497, $rjs_core.UString.make("procedure?"), 0, proc1498, init1499, l1500, more1501);
    }
    if_res1878;
    if (M3.list_p(l1500) !== false) {
        var if_res1879 = M3.rvoid();
    } else {
        var if_res1879 = M3.apply(M3.raise_argument_error, name1497, $rjs_core.UString.make("list?"), 2, proc1498, init1499, l1500, more1501);
    }
    if_res1879;
    if (M3.null_p(more1501) !== false) {
        if (M3.procedure_arity_includes_p(proc1498, 2) !== false) {
            return M3.rvoid();
        } else {
            return M3.raise_mismatch_error(name1497, $rjs_core.UString.make("given procedure does not accept 2 arguments: "), proc1498);
        }
    } else {
        var len1502 = M3.length(l1500);
        var loop1503 = function(_remaining15042056, _n15052057) {
            lambda_start2055: while (true) {
                let remaining1504 = _remaining15042056;
                let n1505 = _n15052057;
                if (M3.null_p(remaining1504) !== false) {
                    return M3.rvoid();
                } else {
                    if (M3.list_p(M3.car(remaining1504)) !== false) {
                        var if_res1881 = M3.rvoid();
                    } else {
                        var if_res1881 = M3.apply(M3.raise_argument_error, name1497, $rjs_core.UString.make("list?"), n1505, proc1498, init1499, l1500, more1501);
                    }
                    if_res1881;
                    if (M3.__eq_(len1502, M3.length(M3.car(remaining1504))) !== false) {
                        var if_res1882 = M3.rvoid();
                    } else {
                        var if_res1882 = M3.raise_mismatch_error(name1497, $rjs_core.UString.make("given list does not have the same size as the first list: "), M3.car(remaining1504));
                    }
                    if_res1882;
                    _remaining15042056 = M3.cdr(remaining1504);
                    _n15052057 = M3.add1(n1505);
                    continue lambda_start2055;
                }
            }
        };
        loop1503(more1501, 3);
        if (M3.procedure_arity_includes_p(proc1498, 2 + M3.length(more1501)) !== false) {
            return M3.rvoid();
        } else {
            return M3.raise_mismatch_error(name1497, M3.format($rjs_core.UString.make("given procedure does not accept ~a arguments: "), 2 + M3.length(more1501)), proc1498);
        }
    }
};
var cl1886 = function(f1506, init1507, l1508) {
    check_fold($rjs_core.PrimitiveSymbol.make("foldl"), f1506, init1507, l1508, M3.rnull);
    var loop1509 = function(_init15102060, _l15112061) {
        lambda_start2059: while (true) {
            let init1510 = _init15102060;
            let l1511 = _l15112061;
            if (M3.null_p(l1511) !== false) {
                return init1510;
            } else {
                _init15102060 = f1506(M3.car(l1511), init1510);
                _l15112061 = M3.cdr(l1511);
                continue lambda_start2059;
            }
        }
    };
    return loop1509(init1507, l1508);
};
var cl1887 = $rjs_core.attachProcedureArity(function(f1512, init1513, l1514, ...ls15151891) {
    var ls1515 = $rjs_core.Pair.listFromArray(ls15151891);
    check_fold($rjs_core.PrimitiveSymbol.make("foldl"), f1512, init1513, l1514, ls1515);
    var loop1516 = function(_init15172064, _ls15182065) {
        lambda_start2063: while (true) {
            let init1517 = _init15172064;
            let ls1518 = _ls15182065;
            if (M3.pair_p(M3.car(ls1518)) !== false) {
                _init15172064 = M3.apply(f1512, mapadd(M3.car, ls1518, init1517));
                _ls15182065 = M2.map(M3.cdr, ls1518);
                continue lambda_start2063;
            } else {
                return init1517;
            }
        }
    };
    return loop1516(init1513, M3.cons(l1514, ls1515));
});
var foldl = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1888 = {
        '3': cl1886
    } [arguments.length];
    if (fixed_lam1888 !== undefined) {
        return fixed_lam1888.apply(null, arguments);
    } else {
        if (M3.__gt__eq_(cl1887.length, 1) !== false) {
            return cl1887.apply(null, arguments);
        } else {
            return M3.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
    }
}, [M3.make_arity_at_least(3)]);
var cl1893 = function(f1519, init1520, l1521) {
    check_fold($rjs_core.PrimitiveSymbol.make("foldr"), f1519, init1520, l1521, M3.rnull);
    var loop1522 = function(init1523, l1524) {
        if (M3.null_p(l1524) !== false) {
            return init1523;
        } else {
            return f1519(M3.car(l1524), loop1522(init1523, M3.cdr(l1524)));
        }
    };
    return loop1522(init1520, l1521);
};
var cl1894 = $rjs_core.attachProcedureArity(function(f1525, init1526, l1527, ...ls15281898) {
    var ls1528 = $rjs_core.Pair.listFromArray(ls15281898);
    check_fold($rjs_core.PrimitiveSymbol.make("foldr"), f1525, init1526, l1527, ls1528);
    var loop1529 = function(ls1530) {
        if (M3.pair_p(M3.car(ls1530)) !== false) {
            return M3.apply(f1525, mapadd(M3.car, ls1530, loop1529(M2.map(M3.cdr, ls1530))));
        } else {
            return init1526;
        }
    };
    return loop1529(M3.cons(l1527, ls1528));
});
var foldr = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1895 = {
        '3': cl1893
    } [arguments.length];
    if (fixed_lam1895 !== undefined) {
        return fixed_lam1895.apply(null, arguments);
    } else {
        if (M3.__gt__eq_(cl1894.length, 1) !== false) {
            return cl1894.apply(null, arguments);
        } else {
            return M3.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
    }
}, [M3.make_arity_at_least(3)]);
var filter = function(f1531, list1532) {
    if (M3.procedure_p(f1531) !== false) {
        var if_res1900 = M3.procedure_arity_includes_p(f1531, 1);
    } else {
        var if_res1900 = false;
    }
    if (if_res1900 !== false) {
        var if_res1901 = M3.rvoid();
    } else {
        var if_res1901 = M3.raise_argument_error($rjs_core.PrimitiveSymbol.make("filter"), $rjs_core.UString.make("(any/c . -> . any/c)"), f1531);
    }
    if_res1901;
    if (M3.list_p(list1532) !== false) {
        var if_res1902 = M3.rvoid();
    } else {
        var if_res1902 = M3.raise_argument_error($rjs_core.PrimitiveSymbol.make("filter"), $rjs_core.UString.make("list?"), list1532);
    }
    if_res1902;
    var loop1533 = function(_l15342074, _result15352075) {
        lambda_start2073: while (true) {
            let l1534 = _l15342074;
            let result1535 = _result15352075;
            if (M3.null_p(l1534) !== false) {
                return M1.alt_reverse(result1535);
            } else {
                var temp1904 = M3.cdr(l1534);
                if (f1531(M3.car(l1534)) !== false) {
                    var if_res1903 = M3.cons(M3.car(l1534), result1535);
                } else {
                    var if_res1903 = result1535;
                }
                _l15342074 = temp1904;
                _result15352075 = if_res1903;
                continue lambda_start2073;
            }
        }
    };
    return loop1533(list1532, M3.rnull);
};
var build_vector = function(n1536, fcn1537) {
    if (M3.exact_nonnegative_integer_p(n1536) !== false) {
        var if_res1906 = M3.rvoid();
    } else {
        var if_res1906 = M3.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-vector"), $rjs_core.UString.make("exact-nonnegative-integer?"), n1536);
    }
    if_res1906;
    if (M3.procedure_p(fcn1537) !== false) {
        var if_res1907 = M3.procedure_arity_includes_p(fcn1537, 1);
    } else {
        var if_res1907 = false;
    }
    if (if_res1907 !== false) {
        var if_res1908 = M3.rvoid();
    } else {
        var if_res1908 = M3.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-vector"), $rjs_core.UString.make("(exact-nonnegative-integer? . -> . any/c)"), fcn1537);
    }
    if_res1908;
    var vec1538 = M3.make_vector(n1536);
    var loop1539 = function(_i15402078) {
        lambda_start2077: while (true) {
            let i1540 = _i15402078;
            if (M3.__eq_(i1540, n1536) !== false) {
                return vec1538;
            } else {
                M3.vector_set_bang_(vec1538, i1540, fcn1537(i1540));
                _i15402078 = M3.add1(i1540);
                continue lambda_start2077;
            }
        }
    };
    return loop1539(0);
};
var build_string = function(n1541, fcn1542) {
    if (M3.exact_nonnegative_integer_p(n1541) !== false) {
        var if_res1910 = M3.rvoid();
    } else {
        var if_res1910 = M3.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-string"), $rjs_core.UString.make("exact-nonnegative-integer?"), n1541);
    }
    if_res1910;
    if (M3.procedure_p(fcn1542) !== false) {
        var if_res1911 = M3.procedure_arity_includes_p(fcn1542, 1);
    } else {
        var if_res1911 = false;
    }
    if (if_res1911 !== false) {
        var if_res1912 = M3.rvoid();
    } else {
        var if_res1912 = M3.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-string"), $rjs_core.UString.make("(exact-nonnegative-integer? . -> . char?)"), fcn1542);
    }
    if_res1912;
    var str1543 = M3.make_string(n1541);
    var loop1544 = function(_i15452081) {
        lambda_start2080: while (true) {
            let i1545 = _i15452081;
            if (M3.__eq_(i1545, n1541) !== false) {
                return str1543;
            } else {
                M3.string_set_bang_(str1543, i1545, fcn1542(i1545));
                _i15452081 = M3.add1(i1545);
                continue lambda_start2080;
            }
        }
    };
    return loop1544(0);
};
var build_list = function(n1546, fcn1547) {
    if (M3.exact_nonnegative_integer_p(n1546) !== false) {
        var if_res1914 = M3.rvoid();
    } else {
        var if_res1914 = M3.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-list"), $rjs_core.UString.make("exact-nonnegative-integer?"), n1546);
    }
    if_res1914;
    if (M3.procedure_p(fcn1547) !== false) {
        var if_res1915 = M3.procedure_arity_includes_p(fcn1547, 1);
    } else {
        var if_res1915 = false;
    }
    if (if_res1915 !== false) {
        var if_res1916 = M3.rvoid();
    } else {
        var if_res1916 = M3.raise_argument_error($rjs_core.PrimitiveSymbol.make("build-list"), $rjs_core.UString.make("(exact-nonnegative-integer? . -> . any/c)"), fcn1547);
    }
    if_res1916;
    var recr1548 = function(j1549, i1550) {
        if (M3.zero_p(i1550) !== false) {
            return M3.rnull;
        } else {
            return M3.cons(fcn1547(j1549), recr1548(M3.add1(j1549), M3.sub1(i1550)));
        }
    };
    return recr1548(0, n1546);
};
var pipeline11551 = function(f1552, rfuns1553) {
    return function(x1554) {
        var loop1555 = function(_x15562087, _f15572088, _rfuns15582089) {
            lambda_start2086: while (true) {
                let x1556 = _x15562087;
                let f1557 = _f15572088;
                let rfuns1558 = _rfuns15582089;
                if (M3.null_p(rfuns1558) !== false) {
                    return f1557(x1556);
                } else {
                    _x15562087 = f1557(x1556);
                    _f15572088 = M3.car(rfuns1558);
                    _rfuns15582089 = M3.cdr(rfuns1558);
                    continue lambda_start2086;
                }
            }
        };
        return loop1555(x1554, f1552, rfuns1553);
    };
};
var pipeline_times_1559 = function(f1560, rfuns1561) {
    if (M3.eqv_p(1, M3.procedure_arity(f1560)) !== false) {
        var loop1562 = function(_f15632095, _rfuns15642096) {
            lambda_start2091: while (true) {
                let f1563 = _f15632095;
                let rfuns1564 = _rfuns15642096;
                if (M3.null_p(rfuns1564) !== false) {
                    return f1563;
                } else {
                    var fst1565 = M3.car(rfuns1564);
                    if (M3.eqv_p(1, M3.procedure_arity(fst1565)) !== false) {
                        var if_res1919 = function(x1566) {
                            return fst1565(f1563(x1566));
                        };
                    } else {
                        var if_res1919 = function(x1567) {
                            return M3.call_with_values(function() {
                                return f1563(x1567);
                            }, fst1565);
                        };
                    }
                    _f15632095 = if_res1919;
                    _rfuns15642096 = M3.cdr(rfuns1564);
                    continue lambda_start2091;
                }
            }
        };
        return loop1562(f1560, rfuns1561);
    } else {
        var funs1568 = M1.alt_reverse(M3.cons(f1560, rfuns1561));
        var loop1569 = function(_f15702104, _funs15712105) {
            lambda_start2097: while (true) {
                let f1570 = _f15702104;
                let funs1571 = _funs15712105;
                if (M3.null_p(funs1571) !== false) {
                    return f1570;
                } else {
                    var fst1572 = M3.car(funs1571);
                    if (M3.eqv_p(1, M3.procedure_arity(f1570)) !== false) {
                        if (M3.eqv_p(1, M3.procedure_arity(fst1572)) !== false) {
                            var if_res1922 = function(x1573) {
                                return f1570(fst1572(x1573));
                            };
                        } else {
                            var if_res1922 = $rjs_core.attachProcedureArity(function(...xs15741921) {
                                var xs1574 = $rjs_core.Pair.listFromArray(xs15741921);
                                return f1570(M3.apply(fst1572, xs1574));
                            });
                        }
                        var if_res1925 = if_res1922;
                    } else {
                        if (M3.eqv_p(1, M3.procedure_arity(fst1572)) !== false) {
                            var if_res1924 = function(x1575) {
                                return M3.call_with_values(function() {
                                    return fst1572(x1575);
                                }, f1570);
                            };
                        } else {
                            var if_res1924 = $rjs_core.attachProcedureArity(function(...xs15761923) {
                                var xs1576 = $rjs_core.Pair.listFromArray(xs15761923);
                                return M3.call_with_values(function() {
                                    return M3.apply(fst1572, xs1576);
                                }, f1570);
                            });
                        }
                        var if_res1925 = if_res1924;
                    }
                    _f15702104 = if_res1925;
                    _funs15712105 = M3.cdr(funs1571);
                    continue lambda_start2097;
                }
            }
        };
        return loop1569(M3.car(funs1568), M3.cdr(funs1568));
    }
};
var simple_compose1578 = function(f1579, g1580) {
    var arity1581 = M3.procedure_arity(g1580);
    var let_result1928 = M5.procedure_keywords(g1580);
    var required_kwds1582 = let_result1928.getAt(0);
    var allowed_kwds1583 = let_result1928.getAt(1);
    if (M3.eq_p(1, arity1581) !== false) {
        var if_res1935 = function(x1585) {
            return f1579(g1580(x1585));
        };
    } else {
        var cl1929 = function(x1586) {
            return f1579(g1580(x1586));
        };
        var cl1930 = function(x1587, y1588) {
            return f1579(g1580(x1587, y1588));
        };
        var cl1931 = $rjs_core.attachProcedureArity(function(...args15891934) {
            var args1589 = $rjs_core.Pair.listFromArray(args15891934);
            return f1579(M3.apply(g1580, args1589));
        });
        var if_res1935 = $rjs_core.attachProcedureArity(function() {
            var fixed_lam1932 = {
                '1': cl1929,
                '2': cl1930
            } [arguments.length];
            if (fixed_lam1932 !== undefined) {
                return fixed_lam1932.apply(null, arguments);
            } else {
                if (true !== false) {
                    return cl1931.apply(null, arguments);
                } else {
                    return M3.error($rjs_core.UString.make("case-lambda: invalid case"));
                }
            }
        }, [M3.make_arity_at_least(0)]);
    }
    var composed1584 = if_res1935;
    if (M3.null_p(allowed_kwds1583) !== false) {
        return composed1584;
    } else {
        return M5.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws1590, kw_args1591, ...xs15921936) {
            var xs1592 = $rjs_core.Pair.listFromArray(xs15921936);
            return f1579(M0.keyword_apply(g1580, kws1590, kw_args1591, xs1592));
        }), composed1584);
    }
};
var cl1938 = function(f1593) {
    if (M3.procedure_p(f1593) !== false) {
        return f1593;
    } else {
        return M3.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), 0, f1593);
    }
};
var cl1939 = function(f1594, g1595) {
    if (M3.procedure_p(f1594) !== false) {
        var if_res1945 = M3.rvoid();
    } else {
        var if_res1945 = M3.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), 0, f1594, g1595);
    }
    if_res1945;
    if (M3.procedure_p(g1595) !== false) {
        var if_res1946 = M3.rvoid();
    } else {
        var if_res1946 = M3.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), 1, f1594, g1595);
    }
    if_res1946;
    if (M3.procedure_arity_includes_p(f1594, 1) !== false) {
        var if_res1947 = M3.rvoid();
    } else {
        var if_res1947 = M3.apply(M3.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("(any/c . -> . any/c)"), 0, f1594, $rjs_core.Pair.makeList());
    }
    if_res1947;
    var let_result1948 = M5.procedure_keywords(f1594);
    var req1596 = let_result1948.getAt(0);
    var _1597 = let_result1948.getAt(1);
    if (M3.null_p(req1596) !== false) {
        var if_res1949 = M3.rvoid();
    } else {
        var if_res1949 = M3.apply(M3.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), 0, f1594, $rjs_core.Pair.makeList());
    }
    if_res1949;
    return simple_compose1578(f1594, g1595);
};
var cl1940 = function() {
    return M3.values;
};
var cl1941 = $rjs_core.attachProcedureArity(function(f01598, ...fs015991950) {
    var fs01599 = $rjs_core.Pair.listFromArray(fs015991950);
    var loop1600 = function(_f16012118, _fs16022119, _i16032120, _rfuns16042121) {
        lambda_start2117: while (true) {
            let f1601 = _f16012118;
            let fs1602 = _fs16022119;
            let i1603 = _i16032120;
            let rfuns1604 = _rfuns16042121;
            if (M3.procedure_p(f1601) !== false) {
                var if_res1951 = M3.rvoid();
            } else {
                var if_res1951 = M3.apply(M3.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure?"), i1603, f01598, fs01599);
            }
            if_res1951;
            if (M3.pair_p(fs1602) !== false) {
                if (M3.procedure_arity_includes_p(f1601, 1) !== false) {
                    var if_res1952 = M3.rvoid();
                } else {
                    var if_res1952 = M3.apply(M3.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("(any/c . -> . any/c)"), i1603, f01598, fs01599);
                }
                if_res1952;
                var let_result1953 = M5.procedure_keywords(f1601);
                var req1605 = let_result1953.getAt(0);
                var _1606 = let_result1953.getAt(1);
                if (M3.null_p(req1605) !== false) {
                    var if_res1954 = M3.rvoid();
                } else {
                    var if_res1954 = M3.apply(M3.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose1"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), i1603, f01598, fs01599);
                }
                if_res1954;
                _f16012118 = M3.car(fs1602);
                _fs16022119 = M3.cdr(fs1602);
                _i16032120 = M3.add1(i1603);
                _rfuns16042121 = M3.cons(f1601, rfuns1604);
                continue lambda_start2117;
            } else {
                return simple_compose1578(pipeline11551(M3.car(rfuns1604), M3.cdr(rfuns1604)), f1601);
            }
        }
    };
    return loop1600(f01598, fs01599, 0, $rjs_core.Pair.makeList());
});
var compose11577 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1942 = {
        '1': cl1938,
        '2': cl1939,
        '0': cl1940
    } [arguments.length];
    if (fixed_lam1942 !== undefined) {
        return fixed_lam1942.apply(null, arguments);
    } else {
        if (M3.__gt__eq_(cl1941.length, 1) !== false) {
            return cl1941.apply(null, arguments);
        } else {
            return M3.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
    }
}, [0, M3.make_arity_at_least(1)]);
var simple_compose1608 = function(f1609, g1610) {
    if (M3.eqv_p(1, M3.procedure_arity(f1609)) !== false) {
        var arity1611 = M3.procedure_arity(g1610);
        var let_result1956 = M5.procedure_keywords(g1610);
        var required_kwds1612 = let_result1956.getAt(0);
        var allowed_kwds1613 = let_result1956.getAt(1);
        if (M3.eq_p(1, arity1611) !== false) {
            var if_res1963 = function(x1615) {
                return f1609(g1610(x1615));
            };
        } else {
            var cl1957 = function(x1616) {
                return f1609(g1610(x1616));
            };
            var cl1958 = function(x1617, y1618) {
                return f1609(g1610(x1617, y1618));
            };
            var cl1959 = $rjs_core.attachProcedureArity(function(...args16191962) {
                var args1619 = $rjs_core.Pair.listFromArray(args16191962);
                return f1609(M3.apply(g1610, args1619));
            });
            var if_res1963 = $rjs_core.attachProcedureArity(function() {
                var fixed_lam1960 = {
                    '1': cl1957,
                    '2': cl1958
                } [arguments.length];
                if (fixed_lam1960 !== undefined) {
                    return fixed_lam1960.apply(null, arguments);
                } else {
                    if (true !== false) {
                        return cl1959.apply(null, arguments);
                    } else {
                        return M3.error($rjs_core.UString.make("case-lambda: invalid case"));
                    }
                }
            }, [M3.make_arity_at_least(0)]);
        }
        var composed1614 = if_res1963;
        if (M3.null_p(allowed_kwds1613) !== false) {
            return composed1614;
        } else {
            return M5.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws1620, kw_args1621, ...xs16221964) {
                var xs1622 = $rjs_core.Pair.listFromArray(xs16221964);
                return f1609(M0.keyword_apply(g1610, kws1620, kw_args1621, xs1622));
            }), composed1614);
        }
    } else {
        var arity1623 = M3.procedure_arity(g1610);
        var let_result1966 = M5.procedure_keywords(g1610);
        var required_kwds1624 = let_result1966.getAt(0);
        var allowed_kwds1625 = let_result1966.getAt(1);
        if (M3.eq_p(1, arity1623) !== false) {
            var if_res1973 = function(x1627) {
                return M3.call_with_values(function() {
                    return g1610(x1627);
                }, f1609);
            };
        } else {
            var cl1967 = function(x1628) {
                return M3.call_with_values(function() {
                    return g1610(x1628);
                }, f1609);
            };
            var cl1968 = function(x1629, y1630) {
                return M3.call_with_values(function() {
                    return g1610(x1629, y1630);
                }, f1609);
            };
            var cl1969 = $rjs_core.attachProcedureArity(function(...args16311972) {
                var args1631 = $rjs_core.Pair.listFromArray(args16311972);
                return M3.call_with_values(function() {
                    return M3.apply(g1610, args1631);
                }, f1609);
            });
            var if_res1973 = $rjs_core.attachProcedureArity(function() {
                var fixed_lam1970 = {
                    '1': cl1967,
                    '2': cl1968
                } [arguments.length];
                if (fixed_lam1970 !== undefined) {
                    return fixed_lam1970.apply(null, arguments);
                } else {
                    if (true !== false) {
                        return cl1969.apply(null, arguments);
                    } else {
                        return M3.error($rjs_core.UString.make("case-lambda: invalid case"));
                    }
                }
            }, [M3.make_arity_at_least(0)]);
        }
        var composed1626 = if_res1973;
        if (M3.null_p(allowed_kwds1625) !== false) {
            return composed1626;
        } else {
            return M5.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws1632, kw_args1633, ...xs16341974) {
                var xs1634 = $rjs_core.Pair.listFromArray(xs16341974);
                return M3.call_with_values(function() {
                    return M0.keyword_apply(g1610, kws1632, kw_args1633, xs1634);
                }, f1609);
            }), composed1626);
        }
    }
};
var cl1977 = function(f1635) {
    if (M3.procedure_p(f1635) !== false) {
        return f1635;
    } else {
        return M3.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), 0, f1635);
    }
};
var cl1978 = function(f1636, g1637) {
    if (M3.procedure_p(f1636) !== false) {
        var if_res1984 = M3.rvoid();
    } else {
        var if_res1984 = M3.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), 0, f1636, g1637);
    }
    if_res1984;
    if (M3.procedure_p(g1637) !== false) {
        var if_res1985 = M3.rvoid();
    } else {
        var if_res1985 = M3.raise_argument_error($rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), 1, f1636, g1637);
    }
    if_res1985;
    var let_result1986 = M5.procedure_keywords(f1636);
    var req1638 = let_result1986.getAt(0);
    var _1639 = let_result1986.getAt(1);
    if (M3.null_p(req1638) !== false) {
        var if_res1987 = M3.rvoid();
    } else {
        var if_res1987 = M3.apply(M3.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), 0, f1636, $rjs_core.Pair.makeList());
    }
    if_res1987;
    return simple_compose1608(f1636, g1637);
};
var cl1979 = function() {
    return M3.values;
};
var cl1980 = $rjs_core.attachProcedureArity(function(f01640, ...fs016411988) {
    var fs01641 = $rjs_core.Pair.listFromArray(fs016411988);
    var loop1642 = function(_f16432146, _fs16442147, _i16452148, _rfuns16462149) {
        lambda_start2145: while (true) {
            let f1643 = _f16432146;
            let fs1644 = _fs16442147;
            let i1645 = _i16452148;
            let rfuns1646 = _rfuns16462149;
            if (M3.procedure_p(f1643) !== false) {
                var if_res1989 = M3.rvoid();
            } else {
                var if_res1989 = M3.apply(M3.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure?"), i1645, f01640, fs01641);
            }
            if_res1989;
            if (M3.pair_p(fs1644) !== false) {
                var let_result1990 = M5.procedure_keywords(f1643);
                var req1647 = let_result1990.getAt(0);
                var _1648 = let_result1990.getAt(1);
                if (M3.null_p(req1647) !== false) {
                    var if_res1991 = M3.rvoid();
                } else {
                    var if_res1991 = M3.apply(M3.raise_argument_error, $rjs_core.PrimitiveSymbol.make("compose"), $rjs_core.UString.make("procedure-with-no-required-keywords?"), i1645, f01640, fs01641);
                }
                if_res1991;
                _f16432146 = M3.car(fs1644);
                _fs16442147 = M3.cdr(fs1644);
                _i16452148 = M3.add1(i1645);
                _rfuns16462149 = M3.cons(f1643, rfuns1646);
                continue lambda_start2145;
            } else {
                return simple_compose1608(pipeline_times_1559(M3.car(rfuns1646), M3.cdr(rfuns1646)), f1643);
            }
        }
    };
    return loop1642(f01640, fs01641, 0, $rjs_core.Pair.makeList());
});
var compose1607 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1981 = {
        '1': cl1977,
        '2': cl1978,
        '0': cl1979
    } [arguments.length];
    if (fixed_lam1981 !== undefined) {
        return fixed_lam1981.apply(null, arguments);
    } else {
        if (M3.__gt__eq_(cl1980.length, 1) !== false) {
            return cl1980.apply(null, arguments);
        } else {
            return M3.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
    }
}, [0, M3.make_arity_at_least(1)]);
var let_result1993 = M3.values(compose11577, compose1607);
var compose1 = let_result1993.getAt(0);
var compose = let_result1993.getAt(1);
var __rjs_quoted__ = {};
__rjs_quoted__.sort = sort;
__rjs_quoted__.sort7 = sort7;
export {
    __rjs_quoted__,
    compose1,
    compose,
    build_list,
    build_string,
    build_vector,
    sort,
    filter,
    assoc,
    assw,
    assv,
    assq,
    findf,
    assf,
    memf,
    remove_times_,
    remq_times_,
    remw_times_,
    remv_times_,
    remove,
    remw,
    remq,
    remv,
    foldr,
    foldl
};