import ProfileImage from "./ProfileImage";

function Main (){
    return(
        <div className="flex flex-col align-center bg-fixed pb-10" style={{ 
            backgroundImage: `url("https://portfolioimages6878.blob.core.windows.net/newcontainer/svg.png")`,
            backgroundSize: 'cover' 
          }} >
            <ProfileImage />
            <div className = "flex flex-col justify-center text-center">
               <p className = "mx-5 text-xl pl-29 font-bold"> 
               Hey, I'm Jaswanth, An aspiring software engineer
               </p>
            </div>
        </div>
    )
}

export default Main;