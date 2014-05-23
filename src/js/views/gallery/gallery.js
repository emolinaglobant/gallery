// Filename: views/project/list
define([
  'jquery',
  'underscore',
  'backbone',
  'models/Gallery',
  'collections/Gallery',
], function($, _, Backbone,GalleryModel,GalleryCollection){
    
  
  var galleryView = Backbone.View.extend({
    el: $('#container'),
    render: function(){
     
      
      var data = {};
      var galleryCollection = new GalleryCollection;
      var compiledTemplate = _.template( $('#GalleryItem').html(), data );

    }
  });
  return galleryView;
});