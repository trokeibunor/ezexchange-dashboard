<template>
  <aside id="sidebar">
    <div class="top-section">
      <!-- Full logo -->
      <img src="../../assets/images/Logo.svg" alt="" srcset="" />
    </div>
    <ul class="nav-list">
      <router-link to="/dashboard">
        <img
          src="../../assets/images/dashboard/dash_icon.svg"
          alt=""
          srcset=""
        />
        Dashboard
      </router-link>
      <router-link to="/dashboard/users"
        ><img
          src="../../assets/images/dashboard/dash_users.svg"
          alt=""
          srcset=""
        />
        Users
      </router-link>
      <router-link to="/dashboard/coin">
        <img
          src="../../assets/images/dashboard/dash_coin.svg"
          alt=""
          srcset=""
        />Coins
      </router-link>
      <router-link to="/dashboard/card">
        <img
          src="../../assets/images/dashboard/dash_card.svg"
          alt=""
          srcset=""
        />
        Cards
      </router-link>
      <router-link to="/dashboard/articles"
        ><img
          src="../../assets/images/dashboard/dash_art.svg"
          alt=""
          srcset=""
        />
        Articles</router-link
      >
      <router-link to="/dashboard/articles"
        ><img
          src="../../assets/images/dashboard/dash_tawk.svg"
          alt=""
          srcset=""
        />
        Tawk Dashboard</router-link
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
  background-color: #100d5e;
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
