
export default async function parseArgs(args , data = {}) {

    let parsedArgs = {...data};
    
        for (let i = 0; i < args.length; i++) {
            let tok = args[i];
            if (tok.startsWith('--')) {
               
                let key = tok.substring(2); 
                let value = args[i + 1];
                parsedArgs[key] = value;
                i++;
            }
            else{
                console.log("Unexpected argument:", tok);
            }
    }
    return parsedArgs;
}