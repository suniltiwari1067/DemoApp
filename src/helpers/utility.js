export const validateEmailId = (input) => {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (input !== "" && emailRegex.test(input)) {
        return true;
    } else {
        return false;
    }
}

export const validatePassword = (input) => {
    let pwdRegex = /^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    if (input !== "" && pwdRegex.test(input)) {
        return true;
    } else {
        return false;
    }
}
