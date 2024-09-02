import useFetch from '@/hooks/useFetch';
import  { useEffect, useState } from 'react'
import Loader from './Loader';
import Product from './Product';
import useThrottel from '@/hooks/useThrottel';
import PaginationButton from './PaginationButton';
import { useSelector } from 'react-redux';

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 20;

    const searchText = useSelector(state => state.search.search)

        
    const { data, isLoading, error } = useFetch({
        url: 'api/allitems',
        currentPage,
        limit: itemPerPage,
        search: searchText || '',
        catagory: '',
    })

    useEffect(() => setCurrentPage(1), [searchText])
    

    const throttelNextPage = useThrottel(() => {
        if (data && currentPage < data.totalPage) {
            setCurrentPage(currentPage + 1);
        }
    }, 1000);

    const throttelPriviousPage = useThrottel(() => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }, 1000)


    if (isLoading) {
        <Loader />
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div>
            <div className='grid grid-cols-4 gap-5 mt-7 mx-5 '> {
                data?.items?.map((product) => (
                    <Product key={product._id} src={product.img} title={product.name} rating={product.rate} discription={product.dsc} price={product.price} />
                ))
            }
            </div>

            <div className='w-full flex justify-center items-center mt-8'>
                <PaginationButton currentPage={currentPage} onNext={throttelNextPage} onPrevious={throttelPriviousPage} totalPage={data?.totalPage} />
            </div>
        </div>
    )
}

export default Pagination