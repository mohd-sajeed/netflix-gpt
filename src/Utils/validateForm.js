 export const checkValidData =(email,password,name)=>{

    const isEmailValid=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isFullNameValid=/^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name)

    if(!isEmailValid) return "Please enter a valid email address."
    if(!isPasswordValid) return "Your password must contain between 4 and 60 characters."
    if(!isFullNameValid) return "Name is not valid"

    return null

 }