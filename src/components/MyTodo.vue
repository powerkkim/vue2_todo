<template>
    <div class="mb-3 d-flex">
        <div>
            <input type="checkbox" :checked="todo.checked" @change="toggleCheckbox">
        </div>
        <span class="m-3 flex-grow-1"
                :class="todo.checked ? 'text-muted' : ''"            
                :style="todo.checked ? 'text-decoration: line-through' : ''"            
        >{{ todo.text }}</span>
        <button class="btn btn-danger btn-sm"
                @click="clickDelete"
        >Delete</button>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        toggleCheckbox(e) {
            // this.$emit('toggle-checkbox', {
            //     id: this.todo.id ,
            //     checked: e.target.checked
            // }); 
            // this.$store.commit('TOGGLE_TODO', {
            //     id: this.todo.id ,
            //     checked: e.target.checked
            // });
            this.$store.dispatch('todo/toggleTodo', {
                id: this.todo.id ,
                checked: e.target.checked
            });
        },
        clickDelete( ) {
            // this.$emit('click-delete', this.todo.id); 
            // this.$store.commit('DELETE_TODO', this.todo.id);  
             this.$store.dispatch('todo/deleteTodo', this.todo.id);
        }
    }

}
</script>

<style>

</style>