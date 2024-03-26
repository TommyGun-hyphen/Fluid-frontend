<script setup>
import { ref } from 'vue';
import TaskListItem from '../components/TaskListItem.vue';
const tasks = ref([
    {
        id: 1,
        title: 'Task One',
    },
    {
        id: 2,
        title: 'Task Two',
    },
    {
        id: 3,
        title: 'Task Three',
    },
    {
        id: 4,
        title: 'Task Four',
    },
]);

</script>

<template>
    <div class="list-container">
        <div class="list-title-container">
            <span class="list-title">title</span>
        </div>
        <ul class="list">
            <li draggable="true" v-for="task in tasks">
                <TaskListItem class="my-3"></TaskListItem>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.list-container {
    background-color: #F4F5F7;
    padding: 0.6rem;
    border-radius: 6px;
}

.list-title-container {
    padding: 5px 10px;
}

.list-title {
    font-size: 1rem;
    color: #353f51;
    font-weight: 500;
}

.list{
    list-style: none;
    padding: 0px;
}
</style>