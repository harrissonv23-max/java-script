const fieldsets = document.querySelectorAll("form fieldset");
let etapa = 0;

const progressBar = document.getElementById("progressBar");

function atualizarBarra() {
    progressBar.style.width = ((etapa + 1) * 25) + "%";
}

function mostrarEtapa() {
    fieldsets.forEach((f, i) => f.classList.toggle("active", i === etapa));
    atualizarBarra();
}

document.querySelectorAll(".back").forEach(btn => {
    btn.addEventListener("click", () => {
        etapa--;
        mostrarEtapa();
    });
});

// Máscara telefone
document.getElementById("telefone").addEventListener("input", function() {
    let v = this.value.replace(/\D/g, "");
    if (v.length > 10)
        this.value = v.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    else
        this.value = v.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
});

// Máscara CEP
document.getElementById("cep").addEventListener("input", function() {
    let v = this.value.replace(/\D/g, "");
    this.value = v.replace(/(\d{5})(\d{3})/, "$1-$2");
});

// VALIDAÇÕES
function validarEtapa1() {
    let nomeVal = nome.value.trim();
    let emailValido = /.+@.+\..+/.test(email.value);
    let tel = telefone.value.replace(/\D/g, "");

    if (!nomeVal || !emailValido || tel.length < 10 || !nascimento.value) {
        erro1.textContent = "Preencha todos os campos corretamente.";
        return false;
    }
    erro1.textContent = "";
    return true;
}

function validarEtapa2() {
    if (!cep.value || !logradouro.value || !numero.value || !bairro.value || !cidade.value || !estado.value) {
        erro2.textContent = "Todos os campos obrigatórios devem ser preenchidos.";
        return false;
    }
    erro2.textContent = "";
    return true;
}

function validarEtapa3() {
    const interesses = Array.from(document.getElementById("interesses").selectedOptions);
    if (!profissao.value || interesses.length === 0) {
        erro3.textContent = "Preencha profissão e selecione ao menos um interesse.";
        return false;
    }
    erro3.textContent = "";
    return true;
}

// NAVEGAÇÃO
next1.onclick = () => { if (validarEtapa1()) { etapa++; mostrarEtapa(); }};
next2.onclick = () => { if (validarEtapa2()) { etapa++; mostrarEtapa(); }};
next3.onclick = () => {
    if (validarEtapa3()) {
        etapa++;
        gerarResumo();
        mostrarEtapa();
    }
};

function gerarResumo() {
    const interesses = Array.from(document.getElementById("interesses").selectedOptions)
        .map(o => o.text)
        .join(", ");

    resumo.innerHTML = `
        <p><strong>Nome:</strong> ${nome.value}</p>
        <p><strong>Email:</strong> ${email.value}</p>
        <p><strong>Telefone:</strong> ${telefone.value}</p>
        <p><strong>Nascimento:</strong> ${nascimento.value}</p><br>

        <p><strong>CEP:</strong> ${cep.value}</p>
        <p><strong>Endereço:</strong> ${logradouro.value}, ${numero.value}</p>
        <p><strong>Bairro:</strong> ${bairro.value}</p>
        <p><strong>Cidade:</strong> ${cidade.value} - ${estado.value}</p>
        <p><strong>Complemento:</strong> ${complemento.value}</p><br>

        <p><strong>Profissão:</strong> ${profissao.value}</p>
        <p><strong>Empresa:</strong> ${empresa.value}</p>
        <p><strong>Interesses:</strong> ${interesses}</p>
        <p><strong>Sobre:</strong> ${sobre.value}</p>
    `;
}

formCadastro.addEventListener("submit", e => {
    e.preventDefault();
    formCadastro.style.display = "none";
    mensagemSucesso.style.display = "block";
});
