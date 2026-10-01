<script setup>
const mahasiswa = {
  nama: "Ahmad Fauzi",
  prodi: "Informatika",
  angkatan: 2024
};
</script>
 
<template>
  <div class="kartu">
    <h3>{{ mahasiswa.nama }}</h3>
    <p>{{ mahasiswa.prodi }}</p>
    <span>Angkatan {{ mahasiswa.angkatan }}</span>
  </div>
</template>
 
<style scoped>
.kartu {
  border: 2px solid #41B883;
  border-radius: 8px;
  padding: 12px;
}
</style>
