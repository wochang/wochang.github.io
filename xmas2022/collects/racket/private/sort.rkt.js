import * as $rjs_core from '../../../runtime/core.js';
import * as M0 from "../../../runtime/kernel.rkt.js";
import * as M1 from "../../../runtime/unsafe.rkt.js";
var generic_sort3752 = function(A3753, less_than_p3754, n3755) {
    var n_by_2_3756 = M1.unsafe_fxrshift(n3755, 1);
    var n_by_2_plus_3757 = M1.unsafe_fx_(n3755, n_by_2_3756);
    var copying_mergesort3758 = function(Alo3759, Blo3760, n3761) {
        if (M1.unsafe_fx_eq_(n3761, 1) !== false) {
            return M1.unsafe_vector_set_bang_(A3753, Blo3760, M1.unsafe_vector_ref(A3753, Alo3759));
        } else {
            if (M1.unsafe_fx_eq_(n3761, 2) !== false) {
                var x3762 = M1.unsafe_vector_ref(A3753, Alo3759);
                var y3763 = M1.unsafe_vector_ref(A3753, M1.unsafe_fx_plus_(Alo3759, 1));
                if (false !== false) {
                    var if_res5549 = less_than_p3754(false(y3763), false(x3762));
                } else {
                    var if_res5549 = less_than_p3754(y3763, x3762);
                }
                if (if_res5549 !== false) {
                    M1.unsafe_vector_set_bang_(A3753, Blo3760, y3763);
                    return M1.unsafe_vector_set_bang_(A3753, M1.unsafe_fx_plus_(Blo3760, 1), x3762);
                } else {
                    M1.unsafe_vector_set_bang_(A3753, Blo3760, x3762);
                    return M1.unsafe_vector_set_bang_(A3753, M1.unsafe_fx_plus_(Blo3760, 1), y3763);
                }
            } else {
                if (M1.unsafe_fx_lt_(n3761, 16) !== false) {
                    M1.unsafe_vector_set_bang_(A3753, Blo3760, M1.unsafe_vector_ref(A3753, Alo3759));
                    var iloop3764 = function(i3765) {
                        if (M1.unsafe_fx_lt_(i3765, n3761) !== false) {
                            var ref_i3766 = M1.unsafe_vector_ref(A3753, M1.unsafe_fx_plus_(Alo3759, i3765));
                            var jloop3767 = function(_j37685760) {
                                lambda_start5759: while (true) {
                                    let j3768 = _j37685760;
                                    var ref_j_13769 = M1.unsafe_vector_ref(A3753, M1.unsafe_fx_(j3768, 1));
                                    if (M1.unsafe_fx_lt_(Blo3760, j3768) !== false) {
                                        if (false !== false) {
                                            var if_res5551 = less_than_p3754(false(ref_i3766), false(ref_j_13769));
                                        } else {
                                            var if_res5551 = less_than_p3754(ref_i3766, ref_j_13769);
                                        }
                                        var if_res5552 = if_res5551;
                                    } else {
                                        var if_res5552 = false;
                                    }
                                    if (if_res5552 !== false) {
                                        M1.unsafe_vector_set_bang_(A3753, j3768, ref_j_13769);
                                        _j37685760 = M1.unsafe_fx_(j3768, 1);
                                        continue lambda_start5759;
                                    } else {
                                        M1.unsafe_vector_set_bang_(A3753, j3768, ref_i3766);
                                        return iloop3764(M1.unsafe_fx_plus_(i3765, 1));
                                    }
                                }
                            };
                            return jloop3767(M1.unsafe_fx_plus_(Blo3760, i3765));
                        } else {
                            return M0.rvoid();
                        }
                    };
                    return iloop3764(1);
                } else {
                    var n_by_2_3770 = M1.unsafe_fxrshift(n3761, 1);
                    var n_by_2_plus_3771 = M1.unsafe_fx_(n3761, n_by_2_3770);
                    var Amid13772 = M1.unsafe_fx_plus_(Alo3759, n_by_2_3770);
                    var Amid23773 = M1.unsafe_fx_plus_(Alo3759, n_by_2_plus_3771);
                    var Bmid13774 = M1.unsafe_fx_plus_(Blo3760, n_by_2_3770);
                    copying_mergesort3758(Amid13772, Bmid13774, n_by_2_plus_3771);
                    copying_mergesort3758(Alo3759, Amid23773, n_by_2_3770);
                    var b23775 = M1.unsafe_fx_plus_(Blo3760, n3761);
                    var loop3776 = function(_a137775762, _b137785763, _c137795764) {
                        lambda_start5761: while (true) {
                            let a13777 = _a137775762;
                            let b13778 = _b137785763;
                            let c13779 = _c137795764;
                            var x3780 = M1.unsafe_vector_ref(A3753, a13777);
                            var y3781 = M1.unsafe_vector_ref(A3753, b13778);
                            if (true !== false) {
                                if (false !== false) {
                                    var if_res5555 = less_than_p3754(false(y3781), false(x3780));
                                } else {
                                    var if_res5555 = less_than_p3754(y3781, x3780);
                                }
                                var if_res5557 = M0.not(if_res5555);
                            } else {
                                if (false !== false) {
                                    var if_res5556 = less_than_p3754(false(x3780), false(y3781));
                                } else {
                                    var if_res5556 = less_than_p3754(x3780, y3781);
                                }
                                var if_res5557 = if_res5556;
                            }
                            if (if_res5557 !== false) {
                                M1.unsafe_vector_set_bang_(A3753, c13779, x3780);
                                var a13782 = M1.unsafe_fx_plus_(a13777, 1);
                                var c13783 = M1.unsafe_fx_plus_(c13779, 1);
                                if (M1.unsafe_fx_lt_(c13783, b13778) !== false) {
                                    _a137775762 = a13782;
                                    _b137785763 = b13778;
                                    _c137795764 = c13783;
                                    continue lambda_start5761;
                                } else {
                                    return M0.rvoid();
                                }
                            } else {
                                M1.unsafe_vector_set_bang_(A3753, c13779, y3781);
                                var b13784 = M1.unsafe_fx_plus_(b13778, 1);
                                var c13785 = M1.unsafe_fx_plus_(c13779, 1);
                                if (M1.unsafe_fx_lt__eq_(b23775, b13784) !== false) {
                                    var loop3786 = function(_a137875766, _c137885767) {
                                        lambda_start5765: while (true) {
                                            let a13787 = _a137875766;
                                            let c13788 = _c137885767;
                                            if (M1.unsafe_fx_lt_(c13788, b13784) !== false) {
                                                M1.unsafe_vector_set_bang_(A3753, c13788, M1.unsafe_vector_ref(A3753, a13787));
                                                _a137875766 = M1.unsafe_fx_plus_(a13787, 1);
                                                _c137885767 = M1.unsafe_fx_plus_(c13788, 1);
                                                continue lambda_start5765;
                                            } else {
                                                return M0.rvoid();
                                            }
                                        }
                                    };
                                    return loop3786(a13777, c13785);
                                } else {
                                    _a137775762 = a13777;
                                    _b137785763 = b13784;
                                    _c137795764 = c13785;
                                    continue lambda_start5761;
                                }
                            }
                        }
                    };
                    return loop3776(Amid23773, Bmid13774, Blo3760);
                }
            }
        }
    };
    var Alo3789 = 0;
    var Amid13790 = n_by_2_3756;
    var Amid23791 = n_by_2_plus_3757;
    var Ahi3792 = n3755;
    var B1lo3793 = n3755;
    copying_mergesort3758(Amid13790, B1lo3793, n_by_2_plus_3757);
    if (M0.zero_p(n_by_2_3756) !== false) {
        var if_res5565 = M0.rvoid();
    } else {
        var if_res5565 = copying_mergesort3758(Alo3789, Amid23791, n_by_2_3756);
    }
    if_res5565;
    var b23794 = Ahi3792;
    var loop3795 = function(_a137965769, _b137975770, _c137985771) {
        lambda_start5768: while (true) {
            let a13796 = _a137965769;
            let b13797 = _b137975770;
            let c13798 = _c137985771;
            var x3799 = M1.unsafe_vector_ref(A3753, a13796);
            var y3800 = M1.unsafe_vector_ref(A3753, b13797);
            if (false !== false) {
                if (false !== false) {
                    var if_res5566 = less_than_p3754(false(y3800), false(x3799));
                } else {
                    var if_res5566 = less_than_p3754(y3800, x3799);
                }
                var if_res5568 = M0.not(if_res5566);
            } else {
                if (false !== false) {
                    var if_res5567 = less_than_p3754(false(x3799), false(y3800));
                } else {
                    var if_res5567 = less_than_p3754(x3799, y3800);
                }
                var if_res5568 = if_res5567;
            }
            if (if_res5568 !== false) {
                M1.unsafe_vector_set_bang_(A3753, c13798, x3799);
                var a13801 = M1.unsafe_fx_plus_(a13796, 1);
                var c13802 = M1.unsafe_fx_plus_(c13798, 1);
                if (M1.unsafe_fx_lt_(c13802, b13797) !== false) {
                    _a137965769 = a13801;
                    _b137975770 = b13797;
                    _c137985771 = c13802;
                    continue lambda_start5768;
                } else {
                    return M0.rvoid();
                }
            } else {
                M1.unsafe_vector_set_bang_(A3753, c13798, y3800);
                var b13803 = M1.unsafe_fx_plus_(b13797, 1);
                var c13804 = M1.unsafe_fx_plus_(c13798, 1);
                if (M1.unsafe_fx_lt__eq_(b23794, b13803) !== false) {
                    var loop3805 = function(_a138065773, _c138075774) {
                        lambda_start5772: while (true) {
                            let a13806 = _a138065773;
                            let c13807 = _c138075774;
                            if (M1.unsafe_fx_lt_(c13807, b13803) !== false) {
                                M1.unsafe_vector_set_bang_(A3753, c13807, M1.unsafe_vector_ref(A3753, a13806));
                                _a138065773 = M1.unsafe_fx_plus_(a13806, 1);
                                _c138075774 = M1.unsafe_fx_plus_(c13807, 1);
                                continue lambda_start5772;
                            } else {
                                return M0.rvoid();
                            }
                        }
                    };
                    return loop3805(a13796, c13804);
                } else {
                    _a137965769 = a13796;
                    _b137975770 = b13803;
                    _c137985771 = c13804;
                    continue lambda_start5768;
                }
            }
        }
    };
    return loop3795(B1lo3793, Amid23791, Alo3789);
};
var generic_sort_by_key3808 = function(A3809, less_than_p3810, n3811, key3812) {
    var n_by_2_3813 = M1.unsafe_fxrshift(n3811, 1);
    var n_by_2_plus_3814 = M1.unsafe_fx_(n3811, n_by_2_3813);
    var copying_mergesort3815 = function(Alo3816, Blo3817, n3818) {
        if (M1.unsafe_fx_eq_(n3818, 1) !== false) {
            return M1.unsafe_vector_set_bang_(A3809, Blo3817, M1.unsafe_vector_ref(A3809, Alo3816));
        } else {
            if (M1.unsafe_fx_eq_(n3818, 2) !== false) {
                var x3819 = M1.unsafe_vector_ref(A3809, Alo3816);
                var y3820 = M1.unsafe_vector_ref(A3809, M1.unsafe_fx_plus_(Alo3816, 1));
                if (key3812 !== false) {
                    var if_res5573 = less_than_p3810(key3812(y3820), key3812(x3819));
                } else {
                    var if_res5573 = less_than_p3810(y3820, x3819);
                }
                if (if_res5573 !== false) {
                    M1.unsafe_vector_set_bang_(A3809, Blo3817, y3820);
                    return M1.unsafe_vector_set_bang_(A3809, M1.unsafe_fx_plus_(Blo3817, 1), x3819);
                } else {
                    M1.unsafe_vector_set_bang_(A3809, Blo3817, x3819);
                    return M1.unsafe_vector_set_bang_(A3809, M1.unsafe_fx_plus_(Blo3817, 1), y3820);
                }
            } else {
                if (M1.unsafe_fx_lt_(n3818, 16) !== false) {
                    M1.unsafe_vector_set_bang_(A3809, Blo3817, M1.unsafe_vector_ref(A3809, Alo3816));
                    var iloop3821 = function(i3822) {
                        if (M1.unsafe_fx_lt_(i3822, n3818) !== false) {
                            var ref_i3823 = M1.unsafe_vector_ref(A3809, M1.unsafe_fx_plus_(Alo3816, i3822));
                            var jloop3824 = function(_j38255779) {
                                lambda_start5778: while (true) {
                                    let j3825 = _j38255779;
                                    var ref_j_13826 = M1.unsafe_vector_ref(A3809, M1.unsafe_fx_(j3825, 1));
                                    if (M1.unsafe_fx_lt_(Blo3817, j3825) !== false) {
                                        if (key3812 !== false) {
                                            var if_res5575 = less_than_p3810(key3812(ref_i3823), key3812(ref_j_13826));
                                        } else {
                                            var if_res5575 = less_than_p3810(ref_i3823, ref_j_13826);
                                        }
                                        var if_res5576 = if_res5575;
                                    } else {
                                        var if_res5576 = false;
                                    }
                                    if (if_res5576 !== false) {
                                        M1.unsafe_vector_set_bang_(A3809, j3825, ref_j_13826);
                                        _j38255779 = M1.unsafe_fx_(j3825, 1);
                                        continue lambda_start5778;
                                    } else {
                                        M1.unsafe_vector_set_bang_(A3809, j3825, ref_i3823);
                                        return iloop3821(M1.unsafe_fx_plus_(i3822, 1));
                                    }
                                }
                            };
                            return jloop3824(M1.unsafe_fx_plus_(Blo3817, i3822));
                        } else {
                            return M0.rvoid();
                        }
                    };
                    return iloop3821(1);
                } else {
                    var n_by_2_3827 = M1.unsafe_fxrshift(n3818, 1);
                    var n_by_2_plus_3828 = M1.unsafe_fx_(n3818, n_by_2_3827);
                    var Amid13829 = M1.unsafe_fx_plus_(Alo3816, n_by_2_3827);
                    var Amid23830 = M1.unsafe_fx_plus_(Alo3816, n_by_2_plus_3828);
                    var Bmid13831 = M1.unsafe_fx_plus_(Blo3817, n_by_2_3827);
                    copying_mergesort3815(Amid13829, Bmid13831, n_by_2_plus_3828);
                    copying_mergesort3815(Alo3816, Amid23830, n_by_2_3827);
                    var b23832 = M1.unsafe_fx_plus_(Blo3817, n3818);
                    var loop3833 = function(_a138345781, _b138355782, _c138365783) {
                        lambda_start5780: while (true) {
                            let a13834 = _a138345781;
                            let b13835 = _b138355782;
                            let c13836 = _c138365783;
                            var x3837 = M1.unsafe_vector_ref(A3809, a13834);
                            var y3838 = M1.unsafe_vector_ref(A3809, b13835);
                            if (true !== false) {
                                if (key3812 !== false) {
                                    var if_res5579 = less_than_p3810(key3812(y3838), key3812(x3837));
                                } else {
                                    var if_res5579 = less_than_p3810(y3838, x3837);
                                }
                                var if_res5581 = M0.not(if_res5579);
                            } else {
                                if (key3812 !== false) {
                                    var if_res5580 = less_than_p3810(key3812(x3837), key3812(y3838));
                                } else {
                                    var if_res5580 = less_than_p3810(x3837, y3838);
                                }
                                var if_res5581 = if_res5580;
                            }
                            if (if_res5581 !== false) {
                                M1.unsafe_vector_set_bang_(A3809, c13836, x3837);
                                var a13839 = M1.unsafe_fx_plus_(a13834, 1);
                                var c13840 = M1.unsafe_fx_plus_(c13836, 1);
                                if (M1.unsafe_fx_lt_(c13840, b13835) !== false) {
                                    _a138345781 = a13839;
                                    _b138355782 = b13835;
                                    _c138365783 = c13840;
                                    continue lambda_start5780;
                                } else {
                                    return M0.rvoid();
                                }
                            } else {
                                M1.unsafe_vector_set_bang_(A3809, c13836, y3838);
                                var b13841 = M1.unsafe_fx_plus_(b13835, 1);
                                var c13842 = M1.unsafe_fx_plus_(c13836, 1);
                                if (M1.unsafe_fx_lt__eq_(b23832, b13841) !== false) {
                                    var loop3843 = function(_a138445785, _c138455786) {
                                        lambda_start5784: while (true) {
                                            let a13844 = _a138445785;
                                            let c13845 = _c138455786;
                                            if (M1.unsafe_fx_lt_(c13845, b13841) !== false) {
                                                M1.unsafe_vector_set_bang_(A3809, c13845, M1.unsafe_vector_ref(A3809, a13844));
                                                _a138445785 = M1.unsafe_fx_plus_(a13844, 1);
                                                _c138455786 = M1.unsafe_fx_plus_(c13845, 1);
                                                continue lambda_start5784;
                                            } else {
                                                return M0.rvoid();
                                            }
                                        }
                                    };
                                    return loop3843(a13834, c13842);
                                } else {
                                    _a138345781 = a13834;
                                    _b138355782 = b13841;
                                    _c138365783 = c13842;
                                    continue lambda_start5780;
                                }
                            }
                        }
                    };
                    return loop3833(Amid23830, Bmid13831, Blo3817);
                }
            }
        }
    };
    var Alo3846 = 0;
    var Amid13847 = n_by_2_3813;
    var Amid23848 = n_by_2_plus_3814;
    var Ahi3849 = n3811;
    var B1lo3850 = n3811;
    copying_mergesort3815(Amid13847, B1lo3850, n_by_2_plus_3814);
    if (M0.zero_p(n_by_2_3813) !== false) {
        var if_res5589 = M0.rvoid();
    } else {
        var if_res5589 = copying_mergesort3815(Alo3846, Amid23848, n_by_2_3813);
    }
    if_res5589;
    var b23851 = Ahi3849;
    var loop3852 = function(_a138535788, _b138545789, _c138555790) {
        lambda_start5787: while (true) {
            let a13853 = _a138535788;
            let b13854 = _b138545789;
            let c13855 = _c138555790;
            var x3856 = M1.unsafe_vector_ref(A3809, a13853);
            var y3857 = M1.unsafe_vector_ref(A3809, b13854);
            if (false !== false) {
                if (key3812 !== false) {
                    var if_res5590 = less_than_p3810(key3812(y3857), key3812(x3856));
                } else {
                    var if_res5590 = less_than_p3810(y3857, x3856);
                }
                var if_res5592 = M0.not(if_res5590);
            } else {
                if (key3812 !== false) {
                    var if_res5591 = less_than_p3810(key3812(x3856), key3812(y3857));
                } else {
                    var if_res5591 = less_than_p3810(x3856, y3857);
                }
                var if_res5592 = if_res5591;
            }
            if (if_res5592 !== false) {
                M1.unsafe_vector_set_bang_(A3809, c13855, x3856);
                var a13858 = M1.unsafe_fx_plus_(a13853, 1);
                var c13859 = M1.unsafe_fx_plus_(c13855, 1);
                if (M1.unsafe_fx_lt_(c13859, b13854) !== false) {
                    _a138535788 = a13858;
                    _b138545789 = b13854;
                    _c138555790 = c13859;
                    continue lambda_start5787;
                } else {
                    return M0.rvoid();
                }
            } else {
                M1.unsafe_vector_set_bang_(A3809, c13855, y3857);
                var b13860 = M1.unsafe_fx_plus_(b13854, 1);
                var c13861 = M1.unsafe_fx_plus_(c13855, 1);
                if (M1.unsafe_fx_lt__eq_(b23851, b13860) !== false) {
                    var loop3862 = function(_a138635792, _c138645793) {
                        lambda_start5791: while (true) {
                            let a13863 = _a138635792;
                            let c13864 = _c138645793;
                            if (M1.unsafe_fx_lt_(c13864, b13860) !== false) {
                                M1.unsafe_vector_set_bang_(A3809, c13864, M1.unsafe_vector_ref(A3809, a13863));
                                _a138635792 = M1.unsafe_fx_plus_(a13863, 1);
                                _c138645793 = M1.unsafe_fx_plus_(c13864, 1);
                                continue lambda_start5791;
                            } else {
                                return M0.rvoid();
                            }
                        }
                    };
                    return loop3862(a13853, c13861);
                } else {
                    _a138535788 = a13853;
                    _b138545789 = b13860;
                    _c138555790 = c13861;
                    continue lambda_start5787;
                }
            }
        }
    };
    return loop3852(B1lo3850, Amid23848, Alo3846);
};
var cl5704 = function(lst3865, less_than_p3866) {
    var n3867 = M0.length(lst3865);
    if (M1.unsafe_fx_eq_(n3867, 0) !== false) {
        return lst3865;
    } else {
        if (false !== false) {
            var vec3868 = M0.make_vector(n3867 + M0.ceiling(n3867 / 2));
            var loop3869 = function(_i38705796, _lst38715797) {
                lambda_start5795: while (true) {
                    let i3870 = _i38705796;
                    let lst3871 = _lst38715797;
                    if (M0.pair_p(lst3871) !== false) {
                        var x3872 = M0.car(lst3871);
                        M1.unsafe_vector_set_bang_(vec3868, i3870, M0.cons(false(x3872), x3872));
                        _i38705796 = M1.unsafe_fx_plus_(i3870, 1);
                        _lst38715797 = M0.cdr(lst3871);
                        continue lambda_start5795;
                    } else {
                        return M0.rvoid();
                    }
                }
            };
            loop3869(0, lst3865);
            generic_sort_by_key3808(vec3868, less_than_p3866, n3867, M1.unsafe_car);
            var loop3873 = function(_i38745799, _r38755800) {
                lambda_start5798: while (true) {
                    let i3874 = _i38745799;
                    let r3875 = _r38755800;
                    var i3876 = M1.unsafe_fx_(i3874, 1);
                    if (M1.unsafe_fx_lt_(i3876, 0) !== false) {
                        return r3875;
                    } else {
                        _i38745799 = i3876;
                        _r38755800 = M0.cons(M1.unsafe_cdr(M1.unsafe_vector_ref(vec3868, i3876)), r3875);
                        continue lambda_start5798;
                    }
                }
            };
            return loop3873(n3867, $rjs_core.Pair.makeList());
        } else {
            var loop3877 = function(_last38785802, _next38795803) {
                lambda_start5801: while (true) {
                    let last3878 = _last38785802;
                    let next3879 = _next38795803;
                    var or_part3880 = M0.null_p(next3879);
                    if (or_part3880 !== false) {
                        return or_part3880;
                    } else {
                        if (false !== false) {
                            var if_res5710 = less_than_p3866(false(M1.unsafe_car(next3879)), false(last3878));
                        } else {
                            var if_res5710 = less_than_p3866(M1.unsafe_car(next3879), last3878);
                        }
                        if (M0.not(if_res5710) !== false) {
                            _last38785802 = M1.unsafe_car(next3879);
                            _next38795803 = M1.unsafe_cdr(next3879);
                            continue lambda_start5801;
                        } else {
                            return false;
                        }
                    }
                }
            };
            if (loop3877(M0.car(lst3865), M0.cdr(lst3865)) !== false) {
                return lst3865;
            } else {
                if (M1.unsafe_fx_lt__eq_(n3867, 3) !== false) {
                    if (M1.unsafe_fx_eq_(n3867, 1) !== false) {
                        return lst3865;
                    } else {
                        if (M1.unsafe_fx_eq_(n3867, 2) !== false) {
                            return M0.list(M0.cadr(lst3865), M0.car(lst3865));
                        } else {
                            var a3881 = M0.car(lst3865);
                            var b3882 = M0.cadr(lst3865);
                            var c3883 = M0.caddr(lst3865);
                            if (false !== false) {
                                var if_res5713 = less_than_p3866(false(b3882), false(a3881));
                            } else {
                                var if_res5713 = less_than_p3866(b3882, a3881);
                            }
                            if (if_res5713 !== false) {
                                if (false !== false) {
                                    var if_res5714 = less_than_p3866(false(c3883), false(b3882));
                                } else {
                                    var if_res5714 = less_than_p3866(c3883, b3882);
                                }
                                if (if_res5714 !== false) {
                                    return M0.list(c3883, b3882, a3881);
                                } else {
                                    if (false !== false) {
                                        var if_res5715 = less_than_p3866(false(c3883), false(a3881));
                                    } else {
                                        var if_res5715 = less_than_p3866(c3883, a3881);
                                    }
                                    if (if_res5715 !== false) {
                                        return M0.list(b3882, c3883, a3881);
                                    } else {
                                        return M0.list(b3882, a3881, c3883);
                                    }
                                }
                            } else {
                                if (false !== false) {
                                    var if_res5718 = less_than_p3866(false(c3883), false(a3881));
                                } else {
                                    var if_res5718 = less_than_p3866(c3883, a3881);
                                }
                                if (if_res5718 !== false) {
                                    return M0.list(c3883, a3881, b3882);
                                } else {
                                    return M0.list(a3881, c3883, b3882);
                                }
                            }
                        }
                    }
                } else {
                    var vec3884 = M0.make_vector(n3867 + M0.ceiling(n3867 / 2));
                    var loop3885 = function(_i38865805, _lst38875806) {
                        lambda_start5804: while (true) {
                            let i3886 = _i38865805;
                            let lst3887 = _lst38875806;
                            if (M0.pair_p(lst3887) !== false) {
                                M0.vector_set_bang_(vec3884, i3886, M0.car(lst3887));
                                _i38865805 = M0.add1(i3886);
                                _lst38875806 = M0.cdr(lst3887);
                                continue lambda_start5804;
                            } else {
                                return M0.rvoid();
                            }
                        }
                    };
                    loop3885(0, lst3865);
                    generic_sort3752(vec3884, less_than_p3866, n3867);
                    var loop3888 = function(_i38895808, _r38905809) {
                        lambda_start5807: while (true) {
                            let i3889 = _i38895808;
                            let r3890 = _r38905809;
                            var i3891 = M0.sub1(i3889);
                            if (M0.__lt_(i3891, 0) !== false) {
                                return r3890;
                            } else {
                                _i38895808 = i3891;
                                _r38905809 = M0.cons(M0.vector_ref(vec3884, i3891), r3890);
                                continue lambda_start5807;
                            }
                        }
                    };
                    return loop3888(n3867, $rjs_core.Pair.makeList());
                }
            }
        }
    }
};
var cl5705 = function(lst3892, less_than_p3893, getkey3894) {
    if (getkey3894 !== false) {
        var if_res5729 = M0.not(M0.eq_p(M0.values, getkey3894));
    } else {
        var if_res5729 = false;
    }
    if (if_res5729 !== false) {
        return sort(lst3892, less_than_p3893, getkey3894, false);
    } else {
        return sort(lst3892, less_than_p3893);
    }
};
var cl5706 = function(lst3895, less_than_p3896, getkey3897, cache_keys_p3898) {
    if (getkey3897 !== false) {
        var if_res5731 = M0.not(M0.eq_p(M0.values, getkey3897));
    } else {
        var if_res5731 = false;
    }
    if (if_res5731 !== false) {
        var n3899 = M0.length(lst3895);
        if (M1.unsafe_fx_eq_(n3899, 0) !== false) {
            return lst3895;
        } else {
            if (cache_keys_p3898 !== false) {
                var vec3900 = M0.make_vector(n3899 + M0.ceiling(n3899 / 2));
                var loop3901 = function(_i39025813, _lst39035814) {
                    lambda_start5812: while (true) {
                        let i3902 = _i39025813;
                        let lst3903 = _lst39035814;
                        if (M0.pair_p(lst3903) !== false) {
                            var x3904 = M0.car(lst3903);
                            M1.unsafe_vector_set_bang_(vec3900, i3902, M0.cons(getkey3897(x3904), x3904));
                            _i39025813 = M1.unsafe_fx_plus_(i3902, 1);
                            _lst39035814 = M0.cdr(lst3903);
                            continue lambda_start5812;
                        } else {
                            return M0.rvoid();
                        }
                    }
                };
                loop3901(0, lst3895);
                generic_sort_by_key3808(vec3900, less_than_p3896, n3899, M1.unsafe_car);
                var loop3905 = function(_i39065816, _r39075817) {
                    lambda_start5815: while (true) {
                        let i3906 = _i39065816;
                        let r3907 = _r39075817;
                        var i3908 = M1.unsafe_fx_(i3906, 1);
                        if (M1.unsafe_fx_lt_(i3908, 0) !== false) {
                            return r3907;
                        } else {
                            _i39065816 = i3908;
                            _r39075817 = M0.cons(M1.unsafe_cdr(M1.unsafe_vector_ref(vec3900, i3908)), r3907);
                            continue lambda_start5815;
                        }
                    }
                };
                return loop3905(n3899, $rjs_core.Pair.makeList());
            } else {
                var loop3909 = function(_last39105819, _next39115820) {
                    lambda_start5818: while (true) {
                        let last3910 = _last39105819;
                        let next3911 = _next39115820;
                        var or_part3912 = M0.null_p(next3911);
                        if (or_part3912 !== false) {
                            return or_part3912;
                        } else {
                            if (getkey3897 !== false) {
                                var if_res5734 = less_than_p3896(getkey3897(M1.unsafe_car(next3911)), getkey3897(last3910));
                            } else {
                                var if_res5734 = less_than_p3896(M1.unsafe_car(next3911), last3910);
                            }
                            if (M0.not(if_res5734) !== false) {
                                _last39105819 = M1.unsafe_car(next3911);
                                _next39115820 = M1.unsafe_cdr(next3911);
                                continue lambda_start5818;
                            } else {
                                return false;
                            }
                        }
                    }
                };
                if (loop3909(M0.car(lst3895), M0.cdr(lst3895)) !== false) {
                    return lst3895;
                } else {
                    if (M1.unsafe_fx_lt__eq_(n3899, 3) !== false) {
                        if (M1.unsafe_fx_eq_(n3899, 1) !== false) {
                            return lst3895;
                        } else {
                            if (M1.unsafe_fx_eq_(n3899, 2) !== false) {
                                return M0.list(M0.cadr(lst3895), M0.car(lst3895));
                            } else {
                                var a3913 = M0.car(lst3895);
                                var b3914 = M0.cadr(lst3895);
                                var c3915 = M0.caddr(lst3895);
                                if (getkey3897 !== false) {
                                    var if_res5737 = less_than_p3896(getkey3897(b3914), getkey3897(a3913));
                                } else {
                                    var if_res5737 = less_than_p3896(b3914, a3913);
                                }
                                if (if_res5737 !== false) {
                                    if (getkey3897 !== false) {
                                        var if_res5738 = less_than_p3896(getkey3897(c3915), getkey3897(b3914));
                                    } else {
                                        var if_res5738 = less_than_p3896(c3915, b3914);
                                    }
                                    if (if_res5738 !== false) {
                                        return M0.list(c3915, b3914, a3913);
                                    } else {
                                        if (getkey3897 !== false) {
                                            var if_res5739 = less_than_p3896(getkey3897(c3915), getkey3897(a3913));
                                        } else {
                                            var if_res5739 = less_than_p3896(c3915, a3913);
                                        }
                                        if (if_res5739 !== false) {
                                            return M0.list(b3914, c3915, a3913);
                                        } else {
                                            return M0.list(b3914, a3913, c3915);
                                        }
                                    }
                                } else {
                                    if (getkey3897 !== false) {
                                        var if_res5742 = less_than_p3896(getkey3897(c3915), getkey3897(a3913));
                                    } else {
                                        var if_res5742 = less_than_p3896(c3915, a3913);
                                    }
                                    if (if_res5742 !== false) {
                                        return M0.list(c3915, a3913, b3914);
                                    } else {
                                        return M0.list(a3913, c3915, b3914);
                                    }
                                }
                            }
                        }
                    } else {
                        var vec3916 = M0.make_vector(n3899 + M0.ceiling(n3899 / 2));
                        var loop3917 = function(_i39185822, _lst39195823) {
                            lambda_start5821: while (true) {
                                let i3918 = _i39185822;
                                let lst3919 = _lst39195823;
                                if (M0.pair_p(lst3919) !== false) {
                                    M0.vector_set_bang_(vec3916, i3918, M0.car(lst3919));
                                    _i39185822 = M0.add1(i3918);
                                    _lst39195823 = M0.cdr(lst3919);
                                    continue lambda_start5821;
                                } else {
                                    return M0.rvoid();
                                }
                            }
                        };
                        loop3917(0, lst3895);
                        generic_sort_by_key3808(vec3916, less_than_p3896, n3899, getkey3897);
                        var loop3920 = function(_i39215825, _r39225826) {
                            lambda_start5824: while (true) {
                                let i3921 = _i39215825;
                                let r3922 = _r39225826;
                                var i3923 = M0.sub1(i3921);
                                if (M0.__lt_(i3923, 0) !== false) {
                                    return r3922;
                                } else {
                                    _i39215825 = i3923;
                                    _r39225826 = M0.cons(M0.vector_ref(vec3916, i3923), r3922);
                                    continue lambda_start5824;
                                }
                            }
                        };
                        return loop3920(n3899, $rjs_core.Pair.makeList());
                    }
                }
            }
        }
    } else {
        return sort(lst3895, less_than_p3896);
    }
};
var temp5754 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam5707 = {
        '2': cl5704,
        '3': cl5705,
        '4': cl5706
    } [arguments.length];
    if (fixed_lam5707 !== undefined) {
        return fixed_lam5707.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [2, 3, 4]);
