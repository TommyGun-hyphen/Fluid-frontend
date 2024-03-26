<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import PageHeader from '../components/PageHeader.vue';
import TaskList from '../components/TaskList.vue';
const route = useRoute();
const project = ref(null);
onMounted(()=>{
    console.log(route.params.id)
    setTimeout(()=>{
        project.value = {
            id: 1,
            title: 'project title',
            description: 'project desc'
        }
    }, 1000)
})
</script>

<template>
    <PageHeader :title="`Project: ${project?.title || ''}`"></PageHeader>
    <div class="lists-container">
        <TaskList style="flex-grow: 1; margin: 1rem;"></TaskList>
        <TaskList style="flex-grow: 1; margin: 1rem;"></TaskList>
        <TaskList style="flex-grow: 1; margin: 1rem;"></TaskList>
    </div>
</template>

<style scoped>
.lists-container {
    display: flex;
}
.list {
    flex-grow: 1;
    margin: 1rem
}
</style>