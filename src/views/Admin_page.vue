<template>
  <v-app>
    <v-container >
      <form @submit.prevent="submeterFormulario" action="form">

        <div class="input-control">
          <label>
            Insrira o Nome Planeta do Novo Planeta
          </label>
          <input type="text" v-model="novoProduto.nomePlaneta">
        </div>

        <div class="input-control">
          <label>
            Imagem (URL)
          </label>
          <input type="url" v-model="novoProduto.image">
        </div>

        <button type="submit" class="button">
          Enviar
        </button>

        <div class="row" >
          <v-row class="colunaProduct">
            <v-card width="500"  class="card" v-for="(planeta, index) in info" :key="index">
              <v-card-title>
                {{planeta.nomePlaneta}}
              </v-card-title>
              <v-img height="300" :src="planeta.image"></v-img>
            </v-card >
          </v-row>
        </div>
        
      </form>
    </v-container>
  </v-app>
</template>

<style scoped>
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
      novoProduto:{
        nomePlaneta:'',
        image:'',
      },  
      info: null
    }
  },
  mounted() {
    var that = this;
    axios
      .get("https://apinasa-f80a2-default-rtdb.firebaseio.com/.json")
      .then(response => (this.info = response.data.planeta));
    console.log(that.info);
  },

  methods:{
    submeterFormulario(){
      return axios.post('https://apinasa-f80a2-default-rtdb.firebaseio.com/planeta.json', this.novoProduto);
    }
    
  }

}
</script>