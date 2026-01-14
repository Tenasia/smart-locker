<template>
  <div class="backdrop-blur-xl bg-white/20 border border-white/30 p-8 rounded-2xl shadow-2xl w-[420px] text-center">
    <h2 class="text-2xl font-bold mb-4 text-white">Available Lockers</h2>

    <div class="flex justify-center gap-6 mb-6 text-sm">
      <div class="flex items-center gap-2 text-white">
        <span class="w-4 h-4 rounded bg-gradient-to-b from-green-400 to-green-600 shadow"></span>
        Available
      </div>
      <div class="flex items-center gap-2 text-gray-300">
        <span class="w-4 h-4 rounded bg-gray-500"></span>
        Occupied
      </div>
    </div>

    <div v-if="loading" class="text-white">Loading lockers...</div>
    <div v-else class="grid grid-cols-2 gap-4">
      <button
        v-for="locker in lockers"
        :key="locker.id"
        :disabled="locker.status !== 'available'"
        @click="select(locker)"
        class="relative h-24 rounded-xl font-bold text-lg transition transform"
        :class="
          locker.status === 'available'
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
import { ref, onValue, update } from "firebase/database";
import { db } from "../firebase"; // Importing your new firebase.js

export default {
  data() {
    return {
      lockers: [],
      loading: true
    };
  },
  mounted() {
    // LISTEN: This updates automatically whenever Firebase data changes
    const lockersRef = ref(db, 'lockers');
    onValue(lockersRef, (snapshot) => {
      const data = snapshot.val();
      this.lockers = data ? Object.values(data) : [];
      this.loading = false;
    });
  },
  methods: {
    select(locker) {
      // 1. Generate a secure 6-digit PIN
      const newCode = Math.floor(100000 + Math.random() * 900000).toString();

      // 2. Prepare the update for Firebase
      const updates = {};
      updates[`/lockers/${locker.id}/status`] = 'occupied';
      updates[`/lockers/${locker.id}/active_code`] = newCode;

      // 3. Send to Firebase
      update(ref(db), updates)
        .then(() => {
          console.log(`Locker ${locker.id} reserved with code ${newCode}`);
          // 4. Move to next screen with the CODE
          this.$router.push({
            path: '/open',
            query: { locker: locker.id, code: newCode }
          });
        })
        .catch((error) => {
          alert("Error reserving locker: " + error.message);
        });
    }
  }
};
</script>