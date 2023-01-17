import * as $rjs_core from '../runtime/core.js';
import * as M0 from "../collects/racket/private/pre-base.rkt.js";
import * as M1 from "../collects/racket/private/reverse.rkt.js";
import * as M2 from "../collects/racket/list.rkt.js";
import * as M3 from "../runtime/kernel.rkt.js";
import * as M4 from "../collects/racket/private/for.rkt.js";
import * as M5 from "../collects/racket/private/list.rkt.js";
import * as M6 from "../links/racketscript-extras/racketscript/htdp/image.rkt.js";
import * as M7 from "../links/racketscript-extras/racketscript/htdp/universe.rkt.js";
import * as M8 from "../collects/racket/private/modbeg.rkt.js";
import * as M9 from "../runtime/unsafe.rkt.js";
var let_result1 = M3.make_struct_type($rjs_core.PrimitiveSymbol.make("flake"), false, 3, 0, false, M3.rnull, false, false, $rjs_core.Pair.makeList(0, 1, 2), false, $rjs_core.PrimitiveSymbol.make("flake"));
var struct_1 = let_result1.getAt(0);
var make_2 = let_result1.getAt(1);
var __p3 = let_result1.getAt(2);
var __ref4 = let_result1.getAt(3);
var __set_bang_5 = let_result1.getAt(4);
var let_result2 = M3.values(struct_1, make_2, __p3, M3.make_struct_field_accessor(__ref4, 0, $rjs_core.PrimitiveSymbol.make("x")), M3.make_struct_field_accessor(__ref4, 1, $rjs_core.PrimitiveSymbol.make("y")), M3.make_struct_field_accessor(__ref4, 2, $rjs_core.PrimitiveSymbol.make("drift")));
var struct_flake = let_result2.getAt(0);
var flake1 = let_result2.getAt(1);
var flake_p = let_result2.getAt(2);
var flake_x = let_result2.getAt(3);
var flake_y = let_result2.getAt(4);
var flake_drift = let_result2.getAt(5);
var START_WORLD = M2.empty;
var BG_URL = $rjs_core.UString.make("grogu.jpg");
var BG_PIC = M6.scale(0.5, M6.bitmap_by_url(BG_URL));
var MAX_X = M6.image_width(BG_PIC);
var MAX_Y = M6.image_height(BG_PIC);
var SANTA_HAT = M6.above(M6.circle(16, $rjs_core.UString.make("solid"), $rjs_core.UString.make("white")), M6.triangle(120, $rjs_core.UString.make("solid"), $rjs_core.UString.make("red")), M6.rectangle(160, 30, $rjs_core.UString.make("solid"), $rjs_core.UString.make("white")));
var BG = M6.place_image(M6.rotate(-15, SANTA_HAT), MAX_X * (22 / 40), MAX_Y * (1 / 10), M6.place_image(M6.above(M6.text($rjs_core.UString.make("MERRY CHRISTMAS!"), 100, $rjs_core.UString.make("green")), M6.text($rjs_core.UString.make("❤ Stella and Grogu"), 60, $rjs_core.UString.make("green"))), MAX_X / 2, MAX_Y * (6 / 7), BG_PIC));
var FLAKE_STEP = 10;
var FLAKE_IMG = M6.circle(5, $rjs_core.UString.make("solid"), $rjs_core.UString.make("white"));
var draw = function(current_world6) {
    var lst7 = current_world6;
    if (M3.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res3 = M3.rvoid();
    } else {
        var if_res3 = M4.__rjs_quoted__.check_list(lst7);
    }
    if_res3;
    var for_loop8 = function(_scene917, _lst1018) {
        lambda_start16: while (true) {
            let scene9 = _scene917;
            let lst10 = _lst1018;
            if (M3.pair_p(lst10) !== false) {
                var f11 = M9.unsafe_car(lst10);
                var rest12 = M9.unsafe_cdr(lst10);
                if (true !== false) {
                    var scene14 = scene9;
                    var scene15 = M6.place_image(FLAKE_IMG, flake_x(f11), flake_y(f11), scene14);
                    var scene13 = M3.values(scene15);
                    if (true !== false) {
                        var if_res4 = M3.not(false);
                    } else {
                        var if_res4 = false;
                    }
                    if (if_res4 !== false) {
                        _scene917 = scene13;
                        _lst1018 = rest12;
                        continue lambda_start16;
                    } else {
                        return scene13;
                    }
                } else {
                    return scene9;
                }
            } else {
                return scene9;
            }
        }
    };
    return for_loop8(BG, lst7);
};
var update = function(current_world16) {
    return delete_flakes(move_flakes(add1_flake(current_world16)));
};
var flake_in_scene_p = function(f17) {
    if (M3.__gt_(flake_x(f17), 0) !== false) {
        if (M3.__lt_(flake_x(f17), MAX_X) !== false) {
            return M3.__lt_(flake_y(f17), MAX_Y);
        } else {
            return false;
        }
    } else {
        return false;
    }
};
var delete_flakes = function(flakes18) {
    return M5.filter(flake_in_scene_p, flakes18);
};
var move_flakes = function(flakes19) {
    var lst20 = flakes19;
    if (M3.variable_reference_from_unsafe_p($rjs_core.PrimitiveSymbol.make("#%variable-reference")) !== false) {
        var if_res10 = M3.rvoid();
    } else {
        var if_res10 = M4.__rjs_quoted__.check_list(lst20);
    }
    if_res10;
    var for_loop21 = function(_fold_var2224, _lst2325) {
        lambda_start23: while (true) {
            let fold_var22 = _fold_var2224;
            let lst23 = _lst2325;
            if (M3.pair_p(lst23) !== false) {
                var f24 = M9.unsafe_car(lst23);
                var rest25 = M9.unsafe_cdr(lst23);
                if (true !== false) {
                    var fold_var27 = fold_var22;
                    var fold_var28 = M3.cons(flake1(flake_x(f24) + flake_drift(f24), flake_y(f24) + FLAKE_STEP, flake_drift(f24)), fold_var27);
                    var fold_var26 = M3.values(fold_var28);
                    if (true !== false) {
                        var if_res11 = M3.not(false);
                    } else {
                        var if_res11 = false;
                    }
                    if (if_res11 !== false) {
                        _fold_var2224 = fold_var26;
                        _lst2325 = rest25;
                        continue lambda_start23;
                    } else {
                        return fold_var26;
                    }
                } else {
                    return fold_var22;
                }
            } else {
                return fold_var22;
            }
        }
    };
    return M1.alt_reverse(for_loop21(M3.rnull, lst20));
};
var add1_flake = function(current_flakes29) {
    return M3.cons(flake1(M0.random(MAX_X), -5, M0.random(-5, 5)), current_flakes29);
};
M3.call_with_values(function() {
    return M7.big_bang(START_WORLD, M7.on_tick(update, 0.1), M7.to_draw(draw));
}, M8.__rjs_quoted__.print_values);
var __rjs_quoted__ = {};
__rjs_quoted__.flake1 = flake1;
__rjs_quoted__.flake_drift = flake_drift;
__rjs_quoted__.struct_flake = struct_flake;
__rjs_quoted__.flake_x = flake_x;
__rjs_quoted__.flake_p = flake_p;
__rjs_quoted__.flake_y = flake_y;
export {
    __rjs_quoted__
};