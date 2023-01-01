// ================== Sign In ==================
let signin = document.getElementById("modal-signin");
let user = document.getElementById("btn-users");
let close_in = document.getElementsByClassName("modal-close")[0];

user.addEventListener('click', event => {
    signin.style.display = "block";
})

close_in.addEventListener("click", event => {
    signin.style.display = "none";
})


// ================== Sign out ====================
let res = document.getElementById("modal-register");
let create = document.getElementById("btn-create");
let close_out = document.getElementsByClassName("modal-close")[1];

create.addEventListener("click", event => {
    signin.style.display = "none";
    res.style.display = "block";
})
close_out.addEventListener("click", event => {
    res.style.display = "none";
})



// ================== Validate Sign in ==================
const form = document.getElementById('signin');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-message');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-message');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if(usernameValue === '') {
        setError(username, 'Bạn chưa nhập tên đăng nhập');
    } else {
        setSuccess(username);
    }

    if(passwordValue === '') {
        setError(password, 'Bạn chưa nhập mật khẩu');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Mật khẩu phải trên 8 ký tự.')
    } else {
        setSuccess(password);
    }

};

// ================ Validata Resgister ==============
const form2 = document.getElementById('resgister');
const username2 = document.getElementById('username2');
const email = document.getElementById('email');
const password2 = document.getElementById('password2');
const cfpassword2 = document.getElementById('cfpassword2');

form2.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs2();
});

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs2 = () => {
    const username2Value = username2.value.trim();
    const emailValue = email.value.trim();
    const password2Value = password2.value.trim();
    const cfpassword2Value = cfpassword2.value.trim();

    if(username2Value === '') {
        setError(username2, 'Nhập tên đăng nhập của bạn');
    } else {
        setSuccess(username2);
    }

    if(emailValue === '') {
        setError(email, 'Nhập email của bạn');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(password2Value === '') {
        setError(password2, 'Nhập mật khẩu của bạn');
    } else if (password2Value.length < 8 ) {
        setError(password2, 'Password must be at least 8 character.')
    } else {
        setSuccess(password2);
    }

    if(cfpassword2Value === '') {
        setError(cfpassword2, 'Nhập lại mật khẩu của bạn');
    } else if (password2Value !== password2Value) {
        setError(cfpassword2, "Mật khẩu không đúng");
    } else {
        setSuccess(cfpassword2);
    }

};





