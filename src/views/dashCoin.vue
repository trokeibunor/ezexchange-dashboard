<template>
  <div>
    <div class="fixed-content">
      <!-- sidebar -->
      <dash-side />
      <div class="content-holder">
        <!-- nav component -->
        <dash-nav />
        <!-- content -->
        <div class="content">
          <div class="intro">
            <h3>Coins</h3>
            <p>You should be able to add coins to your database from here</p>
          </div>
          <div class="reveal-box">
            <!-- number-->
            <p>You trade a total of:</p>
            <h1>23 coins</h1>
          </div>
          <!-- grid holding table and add new coin -->
          <div class="grid-holder">
            <div class="table-holder">
              <table>
                <thead>
                  <tr>
                    <th>Coin Name</th>
                    <th>Coin Code</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bitcoin</td>
                    <td>BTC</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="other-holder">
              <div class="add-coin">
                <form id="addCoin">
                  <div class="form-control">
                    <input type="text" name="coinName" id="coinName" />
                  </div>
                  <div class="form-control">
                    <input type="text" name="coinCode" id="coinCode" />
                  </div>
                  <div class="form-control">
                    <input type="file" name="coinLogo" id="coinLogo" />
                  </div>
                  <div class="form-row">
                    <div class="form-control">
                      <input type="number" name="sellPrice" id="sellPrice" />
                    </div>
                    <div class="form-control">
                      <input type="number" name="sellPrice" id="sellPrice" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dashNav from "../components/navigation-component.vue";
import dashSide from "../components/sidebar-component.vue";
export default {
  name: "dashCoin",
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
  min-height: 100vh;
}
.content {
  width: 95%;
  margin: 1px auto;
  .intro {
    text-align: left;
    h3,
    p {
      margin: 4px;
    }
  }
  .reveal-box {
    width: 100%;
    height: 12vh;
    color: #fff;
    background-color: #03045e;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    p,
    h1 {
      margin: 0px;
      padding-left: 32px;
    }
  }
  .grid-holder {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    .table-holder,
    .other-holder {
      width: 100%;
      margin-top: 1rem;
    }
    .table-holder {
      table {
        width: 100%;
        th,
        td {
          height: 32px;
          border-radius: 8px;
        }
        thead {
          background-color: #0077b6;
          color: #fff;
        }
      }
    }
    .other-holder {
      .add-coin {
        background-color: #0077b6;
        width: 100%;
        #addCoin {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}
</style>
