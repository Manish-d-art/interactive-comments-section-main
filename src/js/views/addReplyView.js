import View from './view.js';

class addReplyView extends View {
	commentsContainer = document.querySelector('.comments-container');
	parentElement;
	textarea;

	addHandlerReply(handler) {
		this.commentsContainer.addEventListener('click', (e) => {
			e.preventDefault();
			const btn = e.target.closest('.comment-btn');
			if (!btn) return;
			this.textarea = e.target
				.closest('.comments-container__write-comment')
				.querySelector('.textarea-fieled');
			this.parentElement = e.target
				.closest('.comments-container__list')
				.querySelector('.main__replies-container');
			// this.parentElement = e.target.closest(
			// 	'.comments-container__write-comment'
			// );
			this.removeActiveReply(e);
			console.log(this.parentElement);
			handler();
		});
	}
	removeActiveReply(e) {
		const activeReplyBtn = e.target
			.closest('.comments-container__list')
			.querySelector('.comments-container__section')
			.querySelector('.replyBtn');

		activeReplyBtn.classList.remove('textarea--active');
	}
}

export default new addReplyView();
