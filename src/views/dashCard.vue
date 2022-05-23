<template>
  <div>
    <div class="fixed-content">
      <!-- sidebar -->
      <dash-side />
      <div class="content-holder">
        <!-- nav-component -->
        <dash-nav />
        <!-- content -->
        <div class="content">
          <div class="intro">
            <h3>Gift Cards</h3>
            <p>
              You should be able to add GiftCards to your database from here
            </p>
          </div>
          <div class="reveal-box">
            <!-- number -->
            <p>You trade a total of:</p>
            <h1>{{ cardAmount }} GiftCards</h1>
          </div>
          <!-- Grid holding table and add new Card -->
          <div class="grid-holder">
            <div class="table-holder">
              <h3>Cards Table</h3>
              <!-- bootstrap table -->
              <table class="table table-info table-striped table-hover">
                <thead style="position: sticky; top: 0" class="table-dark">
                  <tr>
                    <th class="header" scope="col">Card name</th>
                    <th class="header" scope="col">Sell Price</th>
                    <th class="header" scope="col">Buy Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in items"
                    :key="item.cardName"
                    :id="item.cardName"
                  >
                    <td :id="item.cardName" @click="takeAction($event)">
                      {{ item.cardName }}
                    </td>
                    <td :id="item.cardName" @click="takeAction($event)">
                      {{ item.cardBuyPrice }} USD
                    </td>
                    <td :id="item.cardName" @click="takeAction($event)">
                      {{ item.cardSellPrice }} USD
                    </td>
                    <!-- Edit and Delete box -->
                    <div
                      class="action-box"
                      :id="item.cardName"
                      v-if="Boolean(selected == item.cardName)"
                    >
                      <ul>
                        <li :id="item.cardName" @click="edit($event)">Edit</li>
                        <li :id="item.cardName" @click="del($event)">Delete</li>
                      </ul>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="other-holder">
              <div class="add-card">
                <h3>{{ formHeader }}</h3>
                <b-form>
                  <b-form-group
                    id="input-group"
                    label="Card Name:"
                    label-for="input-1"
                    description="Examples : 'Apple', 'Paypal',  etc"
                  >
                    <b-form-input
                      id="input-1"
                      type="text"
                      placeholder="Enter Card Name"
                      v-model="form.cardName"
                      required
                    ></b-form-input>
                  </b-form-group>
                  <b-form-textarea
                    id="textarea"
                    v-model="form.cardDescription"
                    placeholder="Card Description ...."
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                  <div v-if="notEditing">
                    <label for="cardLogo">Card Logo</label>
                    <input
                      type="file"
                      class="form-control"
                      @change="handleUpload"
                      id="cardLogo"
                      :state="Boolean(cardLogo)"
                      placeholder="Please Upload Card logo"
                      drop-placeholder="Drop file here..."
                      description=""
                    />
                    <p class="small">
                      This is the logo of the company or firm that issues the
                      card, preferably png image.
                    </p>
                  </div>
                  <div v-if="notEditing">
                    <label for="cardImage">Card Image</label>
                    <input
                      type="file"
                      class="form-control"
                      @change="handleSecondUpload"
                      id="cardImage"
                      :state="Boolean(cardImage)"
                      placeholder="Please Upload Card Image"
                      drop-placeholder="Drop file here..."
                    />
                    <p class="small">
                      This is an Image of the card to help users have a visual
                      que of what they are about to purchase
                    </p>
                  </div>
                  <div class="form-row">
                    <b-form-group
                      id="input-group-1"
                      label="Buy Price"
                      label-for="input-1"
                      description="End Users would redeem at this price"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="form.cardSellPrice"
                        type="number"
                        placeholder="Price in USD"
                        required
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group
                      id="input-group-2"
                      label="Sell Price"
                      label-for="input-1"
                      description="End Users would sell at this price"
                    >
                      <b-form-input
                        id="input-1"
                        v-model="form.cardBuyPrice"
                        type="number"
                        placeholder="Enter Price in USD"
                        required
                      ></b-form-input>
                    </b-form-group>
                  </div>
                  <b-button
                    @click="submitCard"
                    type="submit"
                    variant="primary"
                    >{{ formCommand }}</b-button
                  >
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
  name: "dashCard",
  data() {
    return {
      formHeader: "Add New Card",
      formCommand: "Add card to database",
      selected: "",
      notEditing: true,
      items: [],
      form: {
        cardName: "",
        cardSellPrice: "",
        cardBuyPrice: "",
        cardDescription: "",
        file: "",
        img: "",
      },
      cardLogo: undefined,
      cardImage: undefined,
      cardAmount: "",
    };
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
    handleSecondUpload(e) {
      const self = this;
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = function () {
        self.form.img = reader.result;
      };
    },
    takeAction(event) {
      var selectedCard = event.target.id;
      this.selected = selectedCard;
    },
    edit(event) {
      var theItem = event.target.id;
      this.formHeader = `Currently Editing ${theItem}`;
      this.formCommand = `Update ${theItem} Data`;
      this.notEditing = false;
      var items = this.items;
      var self = this;
      for (var i = 0; i < items.length; i++) {
        if (items[i].cardName == theItem) {
          self.form.cardName = items[i].cardName;
          self.form.cardDescription = items[i].cardDescription;
          self.form.cardSellPrice = items[i].cardSellPrice;
          self.form.cardBuyPrice = items[i].cardBuyPrice;
          break;
        }
      }
    },
    del(event) {
      var theItem = event.target.id;
      if (confirm(`Are you sure you want to delete ${theItem}`)) {
        this.$store.dispatch("cards/deleteCard", theItem);
      }
    },
    submitCard() {
      this.$store.dispatch("cards/postCards", this.form);
    },
  },
  created() {
    this.$store.dispatch("cards/getCards");
    this.items = this.$store.state.cards.items;
    console.log(this.items);
    this.cardAmount = this.items.length;
  },
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
    width: 25%;
    height: 12vh;
    color: #fff;
    background-color: #023e8a;
    border-radius: 8px;
    display: flex;
    margin-top: 16px;
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
      tr {
        cursor: pointer;
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
      .add-card {
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
  .small {
    margin: 0px;
    padding: 0px;
    font-size: 14px;
    opacity: 0.95;
  }
}
</style>
