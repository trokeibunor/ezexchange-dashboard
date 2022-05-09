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
              <h3>Coins Table</h3>
              <!-- bootstrap table -->
              <b-table striped hover :items="items"></b-table>
            </div>
            <div class="other-holder">
              <div class="add-coin">
                <h3>Add New Coin</h3>
                <b-form>
                  <b-form-group
                    id="input-group"
                    label="Coin Name:"
                    label-for="input-1"
                    description="Examples : 'Bitcoin', 'Ethereum' etc"
                  >
                    <b-form-input
                      id="input-1"
                      type="text"
                      placeholder="Enter Coin Name"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    id="input-group"
                    label="Coin Code:"
                    label-for="input-1"
                    description="Examples : 'BTC', 'ETH' etc"
                  >
                    <b-form-input
                      id="input-1"
                      type="text"
                      placeholder="Enter Coin Code"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <div>
                    <label for="coinLogo">Coin Logo</label>
                    <input
                      type="file"
                      class="form-control"
                      @change="handleUpload"
                      id="coinLogo"
                      :state="Boolean(coinLogo)"
                      placeholder="Please Upload coin logo"
                      drop-placeholder="Drop file here..."
                    />
                  </div>
                  <div class="form-row">
                    <b-form-group
                      id="input-group-1"
                      label="Email address:"
                      label-for="input-1"
                      description="This is what would appear as the Sell price to the End User"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="form.coinSellPrice"
                        type="number"
                        placeholder="Price in USD"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      id="input-group-2"
                      label="Sell Price"
                      label-for="input-1"
                      description="This is what would appear as the Buy price to the End user"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="form.coinBuyPrice"
                        type="number"
                        placeholder="Enter Price in USD"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </div>
                  <b-button type="submit" variant="primary">Submit</b-button>
                </b-form>
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
  data() {
    return {
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
      form: {
        coinName: "",
        coinCode: "",
        fetcher: `${this.coinCode}+USD`,
        coinSellPrice: "",
        coinBuyPrice: "",
      },
      coinLogo: undefined,
    };
  },
  components: {
    dashNav,
    dashSide,
  },
  methods: {
    handleUpload(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);

      reader.onload = function () {
        console.log(file);
      };
    },
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
    width: 25%;
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
    h3 {
      margin: 0px;
      padding: 0px;
      text-align: left;
    }
    .table-holder {
      table {
        width: 98%;
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
        width: 95%;
        text-align: left;
        #input-group {
          margin: 8px 0px;
        }
        input::placeholder {
          font-size: 14px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin: 4px 0px;
          width: 108%;
          #input-group-1,
          #input-group-2 {
            width: 85%;
          }
        }
        button[type="submit"] {
          width: 105%;
          outline: none;
          border: none;
          height: 38px;
          border-radius: 8px;
          background-color: #0077b6;
          color: white;
          margin-top: 16px;
        }
      }
    }
  }
}
</style>
