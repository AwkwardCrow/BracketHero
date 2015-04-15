//name
//email
//phone
//wins
//losses
//seed
//position?

//constructors
function Player(fname, lname, city, email, phone, seed){
    this.fname = fname;
    this.lname = lname;
    this.city = city;
    this.email = email;
    this.phone = phone;
    this.seed = seed;
}
function Player(fname, lname, city, email, phone, seed, wins, losses) {
    this.fname = fname;
    this.lname = lname;
    this.city = city;
    this.email = email;
    this.phone = phone;
    this.seed = seed;
    this.wins = wins;
    this.losses = losses;
}
