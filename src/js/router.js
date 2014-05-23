// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/gallery/gallery'
], function($, _, Backbone,GalleryView){
  
   var AppRouter = Backbone.Router.extend({
    routes: {
     
      
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
   
    app_router.on('route:defaultAction', function (actions) {
     
       // We have no matching route, lets display the home page 
       
        var galleryView = new GalleryView();
        galleryView.render();
    });

    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
    var galleryView = new GalleryView();

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});