<script setup>
const mahasiswa = {
  nama: "Ahmad Fauzi",
  nim: "221051122",
  prodi : "Informatika",
  angkatan: 2024,
  ipk : 3.72
};
</script>
 
<template>
  <div class="kartu">
    <h3>{{ mahasiswa.nama }}</h3>
    <p>{{ mahasiswa.nim }}</p>
    <p>{{ mahasiswa.prodi }}</p>
    <span>Angkatan {{ mahasiswa.angkatan }}</span>
    <p>IPK : {{ mahasiswa.ipk }}</p>
  </div>
</template>
 
<style scoped>
.kartu {
  border: 2px solid #999;
  border-radius: 8px;
  padding: 12px;
}
</style>
