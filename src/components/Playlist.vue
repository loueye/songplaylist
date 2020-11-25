<template>
  <v-list rounded>
    <v-subheader class="text-center d-inline">Playlist</v-subheader>
    <p>Musique {{counter+1}} sur {{Playlist.length}}</p>

    <v-list-item-group
        color="indigo accent-4"
    >
      <div v-for="(eachTrack, id) in Playlist"
           :key="id" >
        <v-list-item aria-selected="true" class="v-item--active v-list-item--active" v-if="eachTrack.id==counter">
          <v-list-item-icon class="subtitle-2 yellow--text text--darken-3">
            <v-progress-circular
                indeterminate
                color="yellow darken-3"
                :width="4"
                :size="20"
                class="mr-4"
            ></v-progress-circular>
            {{eachTrack.id+1}}
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="yellow--text text--darken-3">{{eachTrack.tittle}}</v-list-item-title>
            <v-list-item-subtitle >{{eachTrack.album}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item aria-selected="false" v-else>
          <v-list-item-icon class="subtitle-2">
            <v-icon dark right class="mx-0 mr-3">mdi-music-note</v-icon>
            {{eachTrack.id+1}}
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{eachTrack.tittle}}</v-list-item-title>
            <v-list-item-subtitle >{{eachTrack.album}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>

    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
name: "Playlist",
  props:{
    Playlist: Array,
    counter: Number,
  }
}
</script>

<style scoped>

</style>