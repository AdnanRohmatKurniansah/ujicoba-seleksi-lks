import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/HomePage/Navbar';
import MovieList from '@/Components/HomePage/MovieList';
import Indicator from '@/Components/HomePage/Indicator';
import Footer from '@/Components/HomePage/footer';
import Paginator from '@/Components/HomePage/Paginator';

export default function HomePage(props) {// props utk mengambil data
    //console.log('props: ', props)
    
      
    return (
        <div className='bg-white'>
            <Head title= {props.title}/>
            <Navbar user= {props.auth.user}/>
            <Indicator />
            <div className="content pt-7 bg-[url('/img/bg-1.png')] bg-no-repeat bg-cover">
            <h1 className='text-center mb-7 font-semibold text-4xl text-white'>Most Popular</h1>
            <div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center
            gap-4 p-4'>
            <MovieList movies={props.movies.data}/>
            </div>
            <div className="flex justify-center p-7 items-center text-white">
                <Paginator meta={props.movies.meta}/>
            </div>
            </div>
            <Footer />
        </div>
        )
}