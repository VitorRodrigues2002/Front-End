<template>
  <div>
    <v-system-bar color="deep-purple darken-3" ></v-system-bar>
    <v-app-bar >
      <v-toolbar-title>
        <button @click="home()">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Moto_Gp_logo.svg/800px-Moto_Gp_logo.svg.png" width="110" height="55"  >
        </button>
      </v-toolbar-title>
 
      <v-spacer></v-spacer>

      <v-btn icon to="/Piloto">
        <v-icon icon>
          mdi-motorbike
        </v-icon>
      </v-btn>

      <v-btn icon to="/Equipas">
        <v-icon icon>
          mdi-account-group
        </v-icon>
      </v-btn>

      <v-btn icon to="/Pistas">
        <v-icon icon>
          mdi-highway
        </v-icon>
      </v-btn>

      <v-btn icon to="/Login" @dblclick="admin()">
        <v-icon >
          mdi-account
        </v-icon>
      </v-btn>

    </v-app-bar>

    <router-view></router-view>

    <footer>
      <div class="col-lg-12 text-center">
        <h2>
          &copy; Feito por Vitor Hugo e Diogo Perestrelo - 2021 - MotoGP
        </h2>
      </div>
    </footer>
  </div>
</template>

<style>
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

  watch: {
    group() {
      this.drawer = false;
    },
   },
   methods: {
      admin(){
        this.$router.push("/Admin");
      },
      home(){
        this.$router.push("/");
      },
    },
    
};
</script>
