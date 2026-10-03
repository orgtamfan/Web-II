<script setup>
import { ref } from 'vue'
const nama   = ref('Timothy')
const nilai  = ref(95)
const lulus  = ref(true)
const judul  = ref('Pemrograman Web 2')
</script>
 
<template>
  <h1>Halo {{ nama }}!</h1>
  <p>Mata kuliah: {{ judul.toUpperCase() }}</p>
  <p>Nilai +5 = {{ nilai + 5 }}</p>
  <p>Status: {{ lulus ? 'LULUS' : 'REMIDIAL' }}</p>
 
  <!-- mustache di atribut: SALAH -->
  <!-- <img src="{{ url }}" /> -->
</template>