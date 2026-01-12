const footer = document.querySelector("#footer");

window.addEventListener("load", function () {
  footer.innerHTML = `
    <div class="flex items-center justify-between py-4 border-t border-gray-200">
    <p>This project is supported by <a href="https://www.bezosearthfund.org/" class="underline">Bezos Earth Fund</a> </p>
    <p><a href="/pages/code-of-conduct.html" class="underline">Code of Conduct</a></p>
    <p>&copy 2026 CDR Forecasting Stack</p>
    </div>
    `;
});
