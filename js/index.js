(function($){

    // $('.tabTit a').on('click', function(e){
    //     e.preventDefault()
    //     var index = $(this).parent().index()
    //     $(this).parent().addClass('on')
    //     .siblings().removeClass('on')
    //     $('.tabCont > div').eq(index).fadeIn(100)
    //     .siblings().fadeOut(100)
    // })

    $('.tabTit li').each(function(i){
        $(this).find('a').on('click', function(e){
            e.preventDefault()
            $(this).parent().addClass('on')
            .siblings().removeClass('on')
            $('.tabCont > div').eq(i).fadeIn(100)
            .siblings().fadeOut(100)
        })
    })



})(jQuery)