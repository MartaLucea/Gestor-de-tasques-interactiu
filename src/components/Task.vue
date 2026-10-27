<script setup>
import { ref, computed } from 'vue'

class Tasca {
    constructor(id, nom) {
        this.id = id
        this.nom = nom
        this.completada = false
        this.data = new Date().toLocaleDateString()
    }
}

const tasques = ref([])

const novaTascaNom = ref('')

const nomesPendents = ref(false)

function afegirTasca() {
  if (!novaTascaNom.value.trim()) return;

  const nouId = tasques.value.length > 0 
    ? tasques.value[tasques.value.length - 1].id + 1 
    : 1;

  const novaTasca = new Tasca(nouId, novaTascaNom.value);

  tasques.value.push(novaTasca);

  novaTascaNom.value = '';
}

function borrarTasca(id){
  const index = tasques.value.findIndex(tasca => tasca.id === id);

  if (index !== -1) {
    tasques.value.splice(index, 1);
  }  
}

function marcarTasca(id){
    const tasca = tasques.value.find(tasca => tasca.id === id)

    if (tasca) {
        tasca.completada = !tasca.completada
    }
}

const tasquesFiltrades = computed(() => {
    if (nomesPendents.value) {
        return tasques.value.filter(tasca => !tasca.completada)
    }
    return tasques.value
})

const total = computed(() => tasques.value.length)

const pendents = computed(() => tasques.value.filter(tasca => !tasca.completada).length)

</script>

<template>
    <div>
        <h1>Gestor de Tasques</h1>
    </div>

    <div>
        <input v-model="novaTascaNom" placeholder="Escriu una nova tasca" />
        <button @click="afegirTasca">Afegir</button>
    </div>

    <div>
        <label>
            <input type="checkbox" v-model="nomesPendents" />
            Mostra només pendents
        </label>
    </div>

    <div>
        <p v-if="tasquesFiltrades.length === 0">No hi ha tasques per mostrar</p>

        <ul v-else>
            <li v-for="tasca in tasquesFiltrades" :key="tasca.id" :class="{ marcada: tasca.completada }">
                {{ tasca.nom }}
                <small v-show="tasca.data">({{ tasca.data }})</small>
                <button @click="marcarTasca(tasca.id)">
                    <span v-if="tasca.completada">Desmarcar</span>
                    <span v-else>Completar</span>
                </button>
                <button @click="borrarTasca(tasca.id)">🗑️</button>
            </li>
        </ul>
    </div>

    <div>
        <p>Total: {{ total }} | Pendents: {{ pendents }}</p>
    </div>
</template>

<style scoped>
div {
    text-align: center;
    margin: 12px 0;
}

h1 {
    color: #2c3e50;
}

input[type="text"], input:not([type]) {
    padding: 6px 10px;
    border: 2px solid #b8c4d6;
    border-radius: 6px;
}


button {
    margin-left: 6px;
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
}

li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    margin-bottom: 6px;
    border-radius: 6px;

}

li small {
    color: #888;
    margin-left: 10px;
}

.marcada {
    text-decoration: line-through;
    color: #888;
}

p {
    font-weight: bold;
    color: #2c3e50;
}
</style>