import { Route } from 'react-router-dom';
import AllMeetupPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritePage from './pages/Favorites';
import { Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
    <Layout>
    <Switch>
    <Route path='/' exact>
      <AllMeetupPage />
    </Route>
    <Route path='/new-meetup'>
      <NewMeetupPage />
    </Route>
    <Route path='/favorite'>
      <FavoritePage />
    </Route>
    </Switch>
    </Layout>
  </div>
  )
    ;
}

export default App;
