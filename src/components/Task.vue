<script setup>
import { ref, computed } from 'vue'

import Llista from './TaskList.vue'

import Form from './TaskForm.vue'

const tascaRebuda = ref('')

const gestionarTasca = (tasca) =>{
    tascaRebuda.value = tasca
}

</script>

<template>
    <div>
        <h1>Gestor de Tasques</h1>
    </div>
    <Form @enviar-tasca="gestionarTasca"/>
    <Llista :nom="tascaRebuda"/>
</template>