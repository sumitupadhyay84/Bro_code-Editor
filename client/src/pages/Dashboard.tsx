// import { colorTheme } from '@uiw/codemirror-extensions-color'
// import { color, hoverTooltip } from '@uiw/react-codemirror'
// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import illustration from "@/assets/learn-coding-online-for-free.webp"
// import Navbar from '@/components/navbar/Navbar'

// const Dashbaord = () => {
// const navigate = useNavigate()
// const homee=()=>{
//     navigate('/home')
// }
// const aboutt =()=>{
//     navigate('about-us')
// }
//   return (
//     <>
//     <Navbar/>
//     <div className="flex min-h-screen flex-col items-center justify-center gap-16 bg-[#442543] p-6">
//       <div className="bg-[#998399a6] p-3 shadow-2xl shadow-[#252525] rounded-2xl animate-up-down justify-center sm:pl-4">
//     <div style={styles.container} className=' text-center'>
//       <h1 style={styles.heading}>Let's Code it</h1>
//       <p style={styles.description}>
//       Our comprehensive code editor platform designed to foster collaborative coding and skill 
//       development. It enables users to work together in groups, allowing real-time coding sessions that encourage 
//       teamwork and knowledge sharing. The platform includes integrated chat features, facilitating seamless 
//       communication and discussion among team members. The website offers drawing tools, enabling users to visually
//        demonstrate coding approaches and concepts. This visual aid enhances understanding and helps in brainstorming 
//        solutions more effectively. The platform is tailored to create an environment where aspiring coders can learn, 
//        collaborate, and improve their skills, ultimately aiming to produce highly skilled, well-rounded coders
//       </p><br/>

//       <div className="flex w-full justify-center sm:pl-4">
//           <img
//               src={illustration}
//               alt="Code Sync Illustration"
//               className="mx-auto w-[250px] sm:w-[400px]"
//             />
//       </div><br/>
      
//       <div style={styles.buttonContainer}>
//         <button style={styles.button} onClick={homee}>
//           Login
//         </button>
//         <button style={styles.button} onClick={aboutt}>
//           About us
//         </button>
//       </div>
//       </div>
//     </div>
//     </div>
//     </>
//   )
// }

// const styles = {
//   container: {
//     // textAlign: 'center',
//     marginTop: '50px',
//   },
//   heading: {
//     fontSize: '4.5rem',
//     marginBottom: '20px',
//   },
//   description: {
//     fontSize: '1.2rem',
//     marginBottom: '70px',
//     padding: '0 80px',
//   },
//   buttonContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '20px',
//   },
//   button: {
//     padding: '10px 20px',
//     fontSize: '1rem',
//     cursor: 'pointer',
//     backgroundColor: '#442543',
//     color: '#ffffff',
//     border: 'none',
//     borderRadius: '5px',
//   }
// };

// export default Dashbaord;

import Navbar from '@/components/navbar/Navbar'
import './Dashboard.css'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
const loginn=()=>{
    navigate('/home')
}
  return (
    <div className='bg-[url("https://miro.medium.com/max/1200/0*95mpuGB_C1YqK9Vx")] bg-no-repeat bg-cover min-h-screen'>
      <Navbar/>
      <div className='flex justify-center items-center min-h-[90vh] p-8'>
      <div className="flex flex-col items-center font-extrabold bg-[#403b40c2] lg:p-24 p-10 shadow-2xl shadow-[#252525] rounded-2xl justify-center">
        <h1 className='heading lg:text-6xl text-4xl my-5'>Let's code it !</h1>
          <p className='my-5'>Empower your coding journey with real-time collaboration, integrated chat, and<br/> 
            visual tools—where teamwork and innovation turn aspiring coders into experts.</p>

          <div>
            <button className='vtn flex justify-center bg-[#442543] hover:bg-[#6a4f6d] duration-300 px-10 py-1 rounded' onClick={loginn}>
              Login
            </button>
          </div>
      </div>
      </div>


    </div>
  )
}

export default Dashboard