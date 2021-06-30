<template>
  <h1 class="h1">O que pretende editar:
    <v-container class="container">
      <v-container class="container1">
        <v-btn @click="pilotos()">Pilotos</v-btn>
      </v-container>
      <v-container class="container2">
        <v-btn @click="equipas()">Equipas</v-btn>
      </v-container>
      <v-container class="container3">
        <v-btn @click="pistas()">Pistas</v-btn>
      </v-container>
    </v-container>
  </h1>
</template>

<style scoped>
  .h1{
    text-align: center;
  }
  .container1{
    flex: 50%;
    justify-content: center;
  }
  .container2{
    flex: 50%;
    justify-content: center;
  }
  .container3{
    flex: 50%;
    justify-content: center;
  }
  .container{
    display: flex;
    height: 100px;
  }
  .dark{
    margin-top: 20px;
  }
  footer{
    color: black;
    text-align: center;
  }
  footer .container .col-lg-12{
    padding: 60px;
  }
</style>


<script >
export default {
  name: "App",
  data: () => ({
    goDark: false,
    drawer: false,
    group: null,
    show: false,
  }),

   methods: {
      pilotos(){
        this.$router.push("/Admin_page_piloto");
      },
      equipas(){
        this.$router.push("/Admin_page_equipa");
      },
      pistas(){
        this.$router.push("/Admin_page_pista");
      },
    },
};
</script>
