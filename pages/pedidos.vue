<template>
    <div>
        <div class=" flex flex-row mt-4 justify-center items-center gap-4">
            <div class="flex float-left">
                <NuxtLink to="/menu">
                    <UIcon name="i-heroicons-arrow-left" class="text-red-600 pt-4 text-3xl lg:text-5xl pt-3" />
                </NuxtLink>
            </div>
            <h1 class="font-bold text-4xl lg:text-5xl text-center text-orange-500">Meus Pedidos</h1>
        </div>

        <div>
            <div v-for="pedido in pedidos" :key="pedido.id">
               {{ pedido.name }} {{ pedido.pote }} {{ pedido.total }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"> 
import { api } from '~/store/api';
const {pedidos} = api()
</script>