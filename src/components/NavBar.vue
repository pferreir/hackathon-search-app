<template>
    <nav class="navbar is-transparent">
    <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </a>
    </div>
    <div class="navbar-end">
        <div class="navbar-item">
            <div class="field is-grouped">
            <p class="control has-icons-left">
                <input class="input" type="text" placeholder="Search">
                <span class="icon is-small is-left">
                    <i class="fas fa-search"></i>
                </span>
            </p>
            </div>
        </div>
    </div>
    </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
