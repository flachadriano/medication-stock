<template>
  <div>
    <v-row class="d-flex mt-2">
      <v-col class="pa-2" outlined tile>
        <v-text-field
          v-model="searchByName"
          outlined
          clearable
          :label="$t('search') + ' ' + $t('by') + ' ' + $t('name')"
          type="text"
        >
        </v-text-field>
      </v-col>
      <v-col class="pa-2" outlined tile>
        <v-text-field
          v-model="searchByDosage"
          outlined
          clearable
          :label="$t('search') + ' ' + $t('by') + ' ' + $t('dosage')"
          type="text"
        >
        </v-text-field>
      </v-col>
      <v-col class="pa-2" outlined tile>
        <v-select
          v-model="sortBy"
          :items="searchTypes"
              :label="$t('sorted') + ' ' + $t('by')"
          outlined
        />
      </v-col>
    </v-row>
    <div
      class="d-flex justify-end mb-6"
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      flat
      tile
    >
      <div class="ml-4" outlined tile>
        <v-btn v-if="sortBy == 'name'" @click="ascending = !ascending">
          {{ ascending ? "a-z" : "z-a" }}
        </v-btn>
      </div>
      <div class="ml-4" outlined tile>
        <v-btn
          color="blue"
          @click="$router.push('/medications/new-medication')"
        >
          {{ $t('register') + ' ' + $t('medication')}}
        </v-btn>
      </div>
      <div class="ml-4" outlined tile>
        <v-btn color="red" @click="onLogout"> {{ $t('logout') }} </v-btn>
      </div>
    </div>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="8"
        md="4"
        v-for="medication in resultQuery"
        :key="medication.id"
      >
        <MedicationCard :medication="medication" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchByName: null,
      searchByDosage: null,
      ascending: true,
      sortBy: "name",    
      searchTypes: ["name", "dosage", "initialStock", "updatedDate"],
    };
  },
  computed: {
    loadedMedications() {
      return this.$store.getters["loadedMedications"];
    },
    resultQuery() {
      let medications = this.loadedMedications;
      if (this.searchByName) {
        return this.loadedMedications.filter((item) => {
          return this.searchByName
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });
      }
      if (this.searchByDosage)
        medications = medications.filter((item) => {
          return item.dosage == this.searchByDosage;
        });
      medications = medications.sort((a, b) => {
        if (this.sortBy == "name") {
          let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        } else if (this.sortBy == "dosage") {
          return a.dosage - b.dosage;
        } else if (this.sortBy == "initialStock") {
          return a.initialStock - b.initialStock;
        } else if (this.sortBy == "updatedDate") {
          return a.updatedDate - b.updatedDate;
        } else if (this.sortBy == "updatedDate") {
          return a.updatedDate - b.updatedDate;
        }
      });
      if (!this.ascending) {
        medications.reverse();
      }
      return medications;
    },
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/medications/auth");
    },
  },
};
</script>