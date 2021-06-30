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
        <v-row class="colunaProduct" >
          <v-card width="500"  class="card" v-for="(piloto, index) in info" :key="index">
            <div v-if=" piloto.nome == pesquisa || pesquisa == ''">
              <v-img  :src="piloto.image"></v-img>
              <v-card-title class="text">
                <h2>
                  <v-img width="50" :src="piloto.pais"> </v-img>
                  <div class="h2">
                    {{piloto.nome}}
                  </div>
                </h2>
              </v-card-title> 
              <div>
                <h2 class="h2_texto">
                  {{piloto.nome_equipa}}
                </h2>
              </div>
              <br>
              <h2 class="h2_texto">Data de Nascimento: {{piloto.data_nascimento}}</h2>
              <div style="display:flex; justify-content:space-between">
                <v-card-actions>
                  <v-btn color="red" text @click="favorito(piloto)">
                    <v-icon x-large style="color:green">mdi-motorbike</v-icon>
                  </v-btn>
                </v-card-actions>
              </div>
            </div>
          </v-card >
        </v-row>
        <div class="colunaFav">
          <div v-if="favoritos.length >=0">
            <h1 style="margin-left:30px">
              Favoritos:
            </h1>
            <div v-for="(fav, index) in favoritos" :key="index" style="margin-left:30px; font-size: 25px;">
              {{fav.nome}} <v-icon x-large @click="removeFav(index)" class="rodar" style="color:red" >mdi-motorbike</v-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<style scoped>
  .rodar{
    transform: rotate(180deg);
  }
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
    position: relative;
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
      vertical: true,
      multiLine: true,
      snackbar: false,
      info: "", 
      pesquisa: "",
      novoPiloto: {
        nomePiloto: "",
        image: "",
      },
    };
  },
  mounted() {
    var that = this;
    axios
      .get("https://motogp-cfde3-default-rtdb.europe-west1.firebasedatabase.app/.json")
      .then(response => (this.info = response.data.piloto));
      console.log(that.info);

    this.cards.forEach((card) => {
        card.isFlipped = false;
    });
  },
  methods: {
    favorito(piloto) {
      if (this.favoritos.indexOf(piloto) === -1 ){
        this.favoritos.push(piloto);
      } else {
        this.snackbar = true;
      }
      console.log(this.favoritos);
    },
    removeFav(piloto){
      this.favoritos.splice (piloto,1)
    },
    submeterFormulario() {
      return axios.post("https://motogp-cfde3-default-rtdb.europe-west1.firebasedatabase.app/piloto.json",this.novoPiloto
      );
    },

    procura(pesq){
      this.pesquisa = pesq;
    },
  },
};
</script>