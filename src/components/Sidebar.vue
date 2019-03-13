<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <img class="sidebar__icon" src="~@/assets/images/icon.png" alt="Icon">
      <h1 class="text-info font-bold">Logbook</h1>
    </div>
    <div class="profile">
      <avatar />
      <span class="profile__name">Onyekachi</span>
    </div>
    <ul class="sidebar__nav">
      <router-link tag="li" to="/requests" class="sidebar__nav-item">Requests</router-link>
      <router-link tag="li" to="/beneficiaries" class="sidebar__nav-item">Beneficiaries</router-link>
      <router-link tag="li" to="/users" class="sidebar__nav-item">Users</router-link>
      <router-link tag="li" to="/settings" class="sidebar__nav-item">Settings</router-link>
      <li class="sidebar__nav-item docked" @click="logout">Log out</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    logout() {
      localStorage.removeItem('isLoggedIn');
      this.$router.push('/login');
    },
  },
};
</script>
