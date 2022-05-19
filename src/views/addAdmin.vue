<template>
  <div id="wrapper">
    <div class="password-block" v-if="!seeContent">
      <p>This is a restricted page, please enter password</p>
      <input type="password" placeholder="Enter Password" v-model="password" />
      <button @click="checkPassword">Proceed</button>
    </div>
    <div class="form-block" v-if="seeContent">
      <p>You are about to add an admin</p>
      <form action="#">
        <div>
          <label for="name">
            <font-awesome-icon icon="person" />
            Full Name
          </label>
          <input type="text" v-model="form.name" />
        </div>
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
        <button @click="register()">
          <font-awesome-icon icon="sign-in" /> Create Admin
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "addAdmin",
  data() {
    return {
      password: "",
      seeContent: false,
      form: {
        email: "",
        password: "",
        name: "",
      },
    };
  },
  methods: {
    checkPassword() {
      if (this.password == "12345") {
        this.seeContent = true;
      }
    },
    register() {},
  },
};
</script>

<style lang="scss" scoped>
#wrapper {
  margin-top: (100vh/4.75);
  width: 100%;
  .password-block {
    width: 300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    input {
      height: 32px;
      border-radius: 5px;
      outline: none;
      border: 1px solid #bde0fe;
      margin: 8px 0px;
    }
    button {
      height: 32px;
      border-radius: 5px;
      border: none;
      margin: 8px 0px;
      background-color: #3a86ff;
      color: #fff;
    }
  }
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
</style>
