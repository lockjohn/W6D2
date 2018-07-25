class View {
  constructor(HanoiGame, $el) {
    this.game = HanoiGame;
    this.el = $el;
    setupTowers(this.el);
  }
  
  setupTowers ($el) {
    for (let i = 0; i < 3; i++) {
      let $pile = $('<ul></ul>');
      $pile.data("id", i);
      $el.append($pile);
      if (i === 0) {
        for (let j = 0; j < 3; j++){
          let $disk = $('<li></li>');   
          $disk.data("id", j + 1);
          $pile.append($disk); 
        }
      }
    }
  }
  render() {
  }
}

module.exports = View;