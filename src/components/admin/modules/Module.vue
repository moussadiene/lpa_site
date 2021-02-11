<template>
  <div>
    <main id="main" class="margin-top">
      <!-- ======= Breadcrumbs ======= -->
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
          <ol>
            <li><router-link to="/">Accueil</router-link></li>
            <li>Modules</li>
          </ol>
          <h2>Gestion des modules d'enquetes</h2>
          <br />
        </div>
      </section>

      <section id="pricing" class="pricing">
        <div class="container aos-init aos-animate" data-aos="fade-up">
          <addModules></addModules>
          <div class="row">
            <div
              class="col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="box featured">
                <div class="flex-row-between">
                  <h3>Habitation</h3>
                  <span>
                    <a href="#" class="btn btn-sm btn-info"
                      ><b-icon-pencil></b-icon-pencil>
                    </a>
                    <a href="#" class="btn btn-sm btn-danger"
                      ><b-icon-trash></b-icon-trash>
                    </a>
                  </span>
                </div>

                <hr border="5" />
                <ul>
                  <li>
                    <i class="bx bx-check"></i>
                    ec feugiat nisl pretiumNec feugiat nisl pretiumNec feugiat nisl
                    pretium
                    <p class="flex-row flex-center">
                      <v-button type="btn" class="btn btn-sm color-blue"
                        ><b-icon-pencil></b-icon-pencil>
                      </v-button>
                      <v-button type="btn" class="btn btn-sm color-red"
                        ><b-icon-trash></b-icon-trash>
                      </v-button>
                    </p>
                    <hr />
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    Nec feugiat nisl pretiumNec feugiat nisl pretiumNec feugiat nisl
                    pretium
                    <p class="flex-row flex-right">
                      <v-button type="btn" class="btn btn-sm color-blue"
                        ><b-icon-pencil></b-icon-pencil>
                      </v-button>
                      <v-button type="btn" class="btn btn-sm color-red"
                        ><b-icon-trash></b-icon-trash>
                      </v-button>
                    </p>
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    Nec feugiat nisl pretiumNec feugiat nisl pretiumNec feugiat nisl
                    pretium
                    <p class="flex-row flex-left">
                      <v-button type="btn" class="btn btn-sm color-blue"
                        ><b-icon-pencil></b-icon-pencil>
                      </v-button>
                      <v-button type="btn" class="btn btn-sm color-red"
                        ><b-icon-trash></b-icon-trash>
                      </v-button>
                    </p>
                  </li>
                </ul>
                <div class="text-center">
                  <a href="#" class="btn btn-primary btn-sm">Ajouter</a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="box featured">
                <div class="flex-row-between">
                  <h3>Habitation</h3>
                  <span>
                    <a href="#" class="btn btn-sm btn-info"
                      ><b-icon-pencil></b-icon-pencil>
                    </a>
                    <a href="#" class="btn btn-sm btn-danger"
                      ><b-icon-trash></b-icon-trash>
                    </a>
                  </span>
                </div>

                <hr border="5" />
                <ul>
                  <li>
                    <i class="bx bx-check"></i>
                    Nec feugiat nisl pretiumNec feugiat nisl pretiumNec feugiat nisl
                    pretium
                    <p class="flex-row flex-center">
                      <v-button type="btn" class="btn btn-sm color-blue"
                        ><b-icon-pencil></b-icon-pencil>
                      </v-button>
                      <v-button type="btn" class="btn btn-sm color-red"
                        ><b-icon-trash></b-icon-trash>
                      </v-button>
                    </p>
                    <hr />
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    Nec feugiat nisl pretiumNec feugiat nisl pretiumNec feugiat nisl
                    pretium
                    <p class="flex-row flex-right">
                      <v-button type="btn" class="btn btn-sm color-blue"
                        ><b-icon-pencil></b-icon-pencil>
                      </v-button>
                      <v-button type="btn" class="btn btn-sm color-red"
                        ><b-icon-trash></b-icon-trash>
                      </v-button>
                    </p>
                  </li>
                  <li>
                    <i class="bx bx-check"></i>
                    Nec feugiat nisl pretiumNec feugiat nisl pretiumNec feugiat nisl
                    pretium
                    <p class="flex-row flex-left">
                      <v-button type="btn" class="btn btn-sm color-blue"
                        ><b-icon-pencil></b-icon-pencil>
                      </v-button>
                      <v-button type="btn" class="btn btn-sm color-red"
                        ><b-icon-trash></b-icon-trash>
                      </v-button>
                    </p>
                  </li>
                </ul>
                <div class="text-center">
                  <a href="#" class="btn btn-primary btn-sm">Ajouter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <!-- End #main -->
  </div>
</template>

<script>
export default {
  name: "Module",
  data() {
    return {
      msg: "Welcome to Your Vue.js Modules",
      listes: {},
      modules: "",
    };
  },

  // created() {
  //   axios
  //     .get("http://127.0.0.1:8080/modules")
  //     .then((response) => (this.listes = response.data))
  //     .catch((error) => console.log(error));
  // },
  // fonction de vue pour la definistion de l'ensemble de mes methodes de ma page
  methods: {
    // Our method to GET results from a Laravel endpoint
    // pour le bouton edit
    // getModules(id) {
    //   axios
    //     .get("http://127.0.0.1:8080/modules/" + id)
    //     .then((response) => (this.modules = response.data))
    //     .catch((error) => console.log(error));
    // },
    // actualiser(listes) {
    //   this.listes = listes.data;
    // },
  },
  mounted() {
    console.log("Component Modules.");
  },
};
</script>
