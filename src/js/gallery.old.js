jQuery(document).ready(function(){
      $('#Gallery').carousel({
            interval: 4000
        });

        // handles the carousel thumbnails
        $('[id^=carousel-selector-]').click( function(){
          var id_selector = $(this).attr("id");
          var id = id_selector.substr(id_selector.length -1);
          id = parseInt(id);
          $('#Gallery').carousel(id);
          $('[id^=carousel-selector-]').removeClass('selected');
          $(this).addClass('selected');
        });

        // when the carousel slides, auto update
        $('#Gallery').on('slid', function (e) {
          var id = $('.item.active').data('slide-number');
          id = parseInt(id);
          $('[id^=carousel-selector-]').removeClass('selected');
          $('[id^=carousel-selector-'+id+']').addClass('selected');
        });
        
        
        jQuery.ajax( '',{} );
});    
  /*
  
  Picture = Backbone.Model.extend({
     defaults: {
            name: 'Fetus',
            age: 0,
            child: ''
        },
        initialize: function(){
            alert("Welcome to this world");
        }
    });
    
    var pic = new Picture({ name: "Thomas", age: 67});*/