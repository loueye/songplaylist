<template>
  <v-row justify="center">
    <v-dialog
        max-width="390"
        scrollable
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="indigo accent-4"
            class="mt-5"
            dark
            v-bind="attrs"
            v-on="on"
        >
          Ma liste
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline indigo accent-3">
          J'aime
        </v-card-title>
        <v-list v-for="(eachTrack, id) in liked"
             :key="id" class="text-left indigo darken-4" >
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="eachTrack.cover"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title :v-text=eachTrack.tittle>{{ eachTrack.id+1 }} - {{ eachTrack.tittle }}</v-list-item-title>
              <v-list-item-subtitle :v-text=eachTrack.artist><small>{{ eachTrack.artist }}</small></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
name: "LikedList",
  props:{
  liked:Array,
  }
}
</script>

<style scoped>

</style>