import React, {Component} from 'react'
import {
  HomeFirstBlock,
  HomeTab,
  SaveTime,
  OurApps,
  QuestionBlock,
} from './../../index'


class Home extends Component {
  render() {
    return (
      <div>
        <HomeFirstBlock/>
        <HomeTab/>
        <SaveTime/>
        <QuestionBlock/>
        <OurApps/>
      </div>
    )
  }
}

export default Home
