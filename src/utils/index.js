export function currencyFormat(num) {
    return 'R$ ' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export function dateNow(){
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const min = date.getMinutes();

    return `${day}/${month}/${year} às ${hour}h${min}`
}

export function errorMapper(error) {
    switch (error) {
        case 'required':
            return "Campo obrigatório";
        case 'min':
            return "Valor inválido";
        case 'max':
            return "Valor acima do Limite";
        default:
            return null;
    }
}

export const mockData = {
    total: 50.00,
    cashIn: 2050.00,
    cashOut: 2000.00,
    history: [{
        id: 0,
        desc: 'Curso de NextJS',
        value: 1000.00,
        category: 'Educação',
        date: '12/02/2022 às 13h24',
        type: 'out'
    }, {
        id: 1,
        desc: 'Salário',
        value: 2050.00,
        category: 'Receita Fixa',
        date: '12/02/2022 às 13h24',
        type: 'in'
    }, {
        id: 2,
        desc: 'Curso AB',
        value: 1000.00,
        category: 'Educação',
        date: '12/02/2022 às 13h24',
        type: 'out'
    }]
};