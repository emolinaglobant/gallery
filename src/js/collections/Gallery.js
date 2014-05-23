define([
  'jquery',
  'underscore',
  'backbone',
  'models/Gallery'
  ], function($, _, Backbone, GelleryModel){

  var GalleryCollection = Backbone.Collection.extend({
    model: GelleryModel,
    url :'http://music.medellinstyle.com/?r=site/gallery',
    initialize : function(){
        this.fetch({
            dataType: 'jsonp',
            success : function (data) {
              console.log(data);
            }
          });
       }
   

  });
 
  return GalleryCollection;
});
