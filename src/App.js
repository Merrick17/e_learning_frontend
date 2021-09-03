import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Admin from './pages/admin/Admin'
import PrivateRoute from './components/PrivateRoute'
const App = () => {
  return (
    <div className="h-screen">

      <Router>
        <Header />
        <Switch>
          <PrivateRoute path="/admin" component={Admin}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>

    </div>
  )
}

export default App
