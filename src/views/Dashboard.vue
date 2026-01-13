<template>
  <div class="glass-card w-[420px] text-center">
    <h1 class="title">Dashboard</h1>

    <div class="grid grid-cols-2 gap-4">
      <router-link to="/map" class="card-btn">Locker Map</router-link>
      <router-link to="/deposit" class="card-btn">Deposit</router-link>
      <router-link to="/faq" class="card-btn">FAQ</router-link>
      <router-link to="/contact" class="card-btn">Help</router-link>
    </div>
  </div>
</template>
