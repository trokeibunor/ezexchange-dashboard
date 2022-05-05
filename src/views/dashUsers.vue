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
            <h3>Users</h3>
            <p>The table below shows the current list of users</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>DisplayName</th>
                <th>Email</th>
                <th>Action(s)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#103493483984983</td>
                <td>Okeibunor Emmanuel</td>
                <td>okeibunoremma@gmail.com</td>
                <td><button>Remove</button></td>
              </tr>
              <tr>
                <td>#103493483984983</td>
                <td>Okeibunor Emmanuel</td>
                <td>okeibunoremma@gmail.com</td>
                <td><button>Remove</button></td>
              </tr>
              <tr>
                <td>#103493483984983</td>
                <td>Okeibunor Emmanuel</td>
                <td>okeibunoremma@gmail.com</td>
                <td><button>Remove</button></td>
              </tr>
              <tr>
                <td>#103493483984983</td>
                <td>Okeibunor Emmanuel</td>
                <td>okeibunoremma@gmail.com</td>
                <td><button>Remove</button></td>
              </tr>
              <tr>
                <td>#103493483984983</td>
                <td>Okeibunor Emmanuel</td>
                <td>okeibunoremma@gmail.com</td>
                <td><button>Remove</button></td>
              </tr>
              <tr>
                <td>#103493483984983</td>
                <td>Okeibunor Emmanuel</td>
                <td>okeibunoremma@gmail.com</td>
                <td><button>Remove</button></td>
              </tr>
              <tr>
                <td>#103493483984983</td>
                <td>Okeibunor Emmanuel</td>
                <td>okeibunoremma@gmail.com</td>
                <td><button>Remove</button></td>
              </tr>
              <tr>
                <td>#103493483984983</td>
                <td>Okeibunor Emmanuel</td>
                <td>okeibunoremma@gmail.com</td>
                <td><button>Remove</button></td>
              </tr>
              <tr>
                <td>#103493483984983</td>
                <td>Okeibunor Emmanuel</td>
                <td>okeibunoremma@gmail.com</td>
                <td><button>Remove</button></td>
              </tr>
              <tr>
                <td>#103493483984983</td>
                <td>Okeibunor Emmanuel</td>
                <td>okeibunoremma@gmail.com</td>
                <td><button>Remove</button></td>
              </tr>
              <tr>
                <td>#103493483984983</td>
                <td>Okeibunor Emmanuel</td>
                <td>okeibunoremma@gmail.com</td>
                <td><button>Remove</button></td>
              </tr>
              <tr>
                <td>#103493483984983</td>
                <td>Okeibunor Emmanuel</td>
                <td>okeibunoremma@gmail.com</td>
                <td><button>Remove</button></td>
              </tr>
              <tr>
                <td>#103493483984983</td>
                <td>Okeibunor Emmanuel</td>
                <td>okeibunoremma@gmail.com</td>
                <td><button>Remove</button></td>
              </tr>
              <tr>
                <td>#103493483984983</td>
                <td>Okeibunor Emmanuel</td>
                <td>okeibunoremma@gmail.com</td>
                <td><button>Remove</button></td>
              </tr>
              <tr>
                <td>#103493483984983</td>
                <td>Okeibunor Emmanuel</td>
                <td>okeibunoremma@gmail.com</td>
                <td><button>Remove</button></td>
              </tr>
              <tr>
                <td>#103493483984983</td>
                <td>Okeibunor Emmanuel</td>
                <td>okeibunoremma@gmail.com</td>
                <td><button>Remove</button></td>
              </tr>
              <tr>
                <td>#103493483984983</td>
                <td>Okeibunor Emmanuel</td>
                <td>okeibunoremma@gmail.com</td>
                <td><button>Remove</button></td>
              </tr>
              <tr>
                <td>#103493483984983</td>
                <td>Okeibunor Emmanuel</td>
                <td>okeibunoremma@gmail.com</td>
                <td><button>Remove</button></td>
              </tr>
              <tr>
                <td>#103493483984983</td>
                <td>Okeibunor Emmanuel</td>
                <td>okeibunoremma@gmail.com</td>
                <td><button>Remove</button></td>
              </tr>
              <tr>
                <td>#103493483984983</td>
                <td>Okeibunor Emmanuel</td>
                <td>okeibunoremma@gmail.com</td>
                <td><button>Remove</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dashNav from "../components/navigation-component.vue";
import dashSide from "../components/sidebar-component.vue";

export default {
  name: "dashUsers",
  data() {
    return {
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
        { age: 38, first_name: "Jami", last_name: "Carney" },
      ],
    };
  },
  components: {
    dashNav,
    dashSide,
  },
};
</script>

<style lang="scss" scoped>
// @import "bootstrap/dist/css/bootstrap.css";
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
  table {
    width: 100%;
    height: 90vh;
    border-radius: 8px;
    border: 1px solid #ccc;
    th,
    td {
      height: 32px;
    }
    thead {
      background: #ccc;
    }
    tbody {
      height: 90vh;
      overflow: scroll;
    }
  }
}
</style>
