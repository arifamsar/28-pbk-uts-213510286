<template>
    <h1 class="pt-20 text-teal-500 text-center text-4xl font-medium">{{ taskStore.name }}</h1>

    <!-- Task Form -->
    <TaskForm/>
    <!-- Filter -->
    <div class="py-5 my-5">
        <div class="mx-auto text-center justify-center">
            <h1 class="font-medium text-teal-500 pb-5">Filter</h1>
            <button class="p-2.5 font-medium bg-teal-500 rounded-xl text-white text-sm ml-3" @click="filter = 'all'">All Tasks</button>
            <button class="p-2.5 font-medium bg-teal-500 rounded-xl text-white text-sm ml-3" @click="filter = 'favs'">Favorite</button>
            <button class="p-2.5 font-medium bg-teal-500 rounded-xl text-white text-sm ml-3" @click="filter = 'completed'">Completed</button>
        </div>
    </div>

    <div class="bg-teal-100 rounded-lg py-10 mx-2 md:mx-10">
        <div v-if="filter === 'all'">
            <h3 class="font-medium text-base mx-10 text-teal-500">You Have {{ taskStore.taskLeft }} tasks left to do</h3>
            <div v-for="task in taskStore.tasks">
                <TaskDetails :task="task" />
            </div>
        </div>
        <div v-if="filter === 'favs'">
            <h3 class="font-medium text-base mx-10 text-teal-500">You Have {{ taskStore.favCount }} favorites task</h3>
            <div v-for="task in taskStore.favs">
                <TaskDetails :task="task" />
            </div>
        </div>
        <div v-if="filter === 'completed'">
            <h3 class="font-medium text-base mx-10 text-teal-500">You Have {{ taskStore.completedCount }} completed tasks</h3>
            <div v-for="task in taskStore.completed">
                <TaskDetails :task="task" />
            </div>
        </div>
    </div>
    <!-- Task List -->
</template>

<script>
    import { ref } from 'vue';
    import { useTaskStore } from '../stores/TaskStore';
    import TaskDetails from '../components/TaskDetails.vue';
    import TaskForm from '../components/TaskForm.vue';

    export default {
        components: {
            TaskDetails,
            TaskForm
        },
        setup() {
            const taskStore = useTaskStore()

            const filter = ref('all')

            return {
                taskStore, filter
            }
        }
    }
</script>
