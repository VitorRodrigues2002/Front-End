<template>
  <v-container>
    <input class="search" type="text" v-model="pesquisa" required  v-on:keyup.enter="procura(pesquisa)">
    <v-btn icon @click="procura(pesquisa)">
      <v-icon>
        mdi-magnify
      </v-icon>
    </v-btn>
    <br>
    <br>

    <div class="row">
      <v-snackbar v-model="snackbar" :multi-line="multiLine">
        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
      <div class="row" >
        <v-row class="colunaProduct">
          <v-card width="500"  class="card" v-for="(pistas, index) in info" :key="index">
            <div v-if=" pistas.pais_nome == pesquisa || pesquisa == ''">
              <v-img  :src="pistas.image"></v-img>
              <br>
              <br>
              <h2>
                <v-img width="50" :src="pistas.pais_img"> </v-img>
                <div class="h2">
                  {{pistas.pais_nome}}
                </div>
              </h2>
              <h2>Data Inicial: {{pistas.data_inicio}}</h2>
              <h2>Data Final: {{pistas.data_final}}</h2>
              <h2>Voltas: {{pistas.voltas}}</h2>
              <v-card-actions>
                <v-btn color="red" text @click="favorito(pistas)">
                  <v-icon x-large style="color:green">mdi-highway</v-icon>
                </v-btn>
              </v-card-actions>
            </div>
          </v-card >
        </v-row>
        <div class="colunaFav">
          <div v-if="favoritos.length >=0">
            <h1 style="margin-left:30px">
              Favoritos:
            </h1>
            <div v-for="(fav, index) in favoritos" :key="index" style="margin-left:30px; font-size: 25px;">
              {{fav.pais_nome}} <v-icon x-large @click="removeFav(index)" class="rodar" style="color:red" >mdi-highway</v-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<style scoped>
  .h2_texto{
    margin-left: 16px;
  }
  .h2{
    margin-left: 60px;
    margin-top:-30px
  }
  .row{
    margin-top: 0px;
  }
  .colunaProduct {
    flex: 100%;
  }
  .card{
    margin: 48px;
  }
  .form{
    max-width:550px;
    box-sizing: border-box;
    margin: 30px;
    margin-top: 60px;
    padding: 30px;
    text-align: justify;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
    width: 100%;
  }
  .button{
    font: inherit;
    cursor: pointer;
    border-radius: 40px;
    border: 1px solid black;
    background-color:darkgrey;
    color:black;
    text-decoration: none;
    padding: 10px 30px;
  }
  .search{
    cursor: pointer;
    border-radius: 40px;
    border: 1px solid black;
    color:black;
    font-size: 20px;
    padding: 10px 30px;
  }
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      favoritos: [],
      info: "",
      vertical: true,
      multiLine: true,
      snackbar: false,
      pesquisa: '',
      novaPista: {
        pais_nome: "",
        image: "",
      },
    };
  },
  mounted() {
    var that = this;
    axios
      .get("https://motogp-cfde3-default-rtdb.europe-west1.firebasedatabase.app/.json")
      .then(response => (this.info = response.data.pistas));
      console.log(that.info);

    this.cards.forEach((card) => {
      card.isFlipped = false;
    });
  },
  methods: {
    favorito(pistas) {
        if (this.favoritos.indexOf(pistas) === -1 ){
          this.favoritos.push(pistas);
        } else {
          this.snackbar = true;
        }
      console.log(this.favoritos);
    },
    removeFav(pistas){
      this.favoritos.splice (pistas,1)
    },
    procura(pesq){
      this.pesquisa = pesq;
    },
    submeterFormulario() {
      return axios.post("https://motogp-cfde3-default-rtdb.europe-west1.firebasedatabase.app/pistas.json",this.novaPista
      );
    },
  },
};
</script>