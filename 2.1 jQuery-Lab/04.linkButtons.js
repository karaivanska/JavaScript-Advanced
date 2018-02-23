function attachEvents() {
    $('.button').click(removeClass);

    function removeClass() {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}