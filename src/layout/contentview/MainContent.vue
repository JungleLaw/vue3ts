<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-12 22:26:48
 * @ Modified by: Captain
 * @ Modified time: 2022-09-16 01:55:08
 * @ Description:
 -->

<template>
	<section class="main-content-root">
		<transition name="fade-transform" mode="out-in">
			<router-view :key="key" />
		</transition>
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'MainContainer',
	mounted() {},
	computed: {
		key() {
			return this.$route.path;
		},
	},
});
</script>

<style lang="scss" scoped>
.main-content-root {
	width: 100%;
	height: 100%;
}
</style>
