import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination'

const PaginationButton = ({ currentPage, onPrevious, onNext, totalPage }) => {
    return (
        <Pagination className={'text-black'}>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious onClick={onPrevious} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                {
                    currentPage > 1 && <PaginationItem>
                        <PaginationLink onClick={onPrevious}>{currentPage - 1}</PaginationLink>
                    </PaginationItem>
                }
                <PaginationItem>
                    <PaginationLink isActive={true}>{currentPage}</PaginationLink>
                </PaginationItem>
                {
                    totalPage > 1 && <PaginationItem>
                        <PaginationLink onClick={onNext}>{currentPage + 1}</PaginationLink>
                    </PaginationItem>
                }
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                {totalPage > 2 && <PaginationItem>
                    <PaginationLink>{totalPage}</PaginationLink>
                </PaginationItem>}
                <PaginationItem>
                    <PaginationNext onClick={onNext} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}

export default PaginationButton