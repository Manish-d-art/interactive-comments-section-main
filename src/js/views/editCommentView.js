import View from './view.js';

class EditCommentView extends View {
	_data;
	parentElement;
	textarea;
	commentText;
	text;

	render(data) {
		this._data = data;
		console.log(this._data);
		const currentUser = this._data;
		if (this.removeTextarea()) return;
		this.textareaMarkUp(currentUser);
	}

	addHandlerEdit(handler) {
		this.body.addEventListener('click', (e) => {
			const editBtn = e.target.closest('.edit-btn');
			if (!editBtn) return;

			this.parentElement = e.target.closest('.main__replies');
			this.textarea = this.parentElement.querySelector(
				'.comments-container__section-content'
			);
			this._setCommentText(this.textarea);
			handler();
		});
	}

	_setCommentText(textarea) {
		this.text = this.textarea.textContent.trim();
		console.log(this.text);
	}

	// textareaMarkUp(currentUser) {
	// 	const markup = `
	// 	<section class="comments-container__write-comment">
	// 		<form class="form">
	// 			<label for="write-comment">
	// 			<img class="writer-dp" src="${currentUser.image.png}" alt="writer-dp">
	// 			</label>
	// 			<textarea type="text" name="comment" class="textarea-fieled" id="write-comment" placeholder="Add a comment..." autofocus></textarea>
	// 			<button class="comment-btn" type="submit">reply</button>
	// 		</form>
	// 	</section>
	// 	`;
	// 	this._parentElement.insertAdjacentHTML('afterEnd', markup);
	// }
}
export default new EditCommentView();
