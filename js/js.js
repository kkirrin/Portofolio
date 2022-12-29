$(function() {
/*   Фильтр  */
    let filter = $("[data-filter]");

    filter.on("click", function(event) {
        event.preventDefault();
       
        let cat= $(this).data('filter')

        console.log(cat)


        $("[data-cat]").each(function() {
            
            let workCat = $(this).data('cat');

            console.log(workCat)

            if ( cat == 'all') {
                $("[data-cat]").removeClass("hide")
            }
            else {
                if (workCat != cat) {
                    $(this).addClass('hide')
                }
    
                else {
                    $(this).removeClass('hide')
                }
            }
        });


    });



    /*Модальные окна */

    const modalcall = $('[data-modal]');
    const modalClose = $('[data-close]');


    modalcall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this)
        let modalId = $this.data("modal")


        $(modalId).addClass('show')
        $("body").addClass('no-scroll')

        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
                transform: "rotateX(0deg)"
            });
        }, 200);

        //$('#worksSlider').slick('setPosition');

    });


    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this)
        let modalParent= $this.parents(".modal")

        modalParent.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        })

        setTimeout(function() {
            modalParent.removeClass('show')
            $("body").removeClass('no-scroll')
        }, 200) 

    });

    
    $('.modal').on("click", function(event) {
        event.preventDefault();

        $(this).removeClass('show')
        $("body").removeClass('no-scroll')

    });



    


    $('.modal__dialog').on("click", function(event) {
        event.stopPropagation()

    });


    
    //* Slider  https://kenwheeler.github.io/slick/ */ 


    $('#worksSlider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        arrows: false,
        dots: true,

      });



});







