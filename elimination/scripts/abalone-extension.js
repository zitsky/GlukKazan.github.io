(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "abalone-extension") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg");
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;
  _.each(board.moves, function(move) {
      if ((move.actions.length > 0) && (move.actions[0][0] !== null) && 
          (move.actions[0][1] !== null) && (board.getPiece(move.actions[0][1][0]) !== null)) {
          var pos = move.actions[0][0][0];
          var dir = design.findDirection(pos, move.actions[0][1][0]);
          if (dir !== null) {
              var c = 0;
              while (pos !== null) {
                  var piece = board.getPiece(pos);
                  if (piece === null) return;
                  if (piece.player != board.player) break;
                  pos = design.navigate(board.player, pos, dir);
                  c++;
                  if (c > 3) {
                      move.failed = true;
                      return;
                  }
              }
              if (pos === null) {
                  move.failed = true;
                  return;
              }
              while (pos !== null) {
                  var piece = board.getPiece(pos);
                  if (piece === null) break;
                  if (piece.player == board.player) {
                      move.failed = true;
                      return;
                  }
                  pos = design.navigate(board.player, pos, dir);
                  c--;
              }
              if (c <= 0) {
                  move.failed = true;
              }
          } else {
              move.failed = true;
          }
      }
  });
  var bc = design.getDirection("bc");
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed)) return;
      if (move.actions.length > 0) {
          var a = move.actions[move.actions.length - 1];
          if ((a[0] === null) || (a[1] === null)) return;
          if (board.getPiece(a[1][0]) === null) return;
          var pos = design.navigate(board.player, 0, bc);
          while (pos !== null) {
              var piece = board.getPiece(pos);
              if ((piece === null) || (piece.type == 2)) {
                  piece = Dagaz.Model.createPiece(1, board.player);
                  move.dropPiece(pos, piece);
                  return;
              }
              pos = design.navigate(board.player, pos, bc);
          }
      }
  });
  CheckInvariants(board);
}

})();
