class addReplyView {
	_data;
	_parentElement;
	_body = document.querySelector('body');

	render(data) {
		this._data = data;
		console.log(this._data);
		const { currentUser, container } = this._data;
		this._parentElement = container;
		console.log(this._parentElement);
		this.textareaMarkUp(currentUser);
	}

	addHandlerReplyClick(handler) {
		this._body.addEventListener('click', (e) => {
			const replyBtn = e.target.closest('.replyBtn');
			const replyContainer = e.target.closest('.main__replies-list');
			const commentContainer = e.target.closest('.comments-container__section');
			if (!replyBtn) return;
			if (commentContainer) {
				handler(commentContainer);
				return;
			}
			replyContainer && handler(replyContainer);
		});
	}

	textareaMarkUp(currentUser) {
		const markup = `
		<section class="comments-container__write-comment">
			<form class="form">
				<label for="write-comment">
				<img class="writer-dp" src="${currentUser.image.png}" alt="writer-dp">
				</label>
				<textarea type="text" name="comment" class="textarea-filed" id="write-comment" placeholder="Add a comment..."></textarea>
				<button class="comment-btn" type="submit">send</button>
			</form>
    	</section>
		`;
		this._parentElement.insertAdjacentHTML('afterEnd', markup);
	}
}

export default new addReplyView();
