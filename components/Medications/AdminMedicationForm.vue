<template>
  <form @submit.prevent="onSave">
    <v-text-field
      v-model="editedMedication.name"
      :rules="nameRules"
      :label="$t('name')"
    ></v-text-field>
    <v-text-field
      v-model="editedMedication.thumbnail"
      :label="$t('thumbnail')"
    ></v-text-field>
    <v-text-field
      v-model="editedMedication.dosage"
      :label="$t('dosage')"
    ></v-text-field>
    <v-text-field
      v-model="editedMedication.measurement"
      :label="$t('measurement')"
    ></v-text-field>
    <v-text-field
      v-model="editedMedication.initialStock"
      :label="$t('initialStock')"
    ></v-text-field>
    <v-col>
      <v-row>
        <v-btn
          class="blue mr-4"
          :disabled="editedMedication.name == ''"
          type="submit"
          >{{ $t("submit") }}</v-btn
        >
        <v-btn @click="onCancel"> {{ $t("cancel") }} </v-btn>
        <v-spacer />
        <v-btn class="mr-4" @click="show = !show">{{ $t("history") }}</v-btn>
      </v-row>
    </v-col>
    <br />
    <v-expand-transition>
      <div v-show="show">
        <div
          v-for="trimester in editedMedication.history"
          :key="trimester.id"
          :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
          flat
          tile
        >
          <v-card-text class="d-flex justify-start">
            <v-text-field
              v-model="trimester.title"
              label="Trimester Title"
            ></v-text-field>
          </v-card-text>
          <v-card-text class="d-flex justify-start">
            <v-text-field
              v-model="trimester.sales"
              label="Trimester Sales"
            ></v-text-field>
            <v-text-field
              v-model="trimester.total"
              label="Trimester Total"
            ></v-text-field>
          </v-card-text>
        </div>
      </div>
    </v-expand-transition>
  </form>
</template>

<script>
export default {
  props: {
    medication: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      show: false,
      nameRules: [(v) => !!v || "Name is required"],
      editedMedication: this.medication
        ? { ...this.medication }
        : {
            name: "Dipirona",
            dosage: "500",
            thumbnail:
              "https://redebella.com.br/image/cache/catalog/img_prod_imp/7896714207551-1000x1000.jpg",
            measurement: "mg",
            initialStock: "32",
            history: {
              a: {
                title: "First Trimester",
                sales: "161",
                total: "3202",
              },
              b: {
                title: "Second Trimester",
                sales: "203",
                total: "3987",
              },
              c: {
                title: "Third Trimester",
                sales: "265",
                total: "4563",
              },
              d: {
                title: "Fourth Trimester",
                sales: "128",
                total: "2340",
              },
            },
          },
    };
  },
  methods: {
    onSave() {
      this.$emit("submit", this.editedMedication);
    },
    onCancel() {
      this.$router.push("/medications");
    },
  },
};
</script>