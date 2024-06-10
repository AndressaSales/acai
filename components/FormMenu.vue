<template>
    <div>

        <main class="grid grid-cols-1 md:grid-cols-3  gap-7 mx-auto max-w-3xl px-2 mb-16 mt-10 ">
            <div class="flex flex-col gap-3" v-for="pote in potes" :key="pote.id">
              <div class="flex justify-center items-center">
                    <img 
                        :src="pote.url"
                        alt="produto.name"
                        class="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-200"
                    >
              </div>

                <div>
                    <p class="font-bold text-center">{{ pote.name }}</p>
                    <p class="text-center text-sm">{{ pote.descricao }}</p>
                    

                    <div class="flex flex-row gap-2 justify-center items-center mt-2">
                        <p class="font-bold text-lg">R${{ pote.preco }}</p>
                        <UButton 
                            color="orange"
                            class=" px-3 rounded"
                            @click="adicionar(pote)"
                        >
                            <UIcon class="text-white text-lg" name="i-heroicons-shopping-cart"/>
                        </UButton>
                    </div>
                </div>
            </div>
        </main>

        <div class="justify-center items-center flex">
            <UButton  class="bg-purple-950 w-40" >
                <NuxtLink to="/carrinho">
                    <UIcon class="text-white text-xl text-center" name="i-heroicons-arrow-right"/>
                </NuxtLink>
            </UButton>
        </div>
    </div>
</template>
 
<script setup lang="ts">
import {api} from '~/store/api'
const {potes, adicionar} = api()
</script>