import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
import * as M1 from "./reverse.rkt.js";
import * as M2 from "../../../runtime/flfxnum.rkt.js";
import * as M3 from "../../../runtime/read.rkt.js";
import * as M4 from "../../../runtime/unsafe.rkt.js";
import * as M5 from "./sort.rkt.js";
var let_result2268 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("sequence"), false, 1, 0, false);
var struct_do_sequence = let_result2268.getAt(0);
var make_do_sequence = let_result2268.getAt(1);
var do_sequence_p = let_result2268.getAt(2);
var do_sequence_ref = let_result2268.getAt(3);
var do_sequence_set_bang_ = let_result2268.getAt(4);
var let_result2277 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("stream"), function(v1649, si1650) {
    if (M0.vector_p(v1649) !== false) {
        if (M0.__eq_(3, M0.vector_length(v1649)) !== false) {
            if (M0.procedure_p(M0.vector_ref(v1649, 0)) !== false) {
                if (M0.procedure_arity_includes_p(M0.vector_ref(v1649, 0), 1) !== false) {
                    if (M0.procedure_p(M0.vector_ref(v1649, 1)) !== false) {
                        if (M0.procedure_arity_includes_p(M0.vector_ref(v1649, 1), 1) !== false) {
                            if (M0.procedure_p(M0.vector_ref(v1649, 2)) !== false) {
                                var if_res2269 = M0.procedure_arity_includes_p(M0.vector_ref(v1649, 2), 1);
                            } else {
                                var if_res2269 = false;
                            }
                            var if_res2270 = if_res2269;
                        } else {
                            var if_res2270 = false;
                        }
                        var if_res2271 = if_res2270;
                    } else {
                        var if_res2271 = false;
                    }
                    var if_res2272 = if_res2271;
                } else {
                    var if_res2272 = false;
                }
                var if_res2273 = if_res2272;
            } else {
                var if_res2273 = false;
            }
            var if_res2274 = if_res2273;
        } else {
            var if_res2274 = false;
        }
        var if_res2275 = if_res2274;
    } else {
        var if_res2275 = false;
    }
    if (if_res2275 !== false) {
        var if_res2276 = M0.rvoid();
    } else {
        var if_res2276 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("guard-for-prop:stream"), M0.string_append($rjs_core.UString.make("(vector/c (procedure-arity-includes/c 1)\n"), $rjs_core.UString.make("          (procedure-arity-includes/c 1)\n"), $rjs_core.UString.make("          (procedure-arity-includes/c 1))")), v1649);
    }
    if_res2276;
    return M0.vector__gt_immutable_vector(v1649);
}, $rjs_core.Pair.makeList(), true);
var prop_stream = let_result2277.getAt(0);
var stream_via_prop_p = let_result2277.getAt(1);
var stream_ref = let_result2277.getAt(2);
var let_result2280 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("sequence"), function(v1651, si1652) {
    if (M0.procedure_p(v1651) !== false) {
        var if_res2278 = M0.procedure_arity_includes_p(v1651, 1);
    } else {
        var if_res2278 = false;
    }
    if (if_res2278 !== false) {
        var if_res2279 = M0.rvoid();
    } else {
        var if_res2279 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("guard-for-prop:sequence"), $rjs_core.UString.make("(procedure-arity-includes/c 1)"), v1651);
    }
    if_res2279;
    return v1651;
});
var prop_gen_sequence = let_result2280.getAt(0);
var sequence_via_prop_p = let_result2280.getAt(1);
var sequence_ref = let_result2280.getAt(2);
var let_result2284 = M0.make_struct_type_property($rjs_core.PrimitiveSymbol.make("sequence"), function(v1653, sinfo1654) {
    if (M0.procedure_p(v1653) !== false) {
        var if_res2281 = M0.procedure_arity_includes_p(v1653, 1);
    } else {
        var if_res2281 = false;
    }
    if (if_res2281 !== false) {
        var if_res2282 = M0.rvoid();
    } else {
        var if_res2282 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("sequence-property-guard"), $rjs_core.UString.make("(procedure-arity-includes/c 1)"), v1653);
    }
    if_res2282;
    return function(self1655) {
        var s1656 = v1653(self1655);
        if (sequence_p(s1656) !== false) {
            var if_res2283 = M0.rvoid();
        } else {
            var if_res2283 = M0.raise_mismatch_error($rjs_core.PrimitiveSymbol.make("sequence-generate"), $rjs_core.UString.make("procedure (value of prop:sequence) produced a non-sequence: "), s1656);
        }
        if_res2283;
        return s1656;
    };
});
var prop_sequence = let_result2284.getAt(0);
var __sequence_p = let_result2284.getAt(1);
var __sequence_ref = let_result2284.getAt(2);
var stream_p = function(v1657) {
    var or_part1658 = M0.list_p(v1657);
    if (or_part1658 !== false) {
        return or_part1658;
    } else {
        return stream_via_prop_p(v1657);
    }
};
var unsafe_stream_not_empty_p = function(v1659) {
    if (M0.null_p(v1659) !== false) {
        return false;
    } else {
        var or_part1660 = M0.pair_p(v1659);
        if (or_part1660 !== false) {
            return or_part1660;
        } else {
            return M0.not(M4.unsafe_vector_ref(stream_ref(v1659), 0)(v1659));
        }
    }
};
var stream_empty_p = function(v1661) {
    var or_part1662 = M0.null_p(v1661);
    if (or_part1662 !== false) {
        return or_part1662;
    } else {
        if (stream_p(v1661) !== false) {
            if (M0.pair_p(v1661) !== false) {
                return false;
            } else {
                return M4.unsafe_vector_ref(stream_ref(v1661), 0)(v1661);
            }
        } else {
            return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("stream-empty?"), $rjs_core.UString.make("stream?"), v1661);
        }
    }
};
var unsafe_stream_first = function(v1663) {
    if (M0.pair_p(v1663) !== false) {
        return M0.car(v1663);
    } else {
        return M4.unsafe_vector_ref(stream_ref(v1663), 1)(v1663);
    }
};
var stream_first = function(v1664) {
    if (stream_p(v1664) !== false) {
        var if_res2292 = M0.not(stream_empty_p(v1664));
    } else {
        var if_res2292 = false;
    }
    if (if_res2292 !== false) {
        return unsafe_stream_first(v1664);
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("stream-first"), $rjs_core.UString.make("(and/c stream? (not/c stream-empty?))"), v1664);
    }
};
var unsafe_stream_rest = function(v1665) {
    if (M0.pair_p(v1665) !== false) {
        return M0.cdr(v1665);
    } else {
        var r1666 = M4.unsafe_vector_ref(stream_ref(v1665), 2)(v1665);
        if (stream_p(r1666) !== false) {
            var if_res2294 = M0.rvoid();
        } else {
            var if_res2294 = M0.raise_mismatch_error($rjs_core.PrimitiveSymbol.make("stream-rest-guard"), $rjs_core.UString.make("result is not a stream: "), r1666);
        }
        if_res2294;
        return r1666;
    }
};
var stream_rest = function(v1667) {
    if (stream_p(v1667) !== false) {
        var if_res2296 = M0.not(stream_empty_p(v1667));
    } else {
        var if_res2296 = false;
    }
    if (if_res2296 !== false) {
        return unsafe_stream_rest(v1667);
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("stream-rest"), $rjs_core.UString.make("(and/c stream? (not/c stream-empty?))"), v1667);
    }
};
var sequence_p = function(v1668) {
    var or_part1669 = M0.exact_nonnegative_integer_p(v1668);
    if (or_part1669 !== false) {
        return or_part1669;
    } else {
        var or_part1670 = do_sequence_p(v1668);
        if (or_part1670 !== false) {
            return or_part1670;
        } else {
            var or_part1671 = sequence_via_prop_p(v1668);
            if (or_part1671 !== false) {
                return or_part1671;
            } else {
                var or_part1672 = stream_p(v1668);
                if (or_part1672 !== false) {
                    return or_part1672;
                } else {
                    var or_part1673 = M0.mpair_p(v1668);
                    if (or_part1673 !== false) {
                        return or_part1673;
                    } else {
                        var or_part1674 = M0.vector_p(v1668);
                        if (or_part1674 !== false) {
                            return or_part1674;
                        } else {
                            var or_part1675 = M2.flvector_p(v1668);
                            if (or_part1675 !== false) {
                                return or_part1675;
                            } else {
                                var or_part1676 = M2.fxvector_p(v1668);
                                if (or_part1676 !== false) {
                                    return or_part1676;
                                } else {
                                    var or_part1677 = M0.string_p(v1668);
                                    if (or_part1677 !== false) {
                                        return or_part1677;
                                    } else {
                                        var or_part1678 = M0.bytes_p(v1668);
                                        if (or_part1678 !== false) {
                                            return or_part1678;
                                        } else {
                                            var or_part1679 = M0.input_port_p(v1668);
                                            if (or_part1679 !== false) {
                                                return or_part1679;
                                            } else {
                                                var or_part1680 = M0.hash_p(v1668);
                                                if (or_part1680 !== false) {
                                                    return or_part1680;
                                                } else {
                                                    if (__sequence_p(v1668) !== false) {
                                                        return M0.not(M0.struct_type_p(v1668));
                                                    } else {
                                                        return false;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
var make_sequence = function(_who16812693, _v16822694) {
    lambda_start2688: while (true) {
        let who1681 = _who16812693;
        let v1682 = _v16822694;
        if (M0.exact_nonnegative_integer_p(v1682) !== false) {
            return __integer_gen(v1682);
        } else {
            if (do_sequence_p(v1682) !== false) {
                var cl2311 = function(pos__gt_vals1683, pos_next1684, init1685, pos_cont_p1686, val_cont_p1687, all_cont_p1688) {
                    return M0.values(pos__gt_vals1683, false, pos_next1684, init1685, pos_cont_p1686, val_cont_p1687, all_cont_p1688);
                };
                var cl2312 = function(pos__gt_vals1689, pre_pos_next1690, pos_next1691, init1692, pos_cont_p1693, val_cont_p1694, all_cont_p1695) {
                    return M0.values(pos__gt_vals1689, pre_pos_next1690, pos_next1691, init1692, pos_cont_p1693, val_cont_p1694, all_cont_p1695);
                };
                return M0.call_with_values(function() {
                    return do_sequence_ref(v1682, 0)();
                }, $rjs_core.attachProcedureArity(function() {
                    var fixed_lam2313 = {
                        '6': cl2311,
                        '7': cl2312
                    } [arguments.length];
                    if (fixed_lam2313 !== undefined) {
                        return fixed_lam2313.apply(null, arguments);
                    } else {
                        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                    }
                }, [6, 7]));
            } else {
                if (M0.mpair_p(v1682) !== false) {
                    return __mlist_gen(v1682);
                } else {
                    if (M0.list_p(v1682) !== false) {
                        return __list_gen(v1682);
                    } else {
                        if (M0.vector_p(v1682) !== false) {
                            return __vector_gen(v1682, 0, M0.vector_length(v1682), 1);
                        } else {
                            if (M2.flvector_p(v1682) !== false) {
                                return __flvector_gen(v1682, 0, M2.__rjs_quoted__.flvector_length(v1682), 1);
                            } else {
                                if (M2.fxvector_p(v1682) !== false) {
                                    return __fxvector_gen(v1682, 0, M2.__rjs_quoted__.fxvector_length(v1682), 1);
                                } else {
                                    if (M0.string_p(v1682) !== false) {
                                        return __string_gen(v1682, 0, M0.string_length(v1682), 1);
                                    } else {
                                        if (M0.bytes_p(v1682) !== false) {
                                            return __bytes_gen(v1682, 0, M0.bytes_length(v1682), 1);
                                        } else {
                                            if (M0.input_port_p(v1682) !== false) {
                                                return __input_port_gen(v1682);
                                            } else {
                                                if (M0.hash_p(v1682) !== false) {
                                                    return __hash_gen(v1682, M0.hash_iterate_key_plus_value, M0.hash_iterate_first, M0.hash_iterate_next);
                                                } else {
                                                    if (sequence_via_prop_p(v1682) !== false) {
                                                        return sequence_ref(v1682)(v1682);
                                                    } else {
                                                        if (__sequence_p(v1682) !== false) {
                                                            _who16812693 = who1681;
                                                            _v16822694 = __sequence_ref(v1682)(v1682);
                                                            continue lambda_start2688;
                                                        } else {
                                                            if (stream_p(v1682) !== false) {
                                                                return __stream_gen(v1682);
                                                            } else {
                                                                var temp2315 = $rjs_core.UString.make("for: expected a sequence for ~a, got something else: ~v");
                                                                if (M0.__eq_(1, M0.length(who1681)) !== false) {
                                                                    var if_res2314 = M0.car(who1681);
                                                                } else {
                                                                    var if_res2314 = who1681;
                                                                }
                                                                return M0.raise(M0.__rjs_quoted__.exn_fail_contract(M0.format(temp2315, if_res2314, v1682), M0.current_continuation_marks()));
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
var let_result2331 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("stream"), false, 3, 0, false, M0.list(M0.cons(prop_stream, M0.vector(function(v1696) {
    var cont_p1697 = range_ref(v1696, 2);
    if (cont_p1697 !== false) {
        return M0.not(cont_p1697(range_ref(v1696, 0)));
    } else {
        return false;
    }
}, function(v1698) {
    return range_ref(v1698, 0);
}, function(v1699) {
    return make_range(range_ref(v1699, 1)(range_ref(v1699, 0)), range_ref(v1699, 1), range_ref(v1699, 2));
})), M0.cons(prop_gen_sequence, function(v1700) {
    return M0.values(M0.values, false, range_ref(v1700, 1), range_ref(v1700, 0), range_ref(v1700, 2), false, false);
})));
var struct_range = let_result2331.getAt(0);
var make_range = let_result2331.getAt(1);
var range_p = let_result2331.getAt(2);
var range_ref = let_result2331.getAt(3);
var range_set_bang_ = let_result2331.getAt(4);
var check_range = function(a1701, b1702, step1703) {
    return check_range_generic($rjs_core.PrimitiveSymbol.make("in-range"), a1701, b1702, step1703);
};
var check_range_generic = function(who1704, a1705, b1706, step1707) {
    if (M0.real_p(a1705) !== false) {
        var if_res2332 = M0.rvoid();
    } else {
        var if_res2332 = M0.raise_argument_error(who1704, $rjs_core.UString.make("real?"), a1705);
    }
    if_res2332;
    if (M0.real_p(b1706) !== false) {
        var if_res2333 = M0.rvoid();
    } else {
        var if_res2333 = M0.raise_argument_error(who1704, $rjs_core.UString.make("real?"), b1706);
    }
    if_res2333;
    if (M0.real_p(step1707) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error(who1704, $rjs_core.UString.make("real?"), step1707);
    }
};
var cl2335 = function(b1708) {
    return in_range(0, b1708, 1);
};
var cl2336 = function(a1709, b1710) {
    return in_range(a1709, b1710, 1);
};
var cl2337 = function(a1711, b1712, step1713) {
    check_range(a1711, b1712, step1713);
    if (M0.__gt__eq_(step1713, 0) !== false) {
        var if_res2339 = function(x1715) {
            return M0.__lt_(x1715, b1712);
        };
    } else {
        var if_res2339 = function(x1716) {
            return M0.__gt_(x1716, b1712);
        };
    }
    var cont_p1714 = if_res2339;
    var inc1717 = function(x1718) {
        return x1718 + step1713;
    };
    return make_range(a1711, inc1717, cont_p1714);
};
var in_range = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2338 = {
        '1': cl2335,
        '2': cl2336,
        '3': cl2337
    } [arguments.length];
    if (fixed_lam2338 !== undefined) {
        return fixed_lam2338.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2, 3]);
var cl2340 = function(a1719, b1720) {
    return in_inclusive_range(a1719, b1720, 1);
};
var cl2341 = function(a1721, b1722, step1723) {
    check_range_generic($rjs_core.PrimitiveSymbol.make("in-inclusive-range"), a1721, b1722, step1723);
    if (M0.__gt__eq_(step1723, 0) !== false) {
        var if_res2343 = function(x1725) {
            return M0.__lt__eq_(x1725, b1722);
        };
    } else {
        var if_res2343 = function(x1726) {
            return M0.__gt__eq_(x1726, b1722);
        };
    }
    var cont_p1724 = if_res2343;
    var inc1727 = function(x1728) {
        return x1728 + step1723;
    };
    return make_range(a1721, inc1727, cont_p1724);
};
var in_inclusive_range = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2342 = {
        '2': cl2340,
        '3': cl2341
    } [arguments.length];
    if (fixed_lam2342 !== undefined) {
        return fixed_lam2342.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3]);
var __integer_gen = function(v1729) {
    return M0.values(M0.values, false, M0.add1, 0, function(i1730) {
        return M0.__lt_(i1730, v1729);
    }, false, false);
};
var check_naturals = function(n1731) {
    if (M0.integer_p(n1731) !== false) {
        if (M0.exact_p(n1731) !== false) {
            var if_res2344 = M0.__gt__eq_(n1731, 0);
        } else {
            var if_res2344 = false;
        }
        var if_res2345 = if_res2344;
    } else {
        var if_res2345 = false;
    }
    if (if_res2345 !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-naturals"), $rjs_core.UString.make("exact-nonnegative-integer?"), n1731);
    }
};
var cl2347 = function() {
    return in_naturals(0);
};
var cl2348 = function(n1732) {
    check_naturals(n1732);
    return make_range(n1732, M0.add1, false);
};
var in_naturals = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2349 = {
        '0': cl2347,
        '1': cl2348
    } [arguments.length];
    if (fixed_lam2349 !== undefined) {
        return fixed_lam2349.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1]);
var let_result2350 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("stream"), false, 1, 0, false, M0.list(M0.cons(prop_stream, M0.vector(function(v1733) {
    return M0.not(M0.pair_p(list_stream_ref(v1733, 0)));
}, function(v1734) {
    return M0.car(list_stream_ref(v1734, 0));
}, function(v1735) {
    return make_list_stream(M0.cdr(list_stream_ref(v1735, 0)));
})), M0.cons(prop_gen_sequence, function(v1736) {
    return M0.values(M0.car, M0.cdr, M0.values, list_stream_ref(v1736, 0), M0.pair_p, false, false);
})));
var struct_list_stream = let_result2350.getAt(0);
var make_list_stream = let_result2350.getAt(1);
var list_stream_p = let_result2350.getAt(2);
var list_stream_ref = let_result2350.getAt(3);
var list_stream_set_bang_ = let_result2350.getAt(4);
var check_list = function(l1737) {
    if (M0.list_p(l1737) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-list"), $rjs_core.UString.make("list?"), l1737);
    }
};
var in_list = function(l1738) {
    check_list(l1738);
    return make_list_stream(l1738);
};
var __list_gen = function(l1739) {
    return M0.values(M0.car, M0.cdr, M0.values, l1739, M0.pair_p, false, false);
};
var in_mlist = function(l1740) {
    var or_part1741 = M0.null_p(l1740);
    if (or_part1741 !== false) {
        var if_res2352 = or_part1741;
    } else {
        var if_res2352 = M0.mpair_p(l1740);
    }
    if (if_res2352 !== false) {
        var if_res2353 = M0.rvoid();
    } else {
        var if_res2353 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-mlist"), $rjs_core.UString.make("(or/c mpair? null)"), l1740);
    }
    if_res2353;
    return make_do_sequence(function() {
        return __mlist_gen(l1740);
    });
};
var __mlist_gen = function(l1742) {
    return M0.values(M0.mcar, false, M0.mcdr, l1742, M0.mpair_p, false, false);
};
var in_input_port_bytes = function(p1743) {
    if (M0.input_port_p(p1743) !== false) {
        var if_res2354 = M0.rvoid();
    } else {
        var if_res2354 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-input-port-bytes"), $rjs_core.UString.make("input-port?"), p1743);
    }
    if_res2354;
    return make_do_sequence(function() {
        return __input_port_gen(p1743);
    });
};
var __input_port_gen = function(p1744) {
    return M0.values(M0.__rjs_quoted__.read_byte, false, M0.values, p1744, false, function(x1745) {
        return M0.not(M0.__rjs_quoted__.eof_object_p(x1745));
    }, false);
};
var in_input_port_chars = function(p1746) {
    if (M0.input_port_p(p1746) !== false) {
        var if_res2355 = M0.rvoid();
    } else {
        var if_res2355 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-input-port-chars"), $rjs_core.UString.make("input-port?"), p1746);
    }
    if_res2355;
    return in_producer(function() {
        return M0.__rjs_quoted__.read_char(p1746);
    }, M0.__rjs_quoted__.eof);
};
var check_in_port = function(r1747, p1748) {
    if (M0.procedure_p(r1747) !== false) {
        var if_res2356 = M0.procedure_arity_includes_p(r1747, 1);
    } else {
        var if_res2356 = false;
    }
    if (if_res2356 !== false) {
        var if_res2357 = M0.rvoid();
    } else {
        var if_res2357 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-port"), $rjs_core.UString.make("(procedure-arity-includes/c 1)"), r1747);
    }
    if_res2357;
    if (M0.input_port_p(p1748) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-port"), $rjs_core.UString.make("input-port?"), p1748);
    }
};
var cl2359 = function() {
    return in_port(M3.__rjs_quoted__.read, M0.current_input_port());
};
var cl2360 = function(r1749) {
    return in_port(r1749, M0.current_input_port());
};
var cl2361 = function(r1750, p1751) {
    check_in_port(r1750, p1751);
    return in_producer(function() {
        return r1750(p1751);
    }, M0.__rjs_quoted__.eof);
};
var in_port = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2362 = {
        '0': cl2359,
        '1': cl2360,
        '2': cl2361
    } [arguments.length];
    if (fixed_lam2362 !== undefined) {
        return fixed_lam2362.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1, 2]);
var check_in_lines = function(p1752, mode1753) {
    if (M0.input_port_p(p1752) !== false) {
        var if_res2363 = M0.rvoid();
    } else {
        var if_res2363 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-lines"), $rjs_core.UString.make("input-port?"), p1752);
    }
    if_res2363;
    if (M0.memq(mode1753, $rjs_core.Pair.makeList($rjs_core.PrimitiveSymbol.make("linefeed"), $rjs_core.PrimitiveSymbol.make("return"), $rjs_core.PrimitiveSymbol.make("return-linefeed"), $rjs_core.PrimitiveSymbol.make("any"), $rjs_core.PrimitiveSymbol.make("any-one"))) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-lines"), $rjs_core.UString.make("(or/c 'linefeed 'return 'return-linefeed 'any 'any-one)"), mode1753);
    }
};
var cl2365 = function() {
    return in_lines(M0.current_input_port(), $rjs_core.PrimitiveSymbol.make("any"));
};
var cl2366 = function(p1754) {
    return in_lines(p1754, $rjs_core.PrimitiveSymbol.make("any"));
};
var cl2367 = function(p1755, mode1756) {
    check_in_lines(p1755, mode1756);
    return in_producer(function() {
        return M0.__rjs_quoted__.read_line(p1755, mode1756);
    }, M0.__rjs_quoted__.eof);
};
var in_lines = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2368 = {
        '0': cl2365,
        '1': cl2366,
        '2': cl2367
    } [arguments.length];
    if (fixed_lam2368 !== undefined) {
        return fixed_lam2368.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1, 2]);
var check_in_bytes_lines = function(p1757, mode1758) {
    if (M0.input_port_p(p1757) !== false) {
        var if_res2369 = M0.rvoid();
    } else {
        var if_res2369 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-bytes-lines"), $rjs_core.UString.make("input-port"), p1757);
    }
    if_res2369;
    if (M0.memq(mode1758, $rjs_core.Pair.makeList($rjs_core.PrimitiveSymbol.make("linefeed"), $rjs_core.PrimitiveSymbol.make("return"), $rjs_core.PrimitiveSymbol.make("return-linefeed"), $rjs_core.PrimitiveSymbol.make("any"), $rjs_core.PrimitiveSymbol.make("any-one"))) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-bytes-lines"), $rjs_core.UString.make("(or/c 'linefeed 'return 'return-linefeed 'any 'any-one)"), mode1758);
    }
};
var cl2371 = function() {
    return in_bytes_lines(M0.current_input_port(), $rjs_core.PrimitiveSymbol.make("any"));
};
var cl2372 = function(p1759) {
    return in_bytes_lines(p1759, $rjs_core.PrimitiveSymbol.make("any"));
};
var cl2373 = function(p1760, mode1761) {
    check_in_bytes_lines(p1760, mode1761);
    return in_producer(function() {
        return M0.__rjs_quoted__.read_bytes_line(p1760, mode1761);
    }, M0.__rjs_quoted__.eof);
};
var in_bytes_lines = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2374 = {
        '0': cl2371,
        '1': cl2372,
        '2': cl2373
    } [arguments.length];
    if (fixed_lam2374 !== undefined) {
        return fixed_lam2374.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1, 2]);
var in_stream = function(l1762) {
    if (stream_p(l1762) !== false) {
        var if_res2375 = M0.rvoid();
    } else {
        var if_res2375 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-stream"), $rjs_core.UString.make("stream?"), l1762);
    }
    if_res2375;
    return make_do_sequence(function() {
        return __stream_gen(l1762);
    });
};
var __stream_gen = function(l1763) {
    return M0.values(unsafe_stream_first, unsafe_stream_rest, M0.values, l1763, unsafe_stream_not_empty_p, false, false);
};
var cl2376 = function(ht1764, __get1765, __first1766, __next1767) {
    return M0.values(function(pos1768) {
        return __get1765(ht1764, pos1768);
    }, false, function(pos1769) {
        return __next1767(ht1764, pos1769);
    }, __first1766(ht1764), function(pos1770) {
        return pos1770;
    }, false, false);
};
var cl2377 = function(ht1771, __get1772, __first1773, __next1774, bad_v1775) {
    return M0.values(function(pos1776) {
        return __get1772(ht1771, pos1776, bad_v1775);
    }, false, function(pos1777) {
        return __next1774(ht1771, pos1777);
    }, __first1773(ht1771), function(pos1778) {
        return pos1778;
    }, false, false);
};
var __hash_gen = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2378 = {
        '4': cl2376,
        '5': cl2377
    } [arguments.length];
    if (fixed_lam2378 !== undefined) {
        return fixed_lam2378.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 5]);
var mutable_p = function(ht1779) {
    return M0.not(M0.immutable_p(ht1779));
};
var check_in_hash = function(ht1780) {
    if ((function(ht1781) {
            return M0.hash_p(ht1781);
        })(ht1780) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-hash"), $rjs_core.UString.make("hash?"), ht1780);
    }
};
var cl2380 = function(ht1783) {
    check_in_hash(ht1783);
    return make_do_sequence(function() {
        return __hash_gen(ht1783, M0.hash_iterate_key_plus_value, M0.hash_iterate_first, M0.hash_iterate_next);
    });
};
var cl2381 = function(ht1784, bad_v1785) {
    check_in_hash(ht1784);
    return make_do_sequence(function() {
        return __hash_gen(ht1784, M0.hash_iterate_key_plus_value, M0.hash_iterate_first, M0.hash_iterate_next, bad_v1785);
    });
};
var in_hash1782 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2382 = {
        '1': cl2380,
        '2': cl2381
    } [arguments.length];
    if (fixed_lam2382 !== undefined) {
        return fixed_lam2382.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var default_in_hash = in_hash1782;
var check_in_mutable_hash = function(ht1786) {
    if ((function(ht1787) {
            if (M0.hash_p(ht1787) !== false) {
                if (mutable_p(ht1787) !== false) {
                    return M0.hash_strong_p(ht1787);
                } else {
                    return false;
                }
            } else {
                return false;
            }
        })(ht1786) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-mutable-hash"), $rjs_core.UString.make("(and/c hash? mutable? hash-strong?)"), ht1786);
    }
};
var cl2386 = function(ht1789) {
    check_in_mutable_hash(ht1789);
    return make_do_sequence(function() {
        return __hash_gen(ht1789, M4.unsafe_mutable_hash_iterate_key_plus_value, M4.unsafe_mutable_hash_iterate_first, M4.unsafe_mutable_hash_iterate_next);
    });
};
var cl2387 = function(ht1790, bad_v1791) {
    check_in_mutable_hash(ht1790);
    return make_do_sequence(function() {
        return __hash_gen(ht1790, M4.unsafe_mutable_hash_iterate_key_plus_value, M4.unsafe_mutable_hash_iterate_first, M4.unsafe_mutable_hash_iterate_next, bad_v1791);
    });
};
var in_mutable_hash1788 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2388 = {
        '1': cl2386,
        '2': cl2387
    } [arguments.length];
    if (fixed_lam2388 !== undefined) {
        return fixed_lam2388.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var default_in_mutable_hash = in_mutable_hash1788;
var check_in_immutable_hash = function(ht1792) {
    if ((function(ht1793) {
            if (M0.hash_p(ht1793) !== false) {
                return M0.immutable_p(ht1793);
            } else {
                return false;
            }
        })(ht1792) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-immutable-hash"), $rjs_core.UString.make("(and/c hash? immutable?)"), ht1792);
    }
};
var cl2391 = function(ht1795) {
    check_in_immutable_hash(ht1795);
    return make_do_sequence(function() {
        return __hash_gen(ht1795, M4.unsafe_immutable_hash_iterate_key_plus_value, M4.unsafe_immutable_hash_iterate_first, M4.unsafe_immutable_hash_iterate_next);
    });
};
var cl2392 = function(ht1796, bad_v1797) {
    check_in_immutable_hash(ht1796);
    return make_do_sequence(function() {
        return __hash_gen(ht1796, M4.unsafe_immutable_hash_iterate_key_plus_value, M4.unsafe_immutable_hash_iterate_first, M4.unsafe_immutable_hash_iterate_next, bad_v1797);
    });
};
var in_immutable_hash1794 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2393 = {
        '1': cl2391,
        '2': cl2392
    } [arguments.length];
    if (fixed_lam2393 !== undefined) {
        return fixed_lam2393.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var default_in_immutable_hash = in_immutable_hash1794;
var check_in_weak_hash = function(ht1798) {
    if ((function(ht1799) {
            if (M0.hash_p(ht1799) !== false) {
                return M0.hash_weak_p(ht1799);
            } else {
                return false;
            }
        })(ht1798) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-weak-hash"), $rjs_core.UString.make("(and/c hash? hash-weak?)"), ht1798);
    }
};
var cl2396 = function(ht1801) {
    check_in_weak_hash(ht1801);
    return make_do_sequence(function() {
        return __hash_gen(ht1801, M4.__rjs_quoted__.unsafe_weak_hash_iterate_key_plus_value, M4.__rjs_quoted__.unsafe_weak_hash_iterate_first, M4.__rjs_quoted__.unsafe_weak_hash_iterate_next);
    });
};
var cl2397 = function(ht1802, bad_v1803) {
    check_in_weak_hash(ht1802);
    return make_do_sequence(function() {
        return __hash_gen(ht1802, M4.__rjs_quoted__.unsafe_weak_hash_iterate_key_plus_value, M4.__rjs_quoted__.unsafe_weak_hash_iterate_first, M4.__rjs_quoted__.unsafe_weak_hash_iterate_next, bad_v1803);
    });
};
var in_weak_hash1800 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2398 = {
        '1': cl2396,
        '2': cl2397
    } [arguments.length];
    if (fixed_lam2398 !== undefined) {
        return fixed_lam2398.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var default_in_weak_hash = in_weak_hash1800;
var check_in_ephemeron_hash = function(ht1804) {
    if ((function(ht1805) {
            if (M0.hash_p(ht1805) !== false) {
                return M0.__rjs_quoted__.hash_ephemeron_p(ht1805);
            } else {
                return false;
            }
        })(ht1804) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-ephemeron-hash"), $rjs_core.UString.make("(and/c hash? hash-ephemeron?)"), ht1804);
    }
};
var cl2401 = function(ht1807) {
    check_in_ephemeron_hash(ht1807);
    return make_do_sequence(function() {
        return __hash_gen(ht1807, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_key_plus_value, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_first, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_next);
    });
};
var cl2402 = function(ht1808, bad_v1809) {
    check_in_ephemeron_hash(ht1808);
    return make_do_sequence(function() {
        return __hash_gen(ht1808, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_key_plus_value, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_first, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_next, bad_v1809);
    });
};
var in_ephemeron_hash1806 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2403 = {
        '1': cl2401,
        '2': cl2402
    } [arguments.length];
    if (fixed_lam2403 !== undefined) {
        return fixed_lam2403.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var default_in_ephemeron_hash = in_ephemeron_hash1806;
var check_in_hash_keys = function(ht1810) {
    if ((function(ht1811) {
            return M0.hash_p(ht1811);
        })(ht1810) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-hash-keys"), $rjs_core.UString.make("hash?"), ht1810);
    }
};
var cl2405 = function(ht1813) {
    check_in_hash_keys(ht1813);
    return make_do_sequence(function() {
        return __hash_gen(ht1813, M0.hash_iterate_key, M0.hash_iterate_first, M0.hash_iterate_next);
    });
};
var cl2406 = function(ht1814, bad_v1815) {
    check_in_hash_keys(ht1814);
    return make_do_sequence(function() {
        return __hash_gen(ht1814, M0.hash_iterate_key, M0.hash_iterate_first, M0.hash_iterate_next, bad_v1815);
    });
};
var in_hash_keys1812 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2407 = {
        '1': cl2405,
        '2': cl2406
    } [arguments.length];
    if (fixed_lam2407 !== undefined) {
        return fixed_lam2407.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var default_in_hash_keys = in_hash_keys1812;
var check_in_mutable_hash_keys = function(ht1816) {
    if ((function(ht1817) {
            if (M0.hash_p(ht1817) !== false) {
                if (mutable_p(ht1817) !== false) {
                    return M0.hash_strong_p(ht1817);
                } else {
                    return false;
                }
            } else {
                return false;
            }
        })(ht1816) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-mutable-hash-keys"), $rjs_core.UString.make("(and/c hash? mutable? hash-strong?)"), ht1816);
    }
};
var cl2411 = function(ht1819) {
    check_in_mutable_hash_keys(ht1819);
    return make_do_sequence(function() {
        return __hash_gen(ht1819, M4.unsafe_mutable_hash_iterate_key, M4.unsafe_mutable_hash_iterate_first, M4.unsafe_mutable_hash_iterate_next);
    });
};
var cl2412 = function(ht1820, bad_v1821) {
    check_in_mutable_hash_keys(ht1820);
    return make_do_sequence(function() {
        return __hash_gen(ht1820, M4.unsafe_mutable_hash_iterate_key, M4.unsafe_mutable_hash_iterate_first, M4.unsafe_mutable_hash_iterate_next, bad_v1821);
    });
};
var in_mutable_hash_keys1818 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2413 = {
        '1': cl2411,
        '2': cl2412
    } [arguments.length];
    if (fixed_lam2413 !== undefined) {
        return fixed_lam2413.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var default_in_mutable_hash_keys = in_mutable_hash_keys1818;
var check_in_immutable_hash_keys = function(ht1822) {
    if ((function(ht1823) {
            if (M0.hash_p(ht1823) !== false) {
                return M0.immutable_p(ht1823);
            } else {
                return false;
            }
        })(ht1822) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-immutable-hash-keys"), $rjs_core.UString.make("(and/c hash? immutable?)"), ht1822);
    }
};
var cl2416 = function(ht1825) {
    check_in_immutable_hash_keys(ht1825);
    return make_do_sequence(function() {
        return __hash_gen(ht1825, M4.unsafe_immutable_hash_iterate_key, M4.unsafe_immutable_hash_iterate_first, M4.unsafe_immutable_hash_iterate_next);
    });
};
var cl2417 = function(ht1826, bad_v1827) {
    check_in_immutable_hash_keys(ht1826);
    return make_do_sequence(function() {
        return __hash_gen(ht1826, M4.unsafe_immutable_hash_iterate_key, M4.unsafe_immutable_hash_iterate_first, M4.unsafe_immutable_hash_iterate_next, bad_v1827);
    });
};
var in_immutable_hash_keys1824 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2418 = {
        '1': cl2416,
        '2': cl2417
    } [arguments.length];
    if (fixed_lam2418 !== undefined) {
        return fixed_lam2418.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var default_in_immutable_hash_keys = in_immutable_hash_keys1824;
var check_in_weak_hash_keys = function(ht1828) {
    if ((function(ht1829) {
            if (M0.hash_p(ht1829) !== false) {
                return M0.hash_weak_p(ht1829);
            } else {
                return false;
            }
        })(ht1828) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-weak-hash-keys"), $rjs_core.UString.make("(and/c hash? hash-weak?)"), ht1828);
    }
};
var cl2421 = function(ht1831) {
    check_in_weak_hash_keys(ht1831);
    return make_do_sequence(function() {
        return __hash_gen(ht1831, M4.__rjs_quoted__.unsafe_weak_hash_iterate_key, M4.__rjs_quoted__.unsafe_weak_hash_iterate_first, M4.__rjs_quoted__.unsafe_weak_hash_iterate_next);
    });
};
var cl2422 = function(ht1832, bad_v1833) {
    check_in_weak_hash_keys(ht1832);
    return make_do_sequence(function() {
        return __hash_gen(ht1832, M4.__rjs_quoted__.unsafe_weak_hash_iterate_key, M4.__rjs_quoted__.unsafe_weak_hash_iterate_first, M4.__rjs_quoted__.unsafe_weak_hash_iterate_next, bad_v1833);
    });
};
var in_weak_hash_keys1830 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2423 = {
        '1': cl2421,
        '2': cl2422
    } [arguments.length];
    if (fixed_lam2423 !== undefined) {
        return fixed_lam2423.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var default_in_weak_hash_keys = in_weak_hash_keys1830;
var check_in_ephemeron_hash_keys = function(ht1834) {
    if ((function(ht1835) {
            if (M0.hash_p(ht1835) !== false) {
                return M0.__rjs_quoted__.hash_ephemeron_p(ht1835);
            } else {
                return false;
            }
        })(ht1834) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-ephemeron-hash-keys"), $rjs_core.UString.make("(and/c hash? hash-ephemeron?)"), ht1834);
    }
};
var cl2426 = function(ht1837) {
    check_in_ephemeron_hash_keys(ht1837);
    return make_do_sequence(function() {
        return __hash_gen(ht1837, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_key, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_first, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_next);
    });
};
var cl2427 = function(ht1838, bad_v1839) {
    check_in_ephemeron_hash_keys(ht1838);
    return make_do_sequence(function() {
        return __hash_gen(ht1838, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_key, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_first, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_next, bad_v1839);
    });
};
var in_ephemeron_hash_keys1836 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2428 = {
        '1': cl2426,
        '2': cl2427
    } [arguments.length];
    if (fixed_lam2428 !== undefined) {
        return fixed_lam2428.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var default_in_ephemeron_hash_keys = in_ephemeron_hash_keys1836;
var check_in_hash_values = function(ht1840) {
    if ((function(ht1841) {
            return M0.hash_p(ht1841);
        })(ht1840) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-hash-values"), $rjs_core.UString.make("hash?"), ht1840);
    }
};
var cl2430 = function(ht1843) {
    check_in_hash_values(ht1843);
    return make_do_sequence(function() {
        return __hash_gen(ht1843, M0.hash_iterate_value, M0.hash_iterate_first, M0.hash_iterate_next);
    });
};
var cl2431 = function(ht1844, bad_v1845) {
    check_in_hash_values(ht1844);
    return make_do_sequence(function() {
        return __hash_gen(ht1844, M0.hash_iterate_value, M0.hash_iterate_first, M0.hash_iterate_next, bad_v1845);
    });
};
var in_hash_values1842 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2432 = {
        '1': cl2430,
        '2': cl2431
    } [arguments.length];
    if (fixed_lam2432 !== undefined) {
        return fixed_lam2432.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var default_in_hash_values = in_hash_values1842;
var check_in_mutable_hash_values = function(ht1846) {
    if ((function(ht1847) {
            if (M0.hash_p(ht1847) !== false) {
                if (mutable_p(ht1847) !== false) {
                    return M0.hash_strong_p(ht1847);
                } else {
                    return false;
                }
            } else {
                return false;
            }
        })(ht1846) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-mutable-hash-values"), $rjs_core.UString.make("(and/c hash? mutable? hash-strong?)"), ht1846);
    }
};
var cl2436 = function(ht1849) {
    check_in_mutable_hash_values(ht1849);
    return make_do_sequence(function() {
        return __hash_gen(ht1849, M4.unsafe_mutable_hash_iterate_value, M4.unsafe_mutable_hash_iterate_first, M4.unsafe_mutable_hash_iterate_next);
    });
};
var cl2437 = function(ht1850, bad_v1851) {
    check_in_mutable_hash_values(ht1850);
    return make_do_sequence(function() {
        return __hash_gen(ht1850, M4.unsafe_mutable_hash_iterate_value, M4.unsafe_mutable_hash_iterate_first, M4.unsafe_mutable_hash_iterate_next, bad_v1851);
    });
};
var in_mutable_hash_values1848 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2438 = {
        '1': cl2436,
        '2': cl2437
    } [arguments.length];
    if (fixed_lam2438 !== undefined) {
        return fixed_lam2438.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var default_in_mutable_hash_values = in_mutable_hash_values1848;
var check_in_immutable_hash_values = function(ht1852) {
    if ((function(ht1853) {
            if (M0.hash_p(ht1853) !== false) {
                return M0.immutable_p(ht1853);
            } else {
                return false;
            }
        })(ht1852) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-immutable-hash-values"), $rjs_core.UString.make("(and/c hash? immutable?)"), ht1852);
    }
};
var cl2441 = function(ht1855) {
    check_in_immutable_hash_values(ht1855);
    return make_do_sequence(function() {
        return __hash_gen(ht1855, M4.unsafe_immutable_hash_iterate_value, M4.unsafe_immutable_hash_iterate_first, M4.unsafe_immutable_hash_iterate_next);
    });
};
var cl2442 = function(ht1856, bad_v1857) {
    check_in_immutable_hash_values(ht1856);
    return make_do_sequence(function() {
        return __hash_gen(ht1856, M4.unsafe_immutable_hash_iterate_value, M4.unsafe_immutable_hash_iterate_first, M4.unsafe_immutable_hash_iterate_next, bad_v1857);
    });
};
var in_immutable_hash_values1854 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2443 = {
        '1': cl2441,
        '2': cl2442
    } [arguments.length];
    if (fixed_lam2443 !== undefined) {
        return fixed_lam2443.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var default_in_immutable_hash_values = in_immutable_hash_values1854;
var check_in_weak_hash_values = function(ht1858) {
    if ((function(ht1859) {
            if (M0.hash_p(ht1859) !== false) {
                return M0.hash_weak_p(ht1859);
            } else {
                return false;
            }
        })(ht1858) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-weak-hash-values"), $rjs_core.UString.make("(and/c hash? hash-weak?)"), ht1858);
    }
};
var cl2446 = function(ht1861) {
    check_in_weak_hash_values(ht1861);
    return make_do_sequence(function() {
        return __hash_gen(ht1861, M4.__rjs_quoted__.unsafe_weak_hash_iterate_value, M4.__rjs_quoted__.unsafe_weak_hash_iterate_first, M4.__rjs_quoted__.unsafe_weak_hash_iterate_next);
    });
};
var cl2447 = function(ht1862, bad_v1863) {
    check_in_weak_hash_values(ht1862);
    return make_do_sequence(function() {
        return __hash_gen(ht1862, M4.__rjs_quoted__.unsafe_weak_hash_iterate_value, M4.__rjs_quoted__.unsafe_weak_hash_iterate_first, M4.__rjs_quoted__.unsafe_weak_hash_iterate_next, bad_v1863);
    });
};
var in_weak_hash_values1860 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2448 = {
        '1': cl2446,
        '2': cl2447
    } [arguments.length];
    if (fixed_lam2448 !== undefined) {
        return fixed_lam2448.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var default_in_weak_hash_values = in_weak_hash_values1860;
var check_in_ephemeron_hash_values = function(ht1864) {
    if ((function(ht1865) {
            if (M0.hash_p(ht1865) !== false) {
                return M0.__rjs_quoted__.hash_ephemeron_p(ht1865);
            } else {
                return false;
            }
        })(ht1864) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-ephemeron-hash-values"), $rjs_core.UString.make("(and/c hash? hash-ephemeron?)"), ht1864);
    }
};
var cl2451 = function(ht1867) {
    check_in_ephemeron_hash_values(ht1867);
    return make_do_sequence(function() {
        return __hash_gen(ht1867, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_value, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_first, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_next);
    });
};
var cl2452 = function(ht1868, bad_v1869) {
    check_in_ephemeron_hash_values(ht1868);
    return make_do_sequence(function() {
        return __hash_gen(ht1868, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_value, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_first, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_next, bad_v1869);
    });
};
var in_ephemeron_hash_values1866 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2453 = {
        '1': cl2451,
        '2': cl2452
    } [arguments.length];
    if (fixed_lam2453 !== undefined) {
        return fixed_lam2453.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var default_in_ephemeron_hash_values = in_ephemeron_hash_values1866;
var check_in_hash_pairs = function(ht1870) {
    if ((function(ht1871) {
            return M0.hash_p(ht1871);
        })(ht1870) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-hash-pairs"), $rjs_core.UString.make("hash?"), ht1870);
    }
};
var cl2455 = function(ht1873) {
    check_in_hash_pairs(ht1873);
    return make_do_sequence(function() {
        return __hash_gen(ht1873, M0.hash_iterate_pair, M0.hash_iterate_first, M0.hash_iterate_next);
    });
};
var cl2456 = function(ht1874, bad_v1875) {
    check_in_hash_pairs(ht1874);
    return make_do_sequence(function() {
        return __hash_gen(ht1874, M0.hash_iterate_pair, M0.hash_iterate_first, M0.hash_iterate_next, bad_v1875);
    });
};
var in_hash_pairs1872 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2457 = {
        '1': cl2455,
        '2': cl2456
    } [arguments.length];
    if (fixed_lam2457 !== undefined) {
        return fixed_lam2457.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var default_in_hash_pairs = in_hash_pairs1872;
var check_in_mutable_hash_pairs = function(ht1876) {
    if ((function(ht1877) {
            if (M0.hash_p(ht1877) !== false) {
                if (mutable_p(ht1877) !== false) {
                    return M0.hash_strong_p(ht1877);
                } else {
                    return false;
                }
            } else {
                return false;
            }
        })(ht1876) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-mutable-hash-pairs"), $rjs_core.UString.make("(and/c hash? mutable? hash-strong?)"), ht1876);
    }
};
var cl2461 = function(ht1879) {
    check_in_mutable_hash_pairs(ht1879);
    return make_do_sequence(function() {
        return __hash_gen(ht1879, M4.unsafe_mutable_hash_iterate_pair, M4.unsafe_mutable_hash_iterate_first, M4.unsafe_mutable_hash_iterate_next);
    });
};
var cl2462 = function(ht1880, bad_v1881) {
    check_in_mutable_hash_pairs(ht1880);
    return make_do_sequence(function() {
        return __hash_gen(ht1880, M4.unsafe_mutable_hash_iterate_pair, M4.unsafe_mutable_hash_iterate_first, M4.unsafe_mutable_hash_iterate_next, bad_v1881);
    });
};
var in_mutable_hash_pairs1878 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2463 = {
        '1': cl2461,
        '2': cl2462
    } [arguments.length];
    if (fixed_lam2463 !== undefined) {
        return fixed_lam2463.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var default_in_mutable_hash_pairs = in_mutable_hash_pairs1878;
var check_in_immutable_hash_pairs = function(ht1882) {
    if ((function(ht1883) {
            if (M0.hash_p(ht1883) !== false) {
                return M0.immutable_p(ht1883);
            } else {
                return false;
            }
        })(ht1882) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-immutable-hash-pairs"), $rjs_core.UString.make("(and/c hash? immutable?)"), ht1882);
    }
};
var cl2466 = function(ht1885) {
    check_in_immutable_hash_pairs(ht1885);
    return make_do_sequence(function() {
        return __hash_gen(ht1885, M4.unsafe_immutable_hash_iterate_pair, M4.unsafe_immutable_hash_iterate_first, M4.unsafe_immutable_hash_iterate_next);
    });
};
var cl2467 = function(ht1886, bad_v1887) {
    check_in_immutable_hash_pairs(ht1886);
    return make_do_sequence(function() {
        return __hash_gen(ht1886, M4.unsafe_immutable_hash_iterate_pair, M4.unsafe_immutable_hash_iterate_first, M4.unsafe_immutable_hash_iterate_next, bad_v1887);
    });
};
var in_immutable_hash_pairs1884 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2468 = {
        '1': cl2466,
        '2': cl2467
    } [arguments.length];
    if (fixed_lam2468 !== undefined) {
        return fixed_lam2468.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var default_in_immutable_hash_pairs = in_immutable_hash_pairs1884;
var check_in_weak_hash_pairs = function(ht1888) {
    if ((function(ht1889) {
            if (M0.hash_p(ht1889) !== false) {
                return M0.hash_weak_p(ht1889);
            } else {
                return false;
            }
        })(ht1888) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-weak-hash-pairs"), $rjs_core.UString.make("(and/c hash? hash-weak?)"), ht1888);
    }
};
var cl2471 = function(ht1891) {
    check_in_weak_hash_pairs(ht1891);
    return make_do_sequence(function() {
        return __hash_gen(ht1891, M4.__rjs_quoted__.unsafe_weak_hash_iterate_pair, M4.__rjs_quoted__.unsafe_weak_hash_iterate_first, M4.__rjs_quoted__.unsafe_weak_hash_iterate_next);
    });
};
var cl2472 = function(ht1892, bad_v1893) {
    check_in_weak_hash_pairs(ht1892);
    return make_do_sequence(function() {
        return __hash_gen(ht1892, M4.__rjs_quoted__.unsafe_weak_hash_iterate_pair, M4.__rjs_quoted__.unsafe_weak_hash_iterate_first, M4.__rjs_quoted__.unsafe_weak_hash_iterate_next, bad_v1893);
    });
};
var in_weak_hash_pairs1890 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2473 = {
        '1': cl2471,
        '2': cl2472
    } [arguments.length];
    if (fixed_lam2473 !== undefined) {
        return fixed_lam2473.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var default_in_weak_hash_pairs = in_weak_hash_pairs1890;
var check_in_ephemeron_hash_pairs = function(ht1894) {
    if ((function(ht1895) {
            if (M0.hash_p(ht1895) !== false) {
                return M0.__rjs_quoted__.hash_ephemeron_p(ht1895);
            } else {
                return false;
            }
        })(ht1894) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-ephemeron-hash-pairs"), $rjs_core.UString.make("(and/c hash? hash-ephemeron?)"), ht1894);
    }
};
var cl2476 = function(ht1897) {
    check_in_ephemeron_hash_pairs(ht1897);
    return make_do_sequence(function() {
        return __hash_gen(ht1897, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_pair, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_first, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_next);
    });
};
var cl2477 = function(ht1898, bad_v1899) {
    check_in_ephemeron_hash_pairs(ht1898);
    return make_do_sequence(function() {
        return __hash_gen(ht1898, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_pair, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_first, M4.__rjs_quoted__.unsafe_ephemeron_hash_iterate_next, bad_v1899);
    });
};
var in_ephemeron_hash_pairs1896 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2478 = {
        '1': cl2476,
        '2': cl2477
    } [arguments.length];
    if (fixed_lam2478 !== undefined) {
        return fixed_lam2478.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var default_in_ephemeron_hash_pairs = in_ephemeron_hash_pairs1896;
var check_ranges = function(who1900, type_name1901, vec1902, start1903, stop1904, step1905, len1906) {
    if (M0.exact_nonnegative_integer_p(start1903) !== false) {
        var if_res2479 = M0.rvoid();
    } else {
        var if_res2479 = M0.raise_argument_error(who1900, $rjs_core.UString.make("exact-nonnegative-integer?"), start1903);
    }
    if_res2479;
    var or_part1907 = M0.__lt_(start1903, len1906);
    if (or_part1907 !== false) {
        var if_res2480 = or_part1907;
    } else {
        var if_res2480 = M0.__eq_(len1906, start1903, stop1904);
    }
    if (if_res2480 !== false) {
        var if_res2481 = M0.rvoid();
    } else {
        var if_res2481 = M0.__rjs_quoted__.raise_range_error(who1900, type_name1901, $rjs_core.UString.make("starting "), start1903, vec1902, 0, M0.sub1(len1906));
    }
    if_res2481;
    if (M0.exact_integer_p(stop1904) !== false) {
        var if_res2482 = M0.rvoid();
    } else {
        var if_res2482 = M0.raise_argument_error(who1900, $rjs_core.UString.make("exact-integer?"), stop1904);
    }
    if_res2482;
    if (M0.__lt__eq_(-1, stop1904) !== false) {
        var if_res2483 = M0.__lt__eq_(stop1904, len1906);
    } else {
        var if_res2483 = false;
    }
    if (if_res2483 !== false) {
        var if_res2484 = M0.rvoid();
    } else {
        var if_res2484 = M0.__rjs_quoted__.raise_range_error(who1900, type_name1901, $rjs_core.UString.make("stopping "), stop1904, vec1902, -1, len1906);
    }
    if_res2484;
    if (M0.exact_integer_p(step1905) !== false) {
        var if_res2485 = M0.not(M0.zero_p(step1905));
    } else {
        var if_res2485 = false;
    }
    if (if_res2485 !== false) {
        var if_res2486 = M0.rvoid();
    } else {
        var if_res2486 = M0.raise_argument_error(who1900, $rjs_core.UString.make("(and/c exact-integer? (not/c zero?))"), step1905);
    }
    if_res2486;
    if (M0.__lt_(start1903, stop1904) !== false) {
        var if_res2487 = M0.__lt_(step1905, 0);
    } else {
        var if_res2487 = false;
    }
    if (if_res2487 !== false) {
        var if_res2488 = M0.raise_arguments_error(who1900, $rjs_core.UString.make("starting index less than stopping index, but given a negative step"), $rjs_core.UString.make("starting index"), start1903, $rjs_core.UString.make("stopping index"), stop1904, $rjs_core.UString.make("step"), step1905);
    } else {
        var if_res2488 = M0.rvoid();
    }
    if_res2488;
    if (M0.__lt_(stop1904, start1903) !== false) {
        var if_res2489 = M0.__gt_(step1905, 0);
    } else {
        var if_res2489 = false;
    }
    if (if_res2489 !== false) {
        return M0.raise_arguments_error(who1900, $rjs_core.UString.make("starting index more than stopping index, but given a positive step"), $rjs_core.UString.make("starting index"), start1903, $rjs_core.UString.make("stopping index"), stop1904, $rjs_core.UString.make("step"), step1905);
    } else {
        return M0.rvoid();
    }
};
var normalise_inputs = function(who1908, type_name1909, vector_p1910, unsafe_vector_length1911, vec1912, start1913, stop1914, step1915) {
    if (vector_p1910(vec1912) !== false) {
        var if_res2491 = M0.rvoid();
    } else {
        var if_res2491 = M0.raise_argument_error(who1908, type_name1909, vec1912);
    }
    if_res2491;
    var len1916 = unsafe_vector_length1911(vec1912);
    if (stop1914 !== false) {
        var if_res2492 = stop1914;
    } else {
        var if_res2492 = len1916;
    }
    var stop_times_1917 = if_res2492;
    check_ranges(who1908, type_name1909, vec1912, start1913, stop_times_1917, step1915, len1916);
    return M0.values(vec1912, start1913, stop_times_1917, step1915);
};
var unsafe_normalise_inputs = function(unsafe_vector_length1918, vec1919, start1920, stop1921, step1922) {
    var or_part1923 = stop1921;
    if (or_part1923 !== false) {
        var if_res2493 = or_part1923;
    } else {
        var if_res2493 = unsafe_vector_length1918(vec1919);
    }
    return M0.values(vec1919, start1920, if_res2493, step1922);
};
var __vector_gen = function(v1924, start1925, stop1926, step1927) {
    if (M0.__eq_(step1927, 1) !== false) {
        var if_res2495 = M0.add1;
    } else {
        var if_res2495 = function(i1929) {
            return i1929 + step1927;
        };
    }
    if (M0.__gt_(step1927, 0) !== false) {
        var if_res2494 = function(i1930) {
            return M0.__lt_(i1930, stop1926);
        };
    } else {
        var if_res2494 = function(i1931) {
            return M0.__gt_(i1931, stop1926);
        };
    }
    return M0.values(function(i1928) {
        return M4.unsafe_vector_ref(v1924, i1928);
    }, false, if_res2495, start1925, if_res2494, false, false);
};
var cl2496 = function(v1932) {
    return in_vector(v1932, 0, false, 1);
};
var cl2497 = function(v1933, start1934) {
    return in_vector(v1933, start1934, false, 1);
};
var cl2498 = function(v1935, start1936, stop1937) {
    return in_vector(v1935, start1936, stop1937, 1);
};
var cl2499 = function(v1938, start1939, stop1940, step1941) {
    var let_result2501 = normalise_inputs($rjs_core.PrimitiveSymbol.make("in-vector"), $rjs_core.UString.make("vector"), M0.vector_p, M0.vector_length, v1938, start1939, stop1940, step1941);
    var v1942 = let_result2501.getAt(0);
    var start1943 = let_result2501.getAt(1);
    var stop1944 = let_result2501.getAt(2);
    var step1945 = let_result2501.getAt(3);
    return make_do_sequence(function() {
        return __vector_gen(v1942, start1943, stop1944, step1945);
    });
};
var in_vector = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2500 = {
        '1': cl2496,
        '2': cl2497,
        '3': cl2498,
        '4': cl2499
    } [arguments.length];
    if (fixed_lam2500 !== undefined) {
        return fixed_lam2500.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2, 3, 4]);
var check_vector = function(v1946) {
    if (M0.vector_p(v1946) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-vector"), $rjs_core.UString.make("vector"), v1946);
    }
};
var __string_gen = function(v1947, start1948, stop1949, step1950) {
    if (M0.__eq_(step1950, 1) !== false) {
        var if_res2504 = M0.add1;
    } else {
        var if_res2504 = function(i1952) {
            return i1952 + step1950;
        };
    }
    if (M0.__gt_(step1950, 0) !== false) {
        var if_res2503 = function(i1953) {
            return M0.__lt_(i1953, stop1949);
        };
    } else {
        var if_res2503 = function(i1954) {
            return M0.__gt_(i1954, stop1949);
        };
    }
    return M0.values(function(i1951) {
        return M0.string_ref(v1947, i1951);
    }, false, if_res2504, start1948, if_res2503, false, false);
};
var cl2505 = function(v1955) {
    return in_string(v1955, 0, false, 1);
};
var cl2506 = function(v1956, start1957) {
    return in_string(v1956, start1957, false, 1);
};
var cl2507 = function(v1958, start1959, stop1960) {
    return in_string(v1958, start1959, stop1960, 1);
};
var cl2508 = function(v1961, start1962, stop1963, step1964) {
    var let_result2510 = normalise_inputs($rjs_core.PrimitiveSymbol.make("in-string"), $rjs_core.UString.make("string"), M0.string_p, M0.string_length, v1961, start1962, stop1963, step1964);
    var v1965 = let_result2510.getAt(0);
    var start1966 = let_result2510.getAt(1);
    var stop1967 = let_result2510.getAt(2);
    var step1968 = let_result2510.getAt(3);
    return make_do_sequence(function() {
        return __string_gen(v1965, start1966, stop1967, step1968);
    });
};
var in_string = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2509 = {
        '1': cl2505,
        '2': cl2506,
        '3': cl2507,
        '4': cl2508
    } [arguments.length];
    if (fixed_lam2509 !== undefined) {
        return fixed_lam2509.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2, 3, 4]);
var check_string = function(v1969) {
    if (M0.string_p(v1969) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-string"), $rjs_core.UString.make("string"), v1969);
    }
};
var __bytes_gen = function(v1970, start1971, stop1972, step1973) {
    if (M0.__eq_(step1973, 1) !== false) {
        var if_res2513 = M0.add1;
    } else {
        var if_res2513 = function(i1975) {
            return i1975 + step1973;
        };
    }
    if (M0.__gt_(step1973, 0) !== false) {
        var if_res2512 = function(i1976) {
            return M0.__lt_(i1976, stop1972);
        };
    } else {
        var if_res2512 = function(i1977) {
            return M0.__gt_(i1977, stop1972);
        };
    }
    return M0.values(function(i1974) {
        return M4.__rjs_quoted__.unsafe_bytes_ref(v1970, i1974);
    }, false, if_res2513, start1971, if_res2512, false, false);
};
var cl2514 = function(v1978) {
    return in_bytes(v1978, 0, false, 1);
};
var cl2515 = function(v1979, start1980) {
    return in_bytes(v1979, start1980, false, 1);
};
var cl2516 = function(v1981, start1982, stop1983) {
    return in_bytes(v1981, start1982, stop1983, 1);
};
var cl2517 = function(v1984, start1985, stop1986, step1987) {
    var let_result2519 = normalise_inputs($rjs_core.PrimitiveSymbol.make("in-bytes"), $rjs_core.UString.make("bytes"), M0.bytes_p, M0.bytes_length, v1984, start1985, stop1986, step1987);
    var v1988 = let_result2519.getAt(0);
    var start1989 = let_result2519.getAt(1);
    var stop1990 = let_result2519.getAt(2);
    var step1991 = let_result2519.getAt(3);
    return make_do_sequence(function() {
        return __bytes_gen(v1988, start1989, stop1990, step1991);
    });
};
var in_bytes = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2518 = {
        '1': cl2514,
        '2': cl2515,
        '3': cl2516,
        '4': cl2517
    } [arguments.length];
    if (fixed_lam2518 !== undefined) {
        return fixed_lam2518.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2, 3, 4]);
var check_bytes = function(v1992) {
    if (M0.bytes_p(v1992) !== false) {
        return M0.rvoid();
    } else {
        return M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-bytes"), $rjs_core.UString.make("bytes"), v1992);
    }
};
var __flvector_gen = function(v1993, start1994, stop1995, step1996) {
    if (M0.__eq_(step1996, 1) !== false) {
        var if_res2522 = M0.add1;
    } else {
        var if_res2522 = function(i1998) {
            return i1998 + step1996;
        };
    }
    if (M0.__gt_(step1996, 0) !== false) {
        var if_res2521 = function(i1999) {
            return M0.__lt_(i1999, stop1995);
        };
    } else {
        var if_res2521 = function(i2000) {
            return M0.__gt_(i2000, stop1995);
        };
    }
    return M0.values(function(i1997) {
        return M4.__rjs_quoted__.unsafe_flvector_ref(v1993, i1997);
    }, false, if_res2522, start1994, if_res2521, false, false);
};
var __fxvector_gen = function(v2001, start2002, stop2003, step2004) {
    if (M0.__eq_(step2004, 1) !== false) {
        var if_res2524 = M0.add1;
    } else {
        var if_res2524 = function(i2006) {
            return i2006 + step2004;
        };
    }
    if (M0.__gt_(step2004, 0) !== false) {
        var if_res2523 = function(i2007) {
            return M0.__lt_(i2007, stop2003);
        };
    } else {
        var if_res2523 = function(i2008) {
            return M0.__gt_(i2008, stop2003);
        };
    }
    return M0.values(function(i2005) {
        return M4.__rjs_quoted__.unsafe_fxvector_ref(v2001, i2005);
    }, false, if_res2524, start2002, if_res2523, false, false);
};
var stop_before = function(g2009, pred2010) {
    if (sequence_p(g2009) !== false) {
        var if_res2525 = M0.rvoid();
    } else {
        var if_res2525 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("stop-before"), $rjs_core.UString.make("sequence?"), g2009);
    }
    if_res2525;
    if (M0.procedure_p(pred2010) !== false) {
        var if_res2526 = M0.procedure_arity_includes_p(pred2010, 1);
    } else {
        var if_res2526 = false;
    }
    if (if_res2526 !== false) {
        var if_res2527 = M0.rvoid();
    } else {
        var if_res2527 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("stop-before"), $rjs_core.UString.make("(procedure-arity-includes/c 1)"), pred2010);
    }
    if_res2527;
    return make_do_sequence(function() {
        var let_result2528 = make_sequence(false, g2009);
        var pos__gt_val2011 = let_result2528.getAt(0);
        var pre_pos_next2012 = let_result2528.getAt(1);
        var pos_next2013 = let_result2528.getAt(2);
        var init2014 = let_result2528.getAt(3);
        var pos_cont_p2015 = let_result2528.getAt(4);
        var pre_cont_p2016 = let_result2528.getAt(5);
        var post_cont_p2017 = let_result2528.getAt(6);
        var cl2529 = function(val2018) {
            if (pre_cont_p2016 !== false) {
                var if_res2533 = pre_cont_p2016(val2018);
            } else {
                var if_res2533 = true;
            }
            if (if_res2533 !== false) {
                return M0.not(pred2010(val2018));
            } else {
                return false;
            }
        };
        var cl2530 = $rjs_core.attachProcedureArity(function(...vals20192535) {
            var vals2019 = $rjs_core.Pair.listFromArray(vals20192535);
            if (pre_cont_p2016 !== false) {
                var if_res2536 = M0.apply(pre_cont_p2016, vals2019);
            } else {
                var if_res2536 = true;
            }
            if (if_res2536 !== false) {
                return M0.not(M0.apply(pred2010, vals2019));
            } else {
                return false;
            }
        });
        return M0.values(pos__gt_val2011, pre_pos_next2012, pos_next2013, init2014, pos_cont_p2015, $rjs_core.attachProcedureArity(function() {
            var fixed_lam2531 = {
                '1': cl2529
            } [arguments.length];
            if (fixed_lam2531 !== undefined) {
                return fixed_lam2531.apply(null, arguments);
            } else {
                if (true !== false) {
                    return cl2530.apply(null, arguments);
                } else {
                    return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                }
            }
        }, [M0.make_arity_at_least(0)]), post_cont_p2017);
    });
};
var stop_after = function(g2020, pred2021) {
    if (sequence_p(g2020) !== false) {
        var if_res2538 = M0.rvoid();
    } else {
        var if_res2538 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("stop-after"), $rjs_core.UString.make("sequence?"), g2020);
    }
    if_res2538;
    if (M0.procedure_p(pred2021) !== false) {
        var if_res2539 = M0.procedure_arity_includes_p(pred2021, 1);
    } else {
        var if_res2539 = false;
    }
    if (if_res2539 !== false) {
        var if_res2540 = M0.rvoid();
    } else {
        var if_res2540 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("stop-after"), $rjs_core.UString.make("(procedure-arity-includes/c 1)"), pred2021);
    }
    if_res2540;
    return make_do_sequence(function() {
        var let_result2541 = make_sequence(false, g2020);
        var pos__gt_val2022 = let_result2541.getAt(0);
        var pre_pos_next2023 = let_result2541.getAt(1);
        var pos_next2024 = let_result2541.getAt(2);
        var init2025 = let_result2541.getAt(3);
        var pos_cont_p2026 = let_result2541.getAt(4);
        var pre_cont_p2027 = let_result2541.getAt(5);
        var post_cont_p2028 = let_result2541.getAt(6);
        var cl2542 = function(pos2029, val2030) {
            if (post_cont_p2028 !== false) {
                var if_res2546 = post_cont_p2028(pos2029, val2030);
            } else {
                var if_res2546 = true;
            }
            if (if_res2546 !== false) {
                return M0.not(pred2021(val2030));
            } else {
                return false;
            }
        };
        var cl2543 = $rjs_core.attachProcedureArity(function(pos2031, ...vals20322548) {
            var vals2032 = $rjs_core.Pair.listFromArray(vals20322548);
            if (post_cont_p2028 !== false) {
                var if_res2549 = M0.apply(post_cont_p2028, pos2031, vals2032);
            } else {
                var if_res2549 = true;
            }
            if (if_res2549 !== false) {
                return M0.not(M0.apply(pred2021, vals2032));
            } else {
                return false;
            }
        });
        return M0.values(pos__gt_val2022, pre_pos_next2023, pos_next2024, init2025, pos_cont_p2026, pre_cont_p2027, $rjs_core.attachProcedureArity(function() {
            var fixed_lam2544 = {
                '2': cl2542
            } [arguments.length];
            if (fixed_lam2544 !== undefined) {
                return fixed_lam2544.apply(null, arguments);
            } else {
                if (M0.__gt__eq_(cl2543.length, 1) !== false) {
                    return cl2543.apply(null, arguments);
                } else {
                    return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                }
            }
        }, [M0.make_arity_at_least(1)]));
    });
};
var in_indexed = function(g2033) {
    if (sequence_p(g2033) !== false) {
        var if_res2551 = M0.rvoid();
    } else {
        var if_res2551 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-indexed"), $rjs_core.UString.make("sequence?"), g2033);
    }
    if_res2551;
    return make_do_sequence(function() {
        var let_result2552 = make_sequence(false, g2033);
        var pos__gt_val2034 = let_result2552.getAt(0);
        var pre_pos_next2035 = let_result2552.getAt(1);
        var pos_next2036 = let_result2552.getAt(2);
        var init2037 = let_result2552.getAt(3);
        var pos_cont_p2038 = let_result2552.getAt(4);
        var pre_cont_p2039 = let_result2552.getAt(5);
        var post_cont_p2040 = let_result2552.getAt(6);
        if (pre_pos_next2035 !== false) {
            var if_res2557 = function(pos2042) {
                return M0.cons(pre_pos_next2035(M0.car(pos2042)), M0.cdr(pos2042));
            };
        } else {
            var if_res2557 = false;
        }
        var temp2556 = M0.cons(init2037, 0);
        if (pos_cont_p2038 !== false) {
            var if_res2555 = function(pos2044) {
                return pos_cont_p2038(M0.car(pos2044));
            };
        } else {
            var if_res2555 = false;
        }
        if (pre_cont_p2039 !== false) {
            var if_res2554 = function(val2045, idx2046) {
                return pre_cont_p2039(val2045);
            };
        } else {
            var if_res2554 = false;
        }
        if (post_cont_p2040 !== false) {
            var if_res2553 = function(pos2047, val2048, idx2049) {
                return post_cont_p2040(M0.car(pos2047), val2048);
            };
        } else {
            var if_res2553 = false;
        }
        return M0.values(function(pos2041) {
            return M0.values(pos__gt_val2034(M0.car(pos2041)), M0.cdr(pos2041));
        }, if_res2557, function(pos2043) {
            return M0.cons(pos_next2036(M0.car(pos2043)), M0.add1(M0.cdr(pos2043)));
        }, temp2556, if_res2555, if_res2554, if_res2553);
    });
};
var in_value = function(v2050) {
    return make_do_sequence(function() {
        return M0.values(function(pos2051) {
            return v2050;
        }, function(pos2052) {
            return false;
        }, true, function(pos2053) {
            return pos2053;
        }, false, false);
    });
};
var in_values_sequence = function(g2054) {
    if (sequence_p(g2054) !== false) {
        var if_res2558 = M0.rvoid();
    } else {
        var if_res2558 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-values-sequence"), $rjs_core.UString.make("sequence?"), g2054);
    }
    if_res2558;
    return make_do_sequence(function() {
        var let_result2559 = make_sequence(false, g2054);
        var pos__gt_val2055 = let_result2559.getAt(0);
        var pre_pos_next2056 = let_result2559.getAt(1);
        var pos_next2057 = let_result2559.getAt(2);
        var init2058 = let_result2559.getAt(3);
        var pos_cont_p2059 = let_result2559.getAt(4);
        var pre_cont_p2060 = let_result2559.getAt(5);
        var post_cont_p2061 = let_result2559.getAt(6);
        if (pre_cont_p2060 !== false) {
            var if_res2561 = function(vals2063) {
                return M0.apply(pre_cont_p2060, vals2063);
            };
        } else {
            var if_res2561 = false;
        }
        if (post_cont_p2061 !== false) {
            var if_res2560 = function(pos2064, vals2065) {
                return M0.apply(post_cont_p2061, pos2064, vals2065);
            };
        } else {
            var if_res2560 = false;
        }
        return M0.values(function(pos2062) {
            return M0.call_with_values(function() {
                return pos__gt_val2055(pos2062);
            }, M0.list);
        }, pre_pos_next2056, pos_next2057, init2058, pos_cont_p2059, if_res2561, if_res2560);
    });
};
var in_values_times__sequence = function(g2066) {
    if (sequence_p(g2066) !== false) {
        var if_res2562 = M0.rvoid();
    } else {
        var if_res2562 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("in-values-sequence"), $rjs_core.UString.make("sequence?"), g2066);
    }
    if_res2562;
    return make_do_sequence(function() {
        var let_result2563 = make_sequence(false, g2066);
        var pos__gt_val2067 = let_result2563.getAt(0);
        var pre_pos_next2068 = let_result2563.getAt(1);
        var pos_next2069 = let_result2563.getAt(2);
        var init2070 = let_result2563.getAt(3);
        var pos_cont_p2071 = let_result2563.getAt(4);
        var pre_cont_p2072 = let_result2563.getAt(5);
        var post_cont_p2073 = let_result2563.getAt(6);
        if (pre_cont_p2072 !== false) {
            var if_res2567 = function(vals2077) {
                if (M0.list_p(vals2077) !== false) {
                    return M0.apply(pre_cont_p2072, vals2077);
                } else {
                    return pre_cont_p2072(vals2077);
                }
            };
        } else {
            var if_res2567 = false;
        }
        if (post_cont_p2073 !== false) {
            var if_res2565 = function(pos2078, vals2079) {
                if (M0.list_p(vals2079) !== false) {
                    return M0.apply(post_cont_p2073, pos2078, vals2079);
                } else {
                    return post_cont_p2073(pos2078, vals2079);
                }
            };
        } else {
            var if_res2565 = false;
        }
        return M0.values(function(pos2074) {
            var cl2568 = function(v2075) {
                if (M0.list_p(v2075) !== false) {
                    return M0.list(v2075);
                } else {
                    return v2075;
                }
            };
            var cl2569 = $rjs_core.attachProcedureArity(function(...vs20762573) {
                return $rjs_core.Pair.listFromArray(vs20762573);
            });
            return M0.call_with_values(function() {
                return pos__gt_val2067(pos2074);
            }, $rjs_core.attachProcedureArity(function() {
                var fixed_lam2570 = {
                    '1': cl2568
                } [arguments.length];
                if (fixed_lam2570 !== undefined) {
                    return fixed_lam2570.apply(null, arguments);
                } else {
                    if (true !== false) {
                        return cl2569.apply(null, arguments);
                    } else {
                        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
                    }
                }
            }, [M0.make_arity_at_least(0)]));
        }, pre_pos_next2068, pos_next2069, init2070, pos_cont_p2071, if_res2567, if_res2565);
    });
};
var append_sequences = function(sequences2080, cyclic_p2081) {
    var seqs__gt_m_plus_g_plus_r2082 = function(_seqs20832976) {
        lambda_start2975: while (true) {
            let seqs2083 = _seqs20832976;
            if (M0.pair_p(seqs2083) !== false) {
                var let_result2574 = sequence_generate(M0.car(seqs2083));
                var more_p2084 = let_result2574.getAt(0);
                var get2085 = let_result2574.getAt(1);
                var seqs2086 = M0.cdr(seqs2083);
                if (more_p2084() !== false) {
                    return M0.list_times_(more_p2084, get2085, seqs2086);
                } else {
                    _seqs20832976 = seqs2086;
                    continue lambda_start2975;
                }
            } else {
                if (cyclic_p2081 !== false) {
                    _seqs20832976 = sequences2080;
                    continue lambda_start2975;
                } else {
                    return false;
                }
            }
        }
    };
    return make_do_sequence(function() {
        return M0.values(function(m_plus_g_plus_r2087) {
            return M0.cadr(m_plus_g_plus_r2087)();
        }, function(m_plus_g_plus_r2088) {
            if (M0.pair_p(m_plus_g_plus_r2088) !== false) {
                var if_res2578 = M0.not(M0.car(m_plus_g_plus_r2088)());
            } else {
                var if_res2578 = false;
            }
            if (if_res2578 !== false) {
                return seqs__gt_m_plus_g_plus_r2082(M0.cddr(m_plus_g_plus_r2088));
            } else {
                return m_plus_g_plus_r2088;
            }
        }, seqs__gt_m_plus_g_plus_r2082(sequences2080), M0.values, false, false);
    });
};
var check_sequences = function(who2089, sequences2090) {
    return M0.for_each(function(g2091) {
        if (sequence_p(g2091) !== false) {
            return M0.rvoid();
        } else {
            return M0.raise_argument_error(who2089, $rjs_core.UString.make("sequence?"), g2091);
        }
    }, sequences2090);
};
var in_sequences = $rjs_core.attachProcedureArity(function(...sequences20922581) {
    var sequences2092 = $rjs_core.Pair.listFromArray(sequences20922581);
    check_sequences($rjs_core.PrimitiveSymbol.make("in-sequences"), sequences2092);
    if (M0.pair_p(sequences2092) !== false) {
        var if_res2582 = M0.null_p(M0.cdr(sequences2092));
    } else {
        var if_res2582 = false;
    }
    if (if_res2582 !== false) {
        return M0.car(sequences2092);
    } else {
        return append_sequences(sequences2092, false);
    }
});
var in_cycle = $rjs_core.attachProcedureArity(function(...sequences20932584) {
    var sequences2093 = $rjs_core.Pair.listFromArray(sequences20932584);
    check_sequences($rjs_core.PrimitiveSymbol.make("in-cycle"), sequences2093);
    return append_sequences(sequences2093, true);
});
var in_parallel = $rjs_core.attachProcedureArity(function(...sequences20942585) {
    var sequences2094 = $rjs_core.Pair.listFromArray(sequences20942585);
    check_sequences($rjs_core.PrimitiveSymbol.make("in-parallel"), sequences2094);
    if (M0.__eq_(1, M0.length(sequences2094)) !== false) {
        return M0.car(sequences2094);
    } else {
        return make_do_sequence(function() {
            var let_result2586 = make_sequence($rjs_core.Pair.makeList($rjs_core.PrimitiveSymbol.make("g")), sequences2094);
            var pos__gt_vals2109 = let_result2586.getAt(0);
            var pos_pre_inc2110 = let_result2586.getAt(1);
            var pos_next2111 = let_result2586.getAt(2);
            var init2112 = let_result2586.getAt(3);
            var pos_cont_p2113 = let_result2586.getAt(4);
            var val_cont_p2114 = let_result2586.getAt(5);
            var all_cont_p2115 = let_result2586.getAt(6);
            M0.rvoid();
            var for_loop2116 = function(_p__gt_v21172988, _p_p_n21182989, _p_n21192990, _i21202991, _ps_p21212992, _pr_p21222993, _po_p21232994, _pos21242995) {
                lambda_start2986: while (true) {
                    let p__gt_v2117 = _p__gt_v21172988;
                    let p_p_n2118 = _p_p_n21182989;
                    let p_n2119 = _p_n21192990;
                    let i2120 = _i21202991;
                    let ps_p2121 = _ps_p21212992;
                    let pr_p2122 = _pr_p21222993;
                    let po_p2123 = _po_p21232994;
                    let pos2124 = _pos21242995;
                    if (pos_cont_p2113 !== false) {
                        var if_res2587 = pos_cont_p2113(pos2124);
                    } else {
                        var if_res2587 = true;
                    }
                    if (if_res2587 !== false) {
                        var g2128 = pos__gt_vals2109(pos2124);
                        if (all_cont_p2115 !== false) {
                            var if_res2588 = function(pos2129) {
                                return all_cont_p2115(pos2129, g2128);
                            };
                        } else {
                            var if_res2588 = false;
                        }
                        var let_result2589 = M0.values(g2128, if_res2588);
                        var g2125 = let_result2589.getAt(0);
                        var all_cont_p_by_pos2126 = let_result2589.getAt(1);
                        if (pos_pre_inc2110 !== false) {
                            var if_res2590 = pos_pre_inc2110(pos2124);
                        } else {
                            var if_res2590 = pos2124;
                        }
                        var pos2127 = if_res2590;
                        if (val_cont_p2114 !== false) {
                            var if_res2591 = val_cont_p2114(g2125);
                        } else {
                            var if_res2591 = true;
                        }
                        if (if_res2591 !== false) {
                            var p__gt_v2137 = p__gt_v2117;
                            var p_p_n2138 = p_p_n2118;
                            var p_n2139 = p_n2119;
                            var i2140 = i2120;
                            var ps_p2141 = ps_p2121;
                            var pr_p2142 = pr_p2122;
                            var po_p2143 = po_p2123;
                            var let_result2592 = make_sequence(false, g2125);
                            var p__gt_v12151 = let_result2592.getAt(0);
                            var p_p_n22152 = let_result2592.getAt(1);
                            var p_n32153 = let_result2592.getAt(2);
                            var i42154 = let_result2592.getAt(3);
                            var ps_p52155 = let_result2592.getAt(4);
                            var pr_p62156 = let_result2592.getAt(5);
                            var po_p72157 = let_result2592.getAt(6);
                            var let_result2593 = M0.values(M0.cons(p__gt_v12151, p__gt_v2137), M0.cons(p_p_n22152, p_p_n2138), M0.cons(p_n32153, p_n2139), M0.cons(i42154, i2140), M0.cons(ps_p52155, ps_p2141), M0.cons(pr_p62156, pr_p2142), M0.cons(po_p72157, po_p2143));
                            var p__gt_v2144 = let_result2593.getAt(0);
                            var p_p_n2145 = let_result2593.getAt(1);
                            var p_n2146 = let_result2593.getAt(2);
                            var i2147 = let_result2593.getAt(3);
                            var ps_p2148 = let_result2593.getAt(4);
                            var pr_p2149 = let_result2593.getAt(5);
                            var po_p2150 = let_result2593.getAt(6);
                            var let_result2594 = M0.values(p__gt_v2144, p_p_n2145, p_n2146, i2147, ps_p2148, pr_p2149, po_p2150);
                            var p__gt_v2130 = let_result2594.getAt(0);
                            var p_p_n2131 = let_result2594.getAt(1);
                            var p_n2132 = let_result2594.getAt(2);
                            var i2133 = let_result2594.getAt(3);
                            var ps_p2134 = let_result2594.getAt(4);
                            var pr_p2135 = let_result2594.getAt(5);
                            var po_p2136 = let_result2594.getAt(6);
                            if (all_cont_p_by_pos2126 !== false) {
                                var if_res2595 = all_cont_p_by_pos2126(pos2127);
                            } else {
                                var if_res2595 = true;
                            }
                            if (if_res2595 !== false) {
                                var if_res2596 = M0.not(false);
                            } else {
                                var if_res2596 = false;
                            }
                            if (if_res2596 !== false) {
                                _p__gt_v21172988 = p__gt_v2130;
                                _p_p_n21182989 = p_p_n2131;
                                _p_n21192990 = p_n2132;
                                _i21202991 = i2133;
                                _ps_p21212992 = ps_p2134;
                                _pr_p21222993 = pr_p2135;
                                _po_p21232994 = po_p2136;
                                _pos21242995 = pos_next2111(pos2127);
                                continue lambda_start2986;
                            } else {
                                return M0.values(p__gt_v2130, p_p_n2131, p_n2132, i2133, ps_p2134, pr_p2135, po_p2136);
                            }
                        } else {
                            return M0.values(p__gt_v2117, p_p_n2118, p_n2119, i2120, ps_p2121, pr_p2122, po_p2123);
                        }
                    } else {
                        return M0.values(p__gt_v2117, p_p_n2118, p_n2119, i2120, ps_p2121, pr_p2122, po_p2123);
                    }
                }
            };
            var let_result2600 = for_loop2116(M0.rnull, M0.rnull, M0.rnull, M0.rnull, M0.rnull, M0.rnull, M0.rnull, init2112);
            var p__gt_v2102 = let_result2600.getAt(0);
            var p_p_n2103 = let_result2600.getAt(1);
            var p_n2104 = let_result2600.getAt(2);
            var i2105 = let_result2600.getAt(3);
            var ps_p2106 = let_result2600.getAt(4);
            var pr_p2107 = let_result2600.getAt(5);
            var po_p2108 = let_result2600.getAt(6);
            var let_result2601 = M0.values(M1.alt_reverse(p__gt_v2102), M1.alt_reverse(p_p_n2103), M1.alt_reverse(p_n2104), M1.alt_reverse(i2105), M1.alt_reverse(ps_p2106), M1.alt_reverse(pr_p2107), M1.alt_reverse(po_p2108));
            var pos__gt_vals2095 = let_result2601.getAt(0);
            var pre_pos_nexts2096 = let_result2601.getAt(1);
            var pos_nexts2097 = let_result2601.getAt(2);
            var inits2098 = let_result2601.getAt(3);
            var pos_cont_ps2099 = let_result2601.getAt(4);
            var pre_cont_ps2100 = let_result2601.getAt(5);
            var post_cont_ps2101 = let_result2601.getAt(6);
            if (M0.ormap(M0.values, pre_pos_nexts2096) !== false) {
                var if_res2611 = function(poses2161) {
                    return M0.map(function(pre_pos_next2162, pos2163) {
                        if (pre_pos_next2162 !== false) {
                            return pre_pos_next2162(pos2163);
                        } else {
                            return pos2163;
                        }
                    }, pre_pos_nexts2096, poses2161);
                };
            } else {
                var if_res2611 = false;
            }
            if (M0.ormap(M0.values, pos_cont_ps2099) !== false) {
                var if_res2609 = function(poses2167) {
                    return M0.andmap(function(pos_cont_p2168, pos2169) {
                        if (pos_cont_p2168 !== false) {
                            return pos_cont_p2168(pos2169);
                        } else {
                            return true;
                        }
                    }, pos_cont_ps2099, poses2167);
                };
            } else {
                var if_res2609 = false;
            }
            if (M0.ormap(M0.values, pre_cont_ps2100) !== false) {
                var if_res2607 = $rjs_core.attachProcedureArity(function(...vals21702605) {
                    var vals2170 = $rjs_core.Pair.listFromArray(vals21702605);
                    return M0.andmap(function(pre_cont_p2171, val2172) {
                        if (pre_cont_p2171 !== false) {
                            return pre_cont_p2171(val2172);
                        } else {
                            return true;
                        }
                    }, pre_cont_ps2100, vals2170);
                });
            } else {
                var if_res2607 = false;
            }
            if (M0.ormap(M0.values, post_cont_ps2101) !== false) {
                var if_res2604 = $rjs_core.attachProcedureArity(function(poses2173, ...vals21742602) {
                    var vals2174 = $rjs_core.Pair.listFromArray(vals21742602);
                    return M0.andmap(function(post_cont_p2175, pos2176, val2177) {
                        if (post_cont_p2175 !== false) {
                            return post_cont_p2175(pos2176, val2177);
                        } else {
                            return true;
                        }
                    }, post_cont_ps2101, poses2173, vals2174);
                });
            } else {
                var if_res2604 = false;
            }
            return M0.values(function(poses2158) {
                return M0.apply(M0.values, M0.map(function(pos__gt_val2159, pos2160) {
                    return pos__gt_val2159(pos2160);
                }, pos__gt_vals2095, poses2158));
            }, if_res2611, function(poses2164) {
                return M0.map(function(pos_next2165, pos2166) {
                    return pos_next2165(pos2166);
                }, pos_nexts2097, poses2164);
            }, inits2098, if_res2609, if_res2607, if_res2604);
        });
    }
});
var cl2613 = function(producer2178) {
    return make_do_sequence(function() {
        return M0.values($rjs_core.attachProcedureArity(function(..._21792617) {
            var _2179 = $rjs_core.Pair.listFromArray(_21792617);
            return producer2178();
        }), M0.rvoid, M0.rvoid(), false, false, false);
    });
};
var cl2614 = $rjs_core.attachProcedureArity(function(producer2180, stop2181, ...more21822618) {
    var more2182 = $rjs_core.Pair.listFromArray(more21822618);
    if (M0.null_p(more2182) !== false) {
        var if_res2619 = function(_2184) {
            return producer2180();
        };
    } else {
        var if_res2619 = function(_2185) {
            return M0.apply(producer2180, more2182);
        };
    }
    var produce_bang_2183 = if_res2619;
    if (M0.not(M0.procedure_p(stop2181)) !== false) {
        var if_res2622 = function(x2187) {
            return M0.not(M0.eq_p(x2187, stop2181));
        };
    } else {
        if (M0.equal_p(1, M0.procedure_arity(stop2181)) !== false) {
            var if_res2621 = function(x2188) {
                return M0.not(stop2181(x2188));
            };
        } else {
            var if_res2621 = $rjs_core.attachProcedureArity(function(...xs21892620) {
                var xs2189 = $rjs_core.Pair.listFromArray(xs21892620);
                return M0.not(M0.apply(stop2181, xs2189));
            });
        }
        var if_res2622 = if_res2621;
    }
    var stop_p2186 = if_res2622;
    return make_do_sequence(function() {
        return M0.values(produce_bang_2183, M0.rvoid, M0.rvoid(), false, stop_p2186, false);
    });
});
var in_producer = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2615 = {
        '1': cl2613
    } [arguments.length];
    if (fixed_lam2615 !== undefined) {
        return fixed_lam2615.apply(null, arguments);
    } else {
        if (M0.__gt__eq_(cl2614.length, 1) !== false) {
            return cl2614.apply(null, arguments);
        } else {
            return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
        }
    }
}, [1, M0.make_arity_at_least(2)]);
var let_result2623 = M0.make_struct_type($rjs_core.PrimitiveSymbol.make("stream"), false, 3, 0, false, M0.list(M0.cons(prop_stream, M0.vector(function(v2190) {
    return do_stream_ref(v2190, 0)();
}, function(v2191) {
    return do_stream_ref(v2191, 1)();
}, function(v2192) {
    return do_stream_ref(v2192, 2)();
}))));
var struct_do_stream = let_result2623.getAt(0);
var make_do_stream = let_result2623.getAt(1);
var do_stream_p = let_result2623.getAt(2);
var do_stream_ref = let_result2623.getAt(3);
var do_stream_set_bang_ = let_result2623.getAt(4);
var empty_stream = make_do_stream(function() {
    return true;
}, M0.rvoid, M0.rvoid);
var sequence__gt_stream = function(s2193) {
    if (sequence_p(s2193) !== false) {
        var if_res2624 = M0.rvoid();
    } else {
        var if_res2624 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("sequence-generate"), $rjs_core.UString.make("sequence?"), s2193);
    }
    if_res2624;
    if (stream_p(s2193) !== false) {
        return s2193;
    } else {
        var let_result2625 = make_sequence(false, s2193);
        var pos__gt_val2194 = let_result2625.getAt(0);
        var pre_pos_next2195 = let_result2625.getAt(1);
        var pos_next2196 = let_result2625.getAt(2);
        var init2197 = let_result2625.getAt(3);
        var pos_cont_p2198 = let_result2625.getAt(4);
        var pre_cont_p2199 = let_result2625.getAt(5);
        var post_cont_p2200 = let_result2625.getAt(6);
        var gen_stream2201 = function(pos2202) {
            var done_p2203 = false;
            var vals2204 = false;
            var empty_p2205 = false;
            var next2206 = false;
            var force_bang_2207 = function() {
                if (done_p2203 !== false) {
                    return M0.rvoid();
                } else {
                    if (pos_cont_p2198 !== false) {
                        var if_res2626 = pos_cont_p2198(pos2202);
                    } else {
                        var if_res2626 = true;
                    }
                    if (if_res2626 !== false) {
                        vals2204 = M0.call_with_values(function() {
                            return pos__gt_val2194(pos2202);
                        }, M0.list);
                        if (pre_pos_next2195 !== false) {
                            pos2202 = pre_pos_next2195(pos2202);
                            var if_res2627 = null;
                        } else {
                            var if_res2627 = M0.rvoid();
                        }
                        if_res2627;
                        if (pre_cont_p2199 !== false) {
                            var if_res2628 = M0.apply(pre_cont_p2199, vals2204);
                        } else {
                            var if_res2628 = true;
                        }
                        if (if_res2628 !== false) {
                            var if_res2629 = M0.rvoid();
                        } else {
                            vals2204 = false;
                            empty_p2205 = true;
                            var if_res2629 = null;
                        }
                        var if_res2630 = if_res2629;
                    } else {
                        empty_p2205 = true;
                        var if_res2630 = null;
                    }
                    if_res2630;
                    done_p2203 = true;
                    return null;
                }
            };
            return make_do_stream(function() {
                force_bang_2207();
                return empty_p2205;
            }, function() {
                force_bang_2207();
                return M0.apply(M0.values, vals2204);
            }, function() {
                force_bang_2207();
                if (next2206 !== false) {
                    return next2206;
                } else {
                    if (post_cont_p2200 !== false) {
                        var if_res2632 = M0.apply(post_cont_p2200, pos2202, vals2204);
                    } else {
                        var if_res2632 = true;
                    }
                    if (if_res2632 !== false) {
                        next2206 = gen_stream2201(pos_next2196(pos2202));
                        var if_res2633 = null;
                    } else {
                        next2206 = empty_stream;
                        var if_res2633 = null;
                    }
                    if_res2633;
                    return next2206;
                }
            });
        };
        return gen_stream2201(init2197);
    }
};
var no_more = function() {
    return M0.raise(M0.__rjs_quoted__.exn_fail_contract($rjs_core.UString.make("sequence has no more values"), M0.current_continuation_marks()));
};
var sequence_generate = function(g2208) {
    if (sequence_p(g2208) !== false) {
        var if_res2636 = M0.rvoid();
    } else {
        var if_res2636 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("sequence-generate"), $rjs_core.UString.make("sequence?"), g2208);
    }
    if_res2636;
    var let_result2637 = make_sequence(false, g2208);
    var pos__gt_val2209 = let_result2637.getAt(0);
    var pre_pos_next2210 = let_result2637.getAt(1);
    var pos_next2211 = let_result2637.getAt(2);
    var init2212 = let_result2637.getAt(3);
    var pos_cont_p2213 = let_result2637.getAt(4);
    var pre_cont_p2214 = let_result2637.getAt(5);
    var post_cont_p2215 = let_result2637.getAt(6);
    var pos2216 = init2212;
    var more_p2217 = false;
    var prep_val_bang_2218 = false;
    var next2219 = false;
    var init_more_p2220 = function() {
        prep_val_bang_2218();
        return more_p2217();
    };
    var init_next2221 = function() {
        prep_val_bang_2218();
        return next2219();
    };
    var init_prep_val_bang_2222 = function() {
        if (pos_cont_p2213 !== false) {
            var if_res2638 = pos_cont_p2213(pos2216);
        } else {
            var if_res2638 = true;
        }
        if (if_res2638 !== false) {
            return M0.call_with_values(function() {
                var begin_res2644 = pos__gt_val2209(pos2216);
                if (pre_pos_next2210 !== false) {
                    pos2216 = pre_pos_next2210(pos2216);
                    var if_res2645 = null;
                } else {
                    var if_res2645 = M0.rvoid();
                }
                if_res2645;
                return begin_res2644;
            }, $rjs_core.attachProcedureArity(function(...vals22232639) {
                var vals2223 = $rjs_core.Pair.listFromArray(vals22232639);
                if (pre_cont_p2214 !== false) {
                    var if_res2640 = M0.apply(pre_cont_p2214, vals2223);
                } else {
                    var if_res2640 = true;
                }
                if (if_res2640 !== false) {
                    more_p2217 = function() {
                        return true;
                    };
                    next2219 = function() {
                        var v2224 = vals2223;
                        prep_val_bang_2218 = function() {
                            lambda_start3039: while (true) {
                                if (post_cont_p2215 !== false) {
                                    var if_res2641 = M0.apply(post_cont_p2215, pos2216, vals2223);
                                } else {
                                    var if_res2641 = true;
                                }
                                if (if_res2641 !== false) {
                                    pos2216 = pos_next2211(pos2216);
                                    prep_val_bang_2218 = init_prep_val_bang_2222;
                                    continue lambda_start3039;
                                } else {
                                    more_p2217 = function() {
                                        return false;
                                    };
                                    next2219 = no_more;
                                    return null;
                                }
                            }
                        };
                        more_p2217 = init_more_p2220;
                        next2219 = init_next2221;
                        return M0.apply(M0.values, v2224);
                    };
                    prep_val_bang_2218 = M0.rvoid;
                    return M0.apply(M0.values, vals2223);
                } else {
                    more_p2217 = function() {
                        return false;
                    };
                    next2219 = no_more;
                    return null;
                }
            }));
        } else {
            more_p2217 = function() {
                return false;
            };
            next2219 = no_more;
            return null;
        }
    };
    more_p2217 = init_more_p2220;
    prep_val_bang_2218 = init_prep_val_bang_2222;
    next2219 = init_next2221;
    var sequence_more_p2225 = function() {
        return more_p2217();
    };
    var sequence_next2226 = function() {
        return next2219();
    };
    return M0.values(sequence_more_p2225, sequence_next2226);
};
var sequence_generate_times_ = function(g2227) {
    if (sequence_p(g2227) !== false) {
        var if_res2647 = M0.rvoid();
    } else {
        var if_res2647 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("sequence-generate*"), $rjs_core.UString.make("sequence?"), g2227);
    }
    if_res2647;
    var let_result2648 = make_sequence(false, g2227);
    var pos__gt_val2228 = let_result2648.getAt(0);
    var pre_pos_next2229 = let_result2648.getAt(1);
    var pos_next2230 = let_result2648.getAt(2);
    var init2231 = let_result2648.getAt(3);
    var pos_cont_p2232 = let_result2648.getAt(4);
    var pre_cont_p2233 = let_result2648.getAt(5);
    var post_cont_p2234 = let_result2648.getAt(6);
    var next_bang_2235 = function(pos2236) {
        if (pos_cont_p2232 !== false) {
            var if_res2649 = pos_cont_p2232(pos2236);
        } else {
            var if_res2649 = true;
        }
        if (if_res2649 !== false) {
            return M0.call_with_values(function() {
                var begin_res2655 = pos__gt_val2228(pos2236);
                if (pre_pos_next2229 !== false) {
                    pos2236 = pre_pos_next2229(pos2236);
                    var if_res2656 = null;
                } else {
                    var if_res2656 = M0.rvoid();
                }
                if_res2656;
                return begin_res2655;
            }, $rjs_core.attachProcedureArity(function(...vals22372650) {
                var vals2237 = $rjs_core.Pair.listFromArray(vals22372650);
                if (pre_cont_p2233 !== false) {
                    var if_res2651 = M0.apply(pre_cont_p2233, vals2237);
                } else {
                    var if_res2651 = true;
                }
                if (if_res2651 !== false) {
                    return M0.values(vals2237, function() {
                        if (post_cont_p2234 !== false) {
                            var if_res2652 = M0.apply(post_cont_p2234, pos2236, vals2237);
                        } else {
                            var if_res2652 = true;
                        }
                        if (if_res2652 !== false) {
                            return next_bang_2235(pos_next2230(pos2236));
                        } else {
                            return M0.values(false, no_more);
                        }
                    });
                } else {
                    return M0.values(false, no_more);
                }
            }));
        } else {
            return M0.values(false, no_more);
        }
    };
    return next_bang_2235(init2231);
};
var grow_vector = function(vec2238) {
    var n2239 = M0.vector_length(vec2238);
    var new_vec2240 = M0.make_vector(2 * n2239);
    M0.vector_copy_bang_(new_vec2240, 0, vec2238, 0, n2239);
    return new_vec2240;
};
var shrink_vector = function(vec2241, i2242) {
    var new_vec2243 = M0.make_vector(i2242);
    M0.vector_copy_bang_(new_vec2243, 0, vec2241, 0, i2242);
    return new_vec2243;
};
var dir_list = function(full_d2244, d2245, acc2246) {
    var let_result2658 = make_sequence($rjs_core.Pair.makeList($rjs_core.PrimitiveSymbol.make("f")), in_list(M0.reverse(M5.sort(M0.__rjs_quoted__.directory_list(full_d2244), M0.__rjs_quoted__.path_lt__p))));
    var pos__gt_vals2247 = let_result2658.getAt(0);
    var pos_pre_inc2248 = let_result2658.getAt(1);
    var pos_next2249 = let_result2658.getAt(2);
    var init2250 = let_result2658.getAt(3);
    var pos_cont_p2251 = let_result2658.getAt(4);
    var val_cont_p2252 = let_result2658.getAt(5);
    var all_cont_p2253 = let_result2658.getAt(6);
    M0.rvoid();
    var for_loop2254 = function(_acc22553055, _pos22563056) {
        lambda_start3053: while (true) {
            let acc2255 = _acc22553055;
            let pos2256 = _pos22563056;
            if (pos_cont_p2251 !== false) {
                var if_res2659 = pos_cont_p2251(pos2256);
            } else {
                var if_res2659 = true;
            }
            if (if_res2659 !== false) {
                var f2260 = pos__gt_vals2247(pos2256);
                if (all_cont_p2253 !== false) {
                    var if_res2660 = function(pos2261) {
                        return all_cont_p2253(pos2261, f2260);
                    };
                } else {
                    var if_res2660 = false;
                }
                var let_result2661 = M0.values(f2260, if_res2660);
                var f2257 = let_result2661.getAt(0);
                var all_cont_p_by_pos2258 = let_result2661.getAt(1);
                if (pos_pre_inc2248 !== false) {
                    var if_res2662 = pos_pre_inc2248(pos2256);
                } else {
                    var if_res2662 = pos2256;
                }
                var pos2259 = if_res2662;
                if (val_cont_p2252 !== false) {
                    var if_res2663 = val_cont_p2252(f2257);
                } else {
                    var if_res2663 = true;
                }
                if (if_res2663 !== false) {
                    var acc2263 = acc2255;
                    var acc2264 = M0.cons(M0.build_path(d2245, f2257), acc2263);
                    var acc2262 = M0.values(acc2264);
                    if (all_cont_p_by_pos2258 !== false) {
                        var if_res2664 = all_cont_p_by_pos2258(pos2259);
                    } else {
                        var if_res2664 = true;
                    }
                    if (if_res2664 !== false) {
                        var if_res2665 = M0.not(false);
                    } else {
                        var if_res2665 = false;
                    }
                    if (if_res2665 !== false) {
                        _acc22553055 = acc2262;
                        _pos22563056 = pos_next2249(pos2259);
                        continue lambda_start3053;
                    } else {
                        return acc2262;
                    }
                } else {
                    return acc2255;
                }
            } else {
                return acc2255;
            }
        }
    };
    return for_loop2254(acc2246, init2250);
};
var next_body = function(l2265, d2266, init_dir2267, use_dir_p2268) {
    var full_d2269 = M0.__rjs_quoted__.path__gt_complete_path(d2266, init_dir2267);
    if (M0.__rjs_quoted__.directory_exists_p(full_d2269) !== false) {
        var if_res2669 = use_dir_p2268(full_d2269);
    } else {
        var if_res2669 = false;
    }
    if (if_res2669 !== false) {
        return dir_list(full_d2269, d2266, M0.cdr(l2265));
    } else {
        return M0.cdr(l2265);
    }
};
var initial_state = function(orig_dir2270, init_dir2271) {
    if (orig_dir2270 !== false) {
        return dir_list(M0.__rjs_quoted__.path__gt_complete_path(orig_dir2270, init_dir2271), orig_dir2270, M0.rnull);
    } else {
        return M5.sort(M0.__rjs_quoted__.directory_list(init_dir2271), M0.__rjs_quoted__.path_lt__p);
    }
};
var cl2672 = function() {
    return in_directory(false, function(d2272) {
        return true;
    });
};
var cl2673 = function(orig_dir2273) {
    return in_directory(orig_dir2273, function(d2274) {
        return true;
    });
};
var cl2674 = function(orig_dir2275, use_dir_p2276) {
    var init_dir2277 = M0.__rjs_quoted__.current_directory();
    var next2278 = function(l2279) {
        var d2280 = M0.car(l2279);
        return next_body(l2279, d2280, init_dir2277, use_dir_p2276);
    };
    return make_do_sequence(function() {
        return M0.values(M0.car, next2278, initial_state(orig_dir2275, init_dir2277), M0.pair_p, false, false);
    });
};
var in_directory = $rjs_core.attachProcedureArity(function() {
    var fixed_lam2675 = {
        '0': cl2672,
        '1': cl2673,
        '2': cl2674
    } [arguments.length];
    if (fixed_lam2675 !== undefined) {
        return fixed_lam2675.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [0, 1, 2]);
var __rjs_quoted__ = {};
__rjs_quoted__.check_in_ephemeron_hash_pairs = check_in_ephemeron_hash_pairs;
__rjs_quoted__.default_in_immutable_hash_keys = default_in_immutable_hash_keys;
__rjs_quoted__.in_naturals = in_naturals;
__rjs_quoted__.check_in_weak_hash_pairs = check_in_weak_hash_pairs;
__rjs_quoted__.default_in_ephemeron_hash_values = default_in_ephemeron_hash_values;
__rjs_quoted__.check_in_ephemeron_hash = check_in_ephemeron_hash;
__rjs_quoted__.check_naturals = check_naturals;
__rjs_quoted__.check_bytes = check_bytes;
__rjs_quoted__.default_in_mutable_hash_values = default_in_mutable_hash_values;
__rjs_quoted__.in_stream = in_stream;
__rjs_quoted__.check_in_hash_keys = check_in_hash_keys;
__rjs_quoted__.make_do_sequence = make_do_sequence;
__rjs_quoted__.in_string = in_string;
__rjs_quoted__.check_in_mutable_hash_pairs = check_in_mutable_hash_pairs;
__rjs_quoted__.grow_vector = grow_vector;
__rjs_quoted__.in_port = in_port;
__rjs_quoted__.in_vector = in_vector;
__rjs_quoted__.check_in_hash = check_in_hash;
__rjs_quoted__.in_value = in_value;
__rjs_quoted__.unsafe_stream_not_empty_p = unsafe_stream_not_empty_p;
__rjs_quoted__.default_in_weak_hash = default_in_weak_hash;
__rjs_quoted__.default_in_mutable_hash_pairs = default_in_mutable_hash_pairs;
__rjs_quoted__.check_in_mutable_hash_values = check_in_mutable_hash_values;
__rjs_quoted__.initial_state = initial_state;
__rjs_quoted__.check_in_port = check_in_port;
__rjs_quoted__.unsafe_normalise_inputs = unsafe_normalise_inputs;
__rjs_quoted__.default_in_hash_keys = default_in_hash_keys;
__rjs_quoted__.check_in_bytes_lines = check_in_bytes_lines;
__rjs_quoted__.check_vector = check_vector;
__rjs_quoted__.check_in_lines = check_in_lines;
__rjs_quoted__.check_range_generic = check_range_generic;
__rjs_quoted__.in_input_port_chars = in_input_port_chars;
__rjs_quoted__.default_in_immutable_hash_values = default_in_immutable_hash_values;
__rjs_quoted__.in_mlist = in_mlist;
__rjs_quoted__.in_list = in_list;
__rjs_quoted__.__hash_gen = __hash_gen;
__rjs_quoted__.check_in_immutable_hash = check_in_immutable_hash;
__rjs_quoted__.default_in_weak_hash_keys = default_in_weak_hash_keys;
__rjs_quoted__.in_range = in_range;
__rjs_quoted__.in_directory = in_directory;
__rjs_quoted__.default_in_hash_values = default_in_hash_values;
__rjs_quoted__.default_in_ephemeron_hash = default_in_ephemeron_hash;
__rjs_quoted__.default_in_ephemeron_hash_pairs = default_in_ephemeron_hash_pairs;
__rjs_quoted__.check_in_hash_values = check_in_hash_values;
__rjs_quoted__.in_producer = in_producer;
__rjs_quoted__.unsafe_stream_rest = unsafe_stream_rest;
__rjs_quoted__.check_in_weak_hash_values = check_in_weak_hash_values;
__rjs_quoted__.check_in_mutable_hash = check_in_mutable_hash;
__rjs_quoted__.default_in_weak_hash_values = default_in_weak_hash_values;
__rjs_quoted__.check_in_mutable_hash_keys = check_in_mutable_hash_keys;
__rjs_quoted__.in_inclusive_range = in_inclusive_range;
__rjs_quoted__.check_in_weak_hash = check_in_weak_hash;
__rjs_quoted__.mutable_p = mutable_p;
__rjs_quoted__.default_in_immutable_hash = default_in_immutable_hash;
__rjs_quoted__.in_indexed = in_indexed;
__rjs_quoted__.unsafe_stream_first = unsafe_stream_first;
__rjs_quoted__.in_lines = in_lines;
__rjs_quoted__.in_bytes_lines = in_bytes_lines;
__rjs_quoted__.default_in_hash = default_in_hash;
__rjs_quoted__.check_in_hash_pairs = check_in_hash_pairs;
__rjs_quoted__.shrink_vector = shrink_vector;
__rjs_quoted__.in_bytes = in_bytes;
__rjs_quoted__.default_in_hash_pairs = default_in_hash_pairs;
__rjs_quoted__.check_string = check_string;
__rjs_quoted__.default_in_ephemeron_hash_keys = default_in_ephemeron_hash_keys;
__rjs_quoted__.check_range = check_range;
__rjs_quoted__.check_in_weak_hash_keys = check_in_weak_hash_keys;
__rjs_quoted__.make_sequence = make_sequence;
__rjs_quoted__.check_in_immutable_hash_keys = check_in_immutable_hash_keys;
__rjs_quoted__.stop_after = stop_after;
__rjs_quoted__.check_in_ephemeron_hash_values = check_in_ephemeron_hash_values;
__rjs_quoted__.check_in_immutable_hash_values = check_in_immutable_hash_values;
__rjs_quoted__.check_in_ephemeron_hash_keys = check_in_ephemeron_hash_keys;
__rjs_quoted__.default_in_mutable_hash_keys = default_in_mutable_hash_keys;
__rjs_quoted__.in_input_port_bytes = in_input_port_bytes;
__rjs_quoted__.next_body = next_body;
__rjs_quoted__.check_in_immutable_hash_pairs = check_in_immutable_hash_pairs;
__rjs_quoted__.in_parallel = in_parallel;
__rjs_quoted__.default_in_immutable_hash_pairs = default_in_immutable_hash_pairs;
__rjs_quoted__.normalise_inputs = normalise_inputs;
__rjs_quoted__.default_in_weak_hash_pairs = default_in_weak_hash_pairs;
__rjs_quoted__.stream_p = stream_p;
__rjs_quoted__.default_in_mutable_hash = default_in_mutable_hash;
__rjs_quoted__.check_list = check_list;
export {
    __rjs_quoted__,
    make_do_sequence,
    prop_sequence,
    sequence_generate_times_,
    sequence_generate,
    sequence_p,
    make_do_stream,
    empty_stream,
    sequence__gt_stream,
    stream_via_prop_p,
    stream_ref,
    prop_stream,
    stream_rest,
    stream_first,
    stream_empty_p,
    stream_p,
    stop_after,
    stop_before,
    in_values_times__sequence,
    in_values_sequence,
    in_parallel,
    in_cycle,
    in_sequences
};