<script setup>
import { ref, computed } from 'vue'
import { Input, Button } from 'flowbite-vue'
import { XCircleIcon } from "@heroicons/vue/24/outline";


let id = 0

const newTodo = ref('')
const hideCompleted = ref(true)
const todos = ref([
  { id: id++, text: 'Belajar PBK', done: true },
  { id: id++, text: 'Belajar PBO', done: false }
])

const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
})

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
  <div class="container mx-auto px-20">
    <div class="justify-center py-10 bg-teal-100 rounded-xl mt-6 mx-6">
      <h1 class="uppercase font-bold text-3xl text-center pb-4">List Kegiatan</h1>
      <form @submit.prevent="addTodo">
        <div class="mb-6 px-10">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tambah Kegiatan</label>
          <input v-model="newTodo" type="text" placeholder="Tambahkan kegiatan..."
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500">
        </div>
        <button type="submit"
          class="mx-10 text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center">Submit</button>
      </form>
      <div class="relative overflow-x-auto sm:rounded-lg mx-10 my-10">
        <ul class="list-none flex-row mx-auto">
          <li v-for="todo in filteredTodos" :key="todo.id" class="p-2 font-medium text-gray-900">
            <div class="flex items-center justify-center bg-teal-200 rounded py-2">
              <span :class="{ done: todo.done}">{{ todo.text }}</span>
              <input class="ml-2 w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2 " type="checkbox" v-model="todo.done">
              <button class="ml-2" @click="removeTodo(todo)">
                <XCircleIcon class="h-6 w-6 text-red-400 hover:text-red-700" />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <button class="mx-10 text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" @click="hideCompleted = !hideCompleted">{{ hideCompleted ? 'Tampilkan Semua' : 'Tampilkan yang belum selesai' }}</button>
    </div>
  </div>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}

</style>
