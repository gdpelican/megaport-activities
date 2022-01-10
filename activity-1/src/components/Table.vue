<template>
  <div class="table">
    <div class="flex-row">
      <h1>{{title}}</h1>
      <div class="flex-row">
        <input
          @keyup="$emit('searchChanged', $event.target.value)"
          class="padded"
          :value="state.search"
          placeholder="Search..."
        />
        &nbsp;
        <button
          @click="$emit('formOpened')"
          class="form-button padded"
          :style="{ backgroundColor: theme.header.background, color: theme.header.text }"
        >+ New</button>
      </div>
    </div>
    <table>
      <thead :style="{ backgroundColor: theme.header.background, color: theme.header.text }">
        <tr>
          <th class="table-header padded" v-for="column in columns" :key="column" @click="$emit('orderChanged', column)">
            <div class="flex-row">
              <div>{{column}}</div>
              <div class="flex-col">
                <div class="sort-arrow" :class="{ active: state.order.column === column && state.order.direction === 'asc' }">&#9650;</div>
                <div class="sort-arrow" :class="{ active: state.order.column === column && state.order.direction === 'desc' }">&#9660;</div>
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row" :style="{ backgroundColor: theme.body.background, color: theme.body.text }">
          <td class="padded" v-for="cell in row" :key="cell">
            {{cell}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    title: String,
    rows: Array,
    columns: Array,
    state: Object,
    theme: Object
  },
  emits: ['formOpened', 'searchChanged', 'orderChanged'],
}
</script>

<style scoped>
.table {
  font-family: sans-serif;
}

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
}

th {
  cursor: pointer;
  text-transform: capitalize;
}

th:hover .sort-arrow:not(.active) {
  filter: brightness(1);
}

tbody tr:nth-child(odd) {
  filter: brightness(0.975);
}

.sort-arrow {
  font-size: 10px;
  filter: brightness(0.7);
}

.sort-arrow.active {
  filter: brightness(1.3);
}
</style>
