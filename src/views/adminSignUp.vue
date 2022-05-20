<template>
  <div id="wrapper">
    <img src="../assets/images/Logo.svg" alt="" srcset="" />
    <h4>Admin Dashboard Login</h4>
    <div class="signupForm">
      <form action="#">
        <div>
          <label for="email">
            <font-awesome-icon icon="envelope" />
            Email
          </label>
          <input type="email" v-model="form.email" />
        </div>
        <div>
          <label for="password">
            <font-awesome-icon icon="lock" />
            Password
          </label>
          <input type="password" v-model="form.password" />
        </div>
        <button @click="login">
          <font-awesome-icon icon="sign-in" /> Login to Dashboard
        </button>
      </form>
      <p class="small">
        In case of forgotten password please contact developer
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login(e) {
      this.$store.dispatch("admin/login", this.form);
      e.preventDefault();
    },
  },
};
</script>

<style lang="scss" scoped>
#wrapper {
  margin-top: (100vh/4.5);
  width: 100%;
  height: auto;
  .signupForm {
    margin: auto;
    width: 60%;
    height: auto;
    form {
      display: flex;
      flex-direction: column;
      width: 50%;
      align-items: center;
      height: auto;
      margin: auto;
      div {
        display: flex;
        flex-direction: column;
        label {
          text-align: left;
        }
        input {
          margin: 8px 0px;
          padding: 8px 16px;
          border-radius: 5px;
          outline: none;
          border: 1px solid #bde0fe;
        }
      }
      button {
        margin: 8px 0px;
        color: #fff;
        padding: 8px 38px;
        border-radius: 5px;
        border: none;
        background-color: #3a86ff;
        cursor: pointer;
      }
      button:hover {
        box-shadow: 0px 2px 4px #bde0fe;
      }
    }
  }
}
</style>
