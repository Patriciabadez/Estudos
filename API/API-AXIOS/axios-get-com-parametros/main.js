const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.texContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))

}
function addNewUser(newUser) {
    axios.post(url,newUser)
    .then(response =>{

    })
    console.log(response)

    .catch(error => console.error(error))
}
function getUser(id){
    axios.get(`${url}/${id}`)
    .then(response =>{
        userName.textContent =response.data.name
        userCity.textContent =response.data.city
        userID.texContent = response.data.id
        userAvatar.src = response.data.avatar

    })
    .catch(error => console.error(error))
}
const newUser = {
    name:"Patricia Dias",
    avatar:"https://picsum.photos/id/237/200/300",
    city:"Porto Alegre"
}
getUsers()
getUser(2)
addNewUser(newUser)