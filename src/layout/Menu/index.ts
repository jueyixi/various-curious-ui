import { RouteRecordRaw } from 'vue-router';
export type menuType = {
	key: string | number | undefined;
	children: Array<RouteRecordRaw & menuType>;
	isShow?: boolean;
};