import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route, Link} from 'react-router-dom'
import {removePost} from '../redux/actions'
import Single from './Single'

class Main extends Component {
	constructor(){
		super()	
	}

	render() {
		console.log(this.props)
		return 	<div>
					<h1>
						<Link to="/"> Photowall </Link>
					</h1>
					<Route exact path="/" render={() => (						
						<div>
							<PhotoWall {...this.props}/>
						</div>
					)}/>
					<Route path="/addPhoto" render={({history}) => (
						<AddPhoto {...this.props} />
					)} />

					<Route path="/single/:id" render={(params) => (
						<Single {...this.props} {...params} />
					)} />
				</div>
	}
}



export default Main