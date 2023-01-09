

export function Header () {
    return (
        <header>
            <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu"></input>
            <label for="openSidebarMenu" class="sidebarIconToggle">
                <div class="spinner diagonal part-1"></div>
                <div class="spinner horizontal"></div>
                <div class="spinner diagonal part-2"></div>
            </label>
            <h1>NC News</h1>
        </header>
    )
}