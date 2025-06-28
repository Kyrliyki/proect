import React from 'react';
import { Head, Link } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function GameShow({ auth, game }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Game Details</h2>}
        >
            <Head title={game.title} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="md:w-1/3">
                                    <img src={game.image_url} alt={game.title} className="w-full rounded-lg" />
                                </div>
                                <div className="md:w-2/3">
                                    <h1 className="text-3xl font-bold mb-4">{game.title}</h1>
                                    <p className="text-gray-600 mb-4">{game.description}</p>
                                    
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div>
                                            <h3 className="font-semibold">Developer</h3>
                                            <p>{game.developer}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Publisher</h3>
                                            <p>{game.publisher}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Release Date</h3>
                                            <p>{new Date(game.release_date).toLocaleDateString()}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Platform</h3>
                                            <p>{game.platform}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Genre</h3>
                                            <p>{game.genre}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Price</h3>
                                            <p className="text-2xl font-bold">${game.price.toFixed(2)}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-6 rounded-lg text-lg">
                                            Buy Now
                                        </button>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg text-lg">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}