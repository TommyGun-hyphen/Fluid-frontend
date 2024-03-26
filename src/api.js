import axios from 'axios';
import { defineStore } from 'pinia';

var api = axios.create({
    baseURL: 'http://localhost:8000/api',
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    withCredentials: true,
})

function login(username, password) {

}

module.exports = {
    api,
    login
};