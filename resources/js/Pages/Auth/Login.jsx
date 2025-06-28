import React from 'react';
import { Head, Link } from '@inertiajs/inertia-react';

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <Head title="Вход" />
            
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Вход в аккаунт
                    </h2>
                </div>
                
                <form className="mt-8 space-y-6" method="POST" action="/login">
                    <input type="hidden" name="_token" value={window.csrf_token} />
                    
                    <div className="rounded-md shadow-sm space-y-4">
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="password" className="sr-only">Пароль</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Пароль"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Войти
                        </button>
                    </div>
                    
                    <div className="text-center">
                        <Link 
                            href="/register" 
                            className="text-indigo-600 hover:text-indigo-500 text-sm"
                        >
                            Нет аккаунта? Зарегистрируйтесь
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}