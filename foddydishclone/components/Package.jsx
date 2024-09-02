import burger from '/images/burger.jpeg'
import salad from '/images/salad.jpg'
import soup from '/images/soup.webp'
import roll from  '/images/Vegetable-Rolls.jpg'
import noodles from '/images/noddles.jpg'
import fries from '/images/french-freis.jpg'

const Package = () => {
  return (
    <div>
      <div className="packages mt-5" id="packages">
        <h1 className="text-center text-2xl font-bold">Our Packages</h1>
        <p className="text-center mt-4">Discover our thoughtfully curated packages designed to suit a variety of occasions and budgets.</p>
        <div className="row mt-5" id='1'>
          <div className="col-lg-4 col-sm-12">
            <div className="card mt-3" id='2'>
              <div className="card-body m-0">
                <div className="imager">
                  <img src={burger} alt='' style={{ height: "300px" }}/>
                </div>
                  <h4 className="card-title mt-3">Burger Bonanza</h4>
                  <p className="card-text">Sink your teeth into our juicy, flame-grilled burgers made with premium beef patties, fresh lettuce, ripe tomatoes, and our secret sauce. </p>
                  
                <button type="button" className="btn btn-danger">Get Started</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 " id='3'>
            <div className="card mt-3">
              <div className="card-body">
                <div className="imager">
                  <img src={salad} alt="" style={{height: "300px"}}/>
                </div>
                  <h4 className="card-title mt-3">Salad Sensation</h4>
                  <p className="card-text">Enjoy a delightful combination of crisp lettuce, colorful vegetables, tangy dressings, and a sprinkle of crunchy croutons. </p>
                  <button type="button" className="btn btn-danger">Get Started</button>
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 " id='4'>
            <div className="card mt-3">
              <div className="card-body">
                <div className="imager">
                  <img src={soup} alt='' style={{ height: "300px" }}/>
                  </div>
                  <h4 className="card-title mt-3">Scrumptious Soupsy</h4>
                  <p className="card-text">From creamy tomato bisque to aromatic chicken noodle, our soups are made with the finest ingredients and expertly.</p>
                  <button type="button" className="btn btn-danger">Get Started</button>
                
              </div>
            </div>
          </div>
          
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-12" id='5'>
            <div className="card mt-3">
              <div className="card-body m-0">
                <div className="imager">
                  <img src={roll} alt="" style={{height: "300px"}}/>
                  </div>
                  <h4 className="card-title mt-3">Roll Delights</h4>
                  <p className="card-text">Embark on a flavor-packed journey with our delectable rolls. Wrapped in soft,our rolls feature a fusion of savory fillings, including succulent meats, fresh veggies, and zesty sauces</p>
                   <button type="button" className="btn btn-danger">Get Started</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 " id='6'>
            <div className="card mt-3">
              <div className="card-body">
                <div className="imager">
                  <img src={noodles} alt="" style={{height: "300px"}}/>
                </div>
                <h4 className="card-title mt-3">Noodle Nirvana</h4>
                <p className="card-text">Experience the authentic flavors of Asia with our tantalizing noodle dishes. From classNameic stir-fried noodles to aromatic noodle soups, we offer a wide range of options to satisfy your cravings. </p>
                <button type="button" className="btn btn-danger">Get Started</button>
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 " id='7'>
            <div className="card mt-3">
              <div className="card-body">
                <div className="imager">
                  <img src={fries} alt="" style={{height: "300px"}}/>
                </div>
                <h4 className="card-title mt-3">Finger-Lickin' Finger Chips</h4>
                <p className="card-text">Crispy, golden, and addictive, our finger chips are the perfect accompaniment to any meal. Served hot and seasoned to perfection.</p>
                <button type="button" className="btn btn-danger">Get Started</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Package