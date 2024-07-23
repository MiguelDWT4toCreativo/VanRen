import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './components/home-v1';
import About from './components/about';
import Service from './components/service';
import Testimonial from './components/testimonial';
import Team from './components/team';
import BlogGrid from './components/blog-grid';
import Contact from './components/contact';


class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
	                    <Route exact path="/" component={HomeV1} />
	                    <Route path="/about" component={About} />
	                    <Route path="/service" component={Service} />
	                    <Route path="/testimonial" component={Testimonial} />
	                    <Route path="/team" component={Team} />
	                    <Route path="/blog-grid" component={BlogGrid} />
	                    <Route path="/contact" component={Contact} />
	                </Switch>
	                </div>
                </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('vanren'));
