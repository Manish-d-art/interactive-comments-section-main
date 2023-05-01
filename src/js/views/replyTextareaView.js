import View from './view.js';

class addReplyTextareaView extends View {
	_data;
	parentElement;

	render(data) {
		this._data = data;
		console.log(this._data);
		const { currentUser, replyToUsername } = this._data;
		this.textareaMarkUp(currentUser, replyToUsername);
		this._focusTextarea();
	}

	addHandlerReplyClick(handler) {
		this.body.addEventListener('click', (e) => {
			const replyBtn = e.target.closest('.replyBtn');
			if (!replyBtn) return;

			const replyContainer = e.target.closest('.main__replies-list');
			const commentContainer = e.target.closest('.comments-container__section');
			const username = this.getUserName(e);
			e.target.classList.toggle('textarea--active');
			if (!e.target.classList.contains('textarea--active')) {
				this.removeExtraTextarea(e);
				return;
			}

			commentContainer &&
				this._setContainer(commentContainer) &&
				handler(username);
			replyContainer && this._setContainer(replyContainer) && handler(username);
		});
	}

	_focusTextarea() {
		const myTextarea = document.querySelector('.textarea-fieled');
		const textLength = myTextarea.value.length;
		myTextarea.focus();
		myTextarea.setSelectionRange(textLength, textLength);
	}

	getUserName(e) {
		const username = e.target.closest(
			'.comments-container__section__replyNmodify'
		).parentNode.children[0].children[1].textContent;
		return username;
	}

	removeExtraTextarea(e) {
		const Alltextarea = e.target
			.closest('.comments-container__list')
			.querySelectorAll('.comments-container__write-comment');

		Alltextarea.forEach((t) => t.remove());
	}

	_setContainer(container) {
		this.parentElement = container;
		return true;
	}
}

export default new addReplyTextareaView();
