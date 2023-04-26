// fix 9//
import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import BlogItemDetails from './components/BlogItemDetails'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      {/* fix 10 */}
      <Header />
      <div className="app-body">
        <Switch>
          {/* fix 11 */}
          <Route exact path="/" component={Home} />
          {/* fix 12 */}
          <Route exact path="/about" component={About} />
          {/* fix 13 */}
          <Route exact path="/contact" component={Contact} />
          {/* fix 14 */}
          <Route path="/blogs/:id" component={BlogItemDetails} />
          {/* fix 15 */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
