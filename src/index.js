import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './CommentApp'

ReactDOM.render(
	<CommentApp />,
	document.getElementById('root')
)

// class Lesson extends Component {
//   clickFunc(item, index) {
//   	console.log(index, item.title)
//   }
//   render() {
//   	const item = this.props.item
//   	const index = this.props.index
//   	return (
//   		<div onClick={this.clickFunc.bind(this, item, index)}>
//   			<h1>{item.title}</h1>
//   			<p>{item.description}</p>
//   		</div>
//   	)
  	
//   }
// }

// class LessonsList extends Component {


//   render () {
//   	const lessons = [
// 	  { title: 'Lesson 1: title', description: 'Lesson 1: description' },
// 	  { title: 'Lesson 2: title', description: 'Lesson 2: description' },
// 	  { title: 'Lesson 3: title', description: 'Lesson 3: description' },
// 	  { title: 'Lesson 4: title', description: 'Lesson 4: description' }
//   	]
//   	return (
//   		lessons.map((item, index) => {
//   			return <Lesson item={item} key={index} index={index} />
//   		})
  		
//   	)
//   } 
// }
// class Computer extends Component {
//   constructor () {
//   	super()
//   	this.state = {
//   		status: false
//   	}
//   }

//   switchComputerStatus () {
//   	this.setState({
//   		status: !this.state.status
//   	})
//   }

//   render () {
//     return (
//       <div>
//       	<Screen showContent="1" status={this.state.status} />
//         <button onClick={this.switchComputerStatus.bind(this)}>{this.state.status ? 'on' : 'off'}</button>
//       </div>
//     )
//   }
// }

// class Screen extends Component {
//   render () {
//   	const {showContent, status} = this.props
//     return (
//       <div className='screen'>
//       	{
//       		status 
//       			? showContent ? showContent : '无内容'
//       			: null
//       	}
//       	{
//       		status ? "显示器亮了" : '显示器关了'
//       	}
//       </div>
//     )
//   }
// }
// class LikeButton extends Component {
// 	static defaultProps = {
// 	    likedText: '取消',
// 	    unlikedText: '点赞'
// 	  }
// 	constructor() {
// 		super()
// 		this.state = {
// 			isLiked: false
// 		}
// 	}

// 	handleClickOnButton() {
// 		this.setState({
// 			isLiked: !this.state.isLiked
// 		})
// 		if(this.props.onClick) {
// 			this.props.onClick()
// 		}
// 	}

// 	render() {
	
		
// 		return(
// 			<button onClick={this.handleClickOnButton.bind(this)}>
// 				{this.state.isLiked ? this.props.likedText : this.props.unlikedText}👍
// 			</button>
// 		)
// 	}
// }

// class Index extends Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			likedText: '已赞',
// 			unlikedText: '赞'
// 		}
// 	}

// 	handleClickOnButton() {

// 		this.setState({
// 			likedText: '取消',
// 			unlikedText: '点赞'
// 		})
// 	}

// 	render() {
// 		return(
// 			<div>
// 				<LikeButton likedText={this.state.likedText} unlikedText={this.state.unlikedText} />
// 				<button onClick={this.handleClickOnButton.bind(this)}>
// 					修改
// 				</button>

// 			</div>
			
// 		)
// 	}
// }
// class House extends Component {
// 	render() {
// 		return (
// 			<div className='house'>
// 				<Room>
// 					<Man />
// 					<Dog />
// 					<Dog />
// 				</Room>
// 				<Bathroom />
// 			</div>
// 		)
// 	}
// }

// class Room extends Component {
// 	render() {
// 		return (
// 			<div className='room'>
// 				<Man />
// 				<Dog />
// 				<Dog />
// 			</div>
// 		)
// 	}
// }

// class Man extends Component {
// 	render() {
// 		return (
// 			<div className='man'>man</div>
// 		)
// 	}
// }

// class Bathroom extends Component {
// 	render() {
// 		return (
// 			<div className='bathroom'>bathroom</div>
// 		)
// 	}
// }

// class Dog extends Component {
// 	constructor() {
// 		super()
// 		this.state = {
// 			isRunning: false,
// 			isBarking: false
// 		}
// 	}

// 	bark() {
// 		this.setState({
// 			isBarking: true
// 		})
// 		setTimeout(() => {
// 			console.log(this.state.isBarking)
// 			this.setState({isBarking: false})
// 		}, 50)
// 		console.log('bark')
// 	}

// 	run() {
// 		this.setState({
// 			isRunning: true
// 		})
// 		setTimeout(() => {
// 			console.log(this.state.isRunning)
// 			this.setState({isRunning: false})
// 		}, 50)
// 		console.log('run')
// 	}

// 	barkAndRun() {
// 		this.bark()
// 		this.run()
// 	}

// 	render() {
// 		return (
// 			<div onClick={this.barkAndRun.bind(this)}>dog</div>
// 		)
// 	}
// }


// 函数写法
// function renderContent(content) {
// 	return <h1>{content}</h1>
// }
// const Header = renderContent('hello world')

// ReactDOM.render(
// 	Header,
// 	document.getElementById('root')
// )