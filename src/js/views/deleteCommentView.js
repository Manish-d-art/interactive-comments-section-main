import View from './view.js';

class DeleteCommentView extends View {
	removeEle;
	parentElement;

	render() {
		const markup = this._generateDeleteMarkUp();
		this.parentElement.insertAdjacentHTML('afterend', markup);
		this.deleteComment();
		this.cancelDeleteComment();
	}

	addHandlerDelete(handler) {
		this.body.addEventListener('click', (e) => {
			const btn = e.target.closest('.delete-btn');
			if (!btn) return;
			this.removeEle = e.target.closest('.main__replies');
			this.parentElement = btn;
			handler();
		});
	}

	deleteComment() {
		this.removeEle.addEventListener('click', (e) => {
			const btn = e.target.closest('.delete-button');
			if (!btn) return;
			this.removeEle.remove();
		});
	}

	cancelDeleteComment() {
		this.removeEle.addEventListener('click', (e) => {
			const btn = e.target.closest('.cancel-button');
			if (!btn) return;
			document.querySelector('.comment-delete-section').remove();
		});
	}

	_generateDeleteMarkUp() {
		return `
			<section class="comment-delete-section">
				<div class="comment-delete-overlay">
					<div class="comment-delete">
						<h2 class="comment-delete__heading">Delete comment</h2>
						<p class="comment-delete__warning">
						Are you Sure you want to delete this comment? This will remove the comment and can't be undone.
						</p>
						<div class="comment-delete__buttons">
							<button class="cancel-button" aria-label="do not delete ">No, cancel</button>
							<button class="delete-button" aria-label="yes, delete">yes, delete</button>
						</div>
					</div>
				</div>
			</section>
		`;
	}
}

export default new DeleteCommentView();
