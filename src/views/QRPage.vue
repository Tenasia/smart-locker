<template>
<div class="backdrop-blur-xl bg-white/20 border border-white/30 p-8 rounded-2xl shadow-2xl w-96 text-center text-white">
    <h2 class="text-2xl font-bold mb-4">Your QR Code</h2>
    <img :src="qr" class="mx-auto rounded-lg shadow-lg" />
    <p class="mt-4">Scan to reopen Locker {{ locker }}</p>
</div>
</template>


<script>
export default {
    computed: {
        locker() { return this.$route.query.locker }, 
        qr() {
            return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=LOCKER-${this.locker}`
        }
    }
}
</script>