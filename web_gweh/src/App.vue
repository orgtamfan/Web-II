<script setup>
import KartuProfil from '@/components/KartuProfil.vue';
import KartuBiodata from '@/components/KartuBiodata.vue';
import Interpolasi from '@/components/interpolasi.vue';
import V_bind from '@/components/V_bind.vue';
import V_model from './components/V_model.vue';
import ref_Reactive from './components/ref_Reactive.vue';
</script>

<template>
  <h1>Halo, Vue!</h1>
  <p>Dibuat oleh: Lann</p>
  <p>Mata Kuliah: Web II</p>
  
  <KartuProfil /> <br>
  <KartuBiodata /> <br>
  <Interpolasi /> <br>
  <V_bind /> <br>
  <V_model /> <br>
  <ref_Reactive /> <br>
</template>

<style scoped></style>