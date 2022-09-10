<!-- @format -->

<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-09 15:28:13
 * @ Modified by: Captain
 * @ Modified time: 2022-09-09 17:11:57
 * @ Description:
 -->

<!-- @format -->

<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.svg" />
		<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
	</div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default {
	name: 'HomeView',
	components: {
		HelloWorld,
	},
};
</script>
