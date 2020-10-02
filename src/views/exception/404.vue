<template>
  <v-container>
    <v-responsive class="overflow-visible">
      <v-row class="justify-center text-h6 primary--text mt-12">
        {{ $t('app.exception.404') }}
      </v-row>
      <v-row>
        <v-btn
          color="primary"
          class="mx-auto"
          @click="handleBack"
        >
          {{ $t('app.button.back') }}
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
