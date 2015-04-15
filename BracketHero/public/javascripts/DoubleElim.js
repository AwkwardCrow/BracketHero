//object of players
//bracket object?
//position of players?
//could always set it up to have players play people who's numbers are next to them for the first round
//how do you track who plays who? winner of 1 and 2 plays winner of 3 and 4. Loser of 1 and 2 plays loser of 3 and 4.
//ill dig into this later

//treat the winners/losers as trees.
//a winners tree (everyone starts in this one)
//and a losers tree (this will have "grey code" or placeholders in place)
//randomize (with seeding and region)
//generate X matches, where X is the number of players + "math"


//create 2 trees, winners and losers. build winners with just the results from the winners of each round
//build losers with the losers from each round in winners for R1, and from there we'll have 1 winner from previous losers match and 1 loser from winners match round




function DoubleElim(players){
    this.players = players;
}

function CreateMatches(players){
    var match = new Match(players, 0);
}