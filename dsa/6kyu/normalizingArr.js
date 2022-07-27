function normIndex(array, i){
    return array[((i < 0 ? array.length : 0) + i % array.length) % array.length]
    }

    