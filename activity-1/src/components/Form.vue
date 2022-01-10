<template>
  <div class="modal-focus-trap" @click="$emit('formClosed')" />
  <div class="modal" :style="{ backgroundColor: this.theme.body.background }">
    <div class="modal-content flex-col">
      <div class="modal-header">
        <h1>New Dessert</h1>
        <button
          class="modal-close form-button"
          @click="$emit('formClosed')"
        >x</button>
      </div>
      <div class="modal-body">
        <div class="form-input flex-col">
          <label>Id</label>
          <input class="padded" placeholder="e.g. 0001" v-model="this.form.id">
        </div>
        <div class="form-input flex-col">
          <label>Type</label>
          <input class="padded" placeholder="e.g. Danish" v-model="this.form.type">
        </div>
        <div class="form-input flex-col">
          <label>Name</label>
          <input class="padded" placeholder="e.g. Bear Claw" v-model="this.form.name">
        </div>
        <div class="form-input flex-col">
          <label>Topping</label>
          <input class="padded" placeholder="e.g. Compote" v-model="this.form.topping">
        </div>
      </div>
      <div class="modal-footer">
        <div />
        <button
          @click="$emit('formSubmitted', this.form)"
          class="form-button padded"
          :style="{ backgroundColor: theme.header.background, color: theme.header.text }"
        >Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    theme: Object
  },
  data: () => ({
    form: {
      id: "",
      type: "",
      name: "",
      topping: ""
    }
  }),
  emits: ['formClosed', 'formSubmitted'],
}
</script>

<style scoped>
.form-input {
  margin-bottom: 18px;
}

.form-input label {
  margin-bottom: 8px;
}
</style>
