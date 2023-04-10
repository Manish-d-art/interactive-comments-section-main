import View from './view.js';

class DeleteCommentView extends View {
	removeEle;
	addHandlerDelete(handler) {
		this.body.addEventListener('click', (e) => {
			const btn = e.target.closest('.delete-btn');
			if (!btn) return;
			this.removeEle = e.target.closest('.main__replies');
			handler();
			console.log(this.removeEle);
		});
	}

	removeComment() {
		this.removeEle.remove();
	}
}

export default new DeleteCommentView();
