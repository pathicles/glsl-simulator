(module
 (type $iii (func (param i32 i32) (result i32)))
 (type $_ (func))
 (memory $0 0)
 (table $0 1 funcref)
 (elem (i32.const 0) $null)
 (global $HEAP_BASE i32 (i32.const 8))
 (export "memory" (memory $0))
 (export "table" (table $0))
 (export "add" (func $assembly/index/add))
 (func $assembly/index/add (; 0 ;) (type $iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  i32.add
 )
 (func $null (; 1 ;) (type $_)
 )
)
