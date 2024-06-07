<template>
    <div>
        <nav class="flex justify-between items-center flex-wrap p-6 bg-purple-950">
               <div class="flex items-center flex-shrink-0 text-white mr-6">
                   <NuxtLink to="/">
                    <NuxtImg class="w-20" src="../public/image/logoA.png"/>
                   </NuxtLink>
               </div>

                <div class="block lg:hidden">
                    <UButton color="orange" 
                        class="flex items-center px-3 py-2  rounded text-teal-200 hover:text-white hover:border-white"
                        @click="menu"
                    >
                        <UIcon name="i-heroicons-bars-3"/>
                    </UButton>
                </div>

                <div 
                    :class="{hidden: !isOpen, 'inline-block': isOpen}"
                    class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
                >
                    <div class="text-sm lg:flex lg:text-xl text-white">
                        <NuxtLink class="block mt-4 lg:iniline-block lg:mt-0 hover:text-orange-400 mr-4" to="/menu">Menu</NuxtLink>
                    </div>
                </div>
        </nav>
        <slot/>
    </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)
const menu = () => {
    isOpen.value = !isOpen.value
}
</script>