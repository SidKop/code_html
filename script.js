$(document).ready(function(){
    $('Div').mouseenter(function() {
        $('Div').fadeTo('fast', 1, function() {

        });
    })
        $('div').mouseleave(function() {
            $('div').fadeTo('fast', 0.5, function() {
            });
        });
})
