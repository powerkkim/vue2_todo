<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodoVue />
    <AddTodoVue />
    <hr>
    <todo-list />
    <UserListVue />
  </div>
</template>

<script>   
import TotoList from '@/components/TodoList.vue';
import CompletedTodoVue from '@/components/CompletedTodo.vue';
import AddTodoVue from '@/components/AddTodo.vue';
import UserListVue from '@/components/UserList.vue';

export default {
  components: {
    'todo-list': TotoList,
    CompletedTodoVue,
    AddTodoVue,
    UserListVue
  },
}
</script>

<style> 
</style>
