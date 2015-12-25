// App component - represents the whole app
App = React.createClass({
	// this mixin makes the getMeteorData method work
	mixins: [ReactMeteorData],

	// load items from the Tasks collection and puts them on this.data.Tasks
	getMeteorData(){
		return {
			tasks: Tasks.find({}).fetch()
		}
	},

	renderTasks(){
		// get tasks from this.data.tasks
		return this.data.tasks.map((task) => {
			return <Task key={task._id} task = {task}/>;
		});
	},

	render(){
		return(
			<div className="container">
				<header>
					<h1> Todo List </h1>
				</header>

				<ul>
					{this.renderTasks()}
				</ul>
			</div>
		);
	}
});