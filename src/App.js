import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import UploadPd from './Components/UploadPd/UploadPd';
import PrivateAuth from './Components/PrivateAuth/PrivateAuth';
import SignUp from './Components/SignUp/SignUp';
import NotFound from './Components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/uploadPd" element={
          <PrivateAuth>
            <UploadPd></UploadPd>
          </PrivateAuth>

        }></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
