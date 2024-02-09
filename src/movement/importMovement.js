const fs = require("fs");

function importMovement(data = []) {
    const currentDate = new Date().toISOString().replace(/[-:TZ]/g, "");
    const exportFileName = `exportacao_${currentDate}.txt`;
    const exportFilePath = `src/exports/${exportFileName}`;
    const exportDirectory = "src/exports";

    if (!fs.existsSync(exportDirectory)) {
        fs.mkdirSync(exportDirectory, { recursive: true });
    }

    const fileStream = fs.createWriteStream(exportFilePath);

    function formatValor(value) {
        return Number(value).toFixed(2);
    }

    for (const row of data) {
        const { CHAPA, EVENTO, VALOR } = row;
        const formattedLine = `${CHAPA}${EVENTO.padStart(21)}${formatValor(VALOR).padStart(36)}${formatValor(VALOR).padStart(15)} N\n`;
        fileStream.write(formattedLine);
    }

    fileStream.end();

    console.log("A importação do movimento foi concluída com sucesso!");
}

module.exports = importMovement;
