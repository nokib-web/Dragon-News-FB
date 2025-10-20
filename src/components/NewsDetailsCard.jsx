import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    console.log(news)
    return (
        <div className='bg-base-200  shadow-lg p-4'>
            <img className='w-full' src={news.image_url} alt="" />
            <h2 className='font-bold my-10 text-xl'>{news.title}</h2>
            <p>{news.details}</p>
          <Link to={`/category/${news.category_id}`}>  <button className='btn btn-secondary my-4'> <FaArrowLeft /> All news in this category</button></Link>
        </div>
    );
};

export default NewsDetailsCard;