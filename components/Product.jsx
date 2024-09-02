import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const Product = ({ src, title, rating, discription, price }) => {
  return (
    <Card>
      <CardHeader>
        <img src={src} alt={title} className='object-cover' />
        <CardTitle className='mt-3'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {rating && <p>Rating: {rating}</p>}
        <CardDescription>{discription}</CardDescription>
        {price && <p>Price: ${price}</p>}
      </CardContent>
      <CardFooter>
        {price && <Button className='btn btn-primary'>Add to Cart</Button>}
      </CardFooter>
    </Card>
  )
}

export default Product