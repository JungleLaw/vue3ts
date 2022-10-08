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
