<template>
	<div class="dialog-root">
		<div>
			<button @click="open">open</button>
			<button @click="close">close</button>
		</div>
		<mDialog ref="dialogRef"></mDialog>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import mDialog from './dialog.vue';

export default defineComponent({
	name: '',
	components: {
		mDialog,
	},
	data() {
		return {
			dialogRef: ref(null),
		};
	},
	methods: {
		open() {
			this.$refs.dialogRef.show();
		},
		close() {
			this.$refs.dialogRef.dismiss();
		},
	},
});
</script>

<style lang="scss" scoped>
.dialog-root {
	display: flex;
	flex-flow: column nowrap;
}
</style>
