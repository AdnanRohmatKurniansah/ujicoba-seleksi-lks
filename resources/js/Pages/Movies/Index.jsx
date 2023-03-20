import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link,  } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard(props) {
    const { movies } = usePage().props
  
    function destroy(e) {
        if (confirm("Are you sure you want to delete this?")) {
            Inertia.delete(route("movies.destroy", e.currentTarget.id));
        }
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Manage Movies</h2>}
        >
            <Head title="Movies Manage" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
  
                    <div className="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    href={ route("movies.create") }
                                >
                                    Create Movies
                                </Link>
                            </div>
  
                            <table className="table-fixed w-full">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-4 py-2 w-20">No.</th>
                                        <th className="px-4 py-2">Title</th>
                                        <th className="px-4 py-2">Genre</th>
                                        <th className="px-4 py-2">Rating</th>
                                        <th className="px-4 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {movies.map(({ id, title, genre, rating }) => (
                                        <tr>
                                            <td className="border px-4 py-2">{ id }</td>
                                            <td className="border px-4 py-2">{ title }</td>
                                            <td className="border px-4 py-2">{ genre }</td>
                                            <td className="border px-4 py-2">{ rating }</td>
                                            <td className="border px-4 py-2">
                                                <Link
                                                    tabIndex="1"
                                                    className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                                    href={route("movies.edit", id)}
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={destroy}
                                                    id={id}
                                                    tabIndex="-1"
                                                    type="button"
                                                    className="mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
  
                                    {movies.length === 0 && (
                                        <tr>
                                            <td
                                                className="px-6 py-4 border-t"
                                                colSpan="4"
                                            >
                                                No contacts found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                    </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
