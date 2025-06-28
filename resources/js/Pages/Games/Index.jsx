import React from 'react';
import { Head, Link } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function GamesIndex({ auth, games }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Games</h2>}
        >
            <Head title="Games" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {games.map((game) => (
                                    <div key={game.id} className="border rounded-lg overflow-hidden shadow-md">
                                        <img src={game.image_url} alt={game.title} className="w-full h-48 object-cover" />
                                        <div className="p-4">
                                            <h3 className="font-bold text-lg mb-2">{game.title}</h3>
                                            <p className="text-gray-600 mb-2">{game.developer}</p>
                                            <p className="text-gray-800 font-bold">${game.price.toFixed(2)}</p>
                                            <div className="mt-4 flex justify-between">
                                                <Link 
                                                    href={route('games.show', game.id)} 
                                                    className="text-blue-500 hover:text-blue-700"
                                                >
                                                    View Details
                                                </Link>
                                                <button className="bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}