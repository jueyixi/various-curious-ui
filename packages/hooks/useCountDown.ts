
/**
 *  倒计时
 *  @param {Number} second 倒计时秒数
 *  @return {Number} count 倒计时秒数
 *  @return {Function} countDown 倒计时函数
 *  @example
 *  const { count, countDown } = useCountDown()
 *  countDown(60)
 * <div>{{ count }}</div>
 */
import { ref, onBeforeMount } from 'vue';
export function useCountDown() {
	const count = ref<number>(0);
	const timer:any = ref<NodeJS.Timeout | null>(null);
	const countDown = (second: number, ck?: Function) => {
		if (count.value === 0 && timer.value === null) {
			count.value = second;
			timer.value = setInterval(() => {
				count.value--;
				if (count.value === 0) {
					clearInterval(timer.value);
					ck && ck();
				}
			}, 1000);
		}
	};

	onBeforeMount(() => {
		timer.value && clearInterval(timer.value);
	});

	return {
		count,
		countDown,
	};
}
