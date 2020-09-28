

var data = [
    {
        nik : 1234567890,
        name : "Gilbert Subay",
        placebirth : "Jakarta",
        birthday : "1996-11-21",
        gender : "Male",
        bloodtype : "Z",
        address : "Jl. tipar",
        rt : 5,
        rw : 15,
        urbanvillage : "papua",
        subdistrict : "manokwari",
        religion : "Protestan",
        maritalstatus : "Single",
        profession : "UnEmployee",
        nationality : "Indonesian",
    }
]


 
function listProfile() {
    var table = document.getElementById("table");
    table.innerHTML = "<tr><th>No</th>"+
    "<th>NIK</th>"+
    "<th>Name</th>"+
    "<th>Place birth</th>"+
    "<th>Birthday</th>"+
    "<th>Gender</th>"+
    "<th>Blood type</th>"+
    "<th>Address</th>"+
    "<th>RT</th>"+
    "<th>RW</th>"+
    "<th>Urban village</th>"+
    "<th>Subdistrict</th>"+
    "<th>Religion</th>"+
    "<th>Marital status</th>"+
    "<th>Profession</th>"+
    "<th>Nationality</th>"+
    "<th>Division</th></tr>";
    for (let i = 0; i < data.length; i++) {
        //var btnEdit = "<button class='btn-edit' href='#' onclick='edit(" + i + ")'>Edit</button>";
        //var btnDiscard = "<button class='btn-discard' href='#' onclick='discard(" + i + ")'>Discard</button>";
        j = i + 1;
        table.innerHTML += "<tr><td>"+j+"</td>"+
        "<td>"+data[i].nik+"</td>"+
        "<td>"+data[i].name+"</td>"+
        "<td>"+data[i].placebirth+"</td>"+
        "<td>"+data[i].birthday+"</td>"+
        "<td>"+data[i].gender+"</td>"+
        "<td>"+data[i].bloodtype+"</td>"+
        "<td>"+data[i].address+"</td>"+
        "<td>"+data[i].rt+"</td>"+
        "<td>"+data[i].rw+"</td>"+
        "<td>"+data[i].urbanvillage+"</td>"+
        "<td>"+data[i].subdistrict+"</td>"+
        "<td>"+data[i].religion+"</td>"+
        "<td>"+data[i].maritalstatus+"</td>"+
        "<td>"+data[i].profession+"</td>"+
        "<td>"+data[i].nationality+"</td>"+
        "<td>"+data[i].division+"</td></tr>";
    }
}

function add() {
    var inputNik = document.getElementById("nik");
    var inputName = document.getElementById("name");
    var inputPlacebirth = document.getElementById("placebirth");
    var inputBirthday = document.getElementById("birthday");
    var inputGender = document.getElementById("gender");
    var inputBloodtype = document.getElementById("bloodtype");
    var inputAddress = document.getElementById("address");
    var inputRt = document.getElementById("rt");
    var inputRw = document.getElementById("rw");
    var inputUrbanvillage = document.getElementById("urbanvillage");
    var inputSubdistrict = document.getElementById("subdistrict");
    var inputReligion = document.getElementById("religion");
    var inputMaritalstatus = document.getElementById("maritalstatus");
    var inputProfession = document.getElementById("profession");
    var inputNationality = document.getElementById("nationality");
    var inputDivision = document.getElementById("division");
 
    localStorage.setItem("nik", inputNik.value);
    localStorage.setItem("name", inputName.value);
    localStorage.setItem("placebirth", inputPlacebirth.value);
    localStorage.setItem("birthday", inputBirthday.value);
    localStorage.setItem("gender", inputGender.value);
    localStorage.setItem("bloodtype", inputBloodtype.value);
    localStorage.setItem("address", inputAddress.value);
    localStorage.setItem("rt", inputRt.value);
    localStorage.setItem("rw", inputRw.value);
    localStorage.setItem("urbanvillage", inputUrbanvillage.value);
    localStorage.setItem("subdistrict", inputSubdistrict.value);
    localStorage.setItem("religion", inputReligion.value);
    localStorage.setItem("maritalstatus", inputMaritalstatus.value);
    localStorage.setItem("profession", inputProfession.value);
    localStorage.setItem("nationality", inputNationality.value);
    localStorage.setItem("division", inputDivision.value);
    
    data.push({
        nik : inputNik.value,
        name : inputName.value,
        placebirth : inputPlacebirth.value,
        birthday : inputBirthday.value,
        gender : inputGender.value,
        bloodtype : inputBloodtype.value,
        address : inputAddress.value,
        rt : inputRt.value,
        rw : inputRw.value,
        urbanvillage : inputUrbanvillage.value,
        subdistrict : inputSubdistrict.value,
        religion : inputReligion.value,
        maritalstatus : inputMaritalstatus.value,
        profession : inputProfession.value,
        nationality : inputNationality.value,
        division : inputDivision.value})

    listProfile();
    inputNik.value = "";
    inputName.value = "";
    inputPlacebirth.value = "";
    inputBirthday.value = "";
    inputGender.value = "";
    inputBloodtype.value = "";
    inputAddress.value = "";
    inputRt.value = "";
    inputRw.value = "";
    inputUrbanvillage.value = "";
    inputSubdistrict.value = "";
    inputReligion.value = "";
    inputMaritalstatus.value = "";
    inputProfession.value = "";
    inputNationality.value = "";
    inputDivision.value = "";
}

function edit(id) {
    var prompName;
    var prompAge;
    var prompEmail;
    var prompEducation;
    var prompGender;
    var prompDivision;
    prompName = prompt("Name",data[id].name);
    prompAge = prompt("Age",data[id].age);
    prompEmail = prompt("Email",data[id].email);
    prompEducation = prompt("Education",data[id].education);
    prompGender = prompt("Gender",data[id].gender);
    prompDivision = prompt("Divison",data[id].division);
    data[id].name = prompName;
    data[id].age = prompAge;
    data[id].email = prompEmail;
    data[id].education = prompEducation;
    data[id].gender = prompGender;
    data[id].division = prompDivision;
    listProfile();
}

function discard(id) {
    var r = confirm("Are you sure?");
    if (r == true) {
        data.splice(id,1)
    }
    listProfile();
}

listProfile();