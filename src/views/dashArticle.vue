<template>
  <div>
    <div class="fixed-content">
      <!-- sidebar -->
      <dash-side />
      <div class="content-holder">
        <!-- nav-component -->
        <dash-nav />
        <div id="content-holder">
          <!-- Auxillary side bar -->
          <div class="aux-sidebar">
            <div class="mover">
              <font-awesome-icon
                icon="arrow-left"
                @click="reduceMenu"
                v-show="menu"
              />
              <font-awesome-icon
                icon="arrow-right"
                id="rightArrow"
                @click="openMenu"
                v-show="!menu"
              />
            </div>
            <ul class="aux-menu" v-show="menu">
              <li
                class="aux-item"
                id="article"
                v-show="menu"
                :class="{ active: isActive }"
                @click="
                  currentContent = true;
                  changeActive();
                "
              >
                Articles
              </li>
              <li
                class="aux-item"
                id="resources"
                v-show="menu"
                :class="{ active: !isActive }"
                @click="
                  currentContent = false;
                  changeActive();
                "
              >
                Resource
              </li>
            </ul>
          </div>
          <!-- content -->
          <div class="content">
            <!-- Articles Content -->
            <div id="article_content" v-if="currentContent">
              <div id="article_intro">
                <h2>Articles</h2>
                <p>You can add edit and delete articles from this section</p>
              </div>
              <button class="addNew" @click="openArticle">
                {{ articleButton }}
              </button>
              <div id="article-table" v-show="!articleFormContent">
                <h4>Article List</h4>
                <!-- Bootstrap form -->
                <!-- <b-table striped hover :items="article"></b-table> -->
                <table class="table table-info table-striped table-hover">
                  <thead style="position: sticky; top: 0" class="table-dark">
                    <tr>
                      <th class="header" scope="col">Title</th>
                      <th class="header" scope="col">Image</th>
                      <th class="header" scope="col">Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in article"
                      :key="item.title"
                      :id="item.title"
                    >
                      <td :id="item.title" @click="takeActionArt($event)">
                        {{ item.title }}
                      </td>
                      <td :id="item.title" @click="takeActionArt($event)">
                        <img
                          :src="item.link"
                          style="max-width: 68px; max-height: 48px"
                          alt=""
                        />
                      </td>
                      <td :id="item.title" @click="takeActionArt($event)">
                        {{ item.group }}
                      </td>
                      <!-- Edit and Delete box -->
                      <div
                        class="action-box"
                        :id="item.title"
                        v-if="Boolean(selectedArticle == item.title)"
                      >
                        <ul>
                          <li :id="item.coinCode" @click="editArt($event)">
                            Edit
                          </li>
                          <li :id="item.coinCode" @click="delArt($event)">
                            Delete
                          </li>
                        </ul>
                      </div>
                    </tr>
                  </tbody>
                </table>
                <!-- End of Bootstrap form -->
              </div>
              <div id="add-article" v-show="articleFormContent">
                <form
                  @submit.prevent="submitAriticle"
                  action="#"
                  id="article-form"
                >
                  <h4>Ariticle Form</h4>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Title"
                    v-model="articleForm.title"
                  />
                  <input
                    type="file"
                    class="form-control"
                    @change="handleArtImgUpload"
                    :state="Boolean(articleImg)"
                  />
                  <b-form-group
                    label="Article Group"
                    v-slot="{ ariaDescribedby }"
                  >
                    <b-form-radio
                      id="radio"
                      v-model="articleForm.selectedGroup"
                      :aria-describedby="ariaDescribedby"
                      name="selector"
                      value="featured"
                      >Featured Article</b-form-radio
                    >
                    <b-form-radio
                      v-model="articleForm.selectedGroup"
                      :aria-describedby="ariaDescribedby"
                      name="selector"
                      value="annoucement"
                      >Annoucement</b-form-radio
                    >
                    <b-form-radio
                      v-model="articleForm.selectedGroup"
                      :aria-describedby="ariaDescribedby"
                      name="selector"
                      value="highlight"
                      >Highlights</b-form-radio
                    >
                  </b-form-group>
                  <QuillEditor
                    theme="snow"
                    v-model:content="articleForm.content"
                  />
                  <button id="submitArticle">Submit Ariticle</button>
                </form>
              </div>
            </div>
            <!-- Resources Content -->
            <div id="resources_content" v-else>
              <div id="resources_intro">
                <h2>Resources</h2>
                <p>You can add edit and delete Resources from this section</p>
              </div>
              <button class="addNew" @click="openResource">
                {{ resourceButton }}
              </button>
              <div id="article-table" v-show="!resourceFormContent">
                <h4>Resources List</h4>
                <b-table striped hover :items="resource"></b-table>
              </div>
              <div id="add-article" v-show="resourceFormContent">
                <form action="#" id="resource-form">
                  <h4>Resource Form</h4>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Title"
                    v-model="resourceForm.title"
                  />
                  <input type="file" class="form-control" />
                  <QuillEditor
                    theme="snow"
                    v-model:content="resourceForm.content"
                    contentType="html"
                  />
                  <button id="submitArticle" @click="addResource">
                    Add Resource
                  </button>
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
import dashSide from "../components/sidebar-component.vue";
import dashNav from "../components/navigation-component.vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
export default {
  name: "dashAriticle",
  data() {
    return {
      selectedArticle: "",
      currentContent: true,
      isActive: true,
      articleButton: "Add New",
      resourceButton: "Add New",
      menu: true,
      articleImg: undefined,
      article: [],
      articleForm: {
        title: "New Title",
        file: "",
        content: "I'm checking some content",
        selectedGroup: "",
        timeToRead: "",
      },
      articleFormContent: false,
      resource: [],
      resourceForm: {
        title: "New Title",
        file: "",
        content: "",
      },
      resourceFormContent: false,
    };
  },
  components: {
    dashSide,
    dashNav,
    QuillEditor,
  },
  methods: {
    takeActionArt(event) {
      var selected = event.target.id;
      this.selectedArticle = selected;
    },
    editArt(event) {
      console.log(event);
    },
    submitAriticle() {
      var select = this.articleForm.content;
      var selected = { ...select };
      var cfg = {};
      var converter = new QuillDeltaToHtmlConverter(selected.ops, cfg);
      var html = converter.convert();
      var content = html;
      // Calculate words per minute
      const text = content;
      const wpm = 225;
      const words = text.trim().split(/\s+/).length;
      const time = Math.ceil(words / wpm);
      // add to data
      this.articleForm.timeToRead = time;
      this.articleForm.content = content;
      // console.log(content);
      // console.log(text);
      console.log(this.articleForm.content);
      this.$store.dispatch("articles/addArticle", this.articleForm);
    },
    addResource() {},
    reduceMenu() {
      var aux_sidebar = document.querySelector(".aux-sidebar");
      var aux_menu = document.querySelector(".aux-menu");
      var content_holder = document.querySelector("#content-holder");
      content_holder.style.gridTemplateColumns = "0% 1fr";
      aux_menu.style.width = "0%";
      aux_sidebar.style.width = "0%";
      this.menu = false;
    },
    openMenu() {
      var aux_sidebar = document.querySelector(".aux-sidebar");
      var aux_menu = document.querySelector(".aux-menu");
      var content_holder = document.querySelector("#content-holder");
      content_holder.style.gridTemplateColumns = "20% 1fr";
      aux_menu.style.width = "100%";
      aux_sidebar.style.width = "100%";
      this.menu = true;
    },
    openArticle() {
      this.articleFormContent = !this.articleFormContent;
      if (this.articleButton == "Go Back") {
        this.articleButton = "Add New";
      } else if (this.articleButton == "Add New") {
        this.articleButton = "Go Back";
      }
    },
    openResource() {
      this.resourceFormContent = !this.resourceFormContent;
      if (this.resourceButton == "Go Back") {
        this.resourceButton = "Add New";
      } else if (this.resourceButton == "Add New") {
        this.resourceButton = "Go Back";
      }
    },
    // Handle article image upload
    handleArtImgUpload(e) {
      const self = this;
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = function () {
        console.log(reader.result);
        self.articleForm.file = reader.result;
      };
    },
    changeActive() {
      this.isActive = this.currentContent;
    },
  },
  computed: {
    initializerArt() {
      return this.article;
    },
    initializerRes() {
      return this.resource;
    },
  },
  beforeCreate() {
    // this.initializerRes();
    // this.initializerArt();
  },
  created() {
    this.$store.dispatch("articles/getArticles");
    this.article = this.$store.state.articles.articles;
    console.log(this.article);
  },
};
</script>

