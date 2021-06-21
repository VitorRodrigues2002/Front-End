<template>
<v-app>
    <div class="flex-container">
        <div id="login">
            <v-layout>
                <v-flex >
                    <v-container class="altura" >
                        <v-card flat>
                            <v-card-title primary-title>
                                <h4>
                                    Registar
                                </h4>
                                
                            </v-card-title>
                            <v-form>
                                <v-card-actions >
                                    <v-text-field style="padding-right:10px"  name="Nome" label="Nome" v-model="model2" required  :rules="[() => model2.length > 0 || 'Campo Obriagtorio']" v-on:keyup.enter=registo()></v-text-field> 
                                    <v-text-field  name="Apelido" label="Apelido" v-model="model2" required  :rules="[() => model2.length > 0 || 'Campo Obriagtorio']" v-on:keyup.enter=registo()></v-text-field>
                                </v-card-actions>
                                <v-text-field  name="Email" label="Email" type="email" v-model="email" required  :rules="[() => model2.length > 0 || 'Campo Obriagtorio']" v-on:keyup.enter=registo()></v-text-field>
                                <div v-if="flag_email">
                                        <v-alert dense height="40" type="info">
                                            {{alerta_email}}
                                         </v-alert>
                                </div>
                                <v-text-field  name="Password" label="Password" type="password" v-model="password" required v-on:keyup.enter=registo()></v-text-field>
                                <div v-if="flag_pass">
                                        <v-alert dense height="40" type="info">
                                            {{alerta_pass}}
                                         </v-alert>
                                </div>
                                
                                <v-card-actions>
                                    <v-btn primary large block @click=registo()>Registar</v-btn>
                                </v-card-actions>
                                
                            </v-form>
                        </v-card>
                    </v-container>
                </v-flex>
            </v-layout>
        </div>
    </div>
    </v-app>
</template>

<script>

import firebase from 'firebase';


export default {
  data() {
    return {    
    email: '',
    password: '',
    alerta_email : 'Email não valido',
    alerta_pass : 'Password incorreta',
    flag_email : false,
    flag_pass : false,
    goDark:true,
    };
  },

  
  methods: {
    registo(){
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user);
                this.$router.push("/");
                this.flag=false;
                // ...
            })
            
            .catch((error) => {
                var errorCode = error.code;  // <-
                var errorMessage = error.message;
                 console.log(errorCode + "-"+ errorMessage);
                 if(errorMessage=='The password must be 6 characters long or more.'){
                     this.flag_pass = true;
                    this.alerta_pass;
                 }else{
                    this.flag_email = true;
                    this.alerta_email;
                 }
                 

                // alert('Utilizador ja registado')
                // ..
                
            });
            
    }
  },
};
</script>