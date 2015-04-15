//name
//type (double elim, single, etc)
//time
//place
//details
//idk
function Tournament(name){
    this.name = name;
    this.run = function(){alert("running "+this.name)}
}

var tourney = new Tourney('Smash 4');
tourney.run()