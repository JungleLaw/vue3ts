<template>
	<div class="float-root">
		<!-- <span class="txt-span">span</span> -->
		<div class="title-box">
			<span class="title">Title</span>
		</div>
		<div class="content-box">
			<div class="scroll-box">
				<div>scroll-box</div>
				<div class="float-box">
					<div>float-box</div>
					<div class="inner-box">
						<div>inner-box</div>
					</div>
				</div>
			</div>
			<div class="plus-box">plus</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: '',
	data() {
		return {};
	},
});
</script>

<style lang="scss" scoped>
.float-root {
	width: 100%;
	height: 100%;
	position: relative;

	.title-box {
		position: fixed;
		width: 100%;
		height: 50px;
		background-color: gray;
		z-index: 100;
		display: flex;
		.title {
			font-size: 30px;
			margin: auto 10px;
		}
	}
	.content-box {
		width: 100%;
		height: calc(100vh - 100px);
		overflow-y: scroll;
		position: absolute;
		top: 50px;
		.plus-box {
			width: 50px;
			height: 50px;
			background-color: violet;
			position: fixed;
			right: 60px;
			bottom: 60px;
		}
		.scroll-box {
			width: 100%;
			height: 2000px;
			position: relative;
			.float-box {
				width: 400px;
				height: 400px;
				background-color: aqua;
				position: absolute;
				top: 10px;
				left: 10px;

				.inner-box {
					width: 100px;
					height: 100px;
					background-color: lime;
					position: absolute;
					top: 10px;
					left: 10px;
				}
			}
		}
	}
}
</style>
