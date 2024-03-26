<script setup>
import Badge from 'primevue/badge';
import Menubar from 'primevue/menubar';
import { ref } from "vue";
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        to: '/'
    },
    {
        label: 'Projects',
        icon: 'pi pi-list',
        items: [
            {
                label: 'All projects',
                icon: 'pi pi-list',
                to: '/projects'
            },
            {
                label: 'Create Project',
                icon: 'pi pi-plus',
                // to: '/projects/create'
                click: ()=>{
                    showCreateProjectDialog.value = true;
                }
            },
        ]
    },
])

const showCreateProjectDialog = ref(false);
</script>

<template>
    <Menubar :model="items" class="items-center">
        <template #start class="my-1">
            <h1 class="text-lg font-semibold mr-6 ml-8">Fluid</h1>
        </template>
        <template class="my-1" #item="{ item, props, hasSubmenu, root }">
            <RouterLink v-if="item.to" :to="item.to" class="flex items-center" v-bind="props.action">
                <span :class="item.icon"></span>
                <span class="pl-3">{{ item.label }}</span>
                <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                <span v-if="item.shortcut"
                    class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut
                    }}</span>
                <i v-if="hasSubmenu"
                    :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
            </RouterLink>
            <div v-if="!item.to" @click="item.click" class="flex items-center" v-bind="props.action">
                <span :class="item.icon"></span>
                <span class="pl-3">{{ item.label }}</span>
                <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                <span v-if="item.shortcut"
                    class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut
                    }}</span>
                <i v-if="hasSubmenu"
                    :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
            </div>
        </template>
    </Menubar>
    <Dialog v-model:visible="showCreateProjectDialog" modal header="Create project" :style="{ width: '25rem' }">
        <div class="flex flex-col items-start gap-3 mb-3">
            <label for="username" class="font-semibold w-6rem">Project title</label>
            <br>
            <InputText id="username" class="flex-auto" autocomplete="off" />
        </div>
        <div class="flex flex-col items-start gap-3 mb-5">
            <label for="email" class="font-semibold w-6rem">Project Description</label>
            <Textarea id="email" class="flex-auto" autocomplete="off"></Textarea>
        </div>
        <div class="flex justify-content-end gap-2">
            <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
            <Button type="button" label="Save" @click="visible = false"></Button>
        </div>
    </Dialog>
</template>