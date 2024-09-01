




async function pokemon(){
    
    try{
        const input = document.getElementById('input').value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

        if(!response.ok){
            throw new Error("coulnst find")
        }

        const data = await response.json();
        const image = document.getElementById('img')
        const sprite = data.sprites.front_default;

        image.src = sprite;
       image.style.display="block";
    }
    catch(error){
        console.error(error);
    }
}