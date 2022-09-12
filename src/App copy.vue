<!-- @format -->

<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-08 14:35:07
 * @ Modified by: Captain
 * @ Modified time: 2022-09-12 04:19:14
 * @ Description:
 -->

<template>
	<div class="app-root">
		<div id="nav">
			<router-link to="/">Home</router-link>
			|
			<router-link to="/about">About</router-link>
			|
			<router-link to="/lifecycle">Lifecycle</router-link>
			|
			<router-link to="/ref">Ref</router-link>
			|
			<router-link to="/fragment">Fragment</router-link>
			|
			<router-link to="/render">Render</router-link>
			|
			<router-link to="/ts">TypeScript</router-link>
			|
			<router-link to="/layout">Layout</router-link>
			|
			<router-link to="/mouse">Mouse</router-link>
			|
		</div>
		<router-view />
	</div>
</template>

<style lang="scss" scoped>
body {
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
}

.app-root {
	margin: 0;
	padding: 0;
	#nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
}
</style>
