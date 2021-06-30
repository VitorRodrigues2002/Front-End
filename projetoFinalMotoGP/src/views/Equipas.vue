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
          <v-card width="500"  class="card" v-for="(equipa, index) in info" :key="index">
            <div v-if=" equipa.nome_equipa == pesquisa || pesquisa == ''">
              <v-img  :src="equipa.image"></v-img>
              <v-card-title>
                <div>
                  <h2>
                    {{equipa.nome_equipa}}
                  </h2>
                </div>
              </v-card-title>
              <v-card-title>
                <div>
                  <h3>
                    <h3>Pilotos:</h3>
                    <v-img width="50" :src="equipa.pais"> </v-img>
                    <div class="h2">
                      {{equipa.piloto}}
                    </div>
                    <v-img width="50" :src="equipa.pais1"> </v-img>
                    <div class="h2">
                      {{equipa.piloto1}}
                    </div>
                    <v-img width="50" :src="equipa.pais2"> </v-img>
                    <div class="h2">
                      {{equipa.piloto2}}
                    </div>
                  </h3>
                  <br>
                  <h3>
                    <h3>Mota:</h3>
                    <div>
                      {{equipa.nome_mota}}
                      <br>
                      <h3>Pneu:</h3>
                      {{equipa.pneu}}''
                    </div>
                  </h3>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn color="red" text @click="favorito(equipa)">
                  <v-icon x-large style="color:green">mdi-account-group</v-icon>
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
              {{fav.nome_equipa}} <v-icon x-large @click="removeFav(index)" class="rodar" style="color:red" >mdi-account-group</v-icon>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </v-container>
</template>

<style scoped>
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
      favoritos:[],
      info: "",
      vertical: true,
      multiLine: true,
      snackbar: false,
      pesquisa: '',
      novaEquipa: {
        nome_equipa: "",
        image: "",
      },
    };
  },
  mounted() {
    var that = this;
    axios
      .get("https://motogp-cfde3-default-rtdb.europe-west1.firebasedatabase.app/.json")
      .then(response => (this.info = response.data.equipa));
      console.log(that.info);

    this.cards.forEach((card) => {
        card.isFlipped = false;
    });
  },
  methods: {
    favorito(equipa) {
        if (this.favoritos.indexOf(equipa) === -1 ){
            this.favoritos.push(equipa);
        } else {
            this.snackbar = true;
        }
      console.log(this.favoritos);
    },
    removeFav(equipa){
        this.favoritos.splice (equipa,1)
    },
    procura(pesq){
        this.pesquisa = pesq;
    },
    submeterFormulario() {
      return axios.post("https://motogp-cfde3-default-rtdb.europe-west1.firebasedatabase.app/equipas.json",this.novaEquipa
      );
    },
  },
};
</script>
