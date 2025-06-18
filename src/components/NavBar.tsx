import Button from "./Button";

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg py-4 px-0">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-4">
                    {/* Wallet Icon */}
                    <svg width="36" height="36" viewBox="0 0 72 72" fill="none">
                        <rect x="4" y="12" width="64" height="48" rx="16" fill="#38B48E" className="drop-shadow-lg"/>
                        <rect x="12" y="4" width="48" height="32" rx="10" fill="#2D8C6F"/>
                        <circle cx="36" cy="36" r="18" fill="#256D5A"/>
                        <path d="M36 18a18 18 0 0 1 18 18h-18V18z" fill="#6FE3FF"/>
                        <circle cx="54" cy="54" r="12" fill="#38B48E"/>
                        <path d="M50 54l4 4 8-8" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-white text-2xl font-extrabold tracking-wide bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text drop-shadow-lg">
                        MyWallet
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        text="Iniciar Sesión"
                        to="/auth/login"
                        className="px-4 py-2 text-sm font-semibold bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-md transition-all duration-200 border border-gray-700 hover:border-teal-400"
                    />
                    <Button
                        text="Registrarse"
                        to="/auth/register"
                        className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-green-500 to-teal-400 hover:from-teal-400 hover:to-green-500 text-white rounded-lg shadow-md transition-all duration-200 border border-teal-400"
                    />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;