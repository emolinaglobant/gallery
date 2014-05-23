define([
  'jquery',
  'underscore',
  'backbone',
  'models/Gallery'
  ], function($, _, Backbone, GelleryModel){

  var GalleryCollection = Backbone.Collection.extend({
    model: GelleryModel,
    url :'http://music.medellinstyle.com/?r=site/gallery',
    count : 0,
    current : 1,
    initialize : function(){
        
        this.fetch({
            dataType: 'jsonp',
            success : function (data) {
              
            },error : function(err){console.log(err);}
          });
       },
       parse : function(data){
           this.name = data.album.name;
           this.count = data.photos.length;
           
           for(var item in data.photos){
               data.photos[item].position=item;
               var object = new GelleryModel(data.photos[item], {parse: true});   
               this.add(object);  
           }
           
       }
   

  });
 
  return GalleryCollection;
});
