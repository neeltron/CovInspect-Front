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
     
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"/>
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
