alt
.directive('searchResult', function() {
  return {
    restrict: 'AEC',
    templateUrl: '/app/search/search-result.html'
  }
})
.directive('clickActive', function() {
  return function(scope, element, attrs) {
    if (scope.$last){
      $('.click-active').click(function() {        
        $(this).closest('form').find('.click-active').removeClass('active');
        $(this).addClass('active');
      });
    }
  };
})
.directive('hoverShow', function() {
  return function(scope, element, attrs) {
    if (scope.$last){
      $('.tag-trigger').hoverIntent(function() {
          $(this).parents('.tag').find('.tag-info').css({opacity: 0, visibility: 'visible'}).animate({opacity: 1}, 200, 'easeOutBounce');
        }, function() {
      });
      
      $('.tag').hoverIntent(function() {
        }, function() {
          $(this).find('.tag-info').css({opacity: 1, visibility: 'visible'}).animate({opacity: 0}, 200, 'easeOutBounce');
      });
    }
  };
})
.directive('zoom', function() {
  return function(scope, element, attrs) {
    if (scope.$last){
      $("#onzoom").elevateZoom(
        {gallery:'gallery', cursor: 'crosshair', galleryActiveClass: 'active'}
      );
    }
  };
})
.directive('fancybox', function() {
  return {
      // Restrict it to be an attribute in this case
      restrict: 'A',
      // responsible for registering DOM listeners as well as updating the DOM
      link: function(scope, element, attrs) {
        $(element).fancybox(
          
        );
        if (scope.$last){
           $(".fancybox").fancybox({
              helpers : {
                title : {
                  type : 'outside'
                }
              },
          });
        }
      }
  };
})
.directive('follow', function() {
  return function(scope, element, attrs) {
    $(".follow").click( function(event){
    event.preventDefault();
    if ($('#follow').hasClass('popup')) {
    $('#follow').stop().fadeOut(200);
    $('#follow').removeClass("popup");}
    else {
    $('#follow').stop().fadeIn(200);
    $('#follow').addClass("popup");
    return false;}
    });
    $(".close").click(function(){
    $('#follow').stop().fadeOut(200);
    $('#follow').removeClass("popup");
    })
  };  
})
.filter('cut', function () {
    return function (value, wordwise, max, tail) {
        if (!value) return '';

        max = parseInt(max, 10);
        if (!max) return value;
        if (value.length <= max) return value;

        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace != -1) {
                value = value.substr(0, lastspace);
            }
        }

        return value + (tail || ' …');
    };
})
.directive('filterHandle', function() {
  return function(scope, element, attrs) {
    var filters = $("#filters");
    filters.find('#filterHandle')
    .hoverIntent(
      function(){
        filters.animate({bottom:'+=5px'},200);
      },
      function() {
        filters.animate({bottom:'-=5px'},200);
      }
    )
    .click(
      function(event){
        if (filters.hasClass("isDown") ) {
          filters.stop().animate({bottom:'-=173px'}, 300, 'easeOutExpo').removeClass("isDown");
        } else {
          filters.stop().animate({bottom:'+=173px'}, 300, 'easeOutExpo').addClass("isDown");
        }
        return false;
      }
    );
  };
});
