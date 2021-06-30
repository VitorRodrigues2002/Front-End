<template>
  <div>
    <h1 class="title">
      MotoGP API
    </h1>
    <div class="carrosel">
      <v-card elevation="24" max-width="444" class="mx-auto">
        <v-system-bar lights-out></v-system-bar>
        <v-carousel :continuous="false" :cycle="cycle" :show-arrows="false" hide-delimiter-background delimiter-icon="mdi-minus" height="300" width="1200">
          <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src"></v-carousel-item>
        </v-carousel>
        <v-list two-line>
        
        </v-list>
      </v-card>
    </div>

    <div class="flex-container">
      <div class="flex-item vue">
        <v-img src="https://pnglive.com/wp-content/uploads/2021/01/Vue-JS-Logo-Background-PNG-Image.png"></v-img>
      </div>

      <div class="flex-item vuetify">
        <v-img src="https://pbs.twimg.com/media/Ei5n6vBWoAEy5gp.png"></v-img>
      </div>

      <div class="flex-item api">
        <v-img src="https://cdn.changelog.com/uploads/icons/topics/kJ/icon_large.png?v=63683332430"></v-img>
      </div>

      <div class="flex-item css">
        <v-img src="https://rochester.kidsoutandabout.com/sites/default/files/html_css_javascript_1.jpeg"></v-img>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  }
  .title {
  text-align: center;
  font-family : "Garamond";
  }
  .carrosel{
    display: flex;
    justify-content: center;
  }
  body{
    margin: 0;
  }
  .flex-container{
    display: flex;
    align-items:center;
    justify-content: center;
    height: 100vh;
    margin-top: -200px;
  }
  .flex-item{
    width: 180px;
    height: 180px;
  }
  .api{
    background-color: transparent;
    margin-left: 90px;
    margin-right: 90px;
  }
  .vue{
    background-color: transparent;
    margin-left: 90px;
    margin-right: 90px;
  }
  .vuetify{
    background-color: transparent;
    margin-left: 90px;
    margin-right: 90px;
  }
  .css{
    background-color: transparent;
    margin-left: 90px;
    margin-right: 90px;
  }
</style>

<script>
  export default {
    data () {
      return {
        cycle: true,
        slides: [
          {
            src : 'https://www.iol.pt/multimedia/oratvi/multimedia/imagem/id/60799ea20cf26952d6c0ab3f/1024.jpg'
          },
          {
            src : 'https://th.bing.com/th/id/R01ed4038603df52b04a25cc5e768b4f5?rik=dwqaCZiDN%2bc%2fbg&pid=ImgRaw'
          },
          {
            src : 'https://th.bing.com/th/id/Rae94a964305b9eb5957818a88e996669?rik=ezUGEvkuvyoyLQ&pid=ImgRaw'
          },
          {
            src : 'https://photos.motogp.com/2019/10/08/wbw_5154.big.jpg'
          },
          {
            src : 'https://th.bing.com/th/id/Rcc2d8589528d09e4996b1b40ae603c79?rik=2XipO4hz4imt1g&pid=ImgRaw'
          },  
        ],
      }
    },
  }
</script>