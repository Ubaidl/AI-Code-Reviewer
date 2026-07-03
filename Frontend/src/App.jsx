import { useState } from 'react'
import { RouterProvider } from 'react-router'
import { router } from './app.routes'
import { AuthProvider } from './features/auth/auth.context'
import { Codecontextprovider } from './features/codereview/codeanalyzer.context'


function App() {
 

  return (
    <>
   

    <Codecontextprovider>
  <AuthProvider>
     <RouterProvider router ={router}/>
     
</AuthProvider>
 </Codecontextprovider>
    
      
    </>
  )
}

export default App
