<template>
	<div class="proot">
		<div>ProtoType</div>
	</div>
</template>

<script lang="ts">
import Logger from '@/global/Logger';
import { Sub, Test } from './obj.js';

export default {
	data() {
		return {
			obj: Object({ a: 1, b: 2 }),
			array: Array(),
			func: undefined,
			test: new Sub('b', 'c'),
		};
	},
	mounted() {
		Logger.debug('test', this.test);
		this.test.run();
		Logger.debug('obj', this.obj);
		Logger.debug('obj', this.obj.prototype);
		// this.obj.prototype = { c: 3, d: 4 };
		// this.obj.prototype.c = 3;
		// this.obj.prototype.d = 4;
		Logger.debug('obj', this.obj);
		Logger.debug('array', this.array);
		this.func = this.fn;
		Logger.debug('func', this.fn);
	},
	methods: {
		fn() {
			Logger.debug('func: this is a func');
		},
	},
};
</script>

<style lang="scss" scoped></style>
