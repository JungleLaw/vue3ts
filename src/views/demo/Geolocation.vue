<template>
	<div>{{ status }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: '',
	data() {
		return {
			status: Object(),
		};
	},
	mounted() {
		if (!navigator.geolocation) {
			this.status.textContent = '你的浏览器不支持地理位置';
		} else {
			this.status.textContent = '定位中……';
			navigator.geolocation.getCurrentPosition(this.success, this.error);
		}
	},
	methods: {
		success(position: any) {
			const latitude = position.coords.latitude;
			const longitude = position.coords.longitude;
			this.status.textContent = `纬度：${latitude} °，经度：${longitude} °`;
		},
		error() {
			this.status.textContent = '无法获取你的位置';
		},
	},
});
</script>

<style lang="scss" scoped></style>
