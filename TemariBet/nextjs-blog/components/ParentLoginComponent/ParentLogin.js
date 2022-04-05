<<<<<<< HEAD
import Page11 from "./child_components/page11";

function ParentLogin() {
  return (
    <header class="bg-white dark:bg-gray-800">
      <div class="lg:flex">
        <Page11 />

        <div class="w-full h-64 lg:w-1/2 lg:h-auto">
          <div
            class="w-full h-full bg-contain bg-no-repeat bg-fixed "
            style={{ backgroundImage: `url("/parents.jpg" )` }}
          >
            <div class="w-full h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
    </header>
  );
=======
import Image from "next/image";

function ParentLogin() {
  return <div class="flex rounded-lg shadow-lg w-full  bg-white sm:mx-0" style={{height: "680px"}}>
              <div class="flex flex-col w-full  lg:w-1/2 xl:w-3/5  p-4 bg-[#FED607]">
                  <div class="flex flex-col flex-1 justify-center mb-8">
                      <h1 class="text-4xl text-center font-thin">Welcome Back</h1>
                      <div class="w-full mt-4">
                          <form class="form-horizontal w-3/4 mx-auto" method="POST" action="#">
                              <div class="flex flex-col mt-4">
                                  <input id="email" type="text" class="flex-grow h-8 px-2 border rounded border-grey-400" name="email" value="" placeholder="Email" />
                              </div>
                              <div class="flex flex-col mt-4">
                                  <input id="password" type="password" class="flex-grow h-8 px-2 rounded border border-grey-400" name="password" required placeholder="Password" />
                              </div>
                              <div class="flex items-center mt-4">
                                  <input type="checkbox" name="remember" id="remember" class="mr-2" /> <label for="remember" class="text-sm text-grey-dark">Remember Me</label>
                              </div>
                              <div class="flex flex-col mt-8">
                                  <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                                      Login
                                  </button>
                              </div>
                          </form>
                          <div class="text-center mt-4">
                              <a class="no-underline hover:underline text-blue-dark text-xs" href="{{ route('password.request') }}">
                                  Forgot Your Password?
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="hidden lg:block md:w-4/5 rounded-r-lg  " style={{background: `url("/parents.jpg")`, backgroundPosition: "bottom right" }}></div>
          </div>
     
  
  
>>>>>>> 98c8a7cdcb27a1f14dcc05fb84fa82c731d49568
}

export default ParentLogin;
