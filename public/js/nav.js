
   $('.navbar .dropdown').hover(function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideToggle(400);
    }, function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideToggle(400)
    });
