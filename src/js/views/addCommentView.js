class addCommentView {
	_parentElement = document.querySelector('.comments-container');
	_form = document.querySelector('.form');
	_textarea = document.querySelector('.textarea-filed');
	_data;

	render(data) {
		this._data = data;
		const { comment, currentUser } = this._data;
		this._textareaMarkUp(currentUser);
	}

	addHandlerComment(handler) {
		this._form.addEventListener('submit', function (e) {
			e.preventDefault();
			handler();
		});
	}
	getComment() {
		const text = this._textarea.value;
		return text;
	}

	_textareaMarkUp(currentUser) {
		const markup = `
        
        `;
		this._parentElement.insertAdjacentHTML('beforeend', markup);
	}
}

export default new addCommentView();
