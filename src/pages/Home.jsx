import React from "react";
import {Button} from "@nextui-org/react";
import { Link } from "react-router-dom";
import BottomTab from "@/components/ButtomTab/bottomTab"
import ProfilePage from "@/components/Profile";
const Home = () => {

    return (
        <div className="h-screen video-background flex justify-center items-center text-5xl text-black">
          
            <ProfilePage/>
        
            <BottomTab/>
        </div>
    )
}

export default Home;

