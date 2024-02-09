const fs = require("fs");

// Ajusta a função para aceitar um parâmetro opcional
function importMovement(data = []) {
    // Obtém a data atual em formato ISO sem caracteres especiais
    const currentDate = new Date().toISOString().replace(/[-:TZ]/g, "");

    // Gera o nome do arquivo de exportação com a data atual
    const exportFileName = `exportacao_${currentDate}.txt`;

    // Define o caminho completo para o arquivo de exportação dentro do diretório 'src/exports'
    const exportFilePath = `src/exports/${exportFileName}`;

    // Define o diretório de exportação
    const exportDirectory = "src/exports";

    // Verifica se o diretório existe, cria de forma recursiva se não existir
    if (!fs.existsSync(exportDirectory)) {
        fs.mkdirSync(exportDirectory, { recursive: true });
    }

    // Cria um fluxo de escrita para o arquivo de exportação
    const fileStream = fs.createWriteStream(exportFilePath);

    // Função para formatar um valor numérico com duas casas decimais
    function formatValor(value) {
        return Number(value).toFixed(2);
    }

    // Itera sobre as linhas do array de dados (agora passado como parâmetro ou usando a variável global)
    for (const row of data) {
        // Extrai as propriedades CHAPA, EVENTO e VALOR de cada linha
        const { CHAPA, EVENTO, VALOR } = row;

        // Cria uma linha formatada para ser escrita no arquivo
        const formattedLine = `${CHAPA}${EVENTO.padStart(21)}${formatValor(VALOR).padStart(36)}${formatValor(VALOR).padStart(15)} N\n`;

        // Escreve a linha formatada no arquivo
        fileStream.write(formattedLine);
    }

    // Finaliza o fluxo de escrita no arquivo
    fileStream.end();

    console.log("A importação do movimento foi concluída com sucesso!");
}

export default importMovement;

/*
// Exemplo de dados para serem usados na função importMovement
const dataObject = [
    { CHAPA: "001", EVENTO: "Evento1", VALOR: 100.50 },
    { CHAPA: "002", EVENTO: "Evento2", VALOR: 150.75 },
    // Adicione mais linhas conforme necessário
  ];
  
  // Chama a função importMovement com o objeto como argumento
  importMovement(dataObject);
*/