import * as model from './model.js';
import commentsView from './views/commentsView.js';
import addCommentView from './views/addCommentView.js';
import replyTextareaView from './views/replyTextareaView.js';
import addReplyView from './views/addReplyView.js';

const controlInitialComments = () => {
	const { comments } = model.state;
	commentsView.render(comments);
};

const controlAddReplyMarkUp = () => {
	const { currentUser } = model.state;
	replyTextareaView.render(currentUser);
};

const controlAddComment = () => {
	const { currentUser } = model.state;
	const comment = addCommentView.getCommentText();
	comment && addCommentView.render({ currentUser, comment });
};

const controlAddReply = () => {
	const { currentUser } = model.state;
	const comment = addReplyView.getCommentText();
	comment && addReplyView.render({ currentUser, comment });
	addReplyView.removeTextarea();
};

const init = function () {
	controlInitialComments();
	addCommentView.addHandlerComment(controlAddComment);
	replyTextareaView.addHandlerReplyClick(controlAddReplyMarkUp);
	addReplyView.addHandlerReply(controlAddReply);
};
init();
