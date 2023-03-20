import { Link } from "@inertiajs/react"

const isMovies = (movies) => {
    return movies.map((data, i) => {
        return <div className='movieList w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700' id='movieList'>
        <Link href="">
            <img className="p-1 rounded-t-lg" src="https://cdn1-production-images-kly.akamaized.net/IXe3tDnxK34wGJtGFBxavvDGwto=/1200x1200/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2752156/original/097349000_1552638820-avengers-endgame-official-poster.jpg" alt="product image" />
        </Link>
        <div className="px-5 pb-5">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
            </a>
            <div className="flex items-center justify-between">
            <div className="font-semibold badge badge-outline bg-blue-400">{data.genre}</div> 
                <div className="font-semibold badge badge-outline bg-yellow-400">{data.rating}</div>
            </div>
        </div>
    </div>

 
    })
}

const noMovies = () => {
    return (
        <div>Saat ini belum ada film</div>
    )
}

const MovieList = ({ movies }) => {// ngambil data props di homepage
    return !movies ? noMovies() : isMovies(movies)
}
export default MovieList