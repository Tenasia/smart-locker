<template>
<div class="backdrop-blur-xl bg-white/20 border border-white/30 p-8 rounded-2xl shadow-2xl w-96 text-center">
    <h1 class="text-3xl font-bold mb-6 text-white">Smart Locker</h1>
    <input v-model="unit" placeholder="Enter Locker Unit ID" class="bg-white/70 backdrop-blur-md border border-white/60 p-3 w-full mb-5 rounded-lg focus:outline-none" />

    <button @click="go" class="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-3 rounded-lg w-full font-semibold">
        Continue
    </button>
</div>
</template>


<script>
export default {
    data() {
        return { unit: '' }
    },
    methods: {
        go() {
            this.$router.push({ path: '/lockers', query: { unit: this.unit } })
        }
    }
}
</script>