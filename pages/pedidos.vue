<template>
    <div>

        
   

        <div v-for="confeito in cart" :key="confeito.id">
            <p>{{ confeito.name }}</p>
        </div>
    </div>
</template>

<script setup lang="ts"> 
import { api } from '~/store/api';
const {cart} = api()
</script>