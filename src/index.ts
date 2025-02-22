import { Hono } from 'hono'
import {get_todos} from "./getTodos.js"

const app = new Hono()

app.get("*", async(c)=>{
  return c.redirect("/todos")
})

app.get('/todos', async(c) => {
  const imported_array = get_todos()
  console.log(imported_array);
  return c.json(imported_array)
})

export default app
