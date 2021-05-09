import HeadObject from "../components/head";
import Nav from "../components/nav";

export default function Home() {

  // return (
  //   <div className="dark:text-white dark:bg-black">
  //     <HeadObject />
  //     <Nav />
  //     <div className="text-xl text-center">
  //       <h1 className="leading-loose">
  //         You are viewing a Next.js + Tailwind CSS starter.
  //       </h1>
  //       <button className="rounded-md bg-blue-300 dark:bg-blue-500 p-2 px-4 shadow-md mx-auto hover:shadow-lg">
  //         <a href="https://github.com/eilla1/next-starter">Github</a>
  //       </button>
  //     </div>
  //   </div>
   return (
     <div className='p-8 justify-center items-center h-screen flex'>
       <div className="dark:text-white dark:bg-black">
       <HeadObject />
       <Nav />
       </div>
       
       <form className='flex'>
       <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
        <input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1' id='name' type='text' aria-label='name' placeholder='Enter your name' />
         
         <input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1' id='text' type='text' aria-label='text1' placeholder='text 1' />
         
        <input className='bg-gray-200 shadow-inner rounded-l p-2 flex-1' id='text' type='text' aria-label='text2' placeholder='text 2' />
         
        
         <button className='bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r' type='submit'>
          Enter 
        </button>
         </form>
         
    </div>
  );
}
