import React from 'react';
import { Head, Link } from '@inertiajs/inertia-react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Cart({ auth, cart }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Shopping Cart</h2>}
        >
            <Head title="Shopping Cart" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            {cart.items && cart.items.length > 0 ? (
                                <div>
                                    <div className="divide-y divide-gray-200">
                                        {cart.items.map((item) => (
                                            <div key={item.id} className="py-4 flex flex-col md:flex-row gap-4">
                                                <div className="md:w-1/6">
                                                    <img src={item.game.image_url} alt={item.game.title} className="w-full rounded" />
                                                </div>
                                                <div className="md:w-3/6">
                                                    <h3 className="font-bold text-lg">{item.game.title}</h3>
                                                    <p className="text-gray-600">{item.game.developer}</p>
                                                </div>
                                                <div className="md:w-1/6 flex items-center">
                                                    <input 
                                                        type="number" 
                                                        min="1" 
                                                        defaultValue={item.quantity}
                                                        className="w-16 border rounded px-2 py-1"
                                                    />
                                                </div>
                                                <div className="md:w-1/6 flex items-center justify-end">
                                                    <p className="font-bold">${(item.price_at_purchase * item.quantity).toFixed(2)}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 border-t pt-6">
                                        <div className="flex justify-end">
                                            <div className="w-full md:w-1/3">
                                                <div className="flex justify-between mb-2">
                                                    <span>Subtotal</span>
                                                    <span>${cart.subtotal.toFixed(2)}</span>
                                                </div>
                                                <div className="flex justify-between mb-2">
                                                    <span>Tax</span>
                                                    <span>${cart.tax.toFixed(2)}</span>
                                                </div>
                                                <div className="flex justify-between font-bold text-lg">
                                                    <span>Total</span>
                                                    <span>${cart.total.toFixed(2)}</span>
                                                </div>
                                                <button className="mt-4 w-full bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-lg">
                                                    Proceed to Checkout
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <h3 className="text-xl font-semibold mb-4">Your cart is empty</h3>
                                    <Link 
                                        href={route('games.index')} 
                                        className="text-blue-500 hover:text-blue-700"
                                    >
                                        Continue Shopping
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}