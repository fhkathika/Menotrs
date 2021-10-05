import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Book from './components/Books/Book';
import CourseSchedule from './components/CourseSchedule/CourseSchedule';


function App() {
  return (
    <div className="App">
      <Router>
        {/* header */}
        <Header></Header>
        <Switch>
          {/* Home */}
        <Route exact path="/">
      <Home></Home>
       {/* Home */}
      </Route>
          <Route path="/home">
      <Home></Home>
      </Route>
      {/* about */}
      <Route path="/about">
      <About></About>
      </Route>
      {/* services */}
      <Route path="/services">
      <Services></Services>
      </Route>
    
      {/* books */}
      <Route path="/books">
      <Book></Book>
      </Route>
      {/* notfound */}
      <Route path="*">
      <NotFound></NotFound>
      </Route>
        </Switch>
<Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
