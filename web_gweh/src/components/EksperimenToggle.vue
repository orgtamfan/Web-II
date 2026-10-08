<script setup>

import { ref } from 'vue'

const tampilIf = ref(true)

const tampilShow = ref(true)

</script>

<template>

  <button @click="tampilIf = !tampilIf">Toggle v-if</button>

  <button @click="tampilShow = !tampilShow">Toggle v-show</button>

  <p v-if="tampilIf">Elemen ini pakai v-if</p>

  <p v-show="tampilShow">Elemen ini pakai v-show</p>

</template>
