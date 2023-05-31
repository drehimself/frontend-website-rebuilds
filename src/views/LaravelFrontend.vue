<script setup>
import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

const current = ref(null)
const currentText = ref('Big Idea')

const frameworks = {
  vue: 'Vue App',
  react: 'React App',
  nuxt: 'Nuxt.js App',
  next: 'Next.js App',
  alpine: 'Alpine.js App',
  svelte: 'Svelte App',
}

function setCurrent(framework) {
  clearInterval(timer)
  current.value = framework
  currentText.value = frameworks[framework]
}

function setCurrentNoReset(framework) {
  current.value = framework
  currentText.value = frameworks[framework]
}

let timer = null

startCycle()

function startCycle() {
  timer = setInterval(() => {
    const keys = Object.keys(frameworks)

    let currentIndex =
      current.value === null
        ? 0
        : keys.findIndex(framework => framework === current.value)

    const nextIndex = currentIndex + 1 < keys.length ? currentIndex + 1 : 0
    setCurrentNoReset(keys[nextIndex])
  }, 3000)
}
</script>

<template>
  <div class="text-gray-700 antialiased">
    <header class="container mx-auto">
      <nav class="flex items-center justify-between py-4">
        <div class="flex items-center">
          <a href="/">
            <img src="/logos/laravel.svg" alt="Logo" />
          </a>
          <a href="/" class="ml-4">
            <img src="/logos/laravel-word.svg" alt="Logo" />
          </a>
        </div>
        <div class="block lg:hidden">
          <button><Bars3Icon class="h-8 w-8" /></button>
        </div>
        <ul class="hidden lg:flex space-x-10">
          <li><a href="#">Forge</a></li>
          <li><a href="#">Vapor</a></li>
          <li><a href="#">Ecosystem</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Partners</a></li>
        </ul>
        <div class="hidden lg:flex items-center space-x-8">
          <button><MagnifyingGlassIcon class="h-6 w-6" /></button>
          <a
            href="#"
            class="border border-red-500 text-red-500 uppercase font-semibold px-4 py-2"
          >
            Documentation
          </a>
        </div>
      </nav>
    </header>

    <div class="hero flex justify-center items-center overflow-hidden">
      <div class="absolute mt-32 mb-56 z-50">
        <h2 class="text-center text-7xl font-bold">
          <span>The Powerhouse Behind</span> <br />
          <span class="text-red-500">Your {{ currentText }}</span>
        </h2>
        <p
          class="max-w-2xl mx-auto text-center leading-relaxed text-lg text-gray-500 mt-8"
        >
          Laravel is an intensely productive full-stack web framework. Pair
          Laravel and its rich ecosystem with Livewire, React, or Vue to build
          your next big idea and ship faster than you ever thought possible.
        </p>
        <div
          class="mx-auto max-w-2xl flex justify-center items-center space-x-4 mt-10"
        >
          <a
            href="#"
            class="bg-red-500 text-white uppercase font-semibold px-4 py-2"
            >Get Started</a
          >
          <a
            href="#"
            class="border border-red-500 text-red-500 uppercase font-semibold px-4 py-2"
          >
            Watch Laracasts
          </a>
        </div>
      </div>

      <!-- <div class="grid grid-cols-8"> -->
      <div
        class="grid grid-cols-8"
        style="transform: scale(125%) rotateX(60deg) rotateZ(45deg)"
      >
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          @mouseover="setCurrent('vue')"
          @mouseout="startCycle()"
          class="bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl transition duration-500 ease-in-out opacity-50"
          :class="{
            'shadow-[64px_64px_100px_-20px_theme(colors.red.400)] -translate-x-4 -translate-y-4 opacity-100':
              current === 'vue',
          }"
        >
          <img src="/logos/vue.svg" class="w-1/2" alt="vue" />
        </div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          @mouseover="setCurrent('alpine')"
          @mouseout="startCycle()"
          class="bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl opacity-50"
          :class="{
            'shadow-[64px_64px_100px_-20px_theme(colors.red.400)] -translate-x-4 -translate-y-4 opacity-100 transition duration-500 ease-in-out':
              current === 'alpine',
          }"
        >
          <img src="/logos/alpine.svg" class="w-1/2" alt="alpine" />
        </div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          @mouseover="setCurrent('nuxt')"
          @mouseout="startCycle()"
          class="bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl transition duration-500 ease-in-out opacity-50"
          :class="{
            'shadow-[64px_64px_100px_-20px_theme(colors.red.400)] -translate-x-4 -translate-y-4 opacity-100':
              current === 'nuxt',
          }"
        >
          <img src="/logos/nuxt.svg" class="w-1/2" alt="nuxt" />
        </div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          @mouseover="setCurrent('svelte')"
          @mouseout="startCycle()"
          class="bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl transition duration-500 ease-in-out opacity-50"
          :class="{
            'shadow-[64px_64px_100px_-20px_theme(colors.red.400)] -translate-x-4 -translate-y-4 opacity-100':
              current === 'svelte',
          }"
        >
          <img src="/logos/svelte.svg" class="w-1/2" alt="svelte" />
        </div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          @mouseover="setCurrent('next')"
          @mouseout="startCycle()"
          class="bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl transition duration-500 ease-in-out opacity-50"
          :class="{
            'shadow-[64px_64px_100px_-20px_theme(colors.red.400)] -translate-x-4 -translate-y-4 opacity-100':
              current === 'next',
          }"
        >
          <img src="/logos/next.svg" class="w-1/2" alt="next" />
        </div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          @mouseover="setCurrent('react')"
          @mouseout="startCycle()"
          class="bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl transition duration-500 ease-in-out opacity-50"
          :class="{
            'shadow-[64px_64px_100px_-20px_theme(colors.red.400)] -translate-x-4 -translate-y-4 opacity-100':
              current === 'react',
          }"
        >
          <img src="/logos/react.svg" class="w-1/2" alt="react" />
        </div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
        <div
          class="invisible bg-white shadow-2xl flex justify-center items-center aspect-square rounded-xl"
        ></div>
      </div>
    </div>
    <div class="next-section bg-gray-100">
      <div class="container mx-auto py-12">
        <h3 class="text-4xl font-bold">Next Section</h3>
        <div class="text-gray-500 leading-relaxed max-w-3xl mt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            officia ad dignissimos ipsum? Aliquid, debitis deserunt at cumque
            aspernatur dignissimos fugit culpa minima numquam. Inventore omnis
            perferendis molestiae, sed reiciendis tenetur minus quidem vitae.
            Explicabo dolores pariatur, nemo, earum id aliquid vel quidem
            voluptatum repudiandae, nobis quibusdam. Sequi, enim velit?
          </p>
          <p class="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            eligendi quam dolores, consectetur reprehenderit repudiandae natus
            totam atque repellat, ducimus nobis provident voluptatum? Autem
            velit laboriosam alias dicta possimus ut, hic commodi quod veniam
            earum nam sed excepturi, non aperiam?
          </p>
        </div>
      </div>
    </div>
    <div class="another-section bg-white">
      <div class="container mx-auto py-12">
        <h3 class="text-4xl font-bold">Another Section</h3>
        <div class="text-gray-500 leading-relaxed max-w-3xl mt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            in culpa. Placeat nisi voluptate minima, voluptatem eos
            reprehenderit quia ullam!
          </p>

          <p class="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            eligendi quam dolores, consectetur reprehenderit repudiandae natus
            totam atque repellat, ducimus nobis provident voluptatum? Autem
            velit laboriosam alias dicta possimus ut, hic commodi quod veniam
            earum nam sed excepturi, non aperiam?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
