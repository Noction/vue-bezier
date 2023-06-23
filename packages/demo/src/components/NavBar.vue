<template>
  <nav
    class="absolute flex w-full justify-between bg-white/95 px-8 py-4 dark:border-slate-50/[0.06] dark:bg-transparent lg:border-b lg:border-slate-900/10"
  >
    <nav-logo />
    <div class="right flex flex-row items-center gap-x-4">
      <span
        class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold"
        v-text="version"
      />
      <a
        class="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
        target="_blank"
        href="https://www.npmjs.com/package/@noction/vue-bezier"
      >
        <svg
          id="npm"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          class="h-7 w-10 pt-1"
          viewBox="0 0 780 250"
          xml:space="preserve"
        >
          <path
            class="st0"
            fill="currentColor"
            d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z   M0,200h100V50h50v150h50V0H0V200z"
          />
        </svg>
      </a>
      <a
        class="text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
        target="_blank"
        href="https://github.com/Noction/vue-bezier"
      >
        <svg
          class="h-6 w-6"
          viewBox="0 0 33 33"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="GitHub-Mark"
              transform="translate(-136.000000, -55.000000)"
              fill="currentColor"
            >
              <path
                id="Fill-4"
                d="M152.608,55.455 C143.614,55.455 136.32,62.748 136.32,71.745 C136.32,78.942 140.987,85.047 147.46,87.201 C148.275,87.351 148.572,86.848 148.572,86.416 C148.572,86.03 148.558,85.005 148.55,83.646 C144.019,84.63 143.063,81.462 143.063,81.462 C142.322,79.58 141.254,79.079 141.254,79.079 C139.775,78.069 141.366,78.089 141.366,78.089 C143.001,78.204 143.861,79.768 143.861,79.768 C145.314,82.257 147.674,81.538 148.602,81.121 C148.75,80.069 149.171,79.351 149.636,78.944 C146.019,78.533 142.216,77.135 142.216,70.893 C142.216,69.115 142.851,67.66 143.893,66.522 C143.725,66.11 143.166,64.453 144.053,62.211 C144.053,62.211 145.42,61.773 148.532,63.881 C149.831,63.519 151.225,63.339 152.61,63.332 C153.994,63.339 155.387,63.519 156.688,63.881 C159.798,61.773 161.163,62.211 161.163,62.211 C162.052,64.453 161.493,66.11 161.326,66.522 C162.37,67.66 163,69.115 163,70.893 C163,77.151 159.191,78.528 155.563,78.931 C156.147,79.434 156.668,80.428 156.668,81.948 C156.668,84.125 156.648,85.882 156.648,86.416 C156.648,86.852 156.942,87.359 157.768,87.2 C164.236,85.041 168.899,78.94 168.899,71.745 C168.899,62.748 161.605,55.455 152.608,55.455"
              />
            </g>
          </g>
        </svg>
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import * as Package from './../../package.json'
import NavLogo from './NavLogo.vue'

const { version } = Package

</script>
