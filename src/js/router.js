// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/gallery/gallery',
  'collections/Gallery',
  'models/Gallery'
], function($, _, Backbone,GalleryView,GalleryCollection,GalleryModel){
  
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
       
        var galleryCollection = new GalleryCollection();
        var galleryView = new GalleryView({ collection: galleryCollection });
        
         galleryCollection.on("add",function(item){
             
             if(galleryCollection.count===galleryCollection.current)
               galleryView.render();  
             
              galleryCollection.current++;
         
         });
        //
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