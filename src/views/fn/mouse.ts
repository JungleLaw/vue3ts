/**
 * @ Author: Captain
 * @ Create Time: 2022-09-12 04:00:22
 * @ Modified by: Captain
 * @ Modified time: 2022-09-12 20:58:33
 * @ Description:
 *
 * @format
 */
import { ref, onMounted, onUnmounted, Ref, UnwrapRef } from 'vue';
export default class Mouse {
	constructor() {}
	private static x: Ref<number>;
	private static y: Ref<number>;
	static useMouse(): { x: Ref<number>; y: Ref<number> } {
		this.x = ref(0);
		this.y = ref(0);
		onMounted(() => {
			console.log('onMounted');
			window.addEventListener('mousemove', this.update);
		});
		onUnmounted(() => {
			console.log('mousemove');
			window.removeEventListener('mousemove', this.update);
		});
		// return [this.x, this.y];
		return { x: this.x, y: this.y };
	}
	static update(event): void {
		console.log('mouse update', event);
		// this.x.value = event.screenX;
		// this.y.value = event.screenY;
		this.x = ref(event.screenX);
		this.y = ref(event.screenY);
		console.log(`this.x=${this.x.value},this.y=${this.y.value}`);
	}
}
