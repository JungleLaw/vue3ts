import type { RouteRecordRaw } from 'vue-router';

interface Visible {
	visible?: boolean;
}

interface Children extends Visible {
	children?: (RouteRecordRaw & Visible)[];
}

type RouterItem = RouteRecordRaw & Children;

export default RouterItem;
