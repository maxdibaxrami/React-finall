import React from "react";
import {Button} from "@nextui-org/react";
import { Link } from "react-router-dom";
import BottomTab from "@/components/ButtomTab/bottomTab"

const Home = () => {
    return (
        <div className="h-screen flex justify-center items-center text-5xl text-black">
            <Button to="/register" as={Link} color="primary">
                Button
            </Button>

            <BottomTab/>
        </div>
    )
}

export default Home;