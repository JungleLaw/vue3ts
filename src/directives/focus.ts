import type { Directive, DirectiveBinding, VNode } from 'vue';

const focus: Directive<any, any> = {
	// DirectiveHook<T = any, Prev = VNode<any, T> | null, V = any> =
	// (el: T, binding: DirectiveBinding<V>, vnode: VNode<any, T>, prevVNode: Prev) => void;
	mounted(el: any, binding: DirectiveBinding<any>, vnode: VNode<any>, prevVnode: VNode<any>) {
		el.focus();
	},
};
export default focus;
