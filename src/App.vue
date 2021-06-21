<template>
  <div>
    <v-system-bar color="deep-purple darken-3" ></v-system-bar>
    <v-app-bar :dark="goDark">
      <!-- <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
        <v-toolbar-title>
          <button @click="home()">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1224px-NASA_logo.svg.png" width="70" height="60"  >
          </button>
        </v-toolbar-title>
 
        <v-spacer></v-spacer>

        <v-btn icon to="/Produto">
          <v-icon icon>
            mdi-airballoon
          </v-icon>
        </v-btn>


        <v-btn icon to="/" @dblclick="admin()">
          <v-icon >
            mdi-account
          </v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon icon @click="show = !show">
            mdi-dots-vertical
          </v-icon>
        </v-btn>
        <div class="dark">
          <v-expand-transition >
            <div v-show="show">
              <v-switch  :label="`Dark Mode`" v-model="goDark"></v-switch>
            </div>
          </v-expand-transition>
        </div>
      </v-app-bar>

    <router-view></router-view>

    <footer>
      <div class="col-lg-12 text-center">
        <p>
          &copy; Feito por Vitor Hugo e Diogo Perestrelo - 2021
        </p>
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
import axios from "axios";
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
    procura(pesquisa){
        axios
            .get("https://images-api.nasa.gov/search?q="+ pesquisa +"&media_type=image")
            .then(response => (this.info = response.data.collection.items));
    },
      admin(){
          this.$router.push("/Admin");
      },
      home(){
        this.$router.push("/Home");
      },
    },
    mounted() {
    var that = this;
    axios
      .get("https://images-api.nasa.gov/search?q=earth&media_type=image")
      .then(response => (this.info = response.data.collection.items));
    console.log(that.info);
  },
};


</script>