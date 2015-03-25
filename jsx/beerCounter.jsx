/** @jsx React.DOM */

var BeerCounter = React.createClass({
    getInitialState: function() {
        return { counter: 0 }
    },
    
    addBeer: function() {
        this.setState({counter : this.state.counter + 1});
    },
	
    clearBeer: function() {
        this.setState({counter: 0});
    },

    render: function() {
        var self = this;
        return <div className='beerDiv'>
					<img src='img/beer.jpg' onClick={self.addBeer}/>
					<p>{self.state.counter}</p><br/>
					<label onClick={self.clearBeer}>Tøm</label>
				</div>;
    }
});

React.render(<BeerCounter/>, document.getElementById('myDiv'));
