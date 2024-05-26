<script>
    function mudarTexto() {
        document.getElementById("titulo").textContent = "Obrigado por ser minha vítima";
        // Remove o botão
        document.getElementById("botao").parentNode.removeChild(document.getElementById("botao"));
        // Exibe a imagem
        document.querySelector(".imagem").style.display = "block";
    }
</script>
