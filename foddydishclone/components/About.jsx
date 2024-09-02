import vegan from '/images/Vegan-Food-PNG-Free-Download.png'

const About = () => {
  return (
    <div>
       <div className="about-us mt-5" id="about">
        <h1 className="text-center mt-5 font-bold text-2xl">About Us</h1>
        <p className="text-center">Creating extraordinary moments through exceptional experiences and a passion for gastronomy.</p>
        <div className="row mt-5">
          <div className="col-lg-7 p-lg-5">
            <h2 className="mx-lg-5 text-2xl">Get 100% Satisfaction</h2>
            <p className="mx-lg-5 mt-lg-5">At our core, we are driven by a love for gastronomy and a desire to create memorable moments for our clients. Our team of dedicated professionals brings together a wealth of expertise and creativity to craft extraordinary experiences that leave a lasting impression.</p>
            <p className="mx-lg-5">With years of experience and a keen eye for detail, we have honed our skills in curating bespoke events and culinary journeys. From intimate gatherings to grand celebrations, we take pride in orchestrating every element with precision and elegance.</p>
            <button type="button" className="btn btn-danger btn-lg mx-lg-5 mt-4">Get Started <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
            </div>
        <div className="col-lg-1 col-sm-12"></div>
          <div className="col-lg-4 col-sm-12">
            <img src={vegan} className='object-fill w-[600px]' alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About