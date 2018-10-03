<template>
  <div class="page">
    <div class="page-inner">
      <div class="page-header">
        <div class="page-header__filter">
          <button class="button button--sm button--muted">Filter Beneficiaries</button>
        </div>
        <div class="page-header__action">
          <button class="button button--sm" @click="showNewBeneficiaryForm = true">New Beneficiary</button>
        </div>
      </div>
      <div class="page-body">
        <div class="card">
          <table class="table">
            <thead>
              <tr class="text-muted">
                <th>Full name</th>
                <th>Phone number</th>
                <th>Account number</th>
                <th>Bank</th>
                <th>Total paid</th>
              </tr>
            </thead>
            <tbody>
              <router-link tag="tr" :to="`beneficiaries/${beneficiary.id}`" class="link" v-for="beneficiary in beneficiaries" :key="beneficiary.id">
                <td>{{ beneficiary.name }}</td>
                <td>{{ beneficiary.phone }}</td>
                <td>{{ beneficiary.accountNumber }}</td>
                <td>{{ beneficiary.bank }}</td>
                <td class="text-info">{{ naira(beneficiary.totalPaid) }}</td>
              </router-link>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <new-beneficiary :visible="showNewBeneficiaryForm" @close="showNewBeneficiaryForm = false" />
  </div>
</template>

<script>
import beneficiaries from '@/mockData/beneficiaries';
import { naira } from '@/utilities';
import NewBeneficiary from './NewBeneficiary.vue';

export default {
  name: 'BeneficiaryList',
  components: {
    NewBeneficiary,
  },
  data() {
    return {
      beneficiaries,
      showNewBeneficiaryForm: false,
    };
  },
  methods: {
    naira,
  },
};
</script>
