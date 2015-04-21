
/*
 * GET Single Elim Bracket Page.
 */

$('#test').click(function () {
    var entrants = $('#entrants').val();
    console.log(entrants);
    return false;
});

exports.index = function (req, res) {
    res.render('single', { title: 'Single Elim Bracket' });
};

