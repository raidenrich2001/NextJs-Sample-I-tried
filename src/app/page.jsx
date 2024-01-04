import Image from 'next/image'
import styles from './pages.module.css'
import Button from '@component/components/button/Button'

export default function Home() {
  return (
   <div className='flex items-center gap-8'>
    <div className='flex-1 flex flex-col gap-10'>
      <h1 className={`${styles.herotext} text-6xl font-semibold`}>Better design for your digital products.</h1>
      <p className={`${styles.herotext} text-xl font-extralight`}>
        Turning your idea into Reality.we bring together the teams from the global tech industry.
      </p>
      <Button url='./portfolio' text='See our works'></Button>
    </div>
    <div  className='flex-1 w-[500px] h-[500px] relative rounded-lg'>
      <Image alt='hero-img' fill={true} className='object-contain rounded-lg' src="./hero.svg"/>
    </div>
   </div>
  )
}
