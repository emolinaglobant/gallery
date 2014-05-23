// Filename: views/project/list
define([
  'jquery',
  'underscore',
  'backbone',

], function($, _, Backbone){
    
  
  var galleryView = Backbone.View.extend({
    el: $('#container'),
    render: function(){

      this.collection.forEach(function(item) {
          console.log(item);
        
        });

    }
  });
  return galleryView;
});