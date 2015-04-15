//randomize array of objects
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

//randomize with seed
//this needs to be looked at when dealing with alot of low seeded players

function shuffleArraySeeded(array) {
    //first sort by seed (large to small)
    array.sort(function (a, b) { return a.seed - b.seed; });
    var seeds = new Array();
    //while seeds !=0, get values store into an array
    for (var i = array.length - 1; i > 0; i--) {
        if (array[i].seed != null || array[i].seed != 0) {
            seeds.push(seed);
        }
    }
    //randomize
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    //loop seeds, highest to lowest
    for (var i = seeds.length - 1; i > 0; i--) {
        //loop through the bracket finding the seed
        for (var j = array.length - 1; j > 0; j--) {
            //if seed found, swap with non-seeded player
            if (array[j].seed == seeds[i]) {
                var k = Math.floor(Math.random() * (j + 1));
                while (array[k].seed > 1) {
                    k = Math.floor(Math.random() * (j + 1));
                }
                var temp = array[j];
                array[j] = array[k];
                array[k] = temp;
            } 
        }
    }
    return array;
}

//randomize with seed and region
