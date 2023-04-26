import * as model from './model.js';
import commentsView from './views/commentsView.js';
import addCommentView from './views/addCommentView.js';
import replyTextareaView from './views/replyTextareaView.js';
import addReplyView from './views/addReplyView.js';
import deleteCommentView from './views/deleteCommentView.js';
import scoreView from './views/scoreView.js';
// import editCommentView from './views/editCommentView.js';

const controlInitialComments = () => {
	const { comments } = model.state;
	commentsView.render(comments);
};

const controlTextareaMarkUp = (replyToUsername) => {
	const { currentUser } = model.state;
	model.state.replyToUser.replyToUsername = replyToUsername;
	replyTextareaView.render({ currentUser, replyToUsername });
};

const controlAddComment = () => {
	const { currentUser } = model.state;
	const comment = addCommentView.getCommentText();
	comment && addCommentView.render({ currentUser, comment });
};

const controlAddReply = () => {
	const { currentUser } = model.state;
	let comment = addReplyView.getCommentText().split(' ');
	console.log(comment);
	if (comment.length === 1) return;
	const { replyToUsername } = model.state.replyToUser;
	comment = comment.slice(1).join(' ');
	comment && addReplyView.render({ currentUser, comment, replyToUsername });
	addReplyView.removeTextarea();
};

const controlDeleteComment = () => {
	deleteCommentView.removeComment();
};

const controlScore = () => {
	scoreView.updateScore();
};

// const controlEditComment = () => {
// 	const { currentUser } = model.state;
// 	editCommentView.render(currentUser);
// };

const init = function () {
	controlInitialComments();
	addCommentView.addHandlerComment(controlAddComment);
	replyTextareaView.addHandlerReplyClick(controlTextareaMarkUp);
	addReplyView.addHandlerReply(controlAddReply);
	deleteCommentView.addHandlerDelete(controlDeleteComment);
	scoreView.addHandlerClick(controlScore);
	// editCommentView.addHandlerEdit(controlEditComment);
};
init();
