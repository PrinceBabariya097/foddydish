import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { useDispatch } from 'react-redux'
import { setSearch } from '@/store/features/SearchSlice'
import useDebouncing from '@/hooks/useDebouncing'

const SearchNav = () => {
  const [value, setValue] = useState('')
  
  const dispatch = useDispatch()

  const debouncedValue = useDebouncing(value, 2000)

  useEffect(() => {
    dispatch(setSearch(debouncedValue))
  },[debouncedValue, dispatch])


  return (
    <div className='flex h-20 items-center ml-10'>
      <div className='flex items-center'>
        <Search className='' />
        <Input className='focus-visible:ring-0 focus-visible:outline-none w-96 ' value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    </div>
  )
}

export default SearchNav