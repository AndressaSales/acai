<template>
    <div class="bg-slate-100 min-h-screen">
        <div class="flex flex-row justify-center items-center gap-4 mt-4">
            <h1 class="text-orange-600 font-bold text-center text-3xl lg:text-5xl">Faça seu pedido</h1>
            <div>
                <NuxtLink to="/pedidos">
                    <UIcon class="lg:text-5xl text-3xl text-blue-800" name="i-heroicons-arrow-right"/>
                </NuxtLink>
            </div>
        </div>
        <FormMenu/>
    </div>
</template>