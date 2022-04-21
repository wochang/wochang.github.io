import * as $rjs_core from './core.js';import * as Core from "./core.js";var unsafe_fx_plus_ = function(a410, b411) {return (a410+b411)|0;};var unsafe_fx_ = function(a412, b413) {return (a412-b413)|0;};var unsafe_fx_times_ = function(a414, b415) {return (a414*b415)|0;};var unsafe_fxquotient = function(a416, b417) {return (a416/b417)|0;};var unsafe_fxremainder = function(a418, b419) {return (a418%b419)|0;};var unsafe_fxmodulo = function(a420, b421) {var remainder422 = a420%b421;if ((remainder422>=0)!==false) {var if_res262 = remainder422;} else {var if_res262 = remainder422+b421;}return Math.floor(if_res262);};var unsafe_fxabs = function(a423) {return Math.abs(a423);};var unsafe_fx_eq_ = function(a424, b425) {return a424===b425;};var unsafe_fx_lt_ = function(a426, b427) {return a426<b427;};var unsafe_fx_lt__eq_ = function(a428, b429) {return a428<=b429;};var unsafe_fx_gt_ = function(a430, b431) {return a430>b431;};var unsafe_fx_gt__eq_ = function(a432, b433) {return a432>=b433;};var unsafe_fxmin = function(a434, b435) {if ((a434<b435)!==false) {var if_res263 = a434;} else {var if_res263 = b435;}return if_res263;};var unsafe_fxmax = function(a436, b437) {if ((a436>b437)!==false) {var if_res264 = b437;} else {var if_res264 = a436;}return if_res264;};var unsafe_fl_eq_ = function(a438, b439) {return a438===b439;};var unsafe_fl_lt_ = function(a440, b441) {return a440<b441;};var unsafe_fl_lt__eq_ = function(a442, b443) {return a442<=b443;};var unsafe_fl_gt_ = function(a444, b445) {return a444>b445;};var unsafe_fl_gt__eq_ = function(a446, b447) {return a446>=b447;};var unsafe_flmin = function(a448, b449) {if ((a448<b449)!==false) {var if_res265 = a448;} else {var if_res265 = b449;}return if_res265;};var unsafe_flmax = function(a450, b451) {if ((a450>b451)!==false) {var if_res266 = b451;} else {var if_res266 = a450;}return if_res266;};var unsafe_fxrshift = function(a452, b453) {return (a452>>b453)|0;};var unsafe_fxlshift = function(a454, b455) {return (a454<<b455)|0;};var unsafe_fxand = function(a456, b457) {return (a456&&b457)|0;};var unsafe_fxior = function(a458, b459) {return (a458||b459)|0;};var unsafe_fxxor = function(a460, b461) {return (a460^b461)|0;};var unsafe_fxnot = Core.bitwiseNot;var unsafe_car = function(v462) {return v462.hd;};var unsafe_cdr = function(v463) {return v463.tl;};var unsafe_mcar = function(v464) {return v464.hd;};var unsafe_mcdr = function(v465) {return v465.tl;};var unsafe_set_mcar_bang_ = function(p466, v467) {return p466.setCar(v467);};var unsafe_set_mcdr_bang_ = function(p468, v469) {return p468.setCdr(v469);};var unsafe_cons_list = function(v470, rest471) {return Core.Pair.make(v470,rest471);};var unsafe_struct_ref = function(v472, k473) {return v472._fields[k473];};var unsafe_vector_ref = function(v474, k475) {return v474.ref(k475);};var unsafe_vector_set_bang_ = function(v476, k477, val478) {return v476.set(k477,val478);};var unsafe_vector_length = function(v479) {return v479.length();};var unsafe_vector_times__ref = function(v480, k481) {return v480.ref(k481);};var unsafe_vector_times__set_bang_ = function(v482, k483, val484) {return v482.set(k483,val484);};var unsafe_vector_times__length = function(v485) {return v485.length();};var unsafe_immutable_hash_iterate_first = function(h486) {return h486.iterateFirst();};var unsafe_immutable_hash_iterate_next = function(h487, i488) {return h487.iterateNext(i488);};var unsafe_immutable_hash_iterate_key = function(h489, i490) {return h489.iterateKey(i490);};var unsafe_immutable_hash_iterate_value = function(h491, i492) {return h491.iterateValue(i492);};var unsafe_immutable_hash_iterate_key_plus_value = function(h493, i494) {return h493.iterateKeyValue(i494);};var unsafe_immutable_hash_iterate_pair = function(h495, i496) {return h495.iteratePair(i496);};var unsafe_mutable_hash_iterate_first = function(h497) {return h497.iterateFirst();};var unsafe_mutable_hash_iterate_next = function(h498, i499) {return h498.iterateNext(i499);};var unsafe_mutable_hash_iterate_key = function(h500, i501) {return h500.iterateKey(i501);};var unsafe_mutable_hash_iterate_value = function(h502, i503) {return h502.iterateValue(i503);};var unsafe_mutable_hash_iterate_key_plus_value = function(h504, i505) {return h504.iterateKeyValue(i505);};var unsafe_mutable_hash_iterate_pair = function(h506, i507) {return h506.iteratePair(i507);};var unsafe_undefined = Core.theUnsafeUndefined;var unsafe_make_place_local = Core.Box.make;var unsafe_place_local_set_bang_ = function(b508, v509) {return b508.set(v509);};var unsafe_place_local_ref = function(b510) {return b510.get();};var variable_reference_from_unsafe_p = function(v511) {return false;};var unsafe_root_continuation_prompt_tag = function() {return Core.Marks.defaultContinuationPromptTag();};var unsafe_string_length = function(s512) {return s512.length;};var __rjs_quoted__ = {};export { __rjs_quoted__,unsafe_fx_plus_,unsafe_fx_,unsafe_fx_times_,unsafe_fxquotient,unsafe_fxremainder,unsafe_fxmodulo,unsafe_fxabs,unsafe_fx_eq_,unsafe_fx_lt_,unsafe_fx_lt__eq_,unsafe_fx_gt_,unsafe_fx_gt__eq_,unsafe_fxmin,unsafe_fxmax,unsafe_fl_eq_,unsafe_fl_lt_,unsafe_fl_lt__eq_,unsafe_fl_gt_,unsafe_fl_gt__eq_,unsafe_flmin,unsafe_flmax,unsafe_fxrshift,unsafe_fxlshift,unsafe_fxand,unsafe_fxior,unsafe_fxxor,unsafe_fxnot,unsafe_car,unsafe_cdr,unsafe_mcar,unsafe_mcdr,unsafe_set_mcar_bang_,unsafe_set_mcdr_bang_,unsafe_cons_list,unsafe_struct_ref,unsafe_vector_ref,unsafe_vector_set_bang_,unsafe_vector_length,unsafe_vector_times__ref,unsafe_vector_times__set_bang_,unsafe_vector_times__length,unsafe_immutable_hash_iterate_first,unsafe_immutable_hash_iterate_next,unsafe_immutable_hash_iterate_key,unsafe_immutable_hash_iterate_value,unsafe_immutable_hash_iterate_key_plus_value,unsafe_immutable_hash_iterate_pair,unsafe_mutable_hash_iterate_first,unsafe_mutable_hash_iterate_next,unsafe_mutable_hash_iterate_key,unsafe_mutable_hash_iterate_value,unsafe_mutable_hash_iterate_key_plus_value,unsafe_mutable_hash_iterate_pair,unsafe_undefined,unsafe_make_place_local,unsafe_place_local_set_bang_,unsafe_place_local_ref,variable_reference_from_unsafe_p,unsafe_root_continuation_prompt_tag,unsafe_string_length };