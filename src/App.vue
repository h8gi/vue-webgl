<template>
<div id="app">
  <nav class="mx-auto w-4/5">
    <ul class="flex">
      <li
        v-for="r in routes"
        :key="r.name"
        class="mr-6"
      >
        <router-link
          :to="r.path"
          class="text-blue-400 hover:text-blue-800"
        >
          {{ r.name }}
        </router-link>
      </li>
    </ul>
  </nav>
  <router-view />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'App',
  setup() {
    const router = useRouter()
    const routes = router.getRoutes()
    return {
      routes
    }
  }
})
</script>


<style lang="scss" scoped>
.router-link-active {
  @apply text-blue-600
}
</style>
