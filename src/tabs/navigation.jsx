function Navigation() {
    return (
        <ul class="nav justify-content-center navbar">
            <li class="navbar-brand">
                <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="navbar-brand">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="navbar-brand">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="navbar-brand">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
        </ul>
    )
}

export default Navigation;