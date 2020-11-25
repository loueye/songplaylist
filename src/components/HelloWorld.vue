<template>
  <v-container style="max-width: 400px;">
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Player en VueJS</h1>

      </v-col>
    </v-row>

    <Player></Player>
  </v-container>
</template>

<script>
import Player from "./Player";

export default {
  name: "HelloWorld",
  components: {Player},
};
</script>
