class addReplyView {
	_body = document.querySelector('body');

	addHandlerReplyClick(handler) {
		this._body.addEventListener('click', (e) => {
			const replyBtn = e.target.closest('.replyBtn');
			console.log(replyBtn);
			if (!replyBtn) return;
			handler();
		});
	}
}

export default new addReplyView();
