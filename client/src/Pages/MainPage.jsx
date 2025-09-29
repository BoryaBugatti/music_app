import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <nav className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                                </svg>
                            </div>
                            <span className="text-white text-xl font-bold">MusicFlow</span>
                        </Link>
                        <div className="flex items-center space-x-6">
                            <Link to="/" className="text-white hover:text-gray-200 px-3 py-2 rounded-md font-medium transition duration-200">Главная</Link>
                            <Link
                                to="/playlists"
                                className="text-white hover:text-gray-200 px-3 py-2 rounded-md font-medium transition duration-200"
                            >
                                Плейлисты
                            </Link>
                            <Link
                                to="/artists"
                                className="text-white hover:text-gray-200 px-3 py-2 rounded-md font-medium transition duration-200"
                            >
                                Артисты
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="search"
                                placeholder="Поиск музыки..."
                                className="w-64 pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition duration-200"
                            />
                        </div>
                        <Link to="" className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full font-medium transition duration-200" id = "lk" onClick={ClickOnUserLk}>
                            Профиль
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

function ClickOnUserLk(){
    const user_name = localStorage.getItem('user_email');
    if (!user_name){
        alert('Вы не авторизованы');
        window.location.href='/auth';
    }
}

export default MainPage;