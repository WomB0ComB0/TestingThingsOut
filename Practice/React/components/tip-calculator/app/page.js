import Image from 'next/image'
import PanelLayout from './components/PanelLayout'
import TipForm from './components/TipForm'
export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-5 lg:p-24' >
      <h1 className='text-3xl font-bold tracking-widest text-center uppercase my-14 text-cyan-800'>Tip Splitter</h1>
      <PanelLayout>
        <TipForm/>
      </PanelLayout>
    </main>
  )
}
