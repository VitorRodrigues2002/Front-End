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
            
            <div v-if="info.length  == 0">
                Unreacheable {{ pesquisa }}
                {{aux}}
            </div>
            <div v-if="info.length  < 60 && info.length > 0">
                loading
            </div>
            
            
            <!-- Lista Produtos -->

            <v-snackbar v-model="snackbar" :multi-line="multiLine">
              
                <template v-slot:action="{ attrs }">
                    <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
                        Close
                    </v-btn>
                </template>
            </v-snackbar>

            <v-row class="colunaProduct">
                <v-card max-width="300"  class="card" v-for="(item, index) in info" :key="index" >
                    <div v-if="index<10">
                        <v-card-title class="titulo">
                            {{item.data[0].title}}
                        </v-card-title>
                        <v-img height="150" :src="item.links[0].href"></v-img>
                        <div class="descricao" >
                            <v-btn icon @click=" aux = mostrar(index)" class="explore">Explore</v-btn>
                                <div class="aux">
                                    {{aux}}
                                </div> 
                            <div class="alturatrue" v-if="show[index]">
                                <v-card-text>
                                        <v-row>
                                            {{info[index].data[0].description}}
                                        </v-row>
                                </v-card-text>
                            </div>
                            <div v-else class="alturafalse"></div>
                        </div>
                        <v-card-actions>
                            <v-btn color="deep-purple " text @click="favorito(item)">
                                Guardar como Favorito
                            </v-btn>
                        </v-card-actions>
                    </div>
                </v-card >
            </v-row>

    <!-- Lista favoritos -->

            <div class="colunaFav">
                <div v-if="favoritos.length >=0">
                    <h3>
                        Favoritos:
                    </h3>
                    <div v-for="(fav, index) in favoritos" :key="index">
                        {{fav.data[0].title}} <v-icon x-small @click="removeFav(index)">mdi-close-circle-outline</v-icon>
                    </div>
                </div>
            </div>

        </div>
   </v-container>
</template>

<style scoped>
    .alturafalse{
        max-height: 0px;
    }

    .alturatrue{
        max-height: auto;
    }

    .explore{
        margin-left: 35px;
    }
    .aux{
        color: transparent;
    }

    .titulo{
        width: 300px;
        height: 100px;
    }

    .row {
        display: flex;
    }

    .card{
      margin: 20px;
    }

    .colunaProduct {
        flex: 80%;
    }

    .colunaFav {
        flex: 20%;
    }

    .search[type=text] {
        border: 1px solid grey;
        border-radius: 40px;
        background-color: white;
    }

    .buttom_search{
        background-color: white;
    }
</style>



<script>
import axios from "axios";

export default {
  data() {
    return {
      info: null,
      favoritos: [],
      vertical: true,
      multiLine: true,
      snackbar: false,
      text: `Esse item já foi adicionado aos favoritos!`,
      show: [],
      mostra: false,
      newTitle: true,
      pesquisa: '',
      aux: false,
    };
  },
  mounted() {
    var that = this;
    axios
      .get("https://images-api.nasa.gov/search?q=earth&media_type=image")
      .then(response => (this.info = response.data.collection.items));
    console.log(that.info);

    this.cards.forEach((card) => {
        card.isFlipped = false;
    });
  },
  
  methods: {
    favorito(item) {
        if (this.favoritos.indexOf(item) === -1 ){
            this.favoritos.push(item);
        } else {
            this.snackbar = true;
        }

 
      console.log(this.favoritos);
    },
    removeFav(item){
        this.favoritos.splice (item,1)
    },
    procura(pesq){
        this.pesquisa = pesq;
       // alert("pesquisou por " +  this.pesquisa );
        axios
        .get("https://images-api.nasa.gov/search?q=" + pesq + "&media_type=image")
        .then(response =>(this.info = response.data.collection.items));

    },
    mostrar(id){
        //this.mostra[id] != this.mostra[id];
       
        this.show[id] = !(this.show[id]);
        console.log((this.show[id]) + " do item"  + id);
        return this.show[id];
        //return this.show[id];
    },
  },
};
</script>