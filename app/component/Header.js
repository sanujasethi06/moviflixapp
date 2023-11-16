import React from 'react'
import styles from '@/app/styles/navbar.module.css'
import Image from 'next/image';
import Link from 'next/link';
import Nav from './Nav';

const Header = () => {
  return (
      <header className={styles.main_header}>
          <div className={styles.navbar_brand}>
              <Link href="/">
                  <Image src="/logo.png" alt="logo image" width={100} height={30}/>
              </Link>
          </div>
          <Nav/>

    </header>
  )
}

export default Header
