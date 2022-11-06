import type { RouteRecordRaw } from 'vue-router';

interface Visible {
	visible?: boolean;
	children?: RouterItem[];
}

type RouterItem = RouteRecordRaw & Visible;
export default RouterItem;
