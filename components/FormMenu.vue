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
                            @click="add(pote)"
                        >
                            <UIcon class="text-white text-lg" name="i-heroicons-shopping-cart"/>
                        </UButton>
                    </div>
                </div>
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
            <div class="p-4 divide-y-2">
                <h3 class="font-bold text-center text-xl mb-2">Meu Carrinho</h3>
                <div class="flex justify-between mb-2 flex-col" v-for="pote in cart" :key="pote.id">
                    <div class="flex justify-between ">
                        <div>
                            <p class="font-medium" >{{ pote.name }}</p>
                            <p class="font-medium mt-2" >R${{ pote.preco }}</p>
                        </div>

                        <div>
                                <UButton color="red" @click="remove(pote.id)">
                                    <UIcon color="white" class="text-lg" name="i-heroicons-trash"/>
                                </UButton>
                            </div>
                    </div>

                </div>
                <p class="font-bold">Total: <span>{{ total }}</span></p>
                <p class="font-bold mt-4">Digite seu nome:</p>
                <input type="text" class="w-full border-2 p-1 my-1">

                <div>
                    <UButton @click="pedidos" class="bg-green-500 text-white px-4 py-1">Finalizar pedido</UButton>
                </div>
            </div>
        </UModal>
    </div>
</template>
 
<script setup lang="ts">
const open = ref(false)
import { api } from '../store/api';
const {potes, cart, add, remove, total, pedidos} = api()
</script>