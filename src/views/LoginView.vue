<script setup>
import { ref } from 'vue';
import axios from 'axios';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Button from 'primevue/button'

import {api} from '../api';

const username = ref('')
const password = ref('')

function handleSubmit(e) {
    api.post('login', {
        username: username.value,
        password: password.value
    }).then(res=>{
        console.log(res.data)
    }).catch((e)=>{
        console.error(e);
    })
}

</script>

<template>
    <div class="container">

        <div>
            <form @submit.prevent="handleSubmit">

                <div class="login-container">
                    <div class="input-group">
                        <InputGroup>
                            <InputGroupAddon>
                                <i class="pi pi-user"></i>
                            </InputGroupAddon>
                            <InputText v-model="username" placeholder="Username" />
                        </InputGroup>
                    </div>
                    <div class="input-group">
                        <InputGroup>
                            <InputGroupAddon>
                                <i class="pi pi-key"></i>
                            </InputGroupAddon>
                            <Password placeholder="password" v-model="password" :feedback="false" />
                        </InputGroup>
                    </div>
                    <Button type="submit">Login</Button>
                </div>


            </form>
        </div>

    </div>
</template>

<style scoped>
.container {
    padding-top: 100px;
    display: flex;
    justify-content: center;
    align-self: center;
}
.login-container{
    /* background-color: rgb(112, 121, 129); */
    padding: 50px;
    border: 1px solid rgb(195, 195, 195);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.input-group{
    margin-bottom: 10px;
}

</style>