<style lang="scss" scoped>
h1,
h2,
h3,
h4,
p,
li {
  margin: 0px;
  padding: 0px;
}
.fixed-content {
  display: grid;
  grid-template-columns: 20% 1fr;
  width: 100%;
  min-height: 100vh;
}
.addNew {
  background-color: #fff;
  color: #111;
  padding: 8px 16px;
  border-radius: 5px;
  border: 1px solid #118ab2;
  cursor: pointer;
  margin-bottom: 16px;
}
#content-holder {
  display: grid;
  grid-template-columns: 20% 1fr;
  width: 100%;
  text-align: left;
}
.aux-sidebar {
  width: 100%;
  background-color: #a2d2ff;
  min-height: 100vh;
  .mover {
    padding-right: 8px;
    margin-bottom: 8px;
    height: 32px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    #rightArrow {
      position: relative;
      left: 16px;
      background-color: #fff;
      border-radius: 50px;
      z-index: 10;
      box-shadow: 0px 4px 10px 4px #11111128;
      padding: 8px;
    }
  }
  .aux-menu {
    text-align: left;
    list-style: none;
    width: 100%;
    margin: 0px;
    li {
      line-height: 140%;
      font-size: 18px;
      font-weight: 500;
      margin: 0px;
      padding: 8px;
    }
    :hover {
      background-color: #fff;
    }
    li.active {
      background-color: #fff;
    }
  }
}
.content {
  padding: 8px;
}
#article_content {
  #article_intro {
    margin-bottom: 16px;
  }
  #article-form {
    width: 80%;
    margin: 16px auto;
    input,
    fieldset {
      margin: 8px 0px;
    }
    input[type="text"],
    input[type="file"] {
      width: 96%;
    }
    #submitArticle {
      border: none;
      border-radius: 5px;
      padding: 8px 16px;
      background-color: #118ab2;
      color: white;
      margin-top: 16px;
    }
  }
}
.action-box {
  position: absolute;
  right: 0%;
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
#resources_content {
  #resources_intro {
    margin-bottom: 16px;
  }
}
#resource-form {
  width: 80%;
  margin: 16px auto;
  input {
    margin: 8px 0px;
  }
  input[type="text"],
  input[type="file"] {
    width: 96%;
  }
}
#submitArticle {
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  background-color: #118ab2;
  color: white;
  margin-top: 16px;
}
active {
  background-color: #fff;
}
</style>
