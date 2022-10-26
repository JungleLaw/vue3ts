<template>
	<div>
		<VSlot>
			<!-- <template #header="headerProps">
				<div>jeaderaaa</div>
				<div>props:{{ headerProps.h }}</div>
			</template>
			<template #footer="footerProps">
				<div>jooter</div>
				<div>props:{{ footerProps.f }}</div>
			</template>
			<template #default="defaultProps">
				<div>default</div>
				<div>props:{{ defaultProps.b }}</div>
			</template> -->
			<template #header="{ h }">
				<div>jeaderaaa</div>
				<div>props:{{ h }}</div>
			</template>
			<template #footer="{ f }">
				<div>jooter</div>
				<div>props:{{ f }}</div>
			</template>
			<template #default="{ b }">
				<div>ddefault</div>
				<div>props:{{ b }}</div>
			</template>
		</VSlot>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VSlot from '@/components/slotComponent/vslot.vue';
export default defineComponent({
	name: '',
	components: {
		VSlot,
	},
	data() {
		return {};
	},
});
</script>

<style lang="scss" scoped></style>
