let lista = [[, "SUBJECT", , , , , , , , , , , ,], ["id", "COMANDO PRINCIPAL", "SUBCOMANDO PRINCIPAL", "SUBCOMANDO 1", "SUBCOMANDO 2", "SUBCOMANDO 3", "SUBCOMANDO 4", "SUBCOMANDO 5", "ATRIBUTO1", "VALOR1", "ATRIBUTO2", "VALOR2", "ATRIBUTO3", "VALOR3"], ["1.0", "INDICADOR", "UF", "DÍA", "CORREO", , , , "ARCHIVO", "EXCEL", , , ,], ["2.0", "INDICADOR", "UTM", "MES", "EXCEL", , , , "ARCHIVO", "WORD", , , ,], ["3.0", "INDICADOR", "IPC", "ANUAL", "TEXTO", , , , "ARCHIVO", "TEXTO", , , ,], ["4.0", "LIR", "107.0", , , , , , , , , , ,], ["5.0", "LIR", "GLOBAL", , , , , , , , , , ,], ["6.0", "RENTA", "2022.0", "RESULTADOS", "GERENTE", "MALEGRIA@HYL.CL", "EMPRESAS", "COMERCIAL", , , , , ,], ["7.0", "RENTA", "2022.0", "IMPORT", "DJ1891", "CSV", , , , , , , ,], ["8.0", "LIR107", , , , , , , , , , , ,]]

let dictSheet = {
    comando: [],
    subComando: [],
    subComando1: [],
    subComando2: [],
    subComando3: [],
    subComando4: [],
    subComando5: [],
    atributo1: [],
    atributo2: [],
    atributo3: [],
    valor1: [],
    valor2: [],
    valor3: []
}
lista.reduce(function (acc, item, i) {
    if (i > 1) {
        dictSheet.comando.push(item[1]);
        dictSheet.subComando.push(item[2]);
        dictSheet.subComando1.push(item[3]);
        dictSheet.subComando2.push(item[4]);
        dictSheet.subComando3.push(item[5]);
        dictSheet.subComando4.push(item[6]);
        dictSheet.subComando5.push(item[7]);
        dictSheet.atributo1.push(item[8]);
        dictSheet.atributo2.push(item[9]);
        dictSheet.atributo3.push(item[10]);
        dictSheet.valor1.push(item[11]);
        dictSheet.valor2.push(item[12]);
        dictSheet.valor3.push(item[13]);
    }
}, {})
console.log(dictSheet)