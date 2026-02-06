const footer = document.querySelector("#footer");

window.addEventListener("load", () => {
  footer.innerHTML = `
    <div class="flex items-center justify-between border-t font-sourcesans max-w-5xl mx-auto px-2 sm:px-0 sm:py-4" style="border-color: #5c2222;">
    <p class="text-xs sm:text-sm">Project supported by <a href="https://www.bezosearthfund.org/" class="text-[#1a335c] hover:underline">Bezos Earth Fund</a> </p>
    <p class="text-xs sm:text-sm"><a href="/pages/code-of-conduct.html" class="text-[#1a335c] hover:underline">Code of Conduct</a></p>
    <p class="text-xs sm:text-sm">&copy 2026 CDR Forecasting Stack</p>
    </div>
    `;
});
