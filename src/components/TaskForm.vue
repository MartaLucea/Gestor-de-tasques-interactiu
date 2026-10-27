<script setup>

import { ref } from 'vue'

const tasca = ref('')
const emit = defineEmits(['enviarTasca'])

const enviarTasca = () =>{
    if (!tasca.value.trim()) return;

    emit('enviarTasca', tasca.value)
}



</script>
<template>
    <div>
        <input v-model="tasca" placeholder="Escriu una nova tasca" />
        <button @click="enviarTasca">Afegir</button>
    </div>
</template>