<script setup lang="ts">
import {api} from '~/store/api'
const {cart, total, remove} = api()
</script>

<template>
    <div>
       <h1 class="font-bold text-center py-3 text-3xl">Meu Carrinho</h1>

       <div v-for="pote in cart" :key="pote.id">
            <div >
                 <div class="flex flex-row py-3 justify-between pl-4 pr-4 gap-3">
                        <p class="font-medium" >{{ pote.name }}</p>
                        <p class="font-medium " >R${{ pote.preco }}</p>

                        <div>
                            <UButton color="red" @click="remove(pote.id)">
                                <UIcon color="white" class="text-lg" name="i-heroicons-trash"/>
                            </UButton>
                        </div>
                 </div>
            </div>     
       </div>
       <p class="font-bold">total: {{ total }}</p>
    </div>
</template>