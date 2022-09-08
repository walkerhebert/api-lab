const baseURL = ("https://swapi.dev/api/")

const button = document.querySelector('button')

const buttonClicked = (event) => {
    console.log('button clicked')
    axios.get(`${baseURL}/planets/2`)// using the baseURL variable above

    //if succesful response
    .then((res) => {
        const data = res.data.residents
        for(i=0; i<data.length; i++){
            axios.get(`${data[i]}`)
            .then((res) => {
                console.log(res.data)
                // //append inner html
                // document.getElementById("residents").innerHTML += <h3></h3>

            })

        }

      })
      // is response failse
      .catch((error) => {
        console.log(error)
      })

}

document.addEventListener('click', buttonClicked)






//   app.listen(4000, () => {console.log('Listening on port 4000')})
