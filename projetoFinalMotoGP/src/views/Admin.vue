<template>
    <v-app>
        <div class="flex-container">
            <div id="admin">
                <v-layout>
                    <v-flex >
                        <v-container class="altura" >
                            <v-card flat>
                                <v-card-title primary-title>
                                    <h4>
                                        Admin
                                    </h4>
                                </v-card-title>
                                <v-form >
                                    <v-text-field  name="Email" label="Email" v-model="email" v-on:keyup.enter=admin()></v-text-field>
                                    <div v-if="flag_email">
                                        <v-alert dense height="40" type="info">
                                            {{alerta_email}}
                                        </v-alert>
                                    </div>
                                    <v-text-field  name="Password" label="Password" type="password" v-model="password" v-on:keyup.enter=admin()></v-text-field>
                                    <v-card-actions>
                                        <v-btn primary large block @click=admin() >
                                            Login
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
 
  
methods:{
    admin(){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then((userCredential) => {
                // Signed in
                if(this.email=='vhfr20022103.vh@gmail.com'||this.email=='diogoperestrelo.2019@gmail.com' ){
                    var user = userCredential.user;
                console.log(user);
                this.$router.push("/Admin_page");
                this.flag = false;
                }else{
                    this.flag_email = true;
                    this.alerta_email;
                }
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