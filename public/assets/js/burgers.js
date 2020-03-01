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
        console.log('created new burger!');
        location.reload();
    });
});


    $('.updateburger').on('submit', function(event){
        const id = $(this).data('id');
        const devoured = $(this).data('devoured');
        
        const newDevouredBurger = {

            burger: devoured
        };

        $.ajax('/burgers/devoured' + id, {
            type: 'PUT',
            data: newDevouredBurger
        }).then(function(){
            console.log('Devoured the burger!', devoured);
            location.reload();
        });
    });
});