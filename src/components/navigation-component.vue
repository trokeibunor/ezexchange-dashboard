<template>
  <!-- nav component -->
  <nav>
    <div class="first">
      <button>
        <!-- Hamburger image -->
        <img
          src="../../assets/images/dashboard/dashHam.svg
          "
          alt=""
          srcset=""
        />
      </button>
      <h4>Admin Dashboard</h4>
    </div>
    <div class="second">
      <h4>Okeibunor Emmanuel</h4>
      <!-- Ez logo -->
      <img src="../../assets/images/dashboard/logo_icon.svg" alt="" srcset="" />
    </div>
  </nav>
</template>

<script>
export default {
  name: "dashNav",
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
