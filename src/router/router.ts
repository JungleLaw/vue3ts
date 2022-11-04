import type { RouteRecordRaw } from 'vue-router';

interface Visible {
	visible?: boolean;
}

type RouterItem = RouteRecordRaw &
	Visible & {
		children?: RouterItem[];
	};
export default RouterItem;
