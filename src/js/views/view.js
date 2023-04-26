import deleteIcon from '/src/assets/images/icon-delete.svg';
import editIcon from '/src/assets/images/icon-edit.svg';

export default class View {
	replyTextareaEle;
	body = document.querySelector('body');

	render(data) {
		this.data = data;
		console.log(this.data);
		const { comment, currentUser } = this.data;
		this.commentAndReplyMarkUp(currentUser, comment);
		this.textarea.value = '';
	}

	getCommentText() {
		return this.textarea.value.trim();
	}

	removeTextarea() {
		this.replyTextareaEle = document
			.querySelector('.comments-container')
			.querySelector('.comments-container__write-comment');
		if (this.replyTextareaEle) {
			this.replyTextareaEle.remove();
			// return true;
		}
	}

	commentAndReplyMarkUp(currentUser, comment) {
		const markup = `
        <li>
        <section class="main__replies main__replies-user">
          <div class="comments-container__user">
            <img class="comments-container__user-dp" src="${
							currentUser.image.png
						}" alt="user-image">
            <p class="comments-container__user-name">juliusomo</p>
            <p class="comments-container__user-time">2 days ago</p>
         </div>
         <p class="comments-container__section-content">
		 ${
				this.data.replyToUsername
					? `<span class="reply-to-name">@${this.data.replyToUsername}</span>`
					: ''
			}
            ${comment}
         </p>
         <div class="comments-container__section__vote">
		 	<button class="plus-btn" aria-label="increase score">
				<svg width="11" height="11">
				<path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/>
				</svg>
	   		</button>
            <p class="score">12</p>
			<button class="minus-btn" aria-label="decrease score">
				<svg width="11" height="11" class="minus-icon">
				<path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/>
				</svg>
		  	</button>
         </div>
          <div class="comments-container__section__replyNmodify">
            <button class="delete-btn" aria-label="delete this comment">
              <img class="delete-icon" src="${deleteIcon}" alt="delete-icon">
              delete
            </button>
            <button class="edit-btn" aria-label="edit this comment"> 
              <img class="edit-icon" src="${editIcon}" alt="edit-icon">
              edit
            </button>
          </div>
        </section>
      </li>
        `;

		console.log(this.parentElement);
		this.parentElement.classList.contains('comments-container')
			? this.parentElement.insertAdjacentHTML('beforeend', markup)
			: this.parentElement.insertAdjacentHTML('beforeend', markup);
	}

	textareaMarkUp(currentUser, replyToUsername) {
		const markup = `
		<section class="comments-container__write-comment">
			<form class="form">
				<label for="write-comment">
				<img class="writer-dp" src="${currentUser.image.png}" alt="writer-dp">
				</label>
				<textarea type="text" name="comment" class="textarea-fieled" id="write-comment" placeholder="Add a comment..." required>@${
					replyToUsername + ' '
				}</textarea>
				<button class="comment-btn" type="submit" aria-label="comment">reply</button>
			</form>
    	</section>
		`;
		this.parentElement.insertAdjacentHTML('afterEnd', markup);
	}
}
