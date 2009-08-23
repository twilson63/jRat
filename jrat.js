(function(){

  var
    window = this,
    undefined,
    _jRat = window.jRat,
    jRat = window.jRat = function() {
      return jRat.fn.init();
    }
    
  jRat.fn = jRat.prototype = {
    Contains: function(args) {
      if(typeof(args[0]) != "string") {
        throw "Requires String as value";
      }
      var rx = new RegExp(RegExp.escape(args[0]));
      if($("body").html().match(rx) == null) {
        return false;
      } else {
        return true;
      }
    },
    Click: function(args) {
      var selector = 'a:contains("?")';
      var link = $(selector.replace(/\?/, args[0]));
      if(link.length == 0 ) {
        return false;
      } else {
        link.click();
        return true;
      }
    },
    SetText: function(args) {
      var label = this.get_label(args[0]);
      var selector = '#?';
      if(label.length > 0) {
        
        var text = $(selector.replace(/\?/, label.attr('for')));
        if(text.length > 0) {
          text.val(args[1]);
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    PressButton: function(args) {
      var selector = 'input:[value="?"]';
      var submit = $(selector.replace(/\?/, args[0]));
      if(submit.length > 0) {
        submit.click();
        return true;
      } else {
        return false;
      }
    },
    Select: function(args) {
      var label = this.get_label(args[1]);
      var selector = 'select:[id=?] option:contains("2")';
      if(label.length > 0) {
        var option = $(selector.replace(/\?/,label.attr('for')).replace(/2/, args[0]));
        if(option.length > 0) {
          option[0].selected = true;
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    Check: function(args) {
      var label = this.get_label(args[0]);
      var selector = 'input';
      if(label.length > 0) {
       var checkbox = $('input:[id=' + label.attr('for') + ']') || label.children(selector);
       if(checkbox.length > 0) {
         checkbox.attr('checked', true);
         return true;
       } else {
         return false;
       }
      } else {
        return false;
      }
    },
    UnCheck: function(args) {
      var label = this.get_label(arg[0]);
      var selector = 'input';
      if(label.length > 0) {
       checkbox = $('input:[id=' + label.attr('for') + ']') || label.children(selector);
       if(checkbox.length > 0) {
         checkbox.attr('checked', false);
         return true;
       } else {
         return false;
       }
      } else {
        return false;
      }
    },
    Choose: function(args) {
      var label = this.get_label(args[0]);
      var selector = 'input';
      if(label.length > 0) {
       radio = $('input:[id=' + label.attr('for') + ']') || label.children(selector);
       if(radio.length > 0) {
         radio.attr('checked', true);
         return true;
       } else {
         return false;
       }
      } else {
        return false;
      }
    },
    get_label: function(name) {
      var selector = 'label:visible:contains("?")';
      return $(selector.replace(/\?/,name));
    }
    
  }

})();

RegExp.prototype.escape = function(text) {
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
