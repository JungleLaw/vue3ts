import { defineComponent, reactive, computed } from 'vue';

export default defineComponent({
	setup(props, context) {
		const author = reactive({
			name: 'John Doe',
			books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery'],
		});
		const publishedBooksMessage = computed(() => {
			return author.books.length > 0 ? 'Yes' : 'No';
		});
		const update = () => {
			author.books = [];
		};
		return () => (
			<>
				<div>
					<div>{publishedBooksMessage.value}</div>
					<button onclick={update}>update</button>
				</div>
			</>
		);
	},
});
