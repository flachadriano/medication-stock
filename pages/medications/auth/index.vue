<template>
  <form @submit.prevent="onSubmit">
    <v-text-field v-model="email" label="email" type="email"
      >E-Mail Address</v-text-field
    >
    <v-text-field v-model="password" label="password" type="password"
      >Password</v-text-field
    >
    <v-btn class="blue" type="submit">
      {{ isLogin ? "Login" : "Sign Up" }}
    </v-btn>
    <v-btn
      type="button"
      btn-style="inverted"
      style="margin-left: 10px"
      @click="isLogin = !isLogin"
      >Switch to {{ isLogin ? "Signup" : "Login" }}
    </v-btn>
  </form>
</template>

<script>
export default {
  name: "AdminAuthPage",
  data() {
    return {
      isLogin: true,
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("authenticateUser", {
          isLogin: this.isLogin,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push("/medications");
        });
    },
  },
};
</script>