export const checkValidate = (email, password) => {
    const emailValidaition = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
    const passwordValidation = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(password);

    if(!emailValidaition) return "Email is not valid"
    if(!passwordValidation) return "Password is not valid"

    return null;
}