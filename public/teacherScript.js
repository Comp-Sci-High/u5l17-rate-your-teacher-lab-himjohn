// Add an event listener to the form that upon submits creates a new teacher
// When the teacher is created redirect to the teachers page
const teachForm = document.querySelector("form")

teachForm.addEventListener("submit", async (e)=>{
   e.preventDefault()

   const formData = new FormData(teachForm)
   const reqBody = teacherSchema.teachFormEntries(formData)

   const response = await fetch("/add/teacher", {
    method: "POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: json.Stringify(reqBody)

})
   const data = await response.json()
   console.log(data)
    windows.location.href = "/"
})
