(function () {
  
  function Photo(name) {

    return { 
            name: name,
            tags: [],
            tag: function(person) {
                 this.tags.push(person);
                 },
            showTags: function() {
                      var people = "";
                      for(var i=0; i<this.tags.length; i++) {
                      if(i === this.tags.length -1)
                        people += this.tags[i] + ".";
                      else
                        people += this.tags[i] + ", ";
                      }
                      return console.log(people);
                      }
          }

  }

  function PhotoAlbum() {

  return {
          photos: [],
          addPicture: function(photo) {
                      this.photos.push(photo);
                      },
          showPictures: function(person) {
                      var pictures = "";
                      for(var i=0; i<this.photos.length; i++) {
                      if(this.photos[i].tags.some(function(item) {return item === person;}))
                      if(i === this.photos.length -1)
                        pictures += this.photos[i].name + ".";
                      else
                        pictures += this.photos[i].name + ", ";
                      }
                      return console.log(pictures);
                      }

  }
}


  var album = PhotoAlbum();
  var p;

  p = Photo("Paris Trip 1");
  p.tag("Jimmy");
  p.tag("Jane");
  p.tag("Jeff");

  album.addPicture(p);

  p = Photo("Look the Eiffel");
  p.tag("Jimmy");
  p.tag("Max");
  album.addPicture(p);

  p = Photo("OMG it's so high");
  p.tag("Jimmy");
  p.tag("Jane");

  // prints "Jimmy, Jane"
  p.showTags();

  album.addPicture(p);

  // prints "Paris Trip 1, Look the Eiffel, OMG it's so high"
  album.showPictures("Jimmy");

  // prints "Paris Trip 1, OMG it's so high"
  album.showPictures("Jane");   
}());