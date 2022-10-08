<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-12 22:26:48
 * @ Modified by: Captain
 * @ Modified time: 2022-09-25 04:42:45
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
	height: calc(100vh - 50px);
	width: 100%;
	position: relative;
	overflow: hidden;
}
.fixed-header .app-main {
	padding-top: 50px;
}
</style>
