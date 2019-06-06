import React, {Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

export default class CommentApp extends Component {
	constructor() {
		super()
		this.state = {
			commentList: []
		}
	}

	handleInputCallback(userName, userContent) {

		this.state.commentList.push({userName, userContent})
		this.setState({
			commentList: this.state.commentList
		})
		console.log(userName, ' + ', userContent)
	}

	render() {
		const {commentList} = this.state
		return (
			<div>
				<CommentInput inputCallback={this.handleInputCallback.bind(this)}/>
				<CommentList commentList={commentList}/>
			</div>
		)
	}
}