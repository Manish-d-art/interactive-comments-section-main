import View from './view.js';

class addReplyView extends View {
	body = document.querySelector('.comments-container');
	parentElement;
	textarea;

	addHandlerReply(handler) {
		this.body.addEventListener('click', (e) => {
			e.preventDefault();
			const btn = e.target.closest('.comment-btn');
			if (!btn) return;
			this.textarea = e.target
				.closest('.comments-container__write-comment')
				.querySelector('.textarea-fieled');
			this.parentElement = e.target
				.closest('.comments-container__list')
				.querySelector('.main__replies-container');
			handler();
		});
	}
}

export default new addReplyView();
