import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addFetch } from './fetchData';

const Fetching = ({api}) => {
    const dispatch =useDispatch()
  useEffect(() => {
    animeFetch();
  }, [api ,dispatch]);
  async function animeFetch() {
    try {
      const responce1 = await fetch(api);
      const specificdata = await responce1.json();
      dispatch(addFetch(specificdata?.data))
    } catch (error) {
        console.error(error)
    }
  }
  return (
    <div>
    </div>
  )
}

export default Fetching
