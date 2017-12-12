import React from "react";

import { connect } from "react-redux"
import * as userAction from "../actions/userAction"
import * as tweetAction from "../actions/tweetAction"

@connect((store)=>{
  return {
    user:store.users.users,
    tweets:store.tweets.tweets
  }
})

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }  
  componentWillMount(){
    this.props.dispatch(userAction.fetchUser());
  }
  loadtweets(e){
    this.props.dispatch(tweetAction.fetchTweets());
  }
  render() {
    //console.log(this.props);
    const {user, tweets} = this.props;
    if(!tweets.length){
      return <button onClick={this.loadtweets.bind(this)}>LoadeTweets</button>
    }
    const tweetmap = tweets.map(tweet=><li>{tweet.text}</li>)
    return (<div>
      <h1>{this.props.user.name}</h1>
      <ul>{tweetmap}</ul>
    </div>);
  }
}
