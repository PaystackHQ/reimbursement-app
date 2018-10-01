<template>
  <div class="page">
    <div class="page-inner">
      <div class="page-header"></div>
      <div class="page-body">
        <div class="card">
          <table class="table">
            <thead>
              <tr class="text-muted">
                <th width="45px"></th>
                <th>Fullname</th>
                <th>Email</th>
                <th>Role</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr class="sm" v-for="user in users" :key="user.id">
                <td>
                  <avatar :name="fullName(user)" />
                </td>
                <td>{{ fullName(user) }}</td>
                <td>{{ user.email }}</td>
                <td> <span class="label label--success">{{ user.role }}</span></td>
                <td>
                  <button class="button button--action text-info">Change role</button>
                  <button class="button button--action text-danger">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import users from '@/mockData/users';
import { naira, fullName } from '@/utilities';

export default {
  name: 'UserList',
  data() {
    return {
      users,
    };
  },
  methods: {
    naira,
    fullName,
  },
};
</script>
