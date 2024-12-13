// import { color } from '@uiw/react-codemirror'
import { useNavigate } from 'react-router-dom'
import Navbar from '@/components/navbar/Navbar'
import hello from '@/assets/11879298_202011_04-removebg.png'
const AboutUs = () => {
  const navigate = useNavigate()
  const homee=()=>{
    navigate('/home')
}
const dash =()=>{
    navigate('/')
}
  return (
    <>
    <Navbar/>
    <div className="flex min-h-screen flex-col items-center justify-center gap-16 bg-[#302434] p-6">
      {/* <div className="bg-[#998399a6] flex p-6 shadow-2xl shadow-[#252525] rounded-2xl justify-center sm:pl-4 text-center">
      <div className="flex w-full animate-up-down justify-center sm:w-1/2 sm:pl-4">
                    <img
                        src={hello}
                        alt="Code Sync Illustration"
                        className="mx-auto w-[250px] sm:w-[400px]"
                    />
                </div>
        <div className='flex flex-col w-full items-center justify-center sm:w-1/2'>
        <h1 style={styles.heading}>About us</h1>
        <p style={styles.describe}>We are dedicated to creating a collaborative coding environment that empowers individuals and teams to excel in programming.
           Our platform is designed to facilitate group coding, enabling users to work together in real-time, discuss ideas through 
           integrated chat features, and visually demonstrate their approaches using intuitive drawing tools. Our mission is to cultivate 
           a community of learners and coders who can grow together, share knowledge, and develop the skills necessary to become exceptional
            coders.</p>

          <div className='flex '>
            <button style={styles.button} onClick={dash}>
              Home
            </button>
            <button style={styles.button} onClick={homee}>
              Login
            </button>
          </div>
          </div>
      </div> */}

{/* <div className="flex flex-col items-center justify-center gap-16 bg-[#998399a6] p-5"> */}
            <div className="my-12 flex h-full min-w-full flex-col items-center  bg-[#58525869] justify-evenly sm:flex-row p-10 rounded-xl shadow-2xl shadow-[#252525]">
                <div className="flex w-full animate-up-down justify-center sm:w-1/2 sm:pl-4">
                    <img
                        src={hello}
                        alt="Code Sync Illustration"
                        className="mx-auto w-[250px] sm:w-[400px]"
                    />
                </div>
                <div className="flex flex-col w-full items-center justify-center sm:w-1/2">
                    {/* <FormComponent /> */}
                    <h1 className='text-4xl font-extrabold lg:text-6xl'>About us</h1>
        <p className='my-5'>We are dedicated to creating a collaborative coding environment that empowers individuals and teams to excel in programming.
           Our platform is designed to facilitate group coding, enabling users to work together in real-time, discuss ideas through 
           integrated chat features, and visually demonstrate their approaches using intuitive drawing tools. Our mission is to cultivate 
           a community of learners and coders who can grow together, share knowledge, and develop the skills necessary to become exceptional
            coders.</p>

          <div className='flex '>
            <button style={styles.button} onClick={dash}>
              Home
            </button>
            <button style={styles.button} onClick={homee}>
              Login
            </button>
          </div>
                </div>
            </div>
        {/* </div> */}

   <span className="inline-block bg-gray-200 rounded-full px-8 py-3 text-3xl text-center font-semibold text-gray-700 shadow-lg">Features</span>

  <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 rounded-2xl'>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#998399a6]">
  {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/> */}
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Versatile Language Options</div>
    <p className="text-[#271c2b] text-base">
      The platform offers extensive language support, enabling users to code in a wide variety of programming languages. 
      Whether you're coding in Python, JavaScript, C++, or any other popular language, the platform provides the necessary 
      tools and features to ensure a smooth and efficient coding experience.
    </p>
  </div>
</div>

<div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#998399a6]">
  {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/> */}
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Group Chatting</div>
    <p className="text-[#271c2b] text-base">
      Enables users to communicate in real-time while working on code. Group chatting allows team members to discuss ideas, 
      share feedback, and troubleshoot issues together. This ensures enhancing productivity and the overall coding experience.
    </p>
  </div>
</div>

<div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#998399a6]">
  {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/> */}
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">User Presence</div>
    <p className="text-[#271c2b] text-base">
      Displays a list of users currently participating in the collaboration session, complete with online/offline status indicators.
       It allows team members to easily see who is active, who is available for discussion, and who might be away. 
    </p>
  </div>
</div>

<div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#998399a6]">
  {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/> */}
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Collaborative Drawing</div>
    <p className="text-[#271c2b] text-base">
      Enable users to draw and sketch collaboratively in real-time, This capability is particularly useful for illustrating ideas, demonstrating coding approaches, or visually brainstorming solutions during group coding sessions.
    </p>
  </div>
</div>

</div>

    </div>
    </>
  )
}

const styles = {
  heading: {
    fontSize: '4.5rem',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#442543',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    margin:'10px',

  },
  describe: {
    padding: '20px 120px',
    color: '#271c2b'
  }
};

export default AboutUs
