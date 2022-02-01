$(".anchor").on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href');
            $('body,html').animate({scrollTop: $(id).offset().top}, 700);
        });