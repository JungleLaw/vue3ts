<template>
	<div>
		<div class="root">
			<div>
				<span>variable</span><span>{{ valueParam }}</span>
			</div>
			<div>
				<span>key:</span>
				<span>
					<input type="text" v-model="keyParam" style="width: 200px" />
				</span>
				<span>
					<button @click="">write</button>
				</span>
				<span>
					<button>read</button>
				</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Cookies from '@/global/storage/cache';
import { ref } from 'vue';

const keyParam = ref('');
const valueParam = ref('');

const write = (key, value) => {
	Cookies.write(key, value);
};

const read = key => {
	Cookies.read(key);
};
</script>

<style lang="scss" scoped>
.root {
	display: flex;
	flex-flow: column nowrap;
}
</style>
