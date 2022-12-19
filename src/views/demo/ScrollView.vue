<script setup lang="ts">
import { onMounted, ref } from 'vue';

const html = `</br></br></br></br></br></br></br></br></br></br><p>行前准备</p><p>这里是aaa</p><p><strong>开始准备</strong></p><div><span style="font-size: 12px;">1、那怎么搞</span></div><div><span style="font-size: 12px;">2、就这么搞吧</span></div>`;

const array = ['a', 'b', 'c', 'd', 'e'];
const current = ref(0);
let contentEl;
let children;
const deltaTop: number[] = [];
let currentTop;

onMounted(() => {
	console.log('document.getElementsByClassName', document.getElementsByClassName('anchor-root'));
	contentEl = document.getElementsByClassName('anchor-root')[0];

	children = document.getElementsByClassName('anchor-content-wrapper')[0].children;
	console.log('children', children);

	for (let i = 0; i < 5; i++) {
		// console.log('height', children[i].clientHeight);
		let pre = 60;
		let ch = 0;
		if (i > 0) {
			pre = deltaTop[i - 1];
			ch = children[1].clientHeight;
		}
		deltaTop.push(ch + pre);
	}
	console.log(deltaTop);
	contentEl.addEventListener('scroll', e => {
		currentTop = contentEl.scrollTop + 60;
		console.log('scrollTop', currentTop);

		// console.log('scrollHeight', contentEl.scrollHeight);
		// console.log('clientHeight', contentEl.clientHeight);
		let c = 0;
		for (let i = 0; i < 5; i++) {
			// console.log('clientTop', children[i].offsetTop);
			if (currentTop > deltaTop[i] - (children[i].clientHeight * 3) / 4) {
				c = i;
			}
		}
		current.value = c;
	});
});
const headerItemClick = index => {
	current.value = index;
	contentEl.scrollTop = deltaTop[index] - 60;
};
</script>

<template>
	<div class="anchor-root">
		<div class="anchor-header">
			<div style="flex: 1"></div>
			<template v-for="(item, index) of array" :key="index">
				<div
					:class="`${index === current ? 'current' : ''} anchor-item`"
					@click.passive="headerItemClick(index)"
				>
					{{ item }}
				</div>
			</template>
			<div style="flex: 1"></div>
		</div>
		<div class="anchor-content-wrapper">
			<div class="b2">bbb2</div>

			<div id="a" class="anchor-content" style="background: red">aaa</div>
			<div id="b" class="anchor-content" style="background: aqua">
				<div>bbb</div>
				<div>bbb</div>
				<div class="text">
					bb basd bbbas dbbbas dbbba sdbbbasdbbbasdb bbasdbbbas d bbbasdbb basdbb basdbb basdbb bas dbbb asd
					bb b asdbbbasd bbbasdbbbasdbbbasdbb basdbbbasdbbbasdbbbasdbbbasdbbbasd bbbasdbbbasdbbb asdbbba
					sdbbbasdbbb asdbbb asdbbbasdbbbasdbbbasdbbbasdb bbasdbbbasdbbbasdbbb asdbbbasdbbbasdbbbasdbbbasdb
					bbasdbbbasdbbbasdb bbasdbbbasdbbbasdbbbasdbbbasdbbbasdbbbasdbbbasdbbbasdbbbasdbbbasdbbbasdb
					bbasdbbbasdbbbasdbbbasdbbbasdbbbasdbbbasdbbbasdbbbasdbbbasdbbbasdbbbasdbbbasdbbbasdbbbasdbbbas dbb b
					asd bbb asd bbbasdb bbasdbbbasdbbbasd bbbasdbbbasdbbbasdbbbasdbbbasdbb basdbbbasd
					bbbasdbbbasdbbbasdbbbasd
				</div>
				<div v-html="html"></div>
				<div>bbb</div>
				<div>bbb</div>
				<div>bbb</div>
			</div>
			<div id="c" class="anchor-content" style="background: violet">aaa</div>
			<div id="d" class="anchor-content" style="background: darkcyan">aaa</div>
			<div id="e" class="anchor-content" style="background: chocolate">aaa</div>
		</div>
		<div class="footer"></div>
	</div>
</template>
<style lang="scss" scoped>
.anchor-root {
	// display: flex;
	// flex-flow: column nowrap;
	overflow-y: auto;
	height: 100vh;

	.anchor-header {
		width: 100%;
		position: fixed;
		display: flex;
		flex-flow: row nowrap;
		background-color: white;
		align-items: center;
		justify-content: center;
		z-index: 12;
		.anchor-item {
			width: 100px;
			text-align: center;
			line-height: 60px;
			height: 60px;
			font-size: 20;
		}

		.current {
			background-color: aqua;
		}
	}
	.anchor-content-wrapper {
		padding-top: 60px;
		// overflow: auto;
		// height: calc(100vh - 110px);
		.b2 {
			width: 100px;
			background-color: olivedrab;
			position: -webkit-sticky;
			position: sticky;
			top: 60px;
			float: right;
			right: 40px;
			z-index: 1;
		}
		.anchor-content {
			height: 500px;

			.text {
				// width: 200px;
				word-break: break-all;
			}
		}
	}
	.footer {
		height: 1000px;
		background-color: white;
	}
}
</style>
