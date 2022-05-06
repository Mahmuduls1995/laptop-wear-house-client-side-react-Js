import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Blogs from './Components/Blogs/Blogs';
import UploadPd from './Components/UploadPd/UploadPd';
import AllProducts from './Components/AllProducts/AllProducts';
import TotalOrders from './Components/TotalOrders/TotalOrders';
import PrivateAuth from './Components/PrivateAuth/PrivateAuth';
import SignUp from './Components/SignUp/SignUp';
import NotFound from './Components/NotFound/NotFound';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';
import Products from './Products/Products';
import ContactPart from './Components/ContactPart/ContactPart';
function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/products"  element={<Products></Products>}></Route>

        <Route path="/update/:id" element={
          <PrivateAuth>
            <UpdateProduct></UpdateProduct>
          </PrivateAuth>

        }></Route>
        <Route path="/uploadPd" element={
          <PrivateAuth>
            <UploadPd></UploadPd>
          </PrivateAuth>

        }></Route>
        <Route path="/AllPd" element={
          <PrivateAuth>
            <AllProducts></AllProducts>
          </PrivateAuth>

        }></Route>
        <Route path="/orders" element={
          <PrivateAuth>
            <TotalOrders></TotalOrders>
          </PrivateAuth>

        }></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
        <ContactPart></ContactPart>
      <Footer></Footer>

    </div>
  );
}

export default App;
