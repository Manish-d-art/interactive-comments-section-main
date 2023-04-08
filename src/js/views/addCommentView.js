import View from './view.js';

class addCommentView extends View {
	parentElement = document.querySelector('.comments-container');
	textarea = document.querySelector('.textarea-fieled');
	form = document.querySelector('.form');
	data;

	addHandlerComment(handler) {
		this.form.addEventListener('submit', (e) => {
			e.preventDefault();
			handler();
		});
	}
}

export default new addCommentView();
