<template>
  <div class="backdrop-blur-xl bg-white/20 border border-white/30 p-8 rounded-2xl shadow-2xl w-96 text-center text-white">
      <h2 class="text-2xl font-bold mb-4">Your Key</h2>
      
      <div class="bg-white p-4 rounded-xl inline-block">
          <img :src="qr" class="rounded-lg shadow-lg" />
      </div>
      
      <p class="mt-6 text-lg font-mono tracking-widest">{{ code }}</p>
      <p class="mt-2 text-sm opacity-80">Scan this at Locker {{ locker }}</p>
  </div>
</template>
  
<script>
export default {
    computed: {
        locker() { return this.$route.query.locker },
        code() { return this.$route.query.code || 'ERROR' },
        qr() {
            // Generates QR containing ONLY the secure code (e.g., "549281")
            return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${this.code}`
        }
    }
}
</script>