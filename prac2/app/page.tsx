import axios from 'axios'
export default async function UserPage(){
  const result = await axios('https://jsonplaceholder.typicode.com/todos/1')
  
  return(
    <div>
      {JSON.stringify(result.data)}
    </div>
  )
}