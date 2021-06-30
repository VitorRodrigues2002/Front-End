<template>
  <v-app>
    <div class="container-fluid" :style="{'background-image': 'url(' + require('@/assets/motogp9.jpg') + ')'}" style="height:900px; ">
      <h1 class="erro">404</h1>
      <h2 class="h2">Sem pneu suficiente! De volta á box. </h2>
      <router-link to="/">
        <v-btn class="botao_retorna" x-large style="height=50px;"> Back to Home Page </v-btn>
      </router-link>
    </div>
  </v-app>
</template>
<style scoped>
.container-fluid{
    color: white;
}
.h2{
  margin-left: 20px;
}
.erro{
  margin-top: 200px;
  font-size: 100px;
  margin-left: 20px;
}
.botao_retorna{
  margin-top: 20px;
  margin-left: 20px;
}
</style>