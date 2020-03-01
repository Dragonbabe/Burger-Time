'use strict';

$(function(){

$('.createburger').on('submit', function(event){
    event.preventDefault();

    const newBurger = {
        name: $('#burger')
        .val()
        .trim()
    };
    
    $.ajax('/burgers/new', {
        type: 'POST',
        data: newBurger
    }).then(function(){
        
        location.reload();
    });
});


    $('.updateburger').on('submit', function(event){
        event.preventDefault();
        const id = $(this).data('id');
        const devoured = $(this).data('devoured');
        
        const newDevouredBurger = {

            burger: devoured
        };

        $.ajax('/burgers/devoured' + id, {
            type: 'PUT',
            data: newDevouredBurger
        }).then(function(){
           
            location.reload();
        });
    });
});