<template>
  <div class="flex items-center h-8 md:h-12 font-semibold gap-x-1">
    <div class="relative w-8 h-8 md:w-12 md:h-12">
      <push-transition appear direction="down" :duration="700" :delay="1000">
        <img class="h-8 md:h-12" src="../assets/logo.png" alt="Vue Bezier">
      </push-transition>
    </div>
    <div class="relative h-full flex items-center ">
      <push-transition appear direction="right" :duration="500" :delay="2000">
        <span class="flex items-center h-full text-xs md:text-base">Vue</span>
      </push-transition>
    </div>
    <div class="relative h-full flex items-center">
      <push-transition appear direction="left" :duration="500" :delay="2500">
        <span class="flex items-center h-full text-xs md:text-base">Bezier</span>
      </push-transition>
    </div>
  </div>
</template>
