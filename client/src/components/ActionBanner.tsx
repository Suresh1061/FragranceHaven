import React from 'react'
import actionBannerDextop from "../assets/action-banner-desktop.png"
import actionBannerMobile from "../assets/action-banner.png"

const ActionBanner: React.FC = () => {
     return (
          <div>
               <div className="block md:hidden">
                    <img
                         src={actionBannerMobile}
                         alt="Action Banner"
                         className="w-full"
                    />
               </div>
               <div className="hidden md:block">
                    <img
                         src={actionBannerDextop}
                         alt="Action Banner"
                         className="w-full h-[450px]"
                    />
               </div>
          </div>
     )
}

export default ActionBanner