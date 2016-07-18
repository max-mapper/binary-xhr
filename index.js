module.exports = function(url, cb) {
  return new BinaryXHR(url, cb)
}

function BinaryXHR(url, cb) {
  var self = this
  var xhr = new XMLHttpRequest()
  this.xhr = xhr
  xhr.open("GET", url, true)
  xhr.responseType = 'arraybuffer'
  xhr.onreadystatechange = function () {
    if (self.xhr.readyState === 4) {
      if (self.xhr.status !== 200) {
        cb(self.xhr.status, self.xhr.response);
      } else if (self.xhr.response && self.xhr.response.byteLength > 0) {
        cb(false, self.xhr.response)
      } else {
        if (self.xhr.response && self.xhr.response.byteLength === 0) return cb('response length 0')
        cb('no response')
      }
    }
  }
  xhr.send(null)
}

