<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing variant="primary">Ajouter</b-button>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Ajouter un Modules"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="ordreState"
          label="Ordre "
          label-for="ordre-input"
          invalid-feedback="le ordre est obligatoire"
        >
          <b-form-input
            id="ordre-input"
            v-model="ordre"
            :state="ordreState"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          :state="libelleState"
          label="Libelle"
          label-for="nom-input"
          invalid-feedback="le libelle est obligatoire"
        >
          <b-form-input
            id="nom-input"
            v-model="nom"
            :state="libelleState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      module: "",
      nom: "",
      ordre: "",

      libelleState: null,
      ordreState: null,
      submittedModules: [],
    };
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.libelleState = valid;
      this.ordreState = valid;
      return valid;
    },
    resetModal() {
      this.nom = "";
      this.ordre = "";
      this.libelleState = null;
      this.ordreState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names

      //this.submittedModules.push(this.ordre);
      // Hide the modal manually
      // this.$nextTick(() => {
      //   this.$bvModal.hide("modal-prevent-closing");
      // });

      // axios
      //   .post("http://127.0.0.1:8080/modules", {
      //     nom: this.nom,
      //     ordre: this.ordre,
      //   })
      //   .then((response) => this.$emit("modules-ajouter", response))
      //   .catch((error) => console.log(error));
    },
  },
};
</script>