var cl5650 = function(vec3924, less_than_p3925, start3926, end3927) {
    var n3928 = end3927 - start3926;
    if (true !== false) {
        var if_res5653 = M0.make_vector(n3928);
    } else {
        var if_res5653 = vec3924;
    }
    var dst_vec3929 = if_res5653;
    if (true !== false) {
        var if_res5654 = 0;
    } else {
        var if_res5654 = start3926;
    }
    var dst_start3930 = if_res5654;
    if (M1.unsafe_fx_eq_(n3928, 0) !== false) {
        var if_res5675 = M0.rvoid();
    } else {
        if (false !== false) {
            var work_vec3931 = M0.make_vector(n3928 + M0.ceiling(n3928 / 2), true);
            var loop3932 = function(_i39335830) {
                lambda_start5829: while (true) {
                    let i3933 = _i39335830;
                    if (M1.unsafe_fx_lt_(i3933, n3928) !== false) {
                        var x3934 = M1.unsafe_vector_ref(vec3924, M1.unsafe_fx_plus_(i3933, start3926));
                        M1.unsafe_vector_set_bang_(work_vec3931, i3933, M0.cons(false(x3934), x3934));
                        _i39335830 = M1.unsafe_fx_plus_(i3933, 1);
                        continue lambda_start5829;
                    } else {
                        return M0.rvoid();
                    }
                }
            };
            loop3932(0);
            generic_sort_by_key3808(work_vec3931, less_than_p3925, n3928, M1.unsafe_car);
            var loop3935 = function(_i39365832) {
                lambda_start5831: while (true) {
                    let i3936 = _i39365832;
                    if (M1.unsafe_fx_lt_(i3936, n3928) !== false) {
                        M1.unsafe_vector_set_bang_(dst_vec3929, M1.unsafe_fx_plus_(i3936, dst_start3930), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec3931, i3936)));
                        _i39365832 = M1.unsafe_fx_plus_(i3936, 1);
                        continue lambda_start5831;
                    } else {
                        return M0.rvoid();
                    }
                }
            };
            var if_res5674 = loop3935(0);
        } else {
            var loop3937 = function(_prev_val39385834, _next_index39395835) {
                lambda_start5833: while (true) {
                    let prev_val3938 = _prev_val39385834;
                    let next_index3939 = _next_index39395835;
                    var or_part3940 = M1.unsafe_fx_eq_(next_index3939, end3927);
                    if (or_part3940 !== false) {
                        return or_part3940;
                    } else {
                        var next_val3941 = M1.unsafe_vector_ref(vec3924, next_index3939);
                        if (false !== false) {
                            var if_res5657 = less_than_p3925(false(next_val3941), false(prev_val3938));
                        } else {
                            var if_res5657 = less_than_p3925(next_val3941, prev_val3938);
                        }
                        if (M0.not(if_res5657) !== false) {
                            _prev_val39385834 = next_val3941;
                            _next_index39395835 = M1.unsafe_fx_plus_(next_index3939, 1);
                            continue lambda_start5833;
                        } else {
                            return false;
                        }
                    }
                }
            };
            if (loop3937(M1.unsafe_vector_ref(vec3924, start3926), M1.unsafe_fx_plus_(start3926, 1)) !== false) {
                if (true !== false) {
                    var if_res5660 = M0.vector_copy_bang_(dst_vec3929, dst_start3930, vec3924, start3926, end3927);
                } else {
                    var if_res5660 = M0.rvoid();
                }
                var if_res5673 = if_res5660;
            } else {
                if (M1.unsafe_fx_lt__eq_(n3928, 3) !== false) {
                    if (true !== false) {
                        var if_res5661 = M0.vector_copy_bang_(dst_vec3929, dst_start3930, vec3924, start3926, end3927);
                    } else {
                        var if_res5661 = M0.rvoid();
                    }
                    if_res5661;
                    if (M1.unsafe_fx_eq_(n3928, 1) !== false) {
                        var if_res5671 = M0.rvoid();
                    } else {
                        if (M1.unsafe_fx_eq_(n3928, 2) !== false) {
                            var tmp3942 = M1.unsafe_vector_ref(dst_vec3929, M1.unsafe_fx_plus_(dst_start3930, 0));
                            M1.unsafe_vector_set_bang_(dst_vec3929, M1.unsafe_fx_plus_(dst_start3930, 0), M1.unsafe_vector_ref(dst_vec3929, M1.unsafe_fx_plus_(dst_start3930, 1)));
                            var if_res5670 = M1.unsafe_vector_set_bang_(dst_vec3929, M1.unsafe_fx_plus_(dst_start3930, 1), tmp3942);
                        } else {
                            var a3943 = M1.unsafe_vector_ref(dst_vec3929, M1.unsafe_fx_plus_(dst_start3930, 0));
                            var b3944 = M1.unsafe_vector_ref(dst_vec3929, M1.unsafe_fx_plus_(dst_start3930, 1));
                            var c3945 = M1.unsafe_vector_ref(dst_vec3929, M1.unsafe_fx_plus_(dst_start3930, 2));
                            if (false !== false) {
                                var if_res5662 = less_than_p3925(false(b3944), false(a3943));
                            } else {
                                var if_res5662 = less_than_p3925(b3944, a3943);
                            }
                            if (if_res5662 !== false) {
                                if (false !== false) {
                                    var if_res5663 = less_than_p3925(false(c3945), false(b3944));
                                } else {
                                    var if_res5663 = less_than_p3925(c3945, b3944);
                                }
                                if (if_res5663 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec3929, M1.unsafe_fx_plus_(dst_start3930, 0), c3945);
                                    var if_res5666 = M1.unsafe_vector_set_bang_(dst_vec3929, M1.unsafe_fx_plus_(dst_start3930, 2), a3943);
                                } else {
                                    if (false !== false) {
                                        var if_res5664 = less_than_p3925(false(c3945), false(a3943));
                                    } else {
                                        var if_res5664 = less_than_p3925(c3945, a3943);
                                    }
                                    if (if_res5664 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3929, M1.unsafe_fx_plus_(dst_start3930, 0), b3944);
                                        M1.unsafe_vector_set_bang_(dst_vec3929, M1.unsafe_fx_plus_(dst_start3930, 1), c3945);
                                        var if_res5665 = M1.unsafe_vector_set_bang_(dst_vec3929, M1.unsafe_fx_plus_(dst_start3930, 2), a3943);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec3929, M1.unsafe_fx_plus_(dst_start3930, 0), b3944);
                                        var if_res5665 = M1.unsafe_vector_set_bang_(dst_vec3929, M1.unsafe_fx_plus_(dst_start3930, 1), a3943);
                                    }
                                    var if_res5666 = if_res5665;
                                }
                                var if_res5669 = if_res5666;
                            } else {
                                if (false !== false) {
                                    var if_res5667 = less_than_p3925(false(c3945), false(a3943));
                                } else {
                                    var if_res5667 = less_than_p3925(c3945, a3943);
                                }
                                if (if_res5667 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec3929, M1.unsafe_fx_plus_(dst_start3930, 0), c3945);
                                    M1.unsafe_vector_set_bang_(dst_vec3929, M1.unsafe_fx_plus_(dst_start3930, 1), a3943);
                                    var if_res5668 = M1.unsafe_vector_set_bang_(dst_vec3929, M1.unsafe_fx_plus_(dst_start3930, 2), b3944);
                                } else {
                                    M1.unsafe_vector_set_bang_(dst_vec3929, M1.unsafe_fx_plus_(dst_start3930, 1), c3945);
                                    var if_res5668 = M1.unsafe_vector_set_bang_(dst_vec3929, M1.unsafe_fx_plus_(dst_start3930, 2), b3944);
                                }
                                var if_res5669 = if_res5668;
                            }
                            var if_res5670 = if_res5669;
                        }
                        var if_res5671 = if_res5670;
                    }
                    var if_res5672 = if_res5671;
                } else {
                    var work_vec3946 = M0.make_vector(n3928 + M0.ceiling(n3928 / 2), false);
                    M0.vector_copy_bang_(work_vec3946, 0, vec3924, start3926, end3927);
                    generic_sort3752(work_vec3946, less_than_p3925, n3928);
                    var if_res5672 = M0.vector_copy_bang_(dst_vec3929, dst_start3930, work_vec3946, 0, n3928);
                }
                var if_res5673 = if_res5672;
            }
            var if_res5674 = if_res5673;
        }
        var if_res5675 = if_res5674;
    }
    if_res5675;
    if (true !== false) {
        return dst_vec3929;
    } else {
        return M0.rvoid();
    }
};
var cl5651 = function(vec3947, less_than_p3948, start3949, end3950, getkey3951, cache_keys_p3952) {
    if (getkey3951 !== false) {
        var if_res5677 = M0.not(M0.eq_p(M0.values, getkey3951));
    } else {
        var if_res5677 = false;
    }
    if (if_res5677 !== false) {
        var n3953 = end3950 - start3949;
        if (true !== false) {
            var if_res5678 = M0.make_vector(n3953);
        } else {
            var if_res5678 = vec3947;
        }
        var dst_vec3954 = if_res5678;
        if (true !== false) {
            var if_res5679 = 0;
        } else {
            var if_res5679 = start3949;
        }
        var dst_start3955 = if_res5679;
        if (M1.unsafe_fx_eq_(n3953, 0) !== false) {
            var if_res5700 = M0.rvoid();
        } else {
            if (cache_keys_p3952 !== false) {
                var work_vec3956 = M0.make_vector(n3953 + M0.ceiling(n3953 / 2), true);
                var loop3957 = function(_i39585838) {
                    lambda_start5837: while (true) {
                        let i3958 = _i39585838;
                        if (M1.unsafe_fx_lt_(i3958, n3953) !== false) {
                            var x3959 = M1.unsafe_vector_ref(vec3947, M1.unsafe_fx_plus_(i3958, start3949));
                            M1.unsafe_vector_set_bang_(work_vec3956, i3958, M0.cons(getkey3951(x3959), x3959));
                            _i39585838 = M1.unsafe_fx_plus_(i3958, 1);
                            continue lambda_start5837;
                        } else {
                            return M0.rvoid();
                        }
                    }
                };
                loop3957(0);
                generic_sort_by_key3808(work_vec3956, less_than_p3948, n3953, M1.unsafe_car);
                var loop3960 = function(_i39615840) {
                    lambda_start5839: while (true) {
                        let i3961 = _i39615840;
                        if (M1.unsafe_fx_lt_(i3961, n3953) !== false) {
                            M1.unsafe_vector_set_bang_(dst_vec3954, M1.unsafe_fx_plus_(i3961, dst_start3955), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec3956, i3961)));
                            _i39615840 = M1.unsafe_fx_plus_(i3961, 1);
                            continue lambda_start5839;
                        } else {
                            return M0.rvoid();
                        }
                    }
                };
                var if_res5699 = loop3960(0);
            } else {
                var loop3962 = function(_prev_val39635842, _next_index39645843) {
                    lambda_start5841: while (true) {
                        let prev_val3963 = _prev_val39635842;
                        let next_index3964 = _next_index39645843;
                        var or_part3965 = M1.unsafe_fx_eq_(next_index3964, end3950);
                        if (or_part3965 !== false) {
                            return or_part3965;
                        } else {
                            var next_val3966 = M1.unsafe_vector_ref(vec3947, next_index3964);
                            if (getkey3951 !== false) {
                                var if_res5682 = less_than_p3948(getkey3951(next_val3966), getkey3951(prev_val3963));
                            } else {
                                var if_res5682 = less_than_p3948(next_val3966, prev_val3963);
                            }
                            if (M0.not(if_res5682) !== false) {
                                _prev_val39635842 = next_val3966;
                                _next_index39645843 = M1.unsafe_fx_plus_(next_index3964, 1);
                                continue lambda_start5841;
                            } else {
                                return false;
                            }
                        }
                    }
                };
                if (loop3962(M1.unsafe_vector_ref(vec3947, start3949), M1.unsafe_fx_plus_(start3949, 1)) !== false) {
                    if (true !== false) {
                        var if_res5685 = M0.vector_copy_bang_(dst_vec3954, dst_start3955, vec3947, start3949, end3950);
                    } else {
                        var if_res5685 = M0.rvoid();
                    }
                    var if_res5698 = if_res5685;
                } else {
                    if (M1.unsafe_fx_lt__eq_(n3953, 3) !== false) {
                        if (true !== false) {
                            var if_res5686 = M0.vector_copy_bang_(dst_vec3954, dst_start3955, vec3947, start3949, end3950);
                        } else {
                            var if_res5686 = M0.rvoid();
                        }
                        if_res5686;
                        if (M1.unsafe_fx_eq_(n3953, 1) !== false) {
                            var if_res5696 = M0.rvoid();
                        } else {
                            if (M1.unsafe_fx_eq_(n3953, 2) !== false) {
                                var tmp3967 = M1.unsafe_vector_ref(dst_vec3954, M1.unsafe_fx_plus_(dst_start3955, 0));
                                M1.unsafe_vector_set_bang_(dst_vec3954, M1.unsafe_fx_plus_(dst_start3955, 0), M1.unsafe_vector_ref(dst_vec3954, M1.unsafe_fx_plus_(dst_start3955, 1)));
                                var if_res5695 = M1.unsafe_vector_set_bang_(dst_vec3954, M1.unsafe_fx_plus_(dst_start3955, 1), tmp3967);
                            } else {
                                var a3968 = M1.unsafe_vector_ref(dst_vec3954, M1.unsafe_fx_plus_(dst_start3955, 0));
                                var b3969 = M1.unsafe_vector_ref(dst_vec3954, M1.unsafe_fx_plus_(dst_start3955, 1));
                                var c3970 = M1.unsafe_vector_ref(dst_vec3954, M1.unsafe_fx_plus_(dst_start3955, 2));
                                if (getkey3951 !== false) {
                                    var if_res5687 = less_than_p3948(getkey3951(b3969), getkey3951(a3968));
                                } else {
                                    var if_res5687 = less_than_p3948(b3969, a3968);
                                }
                                if (if_res5687 !== false) {
                                    if (getkey3951 !== false) {
                                        var if_res5688 = less_than_p3948(getkey3951(c3970), getkey3951(b3969));
                                    } else {
                                        var if_res5688 = less_than_p3948(c3970, b3969);
                                    }
                                    if (if_res5688 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3954, M1.unsafe_fx_plus_(dst_start3955, 0), c3970);
                                        var if_res5691 = M1.unsafe_vector_set_bang_(dst_vec3954, M1.unsafe_fx_plus_(dst_start3955, 2), a3968);
                                    } else {
                                        if (getkey3951 !== false) {
                                            var if_res5689 = less_than_p3948(getkey3951(c3970), getkey3951(a3968));
                                        } else {
                                            var if_res5689 = less_than_p3948(c3970, a3968);
                                        }
                                        if (if_res5689 !== false) {
                                            M1.unsafe_vector_set_bang_(dst_vec3954, M1.unsafe_fx_plus_(dst_start3955, 0), b3969);
                                            M1.unsafe_vector_set_bang_(dst_vec3954, M1.unsafe_fx_plus_(dst_start3955, 1), c3970);
                                            var if_res5690 = M1.unsafe_vector_set_bang_(dst_vec3954, M1.unsafe_fx_plus_(dst_start3955, 2), a3968);
                                        } else {
                                            M1.unsafe_vector_set_bang_(dst_vec3954, M1.unsafe_fx_plus_(dst_start3955, 0), b3969);
                                            var if_res5690 = M1.unsafe_vector_set_bang_(dst_vec3954, M1.unsafe_fx_plus_(dst_start3955, 1), a3968);
                                        }
                                        var if_res5691 = if_res5690;
                                    }
                                    var if_res5694 = if_res5691;
                                } else {
                                    if (getkey3951 !== false) {
                                        var if_res5692 = less_than_p3948(getkey3951(c3970), getkey3951(a3968));
                                    } else {
                                        var if_res5692 = less_than_p3948(c3970, a3968);
                                    }
                                    if (if_res5692 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3954, M1.unsafe_fx_plus_(dst_start3955, 0), c3970);
                                        M1.unsafe_vector_set_bang_(dst_vec3954, M1.unsafe_fx_plus_(dst_start3955, 1), a3968);
                                        var if_res5693 = M1.unsafe_vector_set_bang_(dst_vec3954, M1.unsafe_fx_plus_(dst_start3955, 2), b3969);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec3954, M1.unsafe_fx_plus_(dst_start3955, 1), c3970);
                                        var if_res5693 = M1.unsafe_vector_set_bang_(dst_vec3954, M1.unsafe_fx_plus_(dst_start3955, 2), b3969);
                                    }
                                    var if_res5694 = if_res5693;
                                }
                                var if_res5695 = if_res5694;
                            }
                            var if_res5696 = if_res5695;
                        }
                        var if_res5697 = if_res5696;
                    } else {
                        var work_vec3971 = M0.make_vector(n3953 + M0.ceiling(n3953 / 2), false);
                        M0.vector_copy_bang_(work_vec3971, 0, vec3947, start3949, end3950);
                        generic_sort_by_key3808(work_vec3971, less_than_p3948, n3953, getkey3951);
                        var if_res5697 = M0.vector_copy_bang_(dst_vec3954, dst_start3955, work_vec3971, 0, n3953);
                    }
                    var if_res5698 = if_res5697;
                }
                var if_res5699 = if_res5698;
            }
            var if_res5700 = if_res5699;
        }
        if_res5700;
        if (true !== false) {
            return dst_vec3954;
        } else {
            return M0.rvoid();
        }
    } else {
        return vector_sort(vec3947, less_than_p3948, start3949, end3950);
    }
};
var temp5703 = $rjs_core.attachProcedureArity(function() {
    var fixed_lam5652 = {
        '4': cl5650,
        '6': cl5651
    } [arguments.length];
    if (fixed_lam5652 !== undefined) {
        return fixed_lam5652.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 6]);
var cl5597 = function(vec3972, less_than_p3973, start3974, end3975) {
    var n3976 = end3975 - start3974;
    if (false !== false) {
        var if_res5600 = M0.make_vector(n3976);
    } else {
        var if_res5600 = vec3972;
    }
    var dst_vec3977 = if_res5600;
    if (false !== false) {
        var if_res5601 = 0;
    } else {
        var if_res5601 = start3974;
    }
    var dst_start3978 = if_res5601;
    if (M1.unsafe_fx_eq_(n3976, 0) !== false) {
        var if_res5622 = M0.rvoid();
    } else {
        if (false !== false) {
            var work_vec3979 = M0.make_vector(n3976 + M0.ceiling(n3976 / 2), true);
            var loop3980 = function(_i39815847) {
                lambda_start5846: while (true) {
                    let i3981 = _i39815847;
                    if (M1.unsafe_fx_lt_(i3981, n3976) !== false) {
                        var x3982 = M1.unsafe_vector_ref(vec3972, M1.unsafe_fx_plus_(i3981, start3974));
                        M1.unsafe_vector_set_bang_(work_vec3979, i3981, M0.cons(false(x3982), x3982));
                        _i39815847 = M1.unsafe_fx_plus_(i3981, 1);
                        continue lambda_start5846;
                    } else {
                        return M0.rvoid();
                    }
                }
            };
            loop3980(0);
            generic_sort_by_key3808(work_vec3979, less_than_p3973, n3976, M1.unsafe_car);
            var loop3983 = function(_i39845849) {
                lambda_start5848: while (true) {
                    let i3984 = _i39845849;
                    if (M1.unsafe_fx_lt_(i3984, n3976) !== false) {
                        M1.unsafe_vector_set_bang_(dst_vec3977, M1.unsafe_fx_plus_(i3984, dst_start3978), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec3979, i3984)));
                        _i39845849 = M1.unsafe_fx_plus_(i3984, 1);
                        continue lambda_start5848;
                    } else {
                        return M0.rvoid();
                    }
                }
            };
            var if_res5621 = loop3983(0);
        } else {
            var loop3985 = function(_prev_val39865851, _next_index39875852) {
                lambda_start5850: while (true) {
                    let prev_val3986 = _prev_val39865851;
                    let next_index3987 = _next_index39875852;
                    var or_part3988 = M1.unsafe_fx_eq_(next_index3987, end3975);
                    if (or_part3988 !== false) {
                        return or_part3988;
                    } else {
                        var next_val3989 = M1.unsafe_vector_ref(vec3972, next_index3987);
                        if (false !== false) {
                            var if_res5604 = less_than_p3973(false(next_val3989), false(prev_val3986));
                        } else {
                            var if_res5604 = less_than_p3973(next_val3989, prev_val3986);
                        }
                        if (M0.not(if_res5604) !== false) {
                            _prev_val39865851 = next_val3989;
                            _next_index39875852 = M1.unsafe_fx_plus_(next_index3987, 1);
                            continue lambda_start5850;
                        } else {
                            return false;
                        }
                    }
                }
            };
            if (loop3985(M1.unsafe_vector_ref(vec3972, start3974), M1.unsafe_fx_plus_(start3974, 1)) !== false) {
                if (false !== false) {
                    var if_res5607 = M0.vector_copy_bang_(dst_vec3977, dst_start3978, vec3972, start3974, end3975);
                } else {
                    var if_res5607 = M0.rvoid();
                }
                var if_res5620 = if_res5607;
            } else {
                if (M1.unsafe_fx_lt__eq_(n3976, 3) !== false) {
                    if (false !== false) {
                        var if_res5608 = M0.vector_copy_bang_(dst_vec3977, dst_start3978, vec3972, start3974, end3975);
                    } else {
                        var if_res5608 = M0.rvoid();
                    }
                    if_res5608;
                    if (M1.unsafe_fx_eq_(n3976, 1) !== false) {
                        var if_res5618 = M0.rvoid();
                    } else {
                        if (M1.unsafe_fx_eq_(n3976, 2) !== false) {
                            var tmp3990 = M1.unsafe_vector_ref(dst_vec3977, M1.unsafe_fx_plus_(dst_start3978, 0));
                            M1.unsafe_vector_set_bang_(dst_vec3977, M1.unsafe_fx_plus_(dst_start3978, 0), M1.unsafe_vector_ref(dst_vec3977, M1.unsafe_fx_plus_(dst_start3978, 1)));
                            var if_res5617 = M1.unsafe_vector_set_bang_(dst_vec3977, M1.unsafe_fx_plus_(dst_start3978, 1), tmp3990);
                        } else {
                            var a3991 = M1.unsafe_vector_ref(dst_vec3977, M1.unsafe_fx_plus_(dst_start3978, 0));
                            var b3992 = M1.unsafe_vector_ref(dst_vec3977, M1.unsafe_fx_plus_(dst_start3978, 1));
                            var c3993 = M1.unsafe_vector_ref(dst_vec3977, M1.unsafe_fx_plus_(dst_start3978, 2));
                            if (false !== false) {
                                var if_res5609 = less_than_p3973(false(b3992), false(a3991));
                            } else {
                                var if_res5609 = less_than_p3973(b3992, a3991);
                            }
                            if (if_res5609 !== false) {
                                if (false !== false) {
                                    var if_res5610 = less_than_p3973(false(c3993), false(b3992));
                                } else {
                                    var if_res5610 = less_than_p3973(c3993, b3992);
                                }
                                if (if_res5610 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec3977, M1.unsafe_fx_plus_(dst_start3978, 0), c3993);
                                    var if_res5613 = M1.unsafe_vector_set_bang_(dst_vec3977, M1.unsafe_fx_plus_(dst_start3978, 2), a3991);
                                } else {
                                    if (false !== false) {
                                        var if_res5611 = less_than_p3973(false(c3993), false(a3991));
                                    } else {
                                        var if_res5611 = less_than_p3973(c3993, a3991);
                                    }
                                    if (if_res5611 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec3977, M1.unsafe_fx_plus_(dst_start3978, 0), b3992);
                                        M1.unsafe_vector_set_bang_(dst_vec3977, M1.unsafe_fx_plus_(dst_start3978, 1), c3993);
                                        var if_res5612 = M1.unsafe_vector_set_bang_(dst_vec3977, M1.unsafe_fx_plus_(dst_start3978, 2), a3991);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec3977, M1.unsafe_fx_plus_(dst_start3978, 0), b3992);
                                        var if_res5612 = M1.unsafe_vector_set_bang_(dst_vec3977, M1.unsafe_fx_plus_(dst_start3978, 1), a3991);
                                    }
                                    var if_res5613 = if_res5612;
                                }
                                var if_res5616 = if_res5613;
                            } else {
                                if (false !== false) {
                                    var if_res5614 = less_than_p3973(false(c3993), false(a3991));
                                } else {
                                    var if_res5614 = less_than_p3973(c3993, a3991);
                                }
                                if (if_res5614 !== false) {
                                    M1.unsafe_vector_set_bang_(dst_vec3977, M1.unsafe_fx_plus_(dst_start3978, 0), c3993);
                                    M1.unsafe_vector_set_bang_(dst_vec3977, M1.unsafe_fx_plus_(dst_start3978, 1), a3991);
                                    var if_res5615 = M1.unsafe_vector_set_bang_(dst_vec3977, M1.unsafe_fx_plus_(dst_start3978, 2), b3992);
                                } else {
                                    M1.unsafe_vector_set_bang_(dst_vec3977, M1.unsafe_fx_plus_(dst_start3978, 1), c3993);
                                    var if_res5615 = M1.unsafe_vector_set_bang_(dst_vec3977, M1.unsafe_fx_plus_(dst_start3978, 2), b3992);
                                }
                                var if_res5616 = if_res5615;
                            }
                            var if_res5617 = if_res5616;
                        }
                        var if_res5618 = if_res5617;
                    }
                    var if_res5619 = if_res5618;
                } else {
                    var work_vec3994 = M0.make_vector(n3976 + M0.ceiling(n3976 / 2), false);
                    M0.vector_copy_bang_(work_vec3994, 0, vec3972, start3974, end3975);
                    generic_sort3752(work_vec3994, less_than_p3973, n3976);
                    var if_res5619 = M0.vector_copy_bang_(dst_vec3977, dst_start3978, work_vec3994, 0, n3976);
                }
                var if_res5620 = if_res5619;
            }
            var if_res5621 = if_res5620;
        }
        var if_res5622 = if_res5621;
    }
    if_res5622;
    if (false !== false) {
        return dst_vec3977;
    } else {
        return M0.rvoid();
    }
};
var cl5598 = function(vec3995, less_than_p3996, start3997, end3998, getkey3999, cache_keys_p4000) {
    if (getkey3999 !== false) {
        var if_res5624 = M0.not(M0.eq_p(M0.values, getkey3999));
    } else {
        var if_res5624 = false;
    }
    if (if_res5624 !== false) {
        var n4001 = end3998 - start3997;
        if (false !== false) {
            var if_res5625 = M0.make_vector(n4001);
        } else {
            var if_res5625 = vec3995;
        }
        var dst_vec4002 = if_res5625;
        if (false !== false) {
            var if_res5626 = 0;
        } else {
            var if_res5626 = start3997;
        }
        var dst_start4003 = if_res5626;
        if (M1.unsafe_fx_eq_(n4001, 0) !== false) {
            var if_res5647 = M0.rvoid();
        } else {
            if (cache_keys_p4000 !== false) {
                var work_vec4004 = M0.make_vector(n4001 + M0.ceiling(n4001 / 2), true);
                var loop4005 = function(_i40065855) {
                    lambda_start5854: while (true) {
                        let i4006 = _i40065855;
                        if (M1.unsafe_fx_lt_(i4006, n4001) !== false) {
                            var x4007 = M1.unsafe_vector_ref(vec3995, M1.unsafe_fx_plus_(i4006, start3997));
                            M1.unsafe_vector_set_bang_(work_vec4004, i4006, M0.cons(getkey3999(x4007), x4007));
                            _i40065855 = M1.unsafe_fx_plus_(i4006, 1);
                            continue lambda_start5854;
                        } else {
                            return M0.rvoid();
                        }
                    }
                };
                loop4005(0);
                generic_sort_by_key3808(work_vec4004, less_than_p3996, n4001, M1.unsafe_car);
                var loop4008 = function(_i40095857) {
                    lambda_start5856: while (true) {
                        let i4009 = _i40095857;
                        if (M1.unsafe_fx_lt_(i4009, n4001) !== false) {
                            M1.unsafe_vector_set_bang_(dst_vec4002, M1.unsafe_fx_plus_(i4009, dst_start4003), M1.unsafe_cdr(M1.unsafe_vector_ref(work_vec4004, i4009)));
                            _i40095857 = M1.unsafe_fx_plus_(i4009, 1);
                            continue lambda_start5856;
                        } else {
                            return M0.rvoid();
                        }
                    }
                };
                var if_res5646 = loop4008(0);
            } else {
                var loop4010 = function(_prev_val40115859, _next_index40125860) {
                    lambda_start5858: while (true) {
                        let prev_val4011 = _prev_val40115859;
                        let next_index4012 = _next_index40125860;
                        var or_part4013 = M1.unsafe_fx_eq_(next_index4012, end3998);
                        if (or_part4013 !== false) {
                            return or_part4013;
                        } else {
                            var next_val4014 = M1.unsafe_vector_ref(vec3995, next_index4012);
                            if (getkey3999 !== false) {
                                var if_res5629 = less_than_p3996(getkey3999(next_val4014), getkey3999(prev_val4011));
                            } else {
                                var if_res5629 = less_than_p3996(next_val4014, prev_val4011);
                            }
                            if (M0.not(if_res5629) !== false) {
                                _prev_val40115859 = next_val4014;
                                _next_index40125860 = M1.unsafe_fx_plus_(next_index4012, 1);
                                continue lambda_start5858;
                            } else {
                                return false;
                            }
                        }
                    }
                };
                if (loop4010(M1.unsafe_vector_ref(vec3995, start3997), M1.unsafe_fx_plus_(start3997, 1)) !== false) {
                    if (false !== false) {
                        var if_res5632 = M0.vector_copy_bang_(dst_vec4002, dst_start4003, vec3995, start3997, end3998);
                    } else {
                        var if_res5632 = M0.rvoid();
                    }
                    var if_res5645 = if_res5632;
                } else {
                    if (M1.unsafe_fx_lt__eq_(n4001, 3) !== false) {
                        if (false !== false) {
                            var if_res5633 = M0.vector_copy_bang_(dst_vec4002, dst_start4003, vec3995, start3997, end3998);
                        } else {
                            var if_res5633 = M0.rvoid();
                        }
                        if_res5633;
                        if (M1.unsafe_fx_eq_(n4001, 1) !== false) {
                            var if_res5643 = M0.rvoid();
                        } else {
                            if (M1.unsafe_fx_eq_(n4001, 2) !== false) {
                                var tmp4015 = M1.unsafe_vector_ref(dst_vec4002, M1.unsafe_fx_plus_(dst_start4003, 0));
                                M1.unsafe_vector_set_bang_(dst_vec4002, M1.unsafe_fx_plus_(dst_start4003, 0), M1.unsafe_vector_ref(dst_vec4002, M1.unsafe_fx_plus_(dst_start4003, 1)));
                                var if_res5642 = M1.unsafe_vector_set_bang_(dst_vec4002, M1.unsafe_fx_plus_(dst_start4003, 1), tmp4015);
                            } else {
                                var a4016 = M1.unsafe_vector_ref(dst_vec4002, M1.unsafe_fx_plus_(dst_start4003, 0));
                                var b4017 = M1.unsafe_vector_ref(dst_vec4002, M1.unsafe_fx_plus_(dst_start4003, 1));
                                var c4018 = M1.unsafe_vector_ref(dst_vec4002, M1.unsafe_fx_plus_(dst_start4003, 2));
                                if (getkey3999 !== false) {
                                    var if_res5634 = less_than_p3996(getkey3999(b4017), getkey3999(a4016));
                                } else {
                                    var if_res5634 = less_than_p3996(b4017, a4016);
                                }
                                if (if_res5634 !== false) {
                                    if (getkey3999 !== false) {
                                        var if_res5635 = less_than_p3996(getkey3999(c4018), getkey3999(b4017));
                                    } else {
                                        var if_res5635 = less_than_p3996(c4018, b4017);
                                    }
                                    if (if_res5635 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec4002, M1.unsafe_fx_plus_(dst_start4003, 0), c4018);
                                        var if_res5638 = M1.unsafe_vector_set_bang_(dst_vec4002, M1.unsafe_fx_plus_(dst_start4003, 2), a4016);
                                    } else {
                                        if (getkey3999 !== false) {
                                            var if_res5636 = less_than_p3996(getkey3999(c4018), getkey3999(a4016));
                                        } else {
                                            var if_res5636 = less_than_p3996(c4018, a4016);
                                        }
                                        if (if_res5636 !== false) {
                                            M1.unsafe_vector_set_bang_(dst_vec4002, M1.unsafe_fx_plus_(dst_start4003, 0), b4017);
                                            M1.unsafe_vector_set_bang_(dst_vec4002, M1.unsafe_fx_plus_(dst_start4003, 1), c4018);
                                            var if_res5637 = M1.unsafe_vector_set_bang_(dst_vec4002, M1.unsafe_fx_plus_(dst_start4003, 2), a4016);
                                        } else {
                                            M1.unsafe_vector_set_bang_(dst_vec4002, M1.unsafe_fx_plus_(dst_start4003, 0), b4017);
                                            var if_res5637 = M1.unsafe_vector_set_bang_(dst_vec4002, M1.unsafe_fx_plus_(dst_start4003, 1), a4016);
                                        }
                                        var if_res5638 = if_res5637;
                                    }
                                    var if_res5641 = if_res5638;
                                } else {
                                    if (getkey3999 !== false) {
                                        var if_res5639 = less_than_p3996(getkey3999(c4018), getkey3999(a4016));
                                    } else {
                                        var if_res5639 = less_than_p3996(c4018, a4016);
                                    }
                                    if (if_res5639 !== false) {
                                        M1.unsafe_vector_set_bang_(dst_vec4002, M1.unsafe_fx_plus_(dst_start4003, 0), c4018);
                                        M1.unsafe_vector_set_bang_(dst_vec4002, M1.unsafe_fx_plus_(dst_start4003, 1), a4016);
                                        var if_res5640 = M1.unsafe_vector_set_bang_(dst_vec4002, M1.unsafe_fx_plus_(dst_start4003, 2), b4017);
                                    } else {
                                        M1.unsafe_vector_set_bang_(dst_vec4002, M1.unsafe_fx_plus_(dst_start4003, 1), c4018);
                                        var if_res5640 = M1.unsafe_vector_set_bang_(dst_vec4002, M1.unsafe_fx_plus_(dst_start4003, 2), b4017);
                                    }
                                    var if_res5641 = if_res5640;
                                }
                                var if_res5642 = if_res5641;
                            }
                            var if_res5643 = if_res5642;
                        }
                        var if_res5644 = if_res5643;
                    } else {
                        var work_vec4019 = M0.make_vector(n4001 + M0.ceiling(n4001 / 2), false);
                        M0.vector_copy_bang_(work_vec4019, 0, vec3995, start3997, end3998);
                        generic_sort_by_key3808(work_vec4019, less_than_p3996, n4001, getkey3999);
                        var if_res5644 = M0.vector_copy_bang_(dst_vec4002, dst_start4003, work_vec4019, 0, n4001);
                    }
                    var if_res5645 = if_res5644;
                }
                var if_res5646 = if_res5645;
            }
            var if_res5647 = if_res5646;
        }
        if_res5647;
        if (false !== false) {
            return dst_vec4002;
        } else {
            return M0.rvoid();
        }
    } else {
        return vector_sort_bang_(vec3995, less_than_p3996, start3997, end3998);
    }
};
var let_result5755 = M0.values(temp5754, temp5703, $rjs_core.attachProcedureArity(function() {
    var fixed_lam5599 = {
        '4': cl5597,
        '6': cl5598
    } [arguments.length];
    if (fixed_lam5599 !== undefined) {
        return fixed_lam5599.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [4, 6]));
var sort = let_result5755.getAt(0);
var vector_sort = let_result5755.getAt(1);
var vector_sort_bang_ = let_result5755.getAt(2);
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    vector_sort_bang_,
    vector_sort,
    sort
};