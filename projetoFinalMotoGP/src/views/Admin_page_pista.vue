<template>
  <v-app>
    <v-container >
      <form @submit.prevent="submeterFormulario" action="form">
        <div class="input-control">
          <label>
            Imagem da Pista
          </label>
          <input type="url" v-model="novaPista.image">
        </div>
        <div class="input-control">
          <label>
            Nome do Pais
          </label>
          <input type="text" v-model="novaPista.pais_nome">
        </div>        
        <div class="input-control1">
          <label>
            Bandeira do Pais (URL)
          </label>
          <v-card-actions>
            <input type="text" v-model="novaPista.pais_img">
            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show">
              <v-card-text>
                <v-card-actions class="img">
                  <v-img width="50px" src="https://photos.motogp.com/countries/flags/iso2/ES.svg"></v-img>
                  <h3>Link=https://photos.motogp.com/countries/flags/iso2/ES.svg</h3>
                </v-card-actions>
                <v-card-actions class="img">
                  <v-img width="50px" src="https://photos.motogp.com/countries/flags/iso2/IT.svg"></v-img>
                  <h3>Link=https://photos.motogp.com/countries/flags/iso2/IT.svg</h3>
                </v-card-actions>
                <v-card-actions class="img">
                  <v-img width="50px" src="https://photos.motogp.com/countries/flags/iso2/AU.svg"></v-img>
                  <h3>Link=https://photos.motogp.com/countries/flags/iso2/AU.svg</h3>
                </v-card-actions>
                <v-card-actions class="img">
                  <v-img width="50px" src="https://photos.motogp.com/countries/flags/iso2/JP.svg"></v-img>
                  <h3>Link=https://photos.motogp.com/countries/flags/iso2/JP.svg</h3>
                </v-card-actions>
                <v-card-actions class="img">
                  <v-img width="50px" src="https://photos.motogp.com/countries/flags/iso2/FR.svg"></v-img>
                  <h3>Link=https://photos.motogp.com/countries/flags/iso2/FR.svg</h3>
                </v-card-actions>
                  <v-card-actions class="img">
                  <v-img width="50px" src="https://photos.motogp.com/countries/flags/iso2/ZA.svg"></v-img>
                <h3>Link=https://photos.motogp.com/countries/flags/iso2/ZA.svg</h3>
                </v-card-actions>
                <v-card-actions class="img">
                  <v-img width="50px" src="https://photos.motogp.com/countries/flags/iso2/PT.svg"></v-img>
                  <h3>Link=https://photos.motogp.com/countries/flags/iso2/PT.svg</h3>
                </v-card-actions>
                <v-card-actions class="img">
                  <v-img width="50px" src="https://photos.motogp.com/countries/flags/iso2/DE.svg"></v-img>
                  <h3>Link=https://photos.motogp.com/countries/flags/iso2/DE.svg</h3>
                </v-card-actions>
                <v-card-actions class="img">
                  <v-img width="50px" src="https://photos.motogp.com/countries/flags/iso2/GB.svg"></v-img>
                  <h3>Link=https://photos.motogp.com/countries/flags/iso2/GB.svg</h3>
                </v-card-actions>
                <v-card-actions class="img">
                  <v-img width="50px" src="https://photos.motogp.com/countries/flags/iso2/CH.svg"></v-img>
                  <h3>Link=https://photos.motogp.com/countries/flags/iso2/CH.svg</h3>
                </v-card-actions>
                <v-card-actions class="img">
                  <v-img width="50px" src="https://photos.motogp.com/countries/flags/iso2/US.svg"></v-img>
                  <h3>Link=https://photos.motogp.com/countries/flags/iso2/US.svg</h3>
                </v-card-actions>
                <v-card-actions class="img">
                  <v-img width="50px" src="https://photos.motogp.com/countries/flags/iso2/RH.svg"></v-img>
                  <h3>Link=https://photos.motogp.com/countries/flags/iso2/RH.svg</h3>
                </v-card-actions> 
                <v-card-actions class="img">
                  <v-img width="50px" src="https://photos.motogp.com/countries/flags/iso2/FI.svg"></v-img>
                  <h3>Link=https://photos.motogp.com/countries/flags/iso2/FI.svg</h3>
                </v-card-actions>
                <v-card-actions class="img">
                  <v-img width="50px" src="https://photos.motogp.com/countries/flags/iso2/VE.svg"></v-img>
                  <h3>Link=https://photos.motogp.com/countries/flags/iso2/VE.svg</h3>
                </v-card-actions>               
              </v-card-text>
            </div>
          </v-expand-transition>
        </div>
        <div class="input-control">
          <label>
            Data Inicial
          </label>
          <input type="date" v-model="novaPista.data_inicio">
        </div>
        <div class="input-control">
          <label>
            Data Final
          </label>
          <input type="date" v-model="novaPista.data_final">
        </div>
        <div class="input-control">
          <label>
            Numero de Voltas
          </label>
          <input type="text" v-model="novaPista.voltas">
        </div>

        <button type="submit" class="button">
          Enviar
        </button>
        <button  class="button" @click="volta()">
          Voltar
        </button>
        <div class="row" >
          <v-row class="colunaProduct">
            <v-card width="500"  class="card" v-for="(pistas, index) in info" :key="index">
              <v-img  :src="pistas.image"></v-img>
              <br>
              <br>
              <h2>
                <v-img width="50" :src="pistas.pais_img"> </v-img>
                <div class="h2">
                  {{pistas.pais_nome}}
                </div>
              </h2>
              <h5>Data Inicial: {{pistas.data_inicio}}</h5>
              <h5>Data Final: {{pistas.data_final}}</h5>
              <h5>Voltas: {{pistas.voltas}}</h5>
            </v-card >
          </v-row>
        </div>
      </form>
    </v-container>
  </v-app>
