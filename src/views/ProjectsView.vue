<script setup>
import { ref } from 'vue';
import ProjectItem from '../components/ProjectItem.vue';
import { useRoute, useRouter } from 'vue-router';
import PageHeader from '@/components/PageHeader.vue';

const router = useRouter();
const route = useRoute();
const projects = ref([
    {
        id: 1,
        title: 'title one',
        description: 'description one project one',
        created_at: new Date(),
        updated_at: new Date(),
    },
    {
        id: 2,
        title: 'title two',
        description: 'description one project one',
        created_at: new Date(),
        updated_at: new Date(),
    },
    {
        id: 3,
        title: 'title three',
        description: 'description one project one',
        created_at: new Date(),
        updated_at: new Date(),
    },
]);

function click(project) {
    router.push('/projects/' + project.id)
}
</script>

<template>
    <PageHeader title="List of projects"></PageHeader>
    <ul class="list">
        <li v-for="project in projects" class="grow">
            <project-item @click="() => click(project)" :project="project"></project-item>
        </li>
    </ul>
</template>

<style scoped>
.list {
    display: grid;
    grid-template-columns: auto;
    gap: 12px;
    list-style: none;
    padding: 0px
}

@media only screen and (min-width: 600px) {
    .list {
        grid-template-columns: auto auto;
    }
}
@media only screen and (min-width: 880px) {
    .list {
        grid-template-columns: auto auto auto;
    }
}
</style>