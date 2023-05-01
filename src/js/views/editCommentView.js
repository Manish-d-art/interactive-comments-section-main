import View from './view.js';

class EditCommentView extends View {
	_data;
	parentElement;
	textarea;
	commentText;
	text;

	render(data) {
		this._data = data;
		// console.log(this._data);
		const { currentUser, comment, replyToUsername } = this._data;
		console.log(replyToUsername);
		this.textareaMarkUp(currentUser, replyToUsername, comment);
		this.parentElement.remove();
	}

	addHandlerEdit(handler) {
		this.body.addEventListener('click', (e) => {
			const editBtn = e.target.closest('.edit-btn');
			if (!editBtn) return;
			this._setText(e);
			if (e.target.closest('.main__replies-container')) {
				this.parentElement = e.target.closest('.main__replies');
				handler();
				return;
			}
			handler(this.text);
			// this.textarea = this.parentElement.querySelector(
			// 	'.comments-container__section-content'
			// );
			// this._setCommentText(this.textarea);
			// console.log(this.parentElement);
			// console.log(this.textarea);
		});
	}

	getReplyUsername() {
		return this.text.split(' ').slice(0, 1).join('').slice(1);
	}

	_setText(e) {
		this.text = e.target
			.closest('.main__replies')
			.querySelector('.comments-container__section-content')
			.textContent.trim();
		console.log(this.text);
	}

	getText() {
		return this.text.split(' ').slice(1).join(' ');
	}
}
export default new EditCommentView();
