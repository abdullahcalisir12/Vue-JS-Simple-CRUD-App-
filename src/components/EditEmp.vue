<template>
    <div>
        <div class="input-group">
            <div class="input-group-prepend m-2 w-100" >
                <span class="input-group-text" id="">First Name</span>
                <input type="text" class="form-control" v-model="firstName">
            </div>
            <div class="input-group-prepend m-2 w-100">
                <span class="input-group-text" id="">Last Name</span>
                <input type="text" class="form-control" v-model="lastName">
            </div>
            <div class="input-group-prepend m-2 w-100">
                <span class="input-group-text" id="">Type of Employee</span>
                <input type="text" class="form-control" v-model="typeEmp">
            </div>
        </div>
        <button class="btn btn-block btn-outline-success" @click="confirmEdits(empId)">Confirm Editing</button>
        <button class="btn btn-block btn-outline-danger" @click="cancelEditing">Cancel Editing</button>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'editEmp',
  data() {
      return {
          firstName: "",
          lastName: "",
          typeEmp: "",
          empId: null
      }
  },
  components: {
    
  },
  computed: {
    
  },
  methods: {
      cancelEditing() {
          this.$store.state.isEditOn = false;
      },
      confirmEdits(empId) {
          const edits = this.$store.state.employee.filter(emp => emp.employee_id == empId);
          edits[0].empFirstName = this.firstName;
          edits[0].empLastName = this.lastName;
          edits[0].empType = this.typeEmp;
      }
  },
  mounted() {
      this.$root.$on('editEmp', (emp) => {
      this.firstName = emp.empFirstName;
      this.lastName = emp.empLastName;
      this.typeEmp = emp.empType;
      this.empId = emp.employee_id;
    })
  }
}
</script>
