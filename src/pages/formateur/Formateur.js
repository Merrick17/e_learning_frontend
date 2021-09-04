import React, { useEffect } from "react";
import { Link, Route, Switch, useRouteMatch, useLocation } from "react-router-dom";

const Formateur = () => {
    const { path, url } = useRouteMatch();
    const location = useLocation();
    useEffect(() => {
        console.log("URL", location.pathname);
    }, [])
    return (
        <div className="flex flex-no-wrap min-h-screen">
            {/* Sidebar starts */}
            {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
            <div className="w-64 absolute sm:relative bg-blue-500 shadow md:h-full flex-col justify-between hidden sm:flex min-h-screen">

                <div className="relative bg-white dark:bg-gray-800">
                    <div className="flex flex-col sm:flex-row sm:justify-around">
                        <div className="w-72 h-screen">
                            <nav className="mt-10 px-6 ">
                                <Link className={`"hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg ${location.pathname == '/admin' ? 'bg-gray-100' : ''}`} to={`${url}`}>
                                    <span className="mx-4 text-lg font-normal">
                                        Utilisateurs
                                    </span>
                                    <span className="flex-grow text-right">
                                    </span>
                                </Link>
                                <Link className={`"hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg ${location.pathname == '/admin/formation' ? 'bg-gray-100' : ''}`} to={`${url}/formation`}>
                                    <span className="mx-4 text-lg font-normal">
                                        Formations
                                    </span>
                                    <span className="flex-grow text-right">
                                    </span>
                                </Link>
                                <Link to="/admin/reclamation" className={`"hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg ${location.pathname == '/admin/reclamation' ? 'bg-gray-100' : ''}`} >
                                    <span className="mx-4 text-lg font-normal">
                                        Réclamations
                                    </span>
                                    <span className="flex-grow text-right">
                                    </span>
                                </Link>
                                <Link  to="/admin/categories" className={`"hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg ${location.pathname == '/admin/categories' ? 'bg-gray-100' : ''}`}>
                                    <span className="mx-4 text-lg font-normal">
                                        Categories
                                    </span>
                                    <span className="flex-grow text-right">
                                    </span>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>


            </div>
            {/* Sidebar ends */}
            {/* Remove class [ h-64 ] when adding a card block */}
            <div className="container mx-auto py-10 h-screen md:w-4/5 w-screen px-6">
                {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
                    <Switch>
                        {/* <Route path="/admin/reclamation" component={Reclamation}/>
                        <Route path="/admin/categories" component={Categories}/>
                        <Route path="/admin/formation" component={Formation} />
                        <Route path="/admin" component={User} /> */}
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default Formateur;
