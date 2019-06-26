import axios from 'axios'
import {API_URL} from '../../API_URL/API_URL'


export default async (limit = 100, arrayData = false) => {
    try {
        const res5 = await axios.get(`${API_URL}/getproduct`)
        console.log(res5.data);

        const data = []
        for (var i = 0; i < res5.data.length ; i++) {
            var row = null
            if(arrayData){
                row = [
                    res5.data[i].id,
                    res5.data[i].price,
                    res5.data[i].product_name,
                    res5.data[i].detail_product,
                    res5.data[i].image_product,
                ]
            } else {
                row = {
                    id: res5.data[i].id,
                    price: res5.data[i].price,
                    product_name: res5.data[i].product_name,
                    detail_product: res5.data[i].detail_product,
                    image_product: res5.data[i].image_product
                }
            }
            data.push(row)
        }
        console.log(data);

        return data
        
        




    } catch (e) {
        console.log(e);
        
    }
}