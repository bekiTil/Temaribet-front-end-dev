
import  Image from "next/image"

function ParentLogin() {
    return <header class="bg-white dark:bg-gray-800">
<div class="lg:flex">
    <div class="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
        <div class="max-w-xl">
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">Build Your New <span class="text-blue-600 dark:text-blue-400">Idea</span></h2>
                
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 lg:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.</p>

            <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <a href="#" class="block px-3 py-2 text-sm font-semibold text-center text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">Get Started</a>
                <a href="#" class="block px-3 py-2 text-sm font-semibold text-center text-gray-700 transition-colors duration-200 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">Learn More</a>
            </div>
        </div>
    </div>
    
    {/* <div class="w-auto md:w-full  w-1/2 bg-cover h-auto">
<Image
            src = "/parents.jpg" 
            layout="responsive"
            width= {250}
            height={253}
            
            />

    <div class="w-full h-full bg-black opacity-25"></div>
</div> */}
  <div class="w-full h-64 lg:w-1/2 lg:h-auto">
        <div class="w-full h-full bg-contain bg-no-repeat bg-fixed " style={{backgroundImage: `url("/parents.jpg" )`}}>
            <div class="w-full h-full bg-black opacity-25"></div>
        </div>
    </div>
    
  
    </div>
    

    

</header>;
}

export default ParentLogin;















