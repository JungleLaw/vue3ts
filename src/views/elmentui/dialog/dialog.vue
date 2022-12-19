<script setup lang="ts">
import { ref } from 'vue';

const visible = ref(false);

const show = () => {
	visible.value = true;
	console.log('show');
};

const dismiss = () => {
	visible.value = false;
};

defineExpose({ show, dismiss });
</script>

<template>
	<el-dialog v-model="visible" width="30%">
		<template #header>
			<div>asd</div>
		</template>
		<span>It's a draggable Dialog</span>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="dismiss">Cancel</el-button>
				<el-button type="primary" @click="visible = false"> Confirm </el-button>
			</span>
		</template>
	</el-dialog>
</template>

<style lang="scss" scoped></style>
