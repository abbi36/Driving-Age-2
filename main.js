import input from 'input';

async function main() {
    const drivingAge =  18;
    const myAge = 24;
    const hasLicense = await input.confirm('Do you have your license?')
    
    if (hasLicense&& myAge>=drivingAge) {
        console.log('You can drive.');
    }
    else console.log('You can not drive.');
}

main();