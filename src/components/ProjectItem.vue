<script setup>
import Divider from 'primevue/divider';
import moment from 'moment'

const props = defineProps({
    project: Object,
});
</script>

<template>
    <div class="project-item">
        <span class="project-title">{{props.project?.title}}</span>
        <hr style="margin: 0.75rem 0px; border-color: #bbb;">
        <span v-tooltip.right="{value: 'last updated time', showDelay: '500'}" class="created-at" v-if="project?.updated_at">
            <i class="pi pi-clock"></i>
            <span class="created-at-date">{{ moment(project.updated_at).format('DD MMM YYYY HH:mm')}}</span>
        </span>
    </div>
</template>

<style scoped>
.project-item{
    border: 1px solid #aaa;
    padding: 1.5rem;
    border-radius: 0.75rem;
    cursor: pointer;
}

.project-title {
    font-size: 1.125rem;
    font-weight: 500;
}

.created-at{
    font-size: 0.875rem;
    color: #445;
    display: flex;
    align-items: center;
    width: fit-content;
}

.created-at-date{
    margin-left: 0.5rem;
}
</style>