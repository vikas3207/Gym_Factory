import React,{useRef} from "react";
import styles from './aboutUs.module.css'
import Video_1 from '../../assests/about_video_1.mp4'
import Video_2 from '../../assests/about_video_2.mp4'
import SideNav from "../sideNav/SideNav";

const About = () => {
    // const Video_1 = useRef(null);
    // const handlePlay = () => {
    //     Video_1.current.play();
    //   };
    
    //   const handlePause = () => {
    //     Video_1.current.pause();
    //   };
    return (
        <>
        <SideNav />
        <section id="about" className={styles.about}>
            <div className={styles.about_container}>
            <h2>About Us</h2>
                <div className={styles.about_row}>
                    <div className={styles.video_block}>
                    <video src={Video_1}  controls />
                    </div>
                    <div className={styles.description}>
                        <h4>Know About Us</h4>
                        <p>A modern day gymnasium is a place for indoor physical workout where various equipment and machines are typically used. For some people, a typical gym is a place where you focus on weight lifting and similar activities.
                        </p>
                        <button className="btn">Learn More</button>
                    </div>
                </div>

                <div className={styles.about_row} id={styles.row_2}>
                    <div className={styles.description}>
                        <h4>Why Choos Us ?</h4>
                        <h6>Consultation with Expert</h6>
                        <p>A modern day gymnasium is a place for indoor physical workout where various equipment and machines are typically used.
                        </p>
                        <h6>Best workout Facilities</h6>
                        <p>For some people, a typical gym is a place where you focus on weight lifting and similar activities.</p>
                        <button className="btn">Learn More</button>
                    </div>
                    <div className={styles.video_block}>
                    <video src={Video_2}  controls />
                    </div>
                </div>
            </div>
        </section>
        </>
    );

}
export default About;