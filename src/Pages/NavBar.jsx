const NavBar = () => {
    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="px-5">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <a onClick={() => handleScrollToSection("about")} className="font-bold uppercase text-white">About</a>
                            </li>
                            <li>
                                <a onClick={() => handleScrollToSection("skills")} className="font-bold uppercase text-white">Skills</a>
                            </li>
                            <li>
                                <a onClick={() => handleScrollToSection("projects")} className="font-bold uppercase text-white">Projects</a>
                            </li>
                            <li>
                                <a onClick={() => handleScrollToSection("contact")} className="font-bold uppercase text-white">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-white lg:text-xl sm:text-lg">Shuva Karmakar</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a onClick={() => handleScrollToSection("about")} className="font-bold uppercase text-white">About</a>
                        </li>
                        <li>
                            <a onClick={() => handleScrollToSection("skills")} className="font-bold uppercase text-white">Skills</a>
                        </li>
                        <li>
                            <a onClick={() => handleScrollToSection("projects")} className="font-bold uppercase text-white">Projects</a>
                        </li>
                        <li>
                            <a onClick={() => handleScrollToSection("contact")} className="font-bold uppercase text-white">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-outline btn-success" onClick={() => handleScrollToSection("contact")}>Hire Me</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
