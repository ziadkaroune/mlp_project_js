import fs from 'fs'

export default async function dataFilter(DATA_PATH) {
        let data = [];
        if (!fs.existsSync(DATA_PATH)) {
            throw new Error(`Dataset file not found at path: ${DATA_PATH}`);
        }
        const rawdata =  fs.readFileSync(DATA_PATH , 'utf-8' );
        const dataClean = rawdata.split('\n').map((row)=> row.split(','));
        console.log("dataClean :" , dataClean.length);
           
        dataClean.map(row => (
            data.push({
                    symbole : row[1],
                    features : row.slice(2).map(el => Number(el)),
            })
        ))
            fs.mkdirSync('./data' , { recursive: true });    
            fs.writeFileSync("./data/cleandataset.json" , JSON.stringify(data , null , 2));
            console.log("cleandataset file is crearted");
            return data.length; 
}