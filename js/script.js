import {
    movies,
    sayHi
} from './db.js'

let movies_ul = document.querySelector('.promo__interactive-list');
let genres_ul = document.querySelector('.promo__menu-list ul');
let searchInp = document.querySelector('#search');
let promo_bg = document.querySelector('.promo__bg');

let genres = ['All', ...new Set(movies.map(item => item.Genre))]

searchInp.onkeyup = () => {
    let val = searchInp.value

    let filtered = movies.filter(item => {
        let title = item.Title.toLowerCase().trim()

        if (title.includes(val)) {
            return item
        }
    })

    reload(filtered, movies_ul)
}


function reload(arr, place) {
    place.innerHTML = ""

    setMovie(arr[Math.floor(Math.random() * arr.length)])

    for (let item of arr) {
    
        let li = document.createElement('li')
        let del = document.createElement('div')
        let open_modal = document.querySelector('.open_modal')
        let back = document.querySelector('.back')

        del.classList.add('delete')
        li.classList.add('promo__interactive-item')
        li.innerHTML = item.Title
        li.id = item.ID
        li.append(del)
        place.append(li)


        let img = document.querySelector('.img_bg')
        let big = document.querySelector('.big')
        let hoh = document.querySelector('.hoh')
        let oho = document.querySelector('.oho')
        let one = document.querySelector('#one')
        let two = document.querySelector('#two')
        let title = document.querySelector('#title')
        let year = document.querySelector('#year')
        let rated = document.querySelector('#rated')
        let released = document.querySelector('#released')
        let runtime = document.querySelector('#runtime')
        let genre = document.querySelector('#genre')
        let director = document.querySelector('#director')
        let writer = document.querySelector('#writer')
        let actors = document.querySelector('#actors')
        let plot = document.querySelector('#plot')
        let language = document.querySelector('#language')
        let country = document.querySelector('#country')
        let award = document.querySelector('#award')
        li.onclick = () => {
            open_modal.style.display = 'block'
            open_modal.innerHTML = item.Title
            img.style.backgroundImage = `url(${item.Poster})`

            open_modal.append(big, back,)
            big.append(oho, hoh)
            oho.append(img, one, two,)
            hoh.append(title, year, rated, released, runtime, genre, director, writer, actors, plot, language, country, award)
            one.innerHTML = `Source: ${item.Ratings[0].Source}`
            two.innerHTML = `Value: ${item.Ratings[0].Value}`
            title.innerHTML = `Title: ${item.Title}`
            year.innerHTML = `Year: ${item.Year}`
            rated.innerHTML = `Rated: ${item.Rated}`
            released.innerHTML = `Released: ${item.Released}`
            runtime.innerHTML = `Runtime: ${item.Runtime}`
            genre.innerHTML = `Genre: ${item.Genre}`
            director.innerHTML = `Director: ${item.Director}`
            writer.innerHTML = `Writer: ${item.Writer}`
            actors.innerHTML = `Actors: ${item.Actors}`
            plot.innerHTML = `Plot: ${item.Plot}`
            language.innerHTML = `Language: ${item.Language}`
            country.innerHTML = `Country: ${item.Country}`
            award.innerHTML = `Award: ${item.Awards}`
        }
        back.onclick = () => {
            open_modal.style.display = 'none'
        }
    }

}

function reload_genres(arr, place) {
    place.innerHTML = ""

    for (let item of arr) {
        let li = document.createElement('li')
        let a = document.createElement('a')

        if (item === 'All') {
            a.classList.add('promo__menu-item_active')
        }

        a.classList.add('promo__menu-item')
        a.innerHTML = item
        a.href = "#"

        li.append(a)
        place.append(li)
    }


    let lis = place.querySelectorAll('li')

    lis.forEach(li => {
        li.onclick = () => {
            lis.forEach(el => el.querySelector('a').classList.remove('promo__menu-item_active'))
            let a = li.querySelector('a')
            a.classList.add('promo__menu-item_active')
        }
    })

}

function setMovie({ Poster }) {
    promo_bg.style.backgroundImage = `url(${Poster})`
    // console.log(data);
}


reload(movies, movies_ul)
reload_genres(genres, genres_ul)


