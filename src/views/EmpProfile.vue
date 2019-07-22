<template>
    <div class="row">
        <div class="col-6 offset-3">
            <div>
                <EmpDetails />
            </div>
        </div>
    </div>
</template>

<script>
import EmpDetails from '@/components/EmpDetails.vue'
export default {
    name: "empProfile",
    components: {
        EmpDetails
    },
    computed: {
        
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped>

</style>
