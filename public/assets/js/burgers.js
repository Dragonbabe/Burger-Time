'use strict';

$(function(){

$('#createburger').on('submit', function(event){
    event.preventDefault();

    const newBurger = {
        burger_name: $('#burger')
        .val()
        .trim()
    };
    
    $.ajax('api/burgers', {
        type: 'POST',
        data: newBurger
    }).then(function(){
        console.log("Added new burger!");
        
        location.reload();
    });
});


    $(document).on('click', '.updateburger', function(event){
        event.preventDefault();
        const id = $(this).data('id');
        
        // const newDevouredBurger = {

        //     burger: devoured
        // };

        $.ajax('api/burgers' + id, {
            type: 'PUT',
            // data: newDevouredBurger
        }).then(function(){
            console.log("burger devoured!");
           
            location.reload();
        });
    });
});