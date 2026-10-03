<script setup>
import { ref, reactive } from 'vue'
 
// ref: wadah tunggal -> akses .value di script
const jumlah = ref(0)
const teks   = ref('hai')
function nambah() { jumlah.value++ }
 
// reactive: object/arr -> kurs di properti, TANPA .value
const form = reactive({
  nama: '', prodi: ''
})
</script>
