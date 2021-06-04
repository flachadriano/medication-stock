<template>
  <AdminMedicationForm @submit="onSubmitted" />
</template>

<script>
export default {
  middleware: ["check-auth", "auth"],
  methods: {
    onSubmitted(medicationData) {
      this.$store.dispatch("addMedication", medicationData).then(() => {
        this.$router.push("/medications");
      });
    },
  },
};
</script>