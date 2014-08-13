module.exports = function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      hello_renderer = require("./hello-renderer"),
      _tag = __helpers.t;

  return function render(data, context) {
    _tag(context,
      hello_renderer,
      {
        "name": "World"
      });
  };
}