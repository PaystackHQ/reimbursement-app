<template>
  <div class="logged-in">
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
        <router-link tag="li" to="/requests" class="sidebar__nav-item" active-class="active">Requests</router-link>
        <router-link tag="li" to="/beneficiaries" class="sidebar__nav-item" active-class="active">Beneficiaries</router-link>
        <router-link tag="li" to="/settings" class="sidebar__nav-item" active-class="active">Settings</router-link>
        <li class="sidebar__nav-item docked">Log out</li>
      </ul>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
import Avatar from '@/components/Avatar.vue';

export default {
  name: 'LoggedIn',
  components: {
    Avatar,
  },
};
</script>

<style lang="scss" scoped>
.logged-in {
  height: 100%;
  max-height: 100vh;
  display: flex;
  flex-flow: row nowrap;
}

.main {
  height: 100%;
  flex-grow: 1;
}
</style>

