import React from 'react';
import './aboutus.styles.css';
import Testimonials from '../../components/testimonials/testimonials.component';
import modelAbout from '../../assets/aboutmodel.jpg';

const AboutusPage = () => {
    
    return(
        <div>
            <div className="aboutUsBanner">About Us</div>
            
            <div className="container-fluid split-screen">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 leftColumn">
                        <h3 className="secret-heading">WHAT'S THE SECRET OF THE Andreas.?</h3>
                        <p className="text-about">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                            including versions of Lorem Ipsum.</p>
                        <h3 className="whoweare-heading">WHO WE ARE</h3>
                        <hr className="lines"/>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                                <img src={modelAbout} className="img-fluid" alt="model-about"/>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                                <p className="whoweare-subtitle">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae 
                                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                    </p>
                                <p className="text-about">Neque porro quisquam 
                                    est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius 
                                    modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
                                    quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                                    Quis autem veleum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel 
                                    illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <h3 className="ourpartners-heading">Images of our customers</h3>
                        <p className="text-about">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <div className="containerGallery">
                            <hr className="mt-2 mb-5"/>
                            <div className="row text-center text-lg-left no-gutters">
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="https://source.unsplash.com/pWkk7iiCoDM/400x300" className="d-block mb-4 h-100">
                                        <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="customer1"/>
                                    </a>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="https://source.unsplash.com/aob0ukAYfuI/400x300" className="d-block mb-4 h-100">
                                        <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/aob0ukAYfuI/400x300" alt="customer2"/>
                                    </a>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="https://source.unsplash.com/EUfxH-pze7s/400x300" className="d-block mb-4 h-100">
                                        <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/EUfxH-pze7s/400x300" alt="customer3"/>
                                    </a>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="https://source.unsplash.com/M185_qYH8vg/400x300" className="d-block mb-4 h-100">
                                        <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/M185_qYH8vg/400x300" alt="customer4"/>
                                    </a>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="https://source.unsplash.com/sesveuG_rNo/400x300" className="d-block mb-4 h-100">
                                        <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/sesveuG_rNo/400x300" alt="customer5"/>
                                    </a>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="https://source.unsplash.com/AvhMzHwiE_0/400x300" className="d-block mb-4 h-100">
                                        <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/AvhMzHwiE_0/400x300" alt="customer6"/>
                                    </a>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="https://source.unsplash.com/2gYsZUmockw/400x300" className="d-block mb-4 h-100">
                                        <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/2gYsZUmockw/400x300" alt="customer7"/>
                                    </a>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="https://source.unsplash.com/EMSDtjVHdQ8/400x300" className="d-block mb-4 h-100">
                                        <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/EMSDtjVHdQ8/400x300" alt="customer8"/>
                                    </a>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="https://source.unsplash.com/8mUEy0ABdNE/400x300" className="d-block mb-4 h-100">
                                        <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/8mUEy0ABdNE/400x300" alt="customer9"/>
                                    </a>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="https://source.unsplash.com/G9Rfc1qccH4/400x300" className="d-block mb-4 h-100">
                                        <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/G9Rfc1qccH4/400x300" alt="customer10"/>
                                    </a>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="https://source.unsplash.com/aJeH0KcFkuc/400x300" className="d-block mb-4 h-100">
                                        <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/aJeH0KcFkuc/400x300" alt="customer11"/>
                                    </a>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <a href="https://source.unsplash.com/p2TQ-3Bh3Oo/400x300" className="d-block mb-4 h-100">
                                        <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/p2TQ-3Bh3Oo/400x300" alt="customer12"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonials-container">
                <h2 className="testimonials-heading">Testimonials</h2>
                <hr className="lines"/>
                <Testimonials />
            </div>
            

        </div>
    );
};
export default AboutusPage;