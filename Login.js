

const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

pwShowHide.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        let pwFields =
            eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach((password) => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        });
    });
});

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); //preventing form submit
        forms.classList.toggle("show-signup");
    });
});

var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");
var signup = document.getElementById("register");
var login = document.getElementById("login");

console.log(form)
form.addEventListener('submit', (e) => {
    e.preventDefault();          
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === "") {
        setError(username, "Username is required");
    } else {
        setSuccess(username);
    }

    if (emailValue === "") {
        setError(email, "Email is required");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email address");
    } else {
        setSuccess(email);
    }

    if (passwordValue === "") {
        setError(password, "Password is required");
    } else if (passwordValue.length < 8) {
        setError(password, "Password must be at least 8 character.");
    } else {
        setSuccess(password);
    }

    if (password2Value === "") {
        setError(password2, "Please confirm your password");
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};

signup.addEventListener("click", () => {
    {
        let name,email,psw;
        name=document.getElementById("username").value;
        email=document.getElementById("email").value;
        
        psw=document.getElementById("password").value;
        
        let user_records=new Array();
        user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
        
        user_records.push({
          "name":name,
          "email":email,
          "psw":psw
        })
        localStorage.setItem("users",JSON.stringify(user_records));
        }
        
        });


login.addEventListener("click", () => {
    {
        let email,psw,userval;
        email=document.getElementById("input-email").value;
        
        psw=document.getElementById("input-password").value;

        userval =document.getElementById("input-user").value;
        
        result =document.getElementById("result");

        let user_records=new Array();
        user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
        if(user_records.some((v)=>{return v.email==email && v.psw==psw}))
        {
            result.innerText ="✅ Login successfully"
            // setTimeout(function () {

               
                window.location.href = 'https://e-com-api.netlify.app';
                
                
                
            
        }
        else
        {
          result.innerText ="❗❗❗ Check UserName & Password"
        }
        
        }
});

