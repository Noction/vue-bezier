<template>
  <fade-transition
    group
    class="flex flex-row items-center gap-x-1 text-xl font-semibold md:gap-x-2"
  >
    <div key="icon">
      <slide-y-down-transition
        appear
        :duration="700"
        :delay="500"
      >
        <img class="h-7 md:h-10" src="../assets/logo.png">
      </slide-y-down-transition>
    </div>
    <div key="transitions">
      <slide-x-right-transition
        appear
        :duration="500"
        :delay="1500"
      >
        <span class="text-sm md:text-base">Transitions</span>
      </slide-x-right-transition>
    </div>
  </fade-transition>
</template>
