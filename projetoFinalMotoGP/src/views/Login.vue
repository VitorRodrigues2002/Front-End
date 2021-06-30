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
                                        Login
                                    </h4>
                                </v-card-title>

                                <v-form >
                                    <v-text-field  name="Email" label="Email" v-model="email" v-on:keyup.enter=login()></v-text-field>
                                    <div v-if="flag_email">
                                        <v-alert dense height="40" type="info">
                                            {{alerta_email}}
                                        </v-alert>
                                    </div>
                                    <v-text-field  name="Password" label="Password" type="password" v-model="password" v-on:keyup.enter=login()></v-text-field>
                                    <div v-if="flag_pass">
                                        <v-alert dense height="40" type="info">
                                            {{alerta_pass}}
                                        </v-alert>
                                    </div>
                                    <v-card-actions>
                                        <v-btn primary large block @click=login()>
                                            Login
                                        </v-btn>
                                    </v-card-actions>
                                    <v-card-actions>
                                        <v-btn primary large block to="/Registar">
                                            Registar
                                        </v-btn>
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
    alerta_email : 'Email incorreto',
    alerta_pass : 'Password incorreta',
    flag_email : false,
    flag_pass : false,   
    };
  },

  
    methods: {
        login(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user);
                this.$router.push("/Home");
                this.flag = false;
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;  // <-
                var errorMessage = error.message;
                console.log(errorCode + "-"+ errorMessage);
                if(errorMessage=='The password is invalid or the user does not have a password.'){
                    this.flag_pass = true;
                    this.alerta_pass;
                }else{
                    this.flag_email = true;
                    this.alerta_email;
                }
            });
        }
    },
};
</script>

<style>
.flex-container{
    display: flex;
    justify-content:center;
    height: 100%;
    padding-top:50px;
}
.altura{
    width: 500px;
    border: 2px solid  gray;
}
</style>