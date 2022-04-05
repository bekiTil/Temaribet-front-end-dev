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
}

export default ParentLogin;
