import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": '7f2ec360-c0ae-41a0-ad46-9c5d8a3cc5c2'
  }
})

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(
      response => {
        return response.data;
      }
    )
  },
  deleteUnfollowUser(id) {
    return instance.delete(`follow/${id}`).then(
      response => {
        return response.data
      }
    )
  },
  postFollowUser(id) {
    return instance.post(`follow/${id}`, {}).then(
      responce => {
        return responce.data
      }
    )
  },
  getProfile(id) {
    return instance.get(`profile/${id}`).then(
      responce => {
        return responce.data
      }
    )
  }
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get('profile/' + userId);
  },
  getStatus(userId) {
    return instance.get('profile/status/' + userId);
  },
  updateStatus(status) {
    return instance.put('profile/status', { status: status })
  }
}

export const authAPI = {
  getMyAuthProfile() {
    return instance.get(`auth/me`).then(
      responce => {
        return responce.data
      }
    )
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe })
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}