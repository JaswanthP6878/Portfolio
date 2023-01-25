import DP from '../assets/ProjectPics/Yelpcamp.png'
function ProjectCard( { content }) {
    
    
    return (
        <div className="m-5  bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl hover:scale-105 cursor-pointer" onClick={() => window.open(`${content.code}`, "_blank")}>
            <div>
                <div>
                    <img className="max-h-32 w-full object-cover md:h-full md:w-full" src={content.url} alt="Modern building architecture" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-md text-blue-600 font-semibold">{content.name}</div>
                    <a href="#" className="block mt-1 text-md leading-tight font-medium text-black hover:underline">{content.description}</a>
                    <p className="mt-2 text-slate-500">{content.about}</p>
                </div>
            </div>
        </div>
    )

}

export default ProjectCard;