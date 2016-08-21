import Root from './containers/Root'
import SignupForm from './containers/SignupForm'
import LoginForm from './containers/LoginForm'
import Home from './containers/Home'

const routes = {
  path: '/',
  component: Root,
  indexRoute: { components: Home},
  childRoutes: [
      {path: 'login', component: LoginForm},
      {path: 'signup', component: SignupForm}
  ]
}

export default routes
