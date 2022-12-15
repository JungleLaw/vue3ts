<script setup lang="ts">
import { onMounted, ref } from 'vue';

const array = ['a', 'b', 'c', 'd', 'e'];
const current = ref(0);
let contentEl;
let children;
const deltaTop: number[] = [];
let currentTop;

onMounted(() => {
	console.log('document.getElementsByClassName', document.getElementsByClassName('anchor-content-wrapper'));
	contentEl = document.getElementsByClassName('anchor-content-wrapper')[0];

	children = contentEl.children;
	console.log('children', children);

	for (let i = 0; i < 5; i++) {
		// console.log('height', children[i].clientHeight);
		let pre = 60;
		let ch = 0;
		if (i > 0) {
			pre = deltaTop[i - 1];
			ch = children[i - 1].clientHeight;
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
</script>

<template>
	<div class="anchor-root">
		<div class="anchor-header">
			<template v-for="(item, index) of array" :key="index">
				<a :href="`#${item}`" @click.passive="current = index">
					<div :class="`${index === current ? 'current' : ''} anchor-item`">{{ item }}</div>
				</a>
			</template>
		</div>
		<div class="anchor-content-wrapper">
			<div id="a" class="anchor-content" style="background: red">aaa</div>
			<div id="b" class="anchor-content" style="background: aqua">
				<div>bbb</div>
				<div class="b2">bbb2</div>
			</div>
			<div id="c" class="anchor-content" style="background: violet">aaa</div>
			<div id="d" class="anchor-content" style="background: darkcyan">aaa</div>
			<div id="e" class="anchor-content" style="background: chocolate">aaa</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.anchor-root {
	display: flex;
	flex-flow: column nowrap;
	.anchor-header {
		display: flex;
		flex-flow: row nowrap;
		background-color: white;
		align-items: center;
		justify-content: center;
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
		overflow: auto;
		height: calc(100vh - 110px);
		.anchor-content {
			height: 500px;
			.b2 {
				width: 100px;
				background-color: olivedrab;
				position: -webkit-sticky;
				position: sticky;
				top: 0;
				float: right;
				right: 40px;
				z-index: 1;
			}
		}
	}
}
</style>
