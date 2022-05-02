import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import SocialLogin from './Components/SocialLogin/SocialLogin';
import Loading from './Components/Loading/Loading';
function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/social" element={<SocialLogin></SocialLogin>}></Route>


      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
