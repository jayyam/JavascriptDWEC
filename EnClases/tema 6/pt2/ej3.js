try {
        let map = new Map();
        map.set('hola', 'cosa');
        let keys = map.keys();
        keys.push('algo');
        console.log(keys);
    }
catch (e)
    {
        console.log('a -> ' + e);
    }
console.log('probando');
