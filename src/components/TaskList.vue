<script setup>

import {ref, computed, watch} from 'vue'

import TascaItem from './TaskItem.vue'
import { Tasca } from './models/Tasca.js';

const tasques = ref([])

const props = defineProps({
    nom:String
})

watch(() => props.nom, (nuevoValor) => {
    if (props.nom.length > 0){
    const nouId = tasques.value.length > 0 
        ? tasques.value[tasques.value.length - 1].id + 1 
        : 1;

    const novaTasca = new Tasca(nouId, props.nom);

    tasques.value.push(novaTasca);
    }

    console.log('Hijo 1: ' + props.nom)
})


const nomesPendents = ref(false)

const tasquesFiltrades = computed(() => {

    if (nomesPendents.value) {
        return tasques.value.filter(tasca => !tasca.completada)
    }
    return tasques.value
})



</script>
<template>
    <div>
        <label>
            <input type="checkbox"/>
            Mostra només pendents
        </label>
    </div>

    <div>
        <p v-if="tasquesFiltrades.length === 0">No hi ha tasques per mostrar</p>

        <ul v-else>
            <TascaItem v-for="tasca in tasquesFiltrades" 
                :key="tasca.id" 
                :tasca="tasca"
                />
        </ul>
    </div>
</template>