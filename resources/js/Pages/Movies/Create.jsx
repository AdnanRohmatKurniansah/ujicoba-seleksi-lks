import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Dashboard(props) {
    const { data, setData, errors, post } = useForm({
        title: "",
        genre: "",
        duration: "",
        synopsis: "",
        poster: "", 
        trailer: "",
        rating: "",
    });
  
    function handleSubmit(e) {
        e.preventDefault();
        post(route("movies.store"));
    }
        
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Movies</h2>}
        >
            <Head title="Movies" />

            <div className="py-12">
                <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
  
                    <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    href={ route("movies.index") }
                                >
                                    Back
                                </Link>
                            </div>
  
                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="flex flex-col">
                                    <div className="mb-4">
                                        <label className="">Title</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Title"
                                            name="title"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData("title", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.title}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Genre</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Genre"
                                            name="genre"
                                            value={data.genre}
                                            onChange={(e) =>
                                                setData("genre", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.genre}
                                        </span>
                                    </div>
{/* <div className="form-control">
    <label htmlFor="genre">Genre</label>
  <div className="input-group">
    <select className="select select-bordered w-full" id='genre'>
      <option disabled selected>Pick Genre</option>
      <option value={data.genre} name="genre" onChange={(e) => setData("genre", e.target.value)}>Action</option>
      <option value={data.genre} name="genre" onChange={(e) => setData("genre", e.target.value)}>Comedy</option>
      <option value={data.genre} name="genre" onChange={(e) => setData("genre", e.target.value)}>Horror</option>
    </select>
  </div>
</div> */}
                                    <div className="mb-4">
                                        <label className="">Duration</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Duration"
                                            name="duration"
                                            value={data.duration}
                                            onChange={(e) =>
                                                setData("duration", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.duration}
                                        </span>
                                    </div>
                                   
                                    <div className="mb-0">
                                        <label className="">Synopsis</label>
                                        <textarea
                                            type="text"
                                            className="w-full rounded"
                                            label="synopsis"
                                            name="synopsis"
                                            errors={errors.synopsis}
                                            value={data.synopsis}
                                            onChange={(e) =>
                                                setData("synopsis", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.synopsis}
                                        </span>
                                    </div>

                                    <div className="mb-4">
                                        <label className="">Poster</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Poster"
                                            name="poster"
                                            value={data.poster}
                                            onChange={(e) =>
                                                setData("poster", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.poster}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Trailer</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2"
                                            label="Trailer"
                                            name="trailer"
                                            value={data.trailer}
                                            onChange={(e) =>
                                                setData("trailer", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.trailer}
                                        </span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="">Rating</label>
                                        <input
                                            type="number"
                                            className="w-full px-4 py-2"
                                            label="Rating"
                                            name="rating"
                                            value={data.rating}
                                            onChange={(e) =>
                                                setData("rating", e.target.value)
                                            }
                                        />
                                        <span className="text-red-600">
                                            {errors.rating}
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Save
                                    </button>
                                </div>
                            </form>
                    </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
