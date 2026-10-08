<script setup>

import { ref } from 'vue'

// TODO: 1. Buat ref nilai, contoh 88
const nilai = ref(100)

</script>

<template>

  <p>Nilai: {{ nilai }}</p>
  <p v-if="nilai >= 90 && nilai <= 100">A (Sangat Baik)</p>
  <p v-else-if="nilai >= 80">B (Baik)</p>
  <p v-else-if="nilai >= 70">C (Cukup)</p>
  <p v-else-if="nilai >= 60">D (Kurang)</p>
  <p v-else>E (Tidak Lulus)</p>

</template>
