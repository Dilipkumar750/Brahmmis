import React from 'react'
import valluvar from './assets/images/valluvar.png'
function Testimonials() {
  return (
    <section className="vh-100" style={{backgroundColor: "#CDC4F9"}}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-lg-10 col-xl-8">
  
          <div className="card rounded-3">
            <div className="card-body p-5">
  
              <div className="d-flex justify-content-center mb-4">
                <img src="https://m.media-amazon.com/images/I/71DlnvFSajL.png"
                  className="rounded-circle shadow-1-strong" width="100" height="100" />
              </div>
              <figure className="text-cente mb-0">
                <blockquote className="blockquote mb-4">
                  <p>
                    <span className="font-italic">தற்காத்துத் தற்கொண்டாற் பேணித் தகைசான்ற<br/>
                    சொற்காத்துச் சோர்விலாள் பெண்.</span>
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer mb-0">
                திருவள்ளுவர் 
                {/* <cite title="Source Title">Vogue</cite> */}
                </figcaption>
              </figure>
              <h6>விளக்கம்:</h6>
              <p>தன்னை காத்து தான் கொண்டவர்களை பாதுகாத்து தகுதிக்கு உதாரனமாய் வாய்ச்சொல் காத்து சோர்வில்லாமல் இருபவளே பெண்.</p>
            </div>
          </div>
  
  
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonials