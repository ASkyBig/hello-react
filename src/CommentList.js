import React, {Component} from 'react'

export default class CommentList extends Component {
	render() {
		console.log('list render')
		const {commentList} = this.props
		console.log('list', commentList.length)
		return (
			<div>
				{
					!!commentList.length && commentList.map((item, idx) => {
						return <div key={idx}>{item.userName}: {item.userContent}</div>
					})
				}
			</div>
		)
	}
}