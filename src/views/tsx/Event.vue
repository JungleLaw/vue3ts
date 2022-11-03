<template>
	<div class="event-root">
		<button @click.once="click">Click Once</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'tevent',
	data() {
		return {};
	},
	methods: {
		click() {
			console.log('click');
		},
	},
});
</script>

<style lang="scss" scoped>
.event-root {
	display: flex;
}
</style>
