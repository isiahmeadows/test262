// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The "length" property of the "toUTCString" is 0
esid: sec-date.prototype.toutcstring
es5id: 15.9.5.42_A2_T1
description: The "length" property of the "toUTCString" is 0
---*/

if(Date.prototype.toUTCString.hasOwnProperty("length") !== true){
  $ERROR('#1: The toUTCString has a "length" property');
}

if(Date.prototype.toUTCString.length !== 0){
  $ERROR('#2: The "length" property of the toUTCString is 0');
}
