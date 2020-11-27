<template>
  <div>
    <div>
      <Musique :artist="Playlist[counter].artist" :currentSong="currentSong" :album="Playlist[counter].album" :totalTracks="totalTracks" :imgThumbnail='Playlist[counter].cover' :addCounter="nextSong" :prevSong="prevSong" :counter="counter" :trackId='Playlist[counter].id' :title="Playlist[counter].tittle" :url="Playlist[counter].audio"></Musique>
      <v-btn fab dark small class=" mr-4" color="indigo accent-4" @click="prevSong">
        <v-icon dark right class="mx-0">mdi-skip-previous</v-icon>
      </v-btn>
      <v-btn fab dark small class="mr-4" color="yellow darken-3" @click="like">
        <v-icon dark right class="mx-0">mdi-heart</v-icon>
      </v-btn>
      <v-btn fab dark small color="indigo accent-4" @click="nextSong">
        <v-icon dark right class="mx-0">mdi-skip-next</v-icon>
      </v-btn>
      <liked-list :liked="Liked" :counter="counter"></liked-list>
      <Playlist class="mt-5" :counter="counter" :Playlist="Playlist"></Playlist>
    </div>
  </div>
</template>

<script>
import Musique from "./Musique";
import Playlist from "./Playlist";
import LikedList from "./LikedList";
import songs from '../songs.json'
export default {
name: "Player",
components: {LikedList, Playlist, Musique},
  data() {
    return {
      counter:0,
      Playlist: songs,
      Liked : [
      ]
    }
  },
  computed: {
    totalTracks(){
      return this.Playlist.length;
    },
  },
  methods: {
    nextSong(){
      if (this.counter>=9) {
        window.alert('Vous êtes déjà à la fin de la playlist !')
      } else {
        this.counter++;
        console.log('Musique n°'+this.counter+' a été sélectionné.')
      }
    },
    prevSong(){
      if (this.counter===0) {
        window.alert('Vous êtes déjà au début de la playlist !')
        console.log(this.counter)
      } else {
        this.counter--;
        console.log('Musique n°'+this.counter+' a été sélectionné.')
      }
    },
    currentSong(){
      console.log()
    },

    like(){
      const likedSong= {id:this.Playlist[this.counter].id, tittle:this.Playlist[this.counter].tittle, cover:this.Playlist[this.counter].cover, artist:this.Playlist[this.counter].artist};
      this.Liked.push(likedSong);
      console.log('La liste contient : '+this.Liked+' - '+likedSong[this.tittle]+' a été ajouté.');
      console.log(this.Liked);
      this.$setItem('my array', [1, 2, 'three']).then(function(value) {
        // This will output `1`.
        console.log(value[0]);
      }).catch(function(err) {
        // This code runs if there were any errors
        console.log(err);
      });
    }
  }
}
</script>

<style scoped>

</style>