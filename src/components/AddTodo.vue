<template>
  <div>
    <input type="text" class="w-100 p-2" placeholder="Type todo"  
        v-model="todoText" @keyup.enter="addToDo">
  </div>
</template>

<script>
export default {
    data() {
        return {
            todoText: '',
        }
    },
    methods: {
        addToDo(e) {
            //this.$emit('add-todo', e.target.value);
            // this.$store.commit( 'ADD_TODO', e.target.value);
           
           this.$store.dispatch( 'todo/addTodo', e.target.value);
           
           this.todoText = '';


        }
    },
}
</script>

<style>

</style>