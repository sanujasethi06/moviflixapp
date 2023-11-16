import React from 'react'
import Link from 'next/link'
import styles from "@/app/styles/common.module.css"
import MovieCard from '../component/MovieCard';


const Page = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
    const url = process.env.RAPID_KEY
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '82f6410e27msh71784deeed8180dp1317d6jsne80ab348fb4a',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};
    const res = await fetch(url, options)
    const data = await res.json()
    const main_data = data.titles;
    console.log(main_data)
  return (
    
          <>
          <section className={styles.movieSection}>
              <div className={styles.container}>
                  <h1>
                      Series & Movie 
                  </h1>
                  <div className={ styles.card_section}>
                      
                  {
                      main_data.map((currEle) => {
                          return (<MovieCard key={currEle.id}  {...currEle} />)
                       })
                  }
                  </div>
              </div>
              
             </section>

          </>
   
  )
}

export default Page
