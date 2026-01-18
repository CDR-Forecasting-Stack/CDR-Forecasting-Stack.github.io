const footer = document.querySelector("#footer");

window.addEventListener("load", () => {
  footer.innerHTML = `
    <div class="flex items-center justify-between py-4 border-t font-sourcesans" style="border-color: #5c2222;">
    <p>This project is supported by <a href="https://www.bezosearthfund.org/" class="text-[#1a335c] hover:underline">Bezos Earth Fund</a> </p>
    <p><a href="/pages/code-of-conduct.html" class="text-[#1a335c] hover:underline">Code of Conduct</a></p>
    <p>&copy 2026 CDR Forecasting Stack</p>
    </div>
    `;
});
