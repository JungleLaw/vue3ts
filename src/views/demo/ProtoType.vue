<template>
	<div class="proot">
		<div>ProtoType</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Sub } from './Sub';

export default defineComponent({
	data() {
		return {
			obj: Object({ a: 1, b: 2 }),
			array: Array(),
			test: new Sub('b', 'c'),
		};
	},
	mounted() {
		console.debug('test', this.test);
		this.test.run();
		console.debug('obj', this.obj);
		console.debug('obj', this.obj.prototype);
		// this.obj.prototype = { c: 3, d: 4 };
		// this.obj.prototype.c = 3;
		// this.obj.prototype.d = 4;
		console.debug('obj', this.obj);
		console.debug('array', this.array);
		console.debug('func', this.fn);
	},
	methods: {
		fn() {
			console.debug('func: this is a func');
		},
	},
});
</script>

<style lang="scss" scoped></style>
