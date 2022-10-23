<template>
	<div>
		<div>vslot</div>
		<div>
			<div>header</div>
			<slot name="header" :h="h"></slot>
		</div>
		<div>
			<div>default</div>
			<slot :b="b"></slot>
		</div>
		<div>
			<div>footer</div>
			<slot name="footer" :f="f"></slot>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: '',
	data() {
		return {
			h: 1,
			b: 2,
			f: 3,
		};
	},
});
</script>

<style lang="scss" scoped></style>
