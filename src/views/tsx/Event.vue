<template>
	<div class="event-root">
		<button @click.once="click">Click Once</button>
	</div>
</template>

<script lang="ts">
import Logger from '@/global/Logger';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'tevent',
	data() {
		return {};
	},
	methods: {
		click() {
			Logger.log('click');
		},
	},
});
</script>

<style lang="scss" scoped>
.event-root {
	display: flex;
}
</style>
