<template>
<div class="backdrop-blur-xl bg-white/20 border border-white/30 p-8 rounded-2xl shadow-2xl w-96 text-center text-white">
    <h2 class="text-2xl font-bold mb-3">Locker Opened</h2>
    <p class="mb-6">Locker {{ locker }} is now unlocked.</p>
    
    <button @click="next" class="bg-purple-600 hover:bg-purple-700 transition px-4 py-3 rounded-lg font-semibold">
        Generate QR Code
    </button>
</div>
</template>


<script>
export default {
    computed: {
        locker() { return this.$route.query.locker }
    },
    methods: {
        next() {
            this.$router.push({ path: '/qr', query: { locker: this.locker } })
        }
    }
}
</script>