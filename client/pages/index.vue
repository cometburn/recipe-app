<template>
  <v-app>
    <v-container fluid>
      <v-row justify="center" no-gutters>
        <v-col md="4" offset-md="3" cols="12">
          <v-row>
            <v-col class="text-center">
              <h1>Login</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <ra-login-card @submit="authenticate" />
            </v-col>
          </v-row>
        </v-col>
        <v-col md="2"></v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import RaLoginCard from "~/components/organisms/ra-login-card/index.vue";
import Api from "@/utils/api";

export default Vue.extend({
    name: "LoginPage",
    components: {
        RaLoginCard,
    },
    methods: {
        async authenticate() {
            console.log("test2");
            // const response = await axios;
            // .post(Api.url + "auth/login", {
            //     username: "",
            //     password: "",
            // })
            // .catch((error) => {
            //     console.log(error.response.data);
            // });
        },
    },
});
</script>