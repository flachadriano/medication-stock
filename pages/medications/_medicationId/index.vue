<template>
  <AdminMedicationForm :medication="loadedMedication" @submit="onSubmitted" />
</template>

<script>
export default {
  middleware: ["check-auth", "auth"],
  asyncData(context) {
    return context.app.$axios
      .$get(
        process.env.baseUrl +
          "/medications/" +
          context.params.medicationId +
          ".json"
      )
      .then((data) => {
        return {
          loadedMedication: { ...data, id: context.params.medicationId },
        };
      })
      .catch((e) => context.error());
  },
  methods: {
    onSubmitted(editedMedication) {
      this.$store.dispatch("editMedication", editedMedication).then(() => {
        this.$router.push("/medications");
      });
    },
  },
};
</script>