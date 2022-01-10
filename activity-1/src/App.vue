<template>
  <Table
    title="Desserts"
    :columns="columns"
    :rows="visibleRows"
    :state="state"
    :theme="theme"
    @formOpened="formOpened"
    @searchChanged="searchChanged"
    @orderChanged="orderChanged"
  />
  <Form
    v-if="state.formOpen"
    :theme="theme"
    @formClosed="formClosed"
    @formSubmitted="formSubmitted"
  />
</template>

<script>
  import Table from './components/Table.vue'
  import Form from './components/Form.vue'
  import rows from './fixtures/rows.json'
  import theme from './fixtures/theme.json'

  export default {
    name: 'App',
    components: { Table, Form },
    data: () => ({
      theme,
      columns: Object.keys(rows[0]),
      state: {
        rows,
        formOpen: false,
        search: '',
        order: {
          column: 'id',
          direction: 'asc'
        }
      }
    }),
    computed: {
      visibleRows() {
        return this.state.rows
          .filter(this.filterFunction())
          .sort(this.sortFunction())
          .map(Object.values)
      }
    },
    methods: {
      filterFunction() {
        if (!this.state.search.length) return () => true

        return (row) => Object.values(row).some(value => value.match(new RegExp(this.state.search, 'i')))
      },
      sortFunction() {
        return this.state.order.direction === 'asc'
          ? (a, b) => a[this.state.order.column] < b[this.state.order.column] ? -1 : 1
          : (a, b) => a[this.state.order.column] > b[this.state.order.column] ? -1 : 1
      },
      searchChanged(value) {
        this.state.search = value
      },
      orderChanged(value) {
        this.state.order.direction = value === this.state.order.column
          ? (this.state.order.direction === 'asc' ? 'desc' : 'asc')
          : 'asc'
        this.state.order.column = value
      },
      formOpened() {
        this.state.formOpen = true
      },
      formClosed() {
        this.state.formOpen = false
      },
      formSubmitted(value) {
        this.state.rows.push(value)
        this.state.formOpen = false
      }
    }
  }
</script>

<style>
.modal {
  font-family: sans-serif;
  width: 80%;
  height: 80vh;
  position: fixed;
  top: 10vh;
  left: 10%;
  box-shadow: 0 0 10px black;
  border-radius: 4px;
}

.modal-content {
  height: 100%;
}

.modal-header h1 {
  margin: 0;
}

.modal-header, .modal-footer {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 18px;
}

.modal-body {
  flex-grow: 1;
  padding: 18px;
}

.modal-focus-trap {
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0vh;
}

.form-button {
  border: 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.form-button:hover {
  filter: brightness(1.3);
}

.flex-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.padded {
  padding: 0.6rem 1rem;
}
</style>
