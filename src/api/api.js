import React from "react";
import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "e54f439d-64e1-410e-ab99-027aeeef0abc"
    }

})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => {
            return response.data;
        });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`Profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }
}
export const authAPI = {
    me () {
        return instance.get(`auth/me`);
    },
    login (email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout () {
        return instance.delete(`auth/login`);
    }
}

