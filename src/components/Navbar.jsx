import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'

function Navbar() {
    return (
        <div className='container mx-auto px-5 flex flex-row-reverse py-4 h-1/6 mb-8'>
            <div className='px-4 cursor-pointer hover:opacity-60'>
                <a href='https://github.com/JaswanthP6878'>
                    <AiFillGithub size={25} />
                </a>
            </div>
            <div className='cursor-pointer hover:opacity-60'>
                <a href='mailto: 2000039034cse@gmail.com'>
                    <AiOutlineMail size={25} />
                </a>
            </div>
        </div>

    )
}

export default Navbar;