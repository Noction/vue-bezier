<template>
  <div class="grid grid-rows-[auto_1fr] items-center gap-x-4 rounded-xl">
    <div class="grid mx-4 grid-cols-[200px_1fr] gap-5 w-full h-full">
      <nav class="ml-auto flex flex-col items-end justify-center gap-x-8">
        <router-link to="/list/dissolve">
          Dissolve
        </router-link>

        <router-link to="/list/scale">
          Scale
        </router-link>
      </nav>

      <div class="relative w-full h-full m-auto">
        <router-view />
      </div>
    </div>
  </div>
</template>
