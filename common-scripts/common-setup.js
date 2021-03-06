(function() {

var getSetup = function() {
  var str = window.location.search.toString();
  var result = str.match(/\?setup=([^&]*)/);
  if (result) {
      return result[1];
  } else {
      return "";
  }
}

var getNum = function(c) {
  if ((c >= "0".charCodeAt(0)) && (c <= "9".charCodeAt(0))) {
      return c - "0".charCodeAt(0);
  }
  if ((c >= "A".charCodeAt(0)) && (c <= "Z".charCodeAt(0))) {
      return c - "A".charCodeAt(0) + 10;
  }
  return null;
}

Dagaz.Model.setup = function(board) {
  var design = Dagaz.Model.design;
  var setup  = getSetup();
  var player = 1;
  if (setup) {
      setup = setup + ";";
      board.clear();
      var type = null;
      var pos  = null;
      for (var i = 0; i < setup.length; i++) {
           var c = setup.charCodeAt(i);
           if (c == "-".charCodeAt(0)) {
               player++;
               continue;
           }
           if (c == ";".charCodeAt(0)) {
               if ((type === null) || (pos === null)) break;
               var piece = Dagaz.Model.createPiece(type, player);
               board.setPiece(pos, piece);
               type = null;
               pos  = null;
           }
           var n = getNum(c);
           if (type === null) {
               type = n;
               continue;
           }
           if (pos === null) {
               pos = n;
           } else {
               pos *= 36;
               pos += n;
           }
      }
  }
}

var toChar = function(n) {
  if (n < 10) {
      return String.fromCharCode("0".charCodeAt(0) + n);
  } else {
      return String.fromCharCode("A".charCodeAt(0) + n - 10);
  }
}

var toStr = function(n) {
  var r = "";
  if (n == 0) return "0";
  while (n > 0) {
      r = toChar(n % 36) + r;
      n = (n / 36) | 0;
  }
  return r;
}

Dagaz.Model.getSetup = function(design, board) {
  var str = "";
  for (var player = 1; player < design.playerNames.length; player++) {
      if (str != "") str = str + "-";
      _.each(design.allPositions(), function(pos) {
            var piece = board.getPiece(pos);
            if ((piece !== null) && (piece.player == player)) {
                str = str + toChar(piece.type);
                str = str + toStr(pos);
                str = str + ";";
            }
      });
  }
  return "?setup=" + str;
}

})();
