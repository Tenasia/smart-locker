<template>
  <div
    class="backdrop-blur-xl bg-white/20 border border-white/30
           p-8 rounded-2xl shadow-2xl w-[420px] text-center"
  >
    <h2 class="text-2xl font-bold mb-4 text-white">
      Available Lockers
    </h2>

    <!-- Legend -->
    <div class="flex justify-center gap-6 mb-6 text-sm">
      <div class="flex items-center gap-2 text-white">
        <span
          class="w-4 h-4 rounded
                 bg-gradient-to-b from-green-400 to-green-600 shadow"
        ></span>
        Available
      </div>

      <div class="flex items-center gap-2 text-gray-300">
        <span class="w-4 h-4 rounded bg-gray-500"></span>
        Occupied
      </div>
    </div>

    <!-- Lockers -->
    <div class="grid grid-cols-2 gap-4">
      <button
        v-for="locker in lockers"
        :key="locker.id"
        :disabled="!locker.vacant"
        @click="select(locker)"
        class="relative h-24 rounded-xl font-bold text-lg transition transform"
        :class="
          locker.vacant
            ? 'bg-gradient-to-b from-green-400 to-green-600 text-white shadow-lg hover:-translate-y-1 hover:shadow-2xl active:translate-y-0'
            : 'bg-gray-500 text-gray-300 cursor-not-allowed'
        "
      >
        Locker {{ locker.id }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lockers: [
        { id: 1, vacant: true },
        { id: 2, vacant: false },
        { id: 3, vacant: true },
        { id: 4, vacant: true }
      ]
    }
  },
  methods: {
    select(locker) {
      console.log('MQTT → OPEN LOCKER:', locker.id)
      this.$router.push({
        path: '/open',
        query: { locker: locker.id }
      })
    }
  }
}
</script>
