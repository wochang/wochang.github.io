import * as $rjs_core from './core.js';
import * as M0 from "./syntax.rkt.js";
import * as M2 from "./lib.rkt.js";
var variable_reference_from_unsafe_p = function(v173) {
    return false;
};
var variable_reference_constant_p = function(v174) {
    return false;
};
var make_instance = M2.Core.Linklet.makeInstance;
var instance_data = M2.Core.Linklet.instanceData;
var instance_name = M2.Core.Linklet.instanceName;
var instance_variable_value = M2.Core.Linklet.instanceVariableValue;
var instance_variable_names = M2.Core.Linklet.instanceVariableNames;
var instance_set_variable_value_bang_ = M2.Core.Linklet.instanceSetVariableValue;
var instance_unset_variable_bang_ = M2.Core.Linklet.instanceUnsetVariable;
var instance_describe_variable_bang_ = M2.Core.Linklet.instanceDescribeVariable;
var linklet_virtual_machine_bytes = function() {
    return $rjs_core.Bytes.fromIntArray([114, 97, 99, 107, 101, 116, 115, 99, 114, 105, 112, 116]);
};
var primitive_table = function(v175) {
    return M2.Core.Hash.makeEqual([
        [$rjs_core.PrimitiveSymbol.make("syntax?"), M0.__rjs_quoted__.syntax_p],
        [$rjs_core.PrimitiveSymbol.make("syntax-e"), M0.__rjs_quoted__.syntax_e],
        [$rjs_core.PrimitiveSymbol.make("datum->syntax"), M0.__rjs_quoted__.datum__gt_syntax],
        [$rjs_core.PrimitiveSymbol.make("syntax->datum"), M0.__rjs_quoted__.syntax__gt_datum],
        [$rjs_core.PrimitiveSymbol.make("syntax-property"), M0.__rjs_quoted__.syntax_property],
        [$rjs_core.PrimitiveSymbol.make("syntax-property-symbol-keys"), M0.__rjs_quoted__.syntax_property_symbol_keys],
        [$rjs_core.PrimitiveSymbol.make("syntax-source"), M0.__rjs_quoted__.syntax_source],
        [$rjs_core.PrimitiveSymbol.make("syntax-line"), M0.__rjs_quoted__.syntax_line],
        [$rjs_core.PrimitiveSymbol.make("syntax-column"), M0.__rjs_quoted__.syntax_column],
        [$rjs_core.PrimitiveSymbol.make("syntax-span"), M0.__rjs_quoted__.syntax_span],
        [$rjs_core.PrimitiveSymbol.make("syntax-position"), M0.__rjs_quoted__.syntax_position],
        [$rjs_core.PrimitiveSymbol.make("variable-reference-constant?"), variable_reference_constant_p],
        [$rjs_core.PrimitiveSymbol.make("variable-reference-from-unsafe?"), variable_reference_from_unsafe_p],
        [$rjs_core.PrimitiveSymbol.make("make-instance"), make_instance],
        [$rjs_core.PrimitiveSymbol.make("instance-describe-variable!"), instance_describe_variable_bang_],
        [$rjs_core.PrimitiveSymbol.make("instance-unset-variable!"), instance_unset_variable_bang_],
        [$rjs_core.PrimitiveSymbol.make("instance-set-variable-value!"), instance_set_variable_value_bang_],
        [$rjs_core.PrimitiveSymbol.make("instance-variable-names"), instance_variable_names],
        [$rjs_core.PrimitiveSymbol.make("instance-variable-value"), instance_variable_value],
        [$rjs_core.PrimitiveSymbol.make("instance-data"), instance_data],
        [$rjs_core.PrimitiveSymbol.make("instance-name"), instance_name],
        [$rjs_core.PrimitiveSymbol.make("linklet-virtual-machine-bytes"), linklet_virtual_machine_bytes],
        [$rjs_core.PrimitiveSymbol.make("primitive-table"), primitive_table]
    ], false);
};
var __rjs_quoted__ = {};
export {
    __rjs_quoted__,
    variable_reference_from_unsafe_p,
    variable_reference_constant_p,
    make_instance,
    instance_data,
    instance_name,
    instance_variable_value,
    instance_variable_names,
    instance_set_variable_value_bang_,
    instance_unset_variable_bang_,
    instance_describe_variable_bang_,
    linklet_virtual_machine_bytes,
    primitive_table
};