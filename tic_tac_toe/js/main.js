const View = require('./ttt-view.js');
const Game = require('../node_ttt/game.js');

$( () => {
  const game = new Game(); 
  const $el = $("figure.ttt");
  const view = new View(game, $el);
  view.bindEvents();
});
