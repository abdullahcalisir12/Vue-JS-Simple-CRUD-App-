<template>
  <div class="employee-list">
    <ul class="list-group">
        <li class="list-group-item" v-for="(emp,index) in employees">
            <div class="asd">
                <router-link :to="{ name: 'employeeProfile', params: { empId: emp.employee_id }}">{{emp.empFirstName + " " + emp.empLastName}}</router-link>
            </div>
            <div class="asd">
                <button class="btn btn-danger" @click="deleteEmp(index)">Delete</button>
                <button class="btn btn-secondary" @click="showEditField(emp)">Edit</button> 
            </div>
        </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'employee-list',
  computed: {
    employees() {
        return this.$store.state.employee;
    }
  },
  methods: {
      deleteEmp(index) {
          this.$store.state.employee.splice(index,1);
      },
      showEditField(emp) {
          this.$store.state.isEditOn = true;
          this.$store.state.isAddNewOn = false;
          this.$root.$emit('editEmp',emp);
      }
  }
}
</script>

<style scoped>
    ul{
        list-style-type: none;
    }

    li{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    li .asd{
        width: 50%;
        float: left;
    }

    li p{
        text-align: left;
    }

    .btn-danger {
        margin-right: 5px;
    }


</style>