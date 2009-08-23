// Common Pickle Step Definitions

Pickle().Step( {
  instruction: /^I should see "([^\"]*)"$/,
  test: function (arg) {
    return Pickle().Contains(arg);
  }
});


Pickle().Step( {
  instruction: /^I follow "([^\"]*)"$/,
  test: function (arg) {
    return Pickle().Click(arg);
  }
});

Pickle().Step(  {
  instruction: /^I fill in "([^\"]*)" with "([^\"]*)"$/,
  test: function (arg, arg2) {
    return Pickle().SetText(arg, arg2)
    
  }
  
});

Pickle().Step( {
  instruction: /^I press "([^\"]*)"$/,
  test: function (arg) {
    return Pickle().PressButton(arg);
  }
});

Pickle().Step(  {
  instruction: /^I select "([^\"]*)" from "([^\"]*)"$/,
  test: function (arg, arg2) {
    return Pickle().Select(arg, arg2);
  }
});

Pickle().Step(  {
  instruction: /^I check "([^\"]*)"$/,
  test: function (arg) {
    return Pickle().Check(arg);
  }
});

Pickle().Step(  {
  instruction: /^I choose "([^\"]*)"$/,
  test: function (arg) {
    return Pickle().Choose(arg);
  }
});


RegExp.escape = function(text) {
  if (!arguments.callee.sRE) {
    var specials = [
      '/', '.', '*', '+', '?', '|',
      '(', ')', '[', ']', '{', '}', '\\'
    ];
    arguments.callee.sRE = new RegExp(
      '(\\' + specials.join('|\\') + ')', 'g'
    );
  }
  return text.replace(arguments.callee.sRE, '\\$1');
}



