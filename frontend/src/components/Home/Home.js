import * as React from 'react';
import { homeDetails } from './homeDetails';
import './Home.css'
import CategoryCard from './CategoryCard';
const Home = () => {
    const {title, description} = homeDetails
  return (
      <div className="home">
          <div className='descriptionContainer mb-4'>
            <div className='textDescription'>
                <h3>{title}</h3>
                <h5 className='homeDescription'>{description}</h5>
            </div>
            <img className="imgHomeInterior" src='/images/homeImage.jpg' alt='homeImage' />
          </div>
          <div className="d-flex justify-content-around">
          <CategoryCard title="Kitchen" image={<img className='imgCategory' src="/images/kitchen.jpg" alt='' />}/>
          <CategoryCard title="Bathroom" image={<img className='imgCategory' src="/images/bathroom.jpg" alt='' />}/>
          <CategoryCard title="Salon" image={<img className='imgCategory' src="/images/livingRoom.jpg"  alt='' />}/>
          <CategoryCard title="Bedroom" image={<img className='imgCategory' src="/images/bedroom.jpg" alt='' />}/>
          </div>

      </div>
  );
};
export default Home;