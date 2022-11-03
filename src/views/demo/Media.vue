<template>
	<div class="media-root">
		<div class="inner-box">
			<span class="aaa">AAAA</span>
			<span class="bbb">BBB</span>
			<div class="ddd">
				<div>
					<blockquote>
						<span>CCC</span>
					</blockquote>
				</div>
			</div>
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
	mounted() {},
});
</script>

<style lang="scss" scoped>
@media screen and (orientation: portrait) {
	.media-root {
		width: 100%;
		height: 100%;
		background-color: red;
	}
}
@media screen and (max-width: 600px) {
	.inner-box {
		width: 100px;
		height: 100px;
		background-color: burlywood;
	}
}
@media screen and (min-width: 600px) {
	.inner-box {
		width: 100px;
		height: 100px;
		background-color: lime;
	}
}
@media screen and (orientation: landscape) {
	.media-root {
		width: 100%;
		height: 100%;
		background-color: blue;
	}
}
// .media-root .inner-box .aaa {
// .media-root .inner-box span {
.inner-box > .aaa {
	color: red;
}
</style>
