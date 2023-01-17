import * as $rjs_core from '../../../../runtime/core.js';
import * as M0 from "../../../../runtime/kernel.rkt.js";
import * as M1 from "../../../racketscript-compiler/racketscript/interop.rkt.js";
import * as M2 from "../private/jscommon.rkt.js";
import * as M3 from "../../../racketscript-compiler/racketscript/private/interop.rkt.js";
var __times_default_frames_per_second_times_ = 70;
var make_big_bang = function(init_world865, handlers866) {
    return new BigBang(init_world865, handlers866);
};
var big_bang = $rjs_core.attachProcedureArity(function(init_world867, ...handlers8681368) {
    var handlers868 = $rjs_core.Pair.listFromArray(handlers8681368);
    return make_big_bang(init_world867, handlers868).setup().start();
});
var BigBang = function(init_world869, handlers870) {
    var this871 = this;
    this871.world = init_world869;
    this871.interval = 1000 / __times_default_frames_per_second_times_;
    this871.handlers = handlers870;
    this871.__active_handlers = {};
    this871.__world_change_listeners = [];
    this871.__idle = true;
    this871.__stopped = true;
    this871.__events = [];
    return null;
};
BigBang.prototype.setup = function() {
    var this872 = this;
    var canvas873 = M2.document.createElement("canvas");
    var ctx874 = canvas873.getContext("2d");
    canvas873.setAttribute("tabindex", 1);
    var let_result1369 = M0.values();
    canvas873.setAttribute("style", "outline: none");
    var let_result1370 = M0.values();
    this872.__canvas = canvas873;
    var let_result1371 = M0.values();
    this872.__context = ctx874;
    var let_result1372 = M0.values();
    M2.document.body.appendChild(canvas873);
    var let_result1373 = M0.values();
    canvas873.focus();
    var let_result1374 = M0.values();
    this872.register_handlers();
    var let_result1375 = M0.values();
    var draw_handler875 = this872.__active_handlers["to-draw"];
    if (draw_handler875 !== false) {
        var if_res1376 = M0.rvoid();
    } else {
        var if_res1376 = M0.error($rjs_core.PrimitiveSymbol.make("big-bang"), $rjs_core.UString.make("to-draw handle not provided"));
    }
    if_res1376;
    var let_result1377 = M0.values();
    var img876 = draw_handler875.callback(this872.world);
    canvas873.width = img876.width;
    canvas873.height = img876.height;
    this872.change_world(this872.world);
    return this872;
};
BigBang.prototype.register_handlers = function() {
    var this877 = this;
    var active_handlers878 = this877.__active_handlers;
    var loop879 = function(_handlers8801405) {
        lambda_start1404: while (true) {
            let handlers880 = _handlers8801405;
            if (M0.pair_p(handlers880) !== false) {
                var h881 = M0.car(handlers880)(this877);
                h881.register();
                active_handlers878[h881.name] = h881;
                _handlers8801405 = M0.cdr(handlers880);
                continue lambda_start1404;
            } else {
                return M0.rvoid();
            }
        }
    };
    return loop879(this877.handlers);
};
BigBang.prototype.deregister_handlers = function() {
    var this882 = this;
    var active_handlers883 = this882.__active_handlers;
    return Object.keys(active_handlers883).forEach(function(key884) {
        var h885 = active_handlers883[key884];
        h885.deregister();
        active_handlers883[h885.name] = undefined;
        return null;
    });
};
BigBang.prototype.start = function() {
    var this886 = this;
    this886.__stopped = false;
    this886.queue_event({
        'type': "to-draw"
    });
    return this886.process_events();
};
BigBang.prototype.stop = function() {
    var this887 = this;
    this887.clear_event_queue();
    this887.__stopped = true;
    this887.__idle = true;
    this887.deregister_handlers();
    this887.__active_handlers = {};
    this887.handlers = $rjs_core.Pair.makeList();
    return null;
};
BigBang.prototype.clear_event_queue = function() {
    var this888 = this;
    return this888.__events.splice(0, this888.__events.length);
};
BigBang.prototype.queue_event = function(e889) {
    var this890 = this;
    this890.__events.push(e889);
    if (this890.__idle !== false) {
        var self891 = this890;
        return window.requestAnimationFrame(function() {
            return self891.process_events();
        });
    } else {
        return M0.rvoid();
    }
};
BigBang.prototype.change_world = function(new_world892) {
    var this893 = this;
    var listeners894 = this893.__world_change_listeners;
    var loop895 = function(_i8961415) {
        lambda_start1414: while (true) {
            let i896 = _i8961415;
            if (M0.__lt_(i896, listeners894.length) !== false) {
                var listener897 = listeners894[i896];
                listener897(new_world892);
                _i8961415 = M0.add1(i896);
                continue lambda_start1414;
            } else {
                return M0.rvoid();
            }
        }
    };
    loop895(0);
    this893.world = new_world892;
    return null;
};
BigBang.prototype.add_world_change_listener = function(cb898) {
    var this899 = this;
    return this899.__world_change_listeners.push(cb898);
};
BigBang.prototype.remove_world_change_listener = function(cb900) {
    var this901 = this;
    var index902 = this901.__world_change_listeners.indexOf(cb900);
    return this901.__world_change_listeners.splice(index902, 1);
};
BigBang.prototype.process_events = function() {
    var this903 = this;
    var events904 = this903.__events;
    this903.__idle = false;
    var loop905 = function(_world_changed_p9061420) {
        lambda_start1419: while (true) {
            let world_changed_p906 = _world_changed_p9061420;
            if (M0.__gt_(events904.length, 0) !== false) {
                var evt907 = events904.shift();
                var handler908 = this903.__active_handlers[evt907.type];
                if (M0.equal_p(evt907.type, "raw") !== false) {
                    var if_res1382 = evt907.invoke(this903.world, evt907);
                } else {
                    if (handler908 !== false) {
                        var if_res1381 = handler908.invoke(this903.world, evt907);
                    } else {
                        var if_res1381 = M2.console.warn($rjs_core.UString.make("ignoring unknown/unregistered event type: "), evt907);
                    }
                    var if_res1382 = if_res1381;
                }
                var changed_p909 = if_res1382;
                var or_part910 = world_changed_p906;
                if (or_part910 !== false) {
                    var if_res1383 = or_part910;
                } else {
                    var if_res1383 = changed_p909;
                }
                _world_changed_p9061420 = if_res1383;
                continue lambda_start1419;
            } else {
                if (world_changed_p906 !== false) {
                    var if_res1384 = M0.not(this903.__stopped);
                } else {
                    var if_res1384 = false;
                }
                if (if_res1384 !== false) {
                    this903.queue_event({
                        'type': "to-draw"
                    });
                    _world_changed_p9061420 = false;
                    continue lambda_start1419;
                } else {
                    return M0.rvoid();
                }
            }
        }
    };
    loop905(false);
    this903.__idle = true;
    return null;
};
var to_draw = function(cb911) {
    return function(bb912) {
        var on_tick_evt913 = {
            'type': "to-draw"
        };
        return {
            'name': "to-draw",
            'register': function() {
                return M0.rvoid();
            },
            'deregister': function() {
                return M0.rvoid();
            },
            'callback': cb911,
            'invoke': function(world914, evt915) {
                var ctx916 = bb912.__context;
                var img917 = cb911(bb912.world);
                var height918 = img917.height;
                var width919 = img917.width;
                ctx916.clearRect(0, 0, width919, height918);
                img917.render(ctx916, width919 / 2, height918 / 2);
                return false;
            }
        };
    };
};
var on_tick = function(cb920, rate921) {
    return function(bb922) {
        var on_tick_evt923 = {
            'type': "on-tick"
        };
        return {
            'name': "on-tick",
            'register': function() {
                var this924 = this;
                bb922.queue_event(on_tick_evt923);
                if (rate921 !== false) {
                    rate921 = 1000 * rate921;
                    return null;
                } else {
                    rate921 = bb922.interval;
                    return null;
                }
            },
            'deregister': function() {
                var this925 = this;
                var last_cb926 = this925.last_cb;
                if (last_cb926 !== false) {
                    return window.clearTimeout(last_cb926);
                } else {
                    return M0.rvoid();
                }
            },
            'invoke': function(world927, _928) {
                var this929 = this;
                bb922.change_world(cb920(world927));
                this929.last_cb = setTimeout(function() {
                    return bb922.queue_event(on_tick_evt923);
                }, rate921);
                return true;
            }
        };
    };
};
var on_mouse = function(cb930) {
    return function(bb931) {
        return {
            'name': "on-mouse",
            'listeners': {},
            'register': function() {
                var this932 = this;
                var canvas933 = bb931.__canvas;
                var make_listener934 = function(r_evt_name935) {
                    return function(evt936) {
                        var posn937 = canvas_posn_δ(canvas933, evt936);
                        return bb931.queue_event({
                            'type': "on-mouse",
                            'evt': M1.js_string__gt_string(r_evt_name935),
                            'x': posn937.x,
                            'y': posn937.y
                        });
                    };
                };
                var register_listener938 = function(evt_name939, r_evt_name940) {
                    var cb941 = make_listener934(r_evt_name940);
                    canvas933.addEventListener(evt_name939, cb941);
                    this932.listeners[evt_name939] = cb941;
                    return null;
                };
                register_listener938("mousemove", "move");
                register_listener938("mousedown", "button-down");
                register_listener938("mouseup", "button-up");
                register_listener938("mouseout", "leave");
                register_listener938("mouseover", "enter");
                return register_listener938("drag", "drag");
            },
            'deregister': function() {
                var this942 = this;
                var remove_listener943 = function(evt_name944) {
                    var cb945 = this942.listeners[evt_name944];
                    return bb931.__canvas.removeEventListener(evt_name944, cb945);
                };
                remove_listener943("mousemove");
                remove_listener943("mousedown");
                remove_listener943("mouseup");
                remove_listener943("mouseout");
                remove_listener943("mouseover");
                return remove_listener943("drag");
            },
            'invoke': function(world946, evt947) {
                var new_world948 = cb930(world946, evt947.x, evt947.y, evt947.evt);
                bb931.change_world(new_world948);
                return true;
            }
        };
    };
};
var on_key = function(cb949) {
    return function(bb950) {
        return {
            'name': "on-key",
            'register': function() {
                var this951 = this;
                var canvas952 = bb950.__canvas;
                this951.listener = function(evt953) {
                    evt953.preventDefault();
                    evt953.stopPropagation();
                    return bb950.queue_event({
                        'type': "on-key",
                        'key': key_event__gt_key_name(evt953)
                    });
                };
                return canvas952.addEventListener("keydown", this951.listener);
            },
            'deregister': function() {
                var this954 = this;
                bb950.__canvas.removeEventListener("keydown", this954.listener);
                this954.listener = undefined;
                return null;
            },
            'invoke': function(world955, evt956) {
                var new_world957 = cb949(world955, evt956.key);
                bb950.change_world(new_world957);
                return true;
            }
        };
    };
};
var on_release = function(cb958) {
    return function(bb959) {
        return {
            'name': "on-release",
            'register': function() {
                var this960 = this;
                var canvas961 = bb959.__canvas;
                this960.listener = function(evt962) {
                    evt962.preventDefault();
                    evt962.stopPropagation();
                    return bb959.queue_event({
                        'type': "on-release",
                        'key': key_event__gt_key_name(evt962)
                    });
                };
                return canvas961.addEventListener("keyup", this960.listener);
            },
            'deregister': function() {
                var this963 = this;
                bb959.__canvas.removeEventListener("keyup", this963.listener);
                this963.listener = undefined;
                return null;
            },
            'invoke': function(world964, evt965) {
                var new_world966 = cb958(world964, evt965.key);
                bb959.change_world(new_world966);
                return true;
            }
        };
    };
};
var stop_when967 = function(last_world_p2968, last_picture1969) {
    var last_world_p970 = last_world_p2968;
    if (false !== false) {
        var if_res1389 = false;
    } else {
        var if_res1389 = last_picture1969;
    }
    var last_picture971 = if_res1389;
    return function(bb972) {
        return {
            'name': "stop-when",
            'predicate': last_world_p970,
            'lastpicture': last_picture971,
            'register': function() {
                var this973 = this;
                return bb972.add_world_change_listener(this973.invoke);
            },
            'deregister': function() {
                var this974 = this;
                return bb972.remove_world_change_listener(this974.invoke);
            },
            'invoke': function(w975) {
                if (last_world_p970(w975) !== false) {
                    bb972.stop();
                    if (last_picture971 !== false) {
                        var handler976 = to_draw(last_picture971)(bb972);
                        return bb972.queue_event({
                            'type': "raw",
                            'invoke': handler976.invoke
                        });
                    } else {
                        return M0.rvoid();
                    }
                } else {
                    return M0.rvoid();
                }
            }
        };
    };
};
var cl1392 = function(last_world_p977) {
    return stop_when967(last_world_p977, false);
};
var cl1393 = function(last_world_p978, last_picture1979) {
    return stop_when967(last_world_p978, last_picture1979);
};
var stop_when = $rjs_core.attachProcedureArity(function() {
    var fixed_lam1394 = {
        '1': cl1392,
        '2': cl1393
    } [arguments.length];
    if (fixed_lam1394 !== undefined) {
        return fixed_lam1394.apply(null, arguments);
    } else {
        return M0.error($rjs_core.UString.make("case-lambda: invalid case"));
    }
}, [1, 2]);
var key_table = {
    'Backspace': $rjs_core.UString.make("\b"),
    'Enter': $rjs_core.UString.make("\r"),
    'Tab': $rjs_core.UString.make("\t"),
    'ArrowLeft': $rjs_core.UString.make("left"),
    'ArrowRight': $rjs_core.UString.make("right"),
    'ArrowDown': $rjs_core.UString.make("down"),
    'ArrowUp': $rjs_core.UString.make("up"),
    'Shift': $rjs_core.UString.make("shift"),
    'Control': $rjs_core.UString.make("control"),
    'ControlRight': $rjs_core.UString.make("rcontrol"),
    'ControlLeft': $rjs_core.UString.make("control"),
    'ShiftRight': $rjs_core.UString.make("rshift"),
    'ShiftLeft': $rjs_core.UString.make("shift"),
    'Escape': $rjs_core.UString.make("escape"),
    'Home': $rjs_core.UString.make("home"),
    'End': $rjs_core.UString.make("end"),
    'Insert': $rjs_core.UString.make("insert"),
    'Delete': $rjs_core.UString.make("\u007F"),
    'Pause': $rjs_core.UString.make("pause"),
    'NumLock': $rjs_core.UString.make("numlock"),
    'F1': $rjs_core.UString.make("f1"),
    'F2': $rjs_core.UString.make("f2"),
    'F3': $rjs_core.UString.make("f3"),
    'F4': $rjs_core.UString.make("f4"),
    'F5': $rjs_core.UString.make("f5"),
    'F6': $rjs_core.UString.make("f6"),
    'F7': $rjs_core.UString.make("f7"),
    'F8': $rjs_core.UString.make("f8"),
    'F9': $rjs_core.UString.make("f9"),
    'F10': $rjs_core.UString.make("f10"),
    'F11': $rjs_core.UString.make("f11"),
    'F12': $rjs_core.UString.make("f12")
};
var key_event__gt_key_name = function(e980) {
    var k981 = e980.key;
    var or_part983 = k981 === "Shift";
    if (or_part983 !== false) {
        var if_res1396 = or_part983;
    } else {
        var or_part984 = k981 === "Control";
        if (or_part984 !== false) {
            var if_res1395 = or_part984;
        } else {
            var if_res1395 = k981 === "Alt";
        }
        var if_res1396 = if_res1395;
    }
    if (if_res1396 !== false) {
        var if_res1397 = e980.code;
    } else {
        var if_res1397 = k981;
    }
    var code982 = if_res1397;
    var key_table_code985 = key_table[code982];
    if (M0.void_p(key_table_code985) !== false) {
        return M1.js_string__gt_string(code982);
    } else {
        return key_table_code985;
    }
};
var canvas_posn_δ = function(canvas986, evt987) {
    var rect988 = canvas986.getBoundingClientRect();
    return {
        'x': evt987.clientX - rect988.left,
        'y': evt987.clientY - rect988.top
    };
};
var key_eq__p = function(k1989, k2990) {
    return M0.equal_p(k1989, k2990);
};
var mouse_eq__p = function(m1991, m2992) {
    return M0.equal_p(m1991, m2992);
};
var __rjs_quoted__ = {};
__rjs_quoted__.key_event__gt_key_name = key_event__gt_key_name;
export {
    __rjs_quoted__,
    mouse_eq__p,
    key_eq__p,
    big_bang,
    stop_when,
    to_draw,
    on_release,
    on_key,
    on_tick,
    on_mouse
};