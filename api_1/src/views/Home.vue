<template>
    <div>

      <h1 class="title">
        API NASA
      </h1>

      <div class="helmet" >
        <img ondragstart="return false;" src="https://i.imgur.com/9oGlAz2.png" width="30%" height="30%" class="center">
      </div>

      <div class="flex-container">
        <div class="flex-item vue">
          <v-img src="https://pnglive.com/wp-content/uploads/2021/01/Vue-JS-Logo-Background-PNG-Image.png"></v-img>
        </div>

        <div class="flex-item vuetify">
          <v-img src="https://pbs.twimg.com/media/Ei5n6vBWoAEy5gp.png"></v-img>
        </div>

        <div class="flex-item api">
          <v-img src="https://miro.medium.com/max/452/1*0tPTi7jNKZbV05A2m0i3Bg.png"></v-img>
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
</style>

<style scoped>
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
