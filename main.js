$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
        
        $(`<li>${novaTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');

        $('li').click(function () {
            $(this).addClass('marcado');
        });
        $('#nova-tarefa').val('');   
    })    
})