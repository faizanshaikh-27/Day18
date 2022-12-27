var view = {
    title: "Joe",
    calc: function () {
      return 2 + 4;
    }
  };
  const Mustache = require("mustache");
  var output = Mustache.render("{{title}} spends {{calc}}", view);
  console.log(output);