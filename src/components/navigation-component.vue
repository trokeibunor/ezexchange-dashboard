<template>
  <!-- nav component -->
  <nav>
    <div class="first">
      <button>
        <!-- Hamburger image -->
        <img
          src="../assets/images/dashHam.svg
          "
          alt=""
          srcset=""
        />
      </button>
      <h4>Admin Dashboard</h4>
    </div>
    <div class="second">
      <h4 @click="logBox">{{ name }}</h4>
      <div class="logBox" v-if="logger">
        <a @click="logOut">Log Out</a>
      </div>
      <!-- Ez logo -->
      <img src="../assets/images/logo_icon.svg" alt="" srcset="" />
    </div>
  </nav>
</template>

<script>
export default {
  name: "dashNav",
  data() {
    return {
      name: "",
      logger: false,
    };
  },
  methods: {
    logBox() {
      this.logger = !this.logger;
    },
    logOut() {
      this.$store.dispatch("admin/logOut");
    },
  },
  computed: {
    nameInit() {
      return this.name;
    },
  },
  created() {
    this.$store.state.admin.name;
    this.name = this.$store.state.admin.name;
  },
  beforeMount() {
    this.nameInit;
  },
};
</script>

<style lang="scss" scoped>
nav {
  display: grid;
  width: 100%;
  margin: 0px;
  padding: 0px;
  height: 48px;
  grid-template-columns: 1fr 1fr;
  justify-content: end;
  align-items: center;
  .first {
    justify-self: flex-start;
    button {
      border: none;
      outline: none;
      cursor: pointer;
      background: rgba(255, 255, 255, 0);
      margin-right: 4px;
    }
  }
  .second {
    justify-self: flex-end;
    img {
      width: 42px;
      height: 42px;
      max-width: 42px;
      max-height: 42px;
      margin-left: 4px;
    }
    h4 {
      cursor: pointer;
    }
    h4:hover {
      color: #3a86ff;
    }
    .logBox {
      position: relative;
      z-index: 10;
      top: 32px;
      right: 10px;
      background: #fff;
      padding: 8px 16px;
      border-radius: 4px;
      box-shadow: 0px 1px 4px #3a85ff38;
      height: fit-content;
      a {
        padding: 0px;
        margin: 0px;
        height: fit-content;
        cursor: pointer;
      }
      a:hover {
        color: #3a86ff;
      }
    }
  }
  div {
    display: flex;
    flex-direction: row;
    h4 {
      line-height: 44px;
    }
    h4,
    h5,
    button {
      margin: 0px;
    }
  }
}
</style>
