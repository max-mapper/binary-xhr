var test = require('tape')
var bxhr = require('./')

test('basic GET', function(t) {
  bxhr('https://commondatastorage.googleapis.com/voxeltextures/brick.png', function(err, data) {
    t.false(err)
    t.true(data instanceof ArrayBuffer)
    t.true(data.byteLength > 0)
  })
})