</template>

<style scoped>
  .img{
    width: 50px;
  }
  .input-control1{
    margin: 10px 0;
  }
  .input-control1 label{
    display: block;
    font-weight: bold;
    color: black;
    font-family: Times New Roman;
  }
  .input-control1 input{
    display: block;
    width: 100%;
    box-sizing: border-box;
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
  }
  .input-control1 input:focus{
    background-color: #eee;
    outline: none;
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
    margin: 10px;
  }
  .button:hover,
  .button:active{
    color:black;
    background-color: white;
  }
  .input-control{
    margin: 10px 0;
  }
  .input-control label{
    display: block;
    font-weight: bold;
    color: black;
    font-family: Times New Roman;
  }
  .input-control input{
    display: block;
    width: 100%;
    box-sizing: border-box;
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
  }
  .input-control input:focus{
    background-color: #eee;
    outline: none;
  }
</style>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      novaPista:{
        pais_nome: '',
        pais_img: '',
        image:'',
        data_final:'',
        data_inicio:'',
        voltas:''
      },  
      info: null,
      show: false,
      alerta: false
    }
  },
  mounted() {
    var that = this;
    axios
      .get("https://motogp-cfde3-default-rtdb.europe-west1.firebasedatabase.app/.json")
      .then(response => (this.info = response.data.pistas));
      console.log(that.info);
  },

  methods:{
    submeterFormulario(){
      if(this.novaPista.pais_nome == '' || this.novaPista.pais_img == '' || this.novaPista.image == ''|| this.novaPista.data_final == '' ||this.novaPista.data_inicio == '' ||this.novaPista.voltas == '')
      {
        alert("Campos por preencher");
        this.alerta = true;
      } 
      else
      {
        this.alerta = false;
      return axios.post('https://motogp-cfde3-default-rtdb.europe-west1.firebasedatabase.app/pistas.json', this.novaPista);
      }
    },

    volta(){
      this.$router.push("/Admin_page");
    }
  }
}
</script>