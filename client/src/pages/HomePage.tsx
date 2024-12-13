//import illustration from "@/assets/learn-coding-online-for-free.webp"
import illustration from "@/assets/13830732_Set_of_programmers_01UNG-02-removebg.png"
import FormComponent from "@/components/forms/FormComponent"
// import Footer from "@/components/common/Footer";
import Navbar from '@/components/navbar/Navbar'

function HomePage() {
    return (
        <>
        <Navbar/>
        <div className="flex min-h-screen flex-col items-center justify-center gap-16 bg-[#302434] p-5">
            <div className="my-12 flex h-full min-w-full flex-col items-center justify-evenly sm:flex-row sm:pt-0 ">
                
                <div className="flex w-full items-center justify-center sm:w-1/2">
                    <FormComponent />
                </div>
                <div className="flex w-full animate-up-down justify-center sm:w-1/2 sm:pl-4">
                    <img
                        src={illustration}
                        alt="Code Sync Illustration"
                        className="mx-auto lg:w-[40vw] w-[400px]"
                    />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
        </>
    )
}

export default HomePage
