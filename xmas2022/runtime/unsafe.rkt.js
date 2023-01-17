import * as $rjs_core from './core.js';
import * as Core from "./core.js";
var unsafe_fx_plus_ = function(a31, b32) {
    return (a31 + b32) | 0;
};
var unsafe_fx_ = function(a33, b34) {
    return (a33 - b34) | 0;
};
var unsafe_fx_times_ = function(a35, b36) {
    return (a35 * b36) | 0;
};
var unsafe_fxquotient = function(a37, b38) {
    return (a37 / b38) | 0;
};
var unsafe_fxremainder = function(a39, b40) {
    return (a39 % b40) | 0;
};
var unsafe_fxmodulo = function(a41, b42) {
    var remainder43 = a41 % b42;
    if ((remainder43 >= 0) !== false) {
        var if_res40 = remainder43;
    } else {
        var if_res40 = remainder43 + b42;
    }
    return Math.floor(if_res40);
};
var unsafe_fxabs = function(a44) {
    return Math.abs(a44);
};
var unsafe_fx_eq_ = function(a45, b46) {
    return a45 === b46;
};
var unsafe_fx_lt_ = function(a47, b48) {
    return a47 < b48;
};
var unsafe_fx_lt__eq_ = function(a49, b50) {
    return a49 <= b50;
};
var unsafe_fx_gt_ = function(a51, b52) {
    return a51 > b52;
};
var unsafe_fx_gt__eq_ = function(a53, b54) {
    return a53 >= b54;
};
var unsafe_fxmin = function(a55, b56) {
    if ((a55 < b56) !== false) {
        return a55;
    } else {
        return b56;
    }
};
var unsafe_fxmax = function(a57, b58) {
    if ((a57 > b58) !== false) {
        return b58;
    } else {
        return a57;
    }
};
var unsafe_fl_eq_ = function(a59, b60) {
    return a59 === b60;
};
var unsafe_fl_lt_ = function(a61, b62) {
    return a61 < b62;
};
var unsafe_fl_lt__eq_ = function(a63, b64) {
    return a63 <= b64;
};
var unsafe_fl_gt_ = function(a65, b66) {
    return a65 > b66;
};
var unsafe_fl_gt__eq_ = function(a67, b68) {
    return a67 >= b68;
};
var unsafe_flmin = function(a69, b70) {
    if ((a69 < b70) !== false) {
        return a69;
    } else {
        return b70;
    }
};
var unsafe_flmax = function(a71, b72) {
    if ((a71 > b72) !== false) {
        return b72;
    } else {
        return a71;
    }
};
var unsafe_fxrshift = function(a73, b74) {
    return (a73 >> b74) | 0;
};
var unsafe_fxlshift = function(a75, b76) {
    return (a75 << b76) | 0;
};
var unsafe_fxand = function(a77, b78) {
    return (a77 && b78) | 0;
};
var unsafe_fxior = function(a79, b80) {
    return (a79 || b80) | 0;
};
var unsafe_fxxor = function(a81, b82) {
    return (a81 ^ b82) | 0;
};
var unsafe_fxnot = Core.bitwiseNot;
var unsafe_car = function(v83) {
    return v83.hd;
};
var unsafe_cdr = function(v84) {
    return v84.tl;
};
var unsafe_mcar = function(v85) {
    return v85.hd;
};
var unsafe_mcdr = function(v86) {
    return v86.tl;
};
var unsafe_set_mcar_bang_ = function(p87, v88) {
    return p87.setCar(v88);
};
var unsafe_set_mcdr_bang_ = function(p89, v90) {
    return p89.setCdr(v90);
};
var unsafe_cons_list = function(v91, rest92) {
    return Core.Pair.make(v91, rest92);
};
var unsafe_struct_ref = function(v93, k94) {
    return v93._fields[k94];
};
var unsafe_vector_ref = function(v95, k96) {
    return v95.ref(k96);
};
var unsafe_vector_set_bang_ = function(v97, k98, val99) {
    return v97.set(k98, val99);
};
var unsafe_vector_length = function(v100) {
    return v100.length();
};
var unsafe_vector_times__ref = function(v101, k102) {
    return v101.ref(k102);
};
var unsafe_vector_times__set_bang_ = function(v103, k104, val105) {
    return v103.set(k104, val105);
};
var unsafe_vector_times__length = function(v106) {
    return v106.length();
};
var unsafe_immutable_hash_iterate_first = function(h107) {
    return h107.iterateFirst();
};
var unsafe_immutable_hash_iterate_next = function(h108, i109) {
    return h108.iterateNext(i109);
};
var unsafe_immutable_hash_iterate_key = function(h110, i111) {
    return h110.iterateKey(i111);
};
var unsafe_immutable_hash_iterate_value = function(h112, i113) {
    return h112.iterateValue(i113);
};
var unsafe_immutable_hash_iterate_key_plus_value = function(h114, i115) {
    return h114.iterateKeyValue(i115);
};
var unsafe_immutable_hash_iterate_pair = function(h116, i117) {
    return h116.iteratePair(i117);
};
var unsafe_mutable_hash_iterate_first = function(h118) {
    return h118.iterateFirst();
};
var unsafe_mutable_hash_iterate_next = function(h119, i120) {
    return h119.iterateNext(i120);
};
var unsafe_mutable_hash_iterate_key = function(h121, i122) {
    return h121.iterateKey(i122);
};
var unsafe_mutable_hash_iterate_value = function(h123, i124) {
    return h123.iterateValue(i124);
};
var unsafe_mutable_hash_iterate_key_plus_value = function(h125, i126) {
    return h125.iterateKeyValue(i126);
};
var unsafe_mutable_hash_iterate_pair = function(h127, i128) {
    return h127.iteratePair(i128);
};
var unsafe_undefined = Core.theUnsafeUndefined;
var unsafe_make_place_local = Core.Box.make;
var unsafe_place_local_set_bang_ = function(b129, v130) {
    return b129.set(v130);
};
var unsafe_place_local_ref = function(b131) {
    return b131.get();
};
var variable_reference_from_unsafe_p = function(v132) {
    return false;
};
var unsafe_root_continuation_prompt_tag = function() {
    return Core.Marks.defaultContinuationPromptTag();
};
var unsafe_string_length = function(s133) {
    return s133.length;
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    unsafe_fx_plus_,
    unsafe_fx_,
    unsafe_fx_times_,
    unsafe_fxquotient,
    unsafe_fxremainder,
    unsafe_fxmodulo,
    unsafe_fxabs,
    unsafe_fx_eq_,
    unsafe_fx_lt_,
    unsafe_fx_lt__eq_,
    unsafe_fx_gt_,
    unsafe_fx_gt__eq_,
    unsafe_fxmin,
    unsafe_fxmax,
    unsafe_fl_eq_,
    unsafe_fl_lt_,
    unsafe_fl_lt__eq_,
    unsafe_fl_gt_,
    unsafe_fl_gt__eq_,
    unsafe_flmin,
    unsafe_flmax,
    unsafe_fxrshift,
    unsafe_fxlshift,
    unsafe_fxand,
    unsafe_fxior,
    unsafe_fxxor,
    unsafe_fxnot,
    unsafe_car,
    unsafe_cdr,
    unsafe_mcar,
    unsafe_mcdr,
    unsafe_set_mcar_bang_,
    unsafe_set_mcdr_bang_,
    unsafe_cons_list,
    unsafe_struct_ref,
    unsafe_vector_ref,
    unsafe_vector_set_bang_,
    unsafe_vector_length,
    unsafe_vector_times__ref,
    unsafe_vector_times__set_bang_,
    unsafe_vector_times__length,
    unsafe_immutable_hash_iterate_first,
    unsafe_immutable_hash_iterate_next,
    unsafe_immutable_hash_iterate_key,
    unsafe_immutable_hash_iterate_value,
    unsafe_immutable_hash_iterate_key_plus_value,
    unsafe_immutable_hash_iterate_pair,
    unsafe_mutable_hash_iterate_first,
    unsafe_mutable_hash_iterate_next,
    unsafe_mutable_hash_iterate_key,
    unsafe_mutable_hash_iterate_value,
    unsafe_mutable_hash_iterate_key_plus_value,
    unsafe_mutable_hash_iterate_pair,
    unsafe_undefined,
    unsafe_make_place_local,
    unsafe_place_local_set_bang_,
    unsafe_place_local_ref,
    variable_reference_from_unsafe_p,
    unsafe_root_continuation_prompt_tag,
    unsafe_string_length
};