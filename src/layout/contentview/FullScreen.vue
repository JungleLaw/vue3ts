<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-12 22:26:48
 * @ Modified by: Captain
 * @ Modified time: 2022-12-16 15:28:18
 * @ Description:
 -->

<template>
	<section class="main-content-root">
		<!-- <transition name="fade-transform" mode="out-in"> -->
		<router-view :key="key" />
		<!-- </transition> -->
	</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'FullScreen',
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
	height: 100vh;
	width: 100%;
	position: relative;
	overflow: hidden;
}
.fixed-header .app-main {
	padding-top: 50px;
}
</style>
