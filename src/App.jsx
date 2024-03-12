import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function App() {

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  console.log(user)
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </nav>
          {!isAuthenticated ?
            <button onClick={() => loginWithRedirect()} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button> :
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="inline-flex items-center bg-red-100 ml-3 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          }
        </div>
      </header>

      {isAuthenticated ?
        <div className="flex items-center h-screen w-full justify-center">
          <div className="max-w-xs">
            <div className="bg-white shadow-xl rounded-lg py-3">
              <div className="photo-wrapper p-2">
                <img className="w-32 h-32 rounded-full mx-auto" src={user?.picture} alt="John Doe" />
              </div>
              <div className="p-2">
                <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{user?.name}</h3>
                <div className="text-center text-gray-400 text-xs font-semibold">
                  <p>Front End Engineer</p>
                </div>
                <table className="text-xs my-3">
                  <tbody><tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Name</td>
                    <td className="px-2 py-2">{user?.name}</td>
                  </tr>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">Nickname</td>
                      <td className="px-2 py-2">{user?.nickname}</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                      <td className="px-2 py-2">{user?.email}</td>
                    </tr>
                  </tbody></table>

                <div className="text-center my-3">
                  <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
                </div>

              </div>
            </div>
          </div>

        </div> :
        <button onClick={() => loginWithRedirect()} class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-12 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
      }
    </>
  )
}

export default App
