
// Função para gerar o PDF do Curriculum Vitae
function generatePDF() {
    // Elemento que queremos converter para PDF
    const element = document.getElementById('cvDocument');
    
    // Configurações do PDF
    const opt = {
        margin:       [0.5, 0.5],
        filename:     'CV - Isaque Nicéas.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    // Gerar e baixar o PDF
    html2pdf(element, opt);
}

        // Event listeners para os botões de download
        document.getElementById('downloadBtn').addEventListener('click', generatePDF);
        document.getElementById('downloadBtn2').addEventListener('click', generatePDF);

        // Smooth scroll para links de navegação
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });