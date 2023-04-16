

// Cadastro - Login

const signUp = e => {
    let fname = document.getElementById('fname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;


    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data => 
        data.fname.toLowerCase() == fname.toLowerCase());

    if(!exist){
        formData.push({ fname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));

        
        document.getElementById('form').reset();
        document.getElementById('fname').focus();
        alert("Conta criada com sucesso!");
        

    } else {
        alert ("Ooooppss... Já existe uma conta com essas informações!");
    }
    e.preventDefault();
}


function signIn(e) {
    let email = document.getElementById('email').value, 
        pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    
    if(!exist){
        alert("Credenciais incorretas");
    } else {
        location.href = "../logado.html";
    }
    e.preventDefault();
}

let fillData = () => {
    let ele = document.getElementById('caixa');
    ele.innerHTML += 'oi';
}

let deslogar = () => {
    location.href = "index.html"
}

