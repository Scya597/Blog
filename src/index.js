import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PostIndex from './components/PostIndex';
import PostSingle from './components/PostSingle';
import PostNew from './components/PostNew';
import PostEdit from './components/PostEdit';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/posts/new" component={PostNew} />
        <Route path="/posts/edit/:id" component={PostEdit} />
        <Route path="/posts/:id" component={PostSingle} />
        <Route path="/" component={PostIndex} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root'),
);
