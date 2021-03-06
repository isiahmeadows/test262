// This file was procedurally generated from the following sources:
// - src/class-fields/string-literal-names.case
// - src/class-fields/default/cls-expr-new-no-sc-line-method.template
/*---
description: String literal names (field definitions followed by a method in a new line without a semicolon)
features: [class-fields]
flags: [generated]
includes: [propertyHelper.js]
info: |
    ClassElement:
      ...
      FieldDefinition ;

    FieldDefinition:
      ClassElementName Initializer_opt

    ClassElementName:
      PropertyName

---*/


var C = class {
  'a'; "b"; 'c' = 39;
  "d" = 42
  m() { return 42; }
}

var c = new C();

assert.sameValue(c.m(), 42);
assert.sameValue(c.m, C.prototype.m);
assert.sameValue(Object.hasOwnProperty.call(c, "m"), false);

verifyProperty(C.prototype, "m", {
  enumerable: false,
  configurable: true,
  writable: true,
});

assert.sameValue(Object.hasOwnProperty.call(C.prototype, "a"), false);
assert.sameValue(Object.hasOwnProperty.call(C, "a"), false);

verifyProperty(c, "a", {
  value: 42,
  enumerable: true,
  writable: true,
  configurable: true
});
