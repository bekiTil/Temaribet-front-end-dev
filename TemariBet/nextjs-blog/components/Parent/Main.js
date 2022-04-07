import Image from "next/image";
import Page1 from "./child_components/page1";
function Main(props) {
  return <div class="flex rounded-lg shadow-lg w-full  bg-white sm:mx-0" style={{height: "680px"}}>
              <div class="flex flex-col w-full  lg:w-1/2 xl:w-3/5  p-4 bg-[#FED607]">
                  <div class="flex flex-col flex-1 justify-center mb-8">
                      
                      <div class="w-full mt-4">
                          {/* <form class="form-horizontal w-3/4 mx-auto" method="POST" action="#">
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
                          </form> */}
                          {props.children}

                          

                      </div>
                  </div>
              </div>
              <div class="hidden lg:block md:w-4/5 rounded-r-lg  " style={{background: `url("/parents4.jpg")`, backgroundPosition: "top right" }}></div>
          </div>
     
  
  

}

export default Main;
