<template>
  <v-container>
    <v-responsive class="overflow-visible">
      <v-row class="justify-center text-h6 primary--text mt-12">
        page not found
      </v-row>
      <v-row>
        <v-btn
          color="primary"
          class="mx-auto"
          @click="handleBack"
        >
          Back
        </v-btn>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  methods: {
    handleBack() {
      this.$router.back();
    },
  },
};
</script>
