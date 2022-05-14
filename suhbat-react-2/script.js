axios.get("https://54.uz/rang.php").then(function (response) {
    const Data = response.data.status;
    const Text = document.querySelector(".all");
    const tana = document.body;
    console.log(Data)
        switch (Data) {
            case "yaxshil":
                tana.style.backgroundColor = "green";
                Text.innerHTML = `Background-color is : Green`;
                Text.style.color = "white";
                return
            case "qizil":
                tana.style.backgroundColor = "red";
                Text.innerHTML = `Background-color is : Red`;
                Text.style.color = "white";
                return;
            case "sariq":
                tana.style.backgroundColor = "yellow";
                Text.innerHTML = `Background-color is : Yellow`;
                Text.style.color = "black";
                return;
            case "qora":
                tana.style.backgroundColor = "black";
                Text.innerHTML = `Background-color is : Black`;
                Text.style.color = "white";
                return;
            case "ko'k":
                tana.style.backgroundColor = "blue";
                Text.innerHTML = `Background-color is : blue`;
                Text.style.color = "white";
                return;
            default:
                Text.style.color = "black";
                Text.innerHTML = `Background-color is : white`;
                
                return;
        }
})