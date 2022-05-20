<template>
  <router-view />
</template>
<script>
export default {
  created() {
    var adminDetail = this.$store.state.admin;
    adminDetail.name = localStorage.getItem("adminName");
    adminDetail.email = localStorage.getItem("adminEmail");
    adminDetail.loggedIn = localStorage.getItem("loggedIn");
    if (
      adminDetail.loggedIn == false ||
      adminDetail == null ||
      adminDetail.loggedIn == "false"
    ) {
      this.$router.push("/signUp");
    }
  },
};
</script>
<style lang="scss">
body {
  margin: 0px;
}
#app {
  font-family: "Source Sans Pro", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
}
.container {
  width: 90%;
  margin: 0px auto;
}
.container-fluid {
  overflow: hidden;
  width: 100%;
  padding: 0px;
  margin: 0px;
}
</style>
