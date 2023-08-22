import React from "react";
import Slider from 'react-slick';
import Styles from '../gallery/gallery.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallery() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    

    };
    return (
        <section id="gallery" className={Styles.gallery}>
            <div className={Styles.gallery_content}>
                <h2>Meet <span>Our</span> Team</h2>
                <p>We are the team of experienced people, nutritions, sports and fitness passionated expert with talent and knowledge unsurpassed in the industry.Get to know us.</p>
            </div>
            <div className={Styles.slider}>

                <Slider {...settings} >
                    <div className={Styles.card}>
                        <div className={Styles.card_top}>
                        <img src = "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </div>
                        <div className={Styles.card_bottom}>
                        <h6>Amitee Loiselle</h6>
                        <p> Fitness Coach</p>
                        </div>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.card_top}>
                        <img src = "https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </div>
                        <div className={Styles.card_bottom}>
                        <h6>Amitee Loiselle</h6>
                        <p> Fitness Coach</p>
                        </div>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.card_top}>
                        <img src = "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </div>
                        <div className={Styles.card_bottom}>
                        <h6>Amitee Loiselle</h6>
                        <p> Fitness Coach</p>
                        </div>
                    </div>
                    <div className={Styles.card}>
                        <div className={Styles.card_top}>
                        <img src = "https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </div>
                        <div className={Styles.card_bottom}>
                        <h6>Amitee Loiselle</h6>
                        <p> Fitness Coach</p>
                        </div>
                    </div>
                    <div className={Styles.card}>
                    <div className={Styles.card_top}>
                    <img src = "https://images.pexels.com/photos/963697/pexels-photo-963697.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                    </div>
                    <div className={Styles.card_bottom}>
                    <h6>Amitee Loiselle</h6>
                    <p> Fitness Coach</p>
                    </div>
                </div>
                <div className={Styles.card}>
                <div className={Styles.card_top}>
                <img src = "https://images.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                </div>
                <div className={Styles.card_bottom}>
                <h6>Amitee Loiselle</h6>
                <p> Fitness Coach</p>
                </div>
            </div>
                    
                    
                   
                </Slider>
            </div>
            <button type="button" className={Styles.whole_team_btn}>See The Whole Team</button>

        </section>
    )
}
export default Gallery;