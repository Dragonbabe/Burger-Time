'use strict';

$(function(){

$('.createburger').on('submit', function(event){
    event.preventDefault();

    const newBurger = {
        burger_name: $('#burger')
        .val()
        .trim(),
        devoured: 0
    };
    
    $.ajax('/burgers/new', {
        type: 'POST',
        data: newBurger
    }).then(function(){
        console.log("Added new burger!");
        
        location.reload();
    });
});


    $('.updateburger').on('submit', function(event){
        event.preventDefault();
        const id = $(this).data('id');
        
        const newDevouredBurger = {

            burger: devoured
        };

        $.ajax('/burgers/devoured' + id, {
            type: 'PUT',
            data: newDevouredBurger
        }).then(function(){
            console.log("burger devoured!");
           
            location.reload();
        });
    });
});