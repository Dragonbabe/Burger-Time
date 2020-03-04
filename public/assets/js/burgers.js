'use strict';

$(function(){

$('.bb').on('click', function(event){
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


    $('.updateburger').on('click', function(event){
        event.preventDefault();
        const id = $(this).data('id');
        
        const newDevouredBurger = {

            burger: devoured
        };

        $.ajax('api/burgers' + id, {
            type: 'PUT',
            data: newDevouredBurger
        }).then(function(){
            console.log("burger devoured!");
           
            location.reload();
        });
    });
});