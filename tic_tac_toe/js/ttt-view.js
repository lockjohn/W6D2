class View {
  constructor(game, $el) {
    this.setupBoard($el);
    this.game = game;
    this.el = $el;
  }

  bindEvents() {
    const $squares = $('li');
    $squares.on('click', event => {
      event.preventDefault();
      const currentTarget = event.currentTarget;
      const $currentTarget = $(currentTarget);
      this.makeMove($currentTarget, $squares);
    });
  }

  makeMove($currentTarget, $squares) {
    this.game.playMove($currentTarget.data("pos"));
    $currentTarget.addClass('white');
    const mark = this.game.currentPlayer;
    $currentTarget.text(mark);
    
    if (this.game.isOver()) {
      let winner = this.game.winner();
      const $h2 = $("<h2></h2>");
      
      if (winner) {
        $h2.text(`${mark}, you won!`);
        this.el.append($h2);
        $squares.each( (index,square) => {
          console.log(square);
          const $square = $(square);
            
          if (mark === $square.text()) {
            $square.attr("style", "background-color: green");  
          } else {
            $square.attr("style", "background-color: red");
          }
        });
      } else {
        this.el.append($h2);
        $h2.text('NO ONE WINS!');
      }
    }
  }

  setupBoard($el) {
    const $boardEl = $('<ul></ul>');
    // const $square = $('<li></li>');
    $el.append($boardEl);
    for (let i = 0; i < 9; i++){
      let pos = [Math.floor(i/3), i % 3];
      let $square = $('<li></li>');
      $square.data("pos", pos);
      $boardEl.append($square);
    }
  }
}

module.exports = View;
