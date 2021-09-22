import 'regenerator-runtime/runtime'
import { querySelectElement } from './domMethods'
const storedUserData = JSON.parse(localStorage.getItem('userData'))
console.log(storedUserData)


const handleSubmit = async (e) => {
    e.preventDefault()
    const clientName = e.target['InputName'].value
    const clientCompany = e.target['InputCompanyName'].value
    const clientStreet = e.target['InputCompanyStreet'].value
    const clientSuite = e.target['InputCompanySuite'].value
    const clientCity = e.target['InputCompanyCity'].value
    const clientZip = e.target['InputCompanyZip'].value
    const clientCatchPhrase = e.target['InputCompanyCatchPhrase'].value
    const clientEmail = e.target['InputEmail'].value
    const clientPhone = e.target['InputPhoneNumber'].value
    const clientUsername = e.target['InputUsername'].value
    const clientWebsite = e.target['InputWebsite'].value



    let URL = 'https://my-json-server.typicode.com/florsu/PWA-Online-Offline-Rolodex-App/clients'
    let reqBody = {
        id: nextId(),
        name: clientName,
        username: clientUsername,
        email: clientEmail,
        address: {
            street: clientStreet,
            suite: clientSuite,
            city: clientCity,
            zipcode: clientZip,
        },
        phone: clientPhone,
        website: clientWebsite,
        company: {
            name: clientCompany,
            catchPhrase: clientCatchPhrase,
        }
    }
    let headers = {
        method: "POST",
        body: JSON.stringify(reqBody),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }

    let res = await fetch(URL, headers)
    let json = await res.json()
    console.log(json)
    storedUserData.push(json)

    localStorage.setItem('userData', JSON.stringify(storedUserData))

    window.location.href = './index.html'
}

function nextId() {
    let id=0
    for (let i = 0; i < storedUserData.length; i++) {
       if (storedUserData[i].id >= id) {
           id=storedUserData[i].id + 1
       }
      }
    return id
}


const form = querySelectElement('form')

form.addEventListener('submit', handleSubmit)