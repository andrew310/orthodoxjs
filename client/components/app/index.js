import React from 'react';
import {} from './style.less';

var Hello = React.createClass({
	handleKey: function(e){
  	if (e.keyCode == 13){
    	this.props.keyDown();
    }
  },
  handleChange: function(e){
    this.props.handleChange(e.target.value);
  },
  handleBlur: function(e){
  	this.props.keyDown();
  },
  render: function() {
  if(this.props.edit != "true"){
    return (
    <div onDoubleClick={this.props.doubleClick}>
    	{this.props.data}
    </div>
  );}
  else{
  	return (
    	<input
      autoFocus="true"
      onKeyDown={this.handleKey}
      value={this.props.data}
      onChange={this.handleChange}
      onBlur={this.handleBlur} />
    );}
  }
});


var App = React.createClass({
	getInitialState: function(){
  	return {edit: "false", data: "edit me"};
  },
	handleDoubleClick: function(){
  	this.setState({edit: "true"});
  },
  handleKeyDown: function(){
  	this.setState(
    	{edit: "false"}
    );
  },
  handleChange: function(text){
  this.setState({data: text});
  },
  render: function() {
  	return (<
    	Hello edit={this.state.edit}
      data={this.state.data}
      doubleClick={this.handleDoubleClick}
      keyDown={this.handleKeyDown}
      handleChange={this.handleChange}
      />

     );}
});


export default App;
