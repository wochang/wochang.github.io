import * as $rjs_core from '../../../../runtime/core.js';
import * as M0 from "../../../../collects/racket/private/map.rkt.js";
import * as M1 from "../../../../runtime/kernel.rkt.js";
import * as M2 from "../../../racketscript-compiler/racketscript/interop.rkt.js";
import * as M3 from "./private/color.rkt.js";
import * as M4 from "../../../racketscript-compiler/racketscript/private/interop.rkt.js";
import * as M5 from "../private/jscommon.rkt.js";
import * as M6 from "../../../../collects/racket/private/list.rkt.js";
var let_result1528 = M1.make_struct_type($rjs_core.PrimitiveSymbol.make("posn"), false, 2, 0, false, M1.rnull, false, false, $rjs_core.Pair.makeList(0, 1), false, $rjs_core.PrimitiveSymbol.make("posn"));
var struct_993 = let_result1528.getAt(0);
var make_994 = let_result1528.getAt(1);
var __p995 = let_result1528.getAt(2);
var __ref996 = let_result1528.getAt(3);
var __set_bang_997 = let_result1528.getAt(4);
var let_result1529 = M1.values(struct_993, make_994, __p995, M1.make_struct_field_accessor(__ref996, 0, $rjs_core.PrimitiveSymbol.make("x")), M1.make_struct_field_accessor(__ref996, 1, $rjs_core.PrimitiveSymbol.make("y")));
var struct_posn = let_result1529.getAt(0);
var make_posn = let_result1529.getAt(1);
var posn_p = let_result1529.getAt(2);
var posn_x = let_result1529.getAt(3);
var posn_y = let_result1529.getAt(4);
var ___gt_web_color = function(p998) {
    if (M1.string_p(p998) !== false) {
        return M3.string__gt_web_color(p998);
    } else {
        if (M3.color_p(p998) !== false) {
            return M3.color__gt_web_color(p998);
        } else {
            if (M1.symbol_p(p998) !== false) {
                return M3.string__gt_web_color(M1.symbol__gt_string(p998));
            } else {
                return M1.error($rjs_core.PrimitiveSymbol.make("color"), $rjs_core.UString.make("invalid color"));
            }
        }
    }
};
var print_image = function(d999) {
    var canvas1000 = M5.document.createElement("canvas");
    var ctx1001 = canvas1000.getContext("2d");
    M5.document.body.appendChild(canvas1000);
    M5.document.body.appendChild(M5.document.createElement("br"));
    canvas1000.width = d999.width;
    canvas1000.height = d999.height;
    ctx1001.save();
    ctx1001.translate(d999.width / 2, d999.height / 2);
    d999.render(ctx1001, 0, 0);
    return ctx1001.restore();
};
var canvas1002 = M5.document.createElement("canvas");
var __times_invisible_canvas_context_times_ = canvas1002.getContext("2d");
var empty_image = {
    'type': $rjs_core.UString.make("empty-image"),
    'width': 0,
    'height': 0,
    'render': function(ctx1003, x1004, y1005) {
        return M1.rvoid();
    }
};
var image_height = function(i1006) {
    return i1006.height;
};
var image_width = function(i1007) {
    return i1007.width;
};
var EmptyScene = function(width1008, height1009, borders_p1010) {
    var this1011 = this;
    this1011.type = $rjs_core.UString.make("empty-scene");
    this1011.width = width1008;
    this1011.height = height1009;
    this1011.borders_p = borders_p1010;
    return null;
};
EmptyScene.prototype.render = function(ctx1012, x1013, y1014) {
    return M1.rvoid();
};
var Text = function(text1015, size1016, color1017, face1018, family1019, style1020, weight1021, underline_p1022) {
    var this1023 = this;
    this1023.type = $rjs_core.UString.make("text");
    this1023.text = text1015;
    this1023.size = size1016;
    this1023.color = ___gt_web_color(color1017);
    this1023.face = face1018;
    this1023.family = family1019;
    this1023.style = style1020;
    this1023.weight = weight1021;
    this1023.underline = underline_p1022;
    return this1023._updateMetrics();
};
Text.prototype._updateMetrics = function() {
    var this1024 = this;
    var font1025 = M1.string_append(this1024.weight, $rjs_core.UString.make(" "), this1024.style, $rjs_core.UString.make(" "), M1.number__gt_string(this1024.size), $rjs_core.UString.make("px "), this1024.face, $rjs_core.UString.make(" "), this1024.family);
    __times_invisible_canvas_context_times_.font = M2.js_string(font1025);
    var let_result1533 = M1.values();
    var metrics1026 = __times_invisible_canvas_context_times_.measureText(M2.js_string(this1024.text));
    this1024.font = font1025;
    this1024.width = metrics1026.width;
    this1024.height = this1024.size;
    return null;
};
Text.prototype.render = function(ctx1027, x1028, y1029) {
    var this1030 = this;
    ctx1027.save();
    ctx1027.translate(x1028, y1029);
    ctx1027.font = M2.js_string(this1030.font);
    ctx1027.textAlign = "center";
    ctx1027.textBaseline = "middle";
    ctx1027.fillStyle = M2.js_string(this1030.color);
    ctx1027.fillText(M2.js_string(this1030.text), 0, 0);
    return ctx1027.restore();
};
var Line = function(x1031, y1032, pen_or_color1033) {
    var this1034 = this;
    this1034.type = $rjs_core.UString.make("line");
    this1034.width = M5.abs_plus_ceil(x1031);
    this1034.height = M5.abs_plus_ceil(y1032);
    this1034.mode = false;
    this1034.pen = pen_or_color1033;
    return null;
};
Line.prototype.render = function(ctx1035, x1036, y1037) {
    var this1038 = this;
    ctx1035.save();
    var let_result1534 = M1.values();
    ctx1035.translate(x1036, y1037);
    var let_result1535 = M1.values();
    ctx1035.beginPath();
    var let_result1536 = M1.values();
    var sx1039 = M1.__(M1.abs(this1038.x / 2));
    var sy1040 = M1.__(M1.abs(this1038.y / 2));
    if (M1.__gt__eq_(x1036, 0) !== false) {
        var if_res1537 = M1.__gt__eq_(y1037, 0);
    } else {
        var if_res1537 = false;
    }
    if (if_res1537 !== false) {
        ctx1035.moveTo(sx1039, sy1040);
        var if_res1544 = ctx1035.lineTo(sx1039 + x1036, sy1040 + y1037);
    } else {
        if (M1.__gt__eq_(x1036, 0) !== false) {
            var if_res1538 = M1.__lt_(y1037, 0);
        } else {
            var if_res1538 = false;
        }
        if (if_res1538 !== false) {
            ctx1035.moveTo(sx1039 + x1036, sy1040);
            var if_res1543 = ctx1035.lineTo(sx1039, sy1040 - y1037);
        } else {
            if (M1.__lt_(x1036, 0) !== false) {
                var if_res1539 = M1.__gt__eq_(y1037, 0);
            } else {
                var if_res1539 = false;
            }
            if (if_res1539 !== false) {
                ctx1035.moveTo(sx1039, sy1040 + y1037);
                var if_res1542 = ctx1035.lineTo(sx1039 - x1036, sy1040);
            } else {
                if (M1.__lt_(x1036, 0) !== false) {
                    var if_res1540 = M1.__lt_(y1037, 0);
                } else {
                    var if_res1540 = false;
                }
                if (if_res1540 !== false) {
                    ctx1035.moveTo(sx1039 - x1036, sy1040 - y1037);
                    var if_res1541 = ctx1035.lineTo(sx1039, sy1040);
                } else {
                    var if_res1541 = M1.rvoid();
                }
                var if_res1542 = if_res1541;
            }
            var if_res1543 = if_res1542;
        }
        var if_res1544 = if_res1543;
    }
    if_res1544;
    var or_part1041 = M1.equal_p($rjs_core.UString.make("outline"), $rjs_core.PrimitiveSymbol.make("outline"));
    if (or_part1041 !== false) {
        var if_res1545 = or_part1041;
    } else {
        var if_res1545 = M1.equal_p($rjs_core.UString.make("outline"), $rjs_core.UString.make("outline"));
    }
    if (if_res1545 !== false) {
        ctx1035.strokeStyle = M2.js_string(___gt_web_color(this1038.pen));
        var if_res1548 = ctx1035.stroke();
    } else {
        var or_part1042 = M1.equal_p($rjs_core.UString.make("outline"), $rjs_core.PrimitiveSymbol.make("solid"));
        if (or_part1042 !== false) {
            var if_res1546 = or_part1042;
        } else {
            var if_res1546 = M1.equal_p($rjs_core.UString.make("outline"), $rjs_core.UString.make("solid"));
        }
        if (if_res1546 !== false) {
            ctx1035.fillStyle = M2.js_string(___gt_web_color(this1038.pen));
            var if_res1547 = ctx1035.fill();
        } else {
            var if_res1547 = M1.rvoid();
        }
        var if_res1548 = if_res1547;
    }
    if_res1548;
    ctx1035.closePath();
    return ctx1035.restore();
};
var Rectangle = function(width1043, height1044, mode1045, pen_or_color1046) {
    var this1047 = this;
    this1047.type = $rjs_core.UString.make("rectangle");
    this1047.width = width1043;
    this1047.height = height1044;
    this1047.mode = mode1045;
    this1047.pen = pen_or_color1046;
    return null;
};
Rectangle.prototype.render = function(ctx1048, x1049, y1050) {
    var this1051 = this;
    ctx1048.save();
    ctx1048.translate(x1049, y1050);
    ctx1048.beginPath();
    var width1052 = this1051.width;
    var height1053 = this1051.height;
    var start_x1054 = M1.__(width1052 / 2);
    var start_y1055 = M1.__(height1053 / 2);
    ctx1048.rect(start_x1054, start_y1055, width1052, height1053);
    var or_part1056 = M1.equal_p(this1051.mode, $rjs_core.PrimitiveSymbol.make("outline"));
    if (or_part1056 !== false) {
        var if_res1549 = or_part1056;
    } else {
        var if_res1549 = M1.equal_p(this1051.mode, $rjs_core.UString.make("outline"));
    }
    if (if_res1549 !== false) {
        ctx1048.strokeStyle = M2.js_string(___gt_web_color(this1051.pen));
        var if_res1552 = ctx1048.stroke();
    } else {
        var or_part1057 = M1.equal_p(this1051.mode, $rjs_core.PrimitiveSymbol.make("solid"));
        if (or_part1057 !== false) {
            var if_res1550 = or_part1057;
        } else {
            var if_res1550 = M1.equal_p(this1051.mode, $rjs_core.UString.make("solid"));
        }
        if (if_res1550 !== false) {
            ctx1048.fillStyle = M2.js_string(___gt_web_color(this1051.pen));
            var if_res1551 = ctx1048.fill();
        } else {
            var if_res1551 = M1.rvoid();
        }
        var if_res1552 = if_res1551;
    }
    if_res1552;
    ctx1048.closePath();
    return ctx1048.restore();
};
var Circle = function(radius1058, mode1059, pen_or_color1060) {
    var this1061 = this;
    var diameter1062 = radius1058 * 2;
    this1061.type = $rjs_core.UString.make("circle");
    this1061.radius = radius1058;
    this1061.width = diameter1062;
    this1061.height = diameter1062;
    this1061.mode = mode1059;
    this1061.pen = pen_or_color1060;
    return null;
};
Circle.prototype.render = function(ctx1063, x1064, y1065) {
    var this1066 = this;
    var radius1067 = this1066.radius;
    ctx1063.save();
    ctx1063.translate(x1064, y1065);
    ctx1063.beginPath();
    ctx1063.ellipse(0, 0, radius1067, radius1067, 0, 0, M5.Math.PI * 2);
    var or_part1068 = M1.equal_p(this1066.mode, $rjs_core.PrimitiveSymbol.make("outline"));
    if (or_part1068 !== false) {
        var if_res1553 = or_part1068;
    } else {
        var if_res1553 = M1.equal_p(this1066.mode, $rjs_core.UString.make("outline"));
    }
    if (if_res1553 !== false) {
        ctx1063.strokeStyle = M2.js_string(___gt_web_color(this1066.pen));
        var if_res1556 = ctx1063.stroke();
    } else {
        var or_part1069 = M1.equal_p(this1066.mode, $rjs_core.PrimitiveSymbol.make("solid"));
        if (or_part1069 !== false) {
            var if_res1554 = or_part1069;
        } else {
            var if_res1554 = M1.equal_p(this1066.mode, $rjs_core.UString.make("solid"));
        }
        if (if_res1554 !== false) {
            ctx1063.fillStyle = M2.js_string(___gt_web_color(this1066.pen));
            var if_res1555 = ctx1063.fill();
        } else {
            var if_res1555 = M1.rvoid();
        }
        var if_res1556 = if_res1555;
    }
    if_res1556;
    ctx1063.closePath();
    return ctx1063.restore();
};
var Polygon = function(vertices1070, mode1071, pen_or_color1072) {
    var this1073 = this;
    var xs1074 = M0.map(posn_x, vertices1070);
    var ys1075 = M0.map(posn_y, vertices1070);
    var width1076 = M1.apply(M1.max, xs1074) - M1.apply(M1.min, xs1074);
    var height1077 = M1.apply(M1.max, ys1075) - M1.apply(M1.min, xs1074);
    this1073.type = $rjs_core.UString.make("polygon");
    this1073.vertices = vertices1070;
    this1073.width = width1076;
    this1073.height = height1077;
    this1073.mode = mode1071;
    this1073.pen = pen_or_color1072;
    return null;
};
Polygon.prototype.render = function(ctx1078, x1079, y1080) {
    var this1081 = this;
    var first_point1082 = M1.car(this1081.vertices);
    var rest_points1083 = M1.cdr(this1081.vertices);
    var radius1084 = this1081.radius;
    ctx1078.save();
    ctx1078.translate(x1079, y1080);
    ctx1078.beginPath();
    ctx1078.moveTo(posn_x(first_point1082), posn_y(first_point1082));
    var loop1085 = function(_points10861624) {
        lambda_start1623: while (true) {
            let points1086 = _points10861624;
            if (M1.null_p(points1086) !== false) {
                return M1.rvoid();
            } else {
                var pt1087 = M1.car(points1086);
                ctx1078.lineTo(posn_x(pt1087), posn_y(pt1087));
                _points10861624 = M1.cdr(points1086);
                continue lambda_start1623;
            }
        }
    };
    loop1085(rest_points1083);
    var or_part1088 = M1.equal_p(this1081.mode, $rjs_core.PrimitiveSymbol.make("outline"));
    if (or_part1088 !== false) {
        var if_res1558 = or_part1088;
    } else {
        var if_res1558 = M1.equal_p(this1081.mode, $rjs_core.UString.make("outline"));
    }
    if (if_res1558 !== false) {
        ctx1078.strokeStyle = M2.js_string(___gt_web_color(this1081.pen));
        var if_res1561 = ctx1078.stroke();
    } else {
        var or_part1089 = M1.equal_p(this1081.mode, $rjs_core.PrimitiveSymbol.make("solid"));
        if (or_part1089 !== false) {
            var if_res1559 = or_part1089;
        } else {
            var if_res1559 = M1.equal_p(this1081.mode, $rjs_core.UString.make("solid"));
        }
        if (if_res1559 !== false) {
            ctx1078.fillStyle = M2.js_string(___gt_web_color(this1081.pen));
            var if_res1560 = ctx1078.fill();
        } else {
            var if_res1560 = M1.rvoid();
        }
        var if_res1561 = if_res1560;
    }
    if_res1561;
    ctx1078.closePath();
    return ctx1078.restore();
};
var empty_scene = function(width1090, height1091) {
    return new EmptyScene(width1090, height1091, false);
};
var text = function(txt1092, size1093, color1094) {
    return new Text(txt1092, size1093, color1094, $rjs_core.UString.make(""), $rjs_core.UString.make("serif"), $rjs_core.UString.make("normal"), $rjs_core.UString.make("normal"), false);
};
var text_by_font = function(txt1095, size1096, color1097, face1098, family1099, style1100, weight1101, underline_p1102) {
    var or_part1103 = face1098;
    if (or_part1103 !== false) {
        var if_res1565 = or_part1103;
    } else {
        var if_res1565 = $rjs_core.UString.make("");
    }
    if (M1.symbol_p(family1099) !== false) {
        var if_res1564 = M1.symbol__gt_string(family1099);
    } else {
        var if_res1564 = family1099;
    }
    if (M1.symbol_p(style1100) !== false) {
        var if_res1563 = M1.symbol__gt_string(style1100);
    } else {
        var if_res1563 = style1100;
    }
    if (M1.symbol_p(weight1101) !== false) {
        var if_res1562 = M1.symbol__gt_string(weight1101);
    } else {
        var if_res1562 = weight1101;
    }
    return new Text(txt1095, size1096, color1097, if_res1565, if_res1564, if_res1563, if_res1562, underline_p1102);
};
var line = function(x1104, y1105, pen_or_color1106) {
    return new Line(x1104, y1105, pen_or_color1106);
};
var rectangle = function(w1107, h1108, m1109, p1110) {
    return new Rectangle(w1107, h1108, m1109, p1110);
};
var square = function(s1111, m1112, p1113) {
    return new Rectangle(s1111, s1111, m1112, p1113);
};
var circle = function(r1114, m1115, p1116) {
    return new Circle(r1114, m1115, p1116);
};
var triangle = function(side1117, mode1118, color1119) {
    var height1120 = side1117 * (M1.sqrt(3) / 2);
    return new Polygon(M1.list(make_posn(M1.__(side1117 / 2), height1120 / 2), make_posn(0, M1.__(height1120 / 2)), make_posn(side1117 / 2, height1120 / 2)), mode1118, color1119);
};
var Overlay = function(x_place1121, y_place1122, ima1123, imb1124) {
    var this1125 = this;
    var ima_cx1126 = ima1123.width / 2;
    var ima_cy1127 = ima1123.height / 2;
    var imb_cx1128 = imb1124.width / 2;
    var imb_cy1129 = imb1124.height / 2;
    var tmp1131 = x_place1121;
    if (M1.equal_p(tmp1131, $rjs_core.UString.make("beside")) !== false) {
        var if_res1568 = ima1123.width + imb1124.width;
    } else {
        if (M1.number_p(x_place1121) !== false) {
            if (M1.positive_p(x_place1121) !== false) {
                var if_res1566 = M1.max(ima1123.width, imb1124.width + x_place1121);
            } else {
                var if_res1566 = M1.max(imb1124.width, ima1123.width - x_place1121);
            }
            var if_res1567 = if_res1566;
        } else {
            var if_res1567 = M1.max(ima1123.width, imb1124.width);
        }
        var if_res1568 = if_res1567;
    }
    var width1130 = if_res1568;
    var tmp1133 = y_place1122;
    if (M1.equal_p(tmp1133, $rjs_core.UString.make("above")) !== false) {
        var if_res1571 = ima1123.height + imb1124.height;
    } else {
        if (M1.number_p(y_place1122) !== false) {
            if (M1.positive_p(y_place1122) !== false) {
                var if_res1569 = M1.max(ima1123.height, imb1124.height + y_place1122);
            } else {
                var if_res1569 = M1.max(imb1124.height, ima1123.height - y_place1122);
            }
            var if_res1570 = if_res1569;
        } else {
            var if_res1570 = M1.max(ima1123.height, imb1124.height);
        }
        var if_res1571 = if_res1570;
    }
    var height1132 = if_res1571;
    var δ_edge_x1134 = width1130 / 2;
    var δ_edge_y1135 = height1132 / 2;
    var tmp1138 = x_place1121;
    if (M1.equal_p(tmp1138, $rjs_core.UString.make("left")) !== false) {
        var if_res1578 = M1.values(ima_cx1126 - δ_edge_x1134, imb_cx1128 - δ_edge_x1134);
    } else {
        if (M1.equal_p(tmp1138, $rjs_core.UString.make("right")) !== false) {
            var if_res1577 = M1.values(δ_edge_x1134 - ima_cx1126, δ_edge_x1134 - imb_cx1128);
        } else {
            if (M1.equal_p(tmp1138, $rjs_core.UString.make("beside")) !== false) {
                var if_res1576 = M1.values(ima_cx1126 - δ_edge_x1134, δ_edge_x1134 - imb_cx1128);
            } else {
                if (M1.equal_p(tmp1138, $rjs_core.UString.make("middle")) !== false) {
                    var if_res1572 = true;
                } else {
                    var if_res1572 = M1.equal_p(tmp1138, $rjs_core.UString.make("center"));
                }
                if (if_res1572 !== false) {
                    var if_res1575 = M1.values(0, 0);
                } else {
                    if (M1.number_p(x_place1121) !== false) {
                        var local_width1139 = M1.max(ima1123.width, imb1124.width);
                        var local_acx1140 = ima_cx1126 - (local_width1139 / 2);
                        var local_bcx1141 = imb_cx1128 - (local_width1139 / 2);
                        var acx_bcx1142 = δ_edge_x1134 - (local_width1139 / 2);
                        if (M1.positive_p(x_place1121) !== false) {
                            var if_res1573 = M1.values(local_acx1140 - acx_bcx1142, x_place1121 + (local_bcx1141 - acx_bcx1142));
                        } else {
                            var if_res1573 = M1.values(local_acx1140 - x_place1121 - acx_bcx1142, local_bcx1141 - acx_bcx1142);
                        }
                        var if_res1574 = if_res1573;
                    } else {
                        var if_res1574 = M1.error($rjs_core.UString.make("invalid x-place align"));
                    }
                    var if_res1575 = if_res1574;
                }
                var if_res1576 = if_res1575;
            }
            var if_res1577 = if_res1576;
        }
        var if_res1578 = if_res1577;
    }
    var let_result1579 = if_res1578;
    var δ_a_x1136 = let_result1579.getAt(0);
    var δ_b_x1137 = let_result1579.getAt(1);
    var tmp1145 = y_place1122;
    if (M1.equal_p(tmp1145, $rjs_core.UString.make("top")) !== false) {
        var if_res1586 = M1.values(ima_cy1127 - δ_edge_y1135, imb_cy1129 - δ_edge_y1135);
    } else {
        if (M1.equal_p(tmp1145, $rjs_core.UString.make("bottom")) !== false) {
            var if_res1585 = M1.values(δ_edge_y1135 - ima_cy1127, δ_edge_y1135 - imb_cy1129);
        } else {
            if (M1.equal_p(tmp1145, $rjs_core.UString.make("above")) !== false) {
                var if_res1584 = M1.values(ima_cy1127 - δ_edge_y1135, δ_edge_y1135 - imb_cy1129);
            } else {
                if (M1.equal_p(tmp1145, $rjs_core.UString.make("middle")) !== false) {
                    var if_res1580 = true;
                } else {
                    var if_res1580 = M1.equal_p(tmp1145, $rjs_core.UString.make("center"));
                }
                if (if_res1580 !== false) {
                    var if_res1583 = M1.values(0, 0);
                } else {
                    if (M1.number_p(y_place1122) !== false) {
                        var local_height1146 = M1.max(ima1123.height, imb1124.height);
                        var local_acy1147 = ima_cy1127 - (local_height1146 / 2);
                        var local_bcy1148 = imb_cy1129 - (local_height1146 / 2);
                        var acy_bcy1149 = δ_edge_y1135 - (local_height1146 / 2);
                        if (M1.positive_p(y_place1122) !== false) {
                            var if_res1581 = M1.values(local_acy1147 - acy_bcy1149, y_place1122 + (local_bcy1148 - acy_bcy1149));
                        } else {
                            var if_res1581 = M1.values(local_acy1147 - y_place1122 - acy_bcy1149, local_bcy1148 - acy_bcy1149);
                        }
                        var if_res1582 = if_res1581;
                    } else {
                        var if_res1582 = M1.error($rjs_core.UString.make("invalid y-place align"));
                    }
                    var if_res1583 = if_res1582;
                }
                var if_res1584 = if_res1583;
            }
            var if_res1585 = if_res1584;
        }
        var if_res1586 = if_res1585;
    }
    var let_result1587 = if_res1586;
    var δ_a_y1143 = let_result1587.getAt(0);
    var δ_b_y1144 = let_result1587.getAt(1);
    this1125.type = $rjs_core.UString.make("overlay");
    this1125.ima = ima1123;
    this1125.imb = imb1124;
    this1125.width = width1130;
    this1125.height = height1132;
    this1125.aDx = δ_a_x1136;
    this1125.aDy = δ_a_y1143;
    this1125.bDx = δ_b_x1137;
    this1125.bDy = δ_b_y1144;
    return null;
};
Overlay.prototype.render = function(ctx1150, x1151, y1152) {
    var this1153 = this;
    var ima1154 = this1153.ima;
    var imb1155 = this1153.imb;
    ctx1150.save();
    ctx1150.translate(x1151, y1152);
    imb1155.render(ctx1150, this1153.bDx, this1153.bDy);
    ima1154.render(ctx1150, this1153.aDx, this1153.aDy);
    return ctx1150.restore();
};
var Container = function(childs1156, posns1157, width1158, height1159) {
    var this1160 = this;
    this1160.type = $rjs_core.UString.make("container");
    this1160.childs = childs1156;
    this1160.posns = posns1157;
    this1160.width = width1158;
    this1160.height = height1159;
    return null;
};
Container.prototype.render = function(ctx1161, x1162, y1163) {
    var this1164 = this;
    var width1165 = this1164.width;
    var height1166 = this1164.height;
    ctx1161.save();
    ctx1161.translate(x1162 - (width1165 / 2), y1163 - (height1166 / 2));
    ctx1161.beginPath();
    ctx1161.rect(0, 0, M1.sub1(width1165), M1.sub1(height1166));
    ctx1161.clip();
    var loop1167 = function(_childs11681638, _posns11691639) {
        lambda_start1637: while (true) {
            let childs1168 = _childs11681638;
            let posns1169 = _posns11691639;
            if (M1.null_p(childs1168) !== false) {
                return M1.rvoid();
            } else {
                var child1170 = M1.car(childs1168);
                var posn1171 = M1.car(posns1169);
                child1170.render(ctx1161, posn_x(posn1171), posn_y(posn1171));
                _childs11681638 = M1.cdr(childs1168);
                _posns11691639 = M1.cdr(posns1169);
                continue lambda_start1637;
            }
        }
    };
    loop1167(this1164.childs, this1164.posns);
    return ctx1161.restore();
};
var Bitmap = function(data1172) {
    var this1173 = this;
    var image1174 = new Image;
    image1174.crossOrigin = "anonymous";
    image1174.src = M2.js_string(data1172);
    this1173.image = image1174;
    this1173.width = image1174.width;
    this1173.height = image1174.height;
    return null;
};
Bitmap.prototype.render = function(ctx1175, x1176, y1177) {
    var this1178 = this;
    var image1179 = this1178.image;
    ctx1175.save();
    ctx1175.translate(x1176, y1177);
    ctx1175.drawImage(image1179, M1.__(image1179.width / 2), M1.__(image1179.height / 2));
    return ctx1175.restore();
};
var Freeze = function(img1180) {
    var this1181 = this;
    var canvas1182 = M5.document.createElement("canvas");
    var ctx1183 = canvas1182.getContext("2d");
    var width1184 = img1180.width;
    var height1185 = img1180.height;
    canvas1182.width = width1184;
    canvas1182.height = height1185;
    ctx1183.save();
    ctx1183.translate(width1184 / 2, height1185 / 2);
    img1180.render(ctx1183, 0, 0);
    ctx1183.restore();
    this1181.width = width1184;
    this1181.height = height1185;
    this1181.canvas = canvas1182;
    return null;
};
Freeze.prototype.render = function(ctx1186, x1187, y1188) {
    var this1189 = this;
    var width1190 = this1189.width;
    var height1191 = this1189.height;
    ctx1186.save();
    ctx1186.translate(x1187, y1188);
    ctx1186.drawImage(this1189.canvas, M1.__(width1190 / 2), M1.__(height1191 / 2));
    return ctx1186.restore();
};
var Rotate = function(image1192, angle1193) {
    var this1194 = this;
    var width1195 = image1192.width;
    var height1196 = image1192.height;
    var θ1197 = (M5.Math.PI * angle1193) / 180.0;
    var sin_θ1198 = M1.sin(θ1197);
    var cos_θ1199 = M1.cos(θ1197);
    var x11200 = cos_θ1199 * width1195;
    var y11201 = sin_θ1198 * width1195;
    var x21202 = M1.__(sin_θ1198) * height1196;
    var y21203 = cos_θ1199 * height1196;
    var x31204 = x11200 + x21202;
    var y31205 = y11201 + y21203;
    var min_x1206 = M1.min(0, x11200, x21202, x31204);
    var max_x1207 = M1.max(0, x11200, x21202, x31204);
    var min_y1208 = M1.min(0, y11201, y21203, y31205);
    var max_y1209 = M1.max(0, y11201, y21203, y31205);
    var rotated_width1210 = M1.floor(max_x1207 - min_x1206);
    var rotated_height1211 = M1.floor(max_y1209 - min_y1208);
    this1194.image = image1192;
    this1194.width = rotated_width1210;
    this1194.height = rotated_height1211;
    this1194.degrees = angle1193;
    this1194.radians = θ1197;
    return null;
};
Rotate.prototype.render = function(ctx1212, x1213, y1214) {
    var this1215 = this;
    ctx1212.save();
    ctx1212.translate(x1213, y1214);
    ctx1212.rotate(this1215.radians);
    this1215.image.render(ctx1212, 0, 0);
    return ctx1212.restore();
};
var Scale = function(image1216, x_factor1217, y_factor1218) {
    var this1219 = this;
    this1219.image = image1216;
    this1219.x_factor = x_factor1217;
    this1219.y_factor = y_factor1218;
    this1219.width = M1.abs(M1.floor(image1216.width * x_factor1217));
    this1219.height = M1.abs(M1.floor(image1216.height * y_factor1218));
    return null;
};
Scale.prototype.render = function(ctx1220, x1221, y1222) {
    var this1223 = this;
    ctx1220.save();
    ctx1220.translate(x1221, y1222);
    ctx1220.scale(this1223.x_factor, this1223.y_factor);
    this1223.image.render(ctx1220, 0, 0);
    return ctx1220.restore();
};
var container = function(childs1224, posns1225, width1226, height1227) {
    return new Container(childs1224, posns1225, width1226, height1227);
};
var place_image = function(child1228, cx1229, cy1230, base1231) {
    var width1232 = base1231.width;
    var height1233 = base1231.height;
    return container(M1.list(base1231, child1228), M1.list(make_posn(width1232 / 2, height1233 / 2), make_posn(cx1229, cy1230)), width1232, height1233);
};
var place_images = function(images1234, posns1235, scene1236) {
    var width1237 = scene1236.width;
    var height1238 = scene1236.height;
    return container(M1.cons(scene1236, images1234), M1.cons(make_posn(width1237 / 2, height1238 / 2), posns1235), width1237, height1238);
};
var __align_image_pos = function(image1239, pos1240, x_place1241, y_place1242) {
    var x1243 = posn_x(pos1240);
    var y1244 = posn_y(pos1240);
    var tmp1246 = x_place1241;
    if (M1.equal_p(tmp1246, $rjs_core.UString.make("left")) !== false) {
        var if_res1592 = (image1239.width / 2) + x1243;
    } else {
        if (M1.equal_p(tmp1246, $rjs_core.UString.make("right")) !== false) {
            var if_res1591 = x1243 - (image1239.width / 2);
        } else {
            if (M1.equal_p(tmp1246, $rjs_core.UString.make("center")) !== false) {
                var if_res1589 = true;
            } else {
                var if_res1589 = M1.equal_p(tmp1246, $rjs_core.UString.make("middle"));
            }
            if (if_res1589 !== false) {
                var if_res1590 = x1243;
            } else {
                var if_res1590 = M1.rvoid();
            }
            var if_res1591 = if_res1590;
        }
        var if_res1592 = if_res1591;
    }
    var new_x1245 = if_res1592;
    var tmp1248 = y_place1242;
    if (M1.equal_p(tmp1248, $rjs_core.UString.make("top")) !== false) {
        var if_res1596 = (image1239.height / 2) + y1244;
    } else {
        if (M1.equal_p(tmp1248, $rjs_core.UString.make("bottom")) !== false) {
            var if_res1595 = y1244 - (image1239.height / 2);
        } else {
            if (M1.equal_p(tmp1248, $rjs_core.UString.make("center")) !== false) {
                var if_res1593 = true;
            } else {
                var if_res1593 = M1.equal_p(tmp1248, $rjs_core.UString.make("middle"));
            }
            if (if_res1593 !== false) {
                var if_res1594 = y1244;
            } else {
                var if_res1594 = M1.rvoid();
            }
            var if_res1595 = if_res1594;
        }
        var if_res1596 = if_res1595;
    }
    var new_y1247 = if_res1596;
    return make_posn(new_x1245, new_y1247);
};
var place_image_by_align = function(image1249, x1250, y1251, x_place1252, y_place1253, scene1254) {
    var new_pos1255 = __align_image_pos(image1249, make_posn(x1250, y1251), x_place1252, y_place1253);
    return place_image(image1249, posn_x(new_pos1255), posn_y(new_pos1255), scene1254);
};
var place_images_by_align = function(images1256, posns1257, x_place1258, y_place1259, scene1260) {
    var new_posns1261 = M0.map(function(i1262, p1263) {
        return __align_image_pos(i1262, p1263, x_place1258, y_place1259);
    }, images1256, posns1257);
    return place_images(images1256, new_posns1261, scene1260);
};
var __single_overlay = function(x_place1264, y_place1265, ima1266, imb1267) {
    return new Overlay(x_place1264, y_place1265, ima1266, imb1267);
};
var __single_underlay = function(x_place1268, y_place1269, ima1270, imb1271) {
    return new Overlay(x_place1268, y_place1269, imb1271, ima1270);
};
var overlay_by_align = $rjs_core.attachProcedureArity(function(x_place1272, y_place1273, ima1274, imb1275, ...imn12761597) {
    var imn1276 = $rjs_core.Pair.listFromArray(imn12761597);
    return M6.foldl(function(img1277, acc1278) {
        return __single_overlay(x_place1272, y_place1273, acc1278, img1277);
    }, empty_image, M1.cons(ima1274, M1.cons(imb1275, imn1276)));
});
var overlay = $rjs_core.attachProcedureArity(function(ima1279, imb1280, ...imn12811598) {
    var imn1281 = $rjs_core.Pair.listFromArray(imn12811598);
    return M6.foldl(function(img1282, acc1283) {
        return __single_overlay($rjs_core.UString.make("middle"), $rjs_core.UString.make("middle"), acc1283, img1282);
    }, empty_image, M1.cons(ima1279, M1.cons(imb1280, imn1281)));
});
var overlay_by_xy = function(ima1284, x1285, y1286, imb1287) {
    return new Overlay(x1285, y1286, ima1284, imb1287);
};
var underlay = $rjs_core.attachProcedureArity(function(ima1288, imb1289, ...imn12901599) {
    var imn1290 = $rjs_core.Pair.listFromArray(imn12901599);
    return M6.foldl(function(img1291, acc1292) {
        return __single_underlay($rjs_core.UString.make("middle"), $rjs_core.UString.make("middle"), acc1292, img1291);
    }, empty_image, M1.cons(ima1288, M1.cons(imb1289, imn1290)));
});
var underlay_by_align = $rjs_core.attachProcedureArity(function(x_place1293, y_place1294, ima1295, imb1296, ...imn12971600) {
    var imn1297 = $rjs_core.Pair.listFromArray(imn12971600);
    return M6.foldl(function(img1298, acc1299) {
        return __single_underlay(x_place1293, y_place1294, acc1299, img1298);
    }, empty_image, M1.cons(ima1295, M1.cons(imb1296, imn1297)));
});
var underlay_by_xy = function(ima1300, x1301, y1302, imb1303) {
    return new Overlay(M1.__(x1301), M1.__(y1302), imb1303, ima1300);
};
var above_by_align = $rjs_core.attachProcedureArity(function(x_place1304, i11305, i21306, ...is13071601) {
    var is1307 = $rjs_core.Pair.listFromArray(is13071601);
    return M6.foldl(function(img1308, acc1309) {
        return __single_overlay(x_place1304, $rjs_core.UString.make("above"), acc1309, img1308);
    }, empty_image, M1.cons(i11305, M1.cons(i21306, is1307)));
});
var above = $rjs_core.attachProcedureArity(function(i11310, i21311, ...is13121602) {
    var is1312 = $rjs_core.Pair.listFromArray(is13121602);
    return M6.foldl(function(img1313, acc1314) {
        return __single_overlay($rjs_core.UString.make("middle"), $rjs_core.UString.make("above"), acc1314, img1313);
    }, empty_image, M1.cons(i11310, M1.cons(i21311, is1312)));
});
var beside_by_align = $rjs_core.attachProcedureArity(function(y_place1315, i11316, i21317, ...is13181603) {
    var is1318 = $rjs_core.Pair.listFromArray(is13181603);
    return M6.foldl(function(img1319, acc1320) {
        return __single_overlay($rjs_core.UString.make("beside"), y_place1315, acc1320, img1319);
    }, empty_image, M1.cons(i11316, M1.cons(i21317, is1318)));
});
var beside = $rjs_core.attachProcedureArity(function(i11321, i21322, ...is13231604) {
    var is1323 = $rjs_core.Pair.listFromArray(is13231604);
    return M6.foldl(function(img1324, acc1325) {
        return __single_overlay($rjs_core.UString.make("beside"), $rjs_core.UString.make("middle"), acc1325, img1324);
    }, empty_image, M1.cons(i11321, M1.cons(i21322, is1323)));
});
var rotate = function(angle1326, image1327) {
    return new Rotate(image1327, M1.__(angle1326));
};
var scale = function(factor1328, image1329) {
    return new Scale(image1329, factor1328, factor1328);
};
var flip_horizontal = function(image1330) {
    return new Scale(image1330, -1, 1);
};
var flip_vertical = function(image1331) {
    return new Scale(image1331, 1, -1);
};
var bitmap_by_data = function(data1332) {
    return new Bitmap(data1332);
};
var bitmap_by_url = function(url1333) {
    return new Bitmap(url1333);
};
var frame = function(img1334) {
    return color_frame($rjs_core.UString.make("black"), img1334);
};
var color_frame = function(color1335, img1336) {
    return overlay(rectangle(image_width(img1336), image_height(img1336), $rjs_core.PrimitiveSymbol.make("outline"), color1335), img1336);
};
var freeze = function(img1337) {
    return new Freeze(img1337);
};
var __rjs_quoted__ = {};
__rjs_quoted__.empty_image = empty_image;
__rjs_quoted__.posn_p = posn_p;
__rjs_quoted__.make_posn = make_posn;
__rjs_quoted__.posn_y = posn_y;
__rjs_quoted__.posn_x = posn_x;
__rjs_quoted__.___gt_web_color = ___gt_web_color;
__rjs_quoted__.struct_posn = struct_posn;
export {
    __rjs_quoted__,
    posn_x,
    posn_y,
    posn_p,
    make_posn,
    struct_posn,
    print_image,
    freeze,
    bitmap_by_url,
    bitmap_by_data,
    flip_horizontal,
    flip_vertical,
    scale,
    rotate,
    beside,
    beside_by_align,
    above,
    above_by_align,
    underlay_by_xy,
    underlay,
    overlay,
    overlay_by_xy,
    overlay_by_align,
    place_images_by_align,
    place_image_by_align,
    place_images,
    place_image,
    color_frame,
    frame,
    triangle,
    text_by_font,
    text,
    circle,
    square,
    rectangle,
    line,
    image_width,
    image_height,
    empty_scene,
    empty_image
};