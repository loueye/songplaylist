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
        { id:0, audio: '/audio/surrogate_jiji.m4a', artist: 'Joe Hisaishi', tittle: 'Surrogate Jiji', album: 'Kiki Delivery\'s Service', cover: 'https://i1.sndcdn.com/artworks-000251709487-jtpnni-t500x500.jpg' },
        { id:1,audio: '/audio/ponyo.mp3', artist: 'Joe Hisaishi', tittle: 'Ponyo by The Cliff by The Sea', album: 'Ponyo', cover: 'https://vgmdownloads.com/soundtracks/ponyo-ost/07.jpg' },
        { id:2,audio: '/audio/girl_from_sky.mp3', artist: 'Joe Hisaishi', tittle: 'The Girl who fell from the Sky', album: 'Laputa: Castle in The Sky', cover: 'https://m.media-amazon.com/images/I/81T-0VmGhlL._SS500_.jpg' },
        { id:3,audio: '/audio/promise_of_the_world.mp3', artist: 'Joe Hisaishi', tittle: 'Promise of the world', album: 'Howl\'s Moving Castle', cover: 'https://vgmdownloads.com/soundtracks/howls-moving-castle-original-soundtrack/2236-uuzkwcxhul.jpg' },
        { id:4,audio: '/audio/vapor_trails.mp3', artist: 'Joe Hisaishi', tittle: 'Vapor Trail', album: 'The Wind Rises', cover: 'https://i1.sndcdn.com/artworks-000083370239-e0wchp-t500x500.jpg'},
        { id:5,audio: '/audio/bygone_days.mp3', artist: 'Joe Hisaishi', tittle: 'Bygones Days', album: 'Porco Rosso', cover: 'https://images-na.ssl-images-amazon.com/images/I/91987HOVojL._SL1500_.jpg'},
        { id:6,audio: '/audio/ashitaka_san.mp3', artist: 'Joe Hisaishi', tittle: 'Ashitaka & San', album: 'Princess Mononoke', cover: 'https://thefilmstage.com/wp-content/uploads/2020/04/princess-mononoke-symphonic-suite-vinyl-.jpg'},
        { id:7,audio: '/audio/you_did_it.mp3', artist: 'Leon Riskin', tittle: 'You Did It!', album: 'Ultimate Custom Night', cover: 'https://i1.sndcdn.com/artworks-000368941563-fw2gob-t500x500.jpg'},
        { id:8,audio: '/audio/sampo.mp3', artist: 'Joe Hisaishi', tittle: 'Sampo', album: 'My Neighbor Totoro', cover: 'https://img.discogs.com/9n2VyFB_foZFDOYFqmWxgfFTFMk=/fit-in/600x527/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4570988-1383038071-5428.jpeg.jpg'},
        { id:9,audio: '/audio/wild_side.mp3', artist: 'A L I', tittle: 'WILD SIDE', album: 'Beastars', cover:'https://preview.redd.it/5tibmk07yaj51.jpg?width=3709&format=pjpg&auto=webp&s=2a41e6d888c5d7b4a1a0f7bff2046cfe4f1c7c61'}
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