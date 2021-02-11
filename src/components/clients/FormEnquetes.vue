<template>
  <v-dialog persistent max-width="600px" v-model="dialog3">
    <form-wizard shape="square" color="#3498db">
      <tab-content
        title="Personal details"
        icon="ti-user"
        :before-change="() => validateStep('step1')"
      >
        <step1 ref="step1" @on-validate="mergePartialModels"></step1>
      </tab-content>
      <tab-content
        title="Additional Info"
        icon="ti-settings"
        :before-change="() => validateStep('step2')"
      >
        <step2 ref="step2" @on-validate="mergePartialModels"></step2>
      </tab-content>
      <tab-content title="Last step" icon="ti-check">
        Here is your final model:
      </tab-content>
    </form-wizard>
  </v-dialog>
</template>

<script>
export default {
  name: "FormEnquetes",
  data: () => ({
    dialog3: false,
  }),
  methods: {
    validateStep(name) {
      var refToValidate = this.$refs[name];
      return refToValidate.validate();
    },
    mergePartialModels(model, isValid) {
      if (isValid) {
        // merging each step model into the final model
        this.finalModel = Object.assign({}, this.finalModel, model);
      }
    },
    onComplete: function () {
      alert("Yay. Done!");
    },
  },
};
</script>
<style scoped></style>
