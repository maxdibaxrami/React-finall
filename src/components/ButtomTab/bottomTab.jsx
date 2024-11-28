import React from "react";
import {Tabs, Tab} from "@nextui-org/react";
import {ProfileIcon, ChatIcon, FireIcon} from "@/icons/Icons"


const BottomTab = () => {
  return <div className="flex w-full flex-col fixed bottom-6 items-center w-full">
    <Tabs classNames={{tab:"botton-tab--tabs",base:"background-menu"}} aria-label="Options" color="primary" variant="light">
      <Tab
        key="photos"
        title={
          <div className="flex flex-col justify-center items-center">
            <FireIcon/>
            <p style={{fontSize:"10px"}}>Explore</p>
          </div>
        }
      />
      <Tab
        key="music"
        title={
          <div className="flex flex-col justify-center items-center">
            <ChatIcon/>
            <p style={{fontSize:"10px"}}>Chat</p>
          </div>
        }
      />
      <Tab
        key="videos"
        title={
          <div className="flex flex-col justify-center items-center">
            <ProfileIcon/>
            <p style={{fontSize:"10px"}}>Profile</p>
          </div>
        }
      />
    </Tabs>
  </div>  
  }


  export default BottomTab