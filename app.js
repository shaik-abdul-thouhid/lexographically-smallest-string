const prompt = require('prompt-sync')({ sigint: true });

const 
    s1 = prompt("S1: ").split(''),
    s2 = prompt("S2: ").split(''),
    s3 = prompt("S3: ").split('');

function returnUnique() {

    let un = [], arr = [];

    for (let i = 0; i < s1.length; i++) {
        if (arr.length === 0) {
            arr.push([s1[i], s2[i]]);
        }
        
        else if (arr.length > 0) {
            for (let a = 0; a < arr.length; a++) {
                if ( arr[a].find(v => v === s1[i] || v === s2[i]) ) {
                    arr[a].push(s1[i]);
                    arr[a].push(s2[i]);
                    break;
                }
                if (a === arr.length - 1) {
                    arr.push([ s1[i], s2[i] ]);
                }
            }
        }
    }
    for (let a of arr) {
        un.push([...new Set(a)].sort());
    }
    return un;
}

function returnSmallestString(str, unique) {
    let s = "";
    str.forEach(a => {

        for (let u = 0; u < unique.length; u++) {
            if (unique[u].find(b => b === a)) {
                s += unique[u][0];
                break;
            }

            if (u === unique.length - 1) s += a;
        }

    });
    return s;
}

const unique = returnUnique();
const smallestString = returnSmallestString(s3, unique);

console.log(smallestString);