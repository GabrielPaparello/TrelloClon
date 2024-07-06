
import React from 'react'

const Page = () => {
  return (
    <main>
          <div>
              <h1>Create Project</h1>
        <button className="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start New Project</button>

        <form className='flex flex-col' >
          <h2>Project Name</h2>
            <input type="text" name="project_name" />
          <h2>Project Description</h2>
              <input type="text" name="project_description" />
          <h2>Project Type</h2>
            <input type="text" name="project_type" />
          <h2>Project Status</h2>
            <input type="text" name="project_status" />
          <h2>Project Priority</h2>
            <input type="text" name="project_priority" />
          <h2>Project Team</h2>
          <input type="text" name="project_team" />
          
          <input className='bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit" value='Create' />


        </form>
          </div>
    </main>
  )
}

export default Page