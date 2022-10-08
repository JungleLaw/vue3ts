<!--
 * @ Author: Captain
 * @ Create Time: 2022-09-08 14:35:07
 * @ Modified by: Captain
 * @ Modified time: 2022-10-08 18:22:51
 * @ Description:
 -->

<script lang="tsx">
import { RouterView } from 'vue-router';
import { defineComponent } from 'vue';
import Logger from './global/Logger';

export default defineComponent({
	name: 'App',
	components: {
		RouterView,
	},
	setup(props) {
		Logger.info('TAG', props);
		return () => (
			<>
				<div className="app-root">
					<router-view></router-view>
					<div className="aaa">AAA</div>
				</div>
			</>
		);
	},
	// render(): JSX.Element {
	// 	return (
	// 		<>
	// 			<div className="app-root">
	// 				<router-view></router-view>
	// 			</div>
	// 		</>
	// 	);
	// },
});
</script>

<style scoped>
.aaa {
	font-size: 20px;
	color: aqua;
	background-color: red;
	z-index: 9000;
}
</style>
