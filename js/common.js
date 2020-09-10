(function($){

    
    $('.depth1 > li').hover(
        function(){
            $(this).find('.depth2')
            .stop().slideDown(700)
        },
        function(){
            $(this).find('.depth2')
            .stop().slideUp(500)
        }
    )


    $('#kimBox').load('main.html')

    $('.topmenu > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#kimContainer').remove()
        $('#kimBox').load(url)
    })

    $('h1 a').on('click',function(e){
        e.preventDefault();
        var url = (this).attr('href');
        $('#kimContainer').remove() //현재 로드된 아이 지우고
        $('#kimBox').load(url); //새로 로드하기
    })


})(jQuery)