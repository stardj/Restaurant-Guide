$(function() {
    $('.item_line').hover( function(){
            $(this).css('box-shadow', '0px 0px 15px -5px black');
        },
        function(){
            $(this).css('box-shadow', '');
        });
});