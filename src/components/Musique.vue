<template>
  <div :class="trackId">
    <v-card-subtitle class="font-italic button text-center">
      Musique {{trackId+1}} sur {{totalTracks}}
    </v-card-subtitle>
    <v-card style="margin: auto" class="text-center " max-width="344">
      <v-img
          :src="imgThumbnail"
          height="200px"
          class="text-center"
      ></v-img>
    </v-card>
    <v-card-subtitle class="pb-0 font-italic button text-center">
      {{artist}}
    </v-card-subtitle>
    <v-card-title class="pt-0 text-center d-block text--white">
      {{title}}
    </v-card-title>
    <v-card-subtitle class="text-center d-block">
      {{album}}
    </v-card-subtitle>

    <v-btn class="ma-2" color="indigo accent-4" dark v-if="this.played===true" @click="playSong">
      Pause
      <v-icon dark right>mdi-pause
      </v-icon>
    </v-btn>
    <v-btn
        class="ma-2" color="indigo accent-4" dark v-else @click="playSong">
      Play
      <v-icon dark right>
        mdi-play
      </v-icon>
    </v-btn>
    <v-slider
        color="indigo"
        prepend-icon="mdi-timelapse"
        :value="this.song.currentTime"
        :label="formatTime(this.song.currentTime)"
        @timeupdate="console.log('coucou')"
        readonly
    ></v-slider>
    <v-slider
        prepend-icon="mdi-volume-high"
        v-model="soundLevel"
        step="1"
        thumb-label
        ticks
        color="indigo accent-4"
        @click="getSoundValue"
    ></v-slider>
  </div>
</template>

<script>
export default {
name: "Musique",
  props: {
    imgThumbnail:String,
    title: String,
    url: String,
    trackId:Number,
    totalTracks:Number,
    album:String,
    artist:String,
  },
  data: function () {
    return {
      played:false,
      minVolume:100,
      maxVolume:0,
      soundLevel:100,
      test:0,
    }
  },
  watch: {
    soundValue(){
      console.log(this.soundLevel)
    },
  },
  computed: {
    song(){
     let valueSong = new Audio(this.url);
     return valueSong;
    },
  },
  methods: {
    formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
  },
  playSong(){
      if (this.played === false) {
        console.log(this.url+' must be played');
        this.song.play();
        this.played=true;
        console.log(this.played);
        navigator.vibrate([200]);
        console.log('It should have vibrated')
        this.$emit('currentSong')
      } else {
        console.log(this.url+' must be paused');
        this.song.pause();
        this.played=false;
        console.log(this.played)
        console.log(this.song.currentTime)
      }
      let timeCode = this.song;
      this.song.ontimeupdate = function() {this.test=timeCode.currentTime;console.log('Current Timecode : '+timeCode.currentTime+' et Test value'+this.test);return this.test};
      console.log(this.test)

  },
    getSoundValue() {
      console.log(this.soundLevel)
      if (this.soundLevel===100){
        this.song.volume = this.soundLevel;
      } else {
        this.song.volume = this.soundLevel / 100;
      }
    }
  },
}
</script>

<style scoped>

</style>