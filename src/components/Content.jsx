import SkillsCard from './SkillsCard'
import Projects from './Projects'
import { skills, Technologies } from './contentData';
function Content() {


    return (
        <div className="flex flex-col py-10">
            <h3 className="text-2xl mb-3 underline">About Me</h3>
            <p className="pb-5 text-xl">
                I'm a Junior at KL University, Vijayawada studying Computer Science
                and Engineering with a specialization in Artificial Intellegince and I am
                also quite passionate about Web Technologies and Software Development.
                I am a very curious person and always try to learn and understand Interesting Topics
            </p>
            <p className='text-xl'>
                Apart from this I am a huge fan of pixel art and  old-school nintendo games
            </p>


            <div className='my-10'>
                <h3 className='text-2xl mb-3 underline'>Relevant Coursework</h3>
                <ul className='list-disc list-inside'>
                    <li className='text-xl'>Elements of Software Construction</li>
                    <li className='text-xl'>Design and Analysis of Algorithms</li>
                    <li className='text-xl'>Database Management System</li>
                    <li className='text-xl'>Python Full-Stack Web Development</li>
                    <li className='text-xl'>Artificial Intelligence and Data science</li>
                    <li className='text-xl'>Machine Learning Deep Learning</li>
                </ul>

                <p>

                </p>
            </div>
            {/* Projects Div */}
            <div className='mt-3'>
                <h3 className='text-2xl underline'>Projects</h3>
                <Projects />
            </div>
            {/* Skills div */}
            <div className='mt-4'>
                <h3 className='text-2xl underline' >Skill proficiency levels</h3>
                <div className="md:flex md:flex-row md:justify-around">
                    <SkillsCard name="Languages" skills={skills} />
                    <SkillsCard name="Technologies" skills={Technologies} />
                </div>
            </div>

        </div>
    )
}

export default Content;