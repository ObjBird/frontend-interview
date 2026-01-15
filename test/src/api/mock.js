const type Tab = 'user' | 'order'
const userData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '1234567890',
    address: '123 Main St, Anytown, USA'
  },
]
const orderData = [
    {
        id: 1,
        name: 'John 111Doe',
        email: 'john.doe@example.com',
        phone: '1234567890',
        address: '123 Main St, Anytown, USA'
      },
]
export function fetchData(tab) {
    return new Promise((resolve, reject)=>{
        const delay = 300 + Math.random() * 1000
        const success = Math.random() > 0.3
        setTimeout(()=>{
            if(!success){
                return reject('err')
            }
            resolve(tab === 'user' ? userData : orderData)
        },delay)
    }
)
}

let seq = 0;
export async function safeFech(tab,retry = 2) {
    const id = seq++
    try{
      const res = await fetchData(tab)
      return res;
    }catch(err){
        if(retry >0){
            return safeFech(tab,retry-1)
        }
        throw err;
    }

}

