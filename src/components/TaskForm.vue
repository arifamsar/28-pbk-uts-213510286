<template>
    <form @submit.prevent="handleSubmit">
        <input 
        type="text"
        placeholder="Add a new task"
        v-model="newTask"
        >
        <button>Add</button>

    </form>
</template>

<script>
import { useTaskStore } from '../stores/TaskStore';
import { ref } from 'vue';
    export default {
        setup() {
            const taskStore = useTaskStore()

            const newTask = ref('')

            const handleSubmit = () => {
                if (newTask.value.length > 0) {
                    taskStore.addTask({
                        title: newTask.value,
                        completed: false,
                        fav: false,
                        id: Math.floor(Math.random() * 1000000)
                    })
                    newTask.value = ''
                }
            }

            return {
                newTask, handleSubmit
            }
        }
    }
</script>