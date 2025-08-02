import React from 'react'
import MainBanner from '../components/mainBanner'
import Categories from '../components/categories'
import NewsLetter from '../components/newsLetter'
import BottomBanner from '../components/bottomBanner'
import Best_Seller from '../components/best_Seller'

const HomePage = () => {
  return (
    <div className='mt-10'>
        <MainBanner />
        <Categories />
        <Best_Seller />
        <BottomBanner />
        <NewsLetter />
    </div>
  )
}

export default HomePage
