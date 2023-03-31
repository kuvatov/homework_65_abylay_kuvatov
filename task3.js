function main() {
    let answer = prompt('У квадратного стола отпилили один угол. Сколько теперь углов у него стало?')
    switch (answer.toLowerCase()) {
        case '5':
        case 'пять':
            alert('Ответ верный')
            break;
        default:
            alert('Ответ неверный') 
    }
}

main()