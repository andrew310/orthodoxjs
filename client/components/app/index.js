import React from 'react';
import {} from './style.less';

/*INPUT FIELDS*/
var Form = React.createClass({
	getInitialState: function(){
		return {title: '', text: ''};
	},
	handleTitleChange: function(e){
		this.setState({title: e.target.value})
	},
	handleTextChange: function(e){
		this.setState({text: e.target.value})
	},
	handleSubmit: function(e){
		e.preventDefault();
		//alert(this.state.title);
		this.props.onItemSubmit({title: this.state.title, text: this.state.text})
		this.setState({title: '', text: ''});
	},
	render: function(){
		return (
			<form onSubmit={this.handleSubmit}>
				Title:<br />
				<input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} /><br />
				Text:<br />
				<input type="text" name="text" value={this.state.text} onChange={this.handleTextChange}/><br />
				<input type="submit" value="Post" />
			</form>
		);
	}
})



/*ITEM TEMPLATE*/
var Item = React.createClass({
	handleDelete(){
		this.props.onDelete(this.props.id);
	},
	render: function(){
		return (
    	<li className="listItem">
        <h2 className="listTitle">
          {this.props.title}
        </h2>
        <div>{this.props.text}</div>
				<button onClick={this.handleDelete}>delete</button>
      </li>
    );
  }
});



/*LIST OF ITEMS
 * this component is the renders the list
 * parent: App
 * Child: Item
 * Receives state from parent, maps to child, passes functions to delete as prop
 */
var List = React.createClass({
	render: function(){
		var deleteMe = this.props.handleDelete;
  	var listItems = this.props.data.map(function(item, i){
      return (
        <Item title={item.title} id={i} text={item.text} onDelete={deleteMe}>
        </Item>
      );
 	 });
    return(
      <ul className="col-md-4 list-group">
        {listItems}
      </ul>
    );
  }
})



/*PARENT CLASS TO PUT THEM ALL TOGETHER*/
var App = React.createClass({
	handleDelete: function(itemIdx){
		//alert(itemIdx);
		var deleteThis = this.state.data.splice(itemIdx,1)
      this.setState({data: this.state.data});
	},
	getInitialState: function(){
		return {data: [
			{id: 1, title: "List Item 1", text: "this is a list item"},
			{id: 2, title: "List Item 2", text: "this is another list item"}
		]};
	},
	handleSubmit: function(item){
		//alert(item.text);
		var newList = this.state.data.concat([{title: item.title, text: item.text}])
		this.setState({data: newList});
	},
	render: function(){
		return(
			<div>
				<List data={this.state.data} handleDelete={this.handleDelete}/>
				<Form onItemSubmit={this.handleSubmit}/>
			</div>
		);
	}
})

export default App;
