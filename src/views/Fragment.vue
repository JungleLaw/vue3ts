<!-- @format -->

<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-09 15:28:13
 * @ Modified by: Captain
 * @ Modified time: 2022-09-09 16:34:19
 * @ Description:
 -->
<template>
	<D1 @log.once="log"></D1>
	<D2></D2>
</template>

<script lang="ts">
// 片段
import D1 from './components/D1.vue';
import D2 from './components/D2.vue';
export default {
	name: 'VueFragment',
	components: {
		D1,
		D2,
	},
	methods: {
		log() {
			console.log('print log');
		},
	},
};
</script>

<style scoped></style>
