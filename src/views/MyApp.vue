<script setup>
import { ref, computed, watchEffect } from 'vue'
import { XCircleIcon } from '@heroicons/vue/24/outline'

let id = 0;

const newTodo = ref('')
const hideNotCompleted = ref(true)

// Ambil data todos dari local storage jika sudah tersedia
const storedTodos = JSON.parse(localStorage.getItem('todos'))
const todos = ref(storedTodos || [
  { id: id++, text: 'Belajar Javascript', done: true },
  { id: id++, text: 'Mengerjakan Tugas', done: true },
  { id: id++, text: 'Belajar Vue', done: false }
])

// Gunakan watcher untuk menyimpan data todos pada local storage setiap kali ada perubahan
watchEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos.value))
})

const filteredTodos = computed(() => {
  return hideNotCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
})

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
  localStorage.setItem('todos', JSON.stringify(todos.value))
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
  localStorage.setItem('todos', JSON.stringify(todos.value))
}

</script>

<template>
  <div class="container mx-auto md:px-20">
    <div class="justify-center py-10 bg-teal-100 rounded-xl mt-6 mx-6">
      <h1 class="uppercase font-bold text-3xl text-center pb-4 text-teal-700">List Kegiatan</h1>
      <form @submit.prevent="addTodo">
        <div class="mb-6 px-10">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tambah Kegiatan</label>
          <input v-model="newTodo" type="text" placeholder="Tambahkan kegiatan..." required
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5">
        </div>
        <button type="submit"
          class="mx-10 text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
      </form>
      <div class="relative overflow-x-auto sm:rounded-lg mx-10 my-10">
        <ul class="list-none flex-row mx-auto">
          <li v-for="todo in filteredTodos" :key="todo.id" class="py-2 md:text-md text-sm font-medium text-gray-900">
            <div class="flex items-center justify-center bg-teal-200 rounded py-2.5 md:py-2">
              <span :class="{ done: todo.done }">{{ todo.text }}</span>
              <input
                class="ml-2 w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2 "
                type="checkbox" v-model="todo.done">
              <button class="ml-2" @click="removeTodo(todo)">
                <XCircleIcon class="h-6 w-6 text-red-400 hover:text-red-700" />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <button
        class="mx-10 text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        @click="hideNotCompleted = !hideNotCompleted">{{ hideNotCompleted ? 'Tampilkan Semua' : 'Tampilkan yang belum selesai' }}</button>
    </div>
  </div>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
