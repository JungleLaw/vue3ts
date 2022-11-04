<!--
 * @ Author: Captain
 * @ Create Time: 2022-10-08 17:29:02
 * @ Modified by: Captain
 * @ Modified time: 2022-11-04 16:25:50
 * @ Description:
 -->

<script lang="ts">
import { defineComponent, h, type VNode } from 'vue';

export default defineComponent({
	name: 'SlideTitle',
	// functional: true,
	props: {
		icon: {
			type: String,
			default: '',
		},
		title: {
			type: String,
			default: '',
		},
	},
	render() {
		// Logger.debug('TAG', this.icon, this.title);
		const vnodes: VNode[] = [];

		let iconNode: VNode;
		let titleNode: VNode;
		if (this.icon) {
			if (this.icon.includes('el-icon')) {
				// vnodes.push(<i class={ [icon, 'sub-el-icon']} />);
				iconNode = h('i', { class: `${this.icon} sub-el-icon` }, []);
				// iconNode = <i class={[this.icon, 'sub-el-icon']}> </i>;
			} else {
				// vnodes.push(<svg-icon icon-class={icon} />);
				iconNode = h('svg-icon', { 'icon-class': this.icon }, []);
				// iconNode = <svg-icon icon-class={this.icon}></svg-icon>;
			}
			vnodes.push(iconNode);
		}
		if (this.title) {
			// vnodes.push(<span slot="title">{title}</span>);
			titleNode = h('span', { slot: 'title', innerHTML: this.title }, []);
			// titleNode = <span slot="title">{this.title}</span>;
			vnodes.push(titleNode);
		}
		return vnodes;
	},
});
</script>

<style lang="scss" scoped>
.sub-el-icon {
	color: currentColor;
	width: 1em;
	height: 1em;
}
</style>
