    // //Animate left hamburger icon and open sidebar
    // $('.menu-icon-trigger').click(function (e) {
    //     e.preventDefault();
    //     $('.menu-icon-wrapper').toggleClass('open');
    //     $('.sidebar').toggleClass('is-active');
    // });

    // //Close sidebar
    // $('.sidebar-close').click(function () {
    //     $('.sidebar').removeClass('is-active');
    //     $('.menu-icon-wrapper').removeClass('open');
    // })

    // //Sidebar menu
    // if ($('.sidebar').length) {
    //     $(".sidebar-menu > li.have-children a").on("click", function (i) {
    //         i.preventDefault();
    //         if (!$(this).parent().hasClass("active")) {
    //             $(".sidebar-menu li ul").slideUp();
    //             $(this).next().slideToggle();
    //             $(".sidebar-menu li").removeClass("active");
    //             $(this).parent().addClass("active");
    //         }
    //         else {
    //             $(this).next().slideToggle();
    //             $(".sidebar-menu li").removeClass("active");
    //         }
    //     });
    // }

        // //modals
    // $('.modal-trigger').on('click', function(){
    //     var modalID = $(this).attr('data-modal');
    //     $('#' + modalID).addClass('is-active');
    // })
    // $('.modal-close, .close-modal').on('click', function(){
    //     $(this).closest('.modal').removeClass('is-active');
    // })