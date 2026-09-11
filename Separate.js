
import fs from 'fs'


function readData(DATA_PATH) {

        if (!fs.existsSync(DATA_PATH)) {
            throw new Error(`Dataset file not found at path: ${DATA_PATH}`);
        }
        const rawdata =  fs.readFileSync(DATA_PATH , 'utf-8' );
        const dataClean = rawdata.split('\n').map((row)=> row.split(','));
        return dataClean;

}

async function dataSeparate(readData ,train_indices , predict_indices){
 
       

        let trainedData = [];
        let predictedData = [];

        for(let i = 0  ; i < train_indices.length ; i++){
                let y = train_indices[i];
                trainedData.push({symbol : readData[y][1] , features : readData[y].filter((_ , i) => i >= 2 ) });
        }
          for(let i = 0  ; i < predict_indices.length ; i++){
                let y = predict_indices[i];
                predictedData.push({features : readData[y].filter((_ , i) => i >= 2) });

        }
        fs.mkdirSync("./data" , {recursive : true});
        fs.writeFileSync("./data/trained_datset.json" , JSON.stringify(trainedData , null , 2) , 'utf-8');
        fs.writeFileSync("./data/predicted_datset.json" , JSON.stringify(predictedData , null , 2) , 'utf-8');
        console.log("trained_datset is created");
        console.log("predicted_datset is created");

  }

function seedAlgo(initValue , datasetsize) {
      
        const c = 1013904223;
        const a = 1664525;
        const m = Math.pow(2 , 32);
        let sequenceDat =  [];
        for(let i = 0 ; i < datasetsize ;i++)
                        sequenceDat.push(i);
     
     
        for (let i = datasetsize - 1 ; i > 0; i--) {
                const seed = (a * initValue + c) % m;
                initValue = seed;

                const uniqueNumber = seed % (i + 1);
                const temp = sequenceDat[i];
                sequenceDat[i] = sequenceDat[uniqueNumber];
                sequenceDat[uniqueNumber] = temp;
        }
   
        return sequenceDat;
}

 

(async() => {
    try {
        const DATSET_PATH = './data.csv'

        let seedvalue = 42;

        if(process.argv.length >= 3  )
                seedvalue = Number( process.argv[2]);
        else if(Number.isNaN(Number(seedvalue)))
                        console.log("Please provide a valid seed value as a command line argument.");
        console.log("seedvalue :" , seedvalue);
        const readDatae = readData(DATSET_PATH);
        const data_size = readDatae.length;

         const randomsequence = seedAlgo(seedvalue , data_size);
         //console.log("randomsequence :" , randomsequence);
 
         const train_indices = randomsequence.slice(0 , Math.floor(data_size * 0.6));
         const predict_indices = randomsequence.slice(Math.floor(data_size * 0.6));

        ;

        const separateDataset = await  dataSeparate(readDatae ,train_indices , predict_indices);

    }
    catch (err) {
        console.error(err);
    }
})()