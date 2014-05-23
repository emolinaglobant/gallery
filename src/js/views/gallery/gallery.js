define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',

], function($, _, Backbone){
    
  
  var galleryView = Backbone.View.extend({
    el: $('#container'),
    render: function(){
    
    var GalleryImages = [];
    var GalleryThumbs = [];
    var GalleryIndicators = [];
    
    var template = _.template($("#GalleryItem").html());
    var template2 = _.template($("#ThumbItem").html());
    var template3 = _.template($("#IdicatorItem").html());
    
      this.collection.each(function(item) {
          var aux = item.toJSON();
          GalleryImages.push(template(aux));
          GalleryThumbs.push(template2(aux));
          GalleryIndicators.push(template3(aux));
          //carousel-inner
      });
      //this.el.;
      
      GalleryImages[0]=$(GalleryImages[0]).addClass('active')[0].outerHTML;
      GalleryIndicators[0]=$(GalleryIndicators[0]).addClass('active')[0].outerHTML;
      
      
      $('#Gallery .carousel-inner').append(GalleryImages);
      $('#Gallery .carousel-indicators').append(GalleryIndicators);
      $('#slider-thumbs .list-inline').append(GalleryThumbs);
      
      
      $('#Gallery').carousel({
            interval: 2000
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
        
        $('#Gallery').carousel().on('slide.bs.carousel', function (e) {
            $('#GalleryTitle').html($(e.relatedTarget).find('.carousel-caption').html());
          var id = $('.item.active').data('slide-number');
          id = parseInt(id);
          $('[id^=carousel-selector-]').removeClass('selected');
          $('[id^=carousel-selector-'+id+']').addClass('selected');
        });
        
      
      
      
    }
  });
  return galleryView;
});