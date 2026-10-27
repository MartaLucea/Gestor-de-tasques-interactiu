<script setup>
import {Tasca} from './models/Tasca'

const emit = defineEmits(['marcarTasca', 'borrarTasca'])

const props = defineProps({
    tasca: Tasca,
    class: String
})

function marcarTasca(id){
    emit('marcarTasca', id)
}

</script>

<template>
    <li :class="{ marcada: props.tasca.completada }">
        {{ props.tasca.nom }}
        <small v-show="props.tasca.data">({{ props.tasca.data }})</small>
        <button @click="marcarTasca(props.tasca.id)">
            <span v-if="props.tasca.completada">Desmarcar</span>
            <span v-else>Completar</span>
        </button>
        <button @click="borrarTasca(props.tasca.id)">🗑️</button>
    </li>
</template>