var expr = [];

function isNum(value) {
  if (value.match(/\d/)) {
    return true;
  }
  return false;
}

function evaluate() {
  var ans = 0;
  if (expr.length > 1) {
    console.log(expr.join(""));
    return eval(expr.join("")).toFixed(2);
  }
  return ans;
}

$(document).ready(function() {
  $("#display").text("0");

  $("#AC").click(function() {
    $("#display").text(0);
    expr = [];
  });

  $("#CE").click(function() {
    if (expr.length > 0) {
      expr.pop();
    }
    if (expr.length > 0 && expr.join("").match(/(\d+\.\d+)|(\d+)/g)) {
      $("#display").text(expr.join("").match(/(\d+\.\d+)|(\d+)/g)[expr.join("").match(/(\d+\.\d+)|(\d+)/g).length - 1]);
    } else {
      $("#display").text("0");
    }
  });

  $("#modulus").click(function() {
    expr.push("%");
  });

  $("#divide").click(function() {
    expr.push("/");
  });

  $("#multiply").click(function() {
    expr.push("*");
  });

  $("#minus").click(function() {
    expr.push("-");
  });

  $("#plus").click(function() {
    expr.push("+");
  });

  $("#dot").click(function() {
    expr.push(".");
  });

  for (var i = 0; i <= 9; i++) {
    //scope it properly
    (function(i) {
      $("#" + i).click(function() {
        expr.push(i.toString());
        var display = i;
        if (expr.length > 0 && expr.join("").match(/(\d+\.\d+)|(\d+)/g)) {
          display = expr.join("").match(/(\d+\.\d+)|(\d+)/g)[expr.join("").match(/(\d+\.\d+)|(\d+)/g).length - 1];
        }
        $("#display").text(display);
      });
    })(i);
  }

  $("#equals").click(function() {
    if (expr[expr.length - 1].match(/\d/)) {
      $("#display").text(evaluate());
      expr = [];
    } else {
      $("#display").text("0");
    }
  });

});
