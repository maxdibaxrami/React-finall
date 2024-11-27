import React,{useRef, useState, useEffect} from "react";
import {Button} from "@nextui-org/react";
import { Link } from "react-router-dom";
import BottomTab from "@/components/ButtomTab/bottomTab"

const Home = () => {

    const videoRef = useRef(null);
    const [isReversing, setIsReversing] = useState(false);

    useEffect(() => {
        const video = videoRef.current;

        // Set initial playback speed to 0.2x
        video.playbackRate = 0.1;

        const handleVideoTimeUpdate = () => {
            if (isReversing) {
                // If reversing, reduce the current time frame by frame
                video.currentTime -= 0.05; // Reverse slightly with each frame
                if (video.currentTime <= 0) {
                    setIsReversing(false);
                    video.play();
                }
            } else {
                if (video.currentTime >= video.duration) {
                    // If video reaches the end, start reversing
                    video.pause();
                    setIsReversing(true);
                }
            }
        };

        // Listen to the time update event
        video.addEventListener('timeupdate', handleVideoTimeUpdate);

        // Cleanup the event listener on unmount
        return () => {
            video.removeEventListener('timeupdate', handleVideoTimeUpdate);
        };
    }, [isReversing]);

    return (
        <div className="h-screen video-background flex justify-center items-center text-5xl text-black">
            <video ref={videoRef} autoPlay muted loop playsInline>
                <source src="/assets/background-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="content-background">
                <Button to="/register" as={Link} color="primary">
                    Button
                </Button>
            </div>
            

            <BottomTab/>
        </div>
    )
}

export default Home;

