import * as model from './model.js';
import commentsView from './views/commentsView.js';
import addCommentView from './views/addCommentView.js';
import replyTextareaView from './views/replyTextareaView.js';
import addReplyView from './views/addReplyView.js';
import deleteCommentView from './views/deleteCommentView.js';
import scoreView from './views/scoreView.js';
import editCommentView from './views/editCommentView.js';

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

const controlDeleteComment = () => {
	deleteCommentView.removeComment();
};

const controlScore = () => {
	scoreView.updateScore();
};

const controlEditComment = () => {
	console.log(123);
	const { currentUser } = model.state;
	editCommentView.render(currentUser);
};

const init = function () {
	controlInitialComments();
	addCommentView.addHandlerComment(controlAddComment);
	replyTextareaView.addHandlerReplyClick(controlAddReplyMarkUp);
	addReplyView.addHandlerReply(controlAddReply);
	deleteCommentView.addHandlerDelete(controlDeleteComment);
	scoreView.addHandlerClick(controlScore);
	editCommentView.addHandlerEdit(controlEditComment);
};
init();
