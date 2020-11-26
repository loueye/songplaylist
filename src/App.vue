<template>
  <v-app>
  <div id="app">
    <v-banner two-line>
      <v-avatar
          slot="icon"
          color="indigo accent-4"
          size="40"
      >
        <v-icon
            icon="mdi-lock"
            color="white"
        >
          mdi-gavel
        </v-icon>
      </v-avatar>

      Veuillez noter que certaines fonctionnalités ne marchent pas comme elles le devraient. Certaines actions peuvent
      mener à des bugs ou des softlocks.
      <v-dialog
          width="500"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              color="indigo accent-4"
              dark
              v-bind="attrs"
              v-on="on"
          >
            En savoir plus
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="overline indigo accent-4">
            &Agrave; propos de cette application
          </v-card-title>

          <v-card-text class="text-justify">
            <p class="mt-5">Cette application est un projet d'&eacute;tudes à titre expérimental. Ainsi, certaines fonctionnalités peuvent êtres
            susceptibles de ne pas fonctionner correctement. Ce qui fonctionne :</p>
            <ul>
              <li><p>Appuyez sur <b class="text--accent-1 indigo--text">PLAY</b> pour lancer la musique. Si vous souhaitez changer de musique, cliquez sur le bouton <b class="text--accent-1 indigo--text">SUIVANT</b>.
                Si vous tentez de <b>passer à la musique précédente ou suivante alors que vous êtes déjà au début ou à la fin</b> vous serez informé que vous ne pouvez pas.<br>
                  <small class="font-italic">Notez que vous devez d'abord mettre en pause la musique avant de passer.</small></p>
              </li>
              <li><p>Vous pouvez régler le son en <b class="text--accent-1 indigo--text">déplaçant la jauge de gauche à droite</b>.</p>
              </li>
              <li><p>Le <b class="text--accent-1 indigo--text">timestamp</b> auquel vous vous trouvez s'affiche lorsque vous mettez en pause votre musique.<br>
                <small class="font-italic">Il est possible de voir le <b>timestamp en temps réel dans l'inspecteur d'élément</b>.</small></p>
              </li>
              <li><p>Sur <b class="text--accent-1 indigo--text">Chrome pour Android</b>, votre téléphone doit vibrer lorsque vous lancez une musique.</p>
              </li>
              <li><p>Vous pouvez basculer d'une section à l'autre en <b class="text--accent-1 indigo--text">cliquant sur la barre de navigation</b>.</p>
              </li>
              <li><p>Vous pouvez <b class="text--accent-1 indigo--text">liker une musique et retrouver votre liste de like</b> en cliquant sur <b class="text--accent-1 indigo--text">MA LISTE</b>.</p>
              </li>
            </ul>
            <p class="subtitle-2 yellow--text text--darken-3">Les musiques, ainsi que toutes les images sont mis en cache pour éviter d'avoir à le recharger ou d'avoir un 404 hors-connexion.</p>

            <v-img
                class="mx-auto mb-5"
                lazy-src="./assets/logo.png"
                max-width="25%"
                src="./assets/logo.png"
            ></v-img>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-banner>
    <template>
      <v-card>
          <v-tabs
              background-color="indigo accent-4"
              center-active
              dark
              centered>
            <v-tab to="/" class="text--white" >
              <router-link to="/">Home</router-link>
            </v-tab>
            <v-tab to="/about">
              <router-link to="/about">About</router-link>
            </v-tab>
            <v-tab to="/portfolio">
              <router-link to="/portfolio">Portfolio</router-link>
            </v-tab>
            <v-tab to="/artiste">
              <router-link to="/artiste">artiste</router-link>
            </v-tab>
        </v-tabs>
      </v-card>
    </template>
    <router-view>
    </router-view>
      <v-card
          flat
          tile
          width="100%"
          padding="0"
          class="indigo accent-3 text-center mt-5"
      >
        <v-card-text>
          <v-btn
              class="mx-4"
              icon
          >
            <v-icon size="24px">
              
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Loueye G.</strong>
        </v-card-text>
      </v-card>
  </div>
  </v-app>
</template>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
a {
  color: white!important;
  text-decoration: none!important;

}
</style>
