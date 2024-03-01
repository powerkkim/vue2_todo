<template>
    <div>
        <MyTodo v-for="todo in todos" :todo="todo" :key="todo.id" 
              @toggle-checkbox="toggleCheckbox"
              @click-delete="deleteTodo"
        />
    </div>
</template>

<script>
import MyTodo from '@/components/MyTodo.vue'

export default {
    components: {
        MyTodo
    },
    // props: {
    //     todos: {
    //         type: Array,
    //         required: true
    //     }
    // },
    methods: {
        toggleCheckbox( value ) {
            this.$emit('toggle-checkbox', value ) 
        },
        deleteTodo(todoId) {
            this.$emit('click-delete', todoId); 
        }
    },
    computed: {
        todos() {
            return this.$store.state.todo.todos;
        },
    }
}
</script>
    
<style>

</style>