<template>
<div class="container-fluid">
  <div class="employee row">
        <div class="col-6">
            <EmployeeList />
            <button class="btn btn-block btn-outline-primary mt-1" @click="showAddField()">New Employee</button>
        </div>
        <div class="col-6">
            <div class="row">
                <div><AddNewEmp v-show="isAddFieldOn"/></div>
                <div><EditEmp v-show="isEditFieldOn"/></div>
            </div>
        </div>
  </div>
</div>


</template>

<script>
// @ is an alias to /src
import EmployeeList from '@/components/EmployeeList.vue'
import AddNewEmp from '@/components/AddNewEmp.vue'
import EditEmp from '@/components/EditEmp.vue'

export default {
  name: 'home',
  computed: {
      isAddFieldOn() {
          return this.$store.state.isAddNewOn;
      },
      isEditFieldOn() {
          return this.$store.state.isEditOn;
      }
  },
  components: {
    EmployeeList,
    AddNewEmp,
    EditEmp
  },
  methods: {
      showAddField() {
          this.$store.state.isAddNewOn = true;
          this.$store.state.isEditOn = false;
      }
  }
}
</script>
