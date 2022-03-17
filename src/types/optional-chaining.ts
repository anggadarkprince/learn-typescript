const obj = {
    name: 'Angga',
    address: {
        city: 'Surabaya',
        country: 'Indonesia',
        region: {
            state: 'East Java',
            type: 'Capital'
        }
    },
    job: {
        title: 'CEO',
        description: 'My own company'
    }
}

console.log(obj.address.region.state)
console.log(obj && obj.job && obj.job.title)
console.log(obj?.job?.title)