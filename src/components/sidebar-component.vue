<template>
  <aside id="sidebar">
    <div class="top-section">
      <!-- Full logo -->
      <img src="../assets/images/Logo.svg" alt="" srcset="" />
    </div>
    <ul class="nav-list">
      <router-link to="/">
        <img src="../assets/images/dash_icon.svg" alt="" srcset="" />
        Dashboard
      </router-link>
      <router-link to="/users"
        ><img src="../assets/images/dash_users.svg" alt="" srcset="" />
        Users
      </router-link>
      <router-link to="/coin">
        <img src="../assets/images/dash_coin.svg" alt="" srcset="" />Coins
      </router-link>
      <router-link to="/card">
        <img src="../assets/images/dash_card.svg" alt="" srcset="" />
        Cards
      </router-link>
      <router-link to="/articles"
        ><img src="../assets/images/dash_art.svg" alt="" srcset="" />
        Articles</router-link
      >
      <router-link to="#"
        ><img src="../assets/images/dash_tawk.svg" alt="" srcset="" /> Tawk
        Dashboard</router-link
      >
    </ul>
  </aside>
</template>

<script>
export default {
  name: "dashSide",
};
</script>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #023e8a;
  .top-section {
    margin: 0;
    padding: 0px;
    background-color: #ade8f4;
    height: 10vh;
    width: 100%;
    img {
      margin: 4% auto;
    }
  }
  .nav-list {
    width: 100%;
    margin: 2rem 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      text-align: left;
      margin: 8px 0px;
      padding: 8px;
      width: 50%;
      text-decoration: none;
      color: #ffff;
      font-size: 20px;
      display: flex;
      align-content: center;
      img {
        padding-right: 8px;
      }
    }
    :active {
      background: #ade8f4;
    }
  }
}
</style>
