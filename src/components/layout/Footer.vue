<script setup lang="ts">

</script>

<template>
  <footer class="bg-gray-700 text-neutral-300">
    <div class="mx-auto container px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 max-xl:grid-cols-2 max-lg:grid-cols-1">
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <router-link class="flex" :to="{name: 'home'}">
              <img src="@/assets/images/logo-white.png" alt="">
            </router-link>
          </div>
          <p class="text-sm text-neutral-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam diam
            varius tellus imperdiet.</p>
          <div class="flex gap-2">
            <input class="w-full rounded-xl bg-neutral-800 px-3 py-2 text-sm outline-none placeholder-neutral-500"
                   placeholder="Enter your email"/>
            <button class="rounded-xl bg-white px-4 py-2 text-neutral-900">Subscribe</button>
          </div>
        </div>
        <div>
          <h4 class="mb-3 font-semibold text-white">Customer Care</h4>
          <ul class="space-y-2 text-sm text-neutral-400 hover:text-neutral-100">
            <li>
              <router-link to="#" class="text-neutral-400 hover:text-neutral-100 block">
                Contact us
              </router-link>
            </li>
            <li>
              <router-link to="#" class="text-neutral-400 hover:text-neutral-100 block">
                Shipping Costs & Terms
              </router-link>
            </li>
            <li>
              <router-link to="#" class="text-neutral-400 hover:text-neutral-100 block">
                Our Return Policy
              </router-link>
            </li>
            <li>
              <router-link to="#" class="text-neutral-400 hover:text-neutral-100 block">
                Website FAQ
              </router-link>
            </li>
            <li>
              <router-link to="#" class="text-neutral-400 hover:text-neutral-100 block">
                Promotional Details
              </router-link>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="mb-3 font-semibold text-white">Company Info</h4>
          <ul class="space-y-2 text-sm text-neutral-400">
            <li>
              <router-link to="#" class="text-neutral-400 hover:text-neutral-100 block">
                Everything but the truck
              </router-link>
            </li>
            <li>
              <router-link to="#" class="text-neutral-400 hover:text-neutral-100 block">
                About Us
              </router-link>
            </li>
            <li>
              <router-link to="#" class="text-neutral-400 hover:text-neutral-100 block">
                Visit Our Showrooms
              </router-link>
            </li>
            <li>
              <router-link to="#" class="text-neutral-400 hover:text-neutral-100 block">
                Locations & Hours
              </router-link>
            </li>
            <li>
              <router-link to="#" class="text-neutral-400 hover:text-neutral-100 block">
                Careers
              </router-link>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="mb-3 font-semibold text-white">Services</h4>
          <ul class="space-y-2 text-sm text-neutral-400">
            <li>
              <router-link to="#" class="text-neutral-400 hover:text-neutral-100 block">
                Request a Quote
              </router-link>
            </li>
            <li>
              <router-link to="#" class="text-neutral-400 hover:text-neutral-100 block">
                Service Department
              </router-link>
            </li>
            <li>
              <router-link to="#" class="text-neutral-400 hover:text-neutral-100 block">
                Find a Sales Rep
              </router-link>
            </li>
            <li>
              <router-link to="#" class="text-neutral-400 hover:text-neutral-100 block">
                Federal Government Sales
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div
          class="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500">
        <p>Copyright © 2025 THE BARNES · All Rights Reserved</p>
        <div class="flex items-center gap-4">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Cookies</span>
        </div>
      </div>
    </div>
  </footer>
</template>