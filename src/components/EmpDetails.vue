<template>
            <div class="d-flex justify-content-center">
                <div class="card w-100" style="">
                    <h1>{{profile[0].empFirstName + " " + profile[0].empLastName}}</h1>
                    <div class="card-body">
                        <p class="card-text">{{profile[0].empType}}</p>
                        <p class="card-text">{{profile[0].empId}}</p>
                        <p class="card-text">{{profile[0].isOnline}}</p>
                        
                    </div>
                </div>
            </div>
</template>

<script>
export default {
    data() {
        return {
            profile: this.$store.state.employee.filter(emp => emp.employee_id == this.$route.params.empId) 
        }
    }
}
</script>

<style scoped>

</style>