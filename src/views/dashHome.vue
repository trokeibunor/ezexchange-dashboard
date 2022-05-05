<template>
  <div>
    <div class="fixed-content">
      <!-- sidebar -->
      <dash-side />
      <div class="content-holder">
        <div class="dash-hero">
          <!-- nav component -->
          <dash-nav />
          <!-- Layer component -->
          <div class="layer">
            <div class="text-holder">
              <h2>Welcome to the Ezexchange Admin Dashboard</h2>
              <p>
                You would be able to edit post, view users, add token and remove
                token.
              </p>
            </div>
          </div>
        </div>
        <div id="content">
          <router-link to="#" style="background-color: #90e0ef">
            <!-- svg image -->
            <img
              src="../../assets/images/dashboard/coins_img.svg"
              alt=""
              srcset=""
            />
            <h4>Coins</h4>
          </router-link>
          <router-link to="#" style="background-color: #0077b6">
            <img
              src="../../assets/images/dashboard/card_img.svg"
              alt=""
              srcset=""
            />
            <!-- svg image -->
            <h4>Card</h4>
          </router-link>
          <router-link to="#" style="background-color: #219ebc">
            <!-- svg image -->
            <img
              src="../../assets/images/dashboard/article_img.svg"
              alt=""
              srcset=""
            />
            <h4>Articles</h4>
          </router-link>
          <router-link to="#" style="background-color: #023e8a">
            <!-- svg image -->
            <img
              src="../../assets/images/dashboard/resources_img.svg"
              alt=""
              srcset=""
            />
            <h4>Resouces</h4>
          </router-link>
          <router-link to="#" style="background-color: #a9d6e5">
            <!-- svg image -->
            <img
              src="../../assets/images/dashboard/users_img.svg"
              alt=""
              srcset=""
            />
            <h4>Users</h4>
          </router-link>
          <router-link to="#" style="background-color: #014f86">
            <!-- svg image -->
            <img
              src="../../assets/images/dashboard/tawk_img.svg"
              alt=""
              srcset=""
            />
            <h4>Go to tawk</h4>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dashNav from "../../components/dashboardComponents/navigation-component.vue";
import dashSide from "../../components/dashboardComponents/sidebar-component.vue";
export default {
  name: "dashboardHome",
  components: {
    dashNav,
    dashSide,
  },
};
</script>

<style lang="scss" scoped>
.fixed-content {
  display: grid;
  grid-template-columns: 20% 1fr;
  width: 100%;
}
.dash-hero {
  width: 100%;
  height: 30vh;
  .layer {
    width: 95%;
    margin: 8px auto;
    border-radius: 8px;
    height: 100%;
    background-color: #100d5ef3;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    .text-holder {
      margin-left: 16px;
      color: #fff;
      text-align: left;
      p {
        width: 70%;
      }
    }
  }
}
#content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  width: 95%;
  margin: 5rem auto 0rem;
  height: auto;
  grid-gap: 16px;
  a {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    img {
      width: 125px;
      height: 125px;
      max-height: 125px;
      max-height: 125px;
      min-height: 125px;
      min-width: 125px;
      margin: 8px auto 0px auto;
    }
  }
  :hover {
    box-shadow: 0px 4px 10px -4px #100d5ec5;
    img {
      box-shadow: none;
    }
    h4 {
      box-shadow: none;
    }
  }
}
</style>
