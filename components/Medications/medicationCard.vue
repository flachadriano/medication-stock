<template>
  <v-card class="mx-auto" max-width="344">
    <v-img :src="medication.thumbnail" height="200px"></v-img>
    <v-card-title>
      {{ medication.name }}
      <v-spacer />
      {{ medication.dosage + medication.measurement }}
    </v-card-title>
    <v-card-actions>
      <v-btn :to="medicationLink" color="green lighten-2"> {{ $t('edit') }} </v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="show = !show">
        {{ $t('history') }}
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider />
        <v-card-text class="d-flex justify-start">
         {{ $t('initialStock') }}: {{ medication.initialStock }}
        </v-card-text>
        <v-card-text class="d-flex justify-start">
          {{ $t('updated') }}:
          {{ medication.updatedDate | date }}
        </v-card-text>
        <div
          v-for="trimester in medication.history"
          :key="trimester.id"
          :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
          flat
          tile
        >
          <v-divider />
          <v-card-text class="d-flex justify-start">
            {{ trimester.title }}:
          </v-card-text>
          <v-card-text class="d-flex justify-start">
            {{ $t('sales') }}: {{ trimester.sales }} / Total: ${{ trimester.total }} /
            {{ $t('avarage') }}: ${{ (trimester.total / trimester.sales).toFixed(2) }}
          </v-card-text>
        </div>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: "MedicationCard",
  data() {
    return {
      show: false,
    };
  },
  props: {
    medication: {
      type: Object,
      required: true,
    },
  },
  computed: {
    medicationLink() {
      return "/medications/" + this.medication.id;
    },
  },
};
</script>