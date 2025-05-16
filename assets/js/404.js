// Verifica si la página realmente existe
fetch(window.location.pathname, { method: "HEAD" })
    .then(response => {
        if (!response.ok) {
            redirectTo404();
        }
    })
    .catch(() => {
        redirectTo404();
    });

function redirectTo404() {
    window.location.href = "/404"; // Redirige a la página 404
}
