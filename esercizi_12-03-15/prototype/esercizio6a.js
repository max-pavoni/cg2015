(function() {
// Write your code here  

  function MusicBox() {

  return {
          albums: [], 
          addAlbum: function() { 
                    for (arg in arguments) {
                      this.albums.push(arguments[arg]);
                    }
                    }, 
          favoriteAlbum: function() { 
                          if (this.albums.length === 0)
                            return console.log("The MusicBox is empty!");
                          else {
                          favorite = this.albums[0];
                          for(album in this.albums) {
                              if (album.played > favorite.played)
                                  favorite = album;
                          }
                          return favorite.singer + " - " + favorite.song;
                          }
                          }
  
          }
  }

  function Album(singer, song) {
    return {
            singer: singer,
            song: song, 
            played: 0,
            play: function() { 
                  this.played += 1;
                  return console.log("Playing " + singer + " - " + song);
                }
            }
  }

  var box = MusicBox();
  var a1 = Album("The Who", "Tommy");
  var a2 = Album("Tom Waits", "Closing Time");
  var a3 = Album("John Cale", "Paris 1919");
  var favorite;

  box.addAlbum(a1, a2,a3);

  a1.play() ; // prints "Playing The Who - Tommy"
  a2.play(); // prints "Playing Tom Waits - Closing Time"  
  a1.play(); // prints "Playing The Who - Tommy"

  favorite = box.favoriteAlbum(); 

  // prints "favorite album is The Who - Tommy"
  console.log("favorite album is " + favorite); 
}());