<!-- @format -->

<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-12 21:06:39
 * @ Modified by: Captain
 * @ Modified time: 2022-09-13 00:35:47
 * @ Description:
 -->

<template>
	<div class="layout-root">
		<mian-content></mian-content>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainContent from './MainContent.vue';

export default defineComponent({
	name: 'Layout',
	components: {
		MainContent,
	},
});
</script>

<style lang="scss" scoped>
.layout-root {
	width: 100%;
	height: 100%;
}
</style>
