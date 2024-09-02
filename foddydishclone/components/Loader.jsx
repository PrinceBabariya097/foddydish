import { Loader2 } from 'lucide-react'

const Loader = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <Loader2 className='w-10 h-10 animate-spin'/>
    </div>
  )
}

export default Loader