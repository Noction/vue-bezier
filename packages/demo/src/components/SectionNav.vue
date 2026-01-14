<template>
  <nav class="lg:col-span-3 flex w-full justify-center justify-items-center font-semibold text-slate-600 dark:text-slate-300 text-sm lg:text-base">
    <div class="flex justify-evenly items-center w-full max-w-md">
      <router-link
        :to="{ name: 'appear-dissolve' }"
        class="flex gap-x-2 items-center py-2 justify-center flex-1 group"
        active-class="text-sky-500 dark:text-sky-400"
      >
        <i-lucide-square-dashed-bottom class="group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors" />
        Appear
      </router-link>
      <router-link
        :to="{ name: 'between-dissolve' }"
        class="flex gap-x-2 items-center justify-center flex-1 group"
        active-class="text-emerald-500 dark:text-emerald-400"
      >
        <i-lucide-squares-subtract class="group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors" />
        Between
      </router-link>
      <router-link
        :to="{ name: 'list-dissolve' }"
        class="flex gap-x-2 items-center justify-center flex-1 group"
        active-class="text-yellow-500 dark:text-yellow-400"
      >
        <i-lucide-square-stack class="group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors" />
        List
      </router-link>
    </div>
  </nav>
</template>
