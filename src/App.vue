<!-- @format -->

<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-08 14:35:07
 * @ Modified by: Captain
 * @ Modified time: 2022-09-09 15:31:32
 * @ Description:
 -->

<template>
	<div class="root">
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
		</div>
		<router-view />
	</div>
</template>

<style lang="scss">
body {
	margin: 0;
	padding: 0;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

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

.root {
	margin: 0;
	padding: 0;
}
</style>
