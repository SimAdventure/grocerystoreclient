import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/footer';
import { useAppContext } from './context/appContext';
import HomePage from './pages/homePage'
import Login from './components/login';
import NavBar from './components/navBar';
import AllProducts from './pages/all_Products';
import ProductCategory from './pages/product_Category';
import DetailedProduct from './pages/product_Detail';
import CartPage from './pages/cartPage';
import AddressPage from './pages/addressPage';
import { Toaster } from 'react-hot-toast';
import MyOrders from './pages/my_Orders';
import SellerLogin from './components/Seller/seller_Login';
import SellerLayout from './pages/Seller/seller_Layout';
import SellerAddProduct from './pages/Seller/seller_AddProduct';
import SellerProductList from './pages/Seller/seller_ProductList';
import SellerOrders from './pages/Seller/seller_AllOrder';
import Loading from './components/loading';

const App = () => {
  const isSellerPath = useLocation().pathname.includes("seller");
  const { showUserLogin, isSeller } = useAppContext();

  return (
    <div className='text-default min-h-screen text-gray-700 bg-white'>
	  
	    {isSellerPath ? null : <NavBar />}
      {showUserLogin ? <Login /> : null}
      <Toaster />
      <div className={'${isSellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}'}>
        <Routes>
          <Route path='/' element={<HomePage />} />
		      <Route path='/products' element={<AllProducts />} />
          <Route path='/products/:category' element={<ProductCategory />} />
          <Route path='/products/:category/:id' element={<DetailedProduct />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/add-address' element={<AddressPage />} />
          <Route path='/my-orders' element={<MyOrders />} />
          <Route path='/loader' element={< Loading/>} />
          <Route path='/seller' element={isSeller ? <SellerLayout /> : <SellerLogin />} >
            <Route index element={isSeller ? <SellerAddProduct /> : null} />
            <Route path='product-list' element={<SellerProductList />} />
            <Route path='orders' element={<SellerOrders />} />
          </Route>
        </Routes>
      </div>
      {!isSellerPath && <Footer />} 
	  
    </div>
  )
}

export default App