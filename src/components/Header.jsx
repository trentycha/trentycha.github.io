
const Header = () => {

    return (

        <div className="fixed top-0 left-0 right-0 z-10 bg-orange-200 bg-opacity-50 backdrop-blur-md flex justify-between gap-4 ml-24 mr-24 mt-2 px-8 rounded-lg shadow">
            <div className="w-1/6 p-6">
                <span className="text-white">Portfolio Charlène</span>
            </div>
            <div className="w-1/2 flex p-6 gap-16 justify-end">
                <button className="text-white">Projets</button>
                <button className="text-white">Parcours</button>
                <button className="text-white">Contact</button>
            </div>
        </div>

    )

}

export default Header;