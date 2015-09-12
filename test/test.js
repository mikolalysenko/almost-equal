var almostEqual = require("../almost_equal.js")

require("tap").test("almost-equal", function(t) {

  var a = 100
    , b = 100 + 1e-12

  //Check if a == b up to float precision
  t.assert(almostEqual(a, b, almostEqual.FLT_EPSILON, almostEqual.FLT_EPSILON))
  t.assert(almostEqual.curry(almostEqual.FLT_EPSILON, almostEqual.FLT_EPSILON)(a, b))

  //Check if a == b up to double precision
  t.assert(!almostEqual(a, b, almostEqual.DBL_EPSILON, almostEqual.DBL_EPSILON))
  t.assert(!almostEqual.curry(almostEqual.DBL_EPSILON, almostEqual.DBL_EPSILON)(a, b))

  t.end()
})