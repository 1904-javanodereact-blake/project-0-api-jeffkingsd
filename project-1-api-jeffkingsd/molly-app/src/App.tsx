import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './includes/bootstrap';
import './App.css';
import { NavComponent } from './components/nav/nav-component';
import { FirstComponent } from './components/first.component'
import  SignInComponent  from './components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/examples/movie.component';
import { TicTacToeGameComponent } from './components/examples/tictactoe.component';
import  ChuckNorrisJokesComponent from './components/chuck-norris/chucknorris.component';
import  PokemonComponent  from './components/pokemon/pokemon.component';
import { ReimbursementComponent } from './components/nested/reimbursement.component';
import { Provider } from 'react-redux';
import { store } from './Store';
import clickerComponent from './components/clicker/clicker.component';
import  ClaimComponent  from './components/ers/claims/claim.component';

const App: React.FC = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <NavComponent/>
      <main id="container">
      <Switch>
      <Route path="/first" component={FirstComponent} />
      <Route path="/claims/new" component={ClaimComponent}/>
      <Route path="/sign-in" component={SignInComponent} />
      <Route path="/home" component={HomeComponent} />
      <Route path="/reimbursement" component={ReimbursementComponent} />
      <Route path="/clicker" component={clickerComponent} />
      <Route path="/movie" component={MovieComponent} />
      <Route path="/tic-tac-toe" component={TicTacToeGameComponent} />
      <Route path="/chuck-norris" component={ChuckNorrisJokesComponent} />
      <Route path="/pokemon" component={PokemonComponent} />
      <Route component={HomeComponent} />
      </Switch>
      </main>
 </BrowserRouter>
 </Provider>
  );
}

export default App;
