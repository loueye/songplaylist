/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
          'App is being served from cache by a service worker.\n' +
          'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Le service worker a été installé.')
      let cacheName = 'cache_img';
      let contentToCache = [
          'https://lh6.googleusercontent.com/Jtl4LOmWN_C-xMqxwXIyUa7Lp3PPGj7UwBOVXaJ8aAwCu7AVZ3UTkMIeKj-0aO_zIwd9mvcEkyW2cB9d_GmAd_jjozpXUEph67ccqdah__g-Pkn5_X9YqcnPK5sxRLRmmA=s412',
          './img/icons/logo.png',
          'https://vgmdownloads.com/soundtracks/ponyo-ost/07.jpg',
          'https://m.media-amazon.com/images/I/81T-0VmGhlL._SS500_.jpg',
          'https://vgmdownloads.com/soundtracks/howls-moving-castle-original-soundtrack/2236-uuzkwcxhul.jpg',
          'https://i1.sndcdn.com/artworks-000083370239-e0wchp-t500x500.jpg',
          'https://images-na.ssl-images-amazon.com/images/I/91987HOVojL._SL1500_.jpg',
          'https://thefilmstage.com/wp-content/uploads/2020/04/princess-mononoke-symphonic-suite-vinyl-.jpg',
          'https://i1.sndcdn.com/artworks-000368941563-fw2gob-t500x500.jpg',
          'https://img.discogs.com/9n2VyFB_foZFDOYFqmWxgfFTFMk=/fit-in/600x527/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4570988-1383038071-5428.jpeg.jpg',
          'https://preview.redd.it/5tibmk07yaj51.jpg?width=3709&format=pjpg&auto=webp&s=2a41e6d888c5d7b4a1a0f7bff2046cfe4f1c7c61',
      ];
      caches.open(cacheName).then((cache) => {
        console.log('[Service Worker] Caching all: app shell and content');
        return cache.addAll(contentToCache);
      })
    },
    cached () {
      console.log('Contenu mis en cache en cas de déconnexion.')
    },
    updatefound () {
      console.log('Du contenu est téléchargé.')
    },
    updated () {
      console.log('Du nouveau contenu est apparu ; merci de rafraichir la page.')
    },
    offline () {
      console.log('Pas d\'internet, utilisation en mode déconnecté.')
    },
    error (error) {
      console.error('Erreur lors de l\'installation du service worker :', error)
    }
  })
}