//object of players
//bracket object (i guess?)
//position of players?
//treat the bracket as a tree
//randomize (with seeding and region)
//generate X matches, where X is the number of players + "math" = number of matches
//start with root, generate match with "gray players": winnerMatch2, winnerMatch3 to represent winners from the previous matches
//loop through and add "matches" to the tree until we get to end of the tree, then fill in the players with actual players top to bottom
//double elim is basically 2 single elim brackets where the winner of the losers bracket plays the winner of the winners bracket right?

var create = function (parent){
    var tmp = function () { };
    tmp.prototype = parent;
    var child = new temp();
    return child;
}




