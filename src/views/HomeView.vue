<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="max-w-3xl mx-auto text-gray-700 antialiased divide-y px-4 py-10">
    <header
      class="flex flex-col sm:flex-row sm:items-center justify-between py-4"
    >
      <div>
        <h1 class="text-2xl font-semibold">Front-end Website Rebuilds</h1>
        <p class="text-gray-500">Tailwind CSS, Vue.js, and other tools</p>
      </div>
      <div class="flex items-center space-x-5 mt-2 sm:mt-0">
        <a href="https://github.com/drehimself/frontend-website-rebuilds">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="h-6 w-6 text-gray-500 fill-current"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
            ></path>
          </svg>
        </a>
        <a href="https://youtube.com/drehimself">
          <svg viewBox="0 0 310 310" class="w-7 h-7 text-gray-500 fill-current">
            <path
              d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938
		C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527
		C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991
		c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764
		c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861
		C204.394,157.263,202.325,160.684,199.021,162.41z"
            />
          </svg>
        </a>
        <a href="https://twitter.com/drehimself">
          <svg
            viewBox="0 0 20 20"
            aria-hidden="true"
            class="h-6 w-6 text-gray-500 fill-current"
          >
            <path
              d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84"
            ></path>
          </svg>
        </a>
      </div>
    </header>
    <main class="py-4">
      <ul class="space-y-4">
        <li class="flex flex-col">
          <RouterLink
            to="/laravel-frontend"
            class="text-lg font-semibold underline hover:text-gray-900"
          >
            Laravel Frontend
          </RouterLink>
          <p class="text-slate-500">
            3D perspective grid of icons using rotateX and rotateZ. <br />
            <span class="flex">
              <a
                href="https://youtu.be/uqTnkKJC7lQ"
                class="text-slate-600 hover:underline"
                >Screencast</a
              >
              <span class="mx-2">&middot;</span>
              <a
                href="https://laravel.com/frontend"
                class="text-slate-600 hover:underline"
                >Actual Site</a
              >
            </span>
          </p>
        </li>
      </ul>
    </main>
  </div>
</template>
