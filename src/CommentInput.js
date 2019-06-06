import React, {Component} from 'react'

export default class CommentInput extends Component {
	constructor() {
		super()
		this.state = {
			userName: '11',
			userContent: '444'
		}
	}

	handleUserName(event) {
		const userName = event.target.value
		this.setState({
			userName: userName
		})
	}

	handleUserContent(event) {
		const userContent = event.target.value
		this.setState({
			userContent: userContent
		})
	}

	handleSubmit() {
		console.log('handleSubmit')
		const {userName, userContent} = this.state
		this.props.inputCallback(userName, userContent)
		this.setState({
			userName: '',
			userContent: ''
		})
	}

	render() {
		return (
			<div>
				<span>用户名：</span>
				<input value={this.state.userName} onChange={this.handleUserName.bind(this)} />
				<hr/>
				<span style={{color: 'red'}}>评论内容：</span>
				<input value={this.state.userContent} onChange={this.handleUserContent.bind(this)} />
				<hr />
				<button style={{backgroundColor: '#39a2d2', color: 'white'}} onClick={this.handleSubmit.bind(this)}>发布</button>
			</div>
		)
	}
}