let getSpirit = () => {
    let cocktailName = document.getElementById('sptInput').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
   .then(res => res.json())
   .then(cocktail =>{
       console.log(cocktail)
        let cocktailPhoto = cocktail.drinks[0].strDrinkThumb
        let baseSpirit = cocktail.drinks[0].strIngredient1
        
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${baseSpirit}`)
        .then(res=>res.json())
        .then(spirit => {
            console.log(spirit)
            let spiritInfo = spirit.ingredients[0].strDescription

            document.getElementById('sptImg').src = cocktailPhoto
            document.getElementById('sptBase').innerText = `${cocktailName}'s base spirit is ${baseSpirit}!`
            document.getElementById('sptAbt').innerHTML = `About ${baseSpirit}:`
            document.getElementById('sptInfo').innerHTML = `${spiritInfo}`
            document.getElementById('sptImg').classList.toggle('hidden')
        })
        .catch(err => console.log(err))
    })
   .catch(err => console.log(err))
}

document.getElementById('sptButton').addEventListener('click', getSpirit)
