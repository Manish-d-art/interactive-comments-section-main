import View from './view.js';

class addReplyTextareaView extends View {
	_data;
	_parentElement;
	_body = document.querySelector('body');

	render(data) {
		this._data = data;
		console.log(this._data);
		const currentUser = this._data;
		this.textareaMarkUp(currentUser);
	}

	removeActiveBtns() {
		const btns = document.querySelectorAll('.replyBtn');
		btns.forEach((btn) => btn.classList.remove('replyBtn--active'));
	}

	addHandlerReplyClick(handler) {
		this._body.addEventListener('click', (e) => {
			const replyBtn = e.target.closest('.replyBtn');
			if (!replyBtn) return;

			const replyContainer = e.target.closest('.main__replies-list');
			const commentContainer = e.target.closest('.comments-container__section');
			if (
				this.removeTextarea() &&
				replyBtn.classList.contains('replyBtn--active')
			) {
				return;
			}
			console.log(replyContainer, commentContainer);
			commentContainer && this._setContainer(commentContainer) && handler();
			replyContainer && this._setContainer(replyContainer) && handler();
			this.removeActiveBtns();
			replyBtn.classList.toggle('replyBtn--active');
		});
	}

	_setContainer(container) {
		this._parentElement = container;
		return true;
	}

	textareaMarkUp(currentUser) {
		const markup = `
		<section class="comments-container__write-comment">
			<form class="form">
				<label for="write-comment">
				<img class="writer-dp" src="${currentUser.image.png}" alt="writer-dp">
				</label>
				<textarea type="text" name="comment" class="textarea-fieled" id="write-comment" placeholder="Add a comment..." autofocus></textarea>
				<button class="comment-btn" type="submit">reply</button>
			</form>
    	</section>
		`;
		console.log(this._parentElement);
		this._parentElement.insertAdjacentHTML('afterEnd', markup);
	}
}

export default new addReplyTextareaView();
