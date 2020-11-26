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
export default {
name: "Player",
components: {LikedList, Playlist, Musique},
  data() {
    return {
      counter:0,
      Playlist: [
        { id:0, audio: '/audio/surrogate_jiji.m4a', artist: 'Joe Hisaishi', tittle: 'Surrogate Jiji', album: 'Kiki Delivery\'s Service', cover: '/img/cover/kiki_delivery.jpg' },
        { id:1,audio: '/audio/ponyo.mp3', artist: 'Joe Hisaishi', tittle: 'Ponyo by The Cliff by The Sea', album: 'Ponyo', cover: '/img/cover/ponyo.jpg' },
        { id:2,audio: '/audio/girl_from_sky.mp3', artist: 'Joe Hisaishi', tittle: 'The Girl who fell from the Sky', album: 'Laputa: Castle in The Sky', cover: '/img/cover/castle_ski.jpg' },
        { id:3,audio: '/audio/promise_of_the_world.mp3', artist: 'Joe Hisaishi', tittle: 'Promise of the world', album: 'Howl\'s Moving Castle', cover: '/img/cover/howl_moving_castle.jpg' },
        { id:4,audio: '/audio/vapor_trails.mp3', artist: 'Joe Hisaishi', tittle: 'Vapor Trail', album: 'The Wind Rises', cover: '/img/cover/wind_rises.jpg'},
        { id:5,audio: '/audio/bygone_days.mp3', artist: 'Joe Hisaishi', tittle: 'Bygones Days', album: 'Porco Rosso', cover: '/img/cover/porco_rosso.jpg'},
        { id:6,audio: '/audio/ashitaka_san.mp3', artist: 'Joe Hisaishi', tittle: 'Ashitaka & San', album: 'Princess Mononoke', cover: '/img/cover/mononoke.jpg'},
        { id:7,audio: '/audio/you_did_it.mp3', artist: 'Leon Riskin', tittle: 'You Did It!', album: 'Ultimate Custom Night', cover: '/img/cover/ultimate_custom.jpg'},
        { id:8,audio: '/audio/sampo.mp3', artist: 'Joe Hisaishi', tittle: 'Sampo', album: 'My Neighbor Totoro', cover: '/img/cover/totoro.jpg'},
        { id:9,audio: '/audio/wild_side.mp3', artist: 'A L I', tittle: 'WILD SIDE', album: 'Beastars', cover:'/img/cover/beastars.jpg'}
      ],
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
    }
  }
}
</script>

<style scoped>

</style>