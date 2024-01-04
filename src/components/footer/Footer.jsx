import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image';

export default function Footer() {
  return (
    <div className={styles.container}>
        <p>
            @2023 RaidenBro. All right reserved
        </p>
        <div>
            <Image src='/vercel.svg' width={100} height={0} alt='Raiden Image'/>
        </div>
    </div>
  )
}
