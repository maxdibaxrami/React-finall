import React from "react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <div className="h-screen flex justify-center items-center text-5xl text-black">
             <Button to="/" as={Link} color="primary">
                Register page
            </Button>
        </div>
    )
}

export default RegisterPage;