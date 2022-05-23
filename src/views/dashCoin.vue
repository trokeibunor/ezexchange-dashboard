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
            <h1>{{ coinAmount }} coins</h1>
          </div>
          <!-- grid holding table and add new coin -->
          <div class="grid-holder">
            <div class="table-holder">
              <h3>Coins Table</h3>
              <!-- Normal bootstrap table -->
              <table class="table table-info table-striped table-hover">
                <thead style="position: sticky; top: 0" class="table-dark">
                  <tr>
                    <th class="header" scope="col">Code</th>
                    <th class="header" scope="col">Coin name</th>
                    <th class="header" scope="col">Sell Price</th>
                    <th class="header" scope="col">Buy Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in items"
                    :key="item.coinCode"
                    :id="item.coinCode"
                  >
                    <td :id="item.coinCode" @click="takeAction($event)">
                      {{ item.coinCode }}
                    </td>
                    <td :id="item.coinCode" @click="takeAction($event)">
                      {{ item.coinName }}
                    </td>
                    <td :id="item.coinCode" @click="takeAction($event)">
                      {{ item.coinBuyPrice }} USD
                    </td>
                    <td :id="item.coinCode" @click="takeAction($event)">
                      {{ item.coinSellPrice }} USD
                    </td>
                    <!-- Edit and Delete box -->
                    <div
                      class="action-box"
                      :id="item.coinCode"
                      v-if="Boolean(selected == item.coinCode)"
                    >
                      <ul>
                        <li :id="item.coinCode" @click="edit($event)">Edit</li>
                        <li :id="item.coinCode">Delete</li>
                      </ul>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="other-holder">
              <div class="add-coin">
                <h3>{{ formHeader }}</h3>
                <b-form>
                  <b-form-group
                    id="input-group"
                    label="Coin Name:"
                    label-for="input-1"
                    description="Examples : 'Bitcoin', 'Ethereum' etc"
                  >
                    <b-form-input
                      type="text"
                      placeholder="Enter Coin Name"
                      v-model="form.coinName"
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
                      type="text"
                      placeholder="Enter Coin Code"
                      required
                      v-model="form.coinCode"
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
                      v-if="notEditing"
                    />
                  </div>
                  <div class="form-row">
                    <b-form-group
                      id="input-group-1"
                      label="Buy Price"
                      label-for="input-1"
                      description="This is what would appear as the Sell price to the End User"
                    >
                      <b-form-input
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
                        v-model="form.coinBuyPrice"
                        type="number"
                        placeholder="Enter Price in USD"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </div>
                  <button @click="submitCoin" type="submit" variant="primary">
                    {{ formCommand }}
                  </button>
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
      selected: "",
      formHeader: "Add New Coin",
      formCommand: "Add coin to database",
      notEditing: true,
      items: [],
      coinAmount: "",
      form: {
        coinName: "",
        coinCode: "",
        coinSellPrice: "",
        coinBuyPrice: "",
        file: "",
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
      const self = this;
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = function () {
        self.form.file = reader.result;
      };
    },
    submitCoin() {
      this.$store.dispatch("coins/postCoins", this.form);
    },
    takeAction(event) {
      var selectedCoin = event.target.id;
      this.selected = selectedCoin;
    },
    edit(event) {
      var theItem = event.target.id;
      this.formHeader = `Currently Editing ${theItem}`;
      this.formCommand = `Update ${theItem} Data`;
      this.notEditing = false;
      var items = this.items;
      var self = this;
      for (var i = 0; i < items.length; i++) {
        if (items[i].coinCode == theItem) {
          self.form.coinCode = items[i].coinCode;
          self.form.coinName = items[i].coinName;
          self.form.coinSellPrice = items[i].coinSellPrice;
          self.form.coinBuyPrice = items[i].coinBuyPrice;
          break;
        }
      }
    },
  },
  computed: {
    initializerItems() {
      return this.items;
    },
    initializerNumber() {
      return this.coinAmount;
    },
  },
  created() {
    this.$store.dispatch("coins/getCoins");
    this.items = this.$store.state.coins.items;
    console.log(this.items);
    this.coinAmount = this.items.length;
  },
  beforeMount() {
    this.initializerItems;
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
    background-color: #023e8a;
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
      width: 95%;
      height: 300px;
      overflow: auto;
      .header {
        position: sticky;
        top: 0;
      }
      .action-box {
        position: relative;
        right: 20;
        border-radius: 8px;
        box-shadow: 0px 1px 4px #0076b63a;
        text-align: left;
        ul {
          list-style: none;
          margin: 0px;
          padding: 0px;
          li {
            line-height: 140%;
            cursor: pointer;
          }
          li:hover {
            color: #0077b6;
          }
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
