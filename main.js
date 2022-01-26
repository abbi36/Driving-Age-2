import input from 'input';

async function main() {
    const drivingAge =  18;
    const myAge = 15;
    const hasLicense = await input.confirm('Do you have your license?')
    
    if (myAge >= drivingAge && hasLicense) {
        
    }
    else {
        console.log('You can not drive.')
    if(myAge<drivingAge) {
        console.log(`Wait ${drivingAge - myAge} years.`)
} 
else {
        console.log('Get a license')
}
}
}

main();