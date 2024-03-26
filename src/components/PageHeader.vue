<script setup>
import { useRouter } from 'vue-router';


const router = useRouter();
const props = defineProps({
    title: String,
});
</script>

<template>
    <div class="page-header">
        <button
            @click="router.back()"
            class="back-button"><i
                class="pi pi-angle-left" style="font-size: 2em;"></i></button>
        <h1 class="page-header-title">{{ props.title }}</h1>
    </div>
    <hr>
</template>

<style scoped>
.page-header{
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
}
.back-button {
    width: 40px;
    height: 40px;
    border: 2px solid #214;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background-color: white;
    cursor: pointer;
}
.back-button:hover{
    background-color: #ddd;
}

.page-header-title {
    font-size: 1.5rem;
    margin-left: 1.5rem;
}
</style>