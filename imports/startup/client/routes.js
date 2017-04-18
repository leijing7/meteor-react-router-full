import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () =>  
<div style={{height: '100%'}}>
  <div className="weui-tab" style={{height: '100%'}}>
    <div className="weui-tab__panel">
      <div>ddd</div>
    </div>
    <div className="weui-tabbar" style={{position: "fixed"}}>
        <a href="javascript:;" className="weui-tabbar__item weui-bar__item_on">
            <img src="/img/1.png" alt="" className="weui-tabbar__icon"/>
            <p className="weui-tabbar__label">微信</p>
        </a>
        <a href="javascript:;" className="weui-tabbar__item">
            <img src="/img/2.png" alt="" className="weui-tabbar__icon"/>
            <p className="weui-tabbar__label">通讯录</p>
        </a>
        <a href="javascript:;" className="weui-tabbar__item">
            <img src="/img/1.png" alt="" className="weui-tabbar__icon"/>
            <p className="weui-tabbar__label">发现</p>
        </a>
        <a href="javascript:;" className="weui-tabbar__item">
            <img src="/img/2.png" alt="" className="weui-tabbar__icon"/>
            <p className="weui-tabbar__label">内容</p>
        </a>
        <a href="javascript:;" className="weui-tabbar__item">
            <img src="/img/1.png" alt="" className="weui-tabbar__icon"/>
            <p className="weui-tabbar__label">我</p>
        </a>
    </div>
</div>
</div>

const About = () => <a href="javascript:;" className="weui-btn weui-btn_plain-default">按钮</a>

const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

export default BasicExample