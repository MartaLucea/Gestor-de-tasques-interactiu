# Gestor de Tasques (Vue 3)

Petita aplicació feta amb Vue 3 i Vite per gestionar una llista de tasques pendents.

## Funcionalitats

- Afegir noves tasques
- Marcar i desmarcar tasques com a completades
- Eliminar tasques
- Mostrar només les tasques pendents
- Resum amb el total de tasques i les pendents

## Com executar-la

```bash
npm install
npm run dev
```

Després obre l'adreça que apareix al terminal (normalment `http://localhost:5173`).

## Estructura

- `src/App.vue`: component principal, carrega `Task.vue`.
- `src/components/Task.vue`: tota la lògica i la vista del gestor de tasques.

## Conceptes de Vue utilitzats

`ref`, `computed`, `v-model`, `v-for` amb `:key`, `v-if` / `v-else`, `v-show`, `@click` i `:class`.