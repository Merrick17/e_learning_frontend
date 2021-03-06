import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Admin from './pages/admin/Admin'
import PrivateRoute from './components/PrivateRoute'
import Formateur from './pages/formateur/Formateur'
import Etudiant from './pages/etudiant/Etudiant'
import Formation from './pages/admin/Formation'
import FormationPage from './pages/Formation'
import MonProfil from './pages/MonProfil'
import ResetPassword from './pages/ResetPassword'
import ActivateAccount from './pages/ActivateAccount'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className="h-screen">

      <Router>
        <Header />
        <Switch>

          <PrivateRoute path="/etudiant" component={Etudiant} />
          <PrivateRoute path="/formateur" component={Formateur} />
          <PrivateRoute path="/admin" component={Admin} />
          <Route path="/formation" component={FormationPage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/reset/:token" component={ResetPassword} />
          <Route path="/activate/:token" component={ActivateAccount} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>

    </div>
  )
}

export default App
