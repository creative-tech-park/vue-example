
<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const data = ref(null);
async function getData() {
    const res = await axios.get('https://dummyjson.com/products');
    data.value = res.data;
}
onMounted(() => {
getData()
})
</script>
<template>
    {{ data }}
</template>