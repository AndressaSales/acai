<template>
    <div>
        <p class="text-gl text-center font-light"><mark class="text-red-500 bg-transparent">*</mark>Escolha seu copo</p>

        <main class="grid grid-cols-1 md:grid-cols-2  gap-7 mx-auto max-w-3xl px-2 mb-16 mt-10 ">
            
            <div class="flex gap-2" v-for="pote in potes" :key="pote.id">
                <img 
                    :src="pote.url"
                    alt="produto.name"
                    class="w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-200"
                >

                <div>
                    <p class="font-bold">{{ pote.num }}</p>
                    

                    <div class="flex items-center gap-2 justify-between mt-3">
                        <p class="font-bold text-lg">R${{pote.preco }}</p>
                        <UButton 
                            color="orange"
                            class=" px-3 rounded"
                            @click="addP(pote)"
                        >
                            <UIcon class="text-white text-lg" name="i-heroicons-shopping-cart"/>
                        </UButton>
                    </div>
                </div>
            </div>
        </main>

        <h1 class="text-center text-xl font-bold">Frutas</h1>

        <main class="grid grid-cols-2 lg:grid-cols-3 gap-7 mx-auto max-w-3xl px-2 mb-16 mt-10">
            <div class="flex flex-col gap-3" v-for="fruta in frutas" :key="fruta.id">
              <div class="flex justify-center items-center">
                    <NuxtImg
                        :src="fruta.url" 
                        alt="fruta"
                        class="w-28 rounded-lg items-center items-center flex hover:scale-110 hover:-rotate-2 duration-200"
                    />
              </div>

                <div class="flex flex-col">
                    <p class="font-bold text-center">{{ fruta.name }}</p>

                    <div class="flex gap-1 grid place-items-center mt-3">
                        <UButton 
                            color="orange" 
                            @click="addF(fruta)"
                        >
                            <UIcon name="i-heroicons-plus"/>
                        </UButton>
                    </div>
                </div>
            </div>
        </main>

        <h1 class="text-center text-xl font-bold py-5">Confeitos</h1>
        <p class="text-gl text-center font-light"><mark class="text-red-500 bg-transparent">*</mark>Para cada confeito será adicionado 2 reis</p>

        <main class="grid place-items-center grid-cols-1 md:grid-cols-2 ">
            <div class="flex items-start w-2/4 mb=[20px] pb-3" v-for="confeito in confeitos" :key="confeito.id">
                <UCheckbox class="items-center " @click="addC(confeito)">
                    <template #label>
                        <span class="ml-6 font-bold">{{ confeito.name }}</span>
                    </template>
                </UCheckbox>
            </div>
        </main>

        <div>
            <UButton
                color="orange"
                block
                @click="open = true"
                class="rouded-none py-3 bottom-0 z-40 font-bold"
            >
                Mwu Carrinho
            </UButton>
        </div>

        <UModal v-model="open" :transition="false">
            <div class="p-4">
                <h3 class="font-bold text-center text-xl mb-2">Meu Carrinho</h3>
                <div class="flex justify-between mb-2 flex-col">
                    <div class="grid grid-cols-1 divide-y">
                        <div class="flex justify-between" v-for="pote in cart" :key="pote.id">
                            <h1 class="font-bold">Copo:</h1>
                            <p>{{ pote.num }}</p>
                        </div>

                        <div v-for="fruta in cart" :key="fruta.id">
                            <h1 class="font-bold">Frutas: </h1>
                            <p>{{ fruta.name }}</p>
                        </div>

                    </div>

                </div>
            </div>
        </UModal>
    </div>
</template>
 
<script setup lang="ts">
const open = ref(false)
import { api } from '../store/api';
const {potes, frutas, confeitos, cart, addP, addF, addC} = api()
</script>