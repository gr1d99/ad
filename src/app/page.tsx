'use client';

import Image from 'next/image'
import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';
import styles from './page.module.css'

export default function Home() {
  return (
      <PrimeReactProvider>
        <main className={styles.main}>
        </main>
      </PrimeReactProvider>
  )
}
