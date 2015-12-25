if (Meteor.isClient){
	// this code is executed on the client only

	Meteor.startup(function  () {
		// use meteor.startup to render the component after the page is ready
		React.render(<App/>, document.getElementById("render-target"));
	})
}